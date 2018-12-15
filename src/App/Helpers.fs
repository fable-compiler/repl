[<AutoOpen>]
module Helpers

module Tooltip =

    open System.Text.RegularExpressions

    let private stringReplacePatterns =
        [ "&lt;", "<"
          "&gt;", ">"
          "&quot;", "\""
          "&apos;", "'"
          "&amp;", "&"
          "<summary>", "**Description**\n\n"
          "</summary>", "\n"
          "<para>", "\n"
          "</para>", "\n"
          "<remarks>", ""
          "</remarks>", "\n" ]

    let private regexReplacePatterns =
        let r pat = Regex(pat, RegexOptions.IgnoreCase)
        let code (strings : string array) =
            let str = strings.[0]
            if str.Contains("\n") then
                "```forceNoHighlight" + str + "```"
            else
                "`" + str + "`"
        let returns = Array.item 0 >> sprintf "\n**Returns**\n\n%s"
        let param (s: string[]) = sprintf "* `%s`: %s"(s.[0].Substring(1, s.[0].Length - 2)) s.[1]
        [ r"<c>((?:(?!<c>)(?!<\/c>)[\s\S])*)<\/c>", code
          r"""<see\s+cref=(?:'[^']*'|"[^"]*")>((?:(?!<\/see>)[\s\S])*)<\/see>""", code
          r"""<param\s+name=('[^']*'|"[^"]*")>((?:(?!<\/param>)[\s\S])*)<\/param>""", param
          r"""<typeparam\s+name=('[^']*'|"[^"]*")>((?:(?!<\/typeparam>)[\s\S])*)<\/typeparam>""", param
          r"""<exception\s+cref=('[^']*'|"[^"]*")>((?:(?!<\/exception>)[\s\S])*)<\/exception>""", param
          r"""<a\s+href=('[^']*'|"[^"]*")>((?:(?!<\/a>)[\s\S])*)<\/a>""", fun s -> (s.[0].Substring(1, s.[0].Length - 2))

          r"<returns>((?:(?!<\/returns>)[\s\S])*)<\/returns>", returns
        ]

    /// Helpers to create a new section in the markdown comment
    let private suffixXmlKey (tag : string) (value : string) (str : string) =
        match str.IndexOf(tag) with
        | x when x <> -1 ->
            let insertAt =
                if str.Chars(x - 1) = ' ' then
                    x - 1
                else
                    x
            str.Insert(insertAt, value)
        | _ -> str

    let private suffixTypeparam = suffixXmlKey "<typeparam" "\n**Type parameters**\n\n"
    let private suffixException = suffixXmlKey "<exception" "\n**Exceptions**\n\n"
    let private suffixParam = suffixXmlKey "<param" "\n**Parameters**\n\n"

    /// Replaces XML tags with Markdown equivalents.
    /// List of standard tags: https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/xml-documentation
    let replaceXml (str: string) : string =
        let str =
            str
            |> suffixTypeparam
            |> suffixException
            |> suffixParam

        let res =
            regexReplacePatterns
            |> List.fold (fun res (regex: Regex, formatter: string[] -> string) ->
                // repeat replacing with same pattern to handle nested tags, like `<c>..<c>..</c>..</c>`
                let rec loop res : string =
                    match regex.Match res with
                    | m when m.Success ->
                        m.Groups
                        |> Seq.cast<Group>
                        |> Seq.map (fun g -> g.Value)
                        |> Seq.toArray
                        |> Array.splitAt 1
                        |> function
                        | [| firstGroup |], otherGroups ->
                            loop <| res.Replace(firstGroup, formatter otherGroups)
                        | _ -> res
                    | _ -> res
                loop res
            ) str

        stringReplacePatterns
        |> List.fold (fun (res: string) (oldValue, newValue) ->
            res.Replace(oldValue, newValue)
        ) res

[<AutoOpen>]
module Helpers

open Feliz

type Html with 
    static member inline ofOption (element : ReactElement option) : ReactElement = 
        match element with
        | Some element -> 
            element
            
        | None -> 
            Html.none

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
        
[<RequireQualifiedAccess>]
module Translations =
    let enTranslations = dict["msg_iframe_loaded", "Iframe loaded"; 
        "win_header_console", "Console";
        "msg_initializing", "Initializing";
        "msg_repl_name", "Fable REPL";
        "msg_desktop_experience", "For best experience we recommend running the REPL on a desktop";
        "btn_continue", "Continue";
        "msg_gist_description", "Created with Fable REPL";
        "msg_compilation_failed", "Failed to compile";
        "msg_assemblies_load_failed", "Assemblies couldn't be loaded. Some firewalls prevent download of binary files, please check.";
        "msg_gist_token_invalid", "An error occured when creating the gist. Is the token valid?";
        "msg_gist_token_missing", "You need to register your GitHub API token before sharing to Gist";
        "msg_compilation_successful", "Compiled successfuly";
        "msg_shareable_url_ready_text", "Copy it from the address bar";
        "msg_shareable_url_ready_title", "Shareable link is ready";
        "msg_load_gist_error", "An error occured when loading the gist";
        "msg_update_url_failed", "An error occured when updating the URL";
        "msg_fatal_error", "Should not happen";
        "msg_live_sample_text", "Live sample";
        "msg_code_text", "Code";
        "msg_problems", "Problems";
        "msg_problems_info", "Problems: ";
        "msg_invalid_iframe_error", "`%A` is not a known value for an iframe message";
        "msg_collapse_sidebar", "Collapse sidebar";
        "msg_widget_general", "General";
        "msg_widget_samples", "Samples";
        "msg_widget_options", "Options";
        "msg_widget_statistics", "Statistics";
        "msg_widget_about", "About";
        "msg_found_a_bug", "Found a bug ?";
        "msg_general_compile_run_tooltip", "Compile and run (Alt+Enter)";
        "msg_general_compile_run_text", "Compile and run";
        "msg_general_refresh_sample_tooltip", "Refresh the live sample (without compiling)";
        "msg_general_refresh_sample_text", "Refresh the live sample";
        "msg_general_reset_repl_tooltip", "Reset the REPL, you will lose your current work";
        "msg_general_reset_repl_text", "Click here to reset";
        "msg_general_share_url_tooltip", "Share using the URL";
        "msg_general_share_url_text", "Share using the URL";
        "msg_general_share_gist_tooltip", "Share to Gist";
        "msg_general_share_gist_text", "Share to Gist";
        "msg_reset_confirmation_text", "Please, confirm to reset";
        "btn_confirm", "Confirm";
        "btn_cancel", "Cancel";
        "btn_save", "Save";
        "msg_options_editor_font_size", "Editors font size";
        "msg_options_editor_font_family", "Editors font family";
        "msg_options_size_small", "Small";
        "msg_options_size_medium", "Medium";
        "msg_options_size_large", "Large";
        "msg_options_programming_language", "Language";
        "msg_options_settings_optimize", "Optimize (experimental)";
        "msg_options_settings_debug", "Define DEBUG";
        "msg_options_settings_typed_arrays", "Typed Arrays";
        "msg_options_gist_token_delete", "Delete gist token";
        "msg_options_gist_token_githubtoken", "Github token";
        "msg_options_gist_token_githubtoken_create", "  (Create)";
        "msg_options_gist_token_gist_scope", "Token with gist scope";
        "msg_samples_refresh_samples", "Refresh samples";
        "msg_stats_steps", "Steps";
        "msg_stats_milliseconds_short", "ms";
        "msg_options_size_small", "Small";
        "msg_options_size_small", "Small"]

    let translations = dict["en", enTranslations]
    let [<Literal>]defaultLanguage = "en"
    let selectedLanguage = Browser.Navigator.navigator.language |> Option.defaultValue defaultLanguage
    let languageCode = selectedLanguage.Substring(0, 2)
    let translation = if translations.ContainsKey languageCode then translations[languageCode] else translations[defaultLanguage]

    let msg_iframe_loaded = translation["msg_iframe_loaded"]
    let win_header_console = translation["win_header_console"]
    let msg_initializing = translation["msg_initializing"]
    let msg_repl_name = translation["msg_repl_name"]
    let msg_desktop_experience = translation["msg_desktop_experience"]
    let btn_continue = translation["btn_continue"]
    let msg_gist_description = translation["msg_gist_description"]
    let msg_compilation_failed = translation["msg_compilation_failed"]
    let msg_assemblies_load_failed = translation["msg_assemblies_load_failed"]
    let msg_gist_token_invalid = translation["msg_gist_token_invalid"]
    let msg_gist_token_missing = translation["msg_gist_token_missing"]
    let msg_compilation_successful = translation["msg_compilation_successful"]
    let msg_shareable_url_ready_text = translation["msg_shareable_url_ready_text"]
    let msg_shareable_url_ready_title = translation["msg_shareable_url_ready_title"]
    let msg_load_gist_error = translation["msg_load_gist_error"]
    let msg_update_url_failed = translation["msg_update_url_failed"]
    let msg_fatal_error = translation["msg_fatal_error"]
    let msg_live_sample_text = translation["msg_live_sample_text"]
    let msg_code_text = translation["msg_code_text"]
    let msg_problems = translation["msg_problems"]
    let msg_problems_info = translation["msg_problems_info"]
    let msg_invalid_iframe_error = translation["msg_invalid_iframe_error"]
    let msg_collapse_sidebar = translation["msg_collapse_sidebar"]
    let msg_widget_general = translation["msg_widget_general"]
    let msg_widget_samples = translation["msg_widget_samples"]
    let msg_widget_options = translation["msg_widget_options"]
    let msg_widget_statistics = translation["msg_widget_statistics"]
    let msg_widget_about = translation["msg_widget_about"]
    let msg_found_a_bug = translation["msg_found_a_bug"]
    let msg_general_compile_run_tooltip = translation["msg_general_compile_run_tooltip"]
    let msg_general_compile_run_text = translation["msg_general_compile_run_text"]
    let msg_general_refresh_sample_tooltip = translation["msg_general_refresh_sample_tooltip"]
    let msg_general_refresh_sample_text = translation["msg_general_refresh_sample_text"]
    let msg_general_reset_repl_tooltip = translation["msg_general_reset_repl_tooltip"]
    let msg_general_reset_repl_text = translation["msg_general_reset_repl_text"]
    let msg_general_share_url_tooltip = translation["msg_general_share_url_tooltip"]
    let msg_general_share_url_text = translation["msg_general_share_url_text"]
    let msg_general_share_gist_tooltip = translation["msg_general_share_gist_tooltip"]
    let msg_general_share_gist_text = translation["msg_general_share_gist_text"]
    let msg_reset_confirmation_text = translation["msg_reset_confirmation_text"]
    let btn_confirm = translation["btn_confirm"]
    let btn_cancel = translation["btn_cancel"]
    let btn_save = translation["btn_save"]
    let msg_options_editor_font_size = translation["msg_options_editor_font_size"]
    let msg_options_size_small = translation["msg_options_size_small"]
    let msg_options_size_medium = translation["msg_options_size_medium"]
    let msg_options_size_large = translation["msg_options_size_large"]
    let msg_options_editor_font_family = translation["msg_options_editor_font_family"]
    let msg_options_programming_language = translation["msg_options_programming_language"]
    let msg_options_settings_optimize = translation["msg_options_settings_optimize"]
    let msg_options_settings_debug = translation["msg_options_settings_debug"]
    let msg_options_settings_typed_arrays = translation["msg_options_settings_typed_arrays"]
    let msg_options_gist_token_delete = translation["msg_options_gist_token_delete"]
    let msg_options_gist_token_githubtoken = translation["msg_options_gist_token_githubtoken"]
    let msg_options_gist_token_githubtoken_create = translation["msg_options_gist_token_githubtoken_create"]
    let msg_options_gist_token_gist_scope = translation["msg_options_gist_token_gist_scope"]
    let msg_samples_refresh_samples = translation["msg_samples_refresh_samples"]
    let msg_stats_steps = translation["msg_stats_steps"]
    let msg_stats_milliseconds_short = translation["msg_stats_milliseconds_short"]

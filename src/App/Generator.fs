[<RequireQualifiedAccess>]
module Fable.Repl.Generator

open System.Text.RegularExpressions
open Fable.Core.JsInterop
open Fable.Import.Browser
open Shared

let defaultHtmlCode =
    """
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    </head>
    <body>
    </body>
</html>
    """.Trim()

let private bubbleMouseEvents =
    """
<body>
    <script>
    (function () {
        var origin = window.location.origin;
        document.addEventListener("mousemove", function (ev) {
            window.parent.postMessage({
                type: "mousemove",
                x: ev.screenX,
                y: ev.screenY
            }, origin);
        });

        document.addEventListener("mouseup", function (ev) {
            window.parent.postMessage({
                type: "mouseup"
            }, origin);
        });

        // Tab key presses change focus to JS code view and cause glitches
        document.addEventListener("keydown", function (ev) {
            if (ev.keyCode === 9) ev.preventDefault();
        });
    })();
    </script>
    """.Trim()

let private bundleScriptTag code = sprintf "<script type=\"module\">\n%s\n</script>\n</body>" code

type MimeType =
    | Html
    | JavaScript

let generateBlobURL content mimeType =
    let parts = [ content ] |> unbox<ResizeArray<obj>>
    let options =
        jsOptions<BlobPropertyBag>(fun o ->
            o.``type`` <-
                match mimeType with
                | Html -> Some "text/html"
                | JavaScript -> Some "text/javascript")
    URL?createObjectURL(Blob.Create(parts, options))

let generateHtmlBlobUrl (htmlCode : string) (jsCode: string) =
    // We need to convert import paths to absolute urls and add .js at the end
    let reg = Regex(@"^import (.*)""(fable-core|fable-repl-lib)(.*)""(.*)$", RegexOptions.Multiline)
    let jsCode = reg.Replace(jsCode, fun m ->
        let baseDir =
            if m.Groups.[2].Value = "fable-repl-lib"
            then Literals.FABLE_REPL_LIB_DIR
            else Literals.FABLE_CORE_DIR
        sprintf "import %s\"%s%s.js\"%s" m.Groups.[1].Value baseDir m.Groups.[3].Value m.Groups.[4].Value)
    // Replacement function in JS is causing problems with $ symbol
    let i = htmlCode.IndexOf("</body>")
    let code =
        htmlCode.[..i-1]
        + bubbleMouseEvents
        + "<script type=\"module\">\n" + jsCode + "\n</script>\n"
        + htmlCode.[i..]
    generateBlobURL code Html

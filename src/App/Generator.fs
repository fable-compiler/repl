[<RequireQualifiedAccess>]
module Fable.Repl.Generator

open System.Text.RegularExpressions
open Fable.Core.JsInterop
open Fable.Import.Browser
open Prelude

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
        var nativeConsoleLog = console.log;
        var nativeConsoleWarn = console.warn;
        var nativeConsoleError = console.error;
        var origin = window.location.origin;

        console.log = function() {
            var firstArg = arguments[0];
            if (arguments.length === 1 && typeof firstArg === 'string') {
                parent.postMessage({
                    type: 'console_log',
                    content: firstArg
                }, origin);
            }
            nativeConsoleLog.apply(this, arguments);
        };

        console.warn = function() {
            var firstArg = arguments[0];
            if (arguments.length === 1 && typeof firstArg === 'string') {
                parent.postMessage({
                    type: 'console_warn',
                    content: firstArg
                }, origin);
            }
            nativeConsoleWarn.apply(this, arguments);
        };

        console.error = function() {
            var firstArg = arguments[0];
            if (arguments.length === 1 && typeof firstArg === 'string') {
                parent.postMessage({
                    type: 'console_error',
                    content: firstArg
                }, origin);
            }
            nativeConsoleError.apply(this, arguments);
        };

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

let private bundleLinkTag style =  sprintf """<link rel="stylesheet" type="text/css" href="%s">""" style

type MimeType =
    | Html
    | JavaScript
    | Css

let generateBlobURL content mimeType : string =
    let parts = new ResizeArray<obj>([| content |])
    let options =
        jsOptions<BlobPropertyBag>(fun o ->
            o.``type`` <-
                match mimeType with
                | Html -> Some "text/html"
                | JavaScript -> Some "text/javascript"
                | Css -> Some "text/css")
    URL?createObjectURL(Blob.Create(parts, options))

let private addLinkTag (cssCode : string) =
    if cssCode <> "" then
        generateBlobURL cssCode Css
        |> bundleLinkTag
    else
        ""

let generateHtmlBlobUrl (htmlCode : string) (cssCode : string) (jsCode : string) =
    // We need to convert import paths to absolute urls and add .js at the end if necessary
    let reg = Regex(@"^import (.*)""(fable-library|fable-repl-lib)(.*)""(.*)$", RegexOptions.Multiline)
    let jsCode = reg.Replace(jsCode, fun m ->
        let baseDir =
            if m.Groups.[2].Value = "fable-repl-lib"
            then Literals.FABLE_REPL_LIB_DIR
            else Literals.FABLE_LIBRARY_DIR
        let filename = m.Groups.[3].Value
        sprintf "import %s\"%s%s%s\"%s"
            m.Groups.[1].Value baseDir filename
            (if filename.EndsWith(".js") then "" else ".js")
            m.Groups.[4].Value)
    let htmlCode = htmlCode.Replace("__HOST__", Literals.HOST)
    // Replacement function in JS is causing problems with $ symbol
    let i = htmlCode.IndexOf("</body>")
    let code =
        htmlCode.[..i-1]
        + bubbleMouseEvents
        + "<script type=\"module\">\n" + jsCode + "\n</script>\n"
        + addLinkTag cssCode
        + htmlCode.[i..]
    generateBlobURL code Html

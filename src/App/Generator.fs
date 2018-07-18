[<RequireQualifiedAccess>]
module Generator

open System.Text.RegularExpressions
open Fable.Core.JsInterop
open Fable.Import.Browser

let [<Literal>] HOST =
#if DEBUG
    "http://localhost:8080"
#else
    "http://fable.io/repl2"
#endif

let FABLE_CORE_DIR = HOST + "/js/repl/fable-core"

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
    let reg = Regex(@"^import (.*)""fable-core(.*)""(.*)$", RegexOptions.Multiline)
    let jsCode = reg.Replace(jsCode, sprintf "import $1\"%s$2.js\"$3" FABLE_CORE_DIR)
    // Replacement function in JS is causing problems with $ symbol
    let i = htmlCode.IndexOf("</body>")
    let code =
        htmlCode.[..i-1]
        + bubbleMouseEvents
        + "<script type=\"module\">\n" + jsCode + "\n</script>\n"
        + htmlCode.[i..]
    generateBlobURL code Html

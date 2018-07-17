[<RequireQualifiedAccess>]
module Generator

open Fable.Core.JsInterop
open Fable.Import.Browser

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

#if DEBUG
let private requireConfig =
    """
<body>
    <script src="http://localhost:8080/libs/requirejs/require.js"></script>
    <script>
        require.config({
        paths: {
            'fable-core': 'http://localhost:8080/js/repl/fable-core'
        }
        });
    </script>
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
#else
let private requireConfig =
    """
<body>
    <script src="http://fable.io/repl/libs/requirejs/require.js"></script>
    <script>
        require.config({
        paths: {
            'fable-core': 'http://fable.io/repl/js/repl/fable-core'
        }
        });
    </script>
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
#endif

let private bundleScriptTag url = sprintf "<script src=\"%s\"></script>\n</body>" url

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
                | JavaScript -> Some "text/javascript"
        )

    Blob.Create(parts, options)
    |> URL.createObjectURL

let generateHtmlBlobUrl (htmlCode : string) (scriptUrl : string) =
    let code =
        htmlCode
            .Replace("<body>", requireConfig)
            .Replace("</body>", bundleScriptTag scriptUrl)
    generateBlobURL code Html

// source: https://github.com/ionide/ionide-web/blob/master/src/editor.fsx

module Fable.Repl.Editor

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.PowerPack
open Fable.JS

//---------------------------------------------------
// Features providers
//---------------------------------------------------

let markEditorErrors (errors: Error[]) (model: monaco.editor.IModel) =
    let markers =
        errors |> Array.map (fun err ->
            jsOptions<monaco.editor.IMarkerData>(fun m ->
                m.startLineNumber <- err.StartLineAlternate
                m.endLineNumber <- err.EndLineAlternate
                m.startColumn <- err.StartColumn + 1
                m.endColumn <- err.EndColumn + 1
                m.message <- err.Message
                m.severity <-
                    match err.IsWarning with
                    | false -> monaco.Severity.Error
                    | true -> monaco.Severity.Warning))
    monaco.editor.Globals.setModelMarkers(model, "test", markers)

let convertGlyph glyph =
    match glyph with
    | Glyph.Class -> monaco.languages.CompletionItemKind.Class
    | Glyph.Enum -> monaco.languages.CompletionItemKind.Enum
    | Glyph.Value -> monaco.languages.CompletionItemKind.Value
    | Glyph.Variable -> monaco.languages.CompletionItemKind.Variable
    | Glyph.Interface -> monaco.languages.CompletionItemKind.Interface
    | Glyph.Module -> monaco.languages.CompletionItemKind.Module
    | Glyph.Method -> monaco.languages.CompletionItemKind.Method
    | Glyph.Property -> monaco.languages.CompletionItemKind.Property
    | Glyph.Field -> monaco.languages.CompletionItemKind.Field
    | Glyph.Function -> monaco.languages.CompletionItemKind.Function
    | Glyph.Error | Glyph.Event -> monaco.languages.CompletionItemKind.Text

let createCompletionProvider getCompletions =
    { new monaco.languages.CompletionItemProvider with
        member __.provideCompletionItems(model, position, _token) =
            async {
                let lineText = model.getLineContent(position.lineNumber)
                let! completions = getCompletions position.lineNumber position.column lineText
                return completions |> Array.map (fun (c: Completion) ->
                    jsOptions<monaco.languages.CompletionItem>(fun ci ->
                        ci.label <- c.Name
                        ci.kind <- convertGlyph c.Glyph
                        // ci.insertText <- Some !^d.ReplacementText
                    ))
            } |> Async.StartAsPromise |> U4.Case2

        member __.resolveCompletionItem(item, _token) = !^item

        member __.triggerCharacters
            with get () = Some [|"."|]
            and set _ = ()
    }

let createTooltipProvider getTooltip =
    { new monaco.languages.HoverProvider with
        member __.provideHover(doc, pos, _ ) =
            async {
                match doc.getWordAtPosition !!pos |> Option.ofObj with
                | Some w ->
                    let lineText = doc.getLineContent(pos.lineNumber)
                    let! lines = getTooltip pos.lineNumber pos.column lineText
                    let r: monaco.IRange = jsOptions(fun r ->
                        r.startColumn <- w.startColumn
                        r.endColumn <- w.endColumn
                        r.startLineNumber <- float pos.lineNumber
                        r.endLineNumber <- float pos.lineNumber
                    )
                    return jsOptions<monaco.languages.Hover>(fun h ->
                        h.contents <- lines |> Array.map (fun line ->
                            jsOptions<monaco.IMarkdownString>(fun s ->
                                s.value <- line))
                        h.range <- r
                    )
                | None -> return createEmpty<monaco.languages.Hover>
            } |> Async.StartAsPromise |> U2.Case2
    }

//---------------------------------------------------
// Register providers
//---------------------------------------------------
let registerCompletionProvider getCompletions =
    let provider = createCompletionProvider getCompletions
    monaco.languages.Globals.registerCompletionItemProvider("fsharp", provider) |> ignore

let registerTooltipProvider getTooltip =
    let provider = createTooltipProvider getTooltip
    monaco.languages.Globals.registerHoverProvider("fsharp", provider) |> ignore

//---------------------------------------------------
// Create editor
//---------------------------------------------------
let createEditor domElement =
    let options = jsOptions<monaco.editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions = jsOptions<monaco.editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "fsharp"
        o.fontSize <- Some 14.
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
    )
    let services = createEmpty<monaco.editor.IEditorOverrideServices>
    monaco.editor.Globals.create(domElement, options, services)

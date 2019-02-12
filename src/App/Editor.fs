// source: https://github.com/ionide/ionide-web/blob/master/src/editor.fsx

module Fable.Repl.Editor

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.PowerPack
open Fable.Standalone

//---------------------------------------------------
// Features providers
//---------------------------------------------------

/// **Description**
/// Convert `Fable.Standalone.Glyph` type into the `Monaco.Languages.CompletionItemKind`
/// **Parameters**
///   * `glyph` - parameter of type `Glyph`
///
/// **Output Type**
///   * `Monaco.Languages.CompletionItemKind`
///
/// **Exceptions**
///
let convertGlyph glyph =
    match glyph with
    | Glyph.Class -> Monaco.Languages.CompletionItemKind.Class
    | Glyph.Enum -> Monaco.Languages.CompletionItemKind.Enum
    | Glyph.Value -> Monaco.Languages.CompletionItemKind.Value
    | Glyph.Variable -> Monaco.Languages.CompletionItemKind.Variable
    | Glyph.Interface -> Monaco.Languages.CompletionItemKind.Interface
    | Glyph.Module -> Monaco.Languages.CompletionItemKind.Module
    | Glyph.Method -> Monaco.Languages.CompletionItemKind.Method
    | Glyph.Property -> Monaco.Languages.CompletionItemKind.Property
    | Glyph.Field -> Monaco.Languages.CompletionItemKind.Field
    | Glyph.Function -> Monaco.Languages.CompletionItemKind.Function
    | Glyph.Error | Glyph.Event -> Monaco.Languages.CompletionItemKind.Text


let inline completionList suggestions =
    jsOptions<Monaco.Languages.CompletionList>(fun o ->
        o.suggestions <- suggestions)

let createCompletionProvider getCompletions =
    { new Monaco.Languages.CompletionItemProvider with
        member __.provideCompletionItems(model, position, _context, _token) =
            async {
                let lineText = model.getLineContent(position.lineNumber)
                let! completions = getCompletions position.lineNumber position.column lineText
                return
                    completions
                    |> Array.map (fun (c: Fable.Standalone.Completion) ->
                        jsOptions<Monaco.Languages.CompletionItem>(fun ci ->
                            ci.label <- c.Name
                            ci.kind <- convertGlyph c.Glyph
                            ci.insertText <- Some !^c.Name
                        ))
                    |> completionList
            }
            |> Async.StartAsPromise
            |> U2.Case2

        member __.resolveCompletionItem(_model, _position, item, _token) = !^item

        member __.triggerCharacters = [|"."|]
    }

let createDefinitionProvider getDeclarationLocation =
    { new Monaco.Languages.DefinitionProvider with
        member __.provideDefinition(doc, pos, _) =
            async {
                let lineText = doc.getLineContent(pos.lineNumber)
                let! loc = getDeclarationLocation pos.lineNumber pos.column lineText
                match loc with
                | Some(uri, startLine, startColumn, endLine, endColumn) ->
                    return jsOptions(fun (loc2: Monaco.Languages.Location) ->
                        loc2.uri <- uri
                        loc2.range <- jsOptions(fun r ->
                            r.startLineNumber <- startLine
                            r.startColumn <- startColumn + 1
                            r.endLineNumber <- endLine
                            r.endColumn <- endColumn + 1
                    ))
                | None -> return null
            }
            |> Async.StartAsPromise
            |> U2.Case2
    }

let createTooltipProvider getTooltip =
    { new Monaco.Languages.HoverProvider with
        member __.provideHover(doc, pos, _ ) =
            async {
                match doc.getWordAtPosition pos |> Option.ofObj with
                | Some w ->
                    let lineText = doc.getLineContent(pos.lineNumber)
                    let! lines = getTooltip pos.lineNumber pos.column lineText
                    let r: Monaco.IRange = jsOptions(fun r ->
                        r.startColumn <- w.startColumn
                        r.endColumn <- w.endColumn
                        r.startLineNumber <- pos.lineNumber
                        r.endLineNumber <- pos.lineNumber
                    )
                    return jsOptions<Monaco.Languages.Hover>(fun h ->
                        h.contents <-
                            lines
                            |> Seq.map Tooltip.replaceXml
                            |> Seq.mapi (fun i line ->
                                jsOptions<Monaco.IMarkdownString>(fun s ->
                                    if i = 0 then
                                        s.value <- "```fsharp\n" + line + "\n```\n"
                                    else s.value <- line ))
                            |> Seq.toArray
                        h.range <- Some r
                    )
                | None -> return createEmpty<Monaco.Languages.Hover>
            }
            |> Async.StartAsPromise
            |> U2.Case2
    }

/// **Description**
/// Map the Fable errors into Marker type used by Monaco
/// **Parameters**
///   * `errors` - parameter of type `Error []`
///
/// **Output Type**
///   * `ResizeArray<Monaco.Editor.IMarkerData>`
///
/// **Exceptions**
///
let mapErrorToMarker (errors: Error[]) =
    errors |> Array.map (fun err ->
        jsOptions<Monaco.Editor.IMarkerData>(fun m ->
            m.startLineNumber <- err.StartLineAlternate
            m.endLineNumber <- err.EndLineAlternate
            m.startColumn <- err.StartColumn + 1
            m.endColumn <- err.EndColumn + 1
            m.message <- err.Message
            m.severity <-
                match err.IsWarning with
                | false -> Monaco.MarkerSeverity.Error
                | true -> Monaco.MarkerSeverity.Warning))

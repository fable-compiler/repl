// source: https://github.com/ionide/ionide-web/blob/master/src/editor.fsx

module Fable.Editor.Main

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.PowerPack
open Fable.JS.Interfaces

//---------------------------------------------------
// Features providers
//---------------------------------------------------

let [<Literal>] FILE_NAME = "test.fs"

let FableREPL: IFableManager = importDefault "fable-repl"

let getChecker(f: string[] -> (string->byte[]) -> IChecker): JS.Promise<IChecker> = importMember "./util.js"
let runAst(jsonAst: string): string * string = importMember "./util.js"

let mutable fcsChecker: IChecker option = None
let mutable fcsResults: IParseResults option = None

let compileAndRunCurrentResults (ed: monaco.editor.IStandaloneCodeEditor) =
    match fcsChecker with
    | None -> "", ""
    | Some fcsChecker ->
        let content = ed.getModel().getValue(monaco.editor.EndOfLinePreference.TextDefined, true)
        let res = FableREPL.ParseFSharpProject(fcsChecker, FILE_NAME, content)
        let com = FableREPL.CreateCompiler("fable-core")
        let jsonAst = FableREPL.CompileToBabelJsonAst(com, res, FILE_NAME)
        runAst jsonAst

let convertGlyph glyph =
    match glyph with
    | Glyph.Class ->
        monaco.languages.CompletionItemKind.Class
    | Glyph.Enum ->
        monaco.languages.CompletionItemKind.Enum
    | Glyph.Value ->
        monaco.languages.CompletionItemKind.Value
    | Glyph.Variable ->
        monaco.languages.CompletionItemKind.Variable
    | Glyph.Interface ->
        monaco.languages.CompletionItemKind.Interface
    | Glyph.Module ->
        monaco.languages.CompletionItemKind.Module
    | Glyph.Method ->
        monaco.languages.CompletionItemKind.Method
    | Glyph.Property ->
        monaco.languages.CompletionItemKind.Property
    | Glyph.Field ->
        monaco.languages.CompletionItemKind.Field
    | Glyph.Function ->
        monaco.languages.CompletionItemKind.Function
    | Glyph.Error | Glyph.Event ->
        monaco.languages.CompletionItemKind.Text

let completionProvider = {
    new monaco.languages.CompletionItemProvider with

        member __.provideCompletionItems(model, position, token) =
           async {
                let items = ResizeArray()
                match fcsResults with
                | Some res ->
                    let! decls =
                        let lineText = model.getLineContent(position.lineNumber)
                        FableREPL.GetCompletionsAtLocation(res, position.lineNumber, position.column, lineText)
                    for d in decls do
                        let ci = createEmpty<monaco.languages.CompletionItem>
                        ci.kind <- convertGlyph d.Glyph
                        ci.label <- d.Name
                        // ci.insertText <- Some !^d.ReplacementText
                        items.Add(ci)
                | None -> ()
                return items
            } |> Async.StartAsPromise |> U4.Case2

        member __.resolveCompletionItem(item, token) =
            !^item
            // promise {
            //     let! o = helptext { Symbol = item.label }
            //     let res = (o.Data.Overloads |> Array.fold (fun acc n -> (n |> Array.toList) @ acc ) []).Head
            //     item.documentation <- Some res.Comment
            //     item.detail <- Some res.Signature
            //     return item
            // } |> U2.Case2

        member __.triggerCharacters
            with get () = ResizeArray(["."]) |> Some
            and set v = ()
}

let createTooltipProvider() =
    { new monaco.languages.HoverProvider with
        member __.provideHover(doc, pos, _ ) =
            async {
                let w = doc.getWordAtPosition !!pos |> Option.ofObj
                match w, fcsResults with
                | Some w, Some res ->
                    let lineText = doc.getLineContent(pos.lineNumber)
                    let! lines = FableREPL.GetToolTipText(res, pos.lineNumber, pos.column, lineText)
                    let r: monaco.IRange = jsOptions(fun r ->
                        r.startColumn <- w.startColumn
                        r.endColumn <- w.endColumn
                        r.startLineNumber <- float pos.lineNumber
                        r.endLineNumber <- float pos.lineNumber
                    )
                    return jsOptions<monaco.languages.Hover>(fun h ->
                        h.contents <- ResizeArray (!!lines: monaco.MarkedString[])
                        h.range <- r
                    )
                | _ -> return createEmpty<monaco.languages.Hover>
            } |> Async.StartAsPromise |> U2.Case2
    }

let parseEditor (model: monaco.editor.IModel) =
    let checker =
        match fcsChecker with
        | None ->
            getChecker (fun x y -> FableREPL.CreateChecker(x, y))
            |> Promise.map (fun c -> fcsChecker <- Some c; c)
        | Some checker ->
            Promise.lift checker
    checker |> Promise.iter (fun checker ->
        let content = model.getValue (monaco.editor.EndOfLinePreference.TextDefined, true)
        let res = FableREPL.ParseFSharpProject(checker, FILE_NAME, content)
        fcsResults <- Some res
        let markers = ResizeArray()
        for err in res.Errors do
            let m = createEmpty<monaco.editor.IMarkerData>
            m.startLineNumber <- err.StartLineAlternate
            m.endLineNumber <- err.EndLineAlternate
            m.startColumn <- err.StartColumn + 1
            m.endColumn <- err.EndColumn + 1
            m.message <- err.Message
            m.severity <-
                match err.IsWarning with
                | false -> monaco.Severity.Error
                | true -> monaco.Severity.Warning
            markers.Add(m)
        monaco.editor.Globals.setModelMarkers(model, "test", markers)
    )

//---------------------------------------------------
// Register providers
//---------------------------------------------------
monaco.languages.Globals.registerCompletionItemProvider("fsharp", completionProvider) |> ignore
monaco.languages.Globals.registerHoverProvider("fsharp", createTooltipProvider()) |> ignore

//---------------------------------------------------
// Create editor
//---------------------------------------------------
let create(domElement) =

    let options = jsOptions<monaco.editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions =  jsOptions<monaco.editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "fsharp"
        o.fontSize <- Some 14.
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
    )

    let services = createEmpty<monaco.editor.IEditorOverrideServices>
    let ed = monaco.editor.Globals.create(domElement, options, services)
    let md = ed.getModel()

    Util.createObservable(fun trigger ->
        md.onDidChangeContent(fun _ -> trigger md) |> ignore)
    |> Util.debounce 1000
    |> Observable.add parseEditor

    // Try to delegate this to Elmish app
    // ed.addCommand(monaco.KeyMod.Alt ||| int monaco.KeyCode.Enter, (fun () ->
    //     let content = md.getValue (monaco.editor.EndOfLinePreference.TextDefined, true)
    //     compileAndRunCurrentResults()
    // )) |> ignore

    ed

// [<ExportDefault>]
let fableEditor =
    { new Interfaces.IExports with

        member __.CreateFSharpEditor domElement = create domElement

        member __.ParseEditor editor = parseEditor editor

        member __.CompileAndRunCurrentResults ed = compileAndRunCurrentResults ed }

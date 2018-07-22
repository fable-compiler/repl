module Fable.Repl.Worker

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.JS
open Shared

let [<Global>] self: Browser.Worker = jsNative
let [<Global>] importScripts(path: string): unit = jsNative

importScripts Literals.REPL_BUNDLE_URL

let private getAssemblyReader(_refs: string[]): JS.Promise<string->byte[]> = importMember "./util.js"
let private compileBabelAst(_ast: obj): string = importMember "./util.js"

let init() = async {
    let Fable: IFableManager = self?Fable?init()
    let worker = ObservableWorker<WorkerRequest>(self, WorkerRequest.Decoder, name="WORKER")
    try
        // Create checker
        let refs = Metadata.references false
        let! reader = getAssemblyReader refs |> Async.AwaitPromise
        let checker = Fable.CreateChecker(refs, reader) // Highly computing-expensive
        let mutable currentResults: IParseResults option = None

        // Send ready message and start listening
        worker.Post Loaded
        worker |> Observable.add (function
            | ParseCode fsharpCode ->
                let res = Fable.ParseFSharpProject(checker, Literals.FILE_NAME, fsharpCode)
                currentResults <- Some res
                ParsedCode res.Errors |> worker.Post
            | CompileCode fsharpCode ->
                let parseResults = Fable.ParseFSharpProject(checker, Literals.FILE_NAME, fsharpCode)
                let babelAst = Fable.CompileToBabelAst("fable-core", parseResults, Literals.FILE_NAME, false)
                compileBabelAst babelAst |> CompiledCode |> worker.Post
            | GetTooltip(line, col, lineText) ->
                async {
                    let! tooltipLines =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetToolTipText(res, line, col, lineText)
                    FoundTooltip tooltipLines |> worker.Post
                } |> Async.StartImmediate
            | GetCompletions(line, col, lineText) ->
                async {
                    let! completions =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetCompletionsAtLocation(res, line, col, lineText)
                    completions |> Array.map (fun c -> c.Name, string c.Glyph) |> FoundCompletions |> worker.Post
                } |> Async.StartImmediate
        )
    with _ ->
        worker.Post LoadFailed
}

init() |> Async.StartImmediate
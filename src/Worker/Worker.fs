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

let measureTime msg f arg =
    let before: float = self?performance?now()
    let res = f arg
    let after: float = self?performance?now()
    Browser.console.log((msg + " (ms)").PadRight(25), after - before)
    res

let init() = async {
    let Fable: IFableManager = self?Fable?init()
    let worker = ObservableWorker<WorkerRequest>(self, WorkerRequest.Decoder, name="WORKER")
    try
        // Create checker
        let refs = [| yield! Metadata.references false; yield "Fable.Repl.Lib" |]
        let! reader = getAssemblyReader refs |> Async.AwaitPromise
        let checker = measureTime "FCS checker" Fable.CreateChecker (refs, reader) // Highly computing-expensive
        let mutable currentResults: IParseResults option = None

        // Send ready message and start listening
        worker.Post Loaded
        worker |> Observable.add (function
            | ParseCode fsharpCode ->
                let res = Fable.ParseFSharpProject(checker, Literals.FILE_NAME, fsharpCode)
                currentResults <- Some res
                ParsedCode res.Errors |> worker.Post
            | CompileCode(fsharpCode, optimize) ->
                let parseResults = measureTime "FCS parsing" Fable.ParseFSharpProject (checker, Literals.FILE_NAME, fsharpCode)
                let babelAst = measureTime "Fable transform" Fable.CompileToBabelAst ("fable-core", parseResults, Literals.FILE_NAME, optimize)
                let jsCode = measureTime "Babel generation" compileBabelAst babelAst
                CompiledCode jsCode |> worker.Post
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
                    FoundCompletions completions |> worker.Post
                } |> Async.StartImmediate
        )
    with _ ->
        worker.Post LoadFailed
}

init() |> Async.StartImmediate
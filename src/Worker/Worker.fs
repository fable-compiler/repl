module Fable.Repl.Worker

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Repl
open Shared

let [<Global>] self: Browser.Worker = jsNative
let [<Global>] importScripts(path: string): unit = jsNative

importScripts Literals.REPL_BUNDLE_URL

let private getAssemblyReader(_refs: string[]): JS.Promise<string->byte[]> = importMember "./util.js"
let private compileBabelAst(_ast: obj): string = importMember "./util.js"
let resolveLibCall(entityName: string): (string*string) option = importMember "./util.js"

let measureTime msg f arg =
    let before: float = self?performance?now()
    let res = f arg
    let after: float = self?performance?now()
    res, after - before

let init() = async {
    let Fable: IFableManager = self?Fable?init()
    let worker = ObservableWorker<WorkerRequest>(self, WorkerRequest.Decoder, name="WORKER")
    try
        // Create checker
        let refs = [| yield! Metadata.references false; yield "Fable.Repl.Lib" |]
        let! reader = getAssemblyReader refs |> Async.AwaitPromise
        let (checker, checkerTime) = measureTime "FCS checker" Fable.CreateChecker (refs, reader, None) // Highly computing-expensive
        let mutable currentResults: IParseResults option = None

        // Send ready message and start listening
        worker.Post Loaded
        worker |> Observable.add (function
            | ParseCode fsharpCode ->
                let res = Fable.ParseFSharpScript(checker, Literals.FILE_NAME, fsharpCode)
                currentResults <- Some res
                ParsedCode res.Errors |> worker.Post
            | CompileCode(fsharpCode, optimize) ->
                try
                    let (parseResults, parsingTime) = measureTime "FCS parsing" Fable.ParseFSharpScript (checker, Literals.FILE_NAME, fsharpCode)
                    let (res, fableTransformTime) = measureTime "Fable transform" (fun () ->
                        Fable.CompileToBabelAst("fable-core", parseResults, Literals.FILE_NAME, optimize, resolveLibCall)) ()
                    let (jsCode, babelTime) = measureTime "Babel generation" compileBabelAst res.BabelAst

                    let stats : CompileStats =
                        { FCS_checker = checkerTime
                          FCS_parsing = parsingTime
                          Fable_transform = fableTransformTime
                          Babel_generation = babelTime }

                    let errors = Array.append (parseResults.Errors) res.FableErrors
                    if Array.isEmpty errors then
                        CompilationSucceed (jsCode, stats) |> worker.Post
                    else
                        CompilationFailed (errors, stats) |> worker.Post
                with er ->
                    CompilerCrashed er.Message |> worker.Post
            | GetTooltip(line, col, lineText) ->
                async {
                    let! tooltipLines =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetToolTipText(res, int line, int col, lineText)
                    FoundTooltip tooltipLines |> worker.Post
                } |> Async.StartImmediate
            | GetCompletions(line, col, lineText) ->
                async {
                    let! completions =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetCompletionsAtLocation(res, int line, int col, lineText)
                    FoundCompletions completions |> worker.Post
                } |> Async.StartImmediate
            | GetDeclarationLocation(line, col, lineText) ->
                async {
                    let! result =
                        match currentResults with
                        | None -> async.Return None
                        | Some res -> Fable.GetDeclarationLocation(res, int line, int col, lineText)
                    result |> Option.map (fun x ->
                        x.StartLine, x.StartColumn, x.EndLine, x.EndColumn)
                    |> FoundDeclarationLocation |> worker.Post
                } |> Async.StartImmediate
        )
    with _ ->
        worker.Post LoadFailed
}

init() |> Async.StartImmediate

module Fable.Repl.Worker

open Fable.Core
open Fable.Core.JsInterop
open Fable.Import
open Fable.Repl
open Shared

let [<Global>] self: Browser.Worker = jsNative
let [<Global>] importScripts(path: string): unit = jsNative

importScripts Literals.REPL_BUNDLE_URL

let refs = [|
    "Fable.Core"
    // "Fable.Import.Browser"
    "Fable.Repl.Lib"
    "FSharp.Core"
    "mscorlib"
    "netstandard"
    "System.Collections"
    "System.Console"
    "System.Core"
    "System.Diagnostics.Debug"
    "System"
    "System.IO"
    "System.Numerics"
    "System.Reflection"
    "System.Reflection.Extensions"
    "System.Reflection.Metadata"
    "System.Reflection.Primitives"
    "System.Reflection.TypeExtensions"
    "System.Runtime"
    "System.Runtime.Extensions"
    "System.Runtime.Numerics"
    "System.Text.Encoding"
    "System.Text.Encoding.Extensions"
    "System.Text.RegularExpressions"
    "System.ValueTuple"
    "System.Threading"
    "System.Threading.Tasks"
|]

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
                        Fable.CompileToBabelAst("fable-library", parseResults, Literals.FILE_NAME, optimize, resolveLibCall)) ()
                    let (jsCode, babelTime) = measureTime "Babel generation" compileBabelAst res.BabelAst

                    let stats : CompileStats =
                        { FCS_checker = checkerTime
                          FCS_parsing = parsingTime
                          Fable_transform = fableTransformTime
                          Babel_generation = babelTime }

                    let errors = Array.append (parseResults.Errors) res.FableErrors
                    CompilationFinished (jsCode, errors, stats) |> worker.Post
                with er ->
                    Browser.console.error er
                    CompilerCrashed er.Message |> worker.Post
            | GetTooltip(id, line, col, lineText) ->
                async {
                    let! tooltipLines =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetToolTipText(res, int line, int col, lineText)
                    FoundTooltip(id, tooltipLines) |> worker.Post
                } |> Async.StartImmediate
            | GetCompletions(id, line, col, lineText) ->
                async {
                    let! completions =
                        match currentResults with
                        | None -> async.Return [||]
                        | Some res -> Fable.GetCompletionsAtLocation(res, int line, int col, lineText)
                    FoundCompletions(id, completions) |> worker.Post
                } |> Async.StartImmediate
            | GetDeclarationLocation(id, line, col, lineText) ->
                async {
                    let! result =
                        match currentResults with
                        | None -> async.Return None
                        | Some res -> Fable.GetDeclarationLocation(res, int line, int col, lineText)
                    match result with
                    | Some x -> FoundDeclarationLocation(id, Some(x.StartLine, x.StartColumn, x.EndLine, x.EndColumn))
                    | None -> FoundDeclarationLocation(id, None)
                    |> worker.Post
                } |> Async.StartImmediate
        )
    with _ ->
        worker.Post LoadFailed
}

init() |> Async.StartImmediate

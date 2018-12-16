module Fable.Repl.Shared

open System
open System.Collections.Generic
open Fable.Core
open Fable.Import
open Thoth.Json

[<RequireQualifiedAccess>]
module Literals =
    let [<Literal>] VERSION = "2.0.11"
    let [<Literal>] STORAGE_KEY = "fable-repl"
    let [<Literal>] REPL_BUNDLE_URL = "./js/repl/bundle.min.js"
    let [<Literal>] SAMPLES_JSON_URL = "./samples/samples.json"
    let [<Literal>] HOST =
#if DEBUG
        "http://localhost:8080"
#else
        "https://fable.io/repl"
#endif
    let [<Literal>] FABLE_LIBRARY_DIR = HOST + "/js/repl/fable-library"
    let [<Literal>] FABLE_REPL_LIB_DIR = HOST + "/js/repl/lib"
    let [<Literal>] MAX_LOGS_LENGTH = 200
    /// This is the name of the source code file passed to FCS
    let [<Literal>] FILE_NAME = "test.fs"

let [<Global>] private setTimeout(f: unit->unit, ms: int): unit = jsNative

type WorkerRequest =
    | ParseCode of fsharpCode: string
    | CompileCode of fsharpCode: string * optimize: bool
    | GetTooltip of id: Guid * line: int * column: int * lineText: string
    | GetCompletions of id: Guid * line: int * column: int * lineText: string
    | GetDeclarationLocation of id: Guid * line: int * column: int * lineText: string
    static member Decoder =
        Decode.Auto.generateDecoder<WorkerRequest>()

type CompileStats =
    { FCS_checker : float
      FCS_parsing : float
      Fable_transform : float
      Babel_generation : float }

type WorkerAnswer =
    | Loaded
    | LoadFailed
    | ParsedCode of errors: Fable.Repl.Error[]
    | CompilationFinished of jsCode: string * errors: Fable.Repl.Error[] * stats: CompileStats
    | CompilerCrashed of message: string
    | FoundTooltip of id: Guid * lines: string[]
    | FoundCompletions of id: Guid * Fable.Repl.Completion[]
    | FoundDeclarationLocation of id: Guid * (* line1, col1, line2, col2 *) (int * int * int * int) option
    static member Decoder =
        Decode.Auto.generateDecoder<WorkerAnswer>()

type ObservableWorker<'InMsg>(worker: Browser.Worker, decoder: Decode.Decoder<'InMsg>, ?name: string) =
    let name = defaultArg name "APP"
    let listeners = new Dictionary<Guid, IObserver<'InMsg>>()
    do worker.addEventListener_message(fun ev ->
        match ev.data with
        | :? string as msg when not(String.IsNullOrEmpty(msg)) ->
            match Decode.fromString decoder (ev.data :?> string) with
            | Ok msg ->
                // Browser.console.log("[" + name + "] Received:", msg)
                for listener in listeners.Values do
                    listener.OnNext(msg)
            | Error err -> Browser.console.error("[" + name + "] Cannot decode:", err)
        | _ -> ())
    member __.HasListeners =
        listeners.Count > 0
    member __.Post msg =
        worker.postMessage(Encode.Auto.toString(0, msg))
    member this.PostAndAwaitResponse(msg, picker) =
        Async.FromContinuations(fun (cont, err, cancel) ->
            let mutable disp = Unchecked.defaultof<IDisposable>
            disp <- this |> Observable.subscribe(fun msg ->
                match picker msg with
                | Some res ->
                    disp.Dispose()
                    cont res
                | None -> ())
            worker.postMessage(Encode.Auto.toString(0, msg))
        )
    member __.Subscribe obs =
        let id = Guid.NewGuid()
        listeners.Add(id, obs)
        { new IDisposable with
            member __.Dispose() = listeners.Remove(id) |> ignore }
    interface IObservable<'InMsg> with
        member this.Subscribe obs = this.Subscribe(obs)

type GenericObservable<'T>(?disp: unit->unit) =
    let listeners = Dictionary<Guid, IObserver<'T>>()
    member __.Trigger v =
        for lis in listeners.Values do
            lis.OnNext v
    interface IObservable<'T> with
        member __.Subscribe w =
            let g = Guid.NewGuid()
            listeners.Add(g, w)
            { new IDisposable with
                member __.Dispose() =
                    match disp with
                    | Some disp -> disp()
                    | None -> ()
                    listeners.Remove(g) |> ignore }

let createObservable(subscribe: ('T->unit)->unit) : GenericObservable<'T> =
    let obs = GenericObservable()
    subscribe obs.Trigger
    obs

let debounce (ms: int) (obs: IObservable<'T>): IObservable<'T> =
    let mutable timeoutActive = false
    let mutable snapshot = Unchecked.defaultof<'T>
    let mutable disposable: IDisposable option = None
    let debouncedObs = GenericObservable(fun () ->
        disposable |> Option.iter(fun d -> d.Dispose()))
    disposable <-
        obs |> Observable.subscribe (fun ev ->
            snapshot <- ev
            if not timeoutActive then
                timeoutActive <- true
                setTimeout((fun () ->
                    debouncedObs.Trigger(snapshot)
                    timeoutActive <- false), ms)) |> Some
    upcast debouncedObs

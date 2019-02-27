module Fable.Repl.Prelude

open System
open System.Collections.Generic
open Fable.Core
open Fable.Import
open Thoth.Json

[<RequireQualifiedAccess>]
module Literals =
    let [<Literal>] VERSION = "2.0.11"
    let [<Literal>] STORAGE_KEY = "fable-repl"
    let [<Literal>] MAX_LOGS_LENGTH = 200
    let [<Literal>] HOST =
#if DEBUG
        "http://localhost:8080"
#else
        "https://fable.io/repl"
#endif
    let [<Literal>] SAMPLES_JSON_URL = HOST + "/samples/samples.json"
    let [<Literal>] REPL_LIB_MAP_JSON_URL = HOST + "/repl-lib-map.json"
    let [<Literal>] WORKER_BUNDLE_URL = HOST + "/js/repl/worker.min.js"
    let [<Literal>] FABLE_LIBRARY_DIR = HOST + "/js/repl/fable-library"
    let [<Literal>] FABLE_REPL_LIB_DIR = HOST + "/js/repl/lib"
    let [<Literal>] METADATA_DIR = HOST + "/metadata"

    let EXTRA_REFS = [|"Fable.Import.Browser"; "Fable.Repl.Lib"|]

let [<Global>] private setTimeout(f: unit->unit, ms: int): unit = jsNative

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

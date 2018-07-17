module Fable.Editor.Util

open System
open System.Collections.Generic
open Fable.Core

let [<Global>] private setTimeout(f: unit->unit, ms: int): unit = jsNative

type GenericObservable<'T>(?disp: unit->unit) =
    let listeners = Dictionary<Guid, IObserver<'T>>()
    member x.Trigger v =
        for lis in listeners.Values do
            lis.OnNext v
    interface IObservable<'T> with
        member x.Subscribe w =
            let g = Guid.NewGuid()
            listeners.Add(g, w)
            { new IDisposable with
                member x.Dispose() =
                    match disp with
                    | Some disp -> disp()
                    | None -> ()
                    listeners.Remove(g) |> ignore }

let createObservable(subscribe: ('T->unit)->unit): IObservable<'T> =
    let obs = GenericObservable()
    subscribe obs.Trigger
    upcast obs

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

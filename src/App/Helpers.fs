[<AutoOpen>]
module Helpers

module Promise =
    open Fable.Import
    open Fable.PowerPack

    let inline fromThenable (thenable : Monaco.Thenable<'T>) : JS.Promise<'T> = unbox<JS.Promise<'T>> thenable

    let inline toThenable (promise : JS.Promise<'T>) : Monaco.Thenable<'T> = unbox<Monaco.Thenable<'T>> promise

    let inline ignore promise = Promise.map ignore promise

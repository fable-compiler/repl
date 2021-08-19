
[<RequireQualifiedAccess>]
module Promise

#nowarn "1182" // Unused values

open System
open Fable.Core
open Fable.Core.JsInterop

[<Emit("new Promise($0)")>]
/// The promise function receives two other function parameters: success and fail
let create (f: ('T -> unit) -> (exn -> unit) -> unit): JS.Promise<'T> = jsNative

[<Emit("new Promise(resolve => setTimeout(resolve, $0))")>]
let sleep (ms: int): JS.Promise<unit> = jsNative

[<Emit("Promise.resolve($0)")>]
let lift<'T> (a: 'T): JS.Promise<'T> = jsNative

[<Emit("Promise.reject($0)")>]
/// Creates promise (in rejected state) with supplied reason.
let reject<'T> (reason: exn) : JS.Promise<'T> = jsNative

[<Emit("$1.then($0)")>]
let bind (a: 'T1 -> JS.Promise<'T2>) (pr: JS.Promise<'T1>): JS.Promise<'T2> = jsNative

[<Emit("$1.then($0)")>]
let map (a: 'T1 -> 'T2) (pr: JS.Promise<'T>): JS.Promise<'T2> = jsNative

[<Emit("void ($1.then($0))")>]
let iter (a: 'T -> unit) (pr: JS.Promise<'T>): unit = jsNative

let tap (fn: 'T -> unit) (a: JS.Promise<'T>): JS.Promise<'T> =
    a |> map (fun x -> fn x; x)

[<Emit("$1.catch($0)")>]
/// This version of `catch` expects a function returning just 'T, as opposed to `Promise<'T>`. If you need to return `Promise<'T>`, use `catchBind`.
let catch (fail: exn -> 'T) (pr: JS.Promise<'T>): JS.Promise<'T> = jsNative

[<Emit("$1.catch($0)")>]
/// This version of `catch` expects a function returning Promise<'T> as opposed to just 'T. If you need to return just 'T, use `catch`.
let catchBind (fail: exn -> JS.Promise<'T>) (pr: JS.Promise<'T>): JS.Promise<'T> = jsNative

[<Emit("void ($1.catch($0))")>]
/// Used to catch errors at the end of a promise chain.
let catchEnd (fail: exn -> unit) (pr: JS.Promise<'T>): unit = jsNative

[<Emit("$2.then($0).catch($1)")>]
/// A combination of `map` and `catch`, this function applies the `success` continuation when the input promise resolves successfully, or `fail` continuation when the input promise fails.
let either (success: 'T1 -> 'T2) (fail: exn -> 'T2) (pr: JS.Promise<'T1>): JS.Promise<'T2> = jsNative

[<Emit("$2.then($0).catch($1)")>]
/// A combination of `bind` and `catchBind`, this function applies the `success` continuation when the input promise resolves successfully, or `fail` continuation when the input promise fails.
let eitherBind (success: 'T1 -> JS.Promise<'T2>) (fail: exn -> JS.Promise<'T2>) (pr: JS.Promise<'T1>): JS.Promise<'T2> = jsNative

[<Emit("void ($2.then($0).catch($1))")>]
let eitherEnd (success: 'T -> unit) (fail: exn -> unit) (pr: JS.Promise<'T>): unit = jsNative

[<Emit("void $0")>]
let start (pr: JS.Promise<'T>): unit = jsNative

[<Emit("$1.catch($0)")>]
let tryStart (fail: exn -> unit) (pr: JS.Promise<'T>): unit = jsNative

[<Emit("Promise.all($0)")>]
let Parallel (pr: seq<JS.Promise<'T>>): JS.Promise<'T[]> = jsNative

[<Emit("Promise.all($0)")>]
let all (pr: seq<JS.Promise<'T>>): JS.Promise<'T[]> = jsNative

let result (a: JS.Promise<'T>): JS.Promise<Result<'T, exn>> =
    either Ok Error a

let mapResult (fn: 'T1 -> 'T2) (a: JS.Promise<Result<'T1, 'E>>): JS.Promise<Result<'T2, 'E>> =
    a |> map (Result.map fn)

let bindResult (fn: 'T1 -> JS.Promise<'T2>) (a: JS.Promise<Result<'T1, 'E>>): JS.Promise<Result<'T2, 'E>> =
    a |> bind (fun a ->
        match a with
        | Ok a ->
            fn a |> map Ok
        | Error e ->
            lift (Error e))

let mapResultError (fn: 'E1 -> 'E2) (a: JS.Promise<Result<'T, 'E1>>): JS.Promise<Result<'T, 'E2>> =
    a |> map (Result.mapError fn)

type PromiseBuilder() =
    [<Emit("$1.then($2)")>]
    member _.Bind(p: JS.Promise<'T1>, f: 'T1 -> JS.Promise<'T2>): JS.Promise<'T2> = jsNative

    [<Emit("$1.then(() => $2)")>]
    member _.Combine(p1: JS.Promise<unit>, p2: JS.Promise<'T>): JS.Promise<'T> = jsNative

    member _.For(seq: seq<'T>, body: 'T -> JS.Promise<unit>): JS.Promise<unit> =
        // (lift (), seq)
        // ||> Seq.fold (fun p a ->
        //     bind (fun () -> body a) p)
        let mutable p = lift ()
        for a in seq do
            p <- p |> bind (fun () -> body a)
        p

    [<Emit("$1.then($2)")>]
    member _.For(p: JS.Promise<'T1>, f: 'T1 -> JS.Promise<'T2>): JS.Promise<'T2> = jsNative

    member this.While(guard: unit -> bool, p: JS.Promise<unit>): JS.Promise<unit> =
        if guard()
        then bind (fun () -> this.While(guard, p)) p
        else lift()

    [<Emit("Promise.resolve($1)")>]
    member _.Return(a: 'T): JS.Promise<'T> = jsNative

    [<Emit("$1")>]
    member _.ReturnFrom(p: JS.Promise<'T>): JS.Promise<'T> = jsNative

    [<Emit("Promise.resolve()")>]
    member _.Zero(): JS.Promise<unit> = jsNative

    member _.TryFinally(p: JS.Promise<'T>, compensation: unit -> unit): JS.Promise<'T> =
        either (fun (x: 'T) -> compensation(); x) (fun er -> compensation(); raise er) p

    [<Emit("$1.catch($2)")>]
    member _.TryWith(p: JS.Promise<'T>, catchHandler: exn -> JS.Promise<'T>): JS.Promise<'T> = jsNative

    // Delay must generate a cold promise-like object that re-runs every time it's called,
    // so we cannot use the JS Promise constructor which is stateful
    member _.Delay(generator: unit -> JS.Promise<'T>): JS.Promise<'T> =
        !!createObj[
            "then" ==> fun onSuccess onError ->
                try generator().``then``(onSuccess, onError)
                with er ->
                    if isNull(box onError) then reject er
                    else
                        try onError er |> lift
                        with er -> reject er
            "catch" ==> fun onError ->
                try generator().catch(onError)
                with er ->
                    try onError er |> lift
                    with er -> reject er
        ]

    // Make sure we call `then` because this may be used with "cold" fake promises generated by Delay
    member _.Run(p:JS.Promise<'T>): JS.Promise<'T> = p.``then``(id)

    member this.Using<'T1, 'T2 when 'T1 :> IDisposable>(resource: 'T1, binder: 'T1 -> JS.Promise<'T2>): JS.Promise<'T2> =
        this.TryFinally(binder(resource), fun () -> resource.Dispose())

    [<Emit("Promise.all([$1, $2])")>]
    member _.MergeSources(a: JS.Promise<'T1>, b: JS.Promise<'T2>): JS.Promise<'T1 * 'T2> = jsNative

    [<Emit("Promise.all([$1, $2, $3])")>]
    member _.MergeSources3(a: JS.Promise<'T1>, b: JS.Promise<'T2>, c: JS.Promise<'T3>): JS.Promise<'T1 * 'T2 * 'T3> = jsNative

    [<Emit("Promise.all([$1, $2, $3, $4])")>]
    member _.MergeSources4(a: JS.Promise<'T1>, b: JS.Promise<'T2>, c: JS.Promise<'T3>, d: JS.Promise<'T4>): JS.Promise<'T1 * 'T2 * 'T3 * 'T4> = jsNative

    [<Emit("Promise.all([$1, $2, $3, $4, $5])")>]
    member _.MergeSources5(a: JS.Promise<'T1>, b: JS.Promise<'T2>, c: JS.Promise<'T3>, d: JS.Promise<'T4>, e: JS.Promise<'T5>): JS.Promise<'T1 * 'T2 * 'T3 * 'T4 * 'T5> = jsNative

    [<Emit("Promise.all([$1, $2, $3, $4, $5, $6])")>]
    member _.MergeSources6(a: JS.Promise<'T1>, b: JS.Promise<'T2>, c: JS.Promise<'T3>, d: JS.Promise<'T4>, e: JS.Promise<'T5>, f: JS.Promise<'T6>): JS.Promise<'T1 * 'T2 * 'T3 * 'T4 * 'T5 * 'T6> = jsNative

//    member _.BindReturn(y: JS.Promise<'T1>, f) = map f y

    [<Emit("Promise.all([$1,$2]).then(([a,b]) => $3(a,b))")>]
    [<CustomOperation("andFor", IsLikeZip=true)>]
    member _.Merge(a: JS.Promise<'T1>, b: JS.Promise<'T2>, [<ProjectionParameter>] resultSelector : 'T1 -> 'T2 -> 'R): JS.Promise<'R> = jsNative

    /// this is the 'base case' for Source transformations, and
    /// must be present before any user-defined overloads will
    /// actually work.
    member x.Source(p: JS.Promise<'T1>): JS.Promise<'T1> = p

    // allows for..in and for..do expressions inside CEs
    member x.Source(ps: #seq<_>): _ = ps

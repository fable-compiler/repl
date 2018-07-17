module Demo

// Ported from:
// F# Interop with Javascript in Fable: The Complete Guide
// https://medium.com/@zaid.naom/f-interop-with-javascript-in-fable-the-complete-guide-ccc5b896a59f

open Fable.Import.Browser

module JQuery =

    open Fable.Core
    open Fable.Core.JsInterop

    type IJQuery =
        interface end

    [<Emit("window['$']($0)")>]
    let select (selector: string) : IJQuery = jsNative

    [<Emit("window['$']($0)")>]
    let ready (handler: unit -> unit) : unit = jsNative

    [<Emit("$2.css($0, $1)")>]
    let css (prop: string) (value: string) (el: IJQuery) : IJQuery = jsNative

    [<Emit("$1.addClass($0)")>]
    let addClass (className: string) (el: IJQuery) : IJQuery = jsNative

    [<Emit("$1.click($0)")>]
    let click (handler: obj -> unit) (el: IJQuery) : IJQuery = jsNative

JQuery.ready (fun () ->
    let div = JQuery.select "#main"

    div
    |> JQuery.css "background-color" "red"
    |> JQuery.click (fun ev -> console.log("Clicked"))
    |> JQuery.addClass "fancy-class"
    |> ignore
)

module Elmish.Counter

(**
 The famous Increment/Decrement ported from Elm.
 Please note the API in Fable's REPL Lib may differ a bit from Elmish, Fable.React... nuget libraries.
 Also, the generated code is not as optimized as when using dotnet-fable.
 You can find more info and Fable Elmish samples in https://elmish.github.io/
*)

open Fable.Repl.Lib
open Elmish
open React
open React.Props

// MODEL

type Model = int

type Msg =
| Increment
| Decrement

let init() : Model = 0

// UPDATE

let update (msg:Msg) (model:Model) =
    match msg with
    | Increment -> model + 1
    | Decrement -> model - 1

// VIEW (rendered with React)

let view model dispatch =

  div []
      [ button [ OnClick (fun _ -> dispatch Decrement) ] [ str "-" ]
        div [] [ str (sprintf "%A" model) ]
        button [ OnClick (fun _ -> dispatch Increment) ] [ str "+" ] ]

// App
Program.mkSimple init update view
|> Program.withReact "elmish-app"
|> Program.withConsoleTrace
|> Program.run
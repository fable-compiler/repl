module Elmish.SimpleInput

(**
Minimal application showing how to use Elmish
You can find more info about Emish architecture and samples at https://elmish.github.io/
*)

open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Elmish
open Elmish.React

// MODEL

type Model =
    { Value : string }

type Msg =
    | ChangeValue of string

let init () = { Value = "" }, Cmd.none

// UPDATE

let update (msg:Msg) (model:Model) =
    match msg with
    | ChangeValue newValue ->
        { model with Value = newValue }, Cmd.none

// VIEW (rendered with React)

let view model dispatch =
    div [ Class "main-container" ]
        [ input [ Class "input"
                  Value model.Value
                  OnChange (fun ev -> ev.target?value |> string |> ChangeValue |> dispatch) ]
          span [ ]
            [ str "Hello, "
              str model.Value
              str "!" ] ]

// App
Program.mkProgram init update view
|> Program.withConsoleTrace
|> Program.withReactSynchronous "elmish-app"
|> Program.run

namespace Widgets

module Options =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open Fulma

    type Model =
        { Optimize: bool }

    type Msg =
        | ToggleOptimize

    let init () =
        { Optimize = false }

    let update msg model =
        match msg with
        | ToggleOptimize ->
            { model with Optimize = not model.Optimize }

    let view (model: Model) dispatch =
        Content.content [ ]
            [ Checkbox.checkbox [ ]
                [ Checkbox.input
                    [ Common.Props [ Checked model.Optimize
                                     OnChange (fun _ -> dispatch ToggleOptimize) ] ]
                  str " Optimize (experimental)" ] ]

module About =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open Fulma
    open Fable.Repl.Shared

    let view =
        Content.content [ ]
            [ str ("Version: " + Literals.VERSION)
              br [ ]
              a [ Href "https://github.com/fable-compiler/repl/issues/new" ] [ str "Found a bug ?" ] ]

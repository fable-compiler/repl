module Widgets.Stats

open Fable.React
open Fable.React.Props
open Fable.Core.JsInterop
open Fulma
open Fable.WebWorker

type Model = CompileStats

let private row (label : string) (value : float)=
    tr [ ]
        [ td [ ]
            [ str label ]
          td [ ]
            [ Text.span [ Modifiers [ Modifier.TextColor IsSuccess
                                      Modifier.TextAlignment (Screen.All, TextAlignment.Right) ]
                          Props [ Style [ Display DisplayOptions.Block ] ] ]
                [ str (sprintf "%.2f" value) ] ] ]

let view (model : Model) =
    Content.content [ ]
        [ Table.table [ ]
            [ thead [ ]
                [ tr [ ]
                    [ th [ ] [ str "Steps" ]
                      th [ Class "has-text-right" ] [ str "ms" ] ] ]
              tbody [ ]
                [ row "FCS checker" model.FCS_checker
                  row "FCS parsing" model.FCS_parsing
                  row "Fable transform" model.Fable_transform
                  row "Babel generation" model.Babel_generation ] ] ]

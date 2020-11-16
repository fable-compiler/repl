module Widgets.Stats

open Fable.Core.JsInterop
open Fable.WebWorker
open Feliz
open Feliz.Bulma

type Model = CompileStats

let private row (label : string) (value : float)=
    Html.tr [
        Html.td label
        Html.td [
            Html.span [
                prop.className "has-text-success has-text-right"
                prop.style [
                    style.display.block
                ]
                prop.text (sprintf "%.2f" value)
            ]
        ]
    ]

let view (model : Model) =
    Bulma.content [
        Bulma.table [
            Html.thead [
                Html.tr [
                    Html.th "Steps"
                    Html.th [
                        prop.className "has-text-right"
                        prop.text "ms"
                    ]
                ]
            ]

            Html.tbody [
                row "FCS checker" model.FCS_checker
                row "FCS parsing" model.FCS_parsing
                row "Fable transform" model.Fable_transform
            ]
        ]
    ]

// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Card

open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Card.card [ ]
        [ Card.header [ ]
            [ Card.Header.title [ ]
                [ str "Component" ]
              Card.Header.icon [ ]
                [ i [ Class "fa fa-angle-down" ] [ ] ] ]
          Card.content [ ]
            [ Content.content [ ]
                [ str "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." ] ]
          Card.footer [ ]
            [ Card.Footer.div [ ]
                [ str "Save" ]
              Card.Footer.div [ ]
                [ str "Edit" ]
              Card.Footer.div [ ]
                [ str "Delete" ] ] ]

let centered () =
    Card.card [ ]
        [ Card.header [ ]
            [ Card.Header.title [ Card.Header.Title.IsCentered ]
                [ str "Component" ]
              Card.Header.icon [ ]
                [ i [ Class "fa fa-angle-down" ] [ ] ] ]
          Card.content [ ]
            [ Content.content [ ]
                [ str "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." ] ]
          Card.footer [ ]
            [ Card.Footer.div [ ]
                [ str "Save" ]
              Card.Footer.div [ ]
                [ str "Edit" ]
              Card.Footer.div [ ]
                [ str "Delete" ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
    Card.card [] [Card.content [] [centered()] ]
] |> mountById "elmish-app"

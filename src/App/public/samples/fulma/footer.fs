// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Footer

open Fable.React
open Fulma

let basic () =
    Footer.footer [ ]
        [ Content.content [ Content.Modifiers [ Modifier.TextAlignment (Screen.All, TextAlignment.Centered) ] ]
            [ h1 [ ]
                 [ str "Fulma" ]
              p [ ]
                [ str "A wrapper around Bulma to help you create application quicker" ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

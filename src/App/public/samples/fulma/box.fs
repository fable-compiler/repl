// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Box

open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    div [ Class "block" ]
        [ Box.box' [ ]
            [ str "Lorem ipsum dolor sit amet, consectetur adipisicing elit
                   , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

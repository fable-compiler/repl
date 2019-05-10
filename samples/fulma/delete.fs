// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Delete

open Fable.React
open Fable.React.Props
open Fulma

let demoInteractive () =
    div [ Class "block" ]
        [ Delete.delete
            [ Delete.Size IsSmall ] [ ]
          Delete.delete
            [ ] [ ]
          Delete.delete
            [ Delete.Size IsMedium ] [ ]
          Delete.delete
            [ Delete.Size IsLarge ] [ ] ]

div [] [
    Card.card [] [Card.content [] [demoInteractive()] ]
] |> mountById "elmish-app"

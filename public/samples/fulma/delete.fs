module Fulma.Delete

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma

let demoInteractive () =
    div [ ClassName "block" ]
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

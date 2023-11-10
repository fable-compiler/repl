// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Progress

open Fable.React
open Fable.React.Props
open Fulma

let colorInteractive () =
    div [ Class "block" ]
        [ Progress.progress
            [ Progress.Value 15
              Progress.Max 100 ] [ str "15%" ]
          Progress.progress
            [ Progress.Color IsSuccess
              Progress.Value 30
              Progress.Max 100 ] [ str "30%" ]
          Progress.progress
            [ Progress.Color IsInfo
              Progress.Value 45
              Progress.Max 100 ] [ str "45%" ]
          Progress.progress
            [ Progress.Color IsWarning
              Progress.Value 60
              Progress.Max 100 ] [ str "60%" ]
          Progress.progress
            [ Progress.Color IsPrimary
              Progress.Value 75
              Progress.Max 100 ] [ str "75%" ]
          Progress.progress
            [ Progress.Color IsDanger
              Progress.Value 90
              Progress.Max 100 ] [ str "90%" ] ]

let sizeInteractive () =
    div [ Class "block" ]
        [ Progress.progress
            [ Progress.Size IsSmall
              Progress.Value 15
              Progress.Max 100 ] [ str "15%" ]
          Progress.progress
            [ Progress.Value 30
              Progress.Max 100 ] [ str "30%" ]
          Progress.progress
            [ Progress.Size IsMedium
              Progress.Value 45
              Progress.Max 100 ] [ str "45%" ]
          Progress.progress
            [ Progress.Size IsLarge
              Progress.Value 60
              Progress.Max 100 ] [ str "60%" ] ]

div [] [
    Card.card [] [Card.content [] [colorInteractive()] ]
    Card.card [] [Card.content [] [sizeInteractive()] ]
] |> mountById "elmish-app"

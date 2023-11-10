// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Title

open Fable.React
open Fulma

let simpleInteractive () =
    div [ ]
        [ Heading.h1 [ ]
            [ str "Title" ]
          Heading.h2 [ Heading.IsSubtitle ]
            [ str "Subtitle" ] ]


let sizeInteractive () =
    div [ ]
        [ Heading.h1 [ ]
            [ str "Title 1" ]
          Heading.h2 [ ]
            [ str "Title 2" ]
          Heading.h3 [ ]
            [ str "Title 3" ]
          Heading.h4 [ ]
            [ str "Title 3" ]
          Heading.h5 [ ]
            [ str "Title 5" ]
          Heading.h6 [ ]
            [ str "Title 6" ]
          Heading.h1 [ Heading.IsSubtitle ]
            [ str "Subtitle 1" ]
          Heading.h2 [ Heading.IsSubtitle ]
            [ str "Subtitle 2" ]
          Heading.h3 [ Heading.IsSubtitle ]
            [ str "Subtitle 3" ]
          Heading.h4 [ Heading.IsSubtitle ]
            [ str "Subtitle 4" ]
          Heading.h5 [ Heading.IsSubtitle ]
            [ str "Subtitle 5" ]
          Heading.h6 [ Heading.IsSubtitle ]
            [ str "Subtitle 6" ] ]

div [] [
    Card.card [] [Card.content [] [simpleInteractive()] ]
    Card.card [] [Card.content [] [sizeInteractive()] ]
] |> mountById "elmish-app"

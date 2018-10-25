module Fulma.Section

open Fable.Helpers.React
open Fulma

let basic () =
    Section.section [ ]
        [ Container.container [ Container.IsFluid ]
            [ Heading.h1 [ ]
                [ str "Section" ]
              Heading.h2 [ Heading.IsSubtitle ]
                [ str "A simple container to divide your page into sections" ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Media

open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Media.media [ ]
        [ Media.left [ ]
            [ Image.image [ Image.Is64x64 ]
                [ img [ Src "https://dummyimage.com/64x64/7a7a7a/fff" ] ] ]
          Media.content [ ]
            [ Field.div [ ]
                [ Control.div [ ]
                    [ textarea [ Class "textarea"
                                 Placeholder "Add a message ..." ]
                               [ ] ] ]
              Level.level [ ]
                [ Level.left [ ]
                    [ Level.item [ ]
                        [ Button.button [ Button.Color IsInfo ]
                            [ str "Submit" ] ] ]
                  Level.right [ ]
                    [ Level.item [ ]
                        [ str "Press Ctrl + Enter to submit" ] ] ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

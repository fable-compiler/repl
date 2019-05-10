// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Level

open Fable.React
open Fulma

let iconInteractive () =
    Level.level [ ]
        [ Level.left [ ]
            [ Level.item [ ]
                [ Heading.h5 [ Heading.IsSubtitle ]
                    [ strong [ ] [ str "123"]
                      str " posts" ] ]
              Level.item [ ]
                [ Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Input.text [ Input.Placeholder "Find a post" ] ]
                      Control.div [ ]
                        [ Button.button [ ]
                            [ str "Search" ] ] ] ] ]
          Level.right [ ]
            [ Level.item [ ]
                [ a [ ] [ str "All" ] ]
              Level.item [ ]
                [ a [ ] [ str "Published" ] ]
              Level.item [ ]
                [ a [ ] [ str "Drafts" ] ]
              Level.item [ ]
                [ a [ ] [ str "Deleted" ] ]
              Level.item [ ]
                [ Button.button [ Button.Color IsSuccess ] [ str "New" ] ] ] ]

let centered () =
    Level.level [ ]
        [ Level.item [ Level.Item.HasTextCentered ]
            [ div [ ]
                [ Level.heading [ ] [ str "Stars" ]
                  Level.title [ ] [ str "1,010" ] ] ]
          Level.item [ Level.Item.HasTextCentered ]
            [ div [ ]
                [ Level.heading [ ] [ str "Forks" ]
                  Level.title [ ] [ str "127" ] ] ]
          Level.item [ Level.Item.HasTextCentered ]
            [ div [ ]
                [ Level.heading [ ] [ str "Watchers" ]
                  Level.title [ ] [ str "66" ] ] ] ]

div [] [
    Card.card [] [Card.content [] [iconInteractive()] ]
    Card.card [] [Card.content [] [centered()] ]
] |> mountById "elmish-app"

// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Hero

open Fable.React
open Fulma

let iconInteractive () =
    Hero.hero [ ]
        [ Hero.body [ ]
            [ Container.container [ Container.IsFluid ]
                [ Heading.h1 [ ]
                    [ str "Header" ]
                  Heading.h2 [ Heading.IsSubtitle ]
                    [ str "Subtitle" ] ] ] ]

let centered () =
    Hero.hero [ Hero.Color IsSuccess
                Hero.IsMedium ]
        [ Hero.head [ ]
            [ Tabs.tabs [ Tabs.IsBoxed
                          Tabs.IsCentered ]
                [ Tabs.tab [ Tabs.Tab.IsActive true ]
                    [ a [ ] [ str "Fable" ] ]
                  Tabs.tab [ ]
                    [ a [ ] [ str "Elmish" ] ]
                  Tabs.tab [ ]
                    [ a [ ] [ str "Bulma" ] ]
                  Tabs.tab [ ]
                    [ a [ ] [ str "Hink" ] ] ] ]
          Hero.body [ ]
            [ Container.container [ Container.IsFluid
                                    Container.Modifiers [ Modifier.TextAlignment (Screen.All, TextAlignment.Centered) ] ]
                [ Heading.h1 [ ]
                    [ str "Header" ]
                  Heading.h2 [ Heading.IsSubtitle ]
                    [ str "Subtitle" ] ] ] ]

div [] [
    Card.card [] [Card.content [] [iconInteractive()] ]
    Card.card [] [Card.content [] [centered()] ]
] |> mountById "elmish-app"

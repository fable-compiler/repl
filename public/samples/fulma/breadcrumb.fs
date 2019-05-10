// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Breadcrumb

open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Breadcrumb.breadcrumb [ ]
        [ Breadcrumb.item [ ]
            [ a [ ] [ str "F#" ] ]
          Breadcrumb.item [ ]
            [ a [ ] [ str "Fable" ] ]
          Breadcrumb.item [ Breadcrumb.Item.IsActive true ]
            [ a [ ] [ str "Fable.React" ] ] ]

let alignmentCenter () =
    Breadcrumb.breadcrumb [ Breadcrumb.IsCentered ]
        [ Breadcrumb.item [ ]
            [ a [ ] [ str "F#" ] ]
          Breadcrumb.item [ ]
            [ a [ ] [ str "Fable" ] ]
          Breadcrumb.item [ Breadcrumb.Item.IsActive true ]
            [ a [ ] [ str "Elmish" ] ] ]

let icons () =
    Breadcrumb.breadcrumb [ ]
        [ Breadcrumb.item [ ]
            [ a [ ]
                [ Icon.icon [ Icon.Size IsSmall ]
                    [ i [ Class "fa fa-home" ] [ ] ]
                  str "F#" ] ]
          Breadcrumb.item [ ]
            [ a [ ]
                [ Icon.icon [ Icon.Size IsSmall ]
                    [ i [ Class "fa fa-book" ] [ ] ]
                  str "Fable" ] ]
          Breadcrumb.item [ Breadcrumb.Item.IsActive true ]
            [ a [ ]
                [ Icon.icon [ Icon.Size IsSmall ]
                    [ i [ Class "fa fa-thumbs-up" ] [ ] ]
                  str "Elmish" ] ] ]

let size () =
    Breadcrumb.breadcrumb [ Breadcrumb.Size IsLarge ]
        [ Breadcrumb.item [ ]
            [ a [ ] [ str "F#" ] ]
          Breadcrumb.item [ ]
            [ a [ ] [ str "Fable" ] ]
          Breadcrumb.item [ Breadcrumb.Item.IsActive true ]
            [ a [ ] [ str "Elmish" ] ] ]

let separator () =
    Breadcrumb.breadcrumb [ Breadcrumb.HasSucceedsSeparator ]
        [ Breadcrumb.item [ ]
            [ a [ ] [ str "F#" ] ]
          Breadcrumb.item [ ]
            [ a [ ] [ str "Fable" ] ]
          Breadcrumb.item [ Breadcrumb.Item.IsActive true ]
            [ a [ ] [ str "Elmish" ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
    Card.card [] [Card.content [] [alignmentCenter()] ]
    Card.card [] [Card.content [] [icons()] ]
    Card.card [] [Card.content [] [size()] ]
    Card.card [] [Card.content [] [separator()] ]
] |> mountById "elmish-app"

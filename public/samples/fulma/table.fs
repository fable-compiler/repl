// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Table

open Fable.React
open Fable.React.Props
open Fulma

let simpleInteractive () =
    Table.table [ Table.IsHoverable ]
        [ thead [ ]
            [ tr [ ]
                [ th [ ] [ str "Firstname" ]
                  th [ ] [ str "Surname" ]
                  th [ ] [ str "Birthday" ] ] ]
          tbody [ ]
            [ tr [ ]
                 [ td [ ] [ str "Maxime" ]
                   td [ ] [ str "Mangel" ]
                   td [ ] [ str "28/02/1992" ] ]
              tr [ Class "is-selected" ]
                 [ td [ ] [ str "Jane" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "21/07/1987" ] ]
              tr [  ]
                 [ td [ ] [ str "John" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "11/07/1978" ] ] ] ]

let modifierInteractive () =
    Table.table [ Table.IsBordered
                  Table.IsNarrow
                  Table.IsStriped ]
        [ thead [ ]
            [ tr [ ]
                 [ th [ ] [ str "Firstname" ]
                   th [ ] [ str "Surname" ]
                   th [ ] [ str "Birthday" ] ] ]
          tbody [ ]
            [ tr [ ]
                [ td [ ] [ str "Maxime" ]
                  td [ ] [ str "Mangel" ]
                  td [ ] [ str "28/02/1992" ] ]
              tr [ Class "is-selected" ]
                 [ td [ ] [ str "Jane" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "21/07/1987" ] ]
              tr [  ]
                 [ td [ ] [ str "John" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "11/07/1978" ] ] ] ]

let modifierFullWitdth () =
    Table.table [ Table.IsBordered
                  Table.IsFullWidth
                  Table.IsStriped ]
        [ thead [ ]
            [ tr [ ]
                 [ th [ ] [ str "Firstname" ]
                   th [ ] [ str "Surname" ]
                   th [ ] [ str "Birthday" ] ] ]
          tbody [ ]
            [ tr [ ]
                [ td [ ] [ str "Maxime" ]
                  td [ ] [ str "Mangel" ]
                  td [ ] [ str "28/02/1992" ] ]
              tr [ Class "is-selected" ]
                 [ td [ ] [ str "Jane" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "21/07/1987" ] ]
              tr [  ]
                 [ td [ ] [ str "John" ]
                   td [ ] [ str "Doe" ]
                   td [ ] [ str "11/07/1978" ] ] ] ]

div [] [
    Card.card [] [Card.content [] [simpleInteractive()] ]
    Card.card [] [Card.content [] [modifierInteractive()] ]
    Card.card [] [Card.content [] [modifierFullWitdth()] ]
] |> mountById "elmish-app"

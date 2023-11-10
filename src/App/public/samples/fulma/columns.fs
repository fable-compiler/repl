// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Columns

open Fable.React
open Fulma

let basic () =
    Columns.columns [ ]
        [ Column.column [ Column.Width (Screen.All, Column.Is6) ]
            [ Columns.columns [ ]
                [ Column.column [ ]
                    [ Notification.notification [ Notification.Color IsSuccess ]
                        [ str "Column n°1" ] ] ]
              Columns.columns [ Columns.IsGapless ]
                [ Column.column [ ]
                    [ Notification.notification [ Notification.Color IsInfo ]
                        [ str "Column n°1.1" ] ]
                  Column.column [ ]
                    [ Notification.notification [ Notification.Color IsWarning ]
                        [ str "Column n°1.2" ] ]
                  Column.column [ ]
                    [ Notification.notification [ Notification.Color IsDanger ]
                        [ str "Column n°1.3" ] ] ] ]
          Column.column [ ]
            [ Columns.columns [ ]
                [ Column.column [ ]
                    [ Notification.notification [ Notification.Color IsLight ]
                        [ str "Column n°2" ] ] ]
              Columns.columns [ Columns.IsCentered ]
                [ Column.column [ Column.Width (Screen.All, Column.Is7) ]
                    [ Notification.notification [ Notification.Color IsBlack ]
                        [ str "Column n°2.1" ] ] ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

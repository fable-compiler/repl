// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Panel

open Fable.React
open Fable.React.Props
open Fulma

let iconInteractive () =
    Columns.columns [ ]
        [ Column.column [ Column.Offset (Screen.All, Column.Is3)
                          Column.Width (Screen.All, Column.Is6) ]
            [ Panel.panel [ ]
                [ Panel.heading [ ] [ str "Repositories"]
                  Panel.block [ ]
                    [ Control.div [ Control.HasIconLeft ]
                        [ Input.text [ Input.Size IsSmall
                                       Input.Placeholder "Search" ]
                          Icon.icon [ Icon.Size IsSmall
                                      Icon.IsLeft ]
                                    [ i [ Class "fa fa-search" ] [ ] ] ] ]
                  Panel.tabs [ ]
                    [ Panel.tab [ ] [ str "All" ]
                      Panel.tab [ Panel.Tab.IsActive true ] [ str "Fable" ]
                      Panel.tab [ ] [ str "Elmish" ]
                      Panel.tab [ ] [ str "Bulma" ] ]
                  Panel.block [ Panel.Block.IsActive true ]
                    [ Panel.icon [ ] [ i [ Class "fa fa-book" ] [ ] ]
                      str "Bulma" ]
                  Panel.block [ ]
                    [ Panel.icon [ ] [ i [ Class "fa fa-code-fork" ] [ ] ]
                      str "Fable" ]
                  Panel.checkbox [ ]
                    [ input [ Type "checkbox" ]
                      str "I am a checkbox" ]
                  Panel.block [ ]
                    [ Button.button [ Button.Color IsPrimary
                                      Button.IsOutlined
                                      Button.IsFullWidth ]
                                    [ str "Reset" ] ] ] ] ]


div [] [
    Card.card [] [Card.content [] [iconInteractive()] ]
] |> mountById "elmish-app"

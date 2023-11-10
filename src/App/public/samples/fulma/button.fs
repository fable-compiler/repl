// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Button

open Fable.React
open Fable.React.Props
open Fulma

let colorInteractive () =
    Columns.columns [ ]
        [ Column.column [ ]
            [ div [ Class "block" ]
                  [ Button.button [ ] [ str "Button" ]
                    Button.button [ Button.Color IsWhite ] [ str "White" ]
                    Button.button [ Button.Color IsLight ] [ str "Light" ]
                    Button.button [ Button.Color IsDark ] [ str "Dark" ]
                    Button.button [ Button.Color IsBlack ] [ str "Black" ] ] ]
          Column.column [ ]
            [ div [ Class "block" ]
                  [ Button.button [ Button.IsLink ] [ str "Link" ]
                    Button.button [ Button.Color IsPrimary ] [ str "Primary" ]
                    Button.button [ Button.Color IsInfo ] [ str "Info" ]
                    Button.button [ Button.Color IsSuccess ] [ str "Success" ]
                    Button.button [ Button.Color IsWarning ] [ str "Warning" ]
                    Button.button [ Button.Color IsDanger ] [ str "Danger" ] ] ] ]

let sizeInteractive () =
    div [ Class "block" ]
        [ Button.button [ Button.Size IsSmall ] [ str "Small" ]
          Button.button [ ] [ str "Normal" ]
          Button.button [ Button.Size IsMedium ] [ str "Medium" ]
          Button.button [ Button.Size IsLarge ] [ str "Large" ] ]

let outlinedInteractive () =
    div [ Class "block" ]
        [ Button.button [ Button.IsOutlined ] [ str "Outlined" ]
          Button.button [ Button.Color IsSuccess; Button.IsOutlined ] [ str "Outlined" ]
          Button.button [ Button.Color IsPrimary; Button.IsOutlined ] [ str "Outlined" ]
          Button.button [ Button.Color IsInfo; Button.IsOutlined ] [ str "Outlined" ]
          Button.button [ Button.Color IsDanger; Button.IsOutlined ] [ str "Outlined" ] ]

let mixedStyleInteractive () =
    div [ Class "callout is-primary block" ]
        [ Button.button [ Button.IsInverted ] [ str "Inverted" ]
          Button.button [ Button.Color IsSuccess; Button.IsInverted ] [ str "Inverted" ]
          Button.button [ Button.Color IsDanger; Button.IsInverted; Button.IsOutlined ] [ str "Invert Outlined" ]
          Button.button [ Button.Color IsInfo; Button.IsInverted; Button.IsOutlined ] [ str "Invert Outlined" ] ]

let stateInteractive () =
    div [ Class "block" ]
        [ Button.button [ ] [ str "Normal" ]
          Button.button [ Button.Color IsSuccess; Button.IsHovered true ] [ str "Hover" ]
          Button.button [ Button.Color IsWarning; Button.IsFocused true ] [ str "Focus" ]
          Button.button [ Button.Color IsInfo; Button.IsActive true ] [ str "Active" ]
          Button.button [ Button.Color IsBlack; Button.IsLoading true ] [ str "Loading" ] ]

let staticView () =
    Button.button [ Button.IsStatic true ]
        [ str "Static" ]

let disabled () =
    div [ Class "block" ]
        [ Button.button [ Button.Disabled true
                          Button.IsLink ] [ str "Link" ]
          Button.button [ Button.Disabled true
                          Button.Color IsPrimary ] [ str "Primary" ]
          Button.button [ Button.Disabled true
                          Button.Color IsInfo ] [ str "Info" ]
          Button.button [ Button.Disabled true
                          Button.Color IsSuccess ] [ str "Success" ]
          Button.button [ Button.Disabled true
                          Button.Color IsWarning ] [ str "Warning" ]
          Button.button [ Button.Disabled true
                          Button.Color IsDanger ] [ str "Danger" ] ]

let icons () =
    div [ Class "block" ]
        [ Button.button [ ] [ Icon.icon [ ] [ i [ Class "fas fa-bold" ] [] ] ]
          Button.button [ ] [ Icon.icon [ ] [ i [ Class "fas fa-italic" ] [] ] ]
          Button.button [ ] [ Icon.icon [ ] [ i [ Class "fas fa-underline" ] [] ] ]
          Button.button [ Button.Color IsDanger
                          Button.IsOutlined ] [ str "Danger" ] ]

let demoHelpers () =
    div [ Class "block" ]
        [ Button.a [ ] [ str "Anchor" ]
          Button.span [ ] [ str "Span" ]
          Button.button [ ] [ str "Button" ]
          Button.Input.reset [ Button.Props [ Value "Input `reset`" ] ]
          Button.Input.submit [ Button.Props [ Value "Input `submit`" ] ] ]

div [] [
    Card.card [] [Card.content [] [colorInteractive()] ]
    Card.card [] [Card.content [] [sizeInteractive()] ]
    Card.card [] [Card.content [] [outlinedInteractive()] ]
    Card.card [] [Card.content [] [mixedStyleInteractive()] ]
    Card.card [] [Card.content [] [stateInteractive()] ]
    Card.card [] [Card.content [] [staticView()] ]
    Card.card [] [Card.content [] [disabled()] ]
    Card.card [] [Card.content [] [icons()] ]
    Card.card [] [Card.content [] [demoHelpers()] ]
] |> mountById "elmish-app"

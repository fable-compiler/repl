// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Navbar

open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Navbar.navbar [ ]
        [ Navbar.Brand.div [ ]
            [ Navbar.Item.a [ Navbar.Item.Props [ Href "#" ] ]
                [ img [ Style [ Width "2.5em" ] // Force svg display
                        Src "assets/logo_transparent.svg" ] ] ]
          Navbar.Item.a  [ Navbar.Item.HasDropdown
                           Navbar.Item.IsHoverable ]
            [ Navbar.Link.a [ ]
                [ str "Docs" ]
              Navbar.Dropdown.div [ ]
                [ Navbar.Item.a [ ]
                    [ str "Overwiew" ]
                  Navbar.Item.a [ ]
                    [ str "Elements" ]
                  Navbar.divider [ ] [ ]
                  Navbar.Item.a [ ]
                    [ str "Components" ] ] ]
          Navbar.End.div [ ]
            [ Navbar.Item.div [ ]
                [ Button.button [ Button.Color IsSuccess ]
                    [ str "Demo" ] ] ] ]

let colors () =
    Navbar.navbar [ Navbar.Color IsInfo ]
        [ Navbar.Brand.div [ ]
            [ Navbar.Item.a [ Navbar.Item.Props [ Href "#" ] ]
                [ img [ Style [ Width "2.5em" ] // Force svg display
                        Src "assets/logo_transparent.svg" ] ] ]
          Navbar.Item.a [ Navbar.Item.HasDropdown
                          Navbar.Item.IsHoverable ]
            [ Navbar.Link.a [ ]
                [ str "Docs" ]
              Navbar.Dropdown.div [ ]
                [ Navbar.Item.a [ ]
                    [ str "Overwiew" ]
                  Navbar.Item.a [ ]
                    [ str "Elements" ]
                  Navbar.divider [ ] [ ]
                  Navbar.Item.a [ ]
                    [ str "Components" ] ] ]
          Navbar.End.div [ ]
            [ Navbar.Item.div [ ]
                [ Button.button [ Button.Color IsSuccess ]
                    [ str "Demo" ] ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
    Card.card [] [Card.content [] [colors()] ]
] |> mountById "elmish-app"

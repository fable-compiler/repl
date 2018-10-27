// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Dropdown

open Fable.Helpers.React
open Fulma
open Fulma.FontAwesome

let basic () =
    Dropdown.dropdown [ Dropdown.IsHoverable ]
        [ div [ ]
            [ Button.button [ ]
                [ span [ ]
                    [ str "Dropdown" ]
                  Icon.faIcon [ Icon.Size IsSmall ] [ Fa.icon Fa.I.AngleDown ] ] ]
          Dropdown.menu [ ]
            [ Dropdown.content [ ]
                [ Dropdown.Item.a [ ] [ str "Item n°1" ]
                  Dropdown.Item.a [ ] [ str "Item n°2" ]
                  Dropdown.Item.a [ Dropdown.Item.IsActive true ] [ str "Item n°3" ]
                  Dropdown.Item.a [ ] [ str "Item n°4" ]
                  Dropdown.divider [ ]
                  Dropdown.Item.a [ ] [ str "Item n°5" ] ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
] |> mountById "elmish-app"

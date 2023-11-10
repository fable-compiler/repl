// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Dropdown

open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Dropdown.dropdown [ Dropdown.IsHoverable ]
        [ div [ ]
            [ Button.button [ ]
                [ span [ ]
                    [ str "Dropdown" ]
                  Icon.icon [ Icon.Size IsSmall ] [ i [ Class "fas fa-angle-down" ] [] ] ] ]
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

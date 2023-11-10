// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Pagination

open Fable.React
open Fulma

let basic () =
    Pagination.pagination [ ]
        [ Pagination.previous [ ]
            [ str "Previous" ]
          Pagination.next [ ]
            [ str "Next page" ]
          Pagination.list [ ]
            [ Pagination.link [ ]
                [ str "1" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "32" ]
              Pagination.link [ Pagination.Link.Current true ]
                [ str "33" ]
              Pagination.link [ ]
                [ str "34" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "77" ] ] ]

let aligment () =
    Pagination.pagination [ Pagination.IsCentered ]
        [ Pagination.previous [ ]
            [ str "Previous" ]
          Pagination.next [ ]
            [ str "Next page" ]
          Pagination.list [ ]
            [ Pagination.link [ ]
                [ str "1" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "32" ]
              Pagination.link [ Pagination.Link.Current true ]
                [ str "33" ]
              Pagination.link [ ]
                [ str "34" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "77" ] ] ]

let size () =
    Pagination.pagination [  Pagination.Size IsSmall]
        [ Pagination.previous [ ]
            [ str "Previous" ]
          Pagination.next [ ]
            [ str "Next page" ]
          Pagination.list [ ]
            [ Pagination.link [ ]
                [ str "1" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "32" ]
              Pagination.link [ Pagination.Link.Current true ]
                [ str "33" ]
              Pagination.link [ ]
                [ str "34" ]
              Pagination.ellipsis [ ]
              Pagination.link [ ]
                [ str "77" ] ] ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
    Card.card [] [Card.content [] [aligment()] ]
    Card.card [] [Card.content [] [size()] ]
] |> mountById "elmish-app"

// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Image

open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Fulma

let fixedInteractive () =
    div [ Class "block" ]
        [ Image.image [ Image.Is64x64 ]
            [ img [ Src "https://dummyimage.com/64x64/7a7a7a/fff" ] ]
          br [ ]
          Image.image [ Image.Is128x128 ]
            [ img [ Src "https://dummyimage.com/128x128/7a7a7a/fff" ] ] ]

let responsiveInteractive () =
    div [ Class "block" ]
        [ Image.image [ Image.Is2by1 ]
            [ img [ Src "https://dummyimage.com/640x320/7a7a7a/fff" ] ] ]

div [] [
    Card.card [] [Card.content [] [fixedInteractive()] ]
    Card.card [] [Card.content [] [responsiveInteractive()] ]
] |> mountById "elmish-app"

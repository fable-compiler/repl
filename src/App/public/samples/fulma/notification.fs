// More info about Fulma at https://mangelmaxime.github.io/Fulma/
module Fulma.Notification

open Fable.Core
open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Fulma

let basic () =
    Notification.notification [ ]
        [ str "I am a notification" ]

let color () =
    Notification.notification [ Notification.Color IsSuccess ]
        [ str "I am a notification with some colors" ]

let withCross () =
    Notification.notification [ Notification.Color IsDanger ]
        [ Notification.delete [ ] [ ]
          str "I am a notification with some colors and a delete button" ]

div [] [
    Card.card [] [Card.content [] [basic()] ]
    Card.card [] [Card.content [] [color()] ]
    Card.card [] [Card.content [] [withCross()] ]
] |> mountById "elmish-app"

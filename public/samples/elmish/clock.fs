module Elmish.Clock

(**
 Timer as a source of events with an SVG clock, by Zaid Ajaj.
 You can find more info about Emish architecture and samples at https://elmish.github.io/
*)

open System
open Fable.React
open Fable.React.Props
open Browser
open Elmish
open Elmish.React
type SVG = SVGAttr

// Types
type Model = CurrentTime of DateTime
type Messages = Tick of DateTime

// State
let initialState() =
    CurrentTime DateTime.Now, Cmd.none

let update (Tick next) (CurrentTime _time) =
    CurrentTime next, Cmd.none

let timerTick dispatch =
    window.setInterval(fun _ ->
        dispatch (Tick DateTime.Now)
    , 1000) |> ignore

// View
type Time =
    | Hour of int
    | Minute of int
    | Second of int

let clockHand time color width length =
    let clockPercentage =
        match time with
        | Hour n -> (float n) / 12.0
        | Second n -> (float n) / 60.0
        | Minute n -> (float n) / 60.0
    let angle = 2.0 * Math.PI * clockPercentage
    let handX = (50.0 + length * cos (angle - Math.PI / 2.0))
    let handY = (50.0 + length * sin (angle - Math.PI / 2.0))
    line [ X1 "50"
           Y1 "50"
           X2 handX
           Y2 handY
           // Qualify these props to avoid name collision with CSSProp
           SVG.Stroke color
           SVG.StrokeWidth width ] []

let handTop n color length fullRound =
    let revolution = float n
    let angle = 2.0 * Math.PI * (revolution / fullRound)
    let handX = (50.0 + length * cos (angle - Math.PI / 2.0))
    let handY = (50.0 + length * sin (angle - Math.PI / 2.0))
    circle [ Cx handX
             Cy handY
             R "2"
             SVG.Fill color ] []

let view (CurrentTime time) dispatch =
    svg
      [ ViewBox "0 0 100 100"
        SVG.Width "350px" ]
      [ circle
          [ Cx "50"
            Cy "50"
            R "45"
            SVG.Fill "#0B79CE" ] []
        // Hours
        clockHand (Hour time.Hour) "lightgreen" "2" 25.0
        handTop time.Hour "lightgreen" 25.0 12.0
        // Minutes
        clockHand (Minute time.Minute) "white" "2" 35.0
        handTop time.Minute "white" 35.0 60.0
        // Seconds
        clockHand (Second time.Second) "#023963" "1" 40.0
        handTop time.Second "#023963" 40.0 60.0
        // circle in the center
        circle
          [ Cx "50"
            Cy "50"
            R "3"
            SVG.Fill "#0B79CE"
            SVG.Stroke "#023963"
            SVG.StrokeWidth 1.0 ] []
      ]

// App
Program.mkProgram initialState update view
|> Program.withSubscription (fun _ -> Cmd.ofSub timerTick)
|> Program.withReactSynchronous "elmish-app"
|> Program.run
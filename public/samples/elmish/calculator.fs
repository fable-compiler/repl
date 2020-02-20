module Elmish.Calculator

(**
 Calculator sample, by Zaid Ajaj.
 You can find more info about Emish architecture and samples at https://elmish.github.io/
*)

open Fable.React
open Fable.React.Props
open Elmish
open Elmish.React

// Types
type Input =
    | Const of int
    | Plus
    | Minus
    | Times
    | Div
    | Clear
    | Equals

type Model =  InputStack of Input list

type Messages = PushInput of Input

// State

/// Active pattern that matches with an operation
let (|Operation|_|) = function
    | Plus -> Some Plus
    | Minus -> Some Minus
    | Times -> Some Times
    | Div -> Some Div
    | _ -> None

/// Given a model, calculate the answer
let solve (state : Input list) =
  match state with
  | [Const x; Operation op; Const y] ->
      match op with
      | Plus -> Some (x + y)
      | Minus -> Some (x - y)
      | Times -> Some (x * y)
      | Div when y = 0 -> None // division by zero not allowed
      | Div -> Some (x / y)
      | _ -> None
  | _ -> None


/// Given two integers, append the second on the first
/// concatInts 3 5 -> 35
/// concatInts 1 1 -> 11
let concatInts x y = x * 10 + y * (sign x)

let initialState() : Model = InputStack []

/// Given the input message and the state of the app, calculate the next state. This is known as the update function
let update (PushInput input) (InputStack xs)  =
    if input = Clear then InputStack []
    else
    match xs with
    | [] ->
        match input with
        | Minus -> InputStack [Minus]
        | Operation op -> InputStack [ ]
        | Equals -> InputStack []
        | _ -> InputStack [input]
    | [Minus] ->
        match input with
        | Const x -> InputStack [ Const (-x) ]
        | _ -> InputStack xs
    | [Const x] ->
        match input with
        | Const y -> InputStack [Const (concatInts x y)]
        | Operation op -> InputStack [Const x; op]
        | _ -> InputStack xs
    | [Const x; Operation op] ->
        match input with
        | Const y -> InputStack [Const x; op; Const y] // push Const y to stack
        | Minus when op = Minus -> InputStack [Const x; Plus] // Minus Minus = Plus
        | Minus -> InputStack [Const x; op; Minus]
        | Operation otherOp -> InputStack [Const x; otherOp] // replace op with otherOp
        | _ -> InputStack xs // do nothing
    | [Const x; Operation op; Minus] ->
        match input with
        | Const y -> InputStack [Const x; op; Const (-y)]
        | _ -> InputStack xs
    | [Const x; Operation op; Const y] ->
        match input with
        | Const y' -> InputStack [Const x; op; Const (concatInts y y')]
        | Equals ->
            match solve xs with
            | Some answer -> InputStack [Const answer]
            | None -> InputStack xs
        | Operation op ->
            match solve xs with
            | Some answer -> InputStack [Const answer; op]
            | None -> InputStack xs
        | _ -> InputStack xs
    | _ -> InputStack xs

// View
let inputToString = function
    | Plus -> "+"
    | Minus -> "-"
    | Times -> "*"
    | Div -> "/"
    | Equals -> "="
    | Clear -> "CE"
    | Const n -> string n

let modelToString (InputStack xs) =
    xs
    |> Seq.map inputToString
    |> String.concat " "

let digitBtn n dispatch =
    let message = PushInput (Const n)
    div
      [ Class "calculator-button is-digit"; OnClick (fun _ -> dispatch message) ]
      [ str (string n) ]

let operationBtn input dispatch =
    let message = PushInput input
    div
        [ Class "calculator-button is-op"; OnClick (fun _ -> dispatch message) ]
        [ str (inputToString input) ]

let tableRow xs = tr [] [ for x in xs -> td [] [x] ]

let view model dispatch =
    let digit n = digitBtn n dispatch
    let opBtn op = operationBtn op dispatch
    div
      [ Class "calculator" ]
      [ h2
          [ Style [ Height 40; MarginLeft 20 ] ]
          [ str (modelToString model) ]
        br []
        table []
            [ tableRow [digit 1; digit 2; digit 3; opBtn Plus]
              tableRow [digit 4; digit 5; digit 6; opBtn Minus]
              tableRow [digit 7; digit 8; digit 9; opBtn Times]
              tableRow [opBtn Input.Clear; digit 0; opBtn Equals; opBtn Div] ] ]

// App
Program.mkSimple initialState update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run

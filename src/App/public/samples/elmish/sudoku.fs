module Sudoku

open System.Collections.Generic
open Fable.React
open Fable.React.Props
open Elmish
open Elmish.React

type Box = int
type Sudoku = Box array array

let rows = id
let cols (sudoku:Sudoku) =
    sudoku
    |> Array.mapi (fun a row -> row |> Array.mapi (fun b cell -> sudoku.[b].[a]))

let getBoxIndex count row col =
   let n = row/count
   let m = col/count
   n * count + m

let boxes (sudoku:Sudoku) =
    let l = sudoku |> Array.length
    let d = float l |> System.Math.Sqrt |> int
    let list = new List<_>()
    for a in 0..l - 1 do
        list.Add(new List<_>())

    for a in 0..(l - 1) do
        for b in 0..(l - 1) do
            list.[getBoxIndex d a b].Add(sudoku.[a].[b])

    list
      |> Seq.map Seq.toArray

let toSudoku x : Sudoku =
    x
    |> Seq.map Seq.toArray
    |> Seq.toArray

let allUnique numbers =
    let set = new HashSet<_>()
    numbers
    |> Seq.filter ((<>) 0)
    |> Seq.forall set.Add

let solvable sudoku =
    rows sudoku
    |> Seq.append (cols sudoku)
    |> Seq.append (boxes sudoku)
    |> Seq.forall allUnique

let replaceAtPos (x:Sudoku) row col newValue :Sudoku =
    [| for a in 0..(Array.length x - 1) ->
        [| for b in 0..(Array.length x - 1) ->
            if a = row && b = col then newValue else x.[a].[b] |] |]

let rec substitute row col (x:Sudoku) =
    let a,b = if col >= Array.length x then row+1,0 else row,col
    if a >= Array.length x then seq { yield x } else
    if x.[a].[b] = 0 then
        [1..Array.length x]
            |> Seq.map (replaceAtPos x a b)
            |> Seq.filter solvable
            |> Seq.collect (substitute a (b+1))
     else substitute a (b+1) x

let getFirstSolution = substitute 0 0 >> Seq.head

let puzzle =
    [[0; 0; 8;  3; 0; 0;  6; 0; 0]
     [0; 0; 4;  0; 0; 0;  0; 1; 0]
     [6; 7; 0;  0; 8; 0;  0; 0; 0]

     [0; 1; 6;  4; 3; 0;  0; 0; 0]
     [0; 0; 0;  7; 9; 0;  0; 2; 0]
     [0; 9; 0;  0; 0; 0;  4; 0; 1]

     [0; 0; 0;  9; 1; 0;  0; 0; 5]
     [0; 0; 3;  0; 5; 0;  0; 0; 2]
     [0; 5; 0;  0; 0; 0;  0; 7; 4]]
    |> toSudoku

let init() = puzzle

type Model = Sudoku

type Msg =
| Reset
| Solve

let update (msg:Msg) (model:Model) =
    match msg with
    | Reset -> puzzle
    | Solve -> getFirstSolution model

let tableRow xs = tr [] [ for x in xs -> td [] [x] ]


let view (model:Model) dispatch =
    div
      []
      [ div
          [ Class "calc" ]
          [ table []
                [ for row in model ->
                    tableRow [
                        for n in row ->
                            div [ Class "digit" ] [
                                str (if n = 0 then "" else string n) ] ] ]
          ]
        br []
        div
          [ Class "controls" ]
          [ div
              [ Class "op-button"
                OnClick (fun _ -> dispatch Reset) ]
              [ str "Reset" ]
            div
              [ Class "op-button"
                OnClick (fun _ -> dispatch Solve) ]
              [ str "Solve" ]]]

// App
Program.mkSimple init update view
|> Program.withReactSynchronous "elmish-app"
|> Program.run

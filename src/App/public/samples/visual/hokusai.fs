module Hokusai

(*
Hokusai and Julia: rendering fractals using HTML5 canvas
This demo is based on Tomas Petricek's F# Advent Calendar post that explores
Japanese art and renders The Great Wave by Hokusai using the Julia fractal.
*)

open Fable.Core
open Browser.Types
open Browser

type Complex =
  | Complex of float * float
  /// Calculate the absolute value of a complex number
  static member Abs(Complex(r, i)) =
    let num1, num2 = abs r, abs i
    if (num1 > num2) then
      let num3 = num2 / num1
      num1 * sqrt(1.0 + num3 * num3)
    elif num2 = 0.0 then
      num1
    else
      let num4 = num1 / num2
      num2 * sqrt(1.0 + num4 * num4)
  /// Add real and imaginary components pointwise
  static member (+) (Complex(r1, i1), Complex(r2, i2)) =
    Complex(r1+r2, i1+i2)

module ComplexModule =
  /// Calculates nth power of a complex number
  let Pow(Complex(r, i), power) =
    let num = Complex.Abs(Complex(r, i))
    let num2 = atan2 i r
    let num3 = power * num2
    let num4 = num ** power
    Complex(num4 * cos(num3), num4 * sin(num3))

/// Constant that generates nice fractal
let c = Complex(-0.70176, -0.3842)

/// Generates sequence for given coordinates
let iterate x y =
  let rec loop current = seq {
    yield current
    yield! loop (ComplexModule.Pow(current, 2.0) + c) }
  loop (Complex(x, y))

let countIterations max x y =
  iterate x y
  |> Seq.take (max - 1)
  |> Seq.takeWhile (fun v -> Complex.Abs(v) < 2.0)
  |> Seq.length

// Transition between colors in 'count' steps
let (--) clr count = clr, count
let (-->) ((r1, g1, b1), count) (r2, g2, b2) = [
  for c in 0 .. count - 1 ->
    let k = c / count |> byte
    let mid v1 v2 =
      (v1 + (v2 - v1) * k)
    (mid r1 r2, mid g1 g2, mid b1 b2) ]

// Palette with colors used by Hokusai
let palette =
  [| // 3x sky color & transition to light blue
     yield! (245uy, 219uy, 184uy) --3--> (245uy, 219uy, 184uy)
     yield! (245uy, 219uy, 184uy) --4--> (138uy, 173uy, 179uy)
     // to dark blue and then medium dark blue
     yield! (138uy, 173uy, 179uy) --4--> (2uy, 12uy, 74uy)
     yield! (2uy, 12uy, 74uy)     --4--> (61uy, 102uy, 130uy)
     // to wave coloruy,  then light blue & back to wave
     yield! (61uy, 102uy, 130uy)  -- 8--> (249uy, 243uy, 221uy)
     yield! (249uy, 243uy, 221uy) --32--> (138uy, 173uy, 179uy)
     yield! (138uy, 173uy, 179uy) --32--> (61uy, 102uy, 130uy)
  |]

// Specifies what range of the set to draw
let w = -0.4, 0.4
let h = -0.95, -0.35

// Create bitmap that matches the size of the canvas
let width = 400.0
let height = 300.0


/// Set pixel value in ImageData to a given color
let setPixel (img:ImageData) x y width (r, g, b) =
  let index = (x + y * int width) * 4
  img.data.[index+0] <- r
  img.data.[index+1] <- g
  img.data.[index+2] <- b
  img.data.[index+3] <- 255uy

/// Dynamic operator that returns HTML element by ID
let (?) (doc:Document) name :'R =
  doc.getElementById(name) :?> 'R

/// Render fractal asynchronously with sleep after every line
let render () = async {
  // Get <canvas> element & create image for drawing
  let canv : HTMLCanvasElement = document?canvas
  let ctx = canv.getContext_2d()
  let img = ctx.createImageData(float width, float height)

  // For each pixel, transform to the specified range
  // and get color using countInterations and palette
  for x in 0 .. int width - 1 do
    for y in 0 .. int height - 1 do
      let x' = (float x / width * (snd w - fst w)) + fst w
      let y' = (float y / height * (snd h - fst h)) + fst h
      let it = countIterations palette.Length x' y'
      setPixel img x y width (palette.[it])

    // Insert non-blocking waiting & update the fractal
    do! Async.Sleep(1)
    ctx.putImageData(img, 0.0, 0.0) }

/// Setup button event handler to start the rendering
let go : HTMLButtonElement = document?go
go.addEventListener("click", fun _ ->
  render() |> Async.StartImmediate)
module Mandelbrot

// You can draw a rectangle to zoom in an area (feature added by Avi Avni)

open Fable.Core
open Fable.Core.JsInterop
open Browser.Types
open Browser

type Complex = { r : double; i : double }
type Color = { r : uint8; g : uint8; b : uint8; a : uint8 }

let maxIter = 255

let height = 1024
let width = 1024

let mutable minX = -2.0
let mutable maxX = 2.0
let mutable minY = -1.5
let mutable maxY = 3.5
let mutable rectX = 0.0
let mutable rectY = 0.0
let mutable rectW = 0.0
let mutable rectH = 0.0

let iteratePoint (s : Complex) (p : Complex) : Complex =
    { r = s.r + p.r*p.r - p.i*p.i; i = s.i + 2.0 * p.i * p.r }

let getIterationCount (p : Complex) =
    let mutable z = p
    let mutable i = 0
    while i < maxIter && (z.r*z.r + z.i*z.i < 4.0) do
      z <- iteratePoint p z
      i <- i + 1
    i

let getCoord (x : int, y : int) : Complex =
    let p = { r = float x * (maxX - minX) / float width + minX
            ; i = float y * (maxY - minY) / float height + minY }
    p

let getCoordColor (x : int, y : int) : Color =
    let p = getCoord (x, y)
    let i = getIterationCount p
    { r = uint8 (255/(i%5)); g = uint8 (255/(i%3)); b = uint8 (255/(i%7)); a = 255uy }

let showSet() =
    let canvas = document.getElementsByTagName("canvas").[0] :?> HTMLCanvasElement
    let ctx = canvas.getContext_2d()

    let img = ctx.createImageData(float width, float height)
    for y = 0 to height-1 do
        for x = 0 to width-1 do
            let index = (x + y * width) * 4
            let color = getCoordColor (x, y)
            img.data.[index+0] <- color.r
            img.data.[index+1] <- color.g
            img.data.[index+2] <- color.b
            img.data.[index+3] <- color.a
    ctx.putImageData(img, 0., 0.)

    ctx.fillStyle <- !^"rgba(200,0,0,0.5)"
    ctx.fillRect (rectX, rectY, rectW, rectH)


document.addEventListener("mousedown", fun de ->
    let de = de :?> MouseEvent
    rectX <- de.clientX
    rectY <- de.clientY
    rectW <- 0.0
    rectH <- 0.0
    showSet())

document.addEventListener("mousemove", fun de ->
    let de = de :?> MouseEvent
    if de.buttons = 1.0 then
        rectW <- de.clientX - rectX
        rectH <- de.clientY - rectY
        showSet())

document.addEventListener("mouseup", fun de ->
    let de = de :?> MouseEvent
    let p1 = getCoord (int rectX, int rectY)
    let p2 = getCoord (int (rectX + rectW), int (rectY + rectH))
    minX <- min p1.r p2.r
    maxX <- max p1.r p2.r
    minY <- min p1.i p2.i
    maxY <- max p1.i p2.i
    rectX <- 0.0
    rectY <- 0.0
    rectW <- 0.0
    rectH <- 0.0
    showSet())

showSet()

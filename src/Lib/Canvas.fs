module Fable.Repl.Lib.Canvas

open Fable.Core
open Fable.Import
open React
open React.Props

type DrawOp =
    | LineTo of (float * float)
    | MoveTo of (float * float)
    | BeginPath
    | Scale of (float * float)
    | Rotate of float
    | Save
    | Translate of (float * float)
    | Restore
    | Fill
    | Rect of (float * float * float * float)
    | FillStyle of U3<string,Browser.CanvasGradient,Browser.CanvasPattern>
    | Batch of DrawOp list
    | Stroke
    | ClearReact of (float * float * float * float)

let rec drawOps (ctx : Browser.CanvasRenderingContext2D) (ops : DrawOp list) =
    for op in ops do
        match op with
        | Rect opts -> ctx.rect opts
        | Stroke -> ctx.stroke()
        | Batch ops -> drawOps ctx ops
        | LineTo opts -> ctx.lineTo opts
        | MoveTo opts -> ctx.moveTo opts
        | BeginPath -> ctx.beginPath()
        | Scale opts -> ctx.scale opts
        | Rotate opts -> ctx.rotate opts
        | Save -> ctx.save()
        | Translate opts -> ctx.translate opts
        | Restore -> ctx.restore()
        | Fill -> ctx.fill()
        | FillStyle opts -> ctx.fillStyle <- opts
        | ClearReact opts -> ctx.clearRect opts

type private Props =
    | Height of float
    | Width of float
    | DrawOps of DrawOp array
    | OnTick of ((float * float) -> unit)
    | IsPlaying of bool
    | OnMouseMove of (Browser.MouseEvent -> unit)
    | Style of HTMLAttr

open Fable.Core.JsInterop

type Size =
    { Width : float
      Height : float }

type CanvasBuilder =
    { Size : Size
      DrawOps : DrawOp list
      IsPlaying : bool
      OnTick : (float * float) -> unit
      OnMouseMove : Browser.MouseEvent -> unit
      Style : CSSProp list }

let inline private canvas (props: Props list) : ReactElement =
    ofImport "default" "./js/react_canvas.js" (keyValueList CaseRules.LowerFirst props) [ ]

let initialize (size : Size) : CanvasBuilder =
    { Size = size
      DrawOps = []
      OnTick = ignore
      IsPlaying = true
      OnMouseMove = ignore
      Style = [] }

let draw (drawOp : DrawOp) (builder : CanvasBuilder) : CanvasBuilder =
    { builder with DrawOps = builder.DrawOps @ [drawOp] }

let playing value (builder : CanvasBuilder) : CanvasBuilder =
    { builder with IsPlaying = value }

let onTick callback (builder : CanvasBuilder) : CanvasBuilder =
    { builder with OnTick = callback }

let onMouseMove callback (builder : CanvasBuilder) : CanvasBuilder =
    { builder with OnMouseMove = callback}

let withStyle style (builder : CanvasBuilder) : CanvasBuilder =
    { builder with Style = style }

let render (builder : CanvasBuilder) =
    canvas [ Width builder.Size.Width
             Height builder.Size.Height
             DrawOps (List.toArray builder.DrawOps)
             OnTick builder.OnTick
             IsPlaying builder.IsPlaying
             OnMouseMove builder.OnMouseMove
             Style !!(keyValueList CaseRules.LowerFirst builder.Style) ]

// Fractal playground by Mark Pattison (Twitter @mark_pattison)
// Source code available in Github: https://github.com/markpattison/FableFractal

module Elmish =

    open System
    open Fable.Core
    open Browser
    open Browser.Types

    // ------------------------------------------------------------------------------------------------
    // Virtual Dom bindings
    // ------------------------------------------------------------------------------------------------

    type IVirtualdom =
        abstract h: arg1: string * arg2: obj * arg3: obj[] -> obj
        abstract diff: tree1:obj * tree2:obj -> obj
        abstract patch: node:obj * patches:obj -> Node
        abstract create: e:obj -> Node

    [<Global("virtualDom")>]
    let Virtualdom: IVirtualdom = jsNative

    // ------------------------------------------------------------------------------------------------
    // F# representation of DOM and rendering using VirtualDom
    // ------------------------------------------------------------------------------------------------

    type DomAttribute =
        | EventHandler of (Event -> unit)
        | Attribute of string
        | Property of string

    type DomNode =
        | Text of string
        | Element of tag:string * attributes:(string * DomAttribute)[] * children : DomNode[]

    let createTree tag args children =
            let attrs = ResizeArray<_>()
            let props = ResizeArray<_>()
            for k, v in args do
                match k, v with
                | "style", Attribute v
                | "style", Property v ->
                        let args = v.Split(';') |> Array.map (fun a ->
                            let sep = a.IndexOf(':')
                            if sep > 0 then a.Substring(0, sep), box (a.Substring(sep+1))
                            else a, box "" )
                        props.Add ("style", JsInterop.createObj args)
                | "class", Attribute v
                | "class", Property v ->
                        attrs.Add (k, box v)
                | k, Attribute v ->
                        attrs.Add (k, box v)
                | k, Property v ->
                        props.Add (k, box v)
                | k, EventHandler f ->
                        props.Add (k, box f)
            let attrs = JsInterop.createObj attrs
            let props = JsInterop.createObj (Seq.append ["attributes", attrs] props)
            let elem = Virtualdom.h(tag, props, children)
            elem

    let rec render node =
        match node with
        | Text(s) ->
                box s
        | Element(tag, attrs, children) ->
                createTree tag attrs (Array.map render children)

    // ------------------------------------------------------------------------------------------------
    // Helpers for dynamic property access & for creating HTML elements
    // ------------------------------------------------------------------------------------------------

    type Dynamic() =
        [<Emit("$0[$1]")>]
        static member (?) (d:Dynamic, s:string) : Dynamic = jsNative

    let text s = Text(s)
    let (=>) k v = k, Property(v)
    let (=!>) k f = k, EventHandler(fun e -> f e)

    type El() =
        static member (?) (_:El, n:string) = fun a b ->
            Element(n, Array.ofList a, Array.ofList b)

    let h = El()

    // ------------------------------------------------------------------------------------------------
    // Entry point - create event and update on trigger
    // ------------------------------------------------------------------------------------------------

    type Cmd<'Msg> = (('Msg -> unit) -> unit) list

    type SingleObservable<'T>() =
        let mutable listener: IObserver<'T> option = None
        member _.Trigger v =
            match listener with
            | Some lis -> lis.OnNext v
            | None -> ()
        interface IObservable<'T> with
            member _.Subscribe w =
                listener <- Some w
                { new IDisposable with
                    member _.Dispose() = () }

    let app id (init: unit -> 'Model * Cmd<'Msg>) update view =
        let event = new Event<'Msg>()
        let trigger e = event.Trigger(e)
        let model, cmds = init()
        let mutable state = model
        let mutable tree = view state trigger |> render
        let mutable container = Virtualdom.create(tree)
        document.getElementById(id).appendChild(container) |> ignore

        let handleEvent evt =
            let model, cmds = update evt state
            let newTree = view model trigger |> render
            let patches = Virtualdom.diff(tree, newTree)
            container <- Virtualdom.patch(container, patches)
            tree <- newTree
            state <- model
            for cmd in cmds do
                cmd trigger

        event.Publish.Add(handleEvent)
        for cmd in cmds do
            cmd trigger

module WebGLHelper =

  open Browser.Types
  open Fable.Core.JsInterop

  // Shorthand
  type GL = WebGLRenderingContext

  let getWebGLContext (canvas: HTMLCanvasElement) =
      let getContext ctxString =
          canvas.getContext(ctxString, createObj [ "premultipliedAlpha" ==> false ]) |> unbox<WebGLRenderingContext>

      let webgl = getContext "webgl"

      // If we have webgl = null in JS then try to get experimental-webgl
      // Edge and webkit use experimental-webgl
      if not (unbox webgl) then
          getContext "experimental-webgl"
      else
          webgl

  let createShaderProgram (gl:GL) vertex fragment =
      let vertexShader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vertexShader, vertex)
      gl.compileShader(vertexShader)

      let fragShader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fragShader, fragment)
      gl.compileShader(fragShader)

      let program = gl.createProgram()
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragShader)
      gl.linkProgram(program)

      program

  let createUniformLocation (gl:GL) program name =
      let uniformLocation = gl.getUniformLocation(program, name)
      uniformLocation

  let createAttributeLocation (gl : GL) program name =
      let attributeLocation = gl.getAttribLocation(program, name)
      gl.enableVertexAttribArray(attributeLocation)

      attributeLocation

  let createBuffer (items : float[]) (gl:GL) =
      let buffer = gl.createBuffer()

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
      gl.bufferData(gl.ARRAY_BUFFER, (createNew Fable.Core.JS.Constructors.Float32Array items) |> unbox, gl.STATIC_DRAW)

      buffer

  let clear (gl:GL) (width, height) =
      gl.clearColor(1.0, 1.0, 1.0, 1.0)

      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
      //gl.enable(gl.DEPTH_TEST)
      gl.enable(gl.BLEND)

      gl.viewport(0., 0., width, height)
      gl.clear(float (int gl.COLOR_BUFFER_BIT ||| int gl.DEPTH_BUFFER_BIT))

module Types =

  open Browser.Types

  type Msg =
      | MandelbrotClick
      | JuliaClick
      | JuliaMoveClick
      | JuliaChangeSeedClick
      | MouseDownMsg of MouseEvent
      | MouseUpMsg of MouseEvent
      | MouseMoveMsg of MouseEvent
      | MouseLeaveMsg of MouseEvent
    //   | WheelMsg of WheelEvent
    //   | TouchStartMsg of TouchEvent
    //   | TouchEndMsg of TouchEvent
    //   | TouchMoveMsg of TouchEvent
      | RenderMsg

  type JuliaSeed = { SeedX: float; SeedY: float }
  type JuliaScrolling = Move | ChangeSeed

  type FractalType =
      | Mandelbrot
      | Julia of JuliaSeed * JuliaScrolling

  type Transform =
      | Scrolling of float * float
      | Pinching of float
      | NoTransform

  type Model =
      {
          CanvasHeight: float
          Zoom: float
          FractalType: FractalType
          X: float
          Y: float
          Now: System.DateTime
          Render: (Model -> unit) option
          Transform: Transform
      }

module FractalRenderer =

  open System
  open Browser
  open Browser.Types
  open WebGLHelper
  open Types

  let myVertex = """
      precision highp float;
      precision highp int;

      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      varying vec2 vTextureCoord;
      void main() {
        gl_Position = aVertexPosition;
        vTextureCoord = aTextureCoord;
      }
  """

  let myFragment = """
      precision highp float;
      precision highp int;
      uniform float uWidthOverHeight;
      uniform float uZoom;
      uniform vec2 uOffset, uJuliaSeed;
      uniform bool uIsJulia;
      varying vec2 vTextureCoord;
      vec2 calculatePosition(vec2 inputCoords, float zoom, float widthOverHeight, vec2 offset)
      {
          return (inputCoords - 0.5) * vec2(widthOverHeight, 1.0) / zoom + offset;
      }
      vec4 applyColourMap(float x)
      {
          return vec4(sin(x * 4.0), sin (x * 5.0), sin (x * 6.0), 1.0);
      }
      vec2 cConj(vec2 z)
      {
          return vec2(z.x, -z.y);
      }
      vec2 cMul(vec2 a, vec2 b)
      {
          return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
      }
      vec2 cSq(vec2 z)
      {
          return cMul(z, z);
      }
      vec2 cCube(vec2 z)
      {
          return cMul(z, cMul(z, z));
      }
      vec2 cPow4(vec2 z)
      {
          return cSq(cSq(z));
      }
      vec2 cDiv(vec2 a, vec2 b)
      {
          return cMul(a, cConj(b));
      }
      vec2 cRecip(vec2 z)
      {
          return cDiv(vec2(1.0, 0.0), z);
      }
      vec2 f(vec2 z, vec2 offset)
      {
          return cSq(z) + offset;
      }
      float pixelResult(vec2 z, vec2 offset)
      {
          float result = 0.0;
          vec2 zsq = z * z;
          int iterations = 0;
          for (int i = 0; i < 128; i++)
          {
              iterations = i;
              if (zsq.x + zsq.y > 49.0)
              {
                  break;
              }
              z = f(z, offset);
              zsq = z * z;
          }
          if (iterations == 127)
          {
              result = 0.0;
          }
          else
          {
              result = float(iterations) + (log(2.0 * log(7.0)) - log(log(zsq.x + zsq.y))) / log(2.0);
              result = log(result * 0.4) / log(128.0);
          }
          return result;
      }
      void main(void)
      {
          vec2 z = calculatePosition(vTextureCoord, uZoom, uWidthOverHeight, uOffset);
          float result = pixelResult(z, uIsJulia ? uJuliaSeed : z);
          gl_FragColor = applyColourMap(result);
      }
  """

  let initBuffers gl =
      let positions =
          createBuffer
              [|
                  -1.0; -1.0;
                    1.0; -1.0;
                  -1.0;  1.0;
                    1.0;  1.0
              |] gl
      let textureCoords =
          createBuffer
              [|
                  0.0; 0.0;
                  1.0; 0.0;
                  0.0; 1.0;
                  1.0; 1.0
              |] gl
      positions, textureCoords

  let create (holder : Element) =

      let canvas = document.createElement "canvas" :?> HTMLCanvasElement
      let width = 640
      let height = 480

      canvas.width <- float width
      canvas.height <- float height

      holder.appendChild(canvas) |> ignore

      let context = getWebGLContext canvas

      let program = createShaderProgram context myVertex myFragment

      let positionBuffer, colourBuffer = initBuffers context
      let vertexPositionAttribute = createAttributeLocation context program "aVertexPosition"
      let textureCoordAttribute = createAttributeLocation context program "aTextureCoord"
      let widthOverHeightUniform = createUniformLocation context program "uWidthOverHeight"
      let zoomUniform = createUniformLocation context program "uZoom"
      let offsetUniform = createUniformLocation context program "uOffset"
      let juliaSeedUniform = createUniformLocation context program "uJuliaSeed"
      let isJuliaUniform = createUniformLocation context program "uIsJulia"

      let draw widthOverHeight zoom x y jx jy isJulia =
          context.useProgram(program)

          context.bindBuffer(context.ARRAY_BUFFER, positionBuffer)
          context.vertexAttribPointer(vertexPositionAttribute, 2.0, context.FLOAT, false, 0.0, 0.0)
          context.bindBuffer(context.ARRAY_BUFFER, colourBuffer)
          context.vertexAttribPointer(textureCoordAttribute, 2.0, context.FLOAT, false, 0.0, 0.0)

          context.uniform1f(widthOverHeightUniform, widthOverHeight)
          context.uniform1f(zoomUniform, zoom)
          context.uniform2f(offsetUniform, x, y)
          context.uniform2f(juliaSeedUniform, jx, jy)
          context.uniform1i(isJuliaUniform, if isJulia then 1.0 else 0.0)

          context.drawArrays (context.TRIANGLE_STRIP, 0., 4.0)

      let clear = clear context

      // Try not to use "context" after this point, bind a function above.

      let imageLoadCanvas = document.createElement "canvas" :?> HTMLCanvasElement
      let imageLoadCanvasContext = imageLoadCanvas.getContext_2d()

      let mutable last = DateTime.Now

      let render model =
          match model with
          | model when model.Now <> last ->
              last <- model.Now

              let resolution = canvas.width, canvas.height
              let widthOverHeight = if canvas.height = 0.0 then 1.0 else canvas.width / canvas.height
              clear resolution

              match model.FractalType with
              | Mandelbrot ->
                  draw widthOverHeight model.Zoom model.X model.Y 0.0 0.0 false
              | Julia ({ SeedX = seedX; SeedY = seedY }, _) ->
                  draw widthOverHeight model.Zoom model.X model.Y seedX seedY true

          | _ -> ignore()

      render, height

module State =

    open Browser
    open Browser.Types
    open Fable.Core.JsInterop
    open Types

    // type INormalizedWheel =
    //     abstract member pixelX: float
    //     abstract member pixelY: float
    //     abstract member spinX: float
    //     abstract member spinY: float

    // let normalizeWheel : WheelEvent -> INormalizedWheel = importDefault "normalize-wheel"

    let renderCommand =
        let sub dispatch =
            window.requestAnimationFrame(fun _ -> dispatch RenderMsg) |> ignore
        [sub]

    let initMandelbrot =
        {
            CanvasHeight = 1.0
            Zoom = 0.314
            FractalType = Mandelbrot
            X = -0.5
            Y = 0.0
            Now = System.DateTime.Now
            Render = None
            Transform = NoTransform
        }

    let initJulia =
        {
            CanvasHeight = 1.0
            Zoom = 0.314
            FractalType = Julia ({ SeedX = 0.0; SeedY = 0.0 }, ChangeSeed)
            X = 0.0
            Y = 0.0
            Now = System.DateTime.Now
            Render = None
            Transform = NoTransform
        }

    let init() =
        document.addEventListener("gesturestart", (fun e -> e.preventDefault()), true)
        document.addEventListener("gesturechange", (fun e -> e.preventDefault()), true)
        document.addEventListener("gestureend", (fun e -> e.preventDefault()), true)
        document.addEventListener("scroll", (fun e -> e.preventDefault()), true)
        initMandelbrot, renderCommand

    let updateForMove x y model =
        match model.Transform with
        | Scrolling (lastScreenX, lastScreenY) ->
            { model with
                X = model.X - (x - lastScreenX) / (model.Zoom * model.CanvasHeight)
                Y = model.Y + (y - lastScreenY) / (model.Zoom * model.CanvasHeight)
                Transform = Scrolling (x, y)
            }, []
        | _ -> model, []

    let updateForSeedChange seed x y model =
        match model.Transform with
        | Scrolling (lastScreenX, lastScreenY) ->
            { model with
                FractalType = Julia ( {
                                        SeedX = seed.SeedX - (x - lastScreenX) / (model.Zoom * model.CanvasHeight)
                                        SeedY = seed.SeedY - (y - lastScreenY) / (model.Zoom * model.CanvasHeight)}, ChangeSeed)
                Transform = Scrolling (x, y)
            }, []
        | _ -> model, []

    let update msg model =
        match model.FractalType, msg with
        | Julia _, MandelbrotClick _ ->
            { model with
                Zoom = 0.314; FractalType = Mandelbrot; X = -0.5; Y = 0.0
            }, []

        | Mandelbrot, JuliaClick ->
            { model with
                Zoom = 0.314; FractalType = Julia ({ SeedX = 0.0; SeedY = 0.0 }, ChangeSeed); X = 0.0; Y = 0.0
            }, []

        | Julia (seed, _), JuliaMoveClick ->
            { model with FractalType = Julia (seed, Move) }, []

        | Julia (seed, _), JuliaChangeSeedClick ->
            { model with FractalType = Julia (seed, ChangeSeed) }, []

        | _, MouseDownMsg me when me.button = 0.0 ->
            { model with
                Transform = Scrolling (me.screenX, me.screenY)
            }, []

        | _, MouseUpMsg me when me.button = 0.0 -> { model with Transform = NoTransform }, []

        | _, MouseLeaveMsg _ -> { model with Transform = NoTransform }, []

        | Mandelbrot, MouseMoveMsg me
        | Julia (_, Move), MouseMoveMsg me ->
            updateForMove me.screenX me.screenY model

        | Julia (seed, ChangeSeed), MouseMoveMsg me ->
            updateForSeedChange seed me.screenX me.screenY model

        // | _, WheelMsg we ->
        //     let zoom = (normalizeWheel we).pixelY / 100.0
        //     { model with Zoom = model.Zoom * 0.99 ** zoom }, []

        // | _, TouchEndMsg _ -> { model with Transform = NoTransform }, []

        // | _, TouchStartMsg te when te.touches.Length = 1 ->
        //     { model with
        //         Transform = Scrolling (te.touches.[0].clientX, te.touches.[0].clientY)
        //     }, []

        // | _, TouchStartMsg te when te.touches.Length = 2 ->
        //     let dx = te.touches.[1].clientX - te.touches.[0].clientX
        //     let dy = te.touches.[1].clientY - te.touches.[0].clientY
        //     let distance = sqrt (dx * dx + dy * dy)
        //     { model with
        //         Transform = Pinching distance
        //     }, []

        // | Mandelbrot, TouchMoveMsg te
        // | Julia (_, Move), TouchMoveMsg te when te.touches.Length = 1 ->
        //     updateForMove te.touches.[0].screenX te.touches.[0].screenY model

        // | Julia (seed, ChangeSeed), TouchMoveMsg te when te.touches.Length = 1 ->
        //     updateForSeedChange seed te.touches.[0].screenX te.touches.[0].screenY model

        // | Mandelbrot, TouchMoveMsg te
        // | Julia _, TouchMoveMsg te when te.touches.Length = 2 ->
        //     match model.Transform with
        //     | Pinching lastDistance ->
        //         let dx = te.touches.[1].clientX - te.touches.[0].clientX
        //         let dy = te.touches.[1].clientY - te.touches.[0].clientY
        //         let distance = sqrt (dx * dx + dy * dy)
        //         { model with
        //             Zoom = model.Zoom * 0.99 ** (lastDistance - distance)
        //             Transform = Pinching distance
        //         }, []
        //     | _ -> model, []

        | _, RenderMsg ->
            match model.Render with
            | None ->
                let holder = document.getElementById("Fractal")
                match holder with
                | null -> model, renderCommand
                | h ->
                    let renderer, height = FractalRenderer.create h
                    { model with Render = Some renderer; CanvasHeight = float height }, renderCommand
            | Some render ->
                render model
                { model with Now = System.DateTime.Now }, renderCommand

        | _ -> model, []

module View =

    open Elmish
    open Types
    open State

    let showParams model =
        match model.FractalType with
        | Julia (seed, _) ->
            [
                h?p [] [ Text $"X = %.6f{model.X}" ]
                h?p [] [ Text $"Y = %.6f{model.Y}" ]
                h?p [] [ Text $"Zoom = %.6f{model.Zoom}" ]
                h?p [] [ Text $"Seed X = %.6f{seed.SeedX}" ]
                h?p [] [ Text $"Seed Y = %.6f{seed.SeedY}" ]
            ]
        | Mandelbrot ->
            [
                h?p [] [ Text $"X = %.6f{model.X}" ]
                h?p [] [ Text $"Y = %.6f{model.Y}" ]
                h?p [] [ Text $"Zoom = %.6f{model.Zoom}" ]
            ]

    let showButtons model dispatch =
        h?div [] [
            h?div [ "class" => "field has-addons" ] [
                h?button [
                    (match model.FractalType with
                        | Mandelbrot -> "class" => "button is-primary is-selected"
                        | Julia _ -> "class" => "button")
                    "onclick" =!> (fun _ -> MandelbrotClick |> dispatch)
                ] [ Text "Mandelbrot" ]
                h?button [
                    (match model.FractalType with
                        | Mandelbrot -> "class" => "button"
                        | Julia _ -> "class" => "button is-primary is-selected")
                    "onclick" =!> (fun _ -> JuliaClick |> dispatch)
                ] [ Text "Julia" ]
            ]
            h?div [] [
                match model.FractalType with
                | Julia (_, scrollType) ->
                    yield h?button [
                        (match scrollType with
                            | Move -> "class" => "button is-primary is-selected"
                            | ChangeSeed -> "class" => "button")
                        "onclick" =!> (fun _ -> JuliaMoveClick |> dispatch)
                    ] [ Text "Move" ]
                    yield h?button [
                        (match scrollType with
                            | Move -> "class" => "button"
                            | ChangeSeed -> "class" => "button is-primary is-selected")
                        "onclick" =!> (fun _ -> JuliaChangeSeedClick |> dispatch)
                    ] [ Text "ChangeSeed" ]
                | _ -> ()
            ]
        ]

    let hud model dispatch =
        h?div [ "class" => "columns" ] [
            h?div [ "class" => "column" ] (showParams model)
            h?div [ "class" => "column" ] [ showButtons model dispatch ]
        ]

    let fractalCanvas dispatch =
        let dispatch (msg: 'Event -> Msg) (e: Browser.Types.Event) =
            e.preventDefault()
            msg (e :?> 'Event) |> dispatch

        h?div [
            "id" => "Fractal"
            "onmousedown" =!> dispatch MouseDownMsg
            "onmouseup" =!> dispatch MouseUpMsg
            "onmousemove" =!> dispatch MouseMoveMsg
            "onmouseleave" =!> dispatch MouseLeaveMsg
            // "onwheel" =!> dispatch WheelMsg
            // "ontouchstart" =!> dispatch TouchStartMsg
            // "ontouchmove" =!> dispatch TouchMoveMsg
            // "ontouchend" =!> dispatch TouchEndMsg
            // "ontouchcancel" =!> dispatch TouchEndMsg
        ] []

    let root model dispatch =
        h?div [] [
            hud model dispatch
            fractalCanvas dispatch
        ]

    app "FableFractal" init update root

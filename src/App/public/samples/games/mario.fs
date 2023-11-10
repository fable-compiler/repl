module Mario

open Fable.Core
open Fable.Core.JsInterop
open Browser.Types
open Browser

module Keyboard =

    let mutable keysPressed = Set.empty

    /// Returns 1 if key with given code is pressed
    let code x =
        if keysPressed.Contains(x) then 1 else 0

    /// Update the state of the set for given key event
    let update (e : KeyboardEvent, pressed) =
        let key = e.key
        let op =  if pressed then Set.add else Set.remove
        keysPressed <- op key keysPressed

    /// Returns pair with -1 for left or down and +1
    /// for right or up (0 if no or both keys are pressed)
    let arrows () =
        (code "ArrowRight" - code "ArrowLeft", code "ArrowUp" - code "ArrowDown")

    let initKeyboard () =
        document.addEventListener("keydown", fun e -> update(e :?> _, true))
        document.addEventListener("keyup", fun e -> update(e :?> _, false))

module Physics =

    type MarioModel =
        { x:float; y:float;
          vx:float; vy:float;
          dir:string }


    // If the Up key is pressed (y > 0) and Mario is on the ground,
    // then create Mario with the y velocity 'vy' set to 5.0
    let jump (_,y) m =
        if y > 0 && m.y = 0. then { m with vy = 5. } else m

    // If Mario is in the air, then his "up" velocity is decreasing
    let gravity m =
        if m.y > 0. then { m with vy = m.vy - 0.1 } else m

    // Apply physics - move Mario according to the current velocities
    let physics m =
        { m with x = m.x + m.vx; y = max 0. (m.y + m.vy) }

    // When Left/Right keys are pressed, change 'vx' and direction
    let walk (x,_) m =
        let dir = if x < 0 then "left" elif x > 0 then "right" else m.dir
        { m with vx = float x; dir = dir }


    let marioStep dir mario =
        mario
        |> physics
        |> walk dir
        |> gravity
        |> jump dir

module Canvas =

    // Get the canvas context for drawing
    let canvas = document.getElementsByTagName("canvas").[0] :?> HTMLCanvasElement
    let context = canvas.getContext_2d()

    // Format RGB color as "rgb(r,g,b)"
    let ($) s n = s + n.ToString()
    let rgb r g b = "rgb(" $ r $ "," $ g $ "," $ b $ ")"

    /// Fill rectangle with given color
    let filled (color: string) rect =
        let ctx = context
        ctx.fillStyle <- !^ color
        ctx.fillRect rect

    /// Move element to a specified X Y position
    let position (x,y) (img : HTMLImageElement) =
        img?style?left <- x.ToString() + "px"
        img?style?top <- (canvas.offsetTop + y).ToString() + "px"

    let getWindowDimensions () =
        canvas.width, canvas.height

    /// Get the first <img /> element and set `src` (do
    /// nothing if it is the right one to keep animation)
    let image (src:string) =
        let image = document.getElementsByTagName("img").[0] :?> HTMLImageElement
        if image.src.IndexOf(src) = -1 then image.src <- src
        image

open Canvas
open Physics

let origin =
    // Sample is running in an iframe, so get the location of parent
    let topLocation = window.top.location
    topLocation.origin + topLocation.pathname

let render (w,h) (mario: MarioModel) =
    (0., 0., w, h) |> filled (rgb 174 238 238)
    (0., h-50., w, 50.) |> filled (rgb 74 163 41)
    // Select and position Mario
    // (walking is represented as an animated gif)
    let verb =
        if mario.y > 0. then "jump"
        elif mario.vx <> 0. then "walk"
        else "stand"
    origin + "img/mario/mario" + verb + mario.dir + ".gif"
    |> image
    |> position (w/2.-16.+mario.x,  h-50.-31.-mario.y)

Keyboard.initKeyboard()

let w, h = getWindowDimensions()

let rec update mario () =
    let mario = mario |> Physics.marioStep (Keyboard.arrows())
    render (w,h) mario
    window.setTimeout(update mario, 1000 / 60) |> ignore

let mario = { x=0.; y=0.; vx=0.; vy=0.; dir="right" }
update mario ()

// Source: http://www.tryfsharp.org/create/cpoulain/shared/raytracer.fsx
// slightly modified to avoid some allocations

module RayTracer

[<Struct>]
type Vector =
    { X: float; Y: float; Z: float }
    static member (*) (k, v: Vector) = { X = k * v.X; Y = k * v.Y; Z = k * v.Z }
    static member (-) (v1: Vector, v2: Vector) = { X = v1.X - v2.X; Y = v1.Y - v2.Y; Z = v1.Z - v2.Z }
    static member (+) (v1: Vector, v2: Vector) = { X = v1.X + v2.X; Y = v1.Y + v2.Y; Z = v1.Z + v2.Z }
    static member Dot (v1: Vector, v2: Vector) = v1.X * v2.X + v1.Y * v2.Y + v1.Z * v2.Z
    static member Mag (v: Vector) = sqrt (v.X * v.X + v.Y * v.Y + v.Z * v.Z)
    static member Norm (v: Vector) =
        let mag = Vector.Mag v
        let div = if mag = 0.0 then infinity else 1.0/mag
        div * v
    static member Cross (v1: Vector, v2: Vector) =
        { X = v1.Y * v2.Z - v1.Z * v2.Y
        ; Y = v1.Z * v2.X - v1.X * v2.Z
        ; Z = v1.X * v2.Y - v1.Y * v2.X }

[<Struct>]
type Color =
    { R: float; G: float; B: float }
    static member Scale (k, v: Color) = { R = k * v.R; G = k * v.G; B = k * v.B }
    static member (+) (v1: Color, v2: Color) = { R = v1.R + v2.R; G = v1.G + v2.G; B = v1.B + v2.B }
    static member (*) (v1: Color, v2: Color) = { R = v1.R * v2.R; G = v1.G * v2.G; B = v1.B * v2.B }
    static member White = { R = 1.0; G = 1.0; B = 1.0 }
    static member Grey = { R = 0.5; G = 0.5; B = 0.5 }
    static member Black = { R = 0.0; G = 0.0; B = 0.0 }
    static member Background = Color.Black
    static member DefaultColor = Color.Black

type Camera (pos: Vector, lookAt: Vector) =
    let forward = Vector.Norm (lookAt - pos)
    let down = { X = 0.0; Y = -1.0; Z = 0.0 }
    let right = 1.5 * Vector.Norm (Vector.Cross (forward, down))
    let up = 1.5 * Vector.Norm (Vector.Cross (forward, right))
    member c.Pos     = pos
    member c.Forward = forward
    member c.Up      = up
    member c.Right   = right

[<Struct>]
type Ray =
    { Start: Vector;
      Dir: Vector }

type Surface =
    abstract Diffuse: Vector -> Color
    abstract Specular: Vector -> Color
    abstract Reflect: Vector -> float
    abstract Roughness : float

[<Struct>]
type Intersection =
    { Thing: SceneObject;
      Ray: Ray;
      Dist: float }

and SceneObject =
    abstract Surface: Surface
    abstract Intersect: Ray -> float
    abstract Normal: Vector -> Vector

type Light =
    { Pos : Vector;
      Color : Color }

type Scene =
    { Things : SceneObject[];
      Lights : Light[];
      Camera : Camera }

module RayTracer =

    let maxDepth = 5

    let NearestIntersection ray scene =
        let mutable acc = None
        for x in scene.Things do
            let dist = x.Intersect ray
            if acc.IsNone || dist < acc.Value.Dist then
                acc <- Some { Thing = x; Ray = ray; Dist = dist }
        acc

    let TestRay ray scene =
        match NearestIntersection ray scene with
        | None -> None
        | Some isect ->
            if isect.Dist = infinity
            then None
            else Some isect.Dist

    let rec TraceRay ray scene (depth: int) =
        match NearestIntersection ray scene with
        | None -> Color.Background
        | Some isect ->
            if isect.Dist = infinity
            then Color.Background
            else Shade isect scene depth

    and Shade isect scene depth =
        let d = isect.Ray.Dir
        let pos = isect.Dist * d + isect.Ray.Start
        let normal = isect.Thing.Normal (pos)
        let reflectDir = d - 2.0 * Vector.Dot (normal, d) * normal
        let naturalcolor = Color.DefaultColor + (GetNaturalColor isect.Thing pos normal reflectDir scene)
        let reflectedColor =
            if depth >= maxDepth then Color.Grey
            else GetReflectionColor (isect.Thing, pos + (0.001*reflectDir), normal, reflectDir, scene, depth)
        naturalcolor + reflectedColor

    and GetReflectionColor (thing: SceneObject, pos, normal: Vector, rd: Vector, scene: Scene, depth: int) =
        Color.Scale (thing.Surface.Reflect (pos), TraceRay { Start = pos; Dir = rd } scene (depth + 1))

    and GetNaturalColor thing pos normal rd scene =
        let mutable color = Color.DefaultColor
        for light in scene.Lights do
            color <- AddLight thing pos normal rd scene color light
        color

    and AddLight (thing: SceneObject) pos normal rd scene color light =
        let ldis = light.Pos - pos
        let livec = Vector.Norm (ldis)
        let neatIsect = TestRay { Start = pos; Dir = livec } scene
        let isInShadow =
            match neatIsect with
            | None -> false
            | Some d -> not (d > Vector.Mag (ldis))
        if isInShadow then color
        else
            let illum = Vector.Dot (livec, normal)
            let lcolor =
                if illum > 0.0
                then Color.Scale (illum, light.Color)
                else Color.DefaultColor
            let specular = Vector.Dot (livec, Vector.Norm (rd))
            let scolor =
                if specular > 0.0
                then Color.Scale (specular ** thing.Surface.Roughness, light.Color)
                else Color.DefaultColor
            color + thing.Surface.Diffuse (pos) * lcolor +
                    thing.Surface.Specular (pos) * scolor

    let GetPoint x y width height (camera: Camera) =
        let RecenterX x =  (float x - (float width / 2.0))  / (2.0 * float width)
        let RecenterY y = -(float y - (float height / 2.0)) / (2.0 * float height)
        Vector.Norm (camera.Forward + RecenterX (x) * camera.Right + RecenterY (y) * camera.Up)

    let Render scene (data: byte[]) (x, y, width, height) =
        let clamp v = min (max (v * 255.0) 0.0) 255.0 |> byte
        for y = y to height-1 do
            let stride = y * width
            for x = x to width-1 do
                let index = (x + stride) * 4
                let dir = GetPoint x y width height scene.Camera
                let ray = { Start = scene.Camera.Pos; Dir = dir }
                let color = TraceRay ray scene 0
                data.[index+0] <- clamp color.R
                data.[index+1] <- clamp color.G
                data.[index+2] <- clamp color.B
                data.[index+3] <- 255uy

module SceneObjects =

    type Sphere (center, radius, surface) =
        interface SceneObject with
            member this.Surface = surface
            member this.Normal pos = Vector.Norm (pos - center)
            member this.Intersect ray =
                let eo = center - ray.Start
                let v = Vector.Dot (eo, ray.Dir)
                let dist =
                    if (v < 0.0) then infinity
                    else
                        let disc = radius * radius - (Vector.Dot (eo,eo) - (v*v))
                        if disc < 0.0
                        then infinity
                        else v - (sqrt (disc))
                dist

    type Plane (normal, offset, surface) =
        interface SceneObject with
            member this.Surface = surface
            member this.Normal pos = normal
            member this.Intersect ray =
                let denom = Vector.Dot (normal, ray.Dir)
                let dist =
                    if denom > 0.0
                    then infinity
                    else (Vector.Dot (normal, ray.Start) + offset) / (-denom)
                dist

module Surfaces =

    type Shiny() =
        interface Surface with
            member s.Diffuse pos = Color.White
            member s.Specular pos = Color.Grey
            member s.Reflect pos = 0.7
            member s.Roughness = 250.0

    type Checkerboard() =
        interface Surface with
            member s.Diffuse pos =
                if (int (floor (pos.Z) + floor (pos.X))) % 2 <> 0
                then Color.White
                else Color.Black
            member s.Specular pos = Color.White
            member s.Reflect pos =
                if (int (floor (pos.Z) + floor (pos.X))) % 2 <> 0
                then 0.1
                else 0.7
            member s.Roughness = 150.0

module Scenes =

    let TwoSpheresOnACheckerboard = {
        Things = [|
            SceneObjects.Plane ({ X = 0.0; Y = 1.0; Z = 0.0 }, 0.0, Surfaces.Checkerboard())
            SceneObjects.Sphere ({ X = 0.0; Y = 1.0; Z = -0.25 }, 1.0, Surfaces.Shiny())
            SceneObjects.Sphere ({ X = -1.0; Y = 0.5; Z = 1.5 }, 0.5, Surfaces.Shiny())
        |];
        Lights = [|
            { Pos = { X = -2.0; Y = 2.5; Z = 0.0 }; Color = { R = 0.49; G = 0.07; B = 0.07 } }
            { Pos = { X = 1.5; Y = 2.5; Z = 1.5 }; Color = { R = 0.07; G = 0.07; B = 0.49 } }
            { Pos = { X = 1.5; Y = 2.5; Z = -1.5 }; Color = { R = 0.07; G = 0.49; B = 0.071 } }
            { Pos = { X = 0.0; Y = 3.5; Z = 0.0 }; Color = { R = 0.21; G = 0.21; B = 0.35 } }
        |];
        Camera =
            Camera ({ X = 3.0; Y = 2.0; Z = 4.0 }, { X = -1.0; Y = 0.5; Z = 0.0 })
    }

open Fable.Core.JsInterop
open Browser.Types
open Browser

let renderScene scene (x, y, width, height) =
    let canvas = document.getElementsByTagName("canvas").[0] :?> HTMLCanvasElement
    let ctx = canvas.getContext_2d()
    let img = ctx.createImageData(float width, float height)
    RayTracer.Render scene img.data (x, y, width, height)
    ctx.putImageData(img, float -x, float -y)

let measure f x y =
    let dtStart = window?performance?now()
    let res = f x y
    let elapsed = window?performance?now() - dtStart
    res, elapsed

let x, y, w, h = (0, 0, 512, 512)
let _, elapsed = measure renderScene Scenes.TwoSpheresOnACheckerboard (x, y, w, h)
printfn "Ray tracing:\n - rendered image size: (%dx%d)\n - elapsed: %f ms" w h elapsed

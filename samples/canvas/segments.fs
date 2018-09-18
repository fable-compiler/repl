module Canvas.Segments

open Fable.Repl.Lib
open Elmish
open React
open Fable.Import.Browser

type Settings =
    { /// Size of a particle
      Size : int
      /// Speed apply to the first particle (the one who follow the mouse)
      FollowSpeed : float
      /// Number of particles to draw
      NumOfSegments : int
      CanvasWidth : float
      CanvasHeight : float }
    static member Default: Settings =
        { Size = 25
          FollowSpeed = 0.1
          NumOfSegments = 16
          CanvasWidth = 600.
          CanvasHeight = 600. }

type Position =
    { X : float
      Y : float }

    static member Empty =
        { X = 0.
          Y = 0. }

(**
### Particle module

We first create a `Particle` module, which will contains all the logic about particles.
*)
[<RequireQualifiedAccess>]
module Particle =

    open System
    open Fable.Core

    (**
We create a record to store all the information about the particle:
    *)
    type Particle =
        { /// X coordinate
          X : float
          /// Y coordinate
          Y : float
          /// Unique Id, it's index based so we can find the previous particle
          Id : int
          /// Force applied, to the X coordinate
          Dx : float
          /// Force applied, to the Y coordiate
          Dy : float
          AngleX : float
          AngleY : float
          SpeedX : float
          SpeedY : float
          Radius : float }

    (**
When creating a particle, we use random values. This allow us to have a nice animation for waiting mouse events.
    *)

    let private rand = new Random()

    let create index : Particle =
        { X = -50.
          Y = -50.
          Dx = 0.
          Dy = 0.
          Id = index + 1
          AngleX = Math.PI * 2. * rand.NextDouble()
          AngleY = Math.PI * 2. * rand.NextDouble()
          SpeedX = 0.03 * rand.NextDouble() + 0.03
          SpeedY = 0.03 * rand.NextDouble() + 0.03
          Radius = 150. }

    (**
We use a record for the settings, this simply the `update` signature. And allow us to easily add new settings to the demo.
    *)
    type Settings =
        { Width : float
          Height : float
          FollowSpeed : float
          MousePos : Position }

    (**
In the update function, we handle the "pysics" of our particles
    *)
    let update (particle : Particle) (particles : Particle array) (settings : Settings) =
        // If this is not the first particle, then it follows the previous particle
        if particle.Id > 1 then
            // Target we are aiming at
            let aim = particles.[particle.Id - 1 - 1]
            let dx = aim.X - particle.X
            let dy = aim.Y - particle.Y

            { particle with X = particle.X + dx * settings.FollowSpeed
                            Y = particle.Y + dy * settings.FollowSpeed
                            Dx = dx
                            Dy = dy }
        else
            // If the mouse never moved, then create random mouvements
            if settings.MousePos.X = 0. && settings.MousePos.Y = 0. then
                let dx = settings.Width / 2. + Math.Cos(particle.AngleX) * particle.Radius - particle.X
                let dy = settings.Height / 2. + Math.Sin(particle.AngleY) * particle.Radius - particle.Y

                { particle with X = settings.Width / 2. + Math.Cos(particle.AngleX) * particle.Radius
                                Y = settings.Height / 2. + Math.Sin(particle.AngleY) * particle.Radius
                                AngleX = particle.AngleX + particle.SpeedX
                                AngleY = particle.AngleY + particle.SpeedY
                                Dx = dx
                                Dy = dy }

            else
                // Follow the mouse
                let dx = settings.MousePos.X - particle.X
                let dy = settings.MousePos.Y - particle.Y

                { particle with X = particle.X + dx * settings.FollowSpeed
                                Y = particle.Y + dy * settings.FollowSpeed
                                Dx = dx
                                Dy = dy }

    (**
We describe the actions needed for drawing a particle on the canvas
    *)
    let draw (particle : Particle) (total : int) (width : float) =
        let angle = Math.Atan2(particle.Dy, particle.Dx)
        let scale = Math.Cos(Math.PI / 2. * (float particle.Id / float total))

        [ Canvas.Save
          Canvas.Translate (particle.X, particle.Y)
          Canvas.Rotate angle
          Canvas.Scale (scale, scale)

          Canvas.BeginPath
          Canvas.MoveTo (-width / 2. * 1.732, -width / 2.)
          Canvas.LineTo(0. ,0.)
          Canvas.LineTo(-width / 2. * 1.732, width / 2.)
          Canvas.LineTo(-width / 2. * 1.2, 0.)
          Canvas.FillStyle (U3.Case1 "white")
          Canvas.Fill

          Canvas.Restore
        ] |> Canvas.Batch

(**
### Elmish component

From here this is a standard Elmish component
*)
module Demo =
    open Fable.Import

    (**
#### Model
    *)

    type Model =
        { /// Particles datas
          /// We use array because they are smaller in memory
          Particles : Particle.Particle array
          Settings : Settings
          MousePosition : Position }

    (**
#### Msg
    *)
    type Msg =
        /// The tick message is trigger at 60fps, and is responsible for the animation trigger
        | Tick
        /// Event triggered when Mouse move over the canvas
        | MouseMove of Position

        | UpdateCanvasSize of float * float
        | UpdateNumOfSegments of int
        | UpdateFollowSpeed of float
        | UpdateSize of int


    (**
#### Init function
    *)
    let init (settings: Settings) () =
        { Particles =
            [|
                for index = 0 to settings.NumOfSegments do
                    yield Particle.create index
            |]
          Settings = settings
          MousePosition =
            { X = 0.
              Y = 0. } }

    (**
#### Update function
    *)
    let update msg model =
        match msg with
        // Update the animation
        | Tick ->
            // Update all particles positions
            let particles =
                model.Particles
                |> Array.map (fun particle ->
                    let settings : Particle.Settings =
                        { Width = model.Settings.CanvasWidth
                          Height = model.Settings.CanvasHeight
                          FollowSpeed = model.Settings.FollowSpeed
                          MousePos = model.MousePosition }
                    Particle.update particle model.Particles settings
                )

            { model with Particles = particles }

        // Update the mouse position
        | MouseMove newPosition ->
            { model with MousePosition = newPosition }


        | UpdateCanvasSize (width, height) ->
            { model with Settings =
                            { model.Settings with CanvasWidth = width
                                                  CanvasHeight = height } }

        | UpdateNumOfSegments newNum ->
            { model with Particles =
                            [|
                                for index = 0 to newNum do
                                    yield Particle.create index
                            |]
                         Settings =
                            { model.Settings with NumOfSegments = newNum }
                         MousePosition =
                            { X = 0.
                              Y = 0. } }

        | UpdateFollowSpeed newSpeed ->
            { model with Settings =
                            { model.Settings with FollowSpeed = newSpeed } }

        | UpdateSize newSize ->
            { model with Settings =
                            { model.Settings with Size = newSize } }


    (**
#### Views
    *)
    let private drawParticles (model : Model) width  =
        [ for particle in model.Particles do
            yield Particle.draw particle model.Particles.Length width ]
        |> Canvas.Batch

    let view (model : Model) width dispatch =
        let size : Canvas.Size =
            { Width = model.Settings.CanvasWidth
              Height = model.Settings.CanvasHeight }

        size
        |> Canvas.initialize
        |> Canvas.onTick (fun _ -> dispatch Tick)
        |> Canvas.onMouseMove (fun ev ->
            let bounds : Browser.ClientRect = (ev.target :?> HTMLElement).getBoundingClientRect()
            { X = ev.clientX - bounds.left
              Y = ev.clientY - bounds.top }
            |> MouseMove
            |> dispatch
        )
        |> Canvas.draw (Canvas.ClearReact (0., 0., model.Settings.CanvasWidth, model.Settings.CanvasHeight))
        |> Canvas.draw (drawParticles model width )
        |> Canvas.render

// App
let settings = Settings.Default

Program.mkSimple (Demo.init settings) Demo.update (fun model dispatch ->
    div [] [Demo.view model (float settings.Size) dispatch])
|> Program.withReact "elmish-app"
// |> Program.withConsoleTrace
|> Program.run
// F# Ant Colony Fable Edition

// Ported from: https://github.com/robertpi/F--Ant-Colony/ which is a folk of: https://github.com/Rickasaurus/F--Ant-Colony

// Original notice:

//
// This is Richard Minerich's F# Ant Colony Silverlight Ediiton
// Visit my Blog at http://RichardMinerich.com
// This code is free to be used for anything you like as long as I am properly acknowledged.
//
// The basic Silverlight used here is based on Phillip Trelford's Missile Command Example
// http://www.trelford.com/blog/post/MissileCommand.aspx
//

module Ants

open Fable.Core
open Fable.Core.JsInterop
open Browser.Types
open Browser

module Types =

    let xSize = 50
    let ySize = 50
    let nestSize = 5
    let maxTotalFoodPerSquare = 200
    let minGeneratedFoodPerSquare = 20
    let maxGeneratedFoodPerSquare = 100
    let maxFoodAntCanCarry = 5
    let chanceOfFood = 0.04

    let maxCellPheromoneQuantity = 255
    let maxAntDropPheromoneQunatity = 50
    let pheromoneDispersalRate = 1

    let percentFoodToWin = 0.5
    let maxWorldCycles = 1500

    type UID = { X: int; Y: int }

    let uid (x, y) = { X = x; Y = y}

    type AntColor =
        | Black
        | Red

    type WorldCellType =
            | FieldCell
            | NestCell of AntColor

    type Ant =
        { Color : AntColor
          FoodCarried : int }
        with
            member x.IsFullOfFood = x.FoodCarried >= maxFoodAntCanCarry
            member x.HasFood = x.FoodCarried > 0
            member x.MaxPheromonesToDrop = maxAntDropPheromoneQunatity

    and WorldCell =
        { Id : UID
          Food : int
          Ant : option<Ant>
          CellType : WorldCellType
          Pheromones : Map<AntColor, int> }
        with
            member t.IsFullOfFood = t.Food >= maxTotalFoodPerSquare
            member t.HasFood = t.Food > 0
            member t.ContainsAnt = t.Ant.IsSome
            member t.HasPheromone color = not (t.Pheromones.[color] = 0)
            member t.MaxPheromones = maxCellPheromoneQuantity
            member t.MaxFood = maxTotalFoodPerSquare

    and TheWorld = Map<UID, WorldCell>

    and AntAction =
        | Nothing
        | Move of WorldCell
        | TakeFood of WorldCell
        | DropFood of WorldCell
        | DropPheromone of WorldCell * int

    type Nest(ix, iy, sizex, sizey) =
        member internal t.MinX = ix
        member internal t.MinY = iy
        member internal t.MaxX = ix + sizex
        member internal t.MaxY = iy + sizey
        member internal t.IsInBounds x y = x >= t.MinX && x <= t.MaxX && y >= t.MinY && y <= t.MaxY
        member t.Distance cell =
                let cx, cy = t.MinX + ((t.MaxX - t.MinX) / 2), t.MinY + ((t.MaxY - t.MinY) / 2)
                let x, y = cell.Id.X, cell.Id.Y
                let pow x = x * x
                sqrt (pow(double cx - double x) + pow(double cy - double y))
        member t.CountFood (world: TheWorld) =
                Map.fold (fun s (k: UID) v -> if t.IsInBounds k.X k.Y then s + v.Food else s) 0 world


    type IAntBehavior =
        abstract member Name : string
        abstract member Behave : Ant -> WorldCell -> WorldCell list -> Nest -> AntAction

    type WorldChange = TheWorld -> TheWorld

module Helpers =

    open System
    open System.Reflection

    module Array =
        let randomPermute a =
            let n = Array.length a
            if n > 0 then
                let rand = new Random()
                let rec aux = function
                    | 0 -> a
                    | k ->
                        let i = rand.Next(k+1)
                        let tmp = a.[i]
                        a.[i] <- a.[k]
                        a.[k] <- tmp
                        aux (k-1)
                aux (n-1)
            else a

    module Seq =
        let randomPermute a =
            a |> Seq.toArray |> Array.randomPermute |> Array.toSeq

    module List =

        let private r = Random(int DateTime.Now.Ticks)
        let random l =
            let index = r.Next(0, List.length l) in
                l.[index]

module World =

    open System

    open Types
    open Helpers

    let BlackAntNest = new Nest( 0, 0, nestSize - 1, nestSize - 1 )
    let RedAntNest = new Nest( 1 + xSize - nestSize, 1 + ySize - nestSize, nestSize - 1, nestSize - 1)

    let (|InBlackNest|InRedNest|Neither|) (x,y) =
        if BlackAntNest.IsInBounds x y then InBlackNest
        elif RedAntNest.IsInBounds x y then InRedNest
        else Neither

    let getAntNest ant =
        match ant.Color with
        | AntColor.Black -> BlackAntNest
        | AntColor.Red -> RedAntNest

    let emptyPheromoneSet =
        seq { let colors = [| AntColor.Black; AntColor.Red |]
              for color in colors do
                yield color, 0 }
        |> Map.ofSeq

    let defaultCell id = {Id = id; Food = 0; Ant = None; CellType = FieldCell; Pheromones = emptyPheromoneSet }
    let defaultBlackAnt = Some { Color = AntColor.Black; FoodCarried = 0 }
    let defaultRedAnt = Some { Color = AntColor.Red; FoodCarried = 0 }

    let buildWorldInitialWorld () =
        let rnd = new System.Random() in
            seq { for x in 0 .. xSize do
                    for y in 0 .. ySize do
                        let uid = uid (x, y)
                        let defaultcell = defaultCell uid
                        match x, y with
                        | InBlackNest -> yield uid, { defaultcell with Ant = defaultBlackAnt; CellType = NestCell(AntColor.Black) }
                        | InRedNest ->   yield uid, { defaultcell with Ant = defaultRedAnt; CellType = NestCell(AntColor.Red) }
                        | Neither ->     if chanceOfFood > rnd.NextDouble()
                                            then yield uid, { defaultcell with Food = rnd.Next(minGeneratedFoodPerSquare, maxGeneratedFoodPerSquare) }
                                            else yield uid, defaultcell
                }
            |> Map.ofSeq

    let getAntViews (world: TheWorld) =
        let getWorldCell x y = Map.tryFind (uid (x,y)) world
        let worldFold state (uid: UID) cell =
                let x, y = (uid.X, uid.Y)
                match cell.Ant with
                | None -> state
                | Some(ant) ->
                    let visibleCells = [ getWorldCell x (y - 1); getWorldCell x (y + 1); getWorldCell (x - 1) y; getWorldCell (x + 1) y ]
                                        |> List.choose id
                    state @ [ant, cell, visibleCells, getAntNest ant]
        Map.fold worldFold [] world

    let getAntActions (bBehave: IAntBehavior) (rBehave: IAntBehavior) (views: (Ant * WorldCell * WorldCell list * Nest) list) =
        let getAntBehavior ant =
            match ant.Color with
            | AntColor.Black -> bBehave
            | AntColor.Red -> rBehave
        let transformView (ant, cell, antView, nest) =
            let behavior = getAntBehavior ant in
            cell, behavior.Behave ant cell antView nest
        List.map transformView views

    let buildTransaction (expectedCells: WorldCell list) actions =
        let predicate (world: TheWorld) =
            List.forall (fun (cell: WorldCell) -> (Map.find cell.Id world) = cell) expectedCells
        let action (iworld: TheWorld) =
            List.fold (fun (cworld: TheWorld) (id, action) -> Map.add id (action cworld.[id]) cworld) iworld actions
        predicate, action

    let getWorldChangeTransactions actions =
        seq { for source, action in actions do
                let ant = Option.get source.Ant
                match action with
                | Nothing -> ()
                | Move (target) ->
                    if Option.isSome target.Ant then ()
                    else yield buildTransaction
                                    [ source; target ]
                                    [ source.Id, (fun oldcell -> { oldcell with Ant = None });
                                        target.Id, (fun oldtarget -> { oldtarget with Ant = source.Ant }) ]
                | TakeFood (target) ->
                    if target.Food <= 0 then ()
                    else
                        let foodToGet = min (target.Food) (maxFoodAntCanCarry - ant.FoodCarried)
                        yield buildTransaction
                                    [ source; target ]
                                    [ target.Id, (fun oldtarget -> { oldtarget with Food = oldtarget.Food - foodToGet });
                                        source.Id, (fun oldcell -> { oldcell with Ant = Some { ant with FoodCarried = ant.FoodCarried + foodToGet } } ) ]
                | DropFood (target) ->
                    if target.Food >= maxTotalFoodPerSquare then ()
                    else
                        let foodToDrop = min (maxTotalFoodPerSquare - target.Food) (ant.FoodCarried)
                        let transaction =
                            buildTransaction
                                    [ source; target ]
                                    [ target.Id, (fun oldtarget -> { oldtarget with Food = oldtarget.Food + foodToDrop });
                                        source.Id, (fun oldcell -> { source with Ant = Some { ant with FoodCarried = ant.FoodCarried - foodToDrop } }) ]
                        yield transaction
                | DropPheromone (target, quantity) ->
                    let newValue = max (target.Pheromones.[ant.Color] + quantity) maxCellPheromoneQuantity
                    yield buildTransaction
                                [ target ]
                                [ target.Id, (fun oldtarget -> { oldtarget with Pheromones = oldtarget.Pheromones.Add(ant.Color, newValue ) } ) ] }

    let degradePheromones (world: TheWorld) =
        world
        |> Map.map (fun uid cell -> { cell with Pheromones = cell.Pheromones |> Map.map (fun key quantity -> max (quantity - 1) 0) } )

    let applyWorldTransactions (oldWorld: TheWorld) changes =
        let foldAction (world: TheWorld) (pred, action) =
            if pred world
            then action world
            else world
        Seq.fold foldAction oldWorld changes

    let uid2xy (uid: UID) = uid.X, uid.Y

    let worldCycle bPlayer rPlayer world : TheWorld =
        world
        |> getAntViews
        |> getAntActions bPlayer rPlayer
        |> Seq.randomPermute
        |> getWorldChangeTransactions
        |> applyWorldTransactions world
        |> degradePheromones

module Canvas =

    // Get the canvas context for drawing
    let canvas = document.getElementsByTagName("canvas").[0] :?> HTMLCanvasElement
    let context = canvas.getContext_2d()

    // Format RGB color as "rgb(r,g,b)"
    let ($) s n = s + n.ToString()
    let rgb r g b = "rgb(" $ r $ "," $ g $ "," $ b $ ")"

    // Fill rectangle with given color
    let filled (color: string) rect =
        let ctx = context
        ctx.fillStyle <- !^ color
        ctx.fillRect rect

    let drawBlob (color: string) size (x, y) =
        context.beginPath()
        context.arc(x, y, size, 0., 2. * System.Math.PI, false )
        context.fillStyle <- !^ color
        context.fill()

    let getWindowDimensions () =
        canvas.width, canvas.height


    let image (src:string) =
        let image = document.getElementsByTagName("img").[0] :?> HTMLImageElement
        if image.src.IndexOf(src) = -1 then image.src <- src
        image

    let updateInput name text =
        let image = document.getElementsByName(name).[0] :?> HTMLDivElement
        image.innerHTML <- text
        image


module Simulation =
    open Types
    open World
    open Canvas

    let drawAnt x y antColor =
        let color =
            match antColor with
            | AntColor.Black -> rgb 0 0 0
            | AntColor.Red -> rgb 255 0 0
        drawBlob color 4. (x, y)

    let drawFood food x y =
        let radius = ((float food / float maxTotalFoodPerSquare) * 3.) + 1.
        let color = rgb 0 255 0
        drawBlob color radius (x, y)

    let makeGradiant quantity max =
        let inverseGrediant = 1. - (float quantity / float max)
        let levelDiff = 200. - 111. // difference between the "full pheromone color and background"
        levelDiff * inverseGrediant
    let drawPheromone x y antColor amount =
        let opacityFudge = makeGradiant amount maxCellPheromoneQuantity
        let level = int opacityFudge + 111
        // console.log(sprintf "level: %d" level)
        let color =
            match antColor with
            | AntColor.Black -> rgb level level level
            | AntColor.Red -> rgb level opacityFudge level
        drawBlob color 4. (x, y)

    let drawUpdates (width, height) (world: TheWorld) =
        let updateCell uid cell =
            let wm, hm = width / float (xSize + 1), height / float (ySize + 1)
            let offset x y = (x + 0.5) * wm, (y + 0.5) * hm
            let x, y = uid2xy uid
            let ox, oy = offset (float x) (float y)
            cell.Pheromones |> Map.iter (fun color amount -> if amount > 0 then drawPheromone ox oy color amount)
            if cell.Food > 0 then drawFood cell.Food ox oy
            if cell.Ant.IsSome then drawAnt ox oy cell.Ant.Value.Color
        world
        |> Map.iter updateCell


module HardishAI =

    open Helpers
    open Types

    let rnd = System.Random(int System.DateTime.Now.Ticks)

    type TestAntBehavior() =
        interface IAntBehavior with
            member x.Name = "Rick's Hardish"
            member x.Behave me here locations nest =

                let isMyHome node = node.CellType = WorldCellType.NestCell(me.Color)
                let locationsWithoutAnts = locations |> List.filter  (fun node -> node.Ant = None)

                let (|HasFood|HasMaxFood|HasNoFood|) (ant: Ant) =
                    if ant.FoodCarried = 0 then HasNoFood
                    elif ant.FoodCarried = maxFoodAntCanCarry then HasMaxFood
                    else HasFood

                let (|NearHome|_|) (locations: WorldCell list) =
                    let homeNodes = locations |> List.filter (fun node -> isMyHome node)
                    if List.isEmpty homeNodes then None
                    else Some homeNodes

                let (|AwayFromHome|NearHome|) (locations: WorldCell list) =
                    let homeLocations, awayLocations = locations |> List.partition (fun node -> isMyHome node)
                    if List.isEmpty homeLocations then AwayFromHome awayLocations
                    else NearHome homeLocations

                let (|CanDrop|CantDrop|) (locations: WorldCell list) =
                    let dropFoodLocations = locations |> List.filter (fun node -> not (node.IsFullOfFood))
                    if List.isEmpty dropFoodLocations then CantDrop
                    else CanDrop dropFoodLocations

                let (|HasUnownedFood|_|) (locations: WorldCell list) =
                    let foodLocations = locations |> List.filter (fun node -> node.HasFood && not (isMyHome node))
                    if List.isEmpty foodLocations then None
                    else Some foodLocations

                let (|HasPheromonesAndNoAnt|_|) (locations: WorldCell list) =
                    let pheromoneLocations = locations |> List.filter (fun node -> node.Ant = None) |> List.filter (fun node -> node.HasPheromone me.Color)
                    if List.isEmpty pheromoneLocations then None
                    else Some pheromoneLocations

                let (|HasNoAnt|_|) (locations: WorldCell list) =
                    let emptyLocations = locations |> List.filter (fun node -> node.Ant = None)
                    if List.length emptyLocations > 0 then
                        Some (emptyLocations)
                    else None

                let (|ShortestDistanceWithNoAnt|_|)  (locations: WorldCell list) =
                    let noAnts = locations |> List.filter (fun node -> node.Ant = None)
                    if List.length noAnts > 0 then Some (noAnts |> List.minBy (fun node -> nest.Distance node))
                    else None

                let maxFood = List.maxBy (fun node -> node.Food)
                let minPhero = List.minBy (fun node -> node.Pheromones.[me.Color])
                let noAnts = List.filter (fun node -> node.Ant = None)

                // [snippet:Simple Pheromone-Using Ant Colony AI]
                match me with
                | HasFood
                | HasMaxFood ->
                    match locations with
                    | NearHome homeCells ->
                        match homeCells with
                        | CanDrop dropCells -> DropFood dropCells.Head
                        | HasNoAnt noAntCells -> Move (List.random noAntCells)
                        | _ -> Nothing
                    | AwayFromHome allCells ->
                        match here.Pheromones.[me.Color] with
                        | n when n < 20 -> DropPheromone (here, 100 - n)
                        | _ ->
                            match allCells with
                            | HasNoAnt noAnts when rnd.Next(0, 3) = 0 -> Move (List.random noAnts)
                            | ShortestDistanceWithNoAnt node -> Move node
                            | _ -> Nothing
                | HasNoFood ->
                    match locations with
                    | HasNoAnt noAnts when rnd.Next(0, 3) = 0 -> Move (List.random noAnts)
                    | HasUnownedFood foodCells -> TakeFood (maxFood foodCells)
                    | HasPheromonesAndNoAnt pheroCells -> Move (minPhero pheroCells)
                    | HasNoAnt noAntCells -> Move (List.random noAntCells)
                    | _ -> Nothing


module AntsEverywhereExmampleAI =
    open Types

    let randomGen = new System.Random()

    let getRandomVal min max =
        lock randomGen (fun () -> randomGen.Next(min, max))

    type TestAntBehavior() =
        interface IAntBehavior with
            member x.Name = "Frank_Levine"
            member x.Behave me here locations nest =

                // This Ant's basic strategy is this:
                // If you have food and are near the nest
                //      drop the food
                // If you can't carry anymore food (bur are not near the nest)
                //      head back to the nest with the following exception
                //          if the current cell (here) has <40 phereomones, replenish the supply back to 100
                // If you're not dropping off food or heading home, you're foraging
                //      The logic for foraging is:
                //      If you see food, take it (this applies even when you have food but aren't full)
                //      If you see pheromones, move to the pheromone that is farthest from the nest
                //          if all pheromones are closer to the nest than you, then make a random move
                //      Otherwise you'e in the middle of nowhere, wanter randomly
                //
                // Special note on 'Traffic Control':  Inbound ants always yield to outbound ants
                //                                     This seems reasonable since the inbound ants
                //                                     Know where they're going and the outbound ones
                //                                     Are dependent on the pheromone trail



                //
                // helper functions
                let isNest (cell: WorldCell) = cell.CellType = WorldCellType.NestCell(me.Color)

                // how do I negate a function?!?  this seems a bit heavy-handed
                let isNotNest (cell: WorldCell) =
                    if isNest cell then
                        false
                    else
                        true

                // nest cells that can receive food
                let nestCells = locations |> List.filter isNest
                                        |> List.filter (fun c -> c.IsFullOfFood = false)

                // all empty neighbors, sorted so we can get at the closest and farthest ones from the nest
                // first = closest to nest
                // last = farthest from nest
                let emptyNeighbors = locations |> List.filter (fun c -> c.ContainsAnt = false)
                                            |> List.sortBy (fun c -> nest.Distance(c))

                // all empty neighbors with my pheromones
                let emptyNeighborsWithP = emptyNeighbors |> List.filter( fun c -> c.HasPheromone(me.Color))
                                                        |> List.sortBy( fun c -> nest.Distance(c))
                                                        |> List.toArray

                // all neighbors with food, ordered by the amount of food decending
                let neighborsWithFood = locations |> List.filter (isNotNest)
                                                |> List.filter (fun c -> c.HasFood)
                                                |> List.sortBy (fun c -> c.Food)
                                                |> List.rev

                // functions to make the code below more readable
                // NullMove does nothing (like when you're boxed in)
                // RandomMove is... Random
                let NullMove = fun() -> Move here

                let RandomMove = fun () ->
                    let i = getRandomVal 0 emptyNeighbors.Length
                    Move (List.item i emptyNeighbors)


                // maximum amount of pheromone to leave on a cell
                let MAX_PHERO = 100;

                // when returning to the nest, add more pheromones when the cell
                // has less than this number
                let REFRESH_THRESHOLD = 50;



                // active pattern to determine the ant's high-level state
                let (|ShouldDropFood|Forage|ReturnToNest|) (ant: Ant) =
                    let haveAvailableNestCells = (nestCells.IsEmpty = false)
                    match ant with
                        | a when a.HasFood && haveAvailableNestCells -> ShouldDropFood
                        | a when a.IsFullOfFood -> ReturnToNest
                        | _ -> Forage

                // active pattern to decide if we need to refresh pheromones
                let (|NeedsRefresh|NoRefresh|) (cell: WorldCell) =
                    match cell.Pheromones.[me.Color] with
                        | x when x < REFRESH_THRESHOLD ->
                            let amt = MAX_PHERO - x     // amt is the number of pheromones required to bring this cell back to 100
                            NeedsRefresh amt
                        | _ -> NoRefresh    // there are enough for now

                // gets the relative distance to the nest
                // relativeDist > 0 --> cell is farther from the nest than 'here'
                // relativeDist < 0 --> cell is closer to the nest than 'here'
                let relativeDist (cell: WorldCell) =
                    let dHere = nest.Distance(here)
                    let dCell = nest.Distance(cell)
                    dCell - dHere

                // function to get the last thing from an array
                let last (arr: 'a[]) =
                    arr.[arr.Length-1]

                // the ant parameter isn't used, but I don't know how to make a
                // parameterless active pattern
                let (|AdjacentToFood|AdjacentToPheromone|NoMansLand|) (ant: Ant) =
                    if neighborsWithFood.Length > 0 then
                        AdjacentToFood
                    elif emptyNeighborsWithP.Length > 0 && relativeDist (last emptyNeighborsWithP) > 0. then
                        // remember emptyNeighborsWithP is sorted
                        AdjacentToPheromone (last emptyNeighborsWithP)
                    else
                        NoMansLand

                // The Actual logic...

                if emptyNeighbors.IsEmpty then
                    NullMove()
                else
                    match me with
                    | ShouldDropFood -> DropFood nestCells.Head
                    | ReturnToNest ->
                        match here with
                        | NeedsRefresh amt -> DropPheromone (here, amt)
                        | NoRefresh -> Move emptyNeighbors.Head
                    | Forage ->
                        match me with
                        | AdjacentToFood -> TakeFood neighborsWithFood.Head
                        | AdjacentToPheromone pheroCell -> Move pheroCell
                        | NoMansLand -> RandomMove()

open Canvas
open Types
open World
open Simulation

let origin =
    // Sample is running in an iframe, so get the location of parent
    let topLocation = window.top.location
    topLocation.origin + topLocation.pathname

let formatScoreCard bName bFood rName rFood =
    sprintf "Black (%s): %05d vs Red (%s): %05d" bName bFood rName rFood

let formatRemaining remaining =
    sprintf "Remaining Cycles: %05d" remaining


let maxCycles = 1000
let world = ref (buildWorldInitialWorld())
let foodToWin = int <| double (Map.fold (fun s k v -> s + v.Food) 0 world.Value) * percentFoodToWin
let cycles = ref 0

let blackAI = new HardishAI.TestAntBehavior() :> IAntBehavior
let redAI = new AntsEverywhereExmampleAI.TestAntBehavior() :> IAntBehavior

let render (w,h) =
    cycles.Value <- cycles.Value + 1

    let bScore = BlackAntNest.CountFood world.Value
    let rScore = RedAntNest.CountFood world.Value

    let remainig = maxCycles - cycles.Value

    let scoreString = formatScoreCard blackAI.Name bScore redAI.Name rScore
    updateInput "score" scoreString |> ignore

    let remainingString = formatRemaining remainig
    updateInput "secondline" remainingString |> ignore


    (0., 0., w, h) |> filled (rgb 200 200 200)
    drawUpdates (w,h) world.Value
    world.Value <- worldCycle blackAI redAI world.Value

    if bScore > foodToWin || rScore > foodToWin || cycles.Value > maxCycles then
        if bScore > rScore then Some blackAI.Name
        elif rScore > bScore then Some redAI.Name
        else None
    else None

let w, h = getWindowDimensions()

let rec update () =
    let result = render (w,h)
    match result with
    | None ->
        window.setTimeout(update, 1000 / 30) |> ignore
    | Some winner ->
        updateInput "secondline" (sprintf "The winner is: %s" winner) |> ignore

update ()

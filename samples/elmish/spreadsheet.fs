module SpreadSheet

// Build your own Excel 365 in an hour with F# by Tomas Petricek!
// See the video of the talk here: https://www.youtube.com/watch?v=Bnm71YEt_lI

module Elmish =
    open Fable.Core
    open Fable.Import.Browser

    // ------------------------------------------------------------------------------------------------
    // Virtual Dom bindings
    // ------------------------------------------------------------------------------------------------

    module Virtualdom =
      type IVirtualDom =
        abstract h: string * obj * obj[] -> obj
        abstract diff: obj * obj -> obj
        abstract patch: obj * obj -> Node
        abstract createElement: obj -> Node

      let [<Global>] private virtualDom: IVirtualDom = jsNative

      let inline h(arg1, arg2, arg3) = virtualDom.h(arg1, arg2, arg3)
      let inline diff (tree1) (tree2) = virtualDom.diff(tree1, tree2)
      let inline patch (node) (patches) = virtualDom.patch(node, patches)
      let inline createElement (e) = virtualDom.createElement(e)

    // ------------------------------------------------------------------------------------------------
    // F# representation of DOM and rendering using VirtualDom
    // ------------------------------------------------------------------------------------------------

    type DomAttribute =
      | EventHandler of (obj -> unit)
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
          box s, ignore
      | Element(tag, attrs, children) ->
          let children, funcs = Array.map render children |> Array.unzip
          let func = funcs |> Array.fold (fun f g x -> f (g x)) ignore
          let focused = attrs |> Array.exists (function "focused", Property "true" -> true | _ -> false)
          let id = attrs |> Array.tryPick (function "id", Property id -> Some id | _ -> None)
          let focus = match id with Some id when focused -> (fun () -> document.getElementById(id).focus()) | _ -> ignore
          createTree tag attrs children, focus >> func

    // ------------------------------------------------------------------------------------------------
    // Helpers for dynamic property access & for creating HTML elements
    // ------------------------------------------------------------------------------------------------

    [<Emit("$0[$1]")>]
    let getProperty (o:obj) (s:string) = failwith "!"

    type Dynamic() =
      static member (?) (d:Dynamic, s:string) : Dynamic = getProperty d s

    let text s = Text(s)
    let (=>) k v = k, Property(v)
    let (=!>) k f = k, EventHandler(fun o -> f (unbox<Dynamic> o))

    type El() =
      static member (?) (_:El, n:string) = fun a b ->
        Element(n, Array.ofList a, Array.ofList b)

    let h = El()

    // ------------------------------------------------------------------------------------------------
    // Entry point - create event and update on trigger
    // ------------------------------------------------------------------------------------------------

    let app id initial r u =
      let event = new Event<'T>()
      let trigger e = event.Trigger(e)
      let mutable container = document.createElement("div") :> Node
      document.getElementById(id).appendChild(container) |> ignore
      let mutable tree = JsInterop.createObj []
      let mutable state = initial

      let handleEvent evt =
        state <- match evt with Some e -> u state e | _ -> state
        let newTree, f = r trigger state |> render
        let patches = Virtualdom.diff tree newTree
        container <- Virtualdom.patch container patches
        f ()
        tree <- newTree

      handleEvent None
      event.Publish.Add(Some >> handleEvent)

module Parsec =
    type ParseStream<'T> = int * list<'T>
    type Parser<'R> = Parser of (ParseStream<char> -> option<ParseStream<char> * 'R>)

    /// Returned by the `slot` function to create a parser slot that is filled later
    type ParserSetter<'R> =
      { Set : Parser<'R> -> unit }

    /// Ignore the result of the parser
    let ignore (Parser p) = Parser(fun input ->
      p input |> Option.map (fun (i, r) -> i, ()))

    /// Creates a delayed parser whose actual parser is set later
    let slot () =
      let mutable slot = None
      { Set = fun (Parser p) -> slot <- Some p },
      Parser(fun input -> slot.Value input)

    /// If the input matches the specified prefix, produce the specified result
    let prefix (prefix:list<char>) result = Parser(fun (offset, input) ->
      let rec loop (word:list<char>) input =
        match word, input with
        | c::word, i::input when c = i -> loop word input
        | [], input -> Some(input)
        | _ -> None

      match loop prefix input with
      | Some(input) -> Some((offset+List.length prefix, input), result)
      | _ -> None)

    /// Parser that succeeds when either of the two arguments succeed
    let (<|>) (Parser p1) (Parser p2) = Parser(fun input ->
      match p1 input with
      | Some(input, res) -> Some(input, res)
      | _ -> p2 input)

    /// Run two parsers in sequence and return the result as a tuple
    let (<*>) (Parser p1) (Parser p2) = Parser(fun input ->
      match p1 input with
      | Some(input, res1) ->
          match p2 input with
          | Some(input, res2) -> Some(input, (res1, res2))
          | _ -> None
      | _ -> None)

    /// Transforms the result of the parser using the specified function
    let map f (Parser p) = Parser(fun input ->
      p input |> Option.map (fun (input, res) -> input, f res))

    /// Run two parsers in sequence and return the result of the second one
    let (<*>>) p1 p2 = p1 <*> p2 |> map snd

    /// Run two parsers in sequence and return the result of the first one
    let (<<*>) p1 p2 = p1 <*> p2 |> map fst

    /// Succeed without consuming input
    let unit res = Parser(fun input -> Some(input, res))

    /// Parse using the first parser and then call a function to produce
    /// next parser and parse the rest of the input with the next parser
    let bind f (Parser p) = Parser(fun input ->
      match p input with
      | Some(input, res) ->
          let (Parser g) = f res
          match g input with
          | Some(input, res) -> Some(input, res)
          | _ -> None
      | _ -> None)

    /// Parser that tries to use a specified parser, but returns None if it fails
    let optional (Parser p) = Parser(fun input ->
      match p input with
      | None -> Some(input, None)
      | Some(input, res) -> Some(input, Some res) )

    /// Parser that succeeds if the input matches a predicate
    let pred p = Parser(function
      | offs, c::input when p c -> Some((offs+1, input), c)
      | _ -> None)

    /// Parser that succeeds if the predicate returns Some value
    let choose p = Parser(function
      | offs, c::input -> p c |> Option.map (fun c -> (offs + 1, input), c)
      | _ -> None)

    /// Parse zero or more repetitions using the specified parser
    let zeroOrMore (Parser p) =
      let rec loop acc input =
        match p input with
        | Some(input, res) -> loop (res::acc) input
        | _ -> Some(input, List.rev acc)
      Parser(loop [])

    /// Parse one or more repetitions using the specified parser
    let oneOrMore p =
      (p <*> (zeroOrMore p))
      |> map (fun (c, cs) -> c::cs)


    let anySpace = zeroOrMore (pred (fun t -> t = ' '))

    let char tok = pred (fun t -> t = tok)

    let separated sep p =
      p <*> zeroOrMore (sep <*> p)
      |> map (fun (a1, args) -> a1::(List.map snd args))

    let separatedThen sep p1 p2 =
      p1 <*> zeroOrMore (sep <*> p2)
      |> map (fun (a1, args) -> a1::(List.map snd args))

    let separatedOrEmpty sep p =
      optional (separated sep p)
      |> map (fun l -> defaultArg l [])

    let number = pred (fun t -> t <= '9' && t >= '0')

    let integer = oneOrMore number |> map (fun nums ->
      nums |> List.fold (fun res n -> res * 10 + (int n - int '0')) 0)

    let letter = pred (fun t ->
      (t <= 'Z' && t >= 'A') || (t <= 'z' && t >= 'a'))

    let run (Parser(f)) input =
      match f (0, List.ofSeq input) with
      | Some((i, _), res) when i = Seq.length input -> Some res
      | _ -> None

// Main
open Elmish
open Parsec

// ----------------------------------------------------------------------------

type Position = char * int

type Expr =
  | Number of int
  | Binary of Expr * char * Expr
  | Reference of Position

type State =
  { Cols : char list
    Rows : int list
    Active : Position option
    Cells : Map<Position, string> }

type Event =
  | StartEdit of Position
  | UpdateValue of Position * string

// ----------------------------------------------------------------------------

let number = integer |> map Number
let operator =
  char '*' <|> char '+' <|>
  char '-' <|> char '/'
let reference =
  letter <*> integer |> map Reference

let exprSetter, expr = slot ()
let brack =
  char '(' <*>> anySpace <*>> expr <<*>
    anySpace <<*> char ')'

let term = number <|> brack <|> reference

let binary =
  term <<*> anySpace <*> operator <<*>
    anySpace <*> term
  |> map (fun ((l,op), r) -> Binary(l, op, r))

let exprAux = binary <|> term
exprSetter.Set exprAux

let formula = char '=' <*>> anySpace <*>> expr
let equation =
  anySpace <*>> (formula <|> number) <<*> anySpace

// ----------------------------------------------------------------------------

let rec evaluate refs cells = function
  | Number(n) ->
      Some n

  | Reference(pos) when Set.contains pos refs ->
      None

  | Reference(pos) ->
      Map.tryFind pos cells |> Option.bind (fun (code: string) ->
        run equation code |> Option.bind (fun parsed ->
          evaluate (Set.add pos refs) cells parsed))

  | Binary(l, op, r) ->
      let ops = dict ['+', (+); '-', (-); '*', (*); '/', (/)]
      evaluate refs cells l |> Option.bind (fun le ->
        evaluate refs cells r |> Option.map (fun re ->
          ops.[op] le re))

// ----------------------------------------------------------------------------

let renderEditor trigger pos value =
  h?td ["class" => "selected"] [
    h?input [
      "oninput" =!> fun d -> trigger (UpdateValue(pos, unbox d?target?value))
      "id" => "celled"; "focused" => "true"
      "value" => value ] []
  ]

let renderView trigger pos value =
  h?td [
    "onclick" =!> fun _ -> trigger(StartEdit pos)
    "style" => if Option.isNone value then "background:#ffe0e0" else ""
  ] [ text (defaultArg value "#ERR") ]

let renderCell trigger pos state =
  let value = Map.tryFind pos state.Cells
  if state.Active = Some pos then
    renderEditor trigger pos (defaultArg value "")
  else
    match value with
    | None -> renderView trigger pos (Some "")
    | Some value ->
        let res =
          run equation value |> Option.bind (fun parsed ->
            evaluate Set.empty state.Cells parsed
            |> Option.map string)
        renderView trigger pos res

let render trigger state =
  h?table [] [
    yield h?tr [] [
      yield h?th [] []
      for col in state.Cols -> h?th [] [ text (string col) ]
    ]
    for row in state.Rows -> h?tr [] [
      yield h?th [] [ text (string row) ]
      for col in state.Cols -> renderCell trigger (col, row) state
    ]
  ]

// ----------------------------------------------------------------------------

let update state = function
  | UpdateValue(pos, value) ->
      let newCells = Map.add pos value state.Cells
      { state with Cells = newCells }
  | StartEdit(pos) ->
      { state with Active = Some pos }

// ----------------------------------------------------------------------------

let initial =
  { Rows = [ 1 .. 15 ]
    Cols = [ 'A' .. 'K' ]
    Active = None
    Cells = Map.empty }


app "main" initial render update

module Feliz.Snabbdom

open System
open Fable.Core
open Fable.Core.JsInterop
open Feliz
open Snabbdom

[<RequireQualifiedAccess>]
type StyleHook =
    | None
    | Delayed
    | Remove
    | Destroy

type Node =
    | Key of Guid
    | Text of string
    | El of VNode
    | Hook of string * obj
    | Style of string * obj * StyleHook
    | Attr of string * obj
    | Event of string * obj
    | Fragment of Node list

let private makeNode tag nodes =
    let mutable transformArrayHooks = false

    let rec add isHook (o: obj) keys (v: obj) =
        match keys with
        | [] -> failwith "Empty key list"
        | [key] ->
            if isHook && isIn key o then
                transformArrayHooks <- true
                emitJsStatement (o, key, v) """
                    if (Array.isArray($0[$1])) {
                        $0[$1].push($2);
                    } else {
                        $0[$1] = [$0[$1], $2]
                    }"""
            else
                o?(key) <- v
        | key::keys ->
            if isNull o?(key) then o?(key) <- obj()
            add isHook (o?(key)) keys v

    let rec addNodes (data: obj) (children: ResizeArray<_>) (nodes: Node seq) =
        nodes |> Seq.iter (function
            | Key k -> data?key <- k
            | Text s -> children.Add(Helper.Text s)
            | El vnode -> children.Add(vnode)
            | Hook(k, v) -> add true data ["hook"; k] v
            | Style(k, v, StyleHook.None) -> add false data ["style"; k] v
            | Style(k, v, StyleHook.Delayed) -> add false data ["style"; "delayed"; k] v
            | Style(k, v, StyleHook.Remove) -> add false data ["style"; "remove"; k] v
            | Style(k, v, StyleHook.Destroy) -> add false data ["style"; "destroy"; k] v
            | Attr(k, v) -> add false data ["attrs"; k] v
            | Event(k, v) -> add false data ["on"; k] v
            | Fragment nodes -> addNodes data children nodes
        )

    let data = obj()
    let children = ResizeArray()
    addNodes data children nodes
    if transformArrayHooks then
        emitJsStatement (data) """
            Object.keys($0.hook)
                .filter(k => Array.isArray($0.hook[k]))
                .forEach(k => {
                    const cbs = $0.hook[k];
                    $0.hook[k] = function() {
                        for (let cb of cbs) {
                            cb.apply(void 0, arguments)
                        }
                    }
                })"""

    Snabbdom.h(tag, data, children) |> El

open System.Runtime.CompilerServices

[<Extension>]
type Extensions() =
    static let withStyleHook hook nodes =
        nodes |> Seq.choose (function
            | Style(k, v, _) -> Some(Style(k, v, hook))
            | _ -> None // error?
        ) |> Seq.toList |> Fragment

    [<Extension>]
    static member delayed(e: CssEngine<Node>, nodes: Node seq) =
        withStyleHook StyleHook.Delayed nodes

    [<Extension>]
    static member remove(e: CssEngine<Node>, nodes: Node seq) =
        withStyleHook StyleHook.Remove nodes

    [<Extension>]
    static member destroy(e: CssEngine<Node>, nodes: Node seq) =
        withStyleHook StyleHook.Destroy nodes

type Browser.Types.EventTarget with
    member this.AsInputEl =
        this :?> Browser.Types.HTMLInputElement

type Node with
    static member AsVNode = function
        | El vnode -> vnode
        | Fragment [El vnode] -> vnode
        | Fragment nodes -> makeNode "div" nodes |> Node.AsVNode
        | _ -> failwith "not a vnode"

let Html = HtmlEngine(makeNode, Text, fun () -> Fragment [])

let Svg = SvgEngine(makeNode, Text, fun () -> Fragment [])

let Attr = AttrEngine((fun k v -> Attr(k, v)), (fun k v -> Attr(k, v)))

let Css = CssEngine(fun k v -> Style(k, v, StyleHook.None))

let Ev = EventEngine(fun k f -> Event(k.ToLowerInvariant(), f))

type Hook =
    /// a vnode has been added
    static member init (f: Func<VNode, unit>) = Node.Hook("init", f)
    /// a DOM element has been created based on a vnode
    static member create (f: Func<VNode, VNode, unit>) = Node.Hook("create", f)
    /// an element has been inserted into the DOM
    static member insert (f: Func<VNode, unit>) = Node.Hook("insert", f)
    /// an element is about to be patched
    static member prepatch (f: Func<VNode, VNode, unit>) = Node.Hook("prepatch", f)
    /// an element is being updated
    static member  update (f: Func<VNode, VNode, unit>) = Node.Hook("update", f)
    /// an element has been patched
    static member postpatch (f: Func<VNode, VNode, unit>) = Node.Hook("postpatch", f)
    /// an element is directly or indirectly being removed
    static member destroy (f: Func<VNode, unit>) = Node.Hook("destroy", f)
    /// an element is directly being removed from the DOM
    static member remove (f: Func<VNode, (unit -> unit), unit>) = Node.Hook("remove", f)

    /// The disposable returned by the hook when the element is inserted into the DOM
    /// will be disposed when that element is directly or indirectly removed from the DOM
    static member insert (f: VNode -> IDisposable) =
        Fragment [
            Hook.insert (fun (v: VNode) ->
                let disp = f v
                v.data?disposable <- disp)

            Hook.update (fun oldNode newNode ->
                newNode.data?disposable <- oldNode.data?disposable
            )

            Hook.destroy (fun (v: VNode) ->
                v.data?disposable
                |> Option.ofObj
                |> Option.iter (fun (d: IDisposable) -> d.Dispose()))
        ]

    static member subscribe(arg: 'arg, onInsert: VNode -> IObserver<'arg>) =
        Fragment [
            Hook.insert (fun (v: VNode) ->
                v.data?observer <- onInsert v)

            Hook.update (fun oldNode newNode ->
                let obs: IObserver<'arg> = oldNode.data?observer
                obs.OnNext(arg)
                newNode.data?observer <- obs
            )

            Hook.destroy (fun (v: VNode) ->
                let obs: IObserver<'arg> = v.data?observer
                obs.OnCompleted())
        ]

    static member subscribe(arg: 'arg, onInsert: VNode -> ('arg -> unit)) =
        Hook.subscribe(arg, fun vnode ->
            let onNext = onInsert vnode
            { new IObserver<'arg> with
                member _.OnNext(v) = onNext v
                member _.OnCompleted() = ()
                member _.OnError(_) = () })

module Disposable =
    let make f =
        { new IDisposable with
            member _.Dispose() = f() }

    let concat (disps: IDisposable list) =
        make (fun () -> disps |> List.iter (fun d -> d.Dispose()))

let private attachEvent (f: Browser.Types.Event -> unit) (el: Browser.Types.Node) (eventType: string) =
    el.addEventListener (eventType, f)
    Disposable.make (fun () -> el.removeEventListener (eventType, f))

let private mkEventEngine (node: Browser.Types.Node) =
    EventEngine(fun e f -> e.ToLowerInvariant() |> attachEvent f node)

let BodyEv = mkEventEngine(Browser.Dom.document.body)

let memoizeWith (render: 'arg -> Node) getId equals arg =
    Helper.Memo(getId arg, (fun m -> render m |> Node.AsVNode), arg, equals) |> El

let memoizeWithId (render: 'arg -> Node) getId arg =
    Helper.Memo(getId arg, (fun m -> render m |> Node.AsVNode), arg) |> El

// let inline getId x = (^a: (member Id: Guid) x)

// let inline memoize (render: 'arg -> Node) arg =
//     memoizeWithId render getId arg

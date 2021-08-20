[<RequireQualifiedAccess>]
module Elmish.Snabbdom.Program

open Fable.Core
open Fable.Core.JsInterop
open Elmish
open Browser.Types
open Feliz.Snabbdom

module private rec Util =
    let copyTo (target: obj) (source: obj) =
        JS.Constructors.Object.assign(target, source) |> ignore

    let partialPatch (oldVNode: Snabbdom.VNode) (newVnode: Snabbdom.VNode) =
        Snabbdom.Helper.Patch(oldVNode, newVnode) |> copyTo oldVNode

open Util

/// When mounting an app on a virtual node, `setNewArg` will be used
/// to transform new arguments into messages and dispatch them
let withSetNewArg (setNewArg: 'arg -> 'msg) (program: Program<'arg, 'model, 'msg, Node>) =
    program?setNewArg <- setNewArg
    program

let __mountOnVNodeWith (init: (Program<'arg, 'model, 'msg, Node> -> unit) -> unit) (sel: string) (arg: 'arg): Node =
    Html.custom(sel, [
      Hook.insert (fun vnode -> init(fun program ->
        let mutable oldVNode = vnode
        let mutable oldModel: 'model option = None


        let setState model dispatch =
            match oldModel with
            | Some m when obj.ReferenceEquals(m, model) -> ()
            | _ ->
                let newVNode =
                    Html.custom(sel, [
                        Program.view program model dispatch
                    ]) |> Node.AsVNode

                if oldVNode.children.Length = 0 && jsIn "setNewArg" program then
                    newVNode.data?setNewArg <- (program?setNewArg >> dispatch)

                partialPatch oldVNode newVNode
                oldVNode <- newVNode

        program
        |> Program.withSetState setState
        |> Program.runWith arg
      ))

      Hook.prepatch (fun oldVNode newVNode ->
        oldVNode |> copyTo newVNode
        if jsIn "setNewArg" newVNode.data then
            newVNode.data?setNewArg(arg)
      )
    ])

/// Mounts an Elmish app onto a Snabbdom virtual node.
/// The selector `tag[#id][.classes]` is important to distinguish it from sibling nodes.
let mountOnVNodeWith (selector: string) (arg: 'arg) (program: Program<'arg, 'model, 'msg, Node>): Node =
    __mountOnVNodeWith (fun cont -> cont(program)) selector arg

/// Mounts an Elmish app onto a Snabbdom virtual node.
/// The selector `tag[#id][.classes]` is important to distinguish it from sibling nodes.
let mountOnVNode (selector: string) (program: Program<_,_,_,_>): Node =
    __mountOnVNodeWith (fun cont -> cont(program)) selector ()

// [<Emit("cont => import($0).then(m => cont(m.mkProgram($1)))")>]
// let __importAndMkProgram(path: string) (arg: 'arg): (Program<'arg, 'model, 'msg, Node> -> unit) -> unit = jsNative

// let inline importAndMountOnVNode (path: string) sel: Node =
//     __mountOnVNodeWith (__importAndMkProgram (path + Compiler.extension) ()) sel ()

// let inline importAndMountOnVNodeWith (path: string) sel (arg: 'arg): Node =
//     __mountOnVNodeWith (__importAndMkProgram (path + Compiler.extension) arg) sel arg

let __lazyOnVNodeWith (mkProgram: JS.Promise<'arg -> Program<'arg, 'model, 'msg, Node>>) sel arg: Node =
    __mountOnVNodeWith (fun cont ->
        mkProgram.``then``(fun mkProgram -> mkProgram arg |> cont) |> ignore
    ) sel arg

/// Like `mountOnVNodeWith` but the external module is only loaded when the node is inserted into the DOM.
/// Pass a direct reference to `mkProgram` function (avoid pipes).
/// For the argument avoid referencing a declared type in the external module (you can use anonymous records).
// let inline lazyOnVNodeWith (mkProgram: 'arg -> Program<'arg, 'model, 'msg, Node>) (selector: string) (arg: 'arg): Node =
//     __lazyOnVNodeWith (importValueDynamic mkProgram) selector arg

// /// Like `mountOnVNode` but the external module is only loaded when the node is inserted into the DOM.
// /// Pass a direct reference to `mkProgram` function (avoid pipes).
// let inline lazyOnVNode (mkProgram: unit -> Program<unit, 'model, 'msg, Node>) (selector: string): Node =
//     __lazyOnVNodeWith (importValueDynamic mkProgram) selector ()

/// Mounts an Elmish program on an
let mountWithId (id: string) (program: Program<'arg, 'model, 'msg, Node>): Program<'arg, 'model, 'msg, Node> =
    let parent = Browser.Dom.document.getElementById(id)
    // Snabbdom expects el to be empty, but this is not the case in HMR reloads
    if parent.children.length > 0 then parent.innerHTML <- ""

    // Don't mount directly on the element as Snabbdom will replace it
    // and we won't be able to locate it in hot reloads
    let el = Browser.Dom.document.createElement("div")
    parent.appendChild(el) |> ignore

    let mutable oldVNode: Snabbdom.VNode option = None
    let mutable oldModel: 'model option = None

    let setState model dispatch =
        match oldModel with
        | Some m when obj.ReferenceEquals(m, model) -> ()
        | _ ->
            let newVNode = Program.view program model dispatch |> Node.AsVNode
            match oldVNode with
            | None -> Snabbdom.Helper.Patch(el, newVNode) |> ignore
            | Some oldVNode -> Snabbdom.Helper.Patch(oldVNode, newVNode) |> ignore
            oldVNode <- Some newVNode
            oldModel <- Some model

    program
    |> Program.withSetState setState

/// Alias of `mountWithId`
let withSnabbdom (id: string) program =
    mountWithId id program

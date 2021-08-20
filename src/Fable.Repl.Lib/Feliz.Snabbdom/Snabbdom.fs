module Snabbdom

open System
open Fable.Core

type Module = interface end

type VNode =
    abstract sel: string with get, set
    abstract key: string with get, set
    abstract data: obj with get, set
    abstract children: VNode[] with get, set
    abstract text: string with get, set
    abstract elm: Browser.Types.HTMLElement with get, set

type Patch = delegate of VNode * VNode -> VNode

// [<ImportMember("snabbdom/modules/attributes")>]
[<ImportMember("${outPath}/snabbdom.min.js")>]
let attributesModule: Module = jsNative

// [<ImportMember("snabbdom/modules/style")>]
[<ImportMember("${outPath}/snabbdom.min.js")>]
let styleModule: Module = jsNative

// [<ImportMember("snabbdom/modules/eventlisteners")>]
[<ImportMember("${outPath}/snabbdom.min.js")>]
let eventListenersModule: Module = jsNative

// [<ImportMember("snabbdom/h")>]
[<ImportMember("${outPath}/snabbdom.min.js")>]
let h(tag: string, props: obj, children: ResizeArray<VNode>): VNode = jsNative

// [<ImportMember("snabbdom/init")>]
[<ImportMember("${outPath}/snabbdom.min.js")>]
let init(modules: Module[]): Patch = jsNative

[<ImportMember("${outPath}/snabbdom.min.js")>]
let memo(key: Guid, render: 'arg -> VNode, arg: 'arg, equals: ('arg -> 'arg -> bool) option): VNode = jsNative

type Helper() =
    static let patcher = init [|
        attributesModule
        styleModule
        eventListenersModule
    |]
    static member Empty: VNode = unbox null
    static member Text(str: string): VNode = unbox str
    static member Patch(oldNode: VNode, newNode: VNode): VNode = patcher.Invoke(oldNode, newNode)
    static member Patch(el: Browser.Types.HTMLElement, vnode: VNode): VNode = patcher.Invoke(unbox el, vnode)
    static member Memo(key: Guid, render: 'Arg -> VNode, arg: 'Arg, ?equals: 'Arg -> 'Arg -> bool): VNode = memo(key, render, arg, equals)
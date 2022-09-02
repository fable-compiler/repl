module WebComponent

// Web Components with Fable by Onur Gümüş (Twitter @OnurGumusDev)
// Check the custom tag in the HTML tab and read this thread for more info:
// https://twitter.com/OnurGumusDev/status/1329019698667790337

// For a more high-level library to create Web Components, try Fable.Lit:
// https://fable.io/Fable.Lit/docs/web-components.html

open Fable.Core
open Browser
open Browser.Types
open Fable.Core.JsInterop

[<AllowNullLiteral>]
type HTMLTemplateElement =
    inherit HTMLElement
    abstract content: DocumentFragment with get, set

[<AllowNullLiteral>]
type HTMLTemplateElementType =
    [<EmitConstructor>]
    abstract Create: unit -> HTMLTemplateElement

let template: HTMLTemplateElement =
    downcast document.createElement ("template")

template.innerHTML <-
    """
  <style>
    .container {
      padding: 8px;
    }
    button {
      display: block;
      overflow: hidden;
      position: relative;
      padding: 0 16px;
      font-size: 16px;
      font-weight: bold;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      border: 1px solid #a1a1a1;
      background: #ffffff;
      box-shadow: 0 2px 4px 0 rgba(0,0,0, 0.05), 0 2px 8px 0 rgba(161,161,161, 0.4);
      color: #363636;
      cursor: pointer;
    }
  </style>
  <div class="container">
    <button>Label</button>
  </div>
"""

[<Global>]
module customElements =
    let define (elementName: string, ty: obj) = jsNative

[<Global>]
type ShadowRoot() =
    member this.appendChild(el: Browser.Types.Node) = jsNative
    member this.querySelector(selector: string): Browser.Types.HTMLElement = jsNative

let inline attachStatic<'T> (name: string) (f: obj): unit = jsConstructor<'T>?name <- f

let inline attachStaticGetter<'T, 'V> (name: string) (f: unit -> 'V): unit =
    JS.Constructors.Object.defineProperty (jsConstructor<'T>, name, !!{| get = f |})
    |> ignore

[<Global; AbstractClass>]
[<AllowNullLiteral>]
type HTMLElement() =
    member _.getAttribute(attr: string): string = jsNative
    member _.attachShadow(obj): ShadowRoot = jsNative
    abstract connectedCallback: unit -> unit
    abstract attributeChangedCallback: string * obj * obj -> unit

[<AllowNullLiteral>]
type Button() =
    inherit HTMLElement()

    let shadowRoot: ShadowRoot = base.attachShadow ({| mode = "open" |})

    do
        let clone = template.content.cloneNode (true)
        shadowRoot.appendChild (clone)

    let button = shadowRoot.querySelector ("button")

    member this.render() =
        button.innerHTML <- this.getAttribute ("label")

    override _.connectedCallback() = printf "connected callback"

    override this.attributeChangedCallback(name, oldVal, newVal) = this.render ()

attachStaticGetter<Button, _> "observedAttributes" (fun () -> [| "label" |])

customElements.define ("my-button", jsConstructor<Button>)

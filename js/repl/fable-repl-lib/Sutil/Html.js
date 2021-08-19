import { Feliz_HtmlEngine$1__div_BB573A, Feliz_HtmlEngine$1$reflection, Feliz_HtmlEngine$1 } from "../Feliz.Engine/HtmlEngine.js";
import { Sutil_DOM_attr, Sutil_DOM_unitResult, Sutil_DOM_SutilNode, Sutil_DOM_ContextHelpers_withParent, Sutil_DOM_buildChildren, Sutil_DOM_nodeFactory, Sutil_DOM_SutilElement$reflection, Sutil_DOM_fragment, Sutil_DOM_text, Sutil_DOM_el } from "./DOM.js";
import { class_type } from "../../fable-library/Reflection.js";
import { Sutil_Bindings_bindAttrBoth, Sutil_Bindings_bindAttrIn, Sutil_Bindings_BindApi_Bind_fragment } from "./Bindings.js";
import { Sutil_StoreOperators_op_DotGreater, Sutil_Store_distinct } from "./Store.js";
import { int32ToString } from "../../fable-library/Util.js";
import { Feliz_AttrEngine$1$reflection, Feliz_AttrEngine$1 } from "../Feliz.Engine/AttrEngine.js";
import { Sutil_Attr_style } from "./Attr.js";
import { Feliz_CssEngine$1_$ctor_Z19E9258B } from "../Feliz.Engine/CssEngine.js";

export class Sutil_Html_SutilHtmlEngine extends Feliz_HtmlEngine$1 {
    constructor() {
        super((tag, xs) => Sutil_DOM_el(tag, xs), (value) => Sutil_DOM_text(value), () => Sutil_DOM_fragment([]));
    }
}

export function Sutil_Html_SutilHtmlEngine$reflection() {
    return class_type("Sutil.Html.SutilHtmlEngine", void 0, Sutil_Html_SutilHtmlEngine, Feliz_HtmlEngine$1$reflection(Sutil_DOM_SutilElement$reflection()));
}

export function Sutil_Html_SutilHtmlEngine_$ctor() {
    return new Sutil_Html_SutilHtmlEngine();
}

export function Sutil_Html_SutilHtmlEngine__app_22DB92F2(_, xs) {
    return Sutil_DOM_fragment(xs);
}

export function Sutil_Html_SutilHtmlEngine__body_22DB92F2(_, xs) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_buildChildren(xs, Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, ctx.Document.body), ctx));
        return Sutil_DOM_unitResult(ctx, "body");
    });
}

export function Sutil_Html_SutilHtmlEngine__parent(_, selector, xs) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_buildChildren(xs, Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, ctx.Document.querySelector(selector)), ctx));
        return Sutil_DOM_unitResult(ctx, "parent");
    });
}

export function Sutil_Html_SutilHtmlEngine__text_Z686281E5(_, v) {
    return Sutil_Bindings_BindApi_Bind_fragment(Sutil_Store_distinct(v), (value) => Sutil_DOM_text(value));
}

export function Sutil_Html_SutilHtmlEngine__text_76B5483C(_, v) {
    return Sutil_Bindings_BindApi_Bind_fragment(Sutil_Store_distinct(Sutil_StoreOperators_op_DotGreater(v, (value) => int32ToString(value))), (value_1) => Sutil_DOM_text(value_1));
}

export function Sutil_Html_SutilHtmlEngine__text_Z198ADE65(_, v) {
    return Sutil_Bindings_BindApi_Bind_fragment(Sutil_Store_distinct(Sutil_StoreOperators_op_DotGreater(v, (value) => value.toString())), (value_1) => Sutil_DOM_text(value_1));
}

export function Sutil_Html_SutilHtmlEngine__fragment_3C607F1D(_, v) {
    return Sutil_Bindings_BindApi_Bind_fragment(v, (x) => x);
}

export class Sutil_Html_SutilAttrEngine extends Feliz_AttrEngine$1 {
    constructor() {
        super((key, value) => Sutil_DOM_attr(key, value), (key_1, value_1) => Sutil_DOM_attr(key_1, value_1));
    }
}

export function Sutil_Html_SutilAttrEngine$reflection() {
    return class_type("Sutil.Html.SutilAttrEngine", void 0, Sutil_Html_SutilAttrEngine, Feliz_AttrEngine$1$reflection(Sutil_DOM_SutilElement$reflection()));
}

export function Sutil_Html_SutilAttrEngine_$ctor() {
    return new Sutil_Html_SutilAttrEngine();
}

export function Sutil_Html_SutilAttrEngine__disabled_75709723(_, value) {
    return Sutil_Bindings_bindAttrIn("disabled", value);
}

export function Sutil_Html_SutilAttrEngine__value_4E60E31B(_, value) {
    return Sutil_DOM_attr("value", value);
}

export function Sutil_Html_SutilAttrEngine__value_Z524259A4(_, value) {
    return Sutil_DOM_attr("value", value);
}

export function Sutil_Html_SutilAttrEngine__value_5E38073B(_, value) {
    return Sutil_DOM_attr("value", value);
}

export function Sutil_Html_SutilAttrEngine__value_Z1FBCCD16(_, value) {
    return Sutil_DOM_attr("value", value);
}

export function Sutil_Html_SutilAttrEngine__value_75709723(_, value) {
    return Sutil_Bindings_bindAttrIn("value", value);
}

export function Sutil_Html_SutilAttrEngine__value_Z5EDE14D4(_, value, dispatch) {
    return Sutil_Bindings_bindAttrBoth("value", value, dispatch);
}

export function Sutil_Html_SutilAttrEngine__style_68BDC580(_, cssAttrs) {
    return Sutil_Attr_style(cssAttrs);
}

export const Sutil_Html_Html = Sutil_Html_SutilHtmlEngine_$ctor();

export const Sutil_Html_Attr = Sutil_Html_SutilAttrEngine_$ctor();

export const Sutil_Html_Css = Feliz_CssEngine$1_$ctor_Z19E9258B((k, v) => [k, v]);

export function Sutil_Html_cssAttr() {
    return (x) => x;
}

export function Sutil_Html_addClass(n) {
    return Sutil_Html_cssAttr()(["sutil-add-class", n]);
}

export const Sutil_Html_useGlobal = Sutil_Html_cssAttr()(["sutil-use-global", ""]);

export function Sutil_Html_text(s) {
    return Sutil_DOM_text(s);
}

export const Sutil_Html_exampleVirtualNodes = Feliz_HtmlEngine$1__div_BB573A(Sutil_Html_Html, [Sutil_Html_text("Hello"), Sutil_DOM_fragment([Sutil_Html_text("World")]), Sutil_DOM_fragment([Sutil_Html_text("A"), Sutil_DOM_fragment([Sutil_Html_text("B")]), Sutil_Html_text("C")])]);


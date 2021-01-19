import { Sveltish_DOM_Event_Hide, Sveltish_DOM_Event_Show, Sveltish_DOM_unitResult, Sveltish_DOM_raf, Sveltish_DOM_attr } from "./DOM.js";
import { Union } from "../../fable-library/Types.js";
import { union_type } from "../../fable-library/Reflection.js";
import { getEnumerator } from "../../fable-library/Seq.js";

export function Sveltish_Attr_accept(n) {
    const arg = ["accept", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_name(n) {
    const arg = ["name", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_className(n) {
    const arg = ["class", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_placeholder(n) {
    const arg = ["placeholder", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_target(n) {
    const arg = ["target", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_href(n) {
    const arg = ["href", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_src(n) {
    const arg = ["src", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_alt(n) {
    const arg = ["alt", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_disabled(n) {
    const arg = ["disabled", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_min(n) {
    const arg = ["min", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_max(n) {
    const arg = ["max", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_value(n) {
    const arg = ["value", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_style(n) {
    const arg = ["style", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export const Sveltish_Attr_multiple = (() => {
    const arg = ["multiple", ""];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
})();

export function Sveltish_Attr_rows(n) {
    const arg = ["rows", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_cols(n) {
    const arg = ["cols", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export const Sveltish_Attr_readonly = (ctx) => Sveltish_DOM_attr("readonly", "true", ctx);

export function Sveltish_Attr_autofocus(ctx) {
    const e = ctx.Parent;
    const value = Sveltish_DOM_raf((_arg1) => {
        e.focus();
        e.setSelectionRange(99999, 99999);
    });
    void value;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Attr_id$0027(n) {
    const arg = ["id", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_type$0027(n) {
    const arg = ["type", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_for$0027(n) {
    const arg = ["for", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_class$0027() {
    return Sveltish_Attr_className;
}

export function Sveltish_Attr_unclass(n) {
    const arg = ["class-", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export function Sveltish_Attr_unclass$0027(n) {
    const arg = ["class-", n];
    return (ctx) => Sveltish_DOM_attr(arg[0], arg[1], ctx);
}

export class Sveltish_Attr_EventModifier extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Once", "PreventDefault", "StopPropagation", "StopImmediatePropagation"];
    }
}

export function Sveltish_Attr_EventModifier$reflection() {
    return union_type("Sveltish.Attr.EventModifier", [], Sveltish_Attr_EventModifier, () => [[], [], [], []]);
}

export function Sveltish_Attr_on(event, fn, options, ctx) {
    const el = ctx.Parent;
    const h = (e) => {
        const enumerator = getEnumerator(options);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const opt = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                switch (opt.tag) {
                    case 1: {
                        e.preventDefault();
                        break;
                    }
                    case 2: {
                        e.stopPropagation();
                        break;
                    }
                    case 3: {
                        e.stopImmediatePropagation();
                        break;
                    }
                    default: {
                        el.removeEventListener(event, h);
                    }
                }
            }
        }
        finally {
            enumerator.Dispose();
        }
        fn(e);
    };
    el.addEventListener(event, h);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Attr_onKeyboard(event, fn, options) {
    return (ctx) => Sveltish_Attr_on(event, (arg10) => {
        fn(arg10);
    }, options, ctx);
}

export function Sveltish_Attr_onMouse(event, fn, options) {
    return (ctx) => Sveltish_Attr_on(event, (arg10) => {
        fn(arg10);
    }, options, ctx);
}

export function Sveltish_Attr_onClick(fn, options) {
    return (ctx) => Sveltish_Attr_on("click", fn, options, ctx);
}

export function Sveltish_Attr_onShow(fn, options) {
    return (ctx) => Sveltish_Attr_on(Sveltish_DOM_Event_Show, fn, options, ctx);
}

export function Sveltish_Attr_onHide(fn, options) {
    return (ctx) => Sveltish_Attr_on(Sveltish_DOM_Event_Hide, fn, options, ctx);
}

export function Sveltish_Attr_onKeyDown(fn, options) {
    return Sveltish_Attr_onKeyboard("keydown", fn, options);
}

export function Sveltish_Attr_onMouseMove(fn, options) {
    return Sveltish_Attr_onMouse("mousemove", fn, options);
}

export function Sveltish_Attr_cssAttr() {
    return (x) => x;
}

export function Sveltish_Attr_all(n) {
    return Sveltish_Attr_cssAttr()(["all", n]);
}

export function Sveltish_Attr_margin(n) {
    return Sveltish_Attr_cssAttr()(["margin", n]);
}

export function Sveltish_Attr_marginTop(n) {
    return Sveltish_Attr_cssAttr()(["margin-top", n]);
}

export function Sveltish_Attr_marginLeft(n) {
    return Sveltish_Attr_cssAttr()(["margin-left", n]);
}

export function Sveltish_Attr_marginBottom(n) {
    return Sveltish_Attr_cssAttr()(["margin-bottom", n]);
}

export function Sveltish_Attr_marginRight(n) {
    return Sveltish_Attr_cssAttr()(["margin-right", n]);
}

export function Sveltish_Attr_backgroundColor(n) {
    return Sveltish_Attr_cssAttr()(["background-color", n]);
}

export function Sveltish_Attr_borderColor(n) {
    return Sveltish_Attr_cssAttr()(["border-color", n]);
}

export function Sveltish_Attr_borderWidth(n) {
    return Sveltish_Attr_cssAttr()(["border-width", n]);
}

export function Sveltish_Attr_color(n) {
    return Sveltish_Attr_cssAttr()(["color", n]);
}

export function Sveltish_Attr_cursor(n) {
    return Sveltish_Attr_cssAttr()(["cursor", n]);
}

export function Sveltish_Attr_justifyContent(n) {
    return Sveltish_Attr_cssAttr()(["justify-content", n]);
}

export function Sveltish_Attr_paddingBottom(n) {
    return Sveltish_Attr_cssAttr()(["padding-bottom", n]);
}

export function Sveltish_Attr_paddingLeft(n) {
    return Sveltish_Attr_cssAttr()(["padding-left", n]);
}

export function Sveltish_Attr_paddingRight(n) {
    return Sveltish_Attr_cssAttr()(["padding-right", n]);
}

export function Sveltish_Attr_paddingTop(n) {
    return Sveltish_Attr_cssAttr()(["padding-top", n]);
}

export function Sveltish_Attr_textAlign(n) {
    return Sveltish_Attr_cssAttr()(["text-align", n]);
}

export function Sveltish_Attr_whiteSpace(n) {
    return Sveltish_Attr_cssAttr()(["white-space", n]);
}

export function Sveltish_Attr_alignItems(n) {
    return Sveltish_Attr_cssAttr()(["align-items", n]);
}

export function Sveltish_Attr_border(n) {
    return Sveltish_Attr_cssAttr()(["border", n]);
}

export function Sveltish_Attr_background(n) {
    return Sveltish_Attr_cssAttr()(["background", n]);
}

export function Sveltish_Attr_borderRadius(n) {
    return Sveltish_Attr_cssAttr()(["border-radius", n]);
}

export function Sveltish_Attr_borderTopLeftRadius(n) {
    return Sveltish_Attr_cssAttr()(["border-top-left-radius", n]);
}

export function Sveltish_Attr_borderTopRightRadius(n) {
    return Sveltish_Attr_cssAttr()(["border-top-right-radius", n]);
}

export function Sveltish_Attr_borderBottomLeftRadius(n) {
    return Sveltish_Attr_cssAttr()(["border-bottom-left-radius", n]);
}

export function Sveltish_Attr_borderBottomRightRadius(n) {
    return Sveltish_Attr_cssAttr()(["border-bottom-right-radius", n]);
}

export function Sveltish_Attr_boxShadow(n) {
    return Sveltish_Attr_cssAttr()(["box-shadow", n]);
}

export function Sveltish_Attr_zIndex(n) {
    return Sveltish_Attr_cssAttr()(["z-index", n]);
}

export function Sveltish_Attr_display(n) {
    return Sveltish_Attr_cssAttr()(["display", n]);
}

export function Sveltish_Attr_fontSize(n) {
    return Sveltish_Attr_cssAttr()(["font-size", n]);
}

export function Sveltish_Attr_fontFamily(n) {
    return Sveltish_Attr_cssAttr()(["font-family", n]);
}

export function Sveltish_Attr_minHeight(n) {
    return Sveltish_Attr_cssAttr()(["min-height", n]);
}

export function Sveltish_Attr_maxHeight(n) {
    return Sveltish_Attr_cssAttr()(["max-height", n]);
}

export function Sveltish_Attr_width(n) {
    return Sveltish_Attr_cssAttr()(["width", n]);
}

export function Sveltish_Attr_minWidth(n) {
    return Sveltish_Attr_cssAttr()(["min-width", n]);
}

export function Sveltish_Attr_maxWidth(n) {
    return Sveltish_Attr_cssAttr()(["max-width", n]);
}

export function Sveltish_Attr_height(n) {
    return Sveltish_Attr_cssAttr()(["height", n]);
}

export function Sveltish_Attr_lineHeight(n) {
    return Sveltish_Attr_cssAttr()(["line-height", n]);
}

export function Sveltish_Attr_position(n) {
    return Sveltish_Attr_cssAttr()(["position", n]);
}

export function Sveltish_Attr_verticalAlign(n) {
    return Sveltish_Attr_cssAttr()(["vertical-align", n]);
}

export function Sveltish_Attr_fontWeight(n) {
    return Sveltish_Attr_cssAttr()(["font-weight", n]);
}

export function Sveltish_Attr_float$0027(n) {
    return Sveltish_Attr_cssAttr()(["float", n]);
}

export function Sveltish_Attr_padding(n) {
    return Sveltish_Attr_cssAttr()(["padding", n]);
}

export function Sveltish_Attr_boxSizing(n) {
    return Sveltish_Attr_cssAttr()(["box-sizing", n]);
}

export function Sveltish_Attr_userSelect(n) {
    return Sveltish_Attr_cssAttr()(["user-select", n]);
}

export function Sveltish_Attr_top(n) {
    return Sveltish_Attr_cssAttr()(["top", n]);
}

export function Sveltish_Attr_left(n) {
    return Sveltish_Attr_cssAttr()(["left", n]);
}

export function Sveltish_Attr_opacity(n) {
    return Sveltish_Attr_cssAttr()(["opacity", n]);
}

export function Sveltish_Attr_transition(n) {
    return Sveltish_Attr_cssAttr()(["transition", n]);
}

export function Sveltish_Attr_resize(n) {
    return Sveltish_Attr_cssAttr()(["resize", n]);
}

export function Sveltish_Attr_overflow(n) {
    return Sveltish_Attr_cssAttr()(["overflow", n]);
}

export function Sveltish_Attr_textDecoration(n) {
    return Sveltish_Attr_cssAttr()(["text-decoration", n]);
}

export function Sveltish_Attr_textDecorationStyle(n) {
    return Sveltish_Attr_cssAttr()(["text-decoration-style", n]);
}

export function Sveltish_Attr_textDecorationColor(n) {
    return Sveltish_Attr_cssAttr()(["text-decoration-color", n]);
}

export function Sveltish_Attr_borderSpacing(n) {
    return Sveltish_Attr_cssAttr()(["border-spacing", n]);
}

export function Sveltish_Attr_borderBottom(n) {
    return Sveltish_Attr_cssAttr()(["border-bottom", n]);
}

export function Sveltish_Attr_borderRight(n) {
    return Sveltish_Attr_cssAttr()(["border-right", n]);
}

export function Sveltish_Attr_borderLeft(n) {
    return Sveltish_Attr_cssAttr()(["border-left", n]);
}

export function Sveltish_Attr_borderTop(n) {
    return Sveltish_Attr_cssAttr()(["border-top", n]);
}

export function Sveltish_Attr_flex(n) {
    return Sveltish_Attr_cssAttr()(["flex", n]);
}

export function Sveltish_Attr_flexDirection(n) {
    return Sveltish_Attr_cssAttr()(["flex-direction", n]);
}

export function Sveltish_Attr_addClass(n) {
    return Sveltish_Attr_cssAttr()(["sveltish-add-class", n]);
}

export const Sveltish_Attr_useGlobal = Sveltish_Attr_cssAttr()(["sveltish-use-global", ""]);


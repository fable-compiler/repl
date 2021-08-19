import { Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C, Sutil_DOM_Event_Hide, Sutil_DOM_Event_Show, Sutil_DOM_Event_Unmount, Sutil_DOM_Event_Mount, Sutil_DOM_BuildContext__get_ParentNode, Sutil_DOM_attr, Sutil_DOM_unitResult, Sutil_DOM_rafu, Sutil_DOM_nodeFactory } from "./DOM.js";
import { interpolate, toText, join } from "../../fable-library/String.js";
import { map } from "../../fable-library/Seq.js";
import { Union } from "../../fable-library/Types.js";
import { class_type, union_type } from "../../fable-library/Reflection.js";
import { partialApply, getEnumerator } from "../../fable-library/Util.js";
import { singleton } from "../../fable-library/List.js";

export const Sutil_Attr_autofocus = Sutil_DOM_nodeFactory((ctx) => {
    const e = ctx.Parent;
    Sutil_DOM_rafu(() => {
        e.focus();
        e.setSelectionRange(99999, 99999);
    });
    return Sutil_DOM_unitResult(ctx, "autofocus");
});

export function Sutil_Attr_id$0027(n) {
    return Sutil_DOM_attr("id", n);
}

export function Sutil_Attr_type$0027(n) {
    return Sutil_DOM_attr("type", n);
}

export function Sutil_Attr_for$0027(n) {
    return Sutil_DOM_attr("for", n);
}

export function Sutil_Attr_class$0027(n) {
    return Sutil_DOM_attr("class", n);
}

export function Sutil_Attr_unclass(n) {
    return Sutil_DOM_attr("class-", n);
}

export function Sutil_Attr_unclass$0027(n) {
    return Sutil_DOM_attr("class-", n);
}

export function Sutil_Attr_style(cssAttrs) {
    return Sutil_DOM_attr("style", join("", map((tupledArg) => toText(interpolate("%P(): %P();", [tupledArg[0], tupledArg[1]])), cssAttrs)));
}

export class Sutil_Attr_EventModifier extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Once", "PreventDefault", "StopPropagation", "StopImmediatePropagation"];
    }
}

export function Sutil_Attr_EventModifier$reflection() {
    return union_type("Sutil.Attr.EventModifier", [], Sutil_Attr_EventModifier, () => [[], [], [], []]);
}

export function Sutil_Attr_on(event, fn, options) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const el = Sutil_DOM_BuildContext__get_ParentNode(ctx);
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
        return Sutil_DOM_unitResult(ctx, "on");
    });
}

export function Sutil_Attr_onCustomEvent(event, fn, options) {
    return Sutil_Attr_on(event, (arg10) => {
        fn(arg10);
    }, options);
}

export function Sutil_Attr_onKeyboard(event, fn, options) {
    return Sutil_Attr_on(event, (arg10) => {
        fn(arg10);
    }, options);
}

export function Sutil_Attr_onMouse(event, fn, options) {
    return Sutil_Attr_on(event, (arg10) => {
        fn(arg10);
    }, options);
}

export function Sutil_Attr_asElement(target) {
    return target;
}

export class Sutil_Attr_InputEvent {
    constructor() {
    }
}

export function Sutil_Attr_InputEvent$reflection() {
    return class_type("Sutil.Attr.InputEvent", void 0, Sutil_Attr_InputEvent);
}

export function Sutil_Attr_InputEvent_$ctor() {
    return new Sutil_Attr_InputEvent();
}

export function Sutil_Attr_InputEvent__get_event(x) {
    return x;
}

export function Sutil_Attr_InputEvent__get_inputElement(x) {
    return Sutil_Attr_asElement(x.target);
}

export function Sutil_Attr_onInput(fn, options) {
    return Sutil_Attr_on("input", (arg10) => {
        fn(arg10);
    }, options);
}

export function Sutil_Attr_onClick(fn, options) {
    return Sutil_Attr_on("click", fn, options);
}

export function Sutil_Attr_onMount(fn, options) {
    return Sutil_Attr_on(Sutil_DOM_Event_Mount, fn, options);
}

export function Sutil_Attr_onUnmount(fn, options) {
    return Sutil_Attr_on(Sutil_DOM_Event_Unmount, fn, options);
}

export function Sutil_Attr_onShow(fn, options) {
    return Sutil_Attr_on(Sutil_DOM_Event_Show, fn, options);
}

export function Sutil_Attr_onHide(fn, options) {
    return Sutil_Attr_on(Sutil_DOM_Event_Hide, fn, options);
}

export function Sutil_Attr_onKeyDown(fn, options) {
    return Sutil_Attr_onKeyboard("keydown", fn, options);
}

export function Sutil_Attr_onMouseMove(fn, options) {
    return Sutil_Attr_onMouse("mousemove", fn, options);
}

export function Sutil_Attr_subscribeOnMount(f) {
    return Sutil_Attr_onMount((e) => {
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C(Sutil_Attr_asElement(e.target), partialApply(1, f, [void 0]));
    }, singleton(new Sutil_Attr_EventModifier(0)));
}


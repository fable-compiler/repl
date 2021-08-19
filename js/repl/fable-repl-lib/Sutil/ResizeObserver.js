import { Record } from "../../fable-library/Types.js";
import { class_type, record_type, int32_type, lambda_type, unit_type } from "../../fable-library/Reflection.js";
import { iterate, filter, cons, empty } from "../../fable-library/List.js";
import { Sutil_Interop_Window_getComputedStyle_Z5966C024 } from "./Interop.js";
import { parse } from "../../fable-library/Int32.js";
import { Sutil_DOM_NodeKey_ResizeObserver, Sutil_DOM_NodeKey_getCreate, Sutil_DOM_listen, Sutil_DOM_documentOf } from "./DOM.js";
import { printf, toText } from "../../fable-library/String.js";
import { Sutil_Helpers_disposable } from "./Helpers.js";

export const Sutil_ResizeObserver_isCrossOrigin = false;

class Sutil_ResizeObserver_ResizeSubscriber extends Record {
    constructor(Callback, Id) {
        super();
        this.Callback = Callback;
        this.Id = (Id | 0);
    }
}

function Sutil_ResizeObserver_ResizeSubscriber$reflection() {
    return record_type("Sutil.ResizeObserver.ResizeSubscriber", [], Sutil_ResizeObserver_ResizeSubscriber, () => [["Callback", lambda_type(unit_type, unit_type)], ["Id", int32_type]]);
}

export class Sutil_ResizeObserver_ResizeObserver {
    constructor(el) {
        let clo3;
        this.iframe = null;
        this.subId = 0;
        this.unsubscribe = null;
        this.subscribers = empty();
        const computedStyle = Sutil_Interop_Window_getComputedStyle_Z5966C024(el);
        const zIndex = ((() => {
            try {
                return parse(computedStyle.zIndex, 511, false, 32) | 0;
            }
            catch (matchValue) {
                return 0;
            }
        })() - 1) | 0;
        if ((computedStyle.position === "static") ? true : (computedStyle.position === "")) {
            (el.style).position = "relative";
        }
        this.iframe = Sutil_DOM_documentOf(el).createElement("iframe");
        this.iframe.setAttribute("style", toText(printf("%sz-index: %i;"))("display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none;")(zIndex));
        this.iframe.setAttribute("aria-hidden", "true");
        this.iframe.setAttribute("tabindex", "-1");
        if (Sutil_ResizeObserver_isCrossOrigin) {
            this.iframe.setAttribute("src", "data:text/html,\u003cscript\u003eonresize=function(){parent.postMessage(0,\u0027*\u0027)}\u003c/script\u003e");
            this.unsubscribe = ((clo3 = Sutil_DOM_listen("message", window, (e) => {
                if ((e["source"]) === this.iframe.contentWindow) {
                    Sutil_ResizeObserver_ResizeObserver__notify_1505(this, e);
                }
            }), () => {
                clo3();
            }));
        }
        else {
            this.iframe.setAttribute("src", "about:blank");
            this.iframe.onload = ((e_1) => {
                let clo3_1;
                this.unsubscribe = ((clo3_1 = Sutil_DOM_listen("resize", this.iframe.contentWindow, (_arg1) => {
                    Sutil_ResizeObserver_ResizeObserver__notify_1505(this, _arg1);
                }), () => {
                    clo3_1();
                }));
            });
        }
        void el.appendChild(this.iframe);
    }
    Dispose() {
        const this$ = this;
        Sutil_ResizeObserver_ResizeObserver__Dispose(this$);
    }
}

export function Sutil_ResizeObserver_ResizeObserver$reflection() {
    return class_type("Sutil.ResizeObserver.ResizeObserver", void 0, Sutil_ResizeObserver_ResizeObserver);
}

export function Sutil_ResizeObserver_ResizeObserver_$ctor_4C3D2741(el) {
    return new Sutil_ResizeObserver_ResizeObserver(el);
}

export function Sutil_ResizeObserver_ResizeObserver__Subscribe_3A5B6456(_, callback) {
    const sub = new Sutil_ResizeObserver_ResizeSubscriber(callback, _.subId);
    _.subId = ((_.subId + 1) | 0);
    _.subscribers = cons(sub, _.subscribers);
    return Sutil_Helpers_disposable(() => {
        _.subscribers = filter((s) => (s.Id !== sub.Id), _.subscribers);
    });
}

export function Sutil_ResizeObserver_ResizeObserver__Dispose(_) {
    try {
        _.unsubscribe();
    }
    catch (matchValue) {
    }
    if (!(_.iframe == null)) {
        void _.iframe.parentNode.removeChild(_.iframe);
    }
}

function Sutil_ResizeObserver_ResizeObserver__notify_1505(this$, _arg1) {
    iterate((sub) => {
        sub.Callback();
    }, this$.subscribers);
}

export function Sutil_ResizeObserver_getResizer(el) {
    return Sutil_DOM_NodeKey_getCreate(el, Sutil_DOM_NodeKey_ResizeObserver, () => Sutil_ResizeObserver_ResizeObserver_$ctor_4C3D2741(el));
}


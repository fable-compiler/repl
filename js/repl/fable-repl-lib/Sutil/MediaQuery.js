import { Sutil_Interop_Window_matchMedia_Z721C83C5 } from "./Interop.js";
import { Sutil_DOM_disposeOnUnmount, Sutil_DOM_fragment, Sutil_DOM_listen } from "./DOM.js";
import { Sutil_StoreOperators_op_DotGreater, Sutil_StoreOperators_op_LessTwiddle, Sutil_Store_make } from "./Store.js";
import { Sutil_Helpers_disposable } from "./Helpers.js";
import { ofArray } from "../../fable-library/List.js";
import { Sutil_Bindings_BindApi_Bind_fragment } from "./Bindings.js";
import { Sutil_Transition_transition } from "./Transition.js";

export function Sutil_MediaQuery_listenMedia(query, handler) {
    const mql = Sutil_Interop_Window_matchMedia_Z721C83C5(query);
    handler(mql.matches);
    const clo3 = Sutil_DOM_listen("change", mql, (e) => {
        handler(e.matches);
    });
    return () => {
        clo3();
    };
}

export function Sutil_MediaQuery_bindMediaQuery(query, view) {
    const s = Sutil_Store_make(false);
    return Sutil_DOM_fragment([Sutil_DOM_disposeOnUnmount(ofArray([Sutil_Helpers_disposable(Sutil_MediaQuery_listenMedia(query, (m) => {
        Sutil_StoreOperators_op_LessTwiddle(s, m);
    })), s])), Sutil_Bindings_BindApi_Bind_fragment(s, view)]);
}

export function Sutil_MediaQuery_showIfMedia2(query, f, trans, view) {
    const s = Sutil_Store_make(false);
    return Sutil_DOM_fragment([Sutil_DOM_disposeOnUnmount(ofArray([Sutil_Helpers_disposable(Sutil_MediaQuery_listenMedia(query, (m) => {
        Sutil_StoreOperators_op_LessTwiddle(s, m);
    })), s])), Sutil_Transition_transition(trans, Sutil_StoreOperators_op_DotGreater(s, f), view)]);
}

export function Sutil_MediaQuery_showIfMedia(query, trans, view) {
    return Sutil_MediaQuery_showIfMedia2(query, (x) => x, trans, view);
}

export function Sutil_MediaQuery_media(query, map, app) {
    const s = Sutil_Store_make(false);
    return Sutil_DOM_fragment([Sutil_DOM_disposeOnUnmount(ofArray([Sutil_Helpers_disposable(Sutil_MediaQuery_listenMedia(query, (m) => {
        Sutil_StoreOperators_op_LessTwiddle(s, m);
    })), s])), app(Sutil_StoreOperators_op_DotGreater(s, map))]);
}


import { class_type } from "../../fable-library/Reflection.js";
import { memo, eventListenersModule, styleModule, attributesModule, init } from "./snabbdom.min.js";

export class Snabbdom_Patch {
    constructor() {
    }
}

export function Snabbdom_Patch$reflection() {
    return class_type("Snabbdom.Patch", void 0, Snabbdom_Patch, class_type("System.MulticastDelegate"));
}

export class Snabbdom_Helper {
    constructor() {
    }
}

export function Snabbdom_Helper$reflection() {
    return class_type("Snabbdom.Helper", void 0, Snabbdom_Helper);
}

export function Snabbdom_Helper_$ctor() {
    return new Snabbdom_Helper();
}

(() => {
    Snabbdom_Helper.patcher = init([attributesModule, styleModule, eventListenersModule]);
})();

export function Snabbdom_Helper_get_Empty() {
    return null;
}

export function Snabbdom_Helper_Text_Z721C83C5(str) {
    return str;
}

export function Snabbdom_Helper_Patch_7B47CB60(oldNode, newNode) {
    return Snabbdom_Helper.patcher(oldNode, newNode);
}

export function Snabbdom_Helper_Patch_Z7AA7ED5A(el, vnode) {
    return Snabbdom_Helper.patcher(el, vnode);
}

export function Snabbdom_Helper_Memo_Z25D8C161(key, render, arg, equals) {
    return memo(key, render, arg, equals);
}


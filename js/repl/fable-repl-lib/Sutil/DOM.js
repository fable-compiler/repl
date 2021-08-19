import { Sutil_Logging_error, Sutil_Logging_log } from "./Logging.js";
import { value as value_2, some } from "../../fable-library/Option.js";
import { FSharpRef, Record, toString, Union } from "../../fable-library/Types.js";
import { lambda_type, class_type, record_type, tuple_type, obj_type, list_type, string_type, union_type, bool_type, option_type } from "../../fable-library/Reflection.js";
import { equals, int32ToString, getEnumerator } from "../../fable-library/Util.js";
import { ofArray, exists, filter, collect as collect_1, head, tail, cons as cons_1, last as last_1, isEmpty, iterateIndexed, singleton as singleton_1, append as append_1, map as map_1, fold, iterate, length, empty } from "../../fable-library/List.js";
import { Sutil_Helpers_disposable, Sutil_Helpers_makeIdGenerator } from "./Helpers.js";
import { trim, split, endsWith, printf, join, substring, interpolate, toText } from "../../fable-library/String.js";
import { toList, collect, empty as empty_1, singleton, append, delay } from "../../fable-library/Seq.js";
import { Sutil_Interop_Window_getComputedStyle_Z5966C024, Sutil_Interop_getOption, Sutil_Interop_Window_requestAnimationFrame_1A119E11 } from "./Interop.js";
import { map as map_2 } from "../../fable-library/Array.js";
import { rangeDouble } from "../../fable-library/Range.js";
import { parse } from "../../fable-library/Double.js";

export const Sutil_DOM_log = (message) => {
    Sutil_Logging_log("dom", message);
};

export function Sutil_DOM_dispatch(target, name, data) {
    if (!(target == null)) {
        void target.dispatchEvent(new CustomEvent(name, data));
    }
}

export function Sutil_DOM_dispatchSimple(target, name) {
    Sutil_DOM_dispatch(target, name, {});
}

export function Sutil_DOM_dispatchCustom(target, name, init) {
    if (!(target == null)) {
        void target.dispatchEvent(new CustomEvent(name, init));
    }
}

export const Sutil_DOM_NodeKey_Disposables = "__sutil_disposables";

export const Sutil_DOM_NodeKey_ResizeObserver = "__sutil_resizeObserver";

export const Sutil_DOM_NodeKey_TickTask = "__sutil_tickTask";

export const Sutil_DOM_NodeKey_Promise = "__sutil_promise";

export const Sutil_DOM_NodeKey_NodeMap = "__sutil_nodes";

export const Sutil_DOM_NodeKey_Groups = "__sutil_groups";

export function Sutil_DOM_NodeKey_clear(node, key) {
    return delete node[key];
}

export function Sutil_DOM_NodeKey_get(node, key) {
    const v = node[key];
    if (v == null) {
        return void 0;
    }
    else {
        return some(v);
    }
}

export function Sutil_DOM_NodeKey_getCreate(node, key, cons) {
    const matchValue = Sutil_DOM_NodeKey_get(node, key);
    if (matchValue == null) {
        const newVal = cons();
        node[key] = newVal;
        return newVal;
    }
    else {
        return value_2(matchValue);
    }
}

export const Sutil_DOM_Event_NewStore = "sutil-new-store";

export const Sutil_DOM_Event_UpdateStore = "sutil-update-store";

export const Sutil_DOM_Event_ElementReady = "sutil-element-ready";

export const Sutil_DOM_Event_Mount = "sutil-mount";

export const Sutil_DOM_Event_Unmount = "sutil-unmount";

export const Sutil_DOM_Event_Show = "sutil-show";

export const Sutil_DOM_Event_Hide = "sutil-hide";

export const Sutil_DOM_Event_Updated = "sutil-updated";

export function Sutil_DOM_Event_notifyEvent(doc, name, data) {
    void doc.dispatchEvent(new CustomEvent(name, data));
}

export function Sutil_DOM_Event_notifyUpdated(doc) {
    Sutil_DOM_log("notify document");
    Sutil_DOM_Event_notifyEvent(doc, Sutil_DOM_Event_Updated, {});
}

export class Sutil_DOM_CustomDispatch$1 extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Detail", "Bubbles", "Composed"];
    }
}

export function Sutil_DOM_CustomDispatch$1$reflection(gen0) {
    return union_type("Sutil.DOM.CustomDispatch`1", [gen0], Sutil_DOM_CustomDispatch$1, () => [[["Item", option_type(gen0)]], [["Item", bool_type]], [["Item", bool_type]]]);
}

export function Sutil_DOM_CustomDispatch$1_toCustomEvent_39D6FB1A(props) {
    let data = {};
    const enumerator = getEnumerator(props);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const p = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            switch (p.tag) {
                case 1: {
                    data["bubbles"] = p.fields[0];
                    break;
                }
                case 2: {
                    data["composed"] = p.fields[0];
                    break;
                }
                default: {
                    data["detail"] = p.fields[0];
                }
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
    return data;
}

export function Sutil_DOM_CustomDispatch$1_dispatch_4FBB8B24(target, name) {
    Sutil_DOM_dispatchCustom(target, name, Sutil_DOM_CustomDispatch$1_toCustomEvent_39D6FB1A(empty()));
}

export function Sutil_DOM_CustomDispatch$1_dispatch_Z31D27F2B(e, name) {
    Sutil_DOM_dispatchCustom(e.target, name, Sutil_DOM_CustomDispatch$1_toCustomEvent_39D6FB1A(empty()));
}

export function Sutil_DOM_CustomDispatch$1_dispatch_7EFA14BE(target, name, props) {
    Sutil_DOM_dispatchCustom(target, name, Sutil_DOM_CustomDispatch$1_toCustomEvent_39D6FB1A(props));
}

export function Sutil_DOM_CustomDispatch$1_dispatch_Z55F49F91(e, name, props) {
    Sutil_DOM_dispatchCustom(e.target, name, Sutil_DOM_CustomDispatch$1_toCustomEvent_39D6FB1A(props));
}

export const Sutil_DOM_domId = Sutil_Helpers_makeIdGenerator();

export function Sutil_DOM_isTextNode(n) {
    return n.nodeType === 3;
}

export function Sutil_DOM_isElementNode(n) {
    return n.nodeType === 1;
}

export function Sutil_DOM_asTryElement(n) {
    if (Sutil_DOM_isElementNode(n)) {
        return n;
    }
    else {
        return void 0;
    }
}

export function Sutil_DOM_documentOf(n) {
    return n.ownerDocument;
}

export function Sutil_DOM_applyIfElement(f, n) {
    if (Sutil_DOM_isElementNode(n)) {
        f(n);
    }
}

export const Sutil_DOM_SvIdKey = "_svid";

export function Sutil_DOM_getNodeMap(doc) {
    return Sutil_DOM_NodeKey_getCreate(doc.body, Sutil_DOM_NodeKey_NodeMap, () => ({}));
}

export function Sutil_DOM_setSvId(n, id) {
    const map = Sutil_DOM_getNodeMap(n.ownerDocument);
    map[toString(id)] = n;
    n[Sutil_DOM_SvIdKey] = id;
    if (Sutil_DOM_isElementNode(n)) {
        n.setAttribute(Sutil_DOM_SvIdKey, toString(id));
    }
}

export function Sutil_DOM_svId(n) {
    return n[Sutil_DOM_SvIdKey];
}

export function Sutil_DOM_hasSvId(n) {
    return n.hasOwnProperty(Sutil_DOM_SvIdKey);
}

export function Sutil_DOM_findNodeWithSvId(doc, id) {
    const map = Sutil_DOM_getNodeMap(doc);
    const key = toString(id);
    if (map.hasOwnProperty(key)) {
        return map[key];
    }
    else {
        return void 0;
    }
}

export function Sutil_DOM_rectStr(r) {
    return toText(interpolate("%P(),%P() -\u003e %P(),%P()", [r.left, r.top, r.right, r.bottom]));
}

export function Sutil_DOM_nodeStr(node) {
    if (node == null) {
        return "null";
    }
    else {
        let tc = node.textContent;
        if (tc.length > 80) {
            tc = substring(tc, 0, 80);
        }
        const matchValue = node.nodeType;
        switch (matchValue) {
            case 1: {
                return toText(interpolate("\u003c%P()\u003e#%P() \"%P()\"", [node.tagName.toLocaleLowerCase(), Sutil_DOM_svId(node), tc]));
            }
            case 3: {
                return toText(interpolate("\"%P()\"#%P()", [tc, Sutil_DOM_svId(node)]));
            }
            default: {
                return toText(interpolate("?\u0027%P()\u0027#%P()", [tc, Sutil_DOM_svId(node)]));
            }
        }
    }
}

export function Sutil_DOM_nodeStrShort(node) {
    if (node == null) {
        return "null";
    }
    else {
        let tc = node.textContent;
        if (tc.length > 16) {
            tc = (substring(tc, 0, 16) + "...");
        }
        const matchValue = node.nodeType;
        switch (matchValue) {
            case 1: {
                return toText(interpolate("\u003c%P()\u003e #%P()", [node.tagName.toLocaleLowerCase(), Sutil_DOM_svId(node)]));
            }
            case 3: {
                return toText(interpolate("text:\"%P()\" #%P()", [tc, Sutil_DOM_svId(node)]));
            }
            default: {
                return toText(interpolate("?\u0027%P()\u0027#%P()", [tc, Sutil_DOM_svId(node)]));
            }
        }
    }
}

export function Sutil_DOM_DomEdit_log(s) {
    if (window.hasOwnProperty("domeditlog")) {
        window.domeditlog(s);
    }
    else {
        Sutil_Logging_log("dom", s);
    }
}

export function Sutil_DOM_DomEdit_appendChild(parent, child) {
    Sutil_DOM_DomEdit_log(toText(interpolate("appendChild parent=\u0027%P()\u0027 child=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child)])));
    void parent.appendChild(child);
    Sutil_DOM_DomEdit_log(toText(interpolate("after: appendChild parent=\u0027%P()\u0027 child=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child)])));
}

export function Sutil_DOM_DomEdit_removeChild(parent, child) {
    Sutil_DOM_DomEdit_log(toText(interpolate("removeChild parent=\u0027%P()\u0027 child=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child)])));
    void parent.removeChild(child);
    Sutil_DOM_DomEdit_log(toText(interpolate("after: removeChild parent=\u0027%P()\u0027 child=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child)])));
}

export function Sutil_DOM_DomEdit_insertBefore(parent, child, refNode) {
    Sutil_DOM_DomEdit_log(toText(interpolate("insertBefore parent=\u0027%P()\u0027 child=\u0027%P()\u0027 refNode=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child), Sutil_DOM_nodeStrShort(refNode)])));
    void parent.insertBefore(child, refNode);
    Sutil_DOM_DomEdit_log(toText(interpolate("after: insertBefore parent=\u0027%P()\u0027 child=\u0027%P()\u0027 refNode=\u0027%P()\u0027", [Sutil_DOM_nodeStrShort(parent), Sutil_DOM_nodeStrShort(child), Sutil_DOM_nodeStrShort(refNode)])));
}

export function Sutil_DOM_DomEdit_insertAfter(parent, newChild, refChild) {
    Sutil_DOM_DomEdit_insertBefore(parent, newChild, (refChild == null) ? parent.firstChild : refChild.nextSibling);
}

export function Sutil_DOM_children(node) {
    const visit = (child) => delay(() => ((!(child == null)) ? append(singleton(child), delay(() => visit(child.nextSibling))) : empty_1()));
    return visit(node.firstChild);
}

export function Sutil_DOM_descendants(node) {
    return delay(() => collect((child) => append(singleton(child), delay(() => Sutil_DOM_descendants(child))), Sutil_DOM_children(node)));
}

export function Sutil_DOM_descendantsDepthFirst(node) {
    return delay(() => collect((child) => append(Sutil_DOM_descendants(child), delay(() => singleton(child))), Sutil_DOM_children(node)));
}

export function Sutil_DOM_isSameNode(a, b) {
    if (a == null) {
        return b == null;
    }
    else {
        return a.isSameNode(b);
    }
}

function Sutil_DOM_hasDisposables(node) {
    return node.hasOwnProperty(Sutil_DOM_NodeKey_Disposables);
}

function Sutil_DOM_getDisposables(node) {
    if (Sutil_DOM_hasDisposables(node)) {
        return node[Sutil_DOM_NodeKey_Disposables];
    }
    else {
        return empty();
    }
}

function Sutil_DOM_clearDisposables(node) {
    delete node[Sutil_DOM_NodeKey_Disposables];
}

function Sutil_DOM_cleanup(node) {
    const d_1 = Sutil_DOM_getDisposables(node);
    Sutil_DOM_log(toText(interpolate("cleanup %P() - %P() disposable(s)", [Sutil_DOM_nodeStr(node), length(d_1)])));
    iterate((d) => {
        try {
            d.Dispose();
        }
        catch (x) {
            Sutil_Logging_error(toText(interpolate("Disposing %P(): %P() from %P()", [d, x, Sutil_DOM_nodeStr(node)])));
        }
    }, d_1);
    Sutil_DOM_clearDisposables(node);
    Sutil_DOM_dispatchSimple(node, Sutil_DOM_Event_Unmount);
}

export function Sutil_DOM_assertTrue(condition, message) {
    if (!condition) {
        throw (new Error(message));
    }
}

function Sutil_DOM_cleanupDeep(node) {
    Array.from(Sutil_DOM_descendantsDepthFirst(node)).forEach((node_1) => {
        Sutil_DOM_cleanup(node_1);
    });
    Sutil_DOM_cleanup(node);
}

export function Sutil_DOM_unmount(node) {
    Sutil_DOM_cleanupDeep(node);
    if (!(node.parentNode == null)) {
        Sutil_DOM_DomEdit_removeChild(node.parentNode, node);
    }
}

export function Sutil_DOM_clear(node) {
    Array.from(Sutil_DOM_children(node)).forEach((node_1) => {
        Sutil_DOM_unmount(node_1);
    });
}

export function Sutil_DOM_listen(event, e, fn) {
    e.addEventListener(event, fn);
    return () => {
        const value = e.removeEventListener(event, fn);
    };
}

export function Sutil_DOM_raf(f) {
    return Sutil_Interop_Window_requestAnimationFrame_1A119E11((t) => {
        try {
            f(t);
        }
        catch (x) {
            Sutil_Logging_error(toText(interpolate("raf: %P()", [x.message])));
        }
    });
}

export function Sutil_DOM_rafu(f) {
    void Sutil_Interop_Window_requestAnimationFrame_1A119E11((_arg1) => {
        try {
            f();
        }
        catch (x) {
            Sutil_Logging_error(toText(interpolate("rafu: %P()", [x.message])));
        }
    });
}

export function Sutil_DOM_once(event, target, fn) {
    const inner = (e) => {
        target.removeEventListener(event, inner);
        fn(e);
    };
    void Sutil_DOM_listen(event, target, inner);
}

export function Sutil_DOM_interval(callback, delayMs) {
    const id = setInterval(callback, delayMs) | 0;
    return () => {
        clearInterval(id);
    };
}

export function Sutil_DOM_timeout(callback, delayMs) {
    const id = setTimeout(callback, delayMs) | 0;
    return () => {
        clearTimeout(id);
    };
}

export class Sutil_DOM_CssRules_CssSelector extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Tag", "Cls", "Id", "All", "Any", "Attr", "NotImplemented"];
    }
}

export function Sutil_DOM_CssRules_CssSelector$reflection() {
    return union_type("Sutil.DOM.CssRules.CssSelector", [], Sutil_DOM_CssRules_CssSelector, () => [[["Item", string_type]], [["Item", string_type]], [["Item", string_type]], [["Item", list_type(Sutil_DOM_CssRules_CssSelector$reflection())]], [["Item", list_type(Sutil_DOM_CssRules_CssSelector$reflection())]], [["Item1", Sutil_DOM_CssRules_CssSelector$reflection()], ["Item2", string_type], ["Item3", string_type]], []]);
}

export function Sutil_DOM_CssRules_CssSelector__Match_4C3D2741(this$, el) {
    switch (this$.tag) {
        case 0: {
            return el.tagName === this$.fields[0];
        }
        case 1: {
            return el.classList.contains(this$.fields[0]);
        }
        case 2: {
            return el.id === this$.fields[0];
        }
        case 5: {
            if (Sutil_DOM_CssRules_CssSelector__Match_4C3D2741(this$.fields[0], el)) {
                return el.getAttribute(this$.fields[1]) === this$.fields[2];
            }
            else {
                return false;
            }
        }
        case 3: {
            return fold((a, r) => {
                if (a) {
                    return Sutil_DOM_CssRules_CssSelector__Match_4C3D2741(r, el);
                }
                else {
                    return false;
                }
            }, true, this$.fields[0]);
        }
        case 4: {
            return fold((a_1, r_1) => {
                if (a_1) {
                    return true;
                }
                else {
                    return Sutil_DOM_CssRules_CssSelector__Match_4C3D2741(r_1, el);
                }
            }, false, this$.fields[0]);
        }
        default: {
            return false;
        }
    }
}

export class Sutil_DOM_StyleRule extends Record {
    constructor(SelectorSpec, Selector, Style) {
        super();
        this.SelectorSpec = SelectorSpec;
        this.Selector = Selector;
        this.Style = Style;
    }
}

export function Sutil_DOM_StyleRule$reflection() {
    return record_type("Sutil.DOM.StyleRule", [], Sutil_DOM_StyleRule, () => [["SelectorSpec", string_type], ["Selector", Sutil_DOM_CssRules_CssSelector$reflection()], ["Style", list_type(tuple_type(string_type, obj_type))]]);
}

export class Sutil_DOM_NamedStyleSheet extends Record {
    constructor(Name, StyleSheet, Parent) {
        super();
        this.Name = Name;
        this.StyleSheet = StyleSheet;
        this.Parent = Parent;
    }
}

export function Sutil_DOM_NamedStyleSheet$reflection() {
    return record_type("Sutil.DOM.NamedStyleSheet", [], Sutil_DOM_NamedStyleSheet, () => [["Name", string_type], ["StyleSheet", list_type(Sutil_DOM_StyleRule$reflection())], ["Parent", option_type(Sutil_DOM_NamedStyleSheet$reflection())]]);
}

function Sutil_DOM_forEachChild(parent, f) {
    let child = parent.firstChild;
    while (!(child == null)) {
        f(child);
        child = child.nextSibling;
    }
}

export class Sutil_DOM_SutilNode extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["EmptyNode", "DomNode", "GroupNode"];
    }
    toString() {
        const this$ = this;
        switch (this$.tag) {
            case 1: {
                return Sutil_DOM_nodeStrShort(this$.fields[0]);
            }
            case 2: {
                return toString(this$.fields[0]);
            }
            default: {
                return "EmptyNode";
            }
        }
    }
}

export function Sutil_DOM_SutilNode$reflection() {
    return union_type("Sutil.DOM.SutilNode", [], Sutil_DOM_SutilNode, () => [[], [["Item", class_type("Browser.Types.Node")]], [["Item", Sutil_DOM_NodeGroup$reflection()]]]);
}

export class Sutil_DOM_NodeGroup {
    constructor(_name, _parent, _prevInit) {
        this.this = (new FSharpRef(null));
        const this$ = this.this;
        this._name = _name;
        this._parent = _parent;
        this.this.contents = this;
        this.id = int32ToString(Sutil_DOM_domId());
        this._dispose = (() => {
        });
        this._children = empty();
        this._prev = _prevInit;
        this["init@569"] = 1;
        const p = Sutil_DOM_NodeGroup__parentDomNode(this);
        const groups = Sutil_DOM_NodeKey_getCreate(p, Sutil_DOM_NodeKey_Groups, empty);
        p[Sutil_DOM_NodeKey_Groups] = append_1(groups, singleton_1(this.this.contents));
    }
    toString() {
        const this$ = this;
        return (((this$._name + "[") + join(",", map_1((n) => toString(n), this$._children))) + "]#") + this$.id;
    }
}

export function Sutil_DOM_NodeGroup$reflection() {
    return class_type("Sutil.DOM.NodeGroup", void 0, Sutil_DOM_NodeGroup);
}

export function Sutil_DOM_NodeGroup_$ctor_Z2A697365(_name, _parent, _prevInit) {
    return new Sutil_DOM_NodeGroup(_name, _parent, _prevInit);
}

export function Sutil_DOM_SutilNode__mapDefault(this$, f, defaultValue) {
    switch (this$.tag) {
        case 1: {
            return f(this$.fields[0]);
        }
        case 2: {
            return Sutil_DOM_NodeGroup__MapParent_Z6EDD0E6F(this$.fields[0], f);
        }
        default: {
            return defaultValue;
        }
    }
}

export function Sutil_DOM_SutilNode__iter_42C48B28(this$, f) {
    Sutil_DOM_SutilNode__mapDefault(this$, f, void 0);
}

export function Sutil_DOM_SutilNode__iterElement_1F9A456B(this$, f) {
    Sutil_DOM_SutilNode__mapDefault(this$, (n) => {
        Sutil_DOM_applyIfElement(f, n);
    }, void 0);
}

export function Sutil_DOM_SutilNode__PrettyPrint_Z721C83C5(this$, label) {
    console.groupCollapsed(label);
    const node = this$;
    const level = 0;
    const log = (l_1, s) => {
        Sutil_DOM_log((Array((l_1 * 4) + 1).join(" ")) + s);
    };
    const prDomNode = (l_2) => ((dn) => {
        const groups = Sutil_DOM_NodeGroup_GroupsOf_171AE942(dn);
        const l$0027 = (l_2 + length(groups)) | 0;
        iterateIndexed((i, g) => {
            log(l_2 + i, toText(interpolate("\u003c\u0027%P()\u0027\u003e #%P()", [Sutil_DOM_NodeGroup__get_Name(g), Sutil_DOM_NodeGroup__get_Id(g)])));
        }, groups);
        if (equals(dn, null)) {
            log(l_2, "(null)");
        }
        else if (Sutil_DOM_isTextNode(dn)) {
            log(l_2, toText(interpolate("\u0027%P()\u0027", [dn.textContent])));
        }
        else {
            const e = dn;
            log(l$0027, (("\u003c" + e.tagName) + "\u003e #") + toString(Sutil_DOM_svId(e)));
            Sutil_DOM_forEachChild(e, prDomNode(l$0027 + 1));
            if (e.hasOwnProperty(Sutil_DOM_NodeKey_Groups)) {
                const enumerator = getEnumerator(e[Sutil_DOM_NodeKey_Groups]);
                try {
                    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                        prVNode(l$0027 + 1)(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    }
                }
                finally {
                    enumerator.Dispose();
                }
            }
        }
    });
    const prVNode = (level_1) => ((v) => {
        const ch = join(",", map_1((c) => ("#" + Sutil_DOM_SutilNode__get_Id(c)), Sutil_DOM_NodeGroup__get_Children(v)));
        log(level_1, ((((("group \u0027" + Sutil_DOM_NodeGroup__get_Name(v)) + "\u0027 #") + Sutil_DOM_NodeGroup__get_Id(v)) + " children=[") + ch) + "]");
    });
    switch (node.tag) {
        case 1: {
            prDomNode(level)(node.fields[0]);
            break;
        }
        case 2: {
            prVNode(level)(node.fields[0]);
            break;
        }
        default: {
            log(level, "-");
        }
    }
    console.groupEnd();
}

export function Sutil_DOM_SutilNode__get_Id(this$) {
    switch (this$.tag) {
        case 1: {
            return Sutil_DOM_svId(this$.fields[0]);
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_Id(this$.fields[0]);
        }
        default: {
            return "-";
        }
    }
}

export function Sutil_DOM_SutilNode__set_Id_Z721C83C5(this$, id) {
    switch (this$.tag) {
        case 1: {
            Sutil_DOM_setSvId(this$.fields[0], id);
            break;
        }
        case 2: {
            Sutil_DOM_NodeGroup__set_Id_Z721C83C5(this$.fields[0], id);
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode__IsSameNode_Z5119285D(this$, node) {
    const matchValue = [this$, node];
    let pattern_matching_result, a, b, a_1, b_1;
    if (matchValue[0].tag === 1) {
        if (matchValue[1].tag === 1) {
            pattern_matching_result = 1;
            a = matchValue[0].fields[0];
            b = matchValue[1].fields[0];
        }
        else {
            pattern_matching_result = 3;
        }
    }
    else if (matchValue[0].tag === 2) {
        if (matchValue[1].tag === 2) {
            pattern_matching_result = 2;
            a_1 = matchValue[0].fields[0];
            b_1 = matchValue[1].fields[0];
        }
        else {
            pattern_matching_result = 3;
        }
    }
    else if (matchValue[1].tag === 0) {
        pattern_matching_result = 0;
    }
    else {
        pattern_matching_result = 3;
    }
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return a.isSameNode(b);
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_Id(a_1) === Sutil_DOM_NodeGroup__get_Id(b_1);
        }
        case 3: {
            return false;
        }
    }
}

export function Sutil_DOM_SutilNode__get_Document(this$) {
    switch (this$.tag) {
        case 1: {
            return this$.fields[0].ownerDocument;
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_Document(this$.fields[0]);
        }
        default: {
            return window.document;
        }
    }
}

export function Sutil_DOM_SutilNode__get_IsEmpty(this$) {
    return equals(this$, new Sutil_DOM_SutilNode(0));
}

export function Sutil_DOM_SutilNode__get_LastDomNode(this$) {
    switch (this$.tag) {
        case 1: {
            return this$.fields[0];
        }
        case 2: {
            const matchValue = Sutil_DOM_SutilNode__collectDomNodes(this$);
            if (isEmpty(matchValue)) {
                return null;
            }
            else {
                return last_1(matchValue);
            }
        }
        default: {
            return null;
        }
    }
}

export function Sutil_DOM_SutilNode__get_PrevNode(this$) {
    switch (this$.tag) {
        case 1: {
            return new Sutil_DOM_SutilNode(1, this$.fields[0].previousSibling);
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_PrevNode(this$.fields[0]);
        }
        default: {
            return new Sutil_DOM_SutilNode(0);
        }
    }
}

export function Sutil_DOM_SutilNode__get_PrevDomNode(this$) {
    switch (this$.tag) {
        case 1: {
            return this$.fields[0].previousSibling;
        }
        case 2: {
            const matchValue = Sutil_DOM_SutilNode__collectDomNodes(Sutil_DOM_NodeGroup__get_PrevNode(this$.fields[0]));
            if (isEmpty(matchValue)) {
                return null;
            }
            else {
                return last_1(matchValue);
            }
        }
        default: {
            return null;
        }
    }
}

export function Sutil_DOM_SutilNode__get_NextDomNode(this$) {
    switch (this$.tag) {
        case 1: {
            const node = this$.fields[0];
            if (node == null) {
                return null;
            }
            else {
                return node.nextSibling;
            }
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_NextDomNode(this$.fields[0]);
        }
        default: {
            return null;
        }
    }
}

export function Sutil_DOM_SutilNode__collectDomNodes(this$) {
    return Sutil_DOM_SutilNode__DomNodes(this$);
}

export function Sutil_DOM_SutilNode__DomNodes(this$) {
    switch (this$.tag) {
        case 1: {
            return singleton_1(this$.fields[0]);
        }
        case 2: {
            return Sutil_DOM_NodeGroup__DomNodes(this$.fields[0]);
        }
        default: {
            return empty();
        }
    }
}

export function Sutil_DOM_SutilNode__get_AsDomNode(this$) {
    return Sutil_DOM_SutilNode__mapDefault(this$, (x) => x, null);
}

export function Sutil_DOM_SutilNode__get_Disposables(node) {
    switch (node.tag) {
        case 1: {
            return Sutil_DOM_NodeKey_getCreate(node.fields[0], Sutil_DOM_NodeKey_Disposables, empty);
        }
        case 2: {
            return empty();
        }
        default: {
            return empty();
        }
    }
}

export function Sutil_DOM_SutilNode__Dispose(node) {
    if (node.tag === 2) {
        Sutil_DOM_NodeGroup__Dispose(node.fields[0]);
    }
}

export function Sutil_DOM_SutilNode_GetDisposables_171AE942(node) {
    return Sutil_DOM_NodeKey_getCreate(node, Sutil_DOM_NodeKey_Disposables, empty);
}

export function Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(node, d) {
    node[Sutil_DOM_NodeKey_Disposables] = cons_1(d, Sutil_DOM_getDisposables(node));
}

export function Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(node, d) {
    Sutil_DOM_log(toText(interpolate("register disposable on %P()", [node])));
    switch (node.tag) {
        case 1: {
            Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(node.fields[0], d);
            break;
        }
        case 2: {
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C(node, d) {
    Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(node, Sutil_Helpers_disposable(d));
}

export function Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(node, d) {
    Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(node, Sutil_Helpers_disposable(d));
}

function Sutil_DOM_SutilNode_ReplaceGroup_4E7C9F42(parent, nodes, existing) {
    Sutil_DOM_log(toText(interpolate("ReplaceGroup: nodes %P() existing %P()", [length(nodes), length(existing)])));
    const insertBefore = (!isEmpty(existing)) ? (isEmpty(tail(existing)) ? head(existing).nextSibling : last_1(existing).nextSibling) : null;
    iterate((n) => {
        let copyOfStruct, copyOfStruct_1, copyOfStruct_2;
        Sutil_DOM_cleanupDeep(n);
        if (((copyOfStruct = n, copyOfStruct.parentNode)) == null) {
            Sutil_DOM_log(toText(interpolate("Warning: Node %P() was unmounted unexpectedly", [Sutil_DOM_nodeStr(n)])));
        }
        else {
            if (!parent.isSameNode((copyOfStruct_1 = n, copyOfStruct_1.parentNode))) {
                Sutil_DOM_log(toText(interpolate("Warning: Node %P() has unexpected parent", [Sutil_DOM_nodeStr(n)])));
            }
            Sutil_DOM_DomEdit_removeChild((copyOfStruct_2 = n, copyOfStruct_2.parentNode), n);
        }
    }, existing);
    iterate((n_1) => {
        Sutil_DOM_DomEdit_insertBefore(parent, n_1, insertBefore);
    }, nodes);
}

export function Sutil_DOM_SutilNode__InsertAfter_25271BA0(this$, node, refNode) {
    switch (this$.tag) {
        case 1: {
            Sutil_DOM_log(toText(interpolate("InsertAfter (parent = %P(): refNode=%P() refNode.NextDomNode=%P()", [this$, refNode, Sutil_DOM_nodeStr(Sutil_DOM_SutilNode__get_NextDomNode(refNode))])));
            const refDomNode = Sutil_DOM_SutilNode__get_NextDomNode(refNode);
            iterate((child) => {
                Sutil_DOM_DomEdit_insertBefore(this$.fields[0], child, refDomNode);
            }, Sutil_DOM_SutilNode__collectDomNodes(node));
            break;
        }
        case 2: {
            Sutil_DOM_NodeGroup__InsertAfter_25271BA0(this$.fields[0], node, refNode);
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode__InsertAfter_Z129D0740(this$, node, refNode) {
    Sutil_DOM_SutilNode__iter_42C48B28(this$, (parent) => {
        Sutil_DOM_DomEdit_insertAfter(parent, node, refNode);
    });
}

export function Sutil_DOM_SutilNode__RemoveChild_171AE942(this$, node) {
    Sutil_DOM_SutilNode__iter_42C48B28(this$, (parent) => {
        Sutil_DOM_DomEdit_removeChild(parent, node);
    });
}

export function Sutil_DOM_SutilNode__ReplaceGroup_Z22EF991E(this$, node, existing, insertBefore) {
    Sutil_DOM_log(toText(interpolate("ReplaceGroup(%P(), %P())", [node, existing])));
    switch (this$.tag) {
        case 1: {
            Sutil_DOM_SutilNode_ReplaceGroup_4E7C9F42(this$.fields[0], Sutil_DOM_SutilNode__collectDomNodes(node), Sutil_DOM_SutilNode__collectDomNodes(existing));
            break;
        }
        case 2: {
            Sutil_DOM_NodeGroup__ReplaceChild_Z22EF991E(this$.fields[0], node, existing, insertBefore);
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode__AppendChild_171AE942(this$, child) {
    switch (this$.tag) {
        case 1: {
            Sutil_DOM_DomEdit_appendChild(this$.fields[0], child);
            break;
        }
        case 2: {
            Sutil_DOM_NodeGroup__AppendChild_Z5119285D(this$.fields[0], new Sutil_DOM_SutilNode(1, child));
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode__AppendChild_Z5119285D(this$, child) {
    switch (this$.tag) {
        case 1: {
            iterate((child_1) => {
                Sutil_DOM_DomEdit_appendChild(this$.fields[0], child_1);
            }, Sutil_DOM_SutilNode__collectDomNodes(child));
            break;
        }
        case 2: {
            Sutil_DOM_NodeGroup__AppendChild_Z5119285D(this$.fields[0], child);
            break;
        }
        default: {
        }
    }
}

export function Sutil_DOM_SutilNode__get_FirstDomNodeInOrAfter(this$) {
    switch (this$.tag) {
        case 1: {
            return this$.fields[0];
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_FirstDomNodeInOrAfter(this$.fields[0]);
        }
        default: {
            return null;
        }
    }
}

export function Sutil_DOM_SutilNode__InsertBefore_Z129D0740(this$, node, refNode) {
    Sutil_DOM_SutilNode__iter_42C48B28(this$, (parent) => {
        Sutil_DOM_DomEdit_insertBefore(parent, node, refNode);
    });
}

export function Sutil_DOM_SutilNode__AddClass_Z721C83C5(this$, cls) {
    Sutil_DOM_SutilNode__iterElement_1F9A456B(this$, (parent) => {
        parent.classList.add(cls);
    });
}

export function Sutil_DOM_SutilNode__RemoveClass_Z721C83C5(this$, cls) {
    Sutil_DOM_SutilNode__iterElement_1F9A456B(this$, (parent) => {
        parent.classList.remove(cls);
    });
}

export function Sutil_DOM_SutilNode__Clear(this$) {
    Sutil_DOM_SutilNode__iter_42C48B28(this$, (node) => {
        Sutil_DOM_clear(node);
    });
}

export function Sutil_DOM_SutilNode__get_Children(this$) {
    switch (this$.tag) {
        case 1: {
            return empty();
        }
        case 2: {
            return Sutil_DOM_NodeGroup__get_Children(this$.fields[0]);
        }
        default: {
            return empty();
        }
    }
}

export function Sutil_DOM_NodeGroup__get_Document(this$) {
    return Sutil_DOM_NodeGroup__parentDomNode(this$).ownerDocument;
}

export function Sutil_DOM_NodeGroup__get_Parent(this$) {
    return this$._parent;
}

export function Sutil_DOM_NodeGroup__get_PrevNode(this$) {
    return this$._prev;
}

export function Sutil_DOM_NodeGroup__set_PrevNode_Z5119285D(this$, v) {
    this$._prev = v;
}

export function Sutil_DOM_NodeGroup__DomNodes(this$) {
    return collect_1((c) => Sutil_DOM_SutilNode__DomNodes(c), Sutil_DOM_NodeGroup__get_Children(this$));
}

export function Sutil_DOM_NodeGroup__get_PrevDomNode(this$) {
    let result;
    const matchValue = Sutil_DOM_NodeGroup__get_PrevNode(this$);
    switch (matchValue.tag) {
        case 2: {
            const v = matchValue.fields[0];
            const matchValue_1 = Sutil_DOM_NodeGroup__get_LastDomNode(v);
            result = (equals(matchValue_1, null) ? Sutil_DOM_NodeGroup__get_PrevDomNode(v) : matchValue_1);
            break;
        }
        case 0: {
            const matchValue_2 = Sutil_DOM_NodeGroup__get_Parent(this$);
            result = ((matchValue_2.tag === 2) ? Sutil_DOM_NodeGroup__get_PrevDomNode(matchValue_2.fields[0]) : null);
            break;
        }
        default: {
            result = matchValue.fields[0];
        }
    }
    Sutil_DOM_log(toText(interpolate("PrevDomNode of %P() -\u003e \u0027%P()\u0027 PrevNode=%P()", [this$, Sutil_DOM_nodeStr(result), Sutil_DOM_NodeGroup__get_PrevNode(this$)])));
    return result;
}

export function Sutil_DOM_NodeGroup__get_NextDomNode(this$) {
    const matchValue = Sutil_DOM_NodeGroup__DomNodes(this$);
    if (isEmpty(matchValue)) {
        const matchValue_1 = Sutil_DOM_NodeGroup__get_PrevDomNode(this$);
        if (equals(matchValue_1, null)) {
            const matchValue_2 = Sutil_DOM_NodeGroup__parentDomNode(this$);
            if (equals(matchValue_2, null)) {
                return null;
            }
            else {
                return matchValue_2.firstChild;
            }
        }
        else {
            return matchValue_1.nextSibling;
        }
    }
    else {
        const matchValue_3 = last_1(matchValue);
        if (equals(matchValue_3, null)) {
            return null;
        }
        else {
            return matchValue_3.nextSibling;
        }
    }
}

export function Sutil_DOM_NodeGroup__get_FirstDomNode(this$) {
    const matchValue = Sutil_DOM_NodeGroup__DomNodes(this$);
    if (!isEmpty(matchValue)) {
        return head(matchValue);
    }
    else {
        return null;
    }
}

export function Sutil_DOM_NodeGroup__get_LastDomNode(this$) {
    const matchValue = Sutil_DOM_NodeGroup__DomNodes(this$);
    if (isEmpty(matchValue)) {
        return null;
    }
    else {
        return last_1(matchValue);
    }
}

export function Sutil_DOM_NodeGroup__get_FirstDomNodeInOrAfter(this$) {
    const matchValue = Sutil_DOM_NodeGroup__get_FirstDomNode(this$);
    if (equals(matchValue, null)) {
        return Sutil_DOM_NodeGroup__get_NextDomNode(this$);
    }
    else {
        return matchValue;
    }
}

export function Sutil_DOM_NodeGroup__MapParent_Z6EDD0E6F(this$, f) {
    return f(Sutil_DOM_NodeGroup__parentDomNode(this$));
}

function Sutil_DOM_NodeGroup__OwnX_171AE942(this$, n) {
    n["__sutil_snode"] = this$;
}

function Sutil_DOM_NodeGroup__OwnX_Z5119285D(this$, child) {
    if (child.tag === 1) {
        Sutil_DOM_NodeGroup__OwnX_171AE942(this$, child.fields[0]);
    }
}

export function Sutil_DOM_NodeGroup_GroupOf_171AE942(n) {
    return Sutil_Interop_getOption(n, "__sutil_snode");
}

export function Sutil_DOM_NodeGroup_GroupsOf_171AE942(n) {
    let matchValue_1;
    const parentsOf = (r_mut) => {
        parentsOf:
        while (true) {
            const r = r_mut;
            if (!isEmpty(r)) {
                const matchValue = Sutil_DOM_NodeGroup__get_Parent(head(r));
                if (matchValue.tag === 2) {
                    r_mut = cons_1(matchValue.fields[0], r);
                    continue parentsOf;
                }
                else {
                    return r;
                }
            }
            else {
                return r;
            }
            break;
        }
    };
    return parentsOf((matchValue_1 = Sutil_Interop_getOption(n, "__sutil_snode"), (matchValue_1 != null) ? singleton_1(value_2(matchValue_1)) : empty()));
}

export function Sutil_DOM_NodeGroup__Clear(this$) {
    this$._children = empty();
}

function Sutil_DOM_NodeGroup__AddChild_Z5119285D(this$, child) {
    Sutil_DOM_NodeGroup__OwnX_Z5119285D(this$, child);
    this$._children = append_1(this$._children, singleton_1(child));
    Sutil_DOM_NodeGroup__updateChildrenPrev(this$);
}

export function Sutil_DOM_NodeGroup__AppendChild_Z5119285D(this$, child) {
    if (Sutil_DOM_NodeGroup__get_Parent(this$).tag === 0) {
    }
    else {
        const cn = map_1((node) => Sutil_DOM_nodeStrShort(node), Sutil_DOM_NodeGroup__DomNodes(this$));
        const pn = map_1((node_1) => Sutil_DOM_nodeStrShort(node_1), Sutil_DOM_SutilNode__DomNodes(Sutil_DOM_NodeGroup__get_PrevNode(this$)));
        const parent = Sutil_DOM_NodeGroup__parentDomNode(this$);
        const before = Sutil_DOM_NodeGroup__get_NextDomNode(this$);
        iterate((ch) => {
            Sutil_DOM_DomEdit_insertBefore(parent, ch, before);
        }, Sutil_DOM_SutilNode__collectDomNodes(child));
    }
    Sutil_DOM_NodeGroup__OwnX_Z5119285D(this$, child);
    this$._children = append_1(this$._children, singleton_1(child));
    Sutil_DOM_NodeGroup__updateChildrenPrev(this$);
}

export function Sutil_DOM_NodeGroup__get_FirstChild(this$) {
    const matchValue = this$._children;
    if (!isEmpty(matchValue)) {
        return head(matchValue);
    }
    else {
        return new Sutil_DOM_SutilNode(0);
    }
}

export function Sutil_DOM_NodeGroup__get_LastChild(this$) {
    const matchValue = this$._children;
    if (isEmpty(matchValue)) {
        return new Sutil_DOM_SutilNode(0);
    }
    else {
        return last_1(matchValue);
    }
}

function Sutil_DOM_NodeGroup__ChildAfter_Z5119285D(this$, prev) {
    Sutil_DOM_log(toText(interpolate("ChildAfter: prev=\u0027%P()\u0027 children=%P() this=\u0027%P()\u0027", [prev, Sutil_DOM_NodeGroup__childStrs(this$), this$])));
    if (prev.tag === 0) {
        return Sutil_DOM_NodeGroup__get_FirstChild(this$);
    }
    else {
        const find = (list_mut) => {
            find:
            while (true) {
                const list = list_mut;
                let pattern_matching_result, x_1;
                if (!isEmpty(list)) {
                    if (isEmpty(tail(list))) {
                        if (Sutil_DOM_SutilNode__IsSameNode_Z5119285D(head(list), prev)) {
                            pattern_matching_result = 1;
                            x_1 = head(list);
                        }
                        else {
                            pattern_matching_result = 2;
                        }
                    }
                    else {
                        pattern_matching_result = 2;
                    }
                }
                else {
                    pattern_matching_result = 0;
                }
                switch (pattern_matching_result) {
                    case 0: {
                        Sutil_DOM_log(toText(interpolate("Did not find %P()", [prev])));
                        return new Sutil_DOM_SutilNode(0);
                    }
                    case 1: {
                        Sutil_DOM_log(toText(interpolate("Found %P() at end of list -\u003e EmptyNode", [x_1])));
                        return new Sutil_DOM_SutilNode(0);
                    }
                    case 2: {
                        let pattern_matching_result_1, x_3, y_1;
                        if (!isEmpty(list)) {
                            if (!isEmpty(tail(list))) {
                                if (Sutil_DOM_SutilNode__IsSameNode_Z5119285D(head(list), prev)) {
                                    pattern_matching_result_1 = 0;
                                    x_3 = head(list);
                                    y_1 = head(tail(list));
                                }
                                else {
                                    pattern_matching_result_1 = 1;
                                }
                            }
                            else {
                                pattern_matching_result_1 = 1;
                            }
                        }
                        else {
                            pattern_matching_result_1 = 1;
                        }
                        switch (pattern_matching_result_1) {
                            case 0: {
                                Sutil_DOM_log(toText(interpolate("Found %P() after %P()", [y_1, x_3])));
                                return y_1;
                            }
                            case 1: {
                                if (!isEmpty(list)) {
                                    Sutil_DOM_log(toText(interpolate("Found %P() but not equal to %P()", [head(list), prev])));
                                    list_mut = tail(list);
                                    continue find;
                                }
                                else {
                                    throw (new Error("Match failure"));
                                }
                            }
                        }
                    }
                }
                break;
            }
        };
        return find(this$._children);
    }
}

export function Sutil_DOM_NodeGroup__InsertAfter_25271BA0(this$, child, prev) {
    Sutil_DOM_NodeGroup__InsertBefore_25271BA0(this$, child, Sutil_DOM_NodeGroup__ChildAfter_Z5119285D(this$, prev));
}

function Sutil_DOM_NodeGroup__InsertBefore_25271BA0(this$, child, refNode) {
    const refDomNode = (refNode.tag === 0) ? Sutil_DOM_NodeGroup__get_NextDomNode(this$) : Sutil_DOM_SutilNode__get_FirstDomNodeInOrAfter(refNode);
    Sutil_DOM_log(toText(interpolate("InsertBefore: child=\u0027%P()\u0027 before \u0027%P()\u0027 refDomNode=\u0027%P()\u0027 child.PrevNode=\u0027%P()\u0027", [child, refNode, Sutil_DOM_nodeStrShort(refDomNode), Sutil_DOM_SutilNode__get_PrevNode(child)])));
    const parent = Sutil_DOM_NodeGroup__parentDomNode(this$);
    const len = length(this$._children) | 0;
    const enumerator = getEnumerator(Sutil_DOM_SutilNode__collectDomNodes(child));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            Sutil_DOM_DomEdit_insertBefore(parent, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), refDomNode);
        }
    }
    finally {
        enumerator.Dispose();
    }
    if (equals(refNode, new Sutil_DOM_SutilNode(0))) {
        Sutil_DOM_NodeGroup__AddChild_Z5119285D(this$, child);
    }
    else {
        this$._children = fold((list, ch) => {
            if (Sutil_DOM_SutilNode__IsSameNode_Z5119285D(ch, refNode)) {
                return append_1(list, append_1(singleton_1(child), singleton_1(ch)));
            }
            else {
                return append_1(list, singleton_1(ch));
            }
        }, empty(), this$._children);
        Sutil_DOM_NodeGroup__OwnX_Z5119285D(this$, child);
    }
    Sutil_DOM_NodeGroup__updateChildrenPrev(this$);
    Sutil_DOM_log(toText(interpolate("InsertBefore: child=\u0027%P()\u0027 refNode=\u0027%P()\u0027 child.PrevNode=\u0027%P()\u0027", [child, Sutil_DOM_nodeStrShort(refDomNode), Sutil_DOM_SutilNode__get_PrevNode(child)])));
    if (length(this$._children) === len) {
        Sutil_DOM_log(toText(interpolate("Error: Child was not added", [])));
    }
}

export function Sutil_DOM_NodeGroup__RemoveChild_Z5119285D(_, child) {
    const newChildren = filter((n_1) => (!equals(n_1, child)), _._children);
    const c = child;
    const p = _.this.contents;
    switch (c.tag) {
        case 1: {
            Sutil_DOM_unmount(c.fields[0]);
            break;
        }
        case 2: {
            const g = c.fields[0];
            iterate((gc) => {
                Sutil_DOM_NodeGroup__RemoveChild_Z5119285D(g, gc);
            }, Sutil_DOM_NodeGroup__get_Children(g));
            Sutil_DOM_NodeGroup__Dispose(g);
            break;
        }
        default: {
        }
    }
    _._children = newChildren;
    Sutil_DOM_NodeGroup__updateChildrenPrev(_);
}

export function Sutil_DOM_NodeGroup__ReplaceChild_Z22EF991E(this$, child, oldChild, insertBefore) {
    const nodes = Sutil_DOM_SutilNode__collectDomNodes(child);
    Sutil_DOM_assertTrue(!equals(child, new Sutil_DOM_SutilNode(0)), "Empty child for replace child");
    if (!equals(oldChild, new Sutil_DOM_SutilNode(0))) {
        Sutil_DOM_assertTrue(exists((c_1) => (Sutil_DOM_SutilNode__get_Id(c_1) === Sutil_DOM_SutilNode__get_Id(oldChild)), this$._children), "Child not found");
        Sutil_DOM_SutilNode__set_Id_Z721C83C5(child, Sutil_DOM_SutilNode__get_Id(oldChild));
    }
    const parent = Sutil_DOM_NodeGroup__parentDomNode(this$);
    iterate((n) => {
        Sutil_DOM_DomEdit_insertBefore(parent, n, insertBefore);
    }, nodes);
    iterate((c) => {
        if (c.parentNode == null) {
            Sutil_DOM_log(toText(interpolate("Node has no parent: %P()", [Sutil_DOM_nodeStrShort(c)])));
        }
        else {
            Sutil_DOM_DomEdit_removeChild(c.parentNode, c);
        }
    }, Sutil_DOM_SutilNode__collectDomNodes(oldChild));
    if ((insertBefore == null) ? true : equals(oldChild, new Sutil_DOM_SutilNode(0))) {
        Sutil_DOM_NodeGroup__AddChild_Z5119285D(this$, child);
    }
    else {
        Sutil_DOM_NodeGroup__OwnX_Z5119285D(this$, child);
        this$._children = map_1((n_1) => {
            if (Sutil_DOM_SutilNode__get_Id(n_1) === Sutil_DOM_SutilNode__get_Id(oldChild)) {
                return child;
            }
            else {
                return n_1;
            }
        }, this$._children);
    }
    Sutil_DOM_NodeGroup__updateChildrenPrev(this$);
}

export function Sutil_DOM_NodeGroup__get_Name(_) {
    return _._name;
}

export function Sutil_DOM_NodeGroup__get_Id(_) {
    return _.id;
}

export function Sutil_DOM_NodeGroup__set_Id_Z721C83C5(_, id$0027) {
    _.id = id$0027;
}

export function Sutil_DOM_NodeGroup__get_Children(_) {
    return _._children;
}

export function Sutil_DOM_NodeGroup__SetDispose_3A5B6456(_, d) {
    _._dispose = d;
}

export function Sutil_DOM_NodeGroup__Dispose(_) {
    _._dispose();
}

function Sutil_DOM_NodeGroup__childDomNodes(this$) {
    return map_1((_arg1) => {
        if (_arg1.tag === 1) {
            return singleton_1(_arg1.fields[0]);
        }
        else {
            return empty();
        }
    }, this$._children);
}

function Sutil_DOM_NodeGroup__childStrs(this$) {
    return map_1((value) => toString(value), this$._children);
}

function Sutil_DOM_NodeGroup__assertIsChild_Z5119285D(this$, child) {
    if (!exists((c) => Sutil_DOM_SutilNode__IsSameNode_Z5119285D(c, child), this$._children)) {
        Sutil_DOM_log(toText(interpolate("Not a child: %P()", [child])));
        throw (new Error(toText(interpolate("Not a child: %P()", [child]))));
    }
}

function Sutil_DOM_NodeGroup__updateChildrenPrev(this$) {
    Sutil_DOM_log(toText(interpolate("updating children %P()", [Sutil_DOM_NodeGroup__childStrs(this$)])));
    let p = new Sutil_DOM_SutilNode(0);
    const enumerator = getEnumerator(this$._children);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const c = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (c.tag === 2) {
                Sutil_DOM_NodeGroup__set_PrevNode_Z5119285D(c.fields[0], p);
            }
            p = c;
        }
    }
    finally {
        enumerator.Dispose();
    }
}

function Sutil_DOM_NodeGroup__parentDomNode(this$) {
    const findParent = (p_mut) => {
        findParent:
        while (true) {
            const p = p_mut;
            switch (p.tag) {
                case 1: {
                    return p.fields[0];
                }
                case 2: {
                    p_mut = Sutil_DOM_NodeGroup__get_Parent(p.fields[0]);
                    continue findParent;
                }
                default: {
                    return null;
                }
            }
            break;
        }
    };
    return findParent(this$._parent);
}

export class Sutil_DOM_DomAction extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Append", "Replace"];
    }
}

export function Sutil_DOM_DomAction$reflection() {
    return union_type("Sutil.DOM.DomAction", [], Sutil_DOM_DomAction, () => [[], [["Item1", Sutil_DOM_SutilNode$reflection()], ["Item2", class_type("Browser.Types.Node")]]]);
}

export class Sutil_DOM_BuildContext extends Record {
    constructor(Document$, Parent, Previous, Action, MakeName, Debug, StyleSheet) {
        super();
        this.Document = Document$;
        this.Parent = Parent;
        this.Previous = Previous;
        this.Action = Action;
        this.MakeName = MakeName;
        this.Debug = Debug;
        this.StyleSheet = StyleSheet;
    }
}

export function Sutil_DOM_BuildContext$reflection() {
    return record_type("Sutil.DOM.BuildContext", [], Sutil_DOM_BuildContext, () => [["Document", class_type("Browser.Types.Document")], ["Parent", Sutil_DOM_SutilNode$reflection()], ["Previous", Sutil_DOM_SutilNode$reflection()], ["Action", Sutil_DOM_DomAction$reflection()], ["MakeName", lambda_type(string_type, string_type)], ["Debug", bool_type], ["StyleSheet", option_type(Sutil_DOM_NamedStyleSheet$reflection())]]);
}

export function Sutil_DOM_BuildContext__get_ParentElement(this$) {
    return Sutil_DOM_SutilNode__get_AsDomNode(this$.Parent);
}

export function Sutil_DOM_BuildContext__get_ParentNode(this$) {
    return Sutil_DOM_SutilNode__get_AsDomNode(this$.Parent);
}

export function Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, node) {
    const matchValue = ctx.Action;
    if (matchValue.tag === 1) {
        const insertBefore = matchValue.fields[1];
        const existing = matchValue.fields[0];
        Sutil_DOM_log(toText(interpolate("ctx.Replace \u0027%P()\u0027 with \u0027%P()\u0027 before \u0027%P()\u0027", [existing, node, Sutil_DOM_nodeStrShort(insertBefore)])));
        Sutil_DOM_SutilNode__ReplaceGroup_Z22EF991E(ctx.Parent, node, existing, insertBefore);
    }
    else {
        Sutil_DOM_log(toText(interpolate("ctx.Append \u0027%P()\u0027 to \u0027%P()\u0027 after %P()", [node, ctx.Parent, ctx.Previous])));
        Sutil_DOM_SutilNode__InsertAfter_25271BA0(ctx.Parent, node, ctx.Previous);
    }
}

export class Sutil_DOM_SutilElement extends Record {
    constructor(Builder) {
        super();
        this.Builder = Builder;
    }
}

export function Sutil_DOM_SutilElement$reflection() {
    return record_type("Sutil.DOM.SutilElement", [], Sutil_DOM_SutilElement, () => [["Builder", lambda_type(Sutil_DOM_BuildContext$reflection(), Sutil_DOM_SutilNode$reflection())]]);
}

export function Sutil_DOM_nodeFactory(f) {
    return new Sutil_DOM_SutilElement(f);
}

function Sutil_DOM_makeContext(parent) {
    const gen = Sutil_Helpers_makeIdGenerator();
    return new Sutil_DOM_BuildContext(parent.ownerDocument, new Sutil_DOM_SutilNode(1, parent), new Sutil_DOM_SutilNode(0), new Sutil_DOM_DomAction(0), (baseName) => {
        const arg20 = gen() | 0;
        return toText(printf("%s-%d"))(baseName)(arg20);
    }, false, void 0);
}

export function Sutil_DOM_ContextHelpers_withStyleSheet(sheet, ctx) {
    return new Sutil_DOM_BuildContext(ctx.Document, ctx.Parent, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Debug, sheet);
}

export function Sutil_DOM_ContextHelpers_withDebug(ctx) {
    return new Sutil_DOM_BuildContext(ctx.Document, ctx.Parent, ctx.Previous, ctx.Action, ctx.MakeName, true, ctx.StyleSheet);
}

export function Sutil_DOM_ContextHelpers_withParent(parent, ctx) {
    return new Sutil_DOM_BuildContext(ctx.Document, parent, ctx.Previous, new Sutil_DOM_DomAction(0), ctx.MakeName, ctx.Debug, ctx.StyleSheet);
}

export function Sutil_DOM_ContextHelpers_withPrevious(prev, ctx) {
    return new Sutil_DOM_BuildContext(ctx.Document, ctx.Parent, prev, ctx.Action, ctx.MakeName, ctx.Debug, ctx.StyleSheet);
}

export function Sutil_DOM_ContextHelpers_withParentNode(parent, ctx) {
    return Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, parent), ctx);
}

export function Sutil_DOM_ContextHelpers_withReplace(toReplace, before, ctx) {
    return new Sutil_DOM_BuildContext(ctx.Document, ctx.Parent, ctx.Previous, new Sutil_DOM_DomAction(1, toReplace, before), ctx.MakeName, ctx.Debug, ctx.StyleSheet);
}

export function Sutil_DOM_domResult(node) {
    return new Sutil_DOM_SutilNode(1, node);
}

export function Sutil_DOM_sutilResult(node) {
    return node;
}

export function Sutil_DOM_unitResult(ctx, name) {
    let tn, d;
    if (ctx.Debug) {
        return new Sutil_DOM_SutilNode(1, (tn = ctx.Document.createTextNode(name), (d = ctx.Document.createElement("div"), (Sutil_DOM_DomEdit_appendChild(d, tn), (Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, new Sutil_DOM_SutilNode(1, d)), d)))));
    }
    else {
        return new Sutil_DOM_SutilNode(0);
    }
}

export function Sutil_DOM_errorNode(parent, message) {
    const doc = Sutil_DOM_SutilNode__get_Document(parent);
    const d = doc.createElement("div");
    Sutil_DOM_DomEdit_appendChild(d, doc.createTextNode(toText(interpolate("sutil-error: %P()", [message]))));
    Sutil_DOM_SutilNode__AppendChild_171AE942(parent, d);
    d.setAttribute("style", "color: red; padding: 4px; font-size: 10px;");
    return d;
}

export function Sutil_DOM_collectFragment(result) {
    return result;
}

export function Sutil_DOM_appendAttribute(e, attrName, attrValue) {
    if (attrValue !== "") {
        const currentValue = e.getAttribute(attrName);
        e.setAttribute(attrName, ((currentValue == null) ? true : (currentValue === "")) ? attrValue : toText(printf("%s %s"))(currentValue)(attrValue));
    }
}

export function Sutil_DOM_parseSelector(source) {
    const parseSingle = (token) => {
        if (token.indexOf(".") === 0) {
            return new Sutil_DOM_CssRules_CssSelector(1, substring(token, 1));
        }
        else if (token.indexOf("#") === 0) {
            return new Sutil_DOM_CssRules_CssSelector(2, substring(token, 1));
        }
        else if (((token.indexOf(":") >= 0) ? true : (token.indexOf("\u003e") >= 0)) ? true : (token.indexOf("[") >= 0)) {
            return new Sutil_DOM_CssRules_CssSelector(6);
        }
        else {
            return new Sutil_DOM_CssRules_CssSelector(0, token.toLocaleUpperCase());
        }
    };
    const parseAttr = (token_1) => {
        if ((token_1.indexOf("[") >= 0) ? endsWith(token_1, "]") : false) {
            const i = token_1.indexOf("[") | 0;
            const single = parseSingle(substring(token_1, 0, i).trim());
            const attrTokens = split(substring(token_1, i + 1, (token_1.length - i) - 2), ["="], 2);
            if (attrTokens.length === 2) {
                return new Sutil_DOM_CssRules_CssSelector(5, single, attrTokens[0].trim(), trim(attrTokens[1].trim(), "\u0027", "\""));
            }
            else {
                return new Sutil_DOM_CssRules_CssSelector(6);
            }
        }
        else {
            return parseSingle(token_1);
        }
    };
    const parseAll = (token_2) => {
        const spacedItems = split(token_2, [" "], null, 1);
        if (spacedItems.length === 1) {
            return parseAttr(spacedItems[0]);
        }
        else {
            return new Sutil_DOM_CssRules_CssSelector(4, ofArray(map_2(parseAttr, spacedItems)));
        }
    };
    const items = source.split(",");
    if (items.length === 1) {
        return parseAll(items[0]);
    }
    else {
        return new Sutil_DOM_CssRules_CssSelector(3, ofArray(map_2(parseAll, items)));
    }
}

export function Sutil_DOM_ruleMatchEl(el, rule) {
    return Sutil_DOM_CssRules_CssSelector__Match_4C3D2741(rule.Selector, el);
}

export function Sutil_DOM_rootStyle(sheet_mut) {
    Sutil_DOM_rootStyle:
    while (true) {
        const sheet = sheet_mut;
        const matchValue = sheet.Parent;
        if (matchValue != null) {
            sheet_mut = matchValue;
            continue Sutil_DOM_rootStyle;
        }
        else {
            return sheet;
        }
        break;
    }
}

export function Sutil_DOM_rootStyleName(sheet) {
    return Sutil_DOM_rootStyle(sheet).Name;
}

export function Sutil_DOM_getSutilClasses(e) {
    return filter((cls) => (cls.indexOf("sutil") === 0), map_1((i) => (e.classList[i]), toList(rangeDouble(0, 1, e.classList.length - 1))));
}

export function Sutil_DOM_applyCustomRules(namedSheet, e) {
    const enumerator = getEnumerator(filter((rule) => Sutil_DOM_ruleMatchEl(e, rule), namedSheet.StyleSheet));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const enumerator_1 = getEnumerator(filter((tupledArg) => (tupledArg[0].indexOf("sutil") === 0), enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().Style));
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const custom = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (custom[0] === "sutil-use-global") {
                        const root = Sutil_DOM_rootStyle(namedSheet);
                        if (root.Name !== namedSheet.Name) {
                            e.classList.add(root.Name);
                            Sutil_DOM_applyCustomRules(root, e);
                        }
                    }
                    else if (custom[0] === "sutil-use-parent") {
                    }
                    else if (custom[0] === "sutil-add-class") {
                        e.classList.add(toString(custom[1]));
                    }
                    else {
                        Sutil_DOM_log(toText(interpolate("Unimplemented: %P()", [custom[0]])));
                    }
                }
            }
            finally {
                enumerator_1.Dispose();
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sutil_DOM_build(f, ctx) {
    const result = f.Builder(ctx);
    iterate((n) => {
        Sutil_DOM_dispatchSimple(n, Sutil_DOM_Event_Mount);
    }, Sutil_DOM_SutilNode__collectDomNodes(result));
    return result;
}

export function Sutil_DOM_asDomNode(element, ctx) {
    const matchValue = Sutil_DOM_SutilNode__collectDomNodes(element);
    if (isEmpty(matchValue)) {
        return Sutil_DOM_errorNode(ctx.Parent, toText(interpolate("Error: Empty node from %P() #%P()", [element, Sutil_DOM_SutilNode__get_Id(element)])));
    }
    else if (isEmpty(tail(matchValue))) {
        return head(matchValue);
    }
    else {
        const tmpDiv = ctx.Document.createElement("div");
        Sutil_DOM_DomEdit_appendChild(tmpDiv, Sutil_DOM_errorNode(new Sutil_DOM_SutilNode(1, tmpDiv), "\u0027fragment\u0027 not allowed as root for \u0027each\u0027 blocks"));
        Sutil_DOM_SutilNode__AppendChild_171AE942(ctx.Parent, tmpDiv);
        iterate((x) => {
            Sutil_DOM_DomEdit_appendChild(tmpDiv, x);
        }, matchValue);
        return tmpDiv;
    }
}

export function Sutil_DOM_asDomElement(element, ctx) {
    const node = Sutil_DOM_asDomNode(element, ctx);
    if (Sutil_DOM_isElementNode(node)) {
        return node;
    }
    else {
        const span = ctx.Document.createElement("span");
        Sutil_DOM_DomEdit_appendChild(span, node);
        Sutil_DOM_SutilNode__AppendChild_171AE942(ctx.Parent, span);
        return span;
    }
}

export function Sutil_DOM_findSvIdElement(doc, id) {
    return doc.querySelector(toText(interpolate("[_svid=\u0027%P()\u0027]", [id])));
}

export function Sutil_DOM_splitBySpace(s) {
    return split(s, [" "], null, 1);
}

export function Sutil_DOM_addToClasslist(classes, e) {
    e.classList.add(...Sutil_DOM_splitBySpace(classes));
}

export function Sutil_DOM_removeFromClasslist(classes, e) {
    e.classList.remove(...Sutil_DOM_splitBySpace(classes));
}

export function Sutil_DOM_setAttribute(el, name, value) {
    const svalue = toString(value);
    if (name === "class") {
        Sutil_DOM_addToClasslist(svalue, el);
    }
    else if (name === "class-") {
        Sutil_DOM_removeFromClasslist(svalue, el);
    }
    else if ((svalue === "false") ? (((name === "disabled") ? true : (name === "readonly")) ? true : (name === "required")) : false) {
        el.removeAttribute(name);
    }
    else if (name === "value") {
        el["__value"] = value;
        el["value"] = svalue;
    }
    else {
        el.setAttribute(name, svalue);
    }
}

export function Sutil_DOM_attr(name, value) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let arg40, arg30;
        const parent = Sutil_DOM_SutilNode__get_AsDomNode(ctx.Parent);
        try {
            const e = parent;
            Sutil_DOM_setAttribute(e, name, value);
            const matchValue = ctx.StyleSheet;
            if (matchValue == null) {
            }
            else {
                Sutil_DOM_applyCustomRules(matchValue, e);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, toText(printf("Cannot set attribute %s on a %A %f %s"))(name)(parent)(arg30)(arg40)))));
        }
        return Sutil_DOM_unitResult(ctx, "attr");
    });
}

export const Sutil_DOM_idSelector = (() => {
    const clo1 = toText(printf("#%s"));
    return (arg10) => clo1(arg10);
})();

export const Sutil_DOM_classSelector = (() => {
    const clo1 = toText(printf(".%s"));
    return (arg10) => clo1(arg10);
})();

export function Sutil_DOM_findElement(doc, selector) {
    return doc.querySelector(selector);
}

export function Sutil_DOM_visitChildren(parent, f) {
    let child = parent.firstChild;
    while (!(child == null)) {
        if (f(child)) {
            Sutil_DOM_visitChildren(child, f);
            child = child.nextSibling;
        }
        else {
            child = null;
        }
    }
}

export function Sutil_DOM_findNode(parent, f) {
    let x;
    let child = parent.firstChild;
    let result = void 0;
    while (!(child == null)) {
        result = f(child);
        if (result == null) {
            result = Sutil_DOM_findNode(child, f);
        }
        child = ((result != null) ? ((x = value_2(result), null)) : child.nextSibling);
    }
    return result;
}

export function Sutil_DOM_prevSibling(node) {
    if (equals(node, null)) {
        return null;
    }
    else {
        return node.previousSibling;
    }
}

export function Sutil_DOM_lastSibling(node_mut) {
    Sutil_DOM_lastSibling:
    while (true) {
        const node = node_mut;
        if ((node == null) ? true : (node.nextSibling == null)) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            continue Sutil_DOM_lastSibling;
        }
        break;
    }
}

export function Sutil_DOM_lastChild(node) {
    return Sutil_DOM_lastSibling(node.firstChild);
}

export function Sutil_DOM_firstSiblingWhere(node_mut, condition_mut) {
    Sutil_DOM_firstSiblingWhere:
    while (true) {
        const node = node_mut, condition = condition_mut;
        if (node == null) {
            return null;
        }
        else if (condition(node)) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            condition_mut = condition;
            continue Sutil_DOM_firstSiblingWhere;
        }
        break;
    }
}

export function Sutil_DOM_firstChildWhere(node, condition) {
    return Sutil_DOM_firstSiblingWhere(node.firstChild, condition);
}

export function Sutil_DOM_lastSiblingWhere(node_mut, condition_mut) {
    Sutil_DOM_lastSiblingWhere:
    while (true) {
        const node = node_mut, condition = condition_mut;
        if (node == null) {
            return null;
        }
        else if (condition(node) ? ((node.nextSibling == null) ? true : (!condition(node.nextSibling))) : false) {
            return node;
        }
        else {
            node_mut = node.nextSibling;
            condition_mut = condition;
            continue Sutil_DOM_lastSiblingWhere;
        }
        break;
    }
}

export function Sutil_DOM_lastChildWhere(node, condition) {
    return Sutil_DOM_lastSiblingWhere(node.firstChild, condition);
}

export function Sutil_DOM_visitElementChildren(parent, f) {
    Sutil_DOM_visitChildren(parent, (child) => {
        if (child.nodeType === 1) {
            f(child);
        }
        return true;
    });
}

export function Sutil_DOM_disposeOnUnmount(ds) {
    return Sutil_DOM_nodeFactory((ctx) => {
        iterate((d) => {
            Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, d);
        }, ds);
        return Sutil_DOM_unitResult(ctx, "disposeOnUnmount");
    });
}

export function Sutil_DOM_unsubscribeOnUnmount(ds) {
    return Sutil_DOM_nodeFactory((ctx) => {
        iterate((d) => {
            Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, d);
        }, ds);
        return Sutil_DOM_unitResult(ctx, "unsubscribeOnUnmount");
    });
}

function Sutil_DOM_updateCustom(el, name, property, value) {
    const r = Sutil_DOM_NodeKey_getCreate(el, name, () => ({}));
    r[property] = value;
    el[name] = r;
}

export function Sutil_DOM_exclusive(f) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_log(toText(interpolate("exclusive %P()", [ctx.Parent])));
        Sutil_DOM_SutilNode__Clear(ctx.Parent);
        return Sutil_DOM_build(f, ctx);
    });
}

export function Sutil_DOM_hookContext(hook) {
    return Sutil_DOM_nodeFactory((ctx) => {
        hook(ctx);
        return Sutil_DOM_unitResult(ctx, "hookContext");
    });
}

export function Sutil_DOM_hookParent(hook) {
    return Sutil_DOM_nodeFactory((ctx) => {
        hook(Sutil_DOM_SutilNode__get_AsDomNode(ctx.Parent));
        return Sutil_DOM_unitResult(ctx, "hookParent");
    });
}

export function Sutil_DOM_addTransform(node, a) {
    let arg30, arg20;
    const b = node.getBoundingClientRect();
    if ((a.left !== b.left) ? true : (a.top !== b.top)) {
        const s = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
        const transform = (s.transform === "none") ? "" : s.transform;
        (node.style).transform = ((arg30 = (a.top - b.top), (arg20 = (a.left - b.left), toText(printf("%s translate(%fpx, %fpx)"))(transform)(arg20)(arg30))));
        Sutil_DOM_log((node.style).transform);
    }
}

export function Sutil_DOM_fixPosition(node) {
    const s = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
    if ((s.position !== "absolute") ? (s.position !== "fixed") : false) {
        Sutil_DOM_log(toText(interpolate("fixPosition %P()", [Sutil_DOM_nodeStr(node)])));
        const width = s.width;
        const height = s.height;
        const a = node.getBoundingClientRect();
        (node.style).position = "absolute";
        (node.style).width = width;
        (node.style).height = height;
        Sutil_DOM_addTransform(node, a);
    }
}

export function Sutil_DOM_buildChildren(xs, ctx) {
    const e = ctx.Parent;
    let prev = new Sutil_DOM_SutilNode(0);
    const enumerator = getEnumerator(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const matchValue = Sutil_DOM_build(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), Sutil_DOM_ContextHelpers_withPrevious(prev, ctx));
            if (matchValue.tag === 0) {
            }
            else {
                prev = matchValue;
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
    const matchValue_1 = ctx.StyleSheet;
    if (matchValue_1 == null) {
    }
    else {
        const namedSheet = matchValue_1;
        Sutil_DOM_SutilNode__AddClass_Z721C83C5(e, namedSheet.Name);
        Sutil_DOM_applyIfElement((e_1) => {
            Sutil_DOM_applyCustomRules(namedSheet, e_1);
        }, Sutil_DOM_SutilNode__get_AsDomNode(e));
    }
}

export function Sutil_DOM_fragment(elements) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const v = Sutil_DOM_NodeGroup_$ctor_Z2A697365("fragment", ctx.Parent, ctx.Previous);
        const fragmentNode = new Sutil_DOM_SutilNode(2, v);
        const oldId = Sutil_DOM_NodeGroup__get_Id(v);
        Sutil_DOM_log(toText(interpolate("fragment action=\u0027%P()\u0027 #", [ctx.Action])) + Sutil_DOM_NodeGroup__get_Id(v));
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, fragmentNode);
        Sutil_DOM_log((((toText(interpolate("fragment now #", [])) + Sutil_DOM_NodeGroup__get_Id(v)) + " (was #") + oldId) + toText(interpolate("). Parent=%P() Prev=%P()", [Sutil_DOM_NodeGroup__get_Parent(v), Sutil_DOM_NodeGroup__get_PrevNode(v)])));
        Sutil_DOM_buildChildren(elements, new Sutil_DOM_BuildContext(ctx.Document, fragmentNode, ctx.Previous, new Sutil_DOM_DomAction(0), ctx.MakeName, ctx.Debug, ctx.StyleSheet));
        return Sutil_DOM_sutilResult(fragmentNode);
    });
}

export function Sutil_DOM_wait(el, andThen) {
    const key = Sutil_DOM_NodeKey_Promise;
    const run = () => {
        const value = andThen();
        el[key] = value;
    };
    if (el.hasOwnProperty(key)) {
        const p = el[key];
        delete el[key];
        void p.then(run);
    }
    else {
        run();
    }
}

export function Sutil_DOM_mountOn(app, host) {
    return Sutil_DOM_build(app, Sutil_DOM_makeContext(host));
}

export function Sutil_DOM_computedStyleOpacity(e) {
    let arg10;
    try {
        return parse(Sutil_Interop_Window_getComputedStyle_Z5966C024(e).opacity);
    }
    catch (matchValue) {
        Sutil_DOM_log((arg10 = Sutil_Interop_Window_getComputedStyle_Z5966C024(e).opacity, toText(printf("parse error: \u0027%A\u0027"))(arg10)));
        return 1;
    }
}

export function Sutil_DOM_computedStyleTransform(node) {
    const style = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
    if (style.transform === "none") {
        return "";
    }
    else {
        return style.transform;
    }
}

export function Sutil_DOM_declareResource(init, f) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const r = init();
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, r);
        f(r);
        return Sutil_DOM_unitResult(ctx, "declareResource");
    });
}

export function Sutil_DOM_elns(ns, tag, xs) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const e = (ns === "") ? ctx.Document.createElement(tag) : ctx.Document.createElementNS(ns, tag);
        const id = Sutil_DOM_domId() | 0;
        Sutil_DOM_log(toText(interpolate("create \u003c%P()\u003e #%P()", [tag, id])));
        Sutil_DOM_setSvId(e, id);
        Sutil_DOM_buildChildren(xs, Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, e), ctx));
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, new Sutil_DOM_SutilNode(1, e));
        Sutil_DOM_dispatchSimple(e, Sutil_DOM_Event_ElementReady);
        return Sutil_DOM_domResult(e);
    });
}

export function Sutil_DOM_el(tag, xs) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const e = ctx.Document.createElement(tag);
        const id = Sutil_DOM_domId() | 0;
        Sutil_DOM_log((("create \u003c" + tag) + "\u003e #") + int32ToString(id));
        Sutil_DOM_setSvId(e, id);
        Sutil_DOM_buildChildren(xs, Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, e), ctx));
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, new Sutil_DOM_SutilNode(1, e));
        Sutil_DOM_dispatchSimple(e, Sutil_DOM_Event_ElementReady);
        return Sutil_DOM_domResult(e);
    });
}

export function Sutil_DOM_inject(elements, element) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const e = Sutil_DOM_build(element, ctx);
        iterate((n) => {
            const value = Sutil_DOM_buildChildren(elements, Sutil_DOM_ContextHelpers_withParent(new Sutil_DOM_SutilNode(1, n), ctx));
        }, Sutil_DOM_SutilNode__collectDomNodes(e));
        return e;
    });
}

export function Sutil_DOM_setValue(key, value) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_BuildContext__get_ParentNode(ctx)[key] = value;
        return Sutil_DOM_unitResult(ctx, "setValue");
    });
}

export function Sutil_DOM_textNode(doc, value) {
    const id = Sutil_DOM_domId() | 0;
    Sutil_DOM_log(toText(interpolate("create \"%P()\" #%P()", [value, id])));
    const n = doc.createTextNode(value);
    Sutil_DOM_setSvId(n, id);
    return n;
}

export function Sutil_DOM_text(value) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const tn = Sutil_DOM_textNode(ctx.Document, value);
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, new Sutil_DOM_SutilNode(1, tn));
        return Sutil_DOM_domResult(tn);
    });
}

export function Sutil_DOM_html(text) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_applyIfElement((el) => {
            el.innerHTML = text;
            const matchValue = ctx.StyleSheet;
            if (matchValue != null) {
                const ns = matchValue;
                Sutil_DOM_visitElementChildren(el, (ch) => {
                    ch.classList.add(ns.Name);
                    Sutil_DOM_applyCustomRules(ns, ch);
                });
            }
        }, Sutil_DOM_SutilNode__get_AsDomNode(ctx.Parent));
        return Sutil_DOM_sutilResult(ctx.Parent);
    });
}


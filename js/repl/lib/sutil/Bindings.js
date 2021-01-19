import { Sveltish_Logging_error, Sveltish_Logging_log } from "./Logging.js";
import { Sveltish_Helpers_unsubify, Sveltish_Helpers_makeIdGenerator } from "./Helpers.js";
import { Sveltish_DOM_removeNode, Sveltish_DOM_fixPosition, Sveltish_DOM_svId, Sveltish_DOM_buildSolitaryElement, Sveltish_DOM_withAfter, Sveltish_DOM_rectStr, Sveltish_DOM_lastChildWhere, Sveltish_DOM_clientRect, Sveltish_DOM_isElementNode, Sveltish_DOM_findNodeWithSvId, Sveltish_DOM_asEl, Sveltish_DOM_getResizer, Sveltish_DOM_ResizeObserver__Subscribe_3A5B6456, Sveltish_DOM_registerUnsubscribe, Sveltish_DOM_removeFromClasslist, Sveltish_DOM_BuildContext__get_ParentElement, Sveltish_DOM_addToClasslist, Sveltish_DOM_listen, Sveltish_DOM_documentOf, Sveltish_DOM_Event_ElementReady, Sveltish_DOM_once, Sveltish_DOM_NodeRef, Sveltish_DOM_bindResult, Sveltish_DOM_withReplace, Sveltish_DOM_buildSolitary, Sveltish_DOM_nodeStr, Sveltish_DOM_unitResult, Sveltish_DOM_registerDisposable } from "./DOM.js";
import { subscribe } from "../../fable-library/Observable.js";
import { identityHash, stringHash, safeHash, structuralHash, equals, uncurry, partialApply } from "../../fable-library/Util.js";
import { Sveltish_Store_make, Sveltish_Store_modify, Sveltish_Store_get, Sveltish_Store_set, Sveltish_Store_subscribe2, Sveltish_Store_subscribe } from "./Store.js";
import { isNullOrEmpty, interpolate, toText } from "../../fable-library/String.js";
import { Sveltish_ObservablePromise_ObservablePromise$1__Run_56E03C9D, Sveltish_ObservablePromise_ObservablePromise$1_$ctor } from "./Promise.js";
import { rangeNumber, getEnumerator } from "../../fable-library/Seq.js";
import { exists, singleton, tryFind, mapIndexed, length, empty, filter, map, contains, ofSeq } from "../../fable-library/List.js";
import { Record, toString } from "../../fable-library/Types.js";
import { record_type, int32_type, class_type } from "../../fable-library/Reflection.js";
import { Sveltish_Transition_TransitionProp, Sveltish_Transition_transitionNode, Sveltish_Transition_animateNode, Sveltish_Transition_clearAnimations } from "./Transition.js";
import { Sveltish_ObservableX_distinctUntilChanged } from "./ObservableX.js";

export function Sveltish_Bindings_log(s) {
    Sveltish_Logging_log("bind", s);
}

export const Sveltish_Bindings_bindId = Sveltish_Helpers_makeIdGenerator();

export function Sveltish_Bindings_bindSub(source, handler, ctx) {
    Sveltish_DOM_registerDisposable(ctx.Parent, subscribe(partialApply(1, handler, [ctx]), source));
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bind(store, element, ctx) {
    let node = null;
    Sveltish_DOM_registerDisposable(ctx.Parent, Sveltish_Store_subscribe(store, (next) => {
        try {
            node = Sveltish_DOM_buildSolitary(partialApply(1, element, [next]), (node == null) ? ctx : Sveltish_DOM_withReplace(node, ctx));
        }
        catch (x) {
            Sveltish_Logging_error(toText(interpolate("Exception in bind: %P() parent %P() node %P() node.Parent ", [x.message, Sveltish_DOM_nodeStr(ctx.Parent), Sveltish_DOM_nodeStr(node)])));
        }
    }));
    return Sveltish_DOM_bindResult(new Sveltish_DOM_NodeRef(0, node));
}

export function Sveltish_Bindings_bindPromiseStore(p, waiting, result, fail) {
    return (ctx) => Sveltish_Bindings_bind(p, uncurry(2, (_arg1) => ((_arg1.tag === 1) ? partialApply(1, result, [_arg1.fields[0]]) : ((_arg1.tag === 2) ? partialApply(1, fail, [_arg1.fields[0]]) : waiting))), ctx);
}

export function Sveltish_Bindings_bindPromise(p, waiting, result, fail) {
    const x = Sveltish_ObservablePromise_ObservablePromise$1_$ctor();
    Sveltish_ObservablePromise_ObservablePromise$1__Run_56E03C9D(x, p);
    return Sveltish_Bindings_bindPromiseStore(x, waiting, result, fail);
}

export function Sveltish_Bindings_bind2(a, b, element, ctx) {
    let node = null;
    Sveltish_DOM_registerDisposable(ctx.Parent, Sveltish_Store_subscribe2(a, b, (next) => {
        try {
            node = Sveltish_DOM_buildSolitary(partialApply(1, element, [next]), Sveltish_DOM_withReplace(node, ctx));
        }
        catch (x) {
            Sveltish_Logging_error(toText(interpolate("Exception in bind: %P()", [x.message])));
        }
    }));
    return Sveltish_DOM_bindResult(new Sveltish_DOM_NodeRef(0, node));
}

export function Sveltish_Bindings_getInputChecked(el) {
    return el["checked"];
}

export function Sveltish_Bindings_setInputChecked(el, v) {
    el["checked"] = v;
}

export function Sveltish_Bindings_getInputValue(el) {
    return el["value"];
}

export function Sveltish_Bindings_setInputValue(el, v) {
    el["value"] = v;
}

export function Sveltish_Bindings_bindSelect(store, ctx) {
    const select = ctx.Parent;
    const opValue = (op_1) => (op_1["__value"]);
    const updateSelected = (v) => {
        const enumerator = getEnumerator(ofSeq(rangeNumber(0, 1, select.options.length - 1)));
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const i_1 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]() | 0;
                const o = select.options[i_1];
                o.selected = equals(v, opValue(o));
            }
        }
        finally {
            enumerator.Dispose();
        }
    };
    const unsubInput = select.addEventListener("input", (_arg1) => {
        let selOps;
        Sveltish_Store_set(store, (selOps = select.selectedOptions, opValue(selOps[0])));
    });
    let unsubOneShot;
    const clo3 = Sveltish_DOM_once(Sveltish_DOM_Event_ElementReady, select, (_arg2) => {
        updateSelected(Sveltish_Store_get(store));
    });
    unsubOneShot = (() => {
        clo3();
    });
    const unsub = Sveltish_Store_subscribe(store, updateSelected);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindSelectMultiple(store, ctx) {
    const select = ctx.Parent;
    const opValue = (op_1) => (op_1["__value"]);
    const updateSelected = (v) => {
        const enumerator = getEnumerator(ofSeq(rangeNumber(0, 1, select.options.length - 1)));
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const i_2 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]() | 0;
                const o = select.options[i_2];
                o.selected = contains(opValue(o), v, {
                    Equals: equals,
                    GetHashCode: structuralHash,
                });
            }
        }
        finally {
            enumerator.Dispose();
        }
    };
    const unsubInput = select.addEventListener("input", (_arg1) => {
        let selOps;
        Sveltish_Store_set(store, (selOps = select.selectedOptions, map((i_1) => opValue(selOps[i_1]), ofSeq(rangeNumber(0, 1, selOps.length - 1)))));
    });
    let unsubOneShot;
    const clo3 = Sveltish_DOM_once(Sveltish_DOM_Event_ElementReady, select, (_arg2) => {
        updateSelected(Sveltish_Store_get(store));
    });
    unsubOneShot = (() => {
        clo3();
    });
    const unsub = Sveltish_Store_subscribe(store, updateSelected);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_isNullString(obj) {
    if (obj == null) {
        return true;
    }
    else {
        return isNullOrEmpty(obj);
    }
}

export function Sveltish_Bindings_getId(s) {
    return safeHash(s);
}

export function Sveltish_Bindings_bindGroup(store, ctx) {
    const parent = ctx.Parent;
    let name;
    const matchValue = parent["name"];
    name = (Sveltish_Bindings_isNullString(matchValue) ? toText(interpolate("store-%P()", [Sveltish_Bindings_getId(store)])) : matchValue);
    parent["name"] = name;
    const updateChecked = (v) => {
        Sveltish_Bindings_setInputChecked(parent, contains(Sveltish_Bindings_getInputValue(parent), v, {
            Equals: (x, y) => (x === y),
            GetHashCode: stringHash,
        }));
    };
    const unsubInput = parent.addEventListener("input", (_arg1) => {
        let inputs;
        Sveltish_Store_set(store, (inputs = Sveltish_DOM_documentOf(parent).querySelectorAll(toText(interpolate("input[name=\"%P()\"]", [name]))), map(Sveltish_Bindings_getInputValue, filter(Sveltish_Bindings_getInputChecked, map((i) => (inputs[i]), ofSeq(rangeNumber(0, 1, inputs.length - 1)))))));
    });
    let unsubOneShot;
    const clo3 = Sveltish_DOM_once(Sveltish_DOM_Event_ElementReady, parent, (_arg2) => {
        updateChecked(Sveltish_Store_get(store));
    });
    unsubOneShot = (() => {
        clo3();
    });
    const unsub = Sveltish_Store_subscribe(store, updateChecked);
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindRadioGroup(store, ctx) {
    const parent = ctx.Parent;
    let name;
    const matchValue = parent["name"];
    name = (Sveltish_Bindings_isNullString(matchValue) ? toText(interpolate("store-%P()", [Sveltish_Bindings_getId(store)])) : matchValue);
    parent["name"] = name;
    const updateChecked = (v) => {
        Sveltish_Bindings_setInputChecked(parent, toString(v) === Sveltish_Bindings_getInputValue(parent));
    };
    let inputUnsub;
    const clo3 = Sveltish_DOM_listen("input", parent, (_arg1) => {
        Sveltish_Store_set(store, parent["value"]);
    });
    inputUnsub = (() => {
        clo3();
    });
    let oneShotUnsub;
    const clo3_1 = Sveltish_DOM_once(Sveltish_DOM_Event_ElementReady, parent, (_arg2) => {
        updateChecked(Sveltish_Store_get(store));
    });
    oneShotUnsub = (() => {
        clo3_1();
    });
    const unsub = Sveltish_Store_subscribe(store, (arg00_1) => {
        updateChecked(arg00_1);
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindClass(toggle, classes) {
    return (ctx) => Sveltish_Bindings_bindSub(toggle, (ctx_1, active) => {
        if (active) {
            Sveltish_DOM_addToClasslist(Sveltish_DOM_BuildContext__get_ParentElement(ctx_1), classes);
        }
        else {
            Sveltish_DOM_removeFromClasslist(Sveltish_DOM_BuildContext__get_ParentElement(ctx_1), classes);
        }
    }, ctx);
}

export function Sveltish_Bindings_bindAttrIn(attrName, store, ctx) {
    const unsub = Sveltish_Store_subscribe(store, (value) => {
        ctx.Parent[attrName] = value;
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_attrNotify(attrName, v, onchange, ctx) {
    const parent = ctx.Parent;
    let unsub;
    const clo3 = Sveltish_DOM_listen("input", parent, (_arg1) => {
        onchange(parent[attrName]);
    });
    unsub = (() => {
        clo3();
    });
    parent[attrName] = v;
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindAttrNotify(attrName, store, onchange, ctx) {
    const parent = ctx.Parent;
    parent.addEventListener("input", (_arg1) => {
        onchange(parent[attrName]);
    });
    const unsub = Sveltish_Store_subscribe(store, (value) => {
        parent[attrName] = value;
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindAttrListen(attrName, store, event, handler, ctx) {
    const parent = ctx.Parent;
    let unsubA;
    const clo3 = Sveltish_DOM_listen(event, parent, handler);
    unsubA = (() => {
        clo3();
    });
    const unsubB = Sveltish_Store_subscribe(store, (value) => {
        parent[attrName] = value;
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_bindAttrConvert(attrName, store, convert, ctx) {
    const parent = ctx.Parent;
    parent.addEventListener("input", (_arg1) => {
        Sveltish_Store_set(store, convert(parent[attrName]));
    });
    const unsub = Sveltish_Store_subscribe(store, (value) => {
        parent[attrName] = value;
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_convertObj(v) {
    return v;
}

export function Sveltish_Bindings_bindAttr(attrName, store) {
    return (ctx) => Sveltish_Bindings_bindAttrConvert(attrName, store, Sveltish_Bindings_convertObj, ctx);
}

export function Sveltish_Bindings_bindAttrOut(attrName, store, ctx) {
    const parent = ctx.Parent;
    let unsub;
    const clo3 = Sveltish_DOM_listen("input", parent, (_arg1) => {
        Sveltish_Store_set(store, Sveltish_Bindings_convertObj(parent[attrName]));
    });
    unsub = (() => {
        clo3();
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Bindings_attrIsSizeRelated(attrName) {
    const upr = attrName.toLocaleUpperCase();
    if (upr.indexOf("WIDTH") >= 0) {
        return true;
    }
    else {
        return upr.indexOf("HEIGHT") >= 0;
    }
}

export function Sveltish_Bindings_bindPropOut(attrName, store, ctx) {
    let d, clo3;
    const parent = ctx.Parent;
    const notify = () => {
        Sveltish_Store_set(store, Sveltish_Bindings_convertObj(parent[attrName]));
    };
    Sveltish_DOM_registerUnsubscribe(parent, Sveltish_Bindings_attrIsSizeRelated(attrName) ? (d = Sveltish_DOM_ResizeObserver__Subscribe_3A5B6456(Sveltish_DOM_getResizer(Sveltish_DOM_asEl(parent)), notify), () => {
        Sveltish_Helpers_unsubify(d, void 0);
    }) : (clo3 = Sveltish_DOM_listen("input", parent, (_arg1) => {
        notify();
    }), () => {
        clo3();
    }));
    return Sveltish_DOM_unitResult();
}

export class Sveltish_Bindings_KeyedStoreItem$2 extends Record {
    constructor(Key, Element$, SvId, Position, Value, Rect) {
        super();
        this.Key = Key;
        this.Element = Element$;
        this.SvId = (SvId | 0);
        this.Position = Position;
        this.Value = Value;
        this.Rect = Rect;
    }
}

export function Sveltish_Bindings_KeyedStoreItem$2$reflection(gen0, gen1) {
    return record_type("Sveltish.Bindings.KeyedStoreItem`2", [gen0, gen1], Sveltish_Bindings_KeyedStoreItem$2, () => [["Key", gen1], ["Element", class_type("Browser.Types.HTMLElement")], ["SvId", int32_type], ["Position", class_type("Sveltish.IStore`1", [int32_type])], ["Value", class_type("Sveltish.IStore`1", [gen0])], ["Rect", class_type("Browser.Types.ClientRect")]]);
}

function Sveltish_Bindings_findCurrentNode(current, id) {
    if (current.parentNode == null) {
        Sveltish_Bindings_log(toText(interpolate("each: Node %P() was replaced - finding new one with id %P()", [Sveltish_DOM_nodeStr(current), id])));
        const matchValue = Sveltish_DOM_findNodeWithSvId(Sveltish_DOM_documentOf(current), id);
        if (matchValue != null) {
            const n = matchValue;
            Sveltish_Bindings_log(toText(interpolate("each: Found it: %P()", [n])));
            return n;
        }
        else {
            Sveltish_Bindings_log("each: Disaster: cannot find node");
            return null;
        }
    }
    else {
        return current;
    }
}

function Sveltish_Bindings_findCurrentElement(current, id) {
    const node = Sveltish_Bindings_findCurrentNode(current, id);
    if (equals(node, null)) {
        return null;
    }
    else if (Sveltish_DOM_isElementNode(node)) {
        return node;
    }
    else {
        Sveltish_Bindings_log(toText(interpolate("each: Disaster: found node but it\u0027s not an HTMLElement", [])));
        return null;
    }
}

export const Sveltish_Bindings_genEachId = Sveltish_Helpers_makeIdGenerator();

export function Sveltish_Bindings_eachiko(items, view, key, trans, ctx) {
    const log = (s) => {
        Sveltish_Logging_log("each", s);
    };
    let state = empty();
    const eachId = Sveltish_Bindings_genEachId() | 0;
    const idKey = "svEachId";
    const unsub = Sveltish_Store_subscribe(items, (newItems) => {
        log("-- Each Block Render -------------------------------------");
        log(toText(interpolate("caching rects for render. Previous: %P() items. Current %P() items", [length(state), length(newItems)])));
        state = map((ki) => {
            const el = Sveltish_Bindings_findCurrentElement(ki.Element, ki.SvId);
            return new Sveltish_Bindings_KeyedStoreItem$2(ki.Key, el, ki.SvId, ki.Position, ki.Value, Sveltish_DOM_clientRect(el));
        }, state);
        let prevNode = Sveltish_DOM_lastChildWhere(ctx.Parent, (arg) => {
            let n_1;
            return eachId !== (n_1 = arg, (n_1.hasOwnProperty(idKey)) ? (n_1[idKey]) : -1);
        });
        const newState = mapIndexed((itemIndex, item) => {
            let tupledArg, clo1;
            const itemKey = key([itemIndex, item]);
            const optKi = tryFind((x) => equals(x.Key, itemKey), state);
            if (optKi != null) {
                const ki_1 = optKi;
                Sveltish_Store_modify((_arg1) => itemIndex, ki_1.Position);
                Sveltish_Store_modify((_arg2) => item, ki_1.Value);
                log(toText(interpolate("existing item %P() %P() %P()", [ki_1.SvId, ki_1.Key, Sveltish_DOM_rectStr(ki_1.Rect)])));
                Sveltish_Transition_clearAnimations(ki_1.Element);
                Sveltish_Transition_animateNode(ki_1.Element, ki_1.Rect);
                prevNode = ki_1.Element;
                return ki_1;
            }
            else {
                const storePos = Sveltish_Store_make(itemIndex);
                const storeVal = Sveltish_Store_make(item);
                const ctx2 = Sveltish_DOM_withAfter(prevNode, ctx);
                log(toText(interpolate("creating new item after %P() action=%P()", [Sveltish_DOM_nodeStr(prevNode), ctx2.Action])));
                const itemNode = Sveltish_DOM_buildSolitaryElement((tupledArg = [storePos, storeVal], (clo1 = partialApply(1, view, [[tupledArg[0], tupledArg[1]]]), clo1)), ctx2);
                itemNode[idKey] = eachId;
                Sveltish_Transition_transitionNode(itemNode, trans, singleton(new Sveltish_Transition_TransitionProp(0, toString(itemKey))), true, (value) => {
                    void value;
                }, (value_1) => {
                    void value_1;
                });
                const newKi = new Sveltish_Bindings_KeyedStoreItem$2(itemKey, itemNode, Sveltish_DOM_svId(itemNode), storePos, storeVal, Sveltish_DOM_clientRect(itemNode));
                log(toText(interpolate("new item %P() %P() %P()", [newKi.SvId, itemKey, Sveltish_DOM_rectStr(newKi.Rect)])));
                prevNode = itemNode;
                return newKi;
            }
        }, newItems);
        const enumerator = getEnumerator(state);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const oldItem = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                if (!exists((x_1) => equals(x_1.Key, oldItem.Key), newState)) {
                    log(toText(interpolate("removing key %P()", [oldItem.Key])));
                    Sveltish_Transition_transitionNode(oldItem.Element, trans, singleton(new Sveltish_Transition_TransitionProp(0, toString(oldItem.Key))), false, (node) => {
                        Sveltish_DOM_fixPosition(node);
                    }, (e) => {
                        oldItem.Position.Dispose();
                        oldItem.Value.Dispose();
                        Sveltish_DOM_removeNode(e);
                    });
                }
            }
        }
        finally {
            enumerator.Dispose();
        }
        state = newState;
    });
    return Sveltish_DOM_unitResult();
}

function Sveltish_Bindings_duc() {
    return Sveltish_ObservableX_distinctUntilChanged;
}

export function Sveltish_Bindings_each(items, view, trans) {
    return (ctx_1) => Sveltish_Bindings_eachiko(items, uncurry(2, (tupledArg) => {
        const store = Sveltish_Bindings_duc()(tupledArg[1]);
        return (ctx) => Sveltish_Bindings_bind(store, view, ctx);
    }), (tupledArg_1) => {
        let copyOfStruct = tupledArg_1[1];
        return identityHash(copyOfStruct) | 0;
    }, trans, ctx_1);
}

export function Sveltish_Bindings_eachi(items, view, trans) {
    return (ctx_1) => Sveltish_Bindings_eachiko(items, uncurry(2, (tupledArg) => {
        const a = Sveltish_Bindings_duc()(tupledArg[0]);
        const b = Sveltish_Bindings_duc()(tupledArg[1]);
        return (ctx) => Sveltish_Bindings_bind2(a, b, view, ctx);
    }), (tuple) => tuple[0], trans, ctx_1);
}

export function Sveltish_Bindings_eachio(items, view, trans) {
    const view_1 = view;
    return (ctx) => Sveltish_Bindings_eachiko(items, view_1, (tuple) => tuple[0], trans, ctx);
}

export function Sveltish_Bindings_eachk(items, view, key, trans) {
    return (ctx_1) => Sveltish_Bindings_eachiko(items, uncurry(2, (tupledArg) => {
        const store = Sveltish_Bindings_duc()(tupledArg[1]);
        return (ctx) => Sveltish_Bindings_bind(store, view, ctx);
    }), (arg) => key(arg[1]), trans, ctx_1);
}

export function Sveltish_Bindings_op_BarEqualsGreater(a, b) {
    return (ctx) => Sveltish_Bindings_bind(a, b, ctx);
}


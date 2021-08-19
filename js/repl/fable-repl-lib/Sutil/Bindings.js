import { Sutil_Logging_error, Sutil_Logging_log } from "./Logging.js";
import { Sutil_Helpers_unsubify, Sutil_Helpers_makeIdGenerator } from "./Helpers.js";
import { Sutil_DOM_exclusive, Sutil_DOM_declareResource, Sutil_DOM_SutilNode__InsertAfter_Z129D0740, Sutil_DOM_SutilNode__RemoveChild_171AE942, Sutil_DOM_isSameNode, Sutil_DOM_NodeGroup__get_PrevDomNode, Sutil_DOM_NodeGroup__RemoveChild_Z5119285D, Sutil_DOM_SutilNode__InsertBefore_Z129D0740, Sutil_DOM_fixPosition, Sutil_DOM_nodeStr, Sutil_DOM_nodeStrShort, Sutil_DOM_svId, Sutil_DOM_asDomElement, Sutil_DOM_DomEdit_log, Sutil_DOM_ContextHelpers_withPrevious, Sutil_DOM_rectStr, Sutil_DOM_ContextHelpers_withParent, Sutil_DOM_isElementNode, Sutil_DOM_findNodeWithSvId, Sutil_DOM_SutilNode$reflection, Sutil_DOM_rafu, Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D, Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C, Sutil_DOM_fragment, Sutil_DOM_setAttribute, Sutil_DOM_removeFromClasslist, Sutil_DOM_addToClasslist, Sutil_DOM_documentOf, Sutil_DOM_BuildContext__get_ParentNode, Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB, Sutil_DOM_Event_ElementReady, Sutil_DOM_once, Sutil_DOM_listen, Sutil_DOM_BuildContext__get_ParentElement, Sutil_DOM_sutilResult, Sutil_DOM_NodeGroup__SetDispose_3A5B6456, Sutil_DOM_ContextHelpers_withReplace, Sutil_DOM_NodeGroup__get_NextDomNode, Sutil_DOM_build, Sutil_DOM_BuildContext, Sutil_DOM_BuildContext__AddChild_Z5119285D, Sutil_DOM_NodeGroup__get_Id, Sutil_DOM_NodeGroup_$ctor_Z2A697365, Sutil_DOM_SutilNode, Sutil_DOM_unitResult, Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC, Sutil_DOM_nodeFactory } from "./DOM.js";
import { subscribe } from "../../fable-library/Observable.js";
import { identityHash, stringHash, safeHash, structuralHash, equals, getEnumerator, partialApply } from "../../fable-library/Util.js";
import { isNullOrEmpty, interpolate, toText } from "../../fable-library/String.js";
import { Sutil_StoreExtensions_firstOf, Sutil_Store_make, Sutil_Store_modify, Sutil_Store_get, Sutil_Store_set, Sutil_StoreOperators_op_DotGreater, Sutil_StoreOperators_op_LessTwiddle, Sutil_Store_subscribe2, Sutil_Store_subscribe } from "./Store.js";
import { Record, toString } from "../../fable-library/Types.js";
import { Sutil_ObservablePromise_ObservablePromise$1__Run_56E03C9D, Sutil_ObservablePromise_ObservablePromise$1_$ctor } from "./Promise.js";
import { toArray, mapIndexed, length, filter, head, isEmpty, empty, exactlyOne, singleton, contains, map as map_1 } from "../../fable-library/List.js";
import { exists, tryFind, toList as toList_1 } from "../../fable-library/Seq.js";
import { rangeDouble } from "../../fable-library/Range.js";
import { some, value as value_5 } from "../../fable-library/Option.js";
import { Sutil_ResizeObserver_getResizer, Sutil_ResizeObserver_ResizeObserver__Subscribe_3A5B6456 } from "./ResizeObserver.js";
import { record_type, class_type, int32_type } from "../../fable-library/Reflection.js";
import { Sutil_Transition_TransitionProp, Sutil_Transition_transitionNode, Sutil_Transition_animateNode, Sutil_Transition_clearAnimations } from "./Transition.js";
import { Sutil_Observable_distinctUntilChanged } from "./Observable.js";

function Sutil_Bindings_log(s) {
    Sutil_Logging_log("bind", s);
}

const Sutil_Bindings_bindId = Sutil_Helpers_makeIdGenerator();

export function Sutil_Bindings_bindSub(source, handler) {
    return Sutil_DOM_nodeFactory((ctx) => {
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, subscribe(partialApply(1, handler, [ctx]), source));
        return Sutil_DOM_unitResult(ctx, "bindSub");
    });
}

export function Sutil_Bindings_bindFragment(store, element) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let node = new Sutil_DOM_SutilNode(0);
        const vnode = Sutil_DOM_NodeGroup_$ctor_Z2A697365("bind", ctx.Parent, ctx.Previous);
        const bindNode = new Sutil_DOM_SutilNode(2, vnode);
        Sutil_Bindings_log(toText(interpolate("bindFragment: %P() ctx=%P() prev=%P()", [Sutil_DOM_NodeGroup__get_Id(vnode), ctx.Action, ctx.Previous])));
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, bindNode);
        const bindCtx = new Sutil_DOM_BuildContext(ctx.Document, bindNode, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Debug, ctx.StyleSheet);
        const disposable = Sutil_Store_subscribe((next) => {
            let before;
            try {
                node = Sutil_DOM_build(element(next), (before = Sutil_DOM_NodeGroup__get_NextDomNode(vnode), Sutil_DOM_ContextHelpers_withReplace(node, before, bindCtx)));
            }
            catch (x) {
                Sutil_Logging_error(toText(interpolate("Exception in bind: %P() parent %P() node %P() node.Parent ", [x.message, ctx.Parent, toString(node)])));
            }
        }, store);
        Sutil_DOM_NodeGroup__SetDispose_3A5B6456(vnode, () => {
            Sutil_Helpers_unsubify(disposable, void 0);
        });
        return Sutil_DOM_sutilResult(bindNode);
    });
}

export function Sutil_Bindings_bindFragment2(a, b, element) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let node = new Sutil_DOM_SutilNode(0);
        const vnode = Sutil_DOM_NodeGroup_$ctor_Z2A697365("bind2", ctx.Parent, ctx.Previous);
        const bindNode = new Sutil_DOM_SutilNode(2, vnode);
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, bindNode);
        const bindCtx = new Sutil_DOM_BuildContext(ctx.Document, bindNode, ctx.Previous, ctx.Action, ctx.MakeName, ctx.Debug, ctx.StyleSheet);
        const d = Sutil_Store_subscribe2(a, b, (next) => {
            let before;
            try {
                node = Sutil_DOM_build(element(next), (before = Sutil_DOM_NodeGroup__get_NextDomNode(vnode), Sutil_DOM_ContextHelpers_withReplace(node, before, bindCtx)));
            }
            catch (x) {
                Sutil_Logging_error(toText(interpolate("Exception in bind: %P()", [x.message])));
            }
        });
        Sutil_DOM_NodeGroup__SetDispose_3A5B6456(vnode, () => {
            Sutil_Helpers_unsubify(d, void 0);
        });
        return Sutil_DOM_sutilResult(bindNode);
    });
}

export function Sutil_Bindings_bindPromiseStore(p, waiting, result, fail) {
    return Sutil_Bindings_bindFragment(p, (_arg1) => ((_arg1.tag === 1) ? result(_arg1.fields[0]) : ((_arg1.tag === 2) ? fail(_arg1.fields[0]) : waiting)));
}

export function Sutil_Bindings_bindPromise(p, waiting, result, fail) {
    const x = Sutil_ObservablePromise_ObservablePromise$1_$ctor();
    Sutil_ObservablePromise_ObservablePromise$1__Run_56E03C9D(x, p);
    return Sutil_Bindings_bindPromiseStore(x, waiting, result, fail);
}

function Sutil_Bindings_getInputChecked(el) {
    return el["checked"];
}

function Sutil_Bindings_setInputChecked(el, v) {
    el["checked"] = v;
}

function Sutil_Bindings_getInputValue(el) {
    return el["value"];
}

function Sutil_Bindings_setInputValue(el, v) {
    el["value"] = v;
}

export function Sutil_Bindings_bindSelected(selection, dispatch) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const selectElement = Sutil_DOM_BuildContext__get_ParentElement(ctx);
        const selOps = selectElement.selectedOptions;
        const op = (coll, i) => (coll[i]);
        const opValue = (op_1) => (op_1["__value"]);
        let unsubInput;
        const clo3 = Sutil_DOM_listen("input", selectElement, (_arg1) => {
            dispatch(map_1((i_1) => opValue(op(selOps, i_1)), toList_1(rangeDouble(0, 1, selOps.length - 1))));
        });
        unsubInput = (() => {
            clo3();
        });
        Sutil_DOM_once(Sutil_DOM_Event_ElementReady, selectElement, (_arg2) => {
            Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, Sutil_Store_subscribe((v) => {
                const ops = selectElement.options;
                const enumerator = getEnumerator(toList_1(rangeDouble(0, 1, ops.length - 1)));
                try {
                    while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                        const o = op(ops, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                        o.selected = contains(opValue(o), v, {
                            Equals: (x, y) => equals(x, y),
                            GetHashCode: (x) => structuralHash(x),
                        });
                    }
                }
                finally {
                    enumerator.Dispose();
                }
            }, selection));
        });
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, unsubInput);
        return Sutil_DOM_unitResult(ctx, "bindSelected");
    });
}

export function Sutil_Bindings_bindSelectMultiple(store) {
    return Sutil_Bindings_bindSelected(store, (sln) => {
        Sutil_StoreOperators_op_LessTwiddle(store, sln);
    });
}

export function Sutil_Bindings_bindSelectSingle(store) {
    return Sutil_Bindings_bindSelected(Sutil_StoreOperators_op_DotGreater(store, (value) => singleton(value)), (sln) => {
        Sutil_Store_set(store, exactlyOne(sln));
    });
}

export function Sutil_Bindings_bindSelectOptional(store) {
    return Sutil_Bindings_bindSelected(Sutil_StoreOperators_op_DotGreater(store, (topt) => {
        if (topt != null) {
            return singleton(value_5(topt));
        }
        else {
            return empty();
        }
    }), (sln) => {
        let list;
        Sutil_Store_set(store, (list = sln, (!isEmpty(list)) ? some(head(list)) : (void 0)));
    });
}

function Sutil_Bindings_isNullString(obj) {
    if (obj == null) {
        return true;
    }
    else {
        return isNullOrEmpty(obj);
    }
}

function Sutil_Bindings_getId(s) {
    return safeHash(s);
}

export function Sutil_Bindings_bindGroup(store) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        name = (Sutil_Bindings_isNullString(matchValue) ? toText(interpolate("store-%P()", [Sutil_Bindings_getId(store)])) : matchValue);
        parent["name"] = name;
        const updateChecked = (v) => {
            Sutil_Bindings_setInputChecked(parent, contains(Sutil_Bindings_getInputValue(parent), v, {
                Equals: (x, y) => (x === y),
                GetHashCode: (x) => stringHash(x),
            }));
        };
        let unsubInput;
        const clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            let inputs;
            Sutil_Store_set(store, (inputs = Sutil_DOM_documentOf(parent).querySelectorAll(toText(interpolate("input[name=\"%P()\"]", [name]))), map_1((el_1) => Sutil_Bindings_getInputValue(el_1), filter((el) => Sutil_Bindings_getInputChecked(el), map_1((i) => (inputs[i]), toList_1(rangeDouble(0, 1, inputs.length - 1)))))));
        });
        unsubInput = (() => {
            clo3();
        });
        Sutil_DOM_once(Sutil_DOM_Event_ElementReady, parent, (_arg2) => {
            updateChecked(Sutil_Store_get(store));
        });
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, Sutil_Store_subscribe(updateChecked, store));
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, unsubInput);
        return Sutil_DOM_unitResult(ctx, "bindGroup");
    });
}

export function Sutil_Bindings_bindRadioGroup(store) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        let name;
        const matchValue = parent["name"];
        name = (Sutil_Bindings_isNullString(matchValue) ? toText(interpolate("store-%P()", [Sutil_Bindings_getId(store)])) : matchValue);
        parent["name"] = name;
        const updateChecked = (v) => {
            Sutil_Bindings_setInputChecked(parent, toString(v) === Sutil_Bindings_getInputValue(parent));
        };
        let inputUnsub;
        const clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            Sutil_Store_set(store, parent["value"]);
        });
        inputUnsub = (() => {
            clo3();
        });
        Sutil_DOM_once(Sutil_DOM_Event_ElementReady, parent, (_arg2) => {
            updateChecked(Sutil_Store_get(store));
        });
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, Sutil_Store_subscribe((arg00_1) => {
            updateChecked(arg00_1);
        }, store));
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, inputUnsub);
        return Sutil_DOM_unitResult(ctx, "bindRadioGroup");
    });
}

export function Sutil_Bindings_bindClass(toggle, classes) {
    return Sutil_Bindings_bindSub(toggle, (ctx, active) => {
        if (active) {
            Sutil_DOM_addToClasslist(classes, Sutil_DOM_BuildContext__get_ParentElement(ctx));
        }
        else {
            Sutil_DOM_removeFromClasslist(classes, Sutil_DOM_BuildContext__get_ParentElement(ctx));
        }
    });
}

export function Sutil_Bindings_bindAttrIn(attrName, store) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let el;
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, (attrName === "class") ? Sutil_Store_subscribe((cls) => {
            Sutil_DOM_BuildContext__get_ParentElement(ctx).className = toString(cls);
        }, store) : Sutil_Store_subscribe((el = Sutil_DOM_BuildContext__get_ParentElement(ctx), (value) => {
            Sutil_DOM_setAttribute(el, attrName, value);
        }), store));
        return Sutil_DOM_unitResult(ctx, "bindAttrIn");
    });
}

export function Sutil_Bindings_bindAttrOut(attrName, onchange) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let clo3;
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, (clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            onchange(parent[attrName]);
        }), () => {
            clo3();
        }));
        return Sutil_DOM_unitResult(ctx, "bindAttrOut");
    });
}

export function Sutil_Bindings_attrNotify(attrName, value, onchange) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            onchange(parent[attrName]);
        });
        unsubInput = (() => {
            clo3();
        });
        parent[attrName] = value;
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, unsubInput);
        return Sutil_DOM_unitResult(ctx, "attrNotify");
    });
}

export function Sutil_Bindings_bindAttrBoth(attrName, value, onchange) {
    return Sutil_DOM_fragment([Sutil_Bindings_bindAttrIn(attrName, value), Sutil_Bindings_bindAttrOut(attrName, onchange)]);
}

export function Sutil_Bindings_bindListen(attrName, store, event, handler) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        let unsubA;
        const clo3 = Sutil_DOM_listen(event, parent, handler);
        unsubA = (() => {
            clo3();
        });
        const unsubB = Sutil_Store_subscribe((value) => {
            parent[attrName] = value;
        }, store);
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, unsubA);
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, unsubB);
        return Sutil_DOM_unitResult(ctx, "bindListen");
    });
}

function Sutil_Bindings_bindAttrConvert(attrName, store, convert) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        let unsubInput;
        const clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            Sutil_Store_set(store, convert(parent[attrName]));
        });
        unsubInput = (() => {
            clo3();
        });
        const unsub = Sutil_Store_subscribe((value) => {
            parent[attrName] = value;
        }, store);
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C(parent, unsubInput);
        Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(parent, unsub);
        return Sutil_DOM_unitResult(ctx, "bindAttrConvert");
    });
}

function Sutil_Bindings_convertObj(v) {
    return v;
}

export function Sutil_Bindings_bindAttrStoreBoth(attrName, store) {
    return Sutil_Bindings_bindAttrConvert(attrName, store, (v) => Sutil_Bindings_convertObj(v));
}

export function Sutil_Bindings_bindAttrStoreOut(attrName, store) {
    return Sutil_DOM_nodeFactory((ctx) => {
        let clo3;
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, (clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
            Sutil_Store_set(store, Sutil_Bindings_convertObj(parent[attrName]));
        }), () => {
            clo3();
        }));
        return Sutil_DOM_unitResult(ctx, "bindAttrStoreOut");
    });
}

function Sutil_Bindings_attrIsSizeRelated(attrName) {
    const upr = attrName.toLocaleUpperCase();
    if (upr.indexOf("WIDTH") >= 0) {
        return true;
    }
    else {
        return upr.indexOf("HEIGHT") >= 0;
    }
}

export function Sutil_Bindings_listenToProp(attrName, dispatch) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const parent = Sutil_DOM_BuildContext__get_ParentNode(ctx);
        const notify = () => {
            dispatch(Sutil_Bindings_convertObj(parent[attrName]));
        };
        Sutil_DOM_once(Sutil_DOM_Event_ElementReady, parent, (_arg2) => {
            let clo3;
            if (Sutil_Bindings_attrIsSizeRelated(attrName)) {
                Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(parent, Sutil_ResizeObserver_ResizeObserver__Subscribe_3A5B6456(Sutil_ResizeObserver_getResizer(parent), notify));
            }
            else {
                Sutil_DOM_SutilNode_RegisterUnsubscribe_Z3FDC8A2C(parent, (clo3 = Sutil_DOM_listen("input", parent, (_arg1) => {
                    notify();
                }), () => {
                    clo3();
                }));
            }
            Sutil_DOM_rafu(notify);
        });
        return Sutil_DOM_unitResult(ctx, "listenToProp");
    });
}

export function Sutil_Bindings_bindPropOut(attrName, store) {
    return Sutil_Bindings_listenToProp(attrName, (newValue) => {
        Sutil_Store_set(store, newValue);
    });
}

export class Sutil_Bindings_KeyedStoreItem$2 extends Record {
    constructor(Key, Node$, SvId, Position, Value, Rect) {
        super();
        this.Key = Key;
        this.Node = Node$;
        this.SvId = (SvId | 0);
        this.Position = Position;
        this.Value = Value;
        this.Rect = Rect;
    }
}

export function Sutil_Bindings_KeyedStoreItem$2$reflection(gen0, gen1) {
    return record_type("Sutil.Bindings.KeyedStoreItem`2", [gen0, gen1], Sutil_Bindings_KeyedStoreItem$2, () => [["Key", gen1], ["Node", Sutil_DOM_SutilNode$reflection()], ["SvId", int32_type], ["Position", class_type("Sutil.IStore`1", [int32_type])], ["Value", class_type("Sutil.IStore`1", [gen0])], ["Rect", class_type("Browser.Types.ClientRect")]]);
}

function Sutil_Bindings_findCurrentNode(doc, current, id) {
    if ((current == null) ? true : (current.parentNode == null)) {
        Sutil_Bindings_log(toText(interpolate("each: Find node with id %P()", [id])));
        const matchValue = Sutil_DOM_findNodeWithSvId(doc, id);
        if (matchValue != null) {
            const n = matchValue;
            Sutil_Bindings_log(toText(interpolate("each: Found it: %P()", [n])));
            return n;
        }
        else {
            Sutil_Bindings_log("each: Disaster: cannot find node");
            return null;
        }
    }
    else {
        return current;
    }
}

function Sutil_Bindings_findCurrentElement(doc, current, id) {
    const node = Sutil_Bindings_findCurrentNode(doc, current, id);
    if (equals(node, null)) {
        return null;
    }
    else if (Sutil_DOM_isElementNode(node)) {
        return node;
    }
    else {
        Sutil_Bindings_log(toText(interpolate("each: Disaster: found node but it\u0027s not an HTMLElement", [])));
        return null;
    }
}

const Sutil_Bindings_genEachId = Sutil_Helpers_makeIdGenerator();

export function Sutil_Bindings_eachiko(items, view, key, trans) {
    const log = (s) => {
        Sutil_Logging_log("each", s);
    };
    return Sutil_DOM_nodeFactory((ctx) => {
        log(toText(interpolate("eachiko: Previous = %P()", [ctx.Previous])));
        const eachGroup = Sutil_DOM_NodeGroup_$ctor_Z2A697365("each", ctx.Parent, ctx.Previous);
        const eachNode = new Sutil_DOM_SutilNode(2, eachGroup);
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, eachNode);
        let state = empty();
        const eachId = (Sutil_Bindings_genEachId() + 1) | 0;
        const idKey = "svEachId";
        const eachCtx = Sutil_DOM_ContextHelpers_withParent(eachNode, ctx);
        const unsub = Sutil_Store_subscribe((newItems) => {
            log("-- Each Block Render -------------------------------------");
            log(toText(interpolate("caching rects for render. Previous: %P() items. Current %P() items", [length(state), length(newItems)])));
            state = map_1((ki) => (new Sutil_Bindings_KeyedStoreItem$2(ki.Key, ki.Node, ki.SvId, ki.Position, ki.Value, Sutil_Bindings_findCurrentElement(ctx.Document, null, ki.SvId).getBoundingClientRect())), state);
            log(toText(interpolate("Previous = %P()", [ctx.Previous])));
            let prevNode = new Sutil_DOM_SutilNode(0);
            const newState = mapIndexed((itemIndex, item) => {
                let tupledArg, n_1;
                const itemKey = key([itemIndex, item]);
                const optKi = tryFind((x) => equals(x.Key, itemKey), state);
                if (optKi != null) {
                    const ki_1 = optKi;
                    Sutil_Store_modify((_arg1) => itemIndex, ki_1.Position);
                    Sutil_Store_modify((_arg2) => item, ki_1.Value);
                    const el_1 = Sutil_Bindings_findCurrentElement(ctx.Document, null, ki_1.SvId);
                    log(toText(interpolate("existing item %P() %P() %P()", [ki_1.SvId, ki_1.Key, Sutil_DOM_rectStr(ki_1.Rect)])));
                    Sutil_Transition_clearAnimations(el_1);
                    Sutil_Transition_animateNode(el_1, ki_1.Rect);
                    prevNode = ki_1.Node;
                    return ki_1;
                }
                else {
                    const storePos = Sutil_Store_make(itemIndex);
                    const storeVal = Sutil_Store_make(item);
                    const ctx2 = Sutil_DOM_ContextHelpers_withPrevious(prevNode, eachCtx);
                    Sutil_DOM_DomEdit_log(toText(interpolate("++ creating new item \u0027%P()\u0027 (key=%P()) with prev=\u0027%P()\u0027 action=%P()", [item, itemKey, prevNode, ctx2.Action])));
                    const sutilNode = Sutil_DOM_build((tupledArg = [storePos, storeVal], view([tupledArg[0], tupledArg[1]])), ctx2);
                    const itemNode = Sutil_DOM_asDomElement(sutilNode, ctx2);
                    Sutil_DOM_DomEdit_log(toText(interpolate("-- created #%P() with prev=\u0027%P()\u0027", [Sutil_DOM_svId(itemNode), Sutil_DOM_nodeStrShort(itemNode.previousSibling)])));
                    itemNode[idKey] = eachId;
                    Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(itemNode, storePos);
                    Sutil_DOM_SutilNode_RegisterDisposable_5FAE877D(itemNode, storeVal);
                    Sutil_Transition_transitionNode(itemNode, trans, singleton(new Sutil_Transition_TransitionProp(0, toString(itemKey))), true, (value) => {
                    }, (value_1) => {
                    });
                    const newKi = new Sutil_Bindings_KeyedStoreItem$2(itemKey, sutilNode, Sutil_DOM_svId(itemNode), storePos, storeVal, itemNode.getBoundingClientRect());
                    const prevEl = itemNode.previousSibling;
                    log(toText(interpolate("new item #%P() eid=%P() %P() %P() prevNode=%P() prevSibling=%P()", [newKi.SvId, (n_1 = itemNode, (n_1.hasOwnProperty(idKey)) ? (n_1[idKey]) : -1), itemKey, Sutil_DOM_rectStr(newKi.Rect), prevNode, Sutil_DOM_nodeStr(prevEl)])));
                    prevNode = sutilNode;
                    return newKi;
                }
            }, newItems);
            log("Remove old items");
            const enumerator = getEnumerator(state);
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const oldItem = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (!exists((x_1) => equals(x_1.Key, oldItem.Key), newState)) {
                        log(toText(interpolate("removing key %P()", [oldItem.Key])));
                        const el_2 = Sutil_Bindings_findCurrentElement(ctx.Document, null, oldItem.SvId);
                        Sutil_DOM_fixPosition(el_2);
                        const value_2 = Sutil_DOM_SutilNode__InsertBefore_Z129D0740(ctx.Parent, el_2, null);
                        Sutil_Transition_transitionNode(el_2, trans, singleton(new Sutil_Transition_TransitionProp(0, toString(oldItem.Key))), false, (value_3) => {
                        }, (e) => {
                            Sutil_DOM_NodeGroup__RemoveChild_Z5119285D(eachGroup, oldItem.Node);
                        });
                    }
                }
            }
            finally {
                enumerator.Dispose();
            }
            let prevDomNode = Sutil_DOM_NodeGroup__get_PrevDomNode(eachGroup);
            const enumerator_1 = getEnumerator(newState);
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const ki_2 = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    log(toText(interpolate("Re-order: #%P()", [ki_2.SvId])));
                    const el_3 = Sutil_Bindings_findCurrentElement(ctx.Document, null, ki_2.SvId);
                    if (!(el_3 == null)) {
                        if (!Sutil_DOM_isSameNode(prevDomNode, el_3.previousSibling)) {
                            log(toText(interpolate("reordering: ki=%P() prevNode=%P()", [Sutil_DOM_nodeStr(el_3), Sutil_DOM_nodeStr(prevDomNode)])));
                            log(toText(interpolate("reordering key %P() %P() parent=%P()", [ki_2.Key, Sutil_DOM_nodeStrShort(el_3), el_3.parentNode])));
                            const value_4 = Sutil_DOM_SutilNode__RemoveChild_171AE942(ctx.Parent, el_3);
                            Sutil_DOM_SutilNode__InsertAfter_Z129D0740(ctx.Parent, el_3, prevDomNode);
                        }
                        prevDomNode = el_3;
                    }
                }
            }
            finally {
                enumerator_1.Dispose();
            }
            state = newState;
        }, items);
        Sutil_DOM_NodeGroup__SetDispose_3A5B6456(eachGroup, () => {
            Sutil_Helpers_unsubify(unsub, void 0);
        });
        return Sutil_DOM_sutilResult(eachNode);
    });
}

function Sutil_Bindings_duc() {
    return (source) => Sutil_Observable_distinctUntilChanged(source);
}

export function Sutil_Bindings_each(items, view, trans) {
    return Sutil_Bindings_eachiko(items, (tupledArg) => Sutil_Bindings_bindFragment(Sutil_Bindings_duc()(tupledArg[1]), view), (tupledArg_1) => {
        let copyOfStruct;
        return [tupledArg_1[0], (copyOfStruct = tupledArg_1[1], identityHash(copyOfStruct))];
    }, trans);
}

export function Sutil_Bindings_eachi(items, view, trans) {
    return Sutil_Bindings_eachiko(items, (tupledArg) => Sutil_Bindings_bindFragment2(Sutil_Bindings_duc()(tupledArg[0]), Sutil_Bindings_duc()(tupledArg[1]), view), (tuple) => tuple[0], trans);
}

export function Sutil_Bindings_eachio(items, view, trans) {
    return Sutil_Bindings_eachiko(items, view, (tuple) => tuple[0], trans);
}

export function Sutil_Bindings_eachk(items, view, key, trans) {
    return Sutil_Bindings_eachiko(items, (tupledArg) => Sutil_Bindings_bindFragment(Sutil_Bindings_duc()(tupledArg[1]), view), (arg) => key(arg[1]), trans);
}

export function Sutil_Bindings_bindEvent(event, map, app) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const s = Sutil_Store_make(null);
        let u;
        const clo3 = Sutil_DOM_listen(event, Sutil_DOM_BuildContext__get_ParentNode(ctx), (arg) => {
            Sutil_Store_set(s, map(arg));
        });
        u = (() => {
            clo3();
        });
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, s);
        Sutil_DOM_SutilNode_RegisterUnsubscribe_Z4E6557AB(ctx.Parent, u);
        return Sutil_DOM_build(app(s), ctx);
    });
}

export function Sutil_Bindings_bindEventU(event, map, app) {
    return Sutil_Bindings_bindEvent(event, map, (s) => {
        app(s);
        return Sutil_DOM_fragment([]);
    });
}

export function Sutil_Bindings_bindStore(init, app) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const s = Sutil_Store_make(init);
        Sutil_DOM_SutilNode_RegisterDisposable_2E175AFC(ctx.Parent, s);
        return Sutil_DOM_build(app(s), ctx);
    });
}

export function Sutil_Bindings_declareStore(init, f) {
    return Sutil_DOM_declareResource(() => Sutil_Store_make(init), f);
}

export function Sutil_Bindings_op_BarEqualsGreater(a, b) {
    return Sutil_Bindings_bindFragment(a, b);
}

export function Sutil_Bindings_selectApp(selectors) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const s = Sutil_StoreExtensions_firstOf(map_1((tuple) => tuple[0], selectors));
        const apps = toArray(map_1((tuple_1) => tuple_1[1], selectors));
        const u = subscribe((i) => {
            if (i >= 0) {
                void Sutil_DOM_build(Sutil_DOM_exclusive(apps[i]()), ctx);
            }
        }, s);
        return Sutil_DOM_unitResult(ctx, "selectApp");
    });
}

export class Sutil_Bindings_BindApi_Bind {
    constructor() {
    }
}

export function Sutil_Bindings_BindApi_Bind$reflection() {
    return class_type("Sutil.Bindings.BindApi.Bind", void 0, Sutil_Bindings_BindApi_Bind);
}

export function Sutil_Bindings_BindApi_Bind_attr_3099C820(name, value) {
    return Sutil_Bindings_bindAttrStoreBoth(name, value);
}

export function Sutil_Bindings_BindApi_Bind_attr_3F2394B8(name, value) {
    return Sutil_Bindings_bindAttrIn(name, value);
}

export function Sutil_Bindings_BindApi_Bind_attr_Z370E6CCC(name, dispatch) {
    return Sutil_Bindings_bindAttrOut(name, dispatch);
}

export function Sutil_Bindings_BindApi_Bind_attr_Z5ECB44E9(name, value, dispatch) {
    return Sutil_Bindings_bindAttrBoth(name, value, dispatch);
}

export function Sutil_Bindings_BindApi_Bind_fragment(value, element) {
    return Sutil_Bindings_bindFragment(value, element);
}

export function Sutil_Bindings_BindApi_Bind_fragment2(valueA, valueB, element) {
    return Sutil_Bindings_bindFragment2(valueA, valueB, element);
}

export function Sutil_Bindings_BindApi_Bind_selected_Z3971AD96(value, dispatch) {
    return Sutil_Bindings_bindSelected(value, dispatch);
}

export function Sutil_Bindings_BindApi_Bind_selected_Z25BDACE1(store) {
    return Sutil_Bindings_bindSelectMultiple(store);
}

export function Sutil_Bindings_BindApi_Bind_selected_6D568EE0(store) {
    return Sutil_Bindings_bindSelectOptional(store);
}

export function Sutil_Bindings_BindApi_Bind_selected_Z685FE8AB(store) {
    return Sutil_Bindings_bindSelectSingle(store);
}


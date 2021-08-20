import { Union } from "../../fable-library/Types.js";
import { list_type, obj_type, string_type, class_type, union_type } from "../../fable-library/Reflection.js";
import { iterate as iterate_1, empty, ofArray, head, tail, isEmpty } from "../../fable-library/List.js";
import { choose, toList, iterate } from "../../fable-library/Seq.js";
import { Snabbdom_Helper_Memo_Z25D8C161, Snabbdom_Helper_Text_Z721C83C5 } from "./Snabbdom.js";
import { h } from "./snabbdom.min.js";
import { Feliz_HtmlEngine$1_$ctor_Z780DA98D } from "../Feliz.Engine/HtmlEngine.js";
import { Feliz_SvgEngine$1_$ctor_Z780DA98D } from "../Feliz.Engine/SvgEngine.js";
import { Feliz_AttrEngine$1_$ctor_22B537B1 } from "../Feliz.Engine/AttrEngine.js";
import { Feliz_CssEngine$1_$ctor_Z19E9258B } from "../Feliz.Engine/CssEngine.js";
import { Feliz_EventEngine$1_$ctor_4C3D226A } from "../Feliz.Engine.Event/EventEngine.js";
import { ofNullable, toArray } from "../../fable-library/Option.js";
import { partialApply } from "../../fable-library/Util.js";

export class Feliz_Snabbdom_StyleHook extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["None", "Delayed", "Remove", "Destroy"];
    }
}

export function Feliz_Snabbdom_StyleHook$reflection() {
    return union_type("Feliz.Snabbdom.StyleHook", [], Feliz_Snabbdom_StyleHook, () => [[], [], [], []]);
}

export class Feliz_Snabbdom_Node extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Key", "Text", "El", "Hook", "Style", "Attr", "Event", "Fragment"];
    }
}

export function Feliz_Snabbdom_Node$reflection() {
    return union_type("Feliz.Snabbdom.Node", [], Feliz_Snabbdom_Node, () => [[["Item", class_type("System.Guid")]], [["Item", string_type]], [["Item", class_type("Snabbdom.VNode")]], [["Item1", string_type], ["Item2", obj_type]], [["Item1", string_type], ["Item2", obj_type], ["Item3", Feliz_Snabbdom_StyleHook$reflection()]], [["Item1", string_type], ["Item2", obj_type]], [["Item1", string_type], ["Item2", obj_type]], [["Item", list_type(Feliz_Snabbdom_Node$reflection())]]]);
}

function Feliz_Snabbdom_makeNode(tag, nodes) {
    let transformArrayHooks = false;
    const add = (isHook_mut, o_mut, keys_mut, v_mut) => {
        add:
        while (true) {
            const isHook = isHook_mut, o = o_mut, keys = keys_mut, v = v_mut;
            if (!isEmpty(keys)) {
                if (isEmpty(tail(keys))) {
                    if (isHook ? (head(keys) in o) : false) {
                        transformArrayHooks = true;
                        if (Array.isArray(o[head(keys)])) {
                        o[head(keys)].push(v);
                        } else {
                        o[head(keys)] = [o[head(keys)], v]
                        };
                    }
                    else {
                        o[head(keys)] = v;
                    }
                }
                else {
                    if (o[head(keys)] == null) {
                        o[head(keys)] = {};
                    }
                    isHook_mut = isHook;
                    o_mut = o[head(keys)];
                    keys_mut = tail(keys);
                    v_mut = v;
                    continue add;
                }
            }
            else {
                throw (new Error("Empty key list"));
            }
            break;
        }
    };
    const addNodes = (data, children, nodes_1) => {
        iterate((_arg1) => {
            if (_arg1.tag === 1) {
                void (children.push(Snabbdom_Helper_Text_Z721C83C5(_arg1.fields[0])));
            }
            else if (_arg1.tag === 2) {
                void (children.push(_arg1.fields[0]));
            }
            else if (_arg1.tag === 3) {
                add(true, data, ofArray(["hook", _arg1.fields[0]]), _arg1.fields[1]);
            }
            else if (_arg1.tag === 4) {
                if (_arg1.fields[2].tag === 1) {
                    add(false, data, ofArray(["style", "delayed", _arg1.fields[0]]), _arg1.fields[1]);
                }
                else if (_arg1.fields[2].tag === 2) {
                    add(false, data, ofArray(["style", "remove", _arg1.fields[0]]), _arg1.fields[1]);
                }
                else if (_arg1.fields[2].tag === 3) {
                    add(false, data, ofArray(["style", "destroy", _arg1.fields[0]]), _arg1.fields[1]);
                }
                else {
                    add(false, data, ofArray(["style", _arg1.fields[0]]), _arg1.fields[1]);
                }
            }
            else if (_arg1.tag === 5) {
                add(false, data, ofArray(["attrs", _arg1.fields[0]]), _arg1.fields[1]);
            }
            else if (_arg1.tag === 6) {
                add(false, data, ofArray(["on", _arg1.fields[0]]), _arg1.fields[1]);
            }
            else if (_arg1.tag === 7) {
                addNodes(data, children, _arg1.fields[0]);
            }
            else {
                data.key = _arg1.fields[0];
            }
        }, nodes_1);
    };
    const data_1 = {};
    const children_1 = [];
    addNodes(data_1, children_1, nodes);
    if (transformArrayHooks) {
        Object.keys(data_1.hook)
        .filter(k => Array.isArray(data_1.hook[k]))
        .forEach(k => {
        const cbs = data_1.hook[k];
        data_1.hook[k] = function() {
        for (let cb of cbs) {
        cb.apply(void 0, arguments)
        }
        }
        });
    }
    return new Feliz_Snabbdom_Node(2, h(tag, data_1, children_1));
}

export class Feliz_Snabbdom_Extensions {
    constructor() {
    }
}

export function Feliz_Snabbdom_Extensions$reflection() {
    return class_type("Feliz.Snabbdom.Extensions", void 0, Feliz_Snabbdom_Extensions);
}

export function Feliz_Snabbdom_Extensions_$ctor() {
    return new Feliz_Snabbdom_Extensions();
}


export function Feliz_Snabbdom_Extensions_delayed_Z7A51B4F9(e, nodes) {
    return Feliz_Snabbdom_Extensions_withStyleHook(new Feliz_Snabbdom_StyleHook(1), nodes);
}

export function Feliz_Snabbdom_Extensions_remove_Z7A51B4F9(e, nodes) {
    return Feliz_Snabbdom_Extensions_withStyleHook(new Feliz_Snabbdom_StyleHook(2), nodes);
}

export function Feliz_Snabbdom_Extensions_destroy_Z7A51B4F9(e, nodes) {
    return Feliz_Snabbdom_Extensions_withStyleHook(new Feliz_Snabbdom_StyleHook(3), nodes);
}

function Feliz_Snabbdom_Extensions_withStyleHook(hook, nodes) {
    return new Feliz_Snabbdom_Node(7, toList(choose((_arg1) => {
        if (_arg1.tag === 4) {
            return new Feliz_Snabbdom_Node(4, _arg1.fields[0], _arg1.fields[1], hook);
        }
        else {
            return void 0;
        }
    }, nodes)));
}

export function Browser_Types_EventTarget__EventTarget_get_AsInputEl(this$) {
    return this$;
}

export function Feliz_Snabbdom_Node_get_AsVNode() {
    return (_arg1) => {
        let pattern_matching_result, vnode, vnode_1, nodes;
        if (_arg1.tag === 2) {
            pattern_matching_result = 0;
            vnode = _arg1.fields[0];
        }
        else if (_arg1.tag === 7) {
            if (!isEmpty(_arg1.fields[0])) {
                if (head(_arg1.fields[0]).tag === 2) {
                    if (isEmpty(tail(_arg1.fields[0]))) {
                        pattern_matching_result = 1;
                        vnode_1 = head(_arg1.fields[0]).fields[0];
                    }
                    else {
                        pattern_matching_result = 2;
                        nodes = _arg1.fields[0];
                    }
                }
                else {
                    pattern_matching_result = 2;
                    nodes = _arg1.fields[0];
                }
            }
            else {
                pattern_matching_result = 2;
                nodes = _arg1.fields[0];
            }
        }
        else {
            pattern_matching_result = 3;
        }
        switch (pattern_matching_result) {
            case 0: {
                return vnode;
            }
            case 1: {
                return vnode_1;
            }
            case 2: {
                return Feliz_Snabbdom_Node_get_AsVNode()(Feliz_Snabbdom_makeNode("div", nodes));
            }
            case 3: {
                throw (new Error("not a vnode"));
            }
        }
    };
}

export const Feliz_Snabbdom_Html = Feliz_HtmlEngine$1_$ctor_Z780DA98D((tag, nodes) => Feliz_Snabbdom_makeNode(tag, nodes), (arg0) => (new Feliz_Snabbdom_Node(1, arg0)), () => (new Feliz_Snabbdom_Node(7, empty())));

export const Feliz_Snabbdom_Svg = Feliz_SvgEngine$1_$ctor_Z780DA98D((tag, nodes) => Feliz_Snabbdom_makeNode(tag, nodes), (arg0) => (new Feliz_Snabbdom_Node(1, arg0)), () => (new Feliz_Snabbdom_Node(7, empty())));

export const Feliz_Snabbdom_Attr = Feliz_AttrEngine$1_$ctor_22B537B1((k, v) => (new Feliz_Snabbdom_Node(5, k, v)), (k_1, v_1) => (new Feliz_Snabbdom_Node(5, k_1, v_1)));

export const Feliz_Snabbdom_Css = Feliz_CssEngine$1_$ctor_Z19E9258B((k, v) => (new Feliz_Snabbdom_Node(4, k, v, new Feliz_Snabbdom_StyleHook(0))));

export const Feliz_Snabbdom_Ev = Feliz_EventEngine$1_$ctor_4C3D226A((k, f) => (new Feliz_Snabbdom_Node(6, k.toLowerCase(), f)));

export class Feliz_Snabbdom_Hook {
    constructor() {
    }
}

export function Feliz_Snabbdom_Hook$reflection() {
    return class_type("Feliz.Snabbdom.Hook", void 0, Feliz_Snabbdom_Hook);
}

export function Feliz_Snabbdom_Hook_init_4A5979F3(f) {
    return new Feliz_Snabbdom_Node(3, "init", f);
}

export function Feliz_Snabbdom_Hook_create_504081FC(f) {
    return new Feliz_Snabbdom_Node(3, "create", f);
}

export function Feliz_Snabbdom_Hook_insert_4A5979F3(f) {
    return new Feliz_Snabbdom_Node(3, "insert", f);
}

export function Feliz_Snabbdom_Hook_prepatch_504081FC(f) {
    return new Feliz_Snabbdom_Node(3, "prepatch", f);
}

export function Feliz_Snabbdom_Hook_update_504081FC(f) {
    return new Feliz_Snabbdom_Node(3, "update", f);
}

export function Feliz_Snabbdom_Hook_postpatch_504081FC(f) {
    return new Feliz_Snabbdom_Node(3, "postpatch", f);
}

export function Feliz_Snabbdom_Hook_destroy_4A5979F3(f) {
    return new Feliz_Snabbdom_Node(3, "destroy", f);
}

export function Feliz_Snabbdom_Hook_remove_7360A3ED(f) {
    return new Feliz_Snabbdom_Node(3, "remove", f);
}

export function Feliz_Snabbdom_Hook_insert_Z5F09CC92(f) {
    return new Feliz_Snabbdom_Node(7, ofArray([Feliz_Snabbdom_Hook_insert_4A5979F3((v) => {
        const disp = f(v);
        v.data.disposable = disp;
    }), Feliz_Snabbdom_Hook_update_504081FC((oldNode, newNode) => {
        newNode.data.disposable = oldNode.data.disposable;
    }), Feliz_Snabbdom_Hook_destroy_4A5979F3((v_1) => {
        iterate((d) => {
            d.Dispose();
        }, toArray(ofNullable(v_1.data.disposable)));
    })]));
}

export function Feliz_Snabbdom_Hook_subscribe_3339828A(arg, onInsert) {
    return new Feliz_Snabbdom_Node(7, ofArray([Feliz_Snabbdom_Hook_insert_4A5979F3((v) => {
        v.data.observer = onInsert(v);
    }), Feliz_Snabbdom_Hook_update_504081FC((oldNode, newNode) => {
        const obs = oldNode.data.observer;
        obs.OnNext(arg);
        newNode.data.observer = obs;
    }), Feliz_Snabbdom_Hook_destroy_4A5979F3((v_1) => {
        v_1.data.observer.OnCompleted();
    })]));
}

export function Feliz_Snabbdom_Hook_subscribe_Z57DCDEA5(arg, onInsert) {
    return Feliz_Snabbdom_Hook_subscribe_3339828A(arg, (vnode) => {
        const onNext = partialApply(1, onInsert, [vnode]);
        return {
            OnNext(v) {
                onNext(v);
            },
            OnCompleted() {
            },
            OnError(_arg1) {
            },
        };
    });
}

export function Feliz_Snabbdom_Disposable_make(f) {
    return {
        Dispose() {
            f();
        },
    };
}

export function Feliz_Snabbdom_Disposable_concat(disps) {
    return Feliz_Snabbdom_Disposable_make(() => {
        iterate_1((d) => {
            d.Dispose();
        }, disps);
    });
}

function Feliz_Snabbdom_attachEvent(f, el, eventType) {
    el.addEventListener(eventType, f);
    return Feliz_Snabbdom_Disposable_make(() => {
        el.removeEventListener(eventType, f);
    });
}

function Feliz_Snabbdom_mkEventEngine(node) {
    return Feliz_EventEngine$1_$ctor_4C3D226A((e, f) => Feliz_Snabbdom_attachEvent(f, node, e.toLowerCase()));
}

export const Feliz_Snabbdom_BodyEv = Feliz_Snabbdom_mkEventEngine(document.body);

export function Feliz_Snabbdom_memoizeWith(render, getId, equals, arg) {
    return new Feliz_Snabbdom_Node(2, Snabbdom_Helper_Memo_Z25D8C161(getId(arg), (m) => Feliz_Snabbdom_Node_get_AsVNode()(render(m)), arg, equals));
}

export function Feliz_Snabbdom_memoizeWithId(render, getId, arg) {
    return new Feliz_Snabbdom_Node(2, Snabbdom_Helper_Memo_Z25D8C161(getId(arg), (m) => Feliz_Snabbdom_Node_get_AsVNode()(render(m)), arg));
}


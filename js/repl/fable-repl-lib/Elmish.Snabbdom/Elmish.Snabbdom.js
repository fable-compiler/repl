import { Snabbdom_Helper_Patch_Z7AA7ED5A, Snabbdom_Helper_Patch_7B47CB60 } from "../Feliz.Snabbdom/Snabbdom.js";
import { Feliz_HtmlEngine$1__custom_4AE854A1 } from "../Feliz.Engine/HtmlEngine.js";
import { Feliz_Snabbdom_Hook_prepatch_504081FC, Feliz_Snabbdom_Html, Feliz_Snabbdom_Node_get_AsVNode, Feliz_Snabbdom_Hook_insert_4A5979F3 } from "../Feliz.Snabbdom/Feliz.Snabbdom.js";
import { Elmish_ProgramModule_view, Elmish_ProgramModule_withSetState, Elmish_ProgramModule_runWith } from "../Elmish/program.js";
import { some, value as value_3 } from "../../fable-library/Option.js";

function Elmish_Snabbdom_Program_Util_copyTo(target, source) {
    void Object.assign(target, source);
}

function Elmish_Snabbdom_Program_Util_partialPatch(oldVNode, newVnode) {
    Elmish_Snabbdom_Program_Util_copyTo(oldVNode, Snabbdom_Helper_Patch_7B47CB60(oldVNode, newVnode));
}

export function Elmish_Snabbdom_Program_withSetNewArg(setNewArg, program) {
    program.setNewArg = setNewArg;
    return program;
}

export function Elmish_Snabbdom_Program___mountOnVNodeWith(init, sel, arg) {
    return Feliz_HtmlEngine$1__custom_4AE854A1(Feliz_Snabbdom_Html, sel, [Feliz_Snabbdom_Hook_insert_4A5979F3((vnode) => {
        init((program) => {
            let oldVNode = vnode;
            let oldModel = void 0;
            Elmish_ProgramModule_runWith(arg, Elmish_ProgramModule_withSetState((model, dispatch) => {
                let pattern_matching_result;
                if (oldModel != null) {
                    if (value_3(oldModel) === model) {
                        pattern_matching_result = 0;
                    }
                    else {
                        pattern_matching_result = 1;
                    }
                }
                else {
                    pattern_matching_result = 1;
                }
                switch (pattern_matching_result) {
                    case 0: {
                        break;
                    }
                    case 1: {
                        const newVNode = Feliz_Snabbdom_Node_get_AsVNode()(Feliz_HtmlEngine$1__custom_4AE854A1(Feliz_Snabbdom_Html, sel, [Elmish_ProgramModule_view(program)(model)(dispatch)]));
                        if ((oldVNode.children.length === 0) ? ("setNewArg" in program) : false) {
                            newVNode.data.setNewArg = ((arg_1) => {
                                dispatch(program.setNewArg(arg_1));
                            });
                        }
                        Elmish_Snabbdom_Program_Util_partialPatch(oldVNode, newVNode);
                        oldVNode = newVNode;
                        break;
                    }
                }
            }, program));
        });
    }), Feliz_Snabbdom_Hook_prepatch_504081FC((oldVNode_1, newVNode_1) => {
        Elmish_Snabbdom_Program_Util_copyTo(newVNode_1, oldVNode_1);
        if ("setNewArg" in newVNode_1.data) {
            newVNode_1.data.setNewArg(arg);
        }
    })]);
}

export function Elmish_Snabbdom_Program_mountOnVNodeWith(selector, arg, program) {
    return Elmish_Snabbdom_Program___mountOnVNodeWith((cont) => {
        cont(program);
    }, selector, arg);
}

export function Elmish_Snabbdom_Program_mountOnVNode(selector, program) {
    return Elmish_Snabbdom_Program___mountOnVNodeWith((cont) => {
        cont(program);
    }, selector, void 0);
}

export function Elmish_Snabbdom_Program___lazyOnVNodeWith(mkProgram, sel, arg) {
    return Elmish_Snabbdom_Program___mountOnVNodeWith((cont) => {
        void mkProgram.then((mkProgram_1) => {
            cont(mkProgram_1(arg));
        });
    }, sel, arg);
}

export function Elmish_Snabbdom_Program_mountWithId(id, program) {
    const parent = document.getElementById(id);
    if (parent.children.length > 0) {
        parent.innerHTML = "";
    }
    const el = document.createElement("div");
    void parent.appendChild(el);
    let oldVNode = void 0;
    let oldModel = void 0;
    return Elmish_ProgramModule_withSetState((model, dispatch) => {
        let pattern_matching_result;
        if (oldModel != null) {
            if (value_3(oldModel) === model) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                break;
            }
            case 1: {
                const newVNode = Feliz_Snabbdom_Node_get_AsVNode()(Elmish_ProgramModule_view(program)(model)(dispatch));
                if (oldVNode != null) {
                    void Snabbdom_Helper_Patch_7B47CB60(oldVNode, newVNode);
                }
                else {
                    void Snabbdom_Helper_Patch_Z7AA7ED5A(el, newVNode);
                }
                oldVNode = newVNode;
                oldModel = some(model);
                break;
            }
        }
    }, program);
}

export function Elmish_Snabbdom_Program_withSnabbdom(id, program) {
    return Elmish_Snabbdom_Program_mountWithId(id, program);
}


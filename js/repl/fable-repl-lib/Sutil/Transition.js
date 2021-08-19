import { Sutil_Logging_log } from "./Logging.js";
import { Union, Record } from "../../fable-library/Types.js";
import { option_type, union_type, list_type, string_type, class_type, record_type, unit_type, lambda_type, bool_type, float64_type } from "../../fable-library/Reflection.js";
import { HashSet } from "../../fable-library/MutableSet.js";
import { curry, getEnumerator, partialApply, uncurry, safeHash, equals } from "../../fable-library/Util.js";
import { Sutil_DOM_sutilResult, Sutil_DOM_ContextHelpers_withParent, Sutil_DOM_BuildContext__AddChild_Z5119285D, Sutil_DOM_NodeGroup_$ctor_Z2A697365, Sutil_DOM_unitResult, Sutil_DOM_build, Sutil_DOM_SutilNode__get_IsEmpty, Sutil_DOM_nodeFactory, Sutil_DOM_SutilNode__collectDomNodes, Sutil_DOM_SutilNode, Sutil_DOM_SutilNode$reflection, Sutil_DOM_SutilElement$reflection, Sutil_DOM_wait, Sutil_DOM_NodeKey_clear, Sutil_DOM_NodeKey_TickTask, Sutil_DOM_NodeKey_get, Sutil_DOM_dispatchSimple, Sutil_DOM_nodeStr, Sutil_DOM_documentOf, Sutil_DOM_raf } from "./DOM.js";
import { addToSet } from "../../fable-library/MapUtil.js";
import { Sutil_Easing_quintOut, Sutil_Easing_linear } from "./Easing.js";
import { iterate, map as map_2, skip, head, singleton, cons, isEmpty, length, empty, fold, append } from "../../fable-library/List.js";
import { Sutil_DevToolsControl_Options } from "./Types.js";
import { defaultArg, map } from "../../fable-library/Option.js";
import { FSharpMap__get_Count, FSharpMap__Add, empty as empty_1 } from "../../fable-library/Map.js";
import { join, printf, isNullOrEmpty, interpolate, toText } from "../../fable-library/String.js";
import { Sutil_Interop_Window_getComputedStyle_Z5966C024, Sutil_Interop_Window_requestAnimationFrame_1A119E11 } from "./Interop.js";
import { Sutil_Helpers_makeIdGenerator } from "./Helpers.js";
import { toList } from "../../fable-library/Seq.js";
import { rangeDouble } from "../../fable-library/Range.js";
import { map as map_1 } from "../../fable-library/Array.js";
import { Sutil_Styling_showEl } from "./Styling.js";
import { Sutil_Store_map, Sutil_Store_subscribe } from "./Store.js";

export const Sutil_Transition_log = (message) => {
    Sutil_Logging_log("trans", message);
};

class Sutil_Transition_LoopTasks_Task extends Record {
    constructor(C, F) {
        super();
        this.C = C;
        this.F = F;
    }
}

function Sutil_Transition_LoopTasks_Task$reflection() {
    return record_type("Sutil.Transition.LoopTasks.Task", [], Sutil_Transition_LoopTasks_Task, () => [["C", lambda_type(float64_type, bool_type)], ["F", lambda_type(unit_type, unit_type)]]);
}

class Sutil_Transition_LoopTasks_LoopTask extends Record {
    constructor(Promise$, Abort) {
        super();
        this.Promise = Promise$;
        this.Abort = Abort;
    }
}

function Sutil_Transition_LoopTasks_LoopTask$reflection() {
    return record_type("Sutil.Transition.LoopTasks.LoopTask", [], Sutil_Transition_LoopTasks_LoopTask, () => [["Promise", class_type("Fable.Core.JS.Promise`1", [unit_type])], ["Abort", lambda_type(unit_type, unit_type)]]);
}

let Sutil_Transition_LoopTasks_tasks = new HashSet([], {
    Equals: (x, y) => equals(x, y),
    GetHashCode: (x) => safeHash(x),
});

function Sutil_Transition_LoopTasks_runTasks(now) {
    Array.from(Sutil_Transition_LoopTasks_tasks).forEach((task) => {
        if (!task.C(now)) {
            void Sutil_Transition_LoopTasks_tasks.delete(task);
            task.F();
        }
    });
    if (Sutil_Transition_LoopTasks_tasks.size !== 0) {
        void Sutil_DOM_raf((now_1) => {
            Sutil_Transition_LoopTasks_runTasks(now_1);
        });
    }
}

const Sutil_Transition_LoopTasks_clearLoops = Sutil_Transition_LoopTasks_tasks.clear();

function Sutil_Transition_LoopTasks_loop(callback) {
    let task = null;
    if (Sutil_Transition_LoopTasks_tasks.size === 0) {
        void Sutil_DOM_raf((now) => {
            Sutil_Transition_LoopTasks_runTasks(now);
        });
    }
    return new Sutil_Transition_LoopTasks_LoopTask(new Promise(((fulfill, _arg1) => {
        task = (new Sutil_Transition_LoopTasks_Task(callback, fulfill));
        void addToSet(task, Sutil_Transition_LoopTasks_tasks);
    })), () => {
        void Sutil_Transition_LoopTasks_tasks.delete(task);
    });
}

export class Sutil_Transition_TransitionProp extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Key", "X", "Y", "Opacity", "Delay", "Duration", "DurationFn", "Ease", "CssGen", "Tick", "Speed", "Fallback"];
    }
}

export function Sutil_Transition_TransitionProp$reflection() {
    return union_type("Sutil.Transition.TransitionProp", [], Sutil_Transition_TransitionProp, () => [[["Item", string_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", lambda_type(float64_type, float64_type)]], [["Item", lambda_type(float64_type, float64_type)]], [["Item", lambda_type(float64_type, lambda_type(float64_type, string_type))]], [["Item", lambda_type(float64_type, lambda_type(float64_type, unit_type))]], [["Item", float64_type]], [["Item", lambda_type(list_type(Sutil_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sutil_Transition_Transition$reflection())))]]]);
}

export class Sutil_Transition_Transition extends Record {
    constructor(Key, X, Y, Opacity, Delay, Duration, DurationFn, Speed, Ease, CssGen, Tick, Fallback) {
        super();
        this.Key = Key;
        this.X = X;
        this.Y = Y;
        this.Opacity = Opacity;
        this.Delay = Delay;
        this.Duration = Duration;
        this.DurationFn = DurationFn;
        this.Speed = Speed;
        this.Ease = Ease;
        this.CssGen = CssGen;
        this.Tick = Tick;
        this.Fallback = Fallback;
    }
}

export function Sutil_Transition_Transition$reflection() {
    return record_type("Sutil.Transition.Transition", [], Sutil_Transition_Transition, () => [["Key", string_type], ["X", float64_type], ["Y", float64_type], ["Opacity", float64_type], ["Delay", float64_type], ["Duration", float64_type], ["DurationFn", option_type(lambda_type(float64_type, float64_type))], ["Speed", float64_type], ["Ease", lambda_type(float64_type, float64_type)], ["CssGen", option_type(lambda_type(float64_type, lambda_type(float64_type, string_type)))], ["Tick", option_type(lambda_type(float64_type, lambda_type(float64_type, unit_type)))], ["Fallback", option_type(lambda_type(list_type(Sutil_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sutil_Transition_Transition$reflection()))))]]);
}

export function Sutil_Transition_Transition_get_Default() {
    return new Sutil_Transition_Transition("", 0, 0, 0, 0, 0, void 0, 0, Sutil_Easing_linear(), uncurry(2, void 0), uncurry(2, void 0), uncurry(3, void 0));
}

export class Sutil_Transition_Animation extends Record {
    constructor(From, To) {
        super();
        this.From = From;
        this.To = To;
    }
}

export function Sutil_Transition_Animation$reflection() {
    return record_type("Sutil.Transition.Animation", [], Sutil_Transition_Animation, () => [["From", class_type("Browser.Types.ClientRect")], ["To", class_type("Browser.Types.ClientRect")]]);
}

export function Sutil_Transition_mergeProps(newerProps, existingProps) {
    return append(existingProps, newerProps);
}

export function Sutil_Transition_withProps(userProps, f, initProps) {
    return partialApply(2, f, [Sutil_Transition_mergeProps(userProps, initProps)]);
}

export class Sutil_Transition_TransitionAttribute extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["InOut", "In", "Out"];
    }
}

export function Sutil_Transition_TransitionAttribute$reflection() {
    return union_type("Sutil.Transition.TransitionAttribute", [], Sutil_Transition_TransitionAttribute, () => [[["Item", lambda_type(list_type(Sutil_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sutil_Transition_Transition$reflection())))]], [["Item", lambda_type(list_type(Sutil_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sutil_Transition_Transition$reflection())))]], [["Item", lambda_type(list_type(Sutil_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sutil_Transition_Transition$reflection())))]]]);
}

function Sutil_Transition_overrideDuration(d) {
    if (Sutil_DevToolsControl_Options().SlowAnimations) {
        return 10 * d;
    }
    else {
        return d;
    }
}

function Sutil_Transition_overrideDurationFn(fo) {
    if (Sutil_DevToolsControl_Options().SlowAnimations) {
        return map((f) => ((arg) => (10 * f(arg))), fo);
    }
    else {
        return fo;
    }
}

function Sutil_Transition_applyProp(r, prop) {
    switch (prop.tag) {
        case 5: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, prop.fields[0], void 0, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 6: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, 0, prop.fields[0], r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 7: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, prop.fields[0], r.CssGen, r.Tick, r.Fallback);
        }
        case 8: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, prop.fields[0], r.Tick, r.Fallback);
        }
        case 9: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, prop.fields[0], r.Fallback);
        }
        case 10: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, prop.fields[0], r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 1: {
            return new Sutil_Transition_Transition(r.Key, prop.fields[0], r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 2: {
            return new Sutil_Transition_Transition(r.Key, r.X, prop.fields[0], r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 3: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, prop.fields[0], r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 0: {
            return new Sutil_Transition_Transition(prop.fields[0], r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
        case 11: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, prop.fields[0]);
        }
        default: {
            return new Sutil_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, prop.fields[0], r.Duration, r.DurationFn, r.Speed, r.Ease, r.CssGen, r.Tick, r.Fallback);
        }
    }
}

export function Sutil_Transition_applyProps(props, tr) {
    return fold((r, prop) => Sutil_Transition_applyProp(r, prop), tr, props);
}

export function Sutil_Transition_makeTransition(props) {
    return Sutil_Transition_applyProps(props, Sutil_Transition_Transition_get_Default());
}

export function Sutil_Transition_mapTrans(f, t) {
    return Sutil_Transition_applyProps(f(t), t);
}

export function Sutil_Transition_element(doc, tag) {
    return doc.createElement(tag);
}

let Sutil_Transition_numActiveAnimations = 0;

let Sutil_Transition_tasks = empty();

let Sutil_Transition_activeDocs = empty_1();

function Sutil_Transition_registerDoc(doc) {
    Sutil_Transition_activeDocs = FSharpMap__Add(Sutil_Transition_activeDocs, safeHash(doc), doc);
    Sutil_Transition_log(toText(interpolate("Active docs: %P()", [FSharpMap__get_Count(Sutil_Transition_activeDocs)])));
}

function Sutil_Transition_runTasks() {
    const copy = Sutil_Transition_tasks;
    Sutil_Transition_tasks = empty();
    if (length(copy) > 0) {
        Sutil_Transition_log(toText(interpolate("- - - Tasks: running %P() tasks - - - - - - - - - - - - - -", [length(copy)])));
    }
    const enumerator = getEnumerator(copy);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()();
        }
    }
    finally {
        enumerator.Dispose();
    }
}

function Sutil_Transition_waitAnimationFrame(f) {
    const init = isEmpty(Sutil_Transition_tasks);
    Sutil_Transition_tasks = cons(f, Sutil_Transition_tasks);
    if (init) {
        void Sutil_Interop_Window_requestAnimationFrame_1A119E11((_arg1) => {
            Sutil_Transition_runTasks();
        });
    }
}

function Sutil_Transition_getSutilStyleElement(doc) {
    let e = doc.querySelector("head style#__sutil_keyframes");
    if (e == null) {
        e = Sutil_Transition_element(doc, "style");
        e.setAttribute("id", "__sutil_keyframes");
        void doc.head.appendChild(e);
    }
    return e;
}

function Sutil_Transition_dotSheet(styleElem) {
    return styleElem["sheet"];
}

function Sutil_Transition_getSutilStylesheet(doc) {
    return Sutil_Transition_dotSheet(Sutil_Transition_getSutilStyleElement(doc));
}

const Sutil_Transition_nextRuleId = Sutil_Helpers_makeIdGenerator();

function Sutil_Transition_toEmptyStr(s) {
    if (isNullOrEmpty(s)) {
        return "";
    }
    else {
        return s;
    }
}

export function Sutil_Transition_createRule(node, a, b, tr, uid) {
    let arg20, arg10, arg10_1, arg10_4, list;
    Sutil_Transition_registerDoc(Sutil_DOM_documentOf(node));
    let css;
    const matchValue = tr.CssGen;
    if (curry(2, matchValue) == null) {
        throw (new Error("No CSS function supplied"));
    }
    else {
        css = curry(2, matchValue);
    }
    if (tr.DurationFn != null) {
        throw (new Error("Duration function not permitted in createRule"));
    }
    const durn = Sutil_Transition_overrideDuration(tr.Duration);
    let keyframes = singleton("{\n");
    const enumerator = getEnumerator(toList(rangeDouble(0, 16.666 / durn, 1)));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const p = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const t = a + ((b - a) * tr.Ease(p));
            keyframes = append(keyframes, singleton((arg20 = css(t)(1 - t), (arg10 = (p * 100), toText(printf("%f%%{%s}\n"))(arg10)(arg20)))));
        }
    }
    finally {
        enumerator.Dispose();
    }
    const rule = join("", append(keyframes, singleton((arg10_1 = css(b)(1 - b), toText(printf("100%% {%s}\n"))(arg10_1)))));
    let name;
    const arg10_2 = ((uid === 0) ? Sutil_Transition_nextRuleId() : uid) | 0;
    name = toText(printf("__sutil_%d"))(arg10_2);
    const keyframeText = toText(printf("@keyframes %s %s"))(name)(rule);
    Sutil_Transition_log((arg10_4 = head((list = keyframes, skip(~(~(length(keyframes) / 2)), list))), toText(printf("keyframe: %s"))(arg10_4)));
    Sutil_Transition_log(toText(interpolate("createRule %P() %P()ms for %P()", [name, durn, Sutil_DOM_nodeStr(node)])));
    const stylesheet = Sutil_Transition_getSutilStylesheet(Sutil_DOM_documentOf(node));
    void stylesheet.insertRule(keyframeText, stylesheet.cssRules.length);
    const animations = append(isNullOrEmpty((node.style).animation) ? empty() : singleton((node.style).animation), singleton(toText(printf("%s %fms linear %fms 1 both"))(name)(durn)(tr.Delay)));
    (node.style).animation = join(", ", animations);
    Sutil_Transition_numActiveAnimations = ((Sutil_Transition_numActiveAnimations + 1) | 0);
    return name;
}

export function Sutil_Transition_clearAnimations(node) {
    (node.style).animation = "";
}

function Sutil_Transition_clearRules() {
    void Sutil_Interop_Window_requestAnimationFrame_1A119E11((_arg1) => {
        let arg10;
        if (Sutil_Transition_numActiveAnimations === 0) {
            const enumerator = getEnumerator(Sutil_Transition_activeDocs);
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const stylesheet = Sutil_Transition_getSutilStylesheet(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()[1]);
                    Sutil_Transition_log((arg10 = ((~(~stylesheet.cssRules.length)) | 0), toText(printf("clearing %d rules"))(arg10)));
                    const enumerator_1 = getEnumerator(toList(rangeDouble((~(~stylesheet.cssRules.length)) - 1, -1, 0)));
                    try {
                        while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                            stylesheet.deleteRule(enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]());
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
        Sutil_Transition_activeDocs = empty_1();
    });
}

function Sutil_Transition_deleteRule(node, name) {
    const previous = Sutil_Transition_toEmptyStr((node.style).animation).split(",");
    const next = previous.filter(isNullOrEmpty(name) ? ((anim) => (anim.indexOf(name) < 0)) : ((anim_1) => (anim_1.indexOf("__sutil") < 0)));
    const deleted = (previous.length - next.length) | 0;
    if (deleted > 0) {
        (node.style).animation = join(", ", map_1((s) => s.trim(), next));
        Sutil_Transition_numActiveAnimations = ((Sutil_Transition_numActiveAnimations - deleted) | 0);
        if (Sutil_Transition_numActiveAnimations === 0) {
            Sutil_Transition_clearRules();
        }
    }
}

export function Sutil_Transition_flip(node, animation, props) {
    let inputRecord, matchValue;
    const tr = Sutil_Transition_applyProps(props, (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, inputRecord.Duration, (d) => (Math.sqrt(d) * 60), inputRecord.Speed, (t) => Sutil_Easing_quintOut(t), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback)));
    const style = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
    const transform = (style.transform === "none") ? "" : style.transform;
    const dx = (animation.From.left - animation.To.left) / (animation.From.width / node.clientWidth);
    const dy = (animation.From.top - animation.To.top) / (animation.From.height / node.clientHeight);
    const d_1 = Math.sqrt((dx * dx) + (dy * dy));
    Sutil_Transition_log(toText(interpolate("flip: %P(),%P() %P() %P() -\u003e %P()", [dx, dy, transform, animation.From, animation.To])));
    return new Sutil_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, (matchValue = tr.DurationFn, (matchValue != null) ? matchValue(d_1) : tr.Duration), void 0, tr.Speed, tr.Ease, (t_1, u) => {
        const arg30 = u * dy;
        const arg20 = u * dx;
        return toText(printf("transform: %s translate(%fpx, %fpx);`"))(transform)(arg20)(arg30);
    }, tr.Tick, tr.Fallback);
}

export function Sutil_Transition_createAnimation(node, from, animateFn, props) {
    const tgt = node.getBoundingClientRect();
    if ((!(from == null)) ? (!((((from.left === tgt.left) ? (from.right === tgt.right) : false) ? (from.top === tgt.top) : false) ? (from.bottom === tgt.bottom) : false)) : false) {
        let a;
        const arg10 = new Sutil_Transition_Animation(from, tgt);
        a = animateFn(node, arg10, props);
        return Sutil_Transition_createRule(node, 0, 1, new Sutil_Transition_Transition(a.Key, a.X, a.Y, a.Opacity, a.Delay, ((a.Duration === 0) ? (a.DurationFn == null) : false) ? 300 : a.Duration, a.DurationFn, a.Speed, a.Ease, a.CssGen, a.Tick, a.Fallback), 0);
    }
    else {
        return "";
    }
}

function Sutil_Transition_waitAnimationEnd(el, f) {
    const cb = (_arg1) => {
        el.removeEventListener("animationend", cb);
        f();
    };
    el.addEventListener("animationend", cb);
}

export function Sutil_Transition_animateNode(node, from) {
    Sutil_Transition_waitAnimationFrame(() => {
        const name = Sutil_Transition_createAnimation(node, from, (node_1, animation, props) => Sutil_Transition_flip(node_1, animation, props), empty());
        Sutil_Transition_waitAnimationEnd(node, () => {
            Sutil_Transition_deleteRule(node, name);
        });
    });
}

const Sutil_Transition_tickGen = Sutil_Helpers_makeIdGenerator();

function Sutil_Transition_findTransition(intro, trans) {
    let matchValue, x_2, x_3, x_1;
    let result = void 0;
    const enumerator = getEnumerator(trans);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            result = ((matchValue = [result, x, intro], (matchValue[0] == null) ? ((matchValue[1].tag === 2) ? (matchValue[2] ? (void 0) : ((x_2 = curry(3, matchValue[1].fields[0]), x_2))) : ((matchValue[1].tag === 0) ? ((x_3 = curry(3, matchValue[1].fields[0]), x_3)) : (matchValue[2] ? ((x_1 = curry(3, matchValue[1].fields[0]), x_1)) : (void 0)))) : result));
        }
    }
    finally {
        enumerator.Dispose();
    }
    return result;
}

export function Sutil_Transition_transitionNode(el, trans, initProps, isVisible, start, complete) {
    let ruleName = "";
    const tr_1 = Sutil_Transition_findTransition(isVisible, trans);
    if (tr_1 != null) {
        const init = tr_1;
        Sutil_Transition_deleteRule(el, "");
        const createTrans = init(initProps)(el);
        const event = isVisible ? "introstart" : "outrostart";
        const patternInput = isVisible ? [0, 1] : [1, 0];
        const b_1 = patternInput[1];
        const onEnd = isVisible ? (() => {
            Sutil_Transition_log(toText(interpolate("show %P()", [Sutil_DOM_nodeStr(el)])));
            Sutil_Styling_showEl(el, true);
            complete(el);
            if (ruleName !== "") {
                Sutil_Transition_deleteRule(el, ruleName);
            }
            Sutil_DOM_dispatchSimple(el, "introend");
        }) : (() => {
            Sutil_Transition_log(toText(interpolate("hide %P()", [Sutil_DOM_nodeStr(el)])));
            Sutil_Styling_showEl(el, false);
            complete(el);
            if (ruleName !== "") {
                Sutil_Transition_deleteRule(el, ruleName);
            }
            Sutil_DOM_dispatchSimple(el, "outroend");
        });
        const matchValue = Sutil_DOM_NodeKey_get(el, Sutil_DOM_NodeKey_TickTask);
        if (matchValue == null) {
        }
        else {
            const f = matchValue;
            Sutil_DOM_NodeKey_clear(el, Sutil_DOM_NodeKey_TickTask);
            f();
        }
        Sutil_Transition_waitAnimationFrame(() => {
            Sutil_DOM_dispatchSimple(el, event);
            start(el);
            Sutil_Transition_waitAnimationEnd(el, onEnd);
            if (isVisible) {
                Sutil_Styling_showEl(el, true);
            }
            const tr_2 = createTrans();
            if (tr_2.DurationFn != null) {
                throw (new Error("Duration function not permitted"));
            }
            if (curry(2, tr_2.CssGen) != null) {
                ruleName = Sutil_Transition_createRule(el, patternInput[0], b_1, tr_2, 0);
            }
            if (curry(2, tr_2.Tick) != null) {
                Sutil_DOM_wait(el, () => {
                    let durn, b, tr, log, a, d, tickId, tick, matchValue_1, t, start_1, finish, started, finished;
                    return ((durn = tr_2.Duration, (b = b_1, (tr = tr_2, (log = ((message) => {
                        Sutil_Logging_log("tick", message);
                    }), (a = ((b === 0) ? 1 : 0), (d = (b - a), (tickId = (Sutil_Transition_tickGen() | 0), (tick = ((matchValue_1 = tr.Tick, (curry(2, matchValue_1) == null) ? (() => {
                        throw (new Error("No tick function supplied"));
                    })() : curry(2, matchValue_1))), (t = a, (start_1 = 0, (finish = 0, (started = false, (finished = false, (el[Sutil_DOM_NodeKey_TickTask] = (() => {
                        log(toText(interpolate("#%P(): cancel", [tickId])));
                        finished = true;
                    }), (log(toText(interpolate("#%P(): run b=%P() durn=%P()", [tickId, b, durn]))), ((b > 0) ? tick(0)(1) : (void 0), Sutil_Transition_LoopTasks_loop((now) => {
                        if (!started) {
                            start_1 = (now + tr.Delay);
                            finish = (start_1 + durn);
                            log(toText(interpolate("#%P(): start: start=%P() finish=%P()", [tickId, start_1, finish])));
                            started = true;
                        }
                        if (finished ? true : (now >= finish)) {
                            log(toText(interpolate("#%P(): finish: t=%P()", [tickId, t])));
                            t = b;
                            tick(t)(1 - t);
                            finished = true;
                        }
                        else if (now >= start_1) {
                            const e = now - start_1;
                            const t0 = e / durn;
                            t = (a + (d * tr.Ease(t0)));
                            log(toText(interpolate("#%P(): tick: t=%P() t0=%P() e=%P()", [tickId, t, t0, e])));
                            tick(t)(1 - t);
                        }
                        return !finished;
                    })))))))))))))))))).Promise;
                });
            }
        });
    }
    else {
        Sutil_Styling_showEl(el, isVisible);
        complete(el);
    }
}

export class Sutil_Transition_Hideable extends Record {
    constructor(predicate, element, transOpt) {
        super();
        this.predicate = predicate;
        this.element = element;
        this.transOpt = transOpt;
    }
}

export function Sutil_Transition_Hideable$reflection() {
    return record_type("Sutil.Transition.Hideable", [], Sutil_Transition_Hideable, () => [["predicate", class_type("System.IObservable`1", [bool_type])], ["element", Sutil_DOM_SutilElement$reflection()], ["transOpt", list_type(Sutil_Transition_TransitionAttribute$reflection())]]);
}

export class Sutil_Transition_HideableRuntime extends Record {
    constructor(hideable, target, cache, unsubscribe) {
        super();
        this.hideable = hideable;
        this.target = target;
        this.cache = cache;
        this.unsubscribe = unsubscribe;
    }
}

export function Sutil_Transition_HideableRuntime$reflection() {
    return record_type("Sutil.Transition.HideableRuntime", [], Sutil_Transition_HideableRuntime, () => [["hideable", Sutil_Transition_Hideable$reflection()], ["target", Sutil_DOM_SutilNode$reflection()], ["cache", bool_type], ["unsubscribe", class_type("System.IDisposable")]]);
}

export function Sutil_Transition_createHideableRuntime(h) {
    return new Sutil_Transition_HideableRuntime(h, new Sutil_DOM_SutilNode(0), false, null);
}

export function Sutil_Transition_collectNodes(sn) {
    return defaultArg(map((n) => Sutil_DOM_SutilNode__collectDomNodes(n), sn), empty());
}

export function Sutil_Transition_transitionList(list) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const enumerator = getEnumerator(map_2((h) => Sutil_Transition_createHideableRuntime(h), list));
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const rt = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                rt.unsubscribe = Sutil_Store_subscribe((show) => {
                    if (Sutil_DOM_SutilNode__get_IsEmpty(rt.target)) {
                        rt.target = Sutil_DOM_build(rt.hideable.element, ctx);
                        rt.cache = (!show);
                    }
                    if (rt.cache !== show) {
                        rt.cache = show;
                        iterate((node) => {
                            Sutil_Transition_transitionNode(node, rt.hideable.transOpt, empty(), show, (value) => {
                            }, (value_1) => {
                            });
                        }, Sutil_DOM_SutilNode__collectDomNodes(rt.target));
                    }
                }, rt.hideable.predicate);
            }
        }
        finally {
            enumerator.Dispose();
        }
        return Sutil_DOM_unitResult(ctx, "transitionList");
    });
}

export function Sutil_Transition_makeHideable(guard, element, transOpt) {
    return new Sutil_Transition_Hideable(guard, element, transOpt);
}

export function Sutil_Transition_transitionMatch(store, options) {
    return Sutil_Transition_transitionList(map_2((tupledArg) => Sutil_Transition_makeHideable(Sutil_Store_map(tupledArg[0], store), tupledArg[1], tupledArg[2]), options));
}

export function Sutil_Transition_transitionOpt(trans, store, element, elseElement) {
    return Sutil_DOM_nodeFactory((ctx) => {
        const transResult = new Sutil_DOM_SutilNode(2, Sutil_DOM_NodeGroup_$ctor_Z2A697365("transition", ctx.Parent, ctx.Previous));
        Sutil_DOM_BuildContext__AddChild_Z5119285D(ctx, transResult);
        const transCtx = Sutil_DOM_ContextHelpers_withParent(transResult, ctx);
        let target = new Sutil_DOM_SutilNode(0);
        let cache = false;
        let targetElse = new Sutil_DOM_SutilNode(0);
        const unsub = Sutil_Store_subscribe((isVisible) => {
            const wantTransition = !Sutil_DOM_SutilNode__get_IsEmpty(target);
            if (Sutil_DOM_SutilNode__get_IsEmpty(target)) {
                target = Sutil_DOM_build(element, transCtx);
                cache = (!isVisible);
                if (elseElement == null) {
                }
                else {
                    const e = elseElement;
                    targetElse = Sutil_DOM_build(e, transCtx);
                }
            }
            if (cache !== isVisible) {
                cache = isVisible;
                const trans$0027 = wantTransition ? trans : empty();
                iterate((node) => {
                    Sutil_Transition_transitionNode(node, trans$0027, empty(), isVisible, (value) => {
                    }, (value_1) => {
                    });
                }, Sutil_DOM_SutilNode__collectDomNodes(target));
                iterate((node_1) => {
                    Sutil_Transition_transitionNode(node_1, trans$0027, empty(), !isVisible, (value_2) => {
                    }, (value_3) => {
                    });
                }, Sutil_DOM_SutilNode__collectDomNodes(targetElse));
            }
        }, store);
        return Sutil_DOM_sutilResult(transResult);
    });
}

export function Sutil_Transition_transition(trans, store, element) {
    return Sutil_Transition_transitionOpt(trans, store, element, void 0);
}

export function Sutil_Transition_transitionElse(trans, store, element, otherElement) {
    return Sutil_Transition_transitionOpt(trans, store, element, otherElement);
}

export function Sutil_Transition_showIf(store, element) {
    return Sutil_Transition_transitionOpt(empty(), store, element, void 0);
}

export function Sutil_Transition_showIfElse(store, element, otherElement) {
    return Sutil_Transition_transitionOpt(empty(), store, element, otherElement);
}


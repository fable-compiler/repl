import { Sveltish_Logging_log } from "./Logging.js";
import { FSharpRef, Record, Union } from "../../fable-library/Types.js";
import { bool_type, tuple_type, class_type, list_type, record_type, union_type, unit_type, option_type, lambda_type, float64_type, string_type } from "../../fable-library/Reflection.js";
import { Sveltish_DevToolsControl_Options } from "./Types.js";
import { bind, map } from "../../fable-library/Option.js";
import { ofArray, map as map_2, skip, head, append, ofSeq, singleton, cons, length, empty, fold } from "../../fable-library/List.js";
import { replace, join, isNullOrEmpty, interpolate, printf, toText } from "../../fable-library/String.js";
import { tryParse, parse } from "../../fable-library/Double.js";
import { comparePrimitives, min, safeHash, createAtom } from "../../fable-library/Util.js";
import { FSharpMap__get_Count, FSharpMap__Add, empty as empty_1 } from "../../fable-library/Map.js";
import { rangeNumber, getEnumerator } from "../../fable-library/Seq.js";
import { Sveltish_Helpers_makeIdGenerator } from "./Helpers.js";
import { Sveltish_DOM_unitResult, Sveltish_DOM_buildSolitary, Sveltish_DOM_BuildResult$reflection, Sveltish_DOM_BuildContext$reflection, Sveltish_DOM_rectStr, Sveltish_DOM_nodeStr, Sveltish_DOM_documentOf } from "./DOM.js";
import { map as map_1 } from "../../fable-library/Array.js";
import { getItemFromDict } from "../../fable-library/MapUtil.js";
import { Sveltish_Styling_showEl } from "./Styling.js";
import { Sveltish_Store_map, Sveltish_Store_subscribe } from "./Store.js";

export const Sveltish_Transition_log = (message) => {
    Sveltish_Logging_log("trans", message);
};

export function Sveltish_Transition_Easing_linear() {
    return (x) => x;
}

export function Sveltish_Transition_Easing_cubicIn(t) {
    return (t * t) * t;
}

export function Sveltish_Transition_Easing_cubicOut(t) {
    const f = t - 1;
    return ((f * f) * f) + 1;
}

export function Sveltish_Transition_Easing_cubicInOut(t) {
    if (t < 0.5) {
        return ((4 * t) * t) * t;
    }
    else {
        return (0.5 * Math.pow((2 * t) - 2, 3)) + 1;
    }
}

export class Sveltish_Transition_TransitionProp extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Key", "X", "Y", "Opacity", "Delay", "Duration", "DurationFn", "Ease", "Css", "Tick", "Speed"];
    }
}

export function Sveltish_Transition_TransitionProp$reflection() {
    return union_type("Sveltish.Transition.TransitionProp", [], Sveltish_Transition_TransitionProp, () => [[["Item", string_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", float64_type]], [["Item", option_type(lambda_type(float64_type, float64_type))]], [["Item", lambda_type(float64_type, float64_type)]], [["Item", lambda_type(float64_type, lambda_type(float64_type, string_type))]], [["Item", lambda_type(float64_type, lambda_type(float64_type, unit_type))]], [["Item", float64_type]]]);
}

export class Sveltish_Transition_Transition extends Record {
    constructor(Key, X, Y, Opacity, Delay, Duration, DurationFn, Speed, Ease, Css, Tick) {
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
        this.Css = Css;
        this.Tick = Tick;
    }
}

export function Sveltish_Transition_Transition$reflection() {
    return record_type("Sveltish.Transition.Transition", [], Sveltish_Transition_Transition, () => [["Key", string_type], ["X", float64_type], ["Y", float64_type], ["Opacity", float64_type], ["Delay", float64_type], ["Duration", float64_type], ["DurationFn", option_type(lambda_type(float64_type, float64_type))], ["Speed", float64_type], ["Ease", lambda_type(float64_type, float64_type)], ["Css", lambda_type(float64_type, lambda_type(float64_type, string_type))], ["Tick", lambda_type(float64_type, lambda_type(float64_type, unit_type))]]);
}

export function Sveltish_Transition_Transition_get_Default() {
    return new Sveltish_Transition_Transition("", 0, 0, 0, 0, 0, void 0, 0, Sveltish_Transition_Easing_linear(), (a, b) => "", (a_1, b_1) => {
    });
}

export class Sveltish_Transition_TransitionAttribute extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Both", "In", "Out", "InOut"];
    }
}

export function Sveltish_Transition_TransitionAttribute$reflection() {
    return union_type("Sveltish.Transition.TransitionAttribute", [], Sveltish_Transition_TransitionAttribute, () => [[["Item", tuple_type(lambda_type(list_type(Sveltish_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sveltish_Transition_Transition$reflection()))), list_type(Sveltish_Transition_TransitionProp$reflection()))]], [["Item", tuple_type(lambda_type(list_type(Sveltish_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sveltish_Transition_Transition$reflection()))), list_type(Sveltish_Transition_TransitionProp$reflection()))]], [["Item", tuple_type(lambda_type(list_type(Sveltish_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sveltish_Transition_Transition$reflection()))), list_type(Sveltish_Transition_TransitionProp$reflection()))]], [["Item", tuple_type(tuple_type(lambda_type(list_type(Sveltish_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sveltish_Transition_Transition$reflection()))), list_type(Sveltish_Transition_TransitionProp$reflection())), tuple_type(lambda_type(list_type(Sveltish_Transition_TransitionProp$reflection()), lambda_type(class_type("Browser.Types.HTMLElement"), lambda_type(unit_type, Sveltish_Transition_Transition$reflection()))), list_type(Sveltish_Transition_TransitionProp$reflection())))]]]);
}

export function Sveltish_Transition_overrideDuration(d) {
    if (Sveltish_DevToolsControl_Options().SlowAnimations) {
        return 10 * d;
    }
    else {
        return d;
    }
}

export function Sveltish_Transition_overrideDurationFn(fo) {
    if (Sveltish_DevToolsControl_Options().SlowAnimations) {
        return map((f) => ((arg) => (10 * f(arg))), fo);
    }
    else {
        return fo;
    }
}

function Sveltish_Transition_applyProp(r, prop) {
    switch (prop.tag) {
        case 5: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, prop.fields[0], void 0, r.Speed, r.Ease, r.Css, r.Tick);
        }
        case 6: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, 0, prop.fields[0], r.Speed, r.Ease, r.Css, r.Tick);
        }
        case 7: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, prop.fields[0], r.Css, r.Tick);
        }
        case 8: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, prop.fields[0], r.Tick);
        }
        case 9: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, prop.fields[0]);
        }
        case 10: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, prop.fields[0], r.Ease, r.Css, r.Tick);
        }
        case 1: {
            return new Sveltish_Transition_Transition(r.Key, prop.fields[0], r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, r.Tick);
        }
        case 2: {
            return new Sveltish_Transition_Transition(r.Key, r.X, prop.fields[0], r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, r.Tick);
        }
        case 3: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, prop.fields[0], r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, r.Tick);
        }
        case 0: {
            return new Sveltish_Transition_Transition(prop.fields[0], r.X, r.Y, r.Opacity, r.Delay, r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, r.Tick);
        }
        default: {
            return new Sveltish_Transition_Transition(r.Key, r.X, r.Y, r.Opacity, prop.fields[0], r.Duration, r.DurationFn, r.Speed, r.Ease, r.Css, r.Tick);
        }
    }
}

function Sveltish_Transition_applyProps(props, tr) {
    return fold(Sveltish_Transition_applyProp, tr, props);
}

function Sveltish_Transition_computedStyleOpacity(e) {
    let arg10;
    try {
        return parse((window.getComputedStyle(e)).opacity);
    }
    catch (matchValue) {
        Sveltish_Transition_log((arg10 = (window.getComputedStyle(e)).opacity, toText(printf("parse error: \u0027%A\u0027"))(arg10)));
        return 1;
    }
}

export function Sveltish_Transition_element(doc, tag) {
    return doc.createElement(tag);
}

export const Sveltish_Transition_numActiveAnimations = createAtom(0);

export const Sveltish_Transition_tasks = createAtom(empty());

export const Sveltish_Transition_activeDocs = createAtom(empty_1());

export function Sveltish_Transition_registerDoc(doc) {
    Sveltish_Transition_activeDocs(FSharpMap__Add(Sveltish_Transition_activeDocs(), safeHash(doc), doc), true);
    Sveltish_Transition_log(toText(interpolate("Active docs: %P()", [FSharpMap__get_Count(Sveltish_Transition_activeDocs())])));
}

export function Sveltish_Transition_runTasks() {
    const copy = Sveltish_Transition_tasks();
    Sveltish_Transition_tasks(empty(), true);
    if (length(copy) > 0) {
        Sveltish_Transition_log(toText(interpolate("- - - Tasks: running %P() tasks - - - - - - - - - - - - - -", [length(copy)])));
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

export function Sveltish_Transition_waitAnimationFrame(tag, f) {
    const init = Sveltish_Transition_tasks().tail == null;
    Sveltish_Transition_tasks(cons(f, Sveltish_Transition_tasks()), true);
    Sveltish_Transition_log(toText(interpolate("raf task %P()", [tag])));
    if (init) {
        const value = window.requestAnimationFrame((_arg1) => {
            Sveltish_Transition_log("Running raf tasks");
            Sveltish_Transition_runTasks();
        });
        void value;
    }
}

export function Sveltish_Transition_getSveltishStyleElement(doc) {
    let e = doc.querySelector("head style#__sveltish_keyframes");
    if (e == null) {
        e = Sveltish_Transition_element(doc, "style");
        e.setAttribute("id", "__sveltish_keyframes");
        const value = doc.head.appendChild(e);
        void value;
    }
    return e;
}

export function Sveltish_Transition_dotSheet(styleElem) {
    return styleElem["sheet"];
}

export function Sveltish_Transition_getSveltishStylesheet(doc) {
    return Sveltish_Transition_dotSheet(Sveltish_Transition_getSveltishStyleElement(doc));
}

export const Sveltish_Transition_nextRuleId = Sveltish_Helpers_makeIdGenerator();

export function Sveltish_Transition_toEmptyStr(s) {
    if (isNullOrEmpty(s)) {
        return "";
    }
    else {
        return s;
    }
}

export function Sveltish_Transition_createRule(node, a, b, trfn, uid) {
    let matchValue, arg20, arg10, arg10_1, arg10_4, list;
    const tr = trfn();
    Sveltish_Transition_registerDoc(Sveltish_DOM_documentOf(node));
    const durn = Sveltish_Transition_overrideDuration((matchValue = tr.DurationFn, (matchValue == null) ? tr.Duration : matchValue(a)));
    let keyframes = singleton("{\n");
    const enumerator = getEnumerator(ofSeq(rangeNumber(0, 16.666 / durn, 1)));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const p = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const t = a + ((b - a) * tr.Ease(p));
            keyframes = append(keyframes, singleton((arg20 = tr.Css(t, 1 - t), (arg10 = (p * 100), toText(printf("%f%%{%s}\n"))(arg10)(arg20)))));
        }
    }
    finally {
        enumerator.Dispose();
    }
    const rule = join("", append(keyframes, singleton((arg10_1 = tr.Css(b, 1 - b), toText(printf("100%% {%s}\n"))(arg10_1)))));
    let name;
    const arg10_2 = ((uid === 0) ? Sveltish_Transition_nextRuleId() : uid) | 0;
    name = toText(printf("__sveltish_%d"))(arg10_2);
    const keyframeText = toText(printf("@keyframes %s %s"))(name)(rule);
    Sveltish_Transition_log((arg10_4 = head((list = keyframes, skip(~(~(length(keyframes) / 2)), list))), toText(printf("keyframe: %s"))(arg10_4)));
    Sveltish_Transition_log(toText(interpolate("createRule %P() %P()ms for %P()", [name, durn, Sveltish_DOM_nodeStr(node)])));
    const stylesheet = Sveltish_Transition_getSveltishStylesheet(Sveltish_DOM_documentOf(node));
    const value = stylesheet.insertRule(keyframeText, stylesheet.cssRules.length);
    void value;
    const animations = append(isNullOrEmpty((node.style).animation) ? empty() : singleton((node.style).animation), singleton(toText(printf("%s %fms linear %fms 1 both"))(name)(durn)(tr.Delay)));
    (node.style).animation = join(", ", animations);
    Sveltish_Transition_numActiveAnimations(Sveltish_Transition_numActiveAnimations() + 1, true);
    return name;
}

export function Sveltish_Transition_clearAnimations(node) {
    (node.style).animation = "";
}

export function Sveltish_Transition_clearRules() {
    const value = window.requestAnimationFrame((_arg1) => {
        let arg10;
        if (Sveltish_Transition_numActiveAnimations() === 0) {
            const enumerator = getEnumerator(Sveltish_Transition_activeDocs());
            try {
                while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                    const stylesheet = Sveltish_Transition_getSveltishStylesheet(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()[1]);
                    Sveltish_Transition_log((arg10 = ((~(~stylesheet.cssRules.length)) | 0), toText(printf("clearing %d rules"))(arg10)));
                    const enumerator_1 = getEnumerator(ofSeq(rangeNumber((~(~stylesheet.cssRules.length)) - 1, -1, 0)));
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
        Sveltish_Transition_activeDocs(empty_1(), true);
    });
    void value;
}

export function Sveltish_Transition_deleteRule(node, name) {
    const previous = Sveltish_Transition_toEmptyStr((node.style).animation).split(",");
    const next = previous.filter(isNullOrEmpty(name) ? ((anim) => (anim.indexOf(name) < 0)) : ((anim_1) => (anim_1.indexOf("__sveltish") < 0)));
    const deleted = (previous.length - next.length) | 0;
    if (deleted > 0) {
        (node.style).animation = join(", ", map_1((s) => s.trim(), next));
        Sveltish_Transition_numActiveAnimations(Sveltish_Transition_numActiveAnimations() - deleted, true);
        if (Sveltish_Transition_numActiveAnimations() === 0) {
            Sveltish_Transition_clearRules();
        }
    }
}

export function Sveltish_Transition_fade(props, node) {
    let inputRecord;
    const tr = Sveltish_Transition_applyProps(props, (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, Sveltish_Transition_Easing_linear(), inputRecord.Css, inputRecord.Tick)));
    return () => (new Sveltish_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t, _arg1) => {
        const arg10 = t * Sveltish_Transition_computedStyleOpacity(node);
        return toText(printf("opacity: %f"))(arg10);
    }, tr.Tick));
}

export function Sveltish_Transition_parseFloat(s, name) {
    if (s == null) {
        return 0;
    }
    else {
        let patternInput;
        let outArg = 0;
        patternInput = [tryParse(replace(s, "px", ""), new FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (patternInput[0]) {
            return patternInput[1];
        }
        else {
            return 0;
        }
    }
}

export function Sveltish_Transition_slide(props, node) {
    let inputRecord;
    const tr = Sveltish_Transition_applyProps(props, (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, Sveltish_Transition_Easing_cubicOut, inputRecord.Css, inputRecord.Tick)));
    const style = window.getComputedStyle(node);
    const opacity = Sveltish_Transition_parseFloat(style.opacity, "opacity");
    const height = Sveltish_Transition_parseFloat(style.height, "height");
    const padding_top = Sveltish_Transition_parseFloat(style.paddingTop, "paddingTop");
    const padding_bottom = Sveltish_Transition_parseFloat(style.paddingBottom, "paddingBottom");
    const margin_top = Sveltish_Transition_parseFloat(style.marginTop, "marginTop");
    const margin_bottom = Sveltish_Transition_parseFloat(style.marginBottom, "marginBottom");
    const border_top_width = Sveltish_Transition_parseFloat(style.borderTopWidth, "borderTopWidth");
    const border_bottom_width = Sveltish_Transition_parseFloat(style.borderBottomWidth, "borderBottomWidth");
    return () => (new Sveltish_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, _arg1) => join("", map_2((tupledArg) => toText(printf("%s: %s%s;"))(tupledArg[0])(tupledArg[1])(tupledArg[2]), ofArray([["overflow", "hidden", ""], ["opacity", (min(comparePrimitives, t_1 * 20, 1) * opacity).toString(), ""], ["height", (t_1 * height).toString(), "px"], ["padding-top", (t_1 * padding_top).toString(), "px"], ["padding-bottom", (t_1 * padding_bottom).toString(), "px"], ["margin-top", (t_1 * margin_top).toString(), "px"], ["margin-bottom", (t_1 * margin_bottom).toString(), "px"], ["border-top-width", (t_1 * border_top_width).toString(), "px"], ["border-bottom-width", (t_1 * border_bottom_width).toString(), "px"]]))), tr.Tick));
}

export function Sveltish_Transition_draw(props, node) {
    let inputRecord;
    const tr = Sveltish_Transition_applyProps(props, (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 800, inputRecord.DurationFn, inputRecord.Speed, Sveltish_Transition_Easing_cubicInOut, inputRecord.Css, inputRecord.Tick)));
    const len = node.getTotalLength();
    let duration;
    const matchValue = tr.Duration;
    duration = ((matchValue === 0) ? ((tr.Speed === 0) ? 800 : (len / tr.Speed)) : matchValue);
    return () => (new Sveltish_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg20 = u * len;
        const arg10 = t_1 * len;
        return toText(printf("stroke-dasharray: %f %f"))(arg10)(arg20);
    }, tr.Tick));
}

export function Sveltish_Transition_fly(props, node) {
    let inputRecord;
    const tr = Sveltish_Transition_applyProps(props, (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, Sveltish_Transition_Easing_cubicOut, inputRecord.Css, inputRecord.Tick)));
    const style = window.getComputedStyle(node);
    const targetOpacity = Sveltish_Transition_computedStyleOpacity(node);
    const transform = (style.transform === "none") ? "" : style.transform;
    const od = targetOpacity * (1 - tr.Opacity);
    return () => (new Sveltish_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg40 = targetOpacity - (od * u);
        const arg30 = (1 - t_1) * tr.Y;
        const arg20 = (1 - t_1) * tr.X;
        return toText(printf("transform: %s translate(%fpx, %fpx); opacity: %f;"))(transform)(arg20)(arg30)(arg40);
    }, tr.Tick));
}

export function Sveltish_Transition_crossfade(userProps) {
    let tupledArg_2, clo1_2, tupledArg_3, clo1_3;
    const toReceive = new Map([]);
    const toSend = new Map([]);
    const transition = (tupledArg_1) => {
        const items = tupledArg_1[0];
        const counterparts = tupledArg_1[1];
        const intro_1 = tupledArg_1[2];
        return (props_1) => ((node_1) => {
            const key = Sveltish_Transition_applyProps(props_1, Sveltish_Transition_Transition_get_Default()).Key;
            const r = node_1.getBoundingClientRect();
            const action = intro_1 ? "receiving" : "sending";
            Sveltish_Transition_log(toText(interpolate("%P() %P() (adding)", [action, key])));
            items.set(key, r);
            return () => {
                let inputRecord, arg40, arg30, arg20, arg10, matchValue;
                if (counterparts.has(key)) {
                    const rect = getItemFromDict(counterparts, key);
                    Sveltish_Transition_log(toText(interpolate("%P() %P() (removing from counterparts)", [action, key])));
                    const value = counterparts.delete(key);
                    void value;
                    const tupledArg = [rect, node_1, props_1, intro_1];
                    const from = tupledArg[0];
                    const node = tupledArg[1];
                    const tr_2 = Sveltish_Transition_applyProps(userProps, Sveltish_Transition_applyProps(tupledArg[2], (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, inputRecord.Delay, inputRecord.Duration, (d_1) => (Math.sqrt(d_1) * 30), inputRecord.Speed, Sveltish_Transition_Easing_cubicOut, inputRecord.Css, inputRecord.Tick))));
                    const tgt = node.getBoundingClientRect();
                    const dx = from.left - tgt.left;
                    const dy = from.top - tgt.top;
                    const dw = from.width / tgt.width;
                    const dh = from.height / tgt.height;
                    Sveltish_Transition_log((arg40 = tgt.top, (arg30 = tgt.left, (arg20 = from.top, (arg10 = from.left, toText(printf("crossfade from %f,%f -\u003e %f,%f"))(arg10)(arg20)(arg30)(arg40))))));
                    const d_2 = Math.sqrt((dx * dx) + (dy * dy));
                    const style = window.getComputedStyle(node);
                    const transform = (style.transform === "none") ? "" : style.transform;
                    const opacity = Sveltish_Transition_computedStyleOpacity(node);
                    return new Sveltish_Transition_Transition(tr_2.Key, tr_2.X, tr_2.Y, tr_2.Opacity, tr_2.Delay, (matchValue = tr_2.DurationFn, (matchValue == null) ? tr_2.Duration : matchValue(d_2)), void 0, tr_2.Speed, tr_2.Ease, (t_1, u) => {
                        const arg60 = t_1 + ((1 - t_1) * dh);
                        const arg50 = t_1 + ((1 - t_1) * dw);
                        const arg40_1 = u * dy;
                        const arg30_1 = u * dx;
                        const arg10_1 = t_1 * opacity;
                        return toText(printf("\r\n                      opacity: %f;\r\n                      transform-origin: top left;\r\n                      transform: %s translate(%fpx,%fpx) scale(%f, %f);"))(arg10_1)(transform)(arg30_1)(arg40_1)(arg50)(arg60);
                    }, tr_2.Tick);
                }
                else {
                    const value_1 = items.delete(key);
                    void value_1;
                    Sveltish_Transition_log(toText(interpolate("%P() falling back for %P()", [action, key])));
                    return Sveltish_Transition_fade(props_1, node_1)();
                }
            };
        });
    };
    return [(tupledArg_2 = [toSend, toReceive, false], (clo1_2 = transition([tupledArg_2[0], tupledArg_2[1], tupledArg_2[2]]), (arg10_2) => {
        const clo2_2 = clo1_2(arg10_2);
        return (arg20_2) => {
            const clo3_2 = clo2_2(arg20_2);
            return clo3_2;
        };
    })), (tupledArg_3 = [toReceive, toSend, true], (clo1_3 = transition([tupledArg_3[0], tupledArg_3[1], tupledArg_3[2]]), (arg10_3) => {
        const clo2_3 = clo1_3(arg10_3);
        return (arg20_3) => {
            const clo3_3 = clo2_3(arg20_3);
            return clo3_3;
        };
    }))];
}

export class Sveltish_Transition_Animation extends Record {
    constructor(From, To) {
        super();
        this.From = From;
        this.To = To;
    }
}

export function Sveltish_Transition_Animation$reflection() {
    return record_type("Sveltish.Transition.Animation", [], Sveltish_Transition_Animation, () => [["From", class_type("Browser.Types.ClientRect")], ["To", class_type("Browser.Types.ClientRect")]]);
}

export function Sveltish_Transition_flip(node, animation, props) {
    let inputRecord, matchValue;
    const tr = Sveltish_Transition_applyProps(props, (inputRecord = Sveltish_Transition_Transition_get_Default(), new Sveltish_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, inputRecord.Duration, (d) => (Math.sqrt(d) * 120), inputRecord.Speed, Sveltish_Transition_Easing_cubicOut, inputRecord.Css, inputRecord.Tick)));
    const style = window.getComputedStyle(node);
    const transform = (style.transform === "none") ? "" : style.transform;
    const dx = (animation.From.left - animation.To.left) / (animation.From.width / node.clientWidth);
    const dy = (animation.From.top - animation.To.top) / (animation.From.height / node.clientHeight);
    const d_1 = Math.sqrt((dx * dx) + (dy * dy));
    Sveltish_Transition_log(toText(interpolate("flip: %P(),%P() %P() %P() -\u003e %P()", [dx, dy, transform, animation.From, animation.To])));
    return new Sveltish_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, (matchValue = tr.DurationFn, (matchValue != null) ? matchValue(d_1) : tr.Duration), void 0, tr.Speed, tr.Ease, (_t, u) => {
        const arg30 = u * dy;
        const arg20 = u * dx;
        return toText(printf("transform: %s translate(%fpx, %fpx);`"))(transform)(arg20)(arg30);
    }, tr.Tick);
}

export function Sveltish_Transition_createAnimation(node, from, animateFn, props) {
    const tgt = node.getBoundingClientRect();
    const shouldCreate = (!(from == null)) ? (!((((from.left === tgt.left) ? (from.right === tgt.right) : false) ? (from.top === tgt.top) : false) ? (from.bottom === tgt.bottom) : false)) : false;
    let a;
    const arg10 = new Sveltish_Transition_Animation(from, tgt);
    a = animateFn(node, arg10, props);
    const r = new Sveltish_Transition_Transition(a.Key, a.X, a.Y, a.Opacity, a.Delay, ((a.Duration === 0) ? (a.DurationFn == null) : false) ? 300 : a.Duration, a.DurationFn, a.Speed, a.Ease, a.Css, a.Tick);
    if (shouldCreate) {
        return Sveltish_Transition_createRule(node, 0, 1, () => r, 0);
    }
    else {
        return "";
    }
}

export function Sveltish_Transition_waitAnimationEnd(tag, el, f) {
    const cb = (_arg1) => {
        el.removeEventListener("animationend", cb);
        f();
    };
    el.addEventListener("animationend", cb);
}

export function Sveltish_Transition_animateNode(node, from) {
    Sveltish_Transition_waitAnimationFrame(toText(interpolate("animateNode %P() %P() %P()", [Sveltish_DOM_nodeStr(node), Sveltish_DOM_rectStr(from), Sveltish_DOM_rectStr(node.getBoundingClientRect())])), () => {
        Sveltish_Transition_log("animateNode: start");
        const name = Sveltish_Transition_createAnimation(node, from, Sveltish_Transition_flip, empty());
        Sveltish_Transition_log(toText(interpolate("Animation is %P()", [name])));
        Sveltish_Transition_waitAnimationEnd("deleteRule", node, () => {
            Sveltish_Transition_log("animateNode: end");
            Sveltish_Transition_deleteRule(node, name);
        });
    });
}

export function Sveltish_Transition_transitionNode(el, trans, transProps, isVisible, start, complete) {
    let ruleName = "";
    const tr = bind((x) => {
        switch (x.tag) {
            case 1: {
                if (isVisible) {
                    return x.fields[0];
                }
                else {
                    return void 0;
                }
            }
            case 2: {
                if (isVisible) {
                    return void 0;
                }
                else {
                    return x.fields[0];
                }
            }
            case 3: {
                if (isVisible) {
                    return x.fields[0][0];
                }
                else {
                    return x.fields[0][1];
                }
            }
            default: {
                return x.fields[0];
            }
        }
    }, trans);
    if (tr != null) {
        const trProps = tr[1];
        const tr_1 = tr[0];
        Sveltish_Transition_deleteRule(el, "");
        if (isVisible) {
            const trans_1 = tr_1(append(transProps, trProps))(el);
            Sveltish_Transition_waitAnimationFrame("show", () => {
                start(el);
                Sveltish_Transition_waitAnimationEnd("show", el, () => {
                    Sveltish_Transition_log(toText(interpolate("show %P()", [Sveltish_DOM_nodeStr(el)])));
                    Sveltish_Styling_showEl(el, true);
                    complete(el);
                    Sveltish_Transition_deleteRule(el, ruleName);
                });
                Sveltish_Styling_showEl(el, true);
                ruleName = Sveltish_Transition_createRule(el, 0, 1, trans_1, 0);
            });
        }
        else {
            const trans_2 = tr_1(transProps)(el);
            Sveltish_Transition_waitAnimationFrame("hide", () => {
                start(el);
                Sveltish_Transition_waitAnimationEnd("hide", el, () => {
                    Sveltish_Transition_log(toText(interpolate("hide %P()", [Sveltish_DOM_nodeStr(el)])));
                    Sveltish_Styling_showEl(el, false);
                    complete(el);
                    Sveltish_Transition_deleteRule(el, ruleName);
                });
                ruleName = Sveltish_Transition_createRule(el, 1, 0, trans_2, 0);
            });
        }
    }
    else {
        Sveltish_Styling_showEl(el, isVisible);
        complete(el);
    }
}

export class Sveltish_Transition_Hideable extends Record {
    constructor(predicate, element, transOpt) {
        super();
        this.predicate = predicate;
        this.element = element;
        this.transOpt = transOpt;
    }
}

export function Sveltish_Transition_Hideable$reflection() {
    return record_type("Sveltish.Transition.Hideable", [], Sveltish_Transition_Hideable, () => [["predicate", class_type("System.IObservable`1", [bool_type])], ["element", lambda_type(Sveltish_DOM_BuildContext$reflection(), Sveltish_DOM_BuildResult$reflection())], ["transOpt", option_type(Sveltish_Transition_TransitionAttribute$reflection())]]);
}

export class Sveltish_Transition_HideableRuntime extends Record {
    constructor(hideable, target, cache, unsubscribe) {
        super();
        this.hideable = hideable;
        this.target = target;
        this.cache = cache;
        this.unsubscribe = unsubscribe;
    }
}

export function Sveltish_Transition_HideableRuntime$reflection() {
    return record_type("Sveltish.Transition.HideableRuntime", [], Sveltish_Transition_HideableRuntime, () => [["hideable", Sveltish_Transition_Hideable$reflection()], ["target", class_type("Browser.Types.Node")], ["cache", bool_type], ["unsubscribe", class_type("System.IDisposable")]]);
}

export function Sveltish_Transition_createHideableRuntime(h) {
    return new Sveltish_Transition_HideableRuntime(h, null, false, null);
}

export function Sveltish_Transition_transitionList(list, ctx) {
    const enumerator = getEnumerator(map_2(Sveltish_Transition_createHideableRuntime, list));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const rt = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            rt.unsubscribe = Sveltish_Store_subscribe(rt.hideable.predicate, (show) => {
                if (rt.target == null) {
                    rt.target = Sveltish_DOM_buildSolitary(rt.hideable.element, ctx);
                    rt.cache = (!show);
                }
                if (rt.cache !== show) {
                    rt.cache = show;
                    Sveltish_Transition_transitionNode(rt.target, rt.hideable.transOpt, empty(), show, (value) => {
                        void value;
                    }, (value_1) => {
                        void value_1;
                    });
                }
            });
        }
    }
    finally {
        enumerator.Dispose();
    }
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Transition_makeHideable(guard, element, transOpt) {
    return new Sveltish_Transition_Hideable(guard, element, transOpt);
}

export function Sveltish_Transition_transitionMatch(store, options) {
    const list_1 = map_2((tupledArg) => Sveltish_Transition_makeHideable(Sveltish_Store_map(tupledArg[0], store), tupledArg[1], tupledArg[2]), options);
    return (ctx) => Sveltish_Transition_transitionList(list_1, ctx);
}

export function Sveltish_Transition_transitionOpt(trans, store, element, elseElement, ctx) {
    let target = null;
    let cache = false;
    let targetElse = null;
    const unsub = Sveltish_Store_subscribe(store, (isVisible) => {
        if (target == null) {
            target = Sveltish_DOM_buildSolitary(element, ctx);
            cache = (!isVisible);
            if (elseElement == null) {
            }
            else {
                const e = elseElement;
                targetElse = Sveltish_DOM_buildSolitary(e, ctx);
            }
        }
        if (cache !== isVisible) {
            cache = isVisible;
            Sveltish_Transition_transitionNode(target, trans, empty(), isVisible, (value) => {
                void value;
            }, (value_1) => {
                void value_1;
            });
            if (!(targetElse == null)) {
                Sveltish_Transition_transitionNode(targetElse, trans, empty(), !isVisible, (value_2) => {
                    void value_2;
                }, (value_3) => {
                    void value_3;
                });
            }
        }
    });
    return Sveltish_DOM_unitResult();
}

export function Sveltish_Transition_transition(trans, store, element) {
    return (ctx) => Sveltish_Transition_transitionOpt(trans, store, element, void 0, ctx);
}

export function Sveltish_Transition_transitionElse(trans, store, element, otherElement) {
    return (ctx) => Sveltish_Transition_transitionOpt(trans, store, element, otherElement, ctx);
}

export function Sveltish_Transition_showIf(store, element) {
    return (ctx) => Sveltish_Transition_transitionOpt(void 0, store, element, void 0, ctx);
}

export function Sveltish_Transition_showIfElse(store, element, otherElement) {
    return (ctx) => Sveltish_Transition_transitionOpt(void 0, store, element, otherElement, ctx);
}


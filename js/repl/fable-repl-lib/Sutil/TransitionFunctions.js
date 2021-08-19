import { Sutil_Logging_log } from "./Logging.js";
import { tryParse } from "../../fable-library/Double.js";
import { interpolate, join, printf, toText, replace } from "../../fable-library/String.js";
import { FSharpRef } from "../../fable-library/Types.js";
import { Sutil_Transition_Transition, Sutil_Transition_Transition_get_Default, Sutil_Transition_applyProps } from "./Transition.js";
import { Sutil_Easing_cubicInOut, Sutil_Easing_cubicOut, Sutil_Easing_linear } from "./Easing.js";
import { Sutil_DOM_computedStyleOpacity } from "./DOM.js";
import { Sutil_Interop_Window_getComputedStyle_Z5966C024 } from "./Interop.js";
import { ofArray, map } from "../../fable-library/List.js";
import { curry, comparePrimitives, min } from "../../fable-library/Util.js";
import { getItemFromDict } from "../../fable-library/MapUtil.js";

export const Sutil_TransitionFunctions_log = (message) => {
    Sutil_Logging_log("trfn", message);
};

export function Sutil_TransitionFunctions_parseFloat(s, name) {
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

export function Sutil_TransitionFunctions_fade(initProps, node, unitVar0) {
    let inputRecord;
    const tr = Sutil_Transition_applyProps(initProps, (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, Sutil_Easing_linear(), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback)));
    return new Sutil_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t, _arg1) => {
        const arg10 = t * Sutil_DOM_computedStyleOpacity(node);
        return toText(printf("opacity: %f"))(arg10);
    }, tr.Tick, tr.Fallback);
}

export function Sutil_TransitionFunctions_slide(props, node) {
    let inputRecord;
    const tr = Sutil_Transition_applyProps(props, (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, (t) => Sutil_Easing_cubicOut(t), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback)));
    const style = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
    const opacity = Sutil_TransitionFunctions_parseFloat(style.opacity, "opacity");
    const height = Sutil_TransitionFunctions_parseFloat(style.height, "height");
    const padding_top = Sutil_TransitionFunctions_parseFloat(style.paddingTop, "paddingTop");
    const padding_bottom = Sutil_TransitionFunctions_parseFloat(style.paddingBottom, "paddingBottom");
    const margin_top = Sutil_TransitionFunctions_parseFloat(style.marginTop, "marginTop");
    const margin_bottom = Sutil_TransitionFunctions_parseFloat(style.marginBottom, "marginBottom");
    const border_top_width = Sutil_TransitionFunctions_parseFloat(style.borderTopWidth, "borderTopWidth");
    const border_bottom_width = Sutil_TransitionFunctions_parseFloat(style.borderBottomWidth, "borderBottomWidth");
    return () => (new Sutil_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, _arg1) => join("", map((tupledArg) => toText(printf("%s: %s%s;"))(tupledArg[0])(tupledArg[1])(tupledArg[2]), ofArray([["overflow", "hidden", ""], ["opacity", (min((x, y) => comparePrimitives(x, y), t_1 * 20, 1) * opacity).toString(), ""], ["height", (t_1 * height).toString(), "px"], ["padding-top", (t_1 * padding_top).toString(), "px"], ["padding-bottom", (t_1 * padding_bottom).toString(), "px"], ["margin-top", (t_1 * margin_top).toString(), "px"], ["margin-bottom", (t_1 * margin_bottom).toString(), "px"], ["border-top-width", (t_1 * border_top_width).toString(), "px"], ["border-bottom-width", (t_1 * border_bottom_width).toString(), "px"]]))), tr.Tick, tr.Fallback));
}

export function Sutil_TransitionFunctions_draw(props, node) {
    let inputRecord;
    const tr = Sutil_Transition_applyProps(props, (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, 0, 800, inputRecord.DurationFn, inputRecord.Speed, (t) => Sutil_Easing_cubicInOut(t), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback)));
    const len = node.getTotalLength();
    let duration;
    const matchValue = tr.Duration;
    duration = ((matchValue === 0) ? ((tr.Speed === 0) ? 800 : (len / tr.Speed)) : matchValue);
    return () => (new Sutil_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg20 = u * len;
        const arg10 = t_1 * len;
        return toText(printf("stroke-dasharray: %f %f"))(arg10)(arg20);
    }, tr.Tick, tr.Fallback));
}

export function Sutil_TransitionFunctions_fly(props, node) {
    let inputRecord;
    const tr = Sutil_Transition_applyProps(props, (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, 0, 0, inputRecord.Opacity, 0, 400, inputRecord.DurationFn, inputRecord.Speed, (t) => Sutil_Easing_cubicOut(t), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback)));
    const style = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
    const targetOpacity = Sutil_DOM_computedStyleOpacity(node);
    const transform = (style.transform === "none") ? "" : style.transform;
    const od = targetOpacity * (1 - tr.Opacity);
    return () => (new Sutil_Transition_Transition(tr.Key, tr.X, tr.Y, tr.Opacity, tr.Delay, tr.Duration, tr.DurationFn, tr.Speed, tr.Ease, (t_1, u) => {
        const arg40 = targetOpacity - (od * u);
        const arg30 = (1 - t_1) * tr.Y;
        const arg20 = (1 - t_1) * tr.X;
        return toText(printf("transform: %s translate(%fpx, %fpx); opacity: %f;"))(transform)(arg20)(arg30)(arg40);
    }, tr.Tick, tr.Fallback));
}

export function Sutil_TransitionFunctions_crossfade(userProps) {
    let tupledArg_3, clo1_2, tupledArg_4, clo1_3;
    const fallback = Sutil_Transition_applyProps(userProps, Sutil_Transition_Transition_get_Default()).Fallback;
    const toReceive = new Map([]);
    const toSend = new Map([]);
    const transition = (tupledArg_1) => {
        const items = tupledArg_1[0];
        const counterparts = tupledArg_1[1];
        const intro_1 = tupledArg_1[2];
        return (props_1) => ((node_1) => {
            const key = Sutil_Transition_applyProps(props_1, Sutil_Transition_Transition_get_Default()).Key;
            const r = node_1.getBoundingClientRect();
            const action = intro_1 ? "receiving" : "sending";
            Sutil_TransitionFunctions_log(toText(interpolate("%P() %P() (adding)", [action, key])));
            items.set(key, r);
            return () => {
                let inputRecord, arg40, arg30, arg20, arg10, matchValue;
                const finalProps = props_1;
                if (counterparts.has(key)) {
                    const rect = getItemFromDict(counterparts, key);
                    Sutil_TransitionFunctions_log(toText(interpolate("%P() %P() (removing from counterparts)", [action, key])));
                    void counterparts.delete(key);
                    const tupledArg_2 = [rect, node_1, finalProps, intro_1];
                    const tupledArg = [tupledArg_2[0], tupledArg_2[1], tupledArg_2[2], tupledArg_2[3]];
                    const from = tupledArg[0];
                    const node = tupledArg[1];
                    const tr_2 = Sutil_Transition_applyProps(userProps, Sutil_Transition_applyProps(tupledArg[2], (inputRecord = Sutil_Transition_Transition_get_Default(), new Sutil_Transition_Transition(inputRecord.Key, inputRecord.X, inputRecord.Y, inputRecord.Opacity, inputRecord.Delay, inputRecord.Duration, (d_1) => (Math.sqrt(d_1) * 30), inputRecord.Speed, (t) => Sutil_Easing_cubicOut(t), inputRecord.CssGen, inputRecord.Tick, inputRecord.Fallback))));
                    const tgt = node.getBoundingClientRect();
                    const dx = from.left - tgt.left;
                    const dy = from.top - tgt.top;
                    const dw = from.width / tgt.width;
                    const dh = from.height / tgt.height;
                    Sutil_TransitionFunctions_log((arg40 = tgt.top, (arg30 = tgt.left, (arg20 = from.top, (arg10 = from.left, toText(printf("crossfade from %f,%f -\u003e %f,%f"))(arg10)(arg20)(arg30)(arg40))))));
                    const d_2 = Math.sqrt((dx * dx) + (dy * dy));
                    const style = Sutil_Interop_Window_getComputedStyle_Z5966C024(node);
                    const transform = (style.transform === "none") ? "" : style.transform;
                    const opacity = Sutil_DOM_computedStyleOpacity(node);
                    return new Sutil_Transition_Transition(tr_2.Key, tr_2.X, tr_2.Y, tr_2.Opacity, tr_2.Delay, (matchValue = tr_2.DurationFn, (matchValue == null) ? tr_2.Duration : matchValue(d_2)), void 0, tr_2.Speed, tr_2.Ease, (t_1, u) => {
                        const arg60 = t_1 + ((1 - t_1) * dh);
                        const arg50 = t_1 + ((1 - t_1) * dw);
                        const arg40_1 = u * dy;
                        const arg30_1 = u * dx;
                        const arg10_1 = t_1 * opacity;
                        return toText(printf("\r\n                      opacity: %f;\r\n                      transform-origin: top left;\r\n                      transform: %s translate(%fpx,%fpx) scale(%f, %f);"))(arg10_1)(transform)(arg30_1)(arg40_1)(arg50)(arg60);
                    }, tr_2.Tick, tr_2.Fallback);
                }
                else {
                    void items.delete(key);
                    Sutil_TransitionFunctions_log(toText(interpolate("%P() falling back for %P()", [action, key])));
                    if (curry(3, fallback) == null) {
                        return Sutil_TransitionFunctions_fade(finalProps, node_1, void 0);
                    }
                    else {
                        return fallback(finalProps, node_1, void 0);
                    }
                }
            };
        });
    };
    return [(tupledArg_3 = [toSend, toReceive, false], (clo1_2 = transition([tupledArg_3[0], tupledArg_3[1], tupledArg_3[2]]), (arg10_2) => {
        const clo2_2 = clo1_2(arg10_2);
        return (arg20_2) => {
            const clo3_2 = clo2_2(arg20_2);
            return clo3_2;
        };
    })), (tupledArg_4 = [toReceive, toSend, true], (clo1_3 = transition([tupledArg_4[0], tupledArg_4[1], tupledArg_4[2]]), (arg10_3) => {
        const clo2_3 = clo1_3(arg10_3);
        return (arg20_3) => {
            const clo3_3 = clo2_3(arg20_3);
            return clo3_3;
        };
    }))];
}


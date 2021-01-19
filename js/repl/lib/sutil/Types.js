import { Record } from "../../fable-library/Types.js";
import { int32_type, record_type, bool_type } from "../../fable-library/Reflection.js";
import { createAtom } from "../../fable-library/Util.js";
import { interpolate, toText } from "../../fable-library/String.js";
import { concat, singleton, empty } from "../../fable-library/List.js";

export class Sveltish_DevToolsControl_SveltishOptions extends Record {
    constructor(SlowAnimations, LoggingEnabled) {
        super();
        this.SlowAnimations = SlowAnimations;
        this.LoggingEnabled = LoggingEnabled;
    }
}

export function Sveltish_DevToolsControl_SveltishOptions$reflection() {
    return record_type("Sveltish.DevToolsControl.SveltishOptions", [], Sveltish_DevToolsControl_SveltishOptions, () => [["SlowAnimations", bool_type], ["LoggingEnabled", bool_type]]);
}

export const Sveltish_DevToolsControl_Options = createAtom(new Sveltish_DevToolsControl_SveltishOptions(false, false));

export class Sveltish_DevToolsControl_Version extends Record {
    constructor(Major, Minor, Patch) {
        super();
        this.Major = (Major | 0);
        this.Minor = (Minor | 0);
        this.Patch = (Patch | 0);
    }
    toString() {
        const v = this;
        return toText(interpolate("%P().%P().%P()", [v.Major, v.Minor, v.Patch]));
    }
}

export function Sveltish_DevToolsControl_Version$reflection() {
    return record_type("Sveltish.DevToolsControl.Version", [], Sveltish_DevToolsControl_Version, () => [["Major", int32_type], ["Minor", int32_type], ["Patch", int32_type]]);
}

export function Sveltish_DevToolsControl_getControlBlock(doc) {
    return doc["__sveltish_cb"];
}

export function Sveltish_DevToolsControl_setControlBlock(doc, cb) {
    doc["__sveltish_cb"] = cb;
}

export function Sveltish_DevToolsControl_initialise(doc, controlBlock) {
    Sveltish_DevToolsControl_setControlBlock(doc, controlBlock);
}

export function Sveltish_Cmd_none() {
    return empty();
}

export function Sveltish_Cmd_ofMsg(msg) {
    return singleton((d) => {
        d(msg);
    });
}

export function Sveltish_Cmd_batch(cmds) {
    return concat(cmds);
}

export function Sveltish_Cmd_OfFunc_either(task, a, success, error) {
    return singleton((d) => {
        try {
            return d(success(task(a)));
        }
        catch (x) {
            return d(error(x));
        }
    });
}

export function Sveltish_Cmd_OfFunc_perform(task, a, success) {
    return singleton((d) => {
        try {
            d(success(task(a)));
        }
        catch (matchValue) {
        }
    });
}

export function Sveltish_Cmd_OfFunc_attempt(task, a, error) {
    return singleton((d) => {
        try {
            task(a);
        }
        catch (x) {
            d(error(x));
        }
    });
}


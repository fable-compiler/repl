import { Record } from "../../fable-library/Types.js";
import { int32_type, record_type, bool_type } from "../../fable-library/Reflection.js";
import { createAtom } from "../../fable-library/Util.js";
import { interpolate, toText } from "../../fable-library/String.js";
import Timer from "../../fable-library/Timer.js";
import { add } from "../../fable-library/Observable.js";
import { concat, singleton, map, empty } from "../../fable-library/List.js";
import { singleton as singleton_1 } from "../../fable-library/AsyncBuilder.js";
import { startImmediate, catchAsync } from "../../fable-library/Async.js";

export class Sutil_DevToolsControl_SutilOptions extends Record {
    constructor(SlowAnimations, LoggingEnabled) {
        super();
        this.SlowAnimations = SlowAnimations;
        this.LoggingEnabled = LoggingEnabled;
    }
}

export function Sutil_DevToolsControl_SutilOptions$reflection() {
    return record_type("Sutil.DevToolsControl.SutilOptions", [], Sutil_DevToolsControl_SutilOptions, () => [["SlowAnimations", bool_type], ["LoggingEnabled", bool_type]]);
}

export let Sutil_DevToolsControl_Options = createAtom(new Sutil_DevToolsControl_SutilOptions(false, false));

export class Sutil_DevToolsControl_Version extends Record {
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

export function Sutil_DevToolsControl_Version$reflection() {
    return record_type("Sutil.DevToolsControl.Version", [], Sutil_DevToolsControl_Version, () => [["Major", int32_type], ["Minor", int32_type], ["Patch", int32_type]]);
}

export function Sutil_DevToolsControl_getControlBlock(doc) {
    return doc["__sutil_cb"];
}

export function Sutil_DevToolsControl_setControlBlock(doc, cb) {
    doc["__sutil_cb"] = cb;
}

export function Sutil_DevToolsControl_initialise(doc, controlBlock) {
    Sutil_DevToolsControl_setControlBlock(doc, controlBlock);
}

export function Sutil_Timer_delay(interval, callback) {
    let t;
    let returnVal = new Timer(interval);
    returnVal.AutoReset = false;
    t = returnVal;
    add(callback, t.Elapsed());
    t.Enabled = true;
    t.Start();
}

export function Sutil_Cmd_none() {
    return empty();
}

export function Sutil_Cmd_map(f, cmd) {
    return map((g) => ((arg_1) => {
        g((arg) => {
            arg_1(f(arg));
        });
    }), cmd);
}

export function Sutil_Cmd_ofMsg(msg) {
    return singleton((d) => {
        d(msg);
    });
}

export function Sutil_Cmd_batch(cmds) {
    return concat(cmds);
}

export function Sutil_Cmd_OfFunc_either(task, a, success, error) {
    return singleton((d) => {
        try {
            return d(success(task(a)));
        }
        catch (x) {
            return d(error(x));
        }
    });
}

export function Sutil_Cmd_OfFunc_perform(task, a, success) {
    return singleton((d) => {
        try {
            d(success(task(a)));
        }
        catch (matchValue) {
        }
    });
}

export function Sutil_Cmd_OfFunc_attempt(task, a, error) {
    return singleton((d) => {
        try {
            task(a);
        }
        catch (x) {
            d(error(x));
        }
    });
}

export function Sutil_Cmd_OfAsyncWith_either(start, task, arg, ofSuccess, ofError) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg1) => {
            const r = _arg1;
            arg_1((r.tag === 1) ? ofError(r.fields[0]) : ofSuccess(r.fields[0]));
            return singleton_1.Zero();
        })));
    });
}

export function Sutil_Cmd_OfAsyncWith_perform(start, task, arg, ofSuccess) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg1) => {
            const r = _arg1;
            if (r.tag === 0) {
                arg_1(ofSuccess(r.fields[0]));
                return singleton_1.Zero();
            }
            else {
                return singleton_1.Zero();
            }
        })));
    });
}

export function Sutil_Cmd_OfAsyncWith_attempt(start, task, arg, ofError) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg1) => {
            const r = _arg1;
            if (r.tag === 1) {
                arg_1(ofError(r.fields[0]));
                return singleton_1.Zero();
            }
            else {
                return singleton_1.Zero();
            }
        })));
    });
}

export function Sutil_Cmd_OfAsyncWith_result(start, task) {
    return singleton((arg) => {
        start(singleton_1.Delay(() => singleton_1.Bind(task, (_arg1) => {
            arg(_arg1);
            return singleton_1.Zero();
        })));
    });
}

export function Sutil_Cmd_OfAsync_start(x) {
    Sutil_Timer_delay(0, (_arg1) => {
        startImmediate(x);
    });
}

export function Sutil_Cmd_OfPromise_either(task, arg, ofSuccess, ofError) {
    return singleton((dispatch) => {
        void task(arg).then((arg_1) => dispatch(ofSuccess(arg_1))).catch((arg_3) => dispatch(ofError(arg_3)));
    });
}

export function Sutil_Cmd_OfPromise_perform(task, arg, ofSuccess) {
    return singleton((dispatch) => {
        void task(arg).then((arg_1) => dispatch(ofSuccess(arg_1)));
    });
}

export function Sutil_Cmd_OfPromise_attempt(task, arg, ofError) {
    return singleton((dispatch) => {
        void task(arg).catch((arg_2) => {
            dispatch(ofError(arg_2));
        });
    });
}

export function Sutil_Cmd_OfPromise_result(task) {
    return singleton((dispatch) => {
        void task.then(dispatch);
    });
}


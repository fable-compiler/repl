import { singleton, concat, map, empty, iterate } from "../../fable-library/List.js";
import { singleton as singleton_1 } from "../../fable-library/AsyncBuilder.js";
import { startImmediate, catchAsync } from "../../fable-library/Async.js";
import { Elmish_Timer_delay } from "./prelude.js";

export function Elmish_Cmd_exec(onError, dispatch, cmd) {
    iterate((call) => {
        try {
            call(dispatch);
        }
        catch (ex) {
            onError(ex);
        }
    }, cmd);
}

export function Elmish_Cmd_none() {
    return empty();
}

export function Elmish_Cmd_map(f, cmd) {
    return map((g) => ((arg_1) => {
        g((arg) => {
            arg_1(f(arg));
        });
    }), cmd);
}

export function Elmish_Cmd_batch(cmds) {
    return concat(cmds);
}

export function Elmish_Cmd_ofSub(sub) {
    return singleton(sub);
}

export function Elmish_Cmd_OfFunc_either(task, arg, ofSuccess, ofError) {
    return singleton((dispatch) => {
        try {
            return dispatch(ofSuccess(task(arg)));
        }
        catch (x) {
            return dispatch(ofError(x));
        }
    });
}

export function Elmish_Cmd_OfFunc_perform(task, arg, ofSuccess) {
    return singleton((dispatch) => {
        try {
            dispatch(ofSuccess(task(arg)));
        }
        catch (x) {
        }
    });
}

export function Elmish_Cmd_OfFunc_attempt(task, arg, ofError) {
    return singleton((dispatch) => {
        try {
            task(arg);
        }
        catch (x) {
            dispatch(ofError(x));
        }
    });
}

export function Elmish_Cmd_OfFunc_result(msg) {
    return singleton((dispatch) => {
        dispatch(msg);
    });
}

export function Elmish_Cmd_OfAsyncWith_either(start, task, arg, ofSuccess, ofError) {
    return singleton((arg_1) => {
        start(singleton_1.Delay(() => singleton_1.Bind(catchAsync(task(arg)), (_arg1) => {
            const r = _arg1;
            arg_1((r.tag === 1) ? ofError(r.fields[0]) : ofSuccess(r.fields[0]));
            return singleton_1.Zero();
        })));
    });
}

export function Elmish_Cmd_OfAsyncWith_perform(start, task, arg, ofSuccess) {
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

export function Elmish_Cmd_OfAsyncWith_attempt(start, task, arg, ofError) {
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

export function Elmish_Cmd_OfAsyncWith_result(start, task) {
    return singleton((arg) => {
        start(singleton_1.Delay(() => singleton_1.Bind(task, (_arg1) => {
            arg(_arg1);
            return singleton_1.Zero();
        })));
    });
}

export function Elmish_Cmd_OfAsync_start(x) {
    Elmish_Timer_delay(0, (_arg1) => {
        startImmediate(x);
    });
}

export function Elmish_Cmd_OfAsync_either(task, arg, ofSuccess, ofError) {
    return Elmish_Cmd_OfAsyncWith_either((x) => {
        Elmish_Cmd_OfAsync_start(x);
    }, task, arg, ofSuccess, ofError);
}

export function Elmish_Cmd_OfAsync_perform(task, arg, ofSuccess) {
    return Elmish_Cmd_OfAsyncWith_perform((x) => {
        Elmish_Cmd_OfAsync_start(x);
    }, task, arg, ofSuccess);
}

export function Elmish_Cmd_OfAsync_attempt(task, arg, ofError) {
    return Elmish_Cmd_OfAsyncWith_attempt((x) => {
        Elmish_Cmd_OfAsync_start(x);
    }, task, arg, ofError);
}

export function Elmish_Cmd_OfAsync_result(task) {
    return Elmish_Cmd_OfAsyncWith_result((x) => {
        Elmish_Cmd_OfAsync_start(x);
    }, task);
}

export function Elmish_Cmd_OfAsyncImmediate_either(task, arg, ofSuccess, ofError) {
    return Elmish_Cmd_OfAsyncWith_either((arg00) => {
        startImmediate(arg00);
    }, task, arg, ofSuccess, ofError);
}

export function Elmish_Cmd_OfAsyncImmediate_perform(task, arg, ofSuccess) {
    return Elmish_Cmd_OfAsyncWith_perform((arg00) => {
        startImmediate(arg00);
    }, task, arg, ofSuccess);
}

export function Elmish_Cmd_OfAsyncImmediate_attempt(task, arg, ofError) {
    return Elmish_Cmd_OfAsyncWith_attempt((arg00) => {
        startImmediate(arg00);
    }, task, arg, ofError);
}

export function Elmish_Cmd_OfAsyncImmediate_result(task) {
    return Elmish_Cmd_OfAsyncWith_result((arg00) => {
        startImmediate(arg00);
    }, task);
}

export function Elmish_Cmd_OfPromise_either(task, arg, ofSuccess, ofError) {
    return singleton((dispatch) => {
        void task(arg).then((arg_1) => dispatch(ofSuccess(arg_1))).catch((arg_3) => dispatch(ofError(arg_3)));
    });
}

export function Elmish_Cmd_OfPromise_perform(task, arg, ofSuccess) {
    return singleton((dispatch) => {
        void task(arg).then((arg_1) => dispatch(ofSuccess(arg_1)));
    });
}

export function Elmish_Cmd_OfPromise_attempt(task, arg, ofError) {
    return singleton((dispatch) => {
        void task(arg).catch((arg_2) => {
            dispatch(ofError(arg_2));
        });
    });
}

export function Elmish_Cmd_OfPromise_result(task) {
    return singleton((dispatch) => {
        void task.then(dispatch);
    });
}

export function Elmish_Cmd_ofPromise(task, arg, ofSuccess, ofError) {
    return Elmish_Cmd_OfPromise_either(task, arg, ofSuccess, ofError);
}

export function Elmish_Cmd_ofMsg(msg) {
    return Elmish_Cmd_OfFunc_result(msg);
}

export function Elmish_Cmd_ofAsync(task, arg, ofSuccess, ofError) {
    return Elmish_Cmd_OfAsync_either(task, arg, ofSuccess, ofError);
}

export function Elmish_Cmd_ofFunc(task, arg, ofSuccess, ofError) {
    return Elmish_Cmd_OfFunc_either(task, arg, ofSuccess, ofError);
}

export function Elmish_Cmd_performFunc(task, arg, ofSuccess) {
    return Elmish_Cmd_OfFunc_perform(task, arg, ofSuccess);
}

export function Elmish_Cmd_attemptFunc(task, arg, ofError) {
    return Elmish_Cmd_OfFunc_attempt(task, arg, ofError);
}


import { Record } from "../../fable-library/Types.js";
import { record_type, class_type, string_type, tuple_type, list_type, lambda_type, unit_type } from "../../fable-library/Reflection.js";
import { Elmish_Cmd_exec, Elmish_Cmd_batch, Elmish_Cmd_none } from "./cmd.js";
import { Elmish_Log_toConsole, Elmish_Log_onError } from "./prelude.js";
import { curry, partialApply, uncurry } from "../../fable-library/Util.js";
import { ofArray } from "../../fable-library/List.js";
import { Elmish_RingBuffer$1__Pop, Elmish_RingBuffer$1__Push_2B595, Elmish_RingBuffer$1_$ctor_Z524259A4 } from "./ring.js";
import { value as value_1, some } from "../../fable-library/Option.js";
import { printf, toText } from "../../fable-library/String.js";

export class Elmish_Program$4 extends Record {
    constructor(init, update, subscribe, view, setState, onError, syncDispatch) {
        super();
        this.init = init;
        this.update = update;
        this.subscribe = subscribe;
        this.view = view;
        this.setState = setState;
        this.onError = onError;
        this.syncDispatch = syncDispatch;
    }
}

export function Elmish_Program$4$reflection(gen0, gen1, gen2, gen3) {
    return record_type("Elmish.Program`4", [gen0, gen1, gen2, gen3], Elmish_Program$4, () => [["init", lambda_type(gen0, tuple_type(gen1, list_type(lambda_type(lambda_type(gen2, unit_type), unit_type))))], ["update", lambda_type(gen2, lambda_type(gen1, tuple_type(gen1, list_type(lambda_type(lambda_type(gen2, unit_type), unit_type)))))], ["subscribe", lambda_type(gen1, list_type(lambda_type(lambda_type(gen2, unit_type), unit_type)))], ["view", lambda_type(gen1, lambda_type(lambda_type(gen2, unit_type), gen3))], ["setState", lambda_type(gen1, lambda_type(lambda_type(gen2, unit_type), unit_type))], ["onError", lambda_type(tuple_type(string_type, class_type("System.Exception")), unit_type)], ["syncDispatch", lambda_type(lambda_type(gen2, unit_type), lambda_type(gen2, unit_type))]]);
}

export function Elmish_ProgramModule_mkProgram(init, update, view) {
    return new Elmish_Program$4(init, update, (_arg1) => Elmish_Cmd_none(), view, (model, arg) => {
        void view(model, arg);
    }, (tupledArg) => {
        Elmish_Log_onError(tupledArg[0], tupledArg[1]);
    }, uncurry(2, (x) => x));
}

export function Elmish_ProgramModule_mkSimple(init, update, view) {
    return new Elmish_Program$4((arg) => [init(arg), Elmish_Cmd_none()], (msg, arg_1) => [update(msg, arg_1), Elmish_Cmd_none()], (_arg1) => Elmish_Cmd_none(), view, (model, arg_2) => {
        void view(model, arg_2);
    }, (tupledArg) => {
        Elmish_Log_onError(tupledArg[0], tupledArg[1]);
    }, uncurry(2, (x) => x));
}

export function Elmish_ProgramModule_withSubscription(subscribe, program) {
    return new Elmish_Program$4(program.init, program.update, (model) => Elmish_Cmd_batch(ofArray([program.subscribe(model), subscribe(model)])), program.view, program.setState, program.onError, program.syncDispatch);
}

export function Elmish_ProgramModule_withConsoleTrace(program) {
    return new Elmish_Program$4((arg) => {
        const patternInput = program.init(arg);
        const initModel = patternInput[0];
        Elmish_Log_toConsole("Initial state:", initModel);
        return [initModel, patternInput[1]];
    }, (msg, model) => {
        Elmish_Log_toConsole("New message:", msg);
        const patternInput_1 = program.update(msg, model);
        const newModel = patternInput_1[0];
        Elmish_Log_toConsole("Updated state:", newModel);
        return [newModel, patternInput_1[1]];
    }, program.subscribe, program.view, program.setState, program.onError, program.syncDispatch);
}

export function Elmish_ProgramModule_withTrace(trace, program) {
    return new Elmish_Program$4(program.init, (msg, model) => {
        const patternInput = program.update(msg, model);
        const state = patternInput[0];
        trace(msg, state);
        return [state, patternInput[1]];
    }, program.subscribe, program.view, program.setState, program.onError, program.syncDispatch);
}

export function Elmish_ProgramModule_withErrorHandler(onError, program) {
    return new Elmish_Program$4(program.init, program.update, program.subscribe, program.view, program.setState, onError, program.syncDispatch);
}

export function Elmish_ProgramModule_mapErrorHandler(map, program) {
    return new Elmish_Program$4(program.init, program.update, program.subscribe, program.view, program.setState, partialApply(1, map, [program.onError]), program.syncDispatch);
}

export function Elmish_ProgramModule_onError(program) {
    return program.onError;
}

export function Elmish_ProgramModule_withSetState(setState, program) {
    return new Elmish_Program$4(program.init, program.update, program.subscribe, program.view, setState, program.onError, program.syncDispatch);
}

export function Elmish_ProgramModule_setState(program) {
    return curry(2, program.setState);
}

export function Elmish_ProgramModule_view(program) {
    return curry(2, program.view);
}

export function Elmish_ProgramModule_withSyncDispatch(syncDispatch, program) {
    return new Elmish_Program$4(program.init, program.update, program.subscribe, program.view, program.setState, program.onError, syncDispatch);
}

export function Elmish_ProgramModule_map(mapInit, mapUpdate, mapView, mapSetState, mapSubscribe, program) {
    const init = partialApply(1, mapInit, [program.init]);
    const update = partialApply(2, mapUpdate, [program.update]);
    const view = partialApply(2, mapView, [program.view]);
    const setState = partialApply(2, mapSetState, [program.setState]);
    return new Elmish_Program$4(init, uncurry(2, update), partialApply(1, mapSubscribe, [program.subscribe]), uncurry(2, view), uncurry(2, setState), program.onError, uncurry(2, (x) => x));
}

export function Elmish_ProgramModule_runWith(arg, program) {
    const patternInput = program.init(arg);
    const model = patternInput[0];
    const rb = Elmish_RingBuffer$1_$ctor_Z524259A4(10);
    let reentered = false;
    let state = model;
    const dispatch = (msg) => {
        if (reentered) {
            Elmish_RingBuffer$1__Push_2B595(rb, msg);
        }
        else {
            reentered = true;
            let nextMsg = some(msg);
            while (nextMsg != null) {
                const msg_1 = value_1(nextMsg);
                try {
                    const patternInput_1 = program.update(msg_1, state);
                    const model$0027 = patternInput_1[0];
                    program.setState(model$0027, syncDispatch);
                    Elmish_Cmd_exec((ex) => {
                        program.onError([toText(printf("Error in command while handling: %A"))(msg_1), ex]);
                    }, syncDispatch, patternInput_1[1]);
                    state = model$0027;
                }
                catch (ex_1) {
                    program.onError([toText(printf("Unable to process the message: %A"))(msg_1), ex_1]);
                }
                nextMsg = Elmish_RingBuffer$1__Pop(rb);
            }
            reentered = false;
        }
    };
    const syncDispatch = partialApply(1, program.syncDispatch, [dispatch]);
    program.setState(model, syncDispatch);
    Elmish_Cmd_exec((ex_3) => {
        program.onError(["Error intitializing:", ex_3]);
    }, syncDispatch, Elmish_Cmd_batch(ofArray([(() => {
        try {
            return program.subscribe(model);
        }
        catch (ex_2) {
            program.onError(["Unable to subscribe:", ex_2]);
            return Elmish_Cmd_none();
        }
    })(), patternInput[1]])));
}

export function Elmish_ProgramModule_run(program) {
    Elmish_ProgramModule_runWith(void 0, program);
}


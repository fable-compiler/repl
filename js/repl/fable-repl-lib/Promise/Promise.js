import { Result_MapError, Result_Map, FSharpResult$2 } from "../../fable-library/Choice.js";
import { class_type } from "../../fable-library/Reflection.js";
import { getEnumerator } from "../../fable-library/Util.js";

export function Promise_tap(fn, a) {
    return a.then(((x) => {
        fn(x);
        return x;
    }));
}

export function Promise_result(a) {
    return a.then(((arg0) => (new FSharpResult$2(0, arg0)))).catch(((arg0_1) => (new FSharpResult$2(1, arg0_1))));
}

export function Promise_mapResult(fn, a) {
    return a.then(((result) => Result_Map(fn, result)));
}

export function Promise_bindResult(fn, a) {
    return a.then(((a_1) => {
        if (a_1.tag === 1) {
            return Promise.resolve((new FSharpResult$2(1, a_1.fields[0])));
        }
        else {
            const pr = fn(a_1.fields[0]);
            return pr.then(((arg0) => (new FSharpResult$2(0, arg0))));
        }
    }));
}

export function Promise_mapResultError(fn, a) {
    return a.then(((result) => Result_MapError(fn, result)));
}

export class Promise_PromiseBuilder {
    constructor() {
    }
}

export function Promise_PromiseBuilder$reflection() {
    return class_type("Promise.PromiseBuilder", void 0, Promise_PromiseBuilder);
}

export function Promise_PromiseBuilder_$ctor() {
    return new Promise_PromiseBuilder();
}

export function Promise_PromiseBuilder__For_1565554B(_, seq, body) {
    let pr;
    let p = Promise.resolve(undefined);
    const enumerator = getEnumerator(seq);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const a = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            p = ((pr = p, pr.then((() => body(a)))));
        }
    }
    finally {
        enumerator.Dispose();
    }
    return p;
}

export function Promise_PromiseBuilder__While_2044D34(this$, guard, p) {
    if (guard()) {
        return p.then((() => Promise_PromiseBuilder__While_2044D34(this$, guard, p)));
    }
    else {
        return Promise.resolve(undefined);
    }
}

export function Promise_PromiseBuilder__TryFinally_7D49A2FD(_, p, compensation) {
    return p.then(((x) => {
        compensation();
        return x;
    })).catch(((er) => {
        compensation();
        throw er;
    }));
}

export function Promise_PromiseBuilder__Delay_62FBFDE1(_, generator) {
    return {
        then: (onSuccess, onError) => {
            try {
                return generator().then(onSuccess, onError);
            }
            catch (er) {
                if (onError == null) {
                    return Promise.reject(er);
                }
                else {
                    try {
                        const a = onError(er);
                        return Promise.resolve(a);
                    }
                    catch (er_1) {
                        return Promise.reject(er_1);
                    }
                }
            }
        },
        catch: (onError_1) => {
            try {
                return generator().catch(onError_1);
            }
            catch (er_2) {
                try {
                    const a_1 = onError_1(er_2);
                    return Promise.resolve(a_1);
                }
                catch (er_3) {
                    return Promise.reject(er_3);
                }
            }
        },
    };
}

export function Promise_PromiseBuilder__Run_212F1D4B(_, p) {
    return p.then((x) => x);
}

export function Promise_PromiseBuilder__Using_74F7E79D(this$, resource, binder) {
    return Promise_PromiseBuilder__TryFinally_7D49A2FD(this$, binder(resource), () => {
        let copyOfStruct = resource;
        copyOfStruct.Dispose();
    });
}

export function Promise_PromiseBuilder__Source_212F1D4B(x, p) {
    return p;
}

export function Promise_PromiseBuilder__Source_Z6D8BD2B8(x, ps) {
    return ps;
}


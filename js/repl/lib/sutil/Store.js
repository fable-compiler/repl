import { Sveltish_ObservableStore_makeElmish, Sveltish_ObservableStore_makeElmishSimple, Sveltish_ObservableStore_makeStore } from "./ObservableStore.js";
import { filter, map as map_1, subscribe } from "../../fable-library/Observable.js";
import { some } from "../../fable-library/Option.js";

export function Sveltish_StoreHelpers_disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

export function Sveltish_Store_make(modelInit) {
    return Sveltish_ObservableStore_makeStore(() => modelInit, (m) => {
    });
}

export function Sveltish_Store_get(s) {
    return s.Value;
}

export function Sveltish_Store_set(s, v) {
    s.Update((_arg1) => v);
}

export function Sveltish_Store_subscribe(a, f) {
    return subscribe(f, a);
}

export function Sveltish_Store_map(f, s) {
    return map_1(f, s);
}

export function Sveltish_Store_filter(f, s) {
    return filter(f, s);
}

export function Sveltish_Store_current(o) {
    let value = null;
    subscribe((v) => {
        value = v;
    }, o).Dispose();
    return value;
}

export function Sveltish_Store_getMap(f, s) {
    return f(Sveltish_Store_get(s));
}

export function Sveltish_Store_write(f, s) {
    const unsub = Sveltish_Store_subscribe(s, f);
}

export function Sveltish_Store_modify(f, store) {
    Sveltish_Store_set(store, Sveltish_Store_getMap(f, store));
}

export function Sveltish_Store_subscribe2(a, b, callback) {
    let initState = 0;
    let cachea = null;
    let cacheb = null;
    const notify = () => {
        if (initState === 2) {
            callback([cachea, cacheb]);
        }
    };
    const unsuba = Sveltish_Store_subscribe(a, (v) => {
        if (initState === 0) {
            initState = 1;
        }
        cachea = v;
        notify();
    });
    const unsubb = Sveltish_Store_subscribe(b, (v_1) => {
        if (initState === 1) {
            initState = 2;
        }
        cacheb = v_1;
        notify();
    });
    if (initState !== 2) {
        console.log(some("Error: subscribe didn\u0027t initialize us"));
        throw (new Error("Subscribe didn\u0027t initialize us"));
    }
    return Sveltish_StoreHelpers_disposable(() => {
        unsuba.Dispose();
        unsubb.Dispose();
    });
}

export function Sveltish_Store_makeElmishSimple(init, update, dispose) {
    return Sveltish_ObservableStore_makeElmishSimple(init, update, dispose);
}

export function Sveltish_Store_makeElmish(init, update, dispose) {
    return Sveltish_ObservableStore_makeElmish(init, update, dispose);
}

export function Sveltish_StoreOperators_op_BarMinusGreater(s, f) {
    return Sveltish_Store_getMap(f, s);
}

export function Sveltish_StoreOperators_op_DotGreater(s, f) {
    return Sveltish_Store_map(f, s);
}

export function Sveltish_StoreOperators_op_LessTwiddle(s, v) {
    Sveltish_Store_set(s, v);
}

export function Sveltish_StoreOperators_op_LessTwiddleMinus(s, v) {
    Sveltish_Store_set(s, v);
}

export function Sveltish_StoreOperators_op_MinusTwiddleGreater(v, s) {
    Sveltish_Store_set(s, v);
}

export function Sveltish_StoreOperators_op_LessTwiddleEquals(store, map) {
    Sveltish_Store_modify(map, store);
}

export function Sveltish_StoreOperators_op_EqualsTwiddleGreater(map, store) {
    Sveltish_Store_modify(map, store);
}


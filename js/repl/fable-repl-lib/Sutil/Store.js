import { Sutil_ObservableStore_makeElmish, Sutil_ObservableStore_makeElmishSimple, Sutil_ObservableStore_makeStore } from "./ObservableStore.js";
import { map as map_1, subscribe } from "../../fable-library/Observable.js";
import { Sutil_Observable_zip, Sutil_Observable_distinctUntilChanged, Sutil_Observable_filter } from "./Observable.js";
import { some } from "../../fable-library/Option.js";
import { iterateIndexed } from "../../fable-library/List.js";
import { addToSet } from "../../fable-library/MapUtil.js";
import { fold } from "../../fable-library/Seq.js";

export function Sutil_StoreHelpers_disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

export function Sutil_Store_make(modelInit) {
    return Sutil_ObservableStore_makeStore(() => modelInit, (value) => {
    });
}

export function Sutil_Store_get(store) {
    return store.Value;
}

export function Sutil_Store_set(store, newValue) {
    store.Update((_arg1) => newValue);
}

export function Sutil_Store_subscribe(callback, store) {
    return subscribe(callback, store);
}

export function Sutil_Store_map(callback, store) {
    return map_1(callback, store);
}

export function Sutil_Store_filter(predicate, store) {
    return Sutil_Observable_filter(predicate, store);
}

export function Sutil_Store_distinct(source) {
    return Sutil_Observable_distinctUntilChanged(source);
}

export function Sutil_Store_zip(source1, source2) {
    return Sutil_Observable_zip(source1, source2);
}

export function Sutil_Store_current(store) {
    let value = null;
    subscribe((v) => {
        value = v;
    }, store).Dispose();
    return value;
}

export function Sutil_Store_getMap(callback, store) {
    return callback(Sutil_Store_get(store));
}

export function Sutil_Store_write(callback, store) {
    void Sutil_Store_subscribe(callback, store);
}

export function Sutil_Store_modify(callback, store) {
    Sutil_Store_set(store, Sutil_Store_getMap(callback, store));
}

export function Sutil_Store_subscribe2(source1, source2, callback) {
    let initState = 0;
    let cachea = null;
    let cacheb = null;
    const notify = () => {
        if (initState === 2) {
            callback([cachea, cacheb]);
        }
    };
    const unsuba = Sutil_Store_subscribe((v) => {
        if (initState === 0) {
            initState = 1;
        }
        cachea = v;
        notify();
    }, source1);
    const unsubb = Sutil_Store_subscribe((v_1) => {
        if (initState === 1) {
            initState = 2;
        }
        cacheb = v_1;
        notify();
    }, source2);
    if (initState !== 2) {
        console.log(some("Error: subscribe didn\u0027t initialize us"));
        throw (new Error("Subscribe didn\u0027t initialize us"));
    }
    return Sutil_StoreHelpers_disposable(() => {
        unsuba.Dispose();
        unsubb.Dispose();
    });
}

export function Sutil_Store_makeElmishSimple(init, update, dispose) {
    return Sutil_ObservableStore_makeElmishSimple(init, update, dispose);
}

export function Sutil_Store_makeElmish(init, update, dispose) {
    return Sutil_ObservableStore_makeElmish(init, update, dispose);
}

export function Sutil_StoreOperators_op_BarMinusGreater(s, f) {
    return Sutil_Store_getMap(f, s);
}

export function Sutil_StoreOperators_op_DotGreater(s, f) {
    return Sutil_Store_map(f, s);
}

export function Sutil_StoreOperators_op_LessTwiddle(s, v) {
    Sutil_Store_set(s, v);
}

export function Sutil_StoreOperators_op_LessTwiddleMinus(s, v) {
    Sutil_Store_set(s, v);
}

export function Sutil_StoreOperators_op_MinusTwiddleGreater(v, s) {
    Sutil_Store_set(s, v);
}

export function Sutil_StoreOperators_op_LessTwiddleEquals(store, map) {
    Sutil_Store_modify(map, store);
}

export function Sutil_StoreOperators_op_EqualsTwiddleGreater(map, store) {
    Sutil_Store_modify(map, store);
}

export function Sutil_StoreExtensions_firstOf(selectors) {
    const matches = new Set([]);
    let current = -1;
    const s = Sutil_Store_make(current);
    iterateIndexed((i_2, pred) => {
        const u = subscribe((state_2) => {
            const i = i_2 | 0;
            if (state_2) {
                void addToSet(i, matches);
            }
            else {
                void matches.delete(i);
            }
            const next = fold((a, i_1) => {
                if ((a < 0) ? true : (i_1 < a)) {
                    return i_1 | 0;
                }
                else {
                    return a | 0;
                }
            }, -1, matches) | 0;
            if (next !== current) {
                Sutil_StoreOperators_op_LessTwiddle(s, next);
                current = (next | 0);
            }
        }, pred);
    }, selectors);
    return s;
}


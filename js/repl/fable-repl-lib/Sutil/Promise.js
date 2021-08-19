import { Union } from "../../fable-library/Types.js";
import { union_type, class_type } from "../../fable-library/Reflection.js";
import { Sutil_StoreOperators_op_LessTwiddle, Sutil_Store_make } from "./Store.js";

export class Sutil_ObservablePromise_State$1 extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Waiting", "Result", "Error"];
    }
}

export function Sutil_ObservablePromise_State$1$reflection(gen0) {
    return union_type("Sutil.ObservablePromise.State`1", [gen0], Sutil_ObservablePromise_State$1, () => [[], [["Item", gen0]], [["Item", class_type("System.Exception")]]]);
}

export class Sutil_ObservablePromise_ObservablePromise$1 {
    constructor() {
        this.store = Sutil_Store_make(new Sutil_ObservablePromise_State$1(0));
    }
    Subscribe(observer) {
        const this$ = this;
        return this$.store.Subscribe(observer);
    }
}

export function Sutil_ObservablePromise_ObservablePromise$1$reflection(gen0) {
    return class_type("Sutil.ObservablePromise.ObservablePromise`1", [gen0], Sutil_ObservablePromise_ObservablePromise$1);
}

export function Sutil_ObservablePromise_ObservablePromise$1_$ctor() {
    return new Sutil_ObservablePromise_ObservablePromise$1();
}

export function Sutil_ObservablePromise_ObservablePromise$1__Run_56E03C9D(_, p) {
    let pr_1;
    Sutil_StoreOperators_op_LessTwiddle(_.store, new Sutil_ObservablePromise_State$1(0));
    void ((pr_1 = (p.then(((v) => {
        Sutil_StoreOperators_op_LessTwiddle(_.store, new Sutil_ObservablePromise_State$1(1, v));
    }))), pr_1.catch(((x) => {
        Sutil_StoreOperators_op_LessTwiddle(_.store, new Sutil_ObservablePromise_State$1(2, x));
    }))));
}


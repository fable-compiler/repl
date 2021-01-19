import { Union } from "../../fable-library/Types.js";
import { union_type, class_type } from "../../fable-library/Reflection.js";
import { Sveltish_StoreOperators_op_LessTwiddle, Sveltish_Store_make } from "./Store.js";

export class Sveltish_ObservablePromise_State$1 extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Waiting", "Result", "Error"];
    }
}

export function Sveltish_ObservablePromise_State$1$reflection(gen0) {
    return union_type("Sveltish.ObservablePromise.State`1", [gen0], Sveltish_ObservablePromise_State$1, () => [[], [["Item", gen0]], [["Item", class_type("System.Exception")]]]);
}

export class Sveltish_ObservablePromise_ObservablePromise$1 {
    constructor() {
        this.store = Sveltish_Store_make(new Sveltish_ObservablePromise_State$1(0));
    }
    Subscribe(observer) {
        const this$ = this;
        return this$.store.Subscribe(observer);
    }
}

export function Sveltish_ObservablePromise_ObservablePromise$1$reflection(gen0) {
    return class_type("Sveltish.ObservablePromise.ObservablePromise`1", [gen0], Sveltish_ObservablePromise_ObservablePromise$1);
}

export function Sveltish_ObservablePromise_ObservablePromise$1_$ctor() {
    return new Sveltish_ObservablePromise_ObservablePromise$1();
}

export function Sveltish_ObservablePromise_ObservablePromise$1__Run_56E03C9D(_, p) {
    Sveltish_StoreOperators_op_LessTwiddle(_.store, new Sveltish_ObservablePromise_State$1(0));
    let value;
    const pr_1 = p.then(((v) => {
        Sveltish_StoreOperators_op_LessTwiddle(_.store, new Sveltish_ObservablePromise_State$1(1, v));
    }));
    value = (pr_1.then(void 0, ((x) => {
        Sveltish_StoreOperators_op_LessTwiddle(_.store, new Sveltish_ObservablePromise_State$1(2, x));
    })));
    void value;
}


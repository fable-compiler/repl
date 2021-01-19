import { class_type } from "../../fable-library/Reflection.js";
import { subscribe } from "../../fable-library/Observable.js";
import { Sveltish_Helpers_disposable } from "./Helpers.js";
import { equals } from "../../fable-library/Util.js";

export class Sveltish_ObservableX_BasicObserver$1 {
    constructor() {
        this.stopped = false;
    }
    OnNext(value) {
        const x = this;
        if (!x.stopped) {
            x["Sveltish.ObservableX.BasicObserver`1.Next2B595"](value);
        }
    }
    OnError(e) {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sveltish.ObservableX.BasicObserver`1.Error229D3F39"](e);
        }
    }
    OnCompleted() {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sveltish.ObservableX.BasicObserver`1.Completed"]();
        }
    }
}

export function Sveltish_ObservableX_BasicObserver$1$reflection(gen0) {
    return class_type("Sveltish.ObservableX.BasicObserver`1", [gen0], Sveltish_ObservableX_BasicObserver$1);
}

export function Sveltish_ObservableX_BasicObserver$1_$ctor() {
    return new Sveltish_ObservableX_BasicObserver$1();
}

export function Sveltish_ObservableX_zip(a, b) {
    return {
        Subscribe(h) {
            let initState = 0;
            let valueA = null;
            let valueB = null;
            const notify = () => {
                if (initState === 2) {
                    h.OnNext([valueA, valueB]);
                }
            };
            const disposeA = subscribe((v) => {
                if (initState === 0) {
                    initState = 1;
                }
                valueA = v;
                notify();
            }, a);
            const disposeB = subscribe((v_1) => {
                if (initState === 1) {
                    initState = 2;
                }
                valueB = v_1;
                notify();
            }, b);
            return Sveltish_Helpers_disposable(() => {
                disposeA.Dispose();
                disposeB.Dispose();
            });
        },
    };
}

export function Sveltish_ObservableX_distinctUntilChangedCompare(source, eq) {
    return {
        Subscribe(h) {
            let value = null;
            const disposeA = subscribe((next) => {
                if (!eq(value, next)) {
                    h.OnNext(next);
                    value = next;
                }
            }, source);
            return Sveltish_Helpers_disposable(() => {
                disposeA.Dispose();
            });
        },
    };
}

export function Sveltish_ObservableX_distinctUntilChanged(source) {
    return Sveltish_ObservableX_distinctUntilChangedCompare(source, equals);
}


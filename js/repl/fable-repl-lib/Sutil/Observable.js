import { class_type } from "../../fable-library/Reflection.js";
import { subscribe } from "../../fable-library/Observable.js";
import { Sutil_Helpers_disposable } from "./Helpers.js";
import { equals } from "../../fable-library/Util.js";

export class Sutil_Observable_BasicObserver$1 {
    constructor() {
        this.stopped = false;
    }
    OnNext(value) {
        const x = this;
        if (!x.stopped) {
            x["Sutil.Observable.BasicObserver`1.Next2B595"](value);
        }
    }
    OnError(e) {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sutil.Observable.BasicObserver`1.Error229D3F39"](e);
        }
    }
    OnCompleted() {
        const x = this;
        if (!x.stopped) {
            x.stopped = true;
            x["Sutil.Observable.BasicObserver`1.Completed"]();
        }
    }
}

export function Sutil_Observable_BasicObserver$1$reflection(gen0) {
    return class_type("Sutil.Observable.BasicObserver`1", [gen0], Sutil_Observable_BasicObserver$1);
}

export function Sutil_Observable_BasicObserver$1_$ctor() {
    return new Sutil_Observable_BasicObserver$1();
}

export function Sutil_Observable_zip(a, b) {
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
            return Sutil_Helpers_disposable(() => {
                disposeA.Dispose();
                disposeB.Dispose();
            });
        },
    };
}

export function Sutil_Observable_distinctUntilChangedCompare(eq, source) {
    return {
        Subscribe(h) {
            let value = null;
            const disposeA = subscribe((next_1) => {
                if (!((!(value == null)) ? eq(value, next_1) : false)) {
                    h.OnNext(next_1);
                    value = next_1;
                }
            }, source);
            return Sutil_Helpers_disposable(() => {
                disposeA.Dispose();
            });
        },
    };
}

export function Sutil_Observable_distinctUntilChanged(source) {
    return Sutil_Observable_distinctUntilChangedCompare((x, y) => equals(x, y), source);
}

export function Sutil_Observable_exists(predicate, source) {
    return {
        Subscribe(h) {
            const disposeA = subscribe((x) => {
                try {
                    h.OnNext(predicate(x));
                }
                catch (ex) {
                    h.OnError(ex);
                }
            }, source);
            return Sutil_Helpers_disposable(() => {
                disposeA.Dispose();
            });
        },
    };
}

export function Sutil_Observable_filter(predicate, source) {
    return {
        Subscribe(h) {
            const disposeA = subscribe((x) => {
                try {
                    if (predicate(x)) {
                        h.OnNext(x);
                    }
                }
                catch (ex) {
                    h.OnError(ex);
                }
            }, source);
            return Sutil_Helpers_disposable(() => {
                disposeA.Dispose();
            });
        },
    };
}


import { Observer, protect } from "./Observable.js";
import { tryValueIfChoice1, tryValueIfChoice2, value } from "./Option.js";
import { iterate as seqIterate } from "./Seq.js";
export default class Event {
    constructor(_subscriber, delegates) {
        this._subscriber = _subscriber;
        this.delegates = delegates || new Array();
    }
    Add(f) {
        this._addHandler(f);
    }
    // IEvent<T> methods
    get Publish() {
        return this;
    }
    Trigger(value) {
        seqIterate((f) => f(value), this.delegates);
    }
    // IDelegateEvent<T> methods
    AddHandler(handler) {
        if (this._dotnetDelegates == null) {
            this._dotnetDelegates = new Map();
        }
        const f = (x) => handler(null, x);
        this._dotnetDelegates.set(handler, f);
        this._addHandler(f);
    }
    RemoveHandler(handler) {
        if (this._dotnetDelegates != null) {
            const f = this._dotnetDelegates.get(handler);
            if (f != null) {
                this._dotnetDelegates.delete(handler);
                this._removeHandler(f);
            }
        }
    }
    // IObservable<T> methods
    Subscribe(arg) {
        return typeof arg === "function"
            ? this._subscribeFromCallback(arg)
            : this._subscribeFromObserver(arg);
    }
    _addHandler(f) {
        this.delegates.push(f);
    }
    _removeHandler(f) {
        const index = this.delegates.indexOf(f);
        if (index > -1) {
            this.delegates.splice(index, 1);
        }
    }
    _subscribeFromObserver(observer) {
        if (this._subscriber) {
            return this._subscriber(observer);
        }
        const callback = observer.OnNext;
        this._addHandler(callback);
        return { Dispose: () => { this._removeHandler(callback); } };
    }
    _subscribeFromCallback(callback) {
        this._addHandler(callback);
        return { Dispose: () => { this._removeHandler(callback); } };
    }
}
export function add(callback, sourceEvent) {
    sourceEvent.Subscribe(new Observer(callback));
}
export function choose(chooser, sourceEvent) {
    const source = sourceEvent;
    return new Event((observer) => source.Subscribe(new Observer((t) => protect(() => chooser(t), (u) => { if (u != null) {
        observer.OnNext(value(u));
    } }, observer.OnError), observer.OnError, observer.OnCompleted)), source.delegates);
}
export function filter(predicate, sourceEvent) {
    return choose((x) => predicate(x) ? x : null, sourceEvent);
}
export function map(mapping, sourceEvent) {
    const source = sourceEvent;
    return new Event((observer) => source.Subscribe(new Observer((t) => protect(() => mapping(t), observer.OnNext, observer.OnError), observer.OnError, observer.OnCompleted)), source.delegates);
}
export function merge(event1, event2) {
    const source1 = event1;
    const source2 = event2;
    return new Event((observer) => {
        let stopped = false;
        let completed1 = false;
        let completed2 = false;
        const h1 = source1.Subscribe(new Observer((v) => { if (!stopped) {
            observer.OnNext(v);
        } }, (e) => {
            if (!stopped) {
                stopped = true;
                observer.OnError(e);
            }
        }, () => {
            if (!stopped) {
                completed1 = true;
                if (completed2) {
                    stopped = true;
                    observer.OnCompleted();
                }
            }
        }));
        const h2 = source2.Subscribe(new Observer((v) => { if (!stopped) {
            observer.OnNext(v);
        } }, (e) => {
            if (!stopped) {
                stopped = true;
                observer.OnError(e);
            }
        }, () => {
            if (!stopped) {
                completed2 = true;
                if (completed1) {
                    stopped = true;
                    observer.OnCompleted();
                }
            }
        }));
        return {
            Dispose() {
                h1.Dispose();
                h2.Dispose();
            },
        };
    }, source1.delegates.concat(source2.delegates));
}
export function pairwise(sourceEvent) {
    const source = sourceEvent;
    return new Event((observer) => {
        let last = null;
        return source.Subscribe(new Observer((next) => {
            if (last != null) {
                observer.OnNext([last, next]);
            }
            last = next;
        }, observer.OnError, observer.OnCompleted));
    }, source.delegates);
}
export function partition(predicate, sourceEvent) {
    return [filter(predicate, sourceEvent), filter((x) => !predicate(x), sourceEvent)];
}
export function scan(collector, state, sourceEvent) {
    const source = sourceEvent;
    return new Event((observer) => {
        return source.Subscribe(new Observer((t) => {
            protect(() => collector(state, t), (u) => { state = u; observer.OnNext(u); }, observer.OnError);
        }, observer.OnError, observer.OnCompleted));
    }, source.delegates);
}
export function split(splitter, sourceEvent) {
    return [
        choose((v) => tryValueIfChoice1(splitter(v)), sourceEvent),
        choose((v) => tryValueIfChoice2(splitter(v)), sourceEvent),
    ];
}

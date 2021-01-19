import { class_type } from "../../fable-library/Reflection.js";
import { empty, iterate } from "../../fable-library/List.js";
import { createAtom } from "../../fable-library/Util.js";
import { addToDict, getItemFromDict } from "../../fable-library/MapUtil.js";
import { Sveltish_DevToolsControl_initialise, Sveltish_DevToolsControl_Options, Sveltish_DevToolsControl_Version } from "./Types.js";
import { iterate as iterate_1, map } from "../../fable-library/Seq.js";
import { Sveltish_Logging_initWith, Sveltish_Logging_enabled } from "./Logging.js";
import { Sveltish_Helpers_disposable } from "./Helpers.js";
import { Sveltish_DOM_Event_notifyUpdated } from "./DOM.js";

export class Sveltish_ObservableStore_Helpers_CmdHandler$1 {
    constructor(handler, dispose) {
        this.handler = handler;
        this.dispose = dispose;
    }
    Dispose() {
        const this$ = this;
        Sveltish_ObservableStore_Helpers_CmdHandler$1__Dispose(this$);
    }
}

export function Sveltish_ObservableStore_Helpers_CmdHandler$1$reflection(gen0) {
    return class_type("Sveltish.ObservableStore.Helpers.CmdHandler`1", [gen0], Sveltish_ObservableStore_Helpers_CmdHandler$1);
}

export function Sveltish_ObservableStore_Helpers_CmdHandler$1_$ctor_339679B6(handler, dispose) {
    return new Sveltish_ObservableStore_Helpers_CmdHandler$1(handler, dispose);
}

export function Sveltish_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_, cmd) {
    _.handler(cmd);
}

export function Sveltish_ObservableStore_Helpers_CmdHandler$1__Dispose(_) {
    const matchValue = _.dispose;
    if (matchValue == null) {
    }
    else {
        matchValue();
    }
}

export function Sveltish_ObservableStore_Helpers_cmdHandler(dispatch) {
    return Sveltish_ObservableStore_Helpers_CmdHandler$1_$ctor_339679B6((list) => {
        iterate((cmd) => {
            const value = setTimeout(() => {
                cmd(dispatch);
            }, 0) | 0;
            void value;
        }, list);
    });
}

export const Sveltish_ObservableStore_Registry_nextId = createAtom(0);

export const Sveltish_ObservableStore_Registry_idToStore = new Map([]);

export const Sveltish_ObservableStore_Registry_storeToId = new Map([]);

export function Sveltish_ObservableStore_Registry_notifyMakeStore(s) {
    const id = Sveltish_ObservableStore_Registry_nextId() | 0;
    Sveltish_ObservableStore_Registry_nextId(Sveltish_ObservableStore_Registry_nextId() + 1, true);
    Sveltish_ObservableStore_Registry_idToStore.set(id, s);
    Sveltish_ObservableStore_Registry_storeToId.set(s, id);
}

export function Sveltish_ObservableStore_Registry_notifyDisposeStore(s) {
    const value = Sveltish_ObservableStore_Registry_idToStore.delete(getItemFromDict(Sveltish_ObservableStore_Registry_storeToId, s));
    void value;
    const value_1 = Sveltish_ObservableStore_Registry_storeToId.delete(s);
    void value_1;
}

export function Sveltish_ObservableStore_Registry_getStoreById(id) {
    return getItemFromDict(Sveltish_ObservableStore_Registry_idToStore, id);
}

export function Sveltish_ObservableStore_Registry_controlBlock() {
    return new (class {
        get ControlBlockVersion() {
            return 1;
        }
        get Version() {
            return new Sveltish_DevToolsControl_Version(0, 1, 0);
        }
        GetOptions() {
            return Sveltish_DevToolsControl_Options();
        }
        SetOptions(op) {
            Sveltish_DevToolsControl_Options(op, true);
        }
        GetStores() {
            return Int32Array.from(Sveltish_ObservableStore_Registry_storeToId.values());
        }
        GetStoreById(id) {
            return Sveltish_ObservableStore_Registry_getStoreById(id);
        }
        GetLogCategories() {
            return Array.from(map((k) => [k[0], k[1]], Sveltish_Logging_enabled));
        }
        SetLogCategories(states) {
            Sveltish_Logging_initWith(states);
        }
    }
    )();
}

export function Sveltish_ObservableStore_Registry_initialise(doc) {
    Sveltish_DevToolsControl_initialise(doc, Sveltish_ObservableStore_Registry_controlBlock());
}

export class Sveltish_ObservableStore_Store$1 {
    constructor(init, dispose) {
        this.init = init;
        this.dispose = dispose;
        this.uid = 0;
        this._modelInitialized = false;
        this._model = null;
        this.subscribers = (new Map([]));
    }
    Subscribe(observer) {
        const this$ = this;
        return Sveltish_ObservableStore_Store$1__Subscribe_32482748(this$, observer);
    }
    Update(f) {
        const this$ = this;
        Sveltish_ObservableStore_Store$1__Update_Z1FC644CA(this$, f);
    }
    get Value() {
        const this$ = this;
        return Sveltish_ObservableStore_Store$1__get_Value(this$);
    }
    Dispose() {
        const this$ = this;
        Sveltish_ObservableStore_Store$1__Dispose(this$);
    }
}

export function Sveltish_ObservableStore_Store$1$reflection(gen0) {
    return class_type("Sveltish.ObservableStore.Store`1", [gen0], Sveltish_ObservableStore_Store$1);
}

export function Sveltish_ObservableStore_Store$1_$ctor_130652E0(init, dispose) {
    return new Sveltish_ObservableStore_Store$1(init, dispose);
}

export function Sveltish_ObservableStore_Store$1__get_Value(_) {
    return Sveltish_ObservableStore_Store$1__model(_);
}

export function Sveltish_ObservableStore_Store$1__Update_Z1FC644CA(_, f) {
    const newModel = f(Sveltish_ObservableStore_Store$1__model(_));
    _._model = newModel;
    if (_.subscribers.size > 0) {
        iterate_1((s) => {
            s.OnNext(_._model);
        }, _.subscribers.values());
    }
}

export function Sveltish_ObservableStore_Store$1__Subscribe_32482748(this$, observer) {
    const id = this$.uid | 0;
    this$.uid = (this$.uid + 1);
    addToDict(this$.subscribers, id, observer);
    observer.OnNext(Sveltish_ObservableStore_Store$1__model(this$));
    return Sveltish_Helpers_disposable(() => {
        const value = this$.subscribers.delete(id);
        void value;
    });
}

export function Sveltish_ObservableStore_Store$1__Dispose(this$) {
    iterate_1((x) => {
        x.OnCompleted();
    }, this$.subscribers.values());
    this$.subscribers.clear();
    this$.dispose(Sveltish_ObservableStore_Store$1__model(this$));
    this$._model = null;
    Sveltish_ObservableStore_Registry_notifyDisposeStore(this$);
}

function Sveltish_ObservableStore_Store$1__model(this$) {
    if (!this$._modelInitialized) {
        this$._model = this$.init();
        this$._modelInitialized = true;
    }
    return this$._model;
}

export function Sveltish_ObservableStore_makeElmishWithCons(init, update, dispose, cons) {
    let _storeDispatch = void 0;
    let _cmdHandler = null;
    return (props) => {
        if (_storeDispatch == null) {
            const patternInput_1 = cons(() => {
                const patternInput = init(props);
                Sveltish_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_cmdHandler, patternInput[1]);
                return patternInput[0];
            }, (m_1) => {
                Sveltish_ObservableStore_Helpers_CmdHandler$1__Dispose(_cmdHandler);
                dispose(m_1);
            });
            const store = patternInput_1[0];
            const dispatch = (msg) => {
                let _cmds = empty();
                patternInput_1[1]((model) => {
                    const patternInput_2 = update(msg, model);
                    _cmds = patternInput_2[1];
                    return patternInput_2[0];
                });
                Sveltish_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_cmdHandler, _cmds);
            };
            _cmdHandler = Sveltish_ObservableStore_Helpers_cmdHandler(dispatch);
            _storeDispatch = [store, dispatch];
            return [store, dispatch];
        }
        else {
            return _storeDispatch;
        }
    };
}

export function Sveltish_ObservableStore_makeStore(init, dispose) {
    const s = Sveltish_ObservableStore_Store$1_$ctor_130652E0(init, dispose);
    Sveltish_ObservableStore_Registry_notifyMakeStore(s);
    return s;
}

export function Sveltish_ObservableStore_makeElmishWithDocument(doc, init, update, dispose) {
    Sveltish_ObservableStore_Registry_initialise(doc);
    return Sveltish_ObservableStore_makeElmishWithCons(init, update, dispose, (i, d) => {
        const s = Sveltish_ObservableStore_makeStore(i, d);
        return [s, (f) => {
            Sveltish_ObservableStore_Store$1__Update_Z1FC644CA(s, f);
            Sveltish_DOM_Event_notifyUpdated(doc);
        }];
    });
}

export function Sveltish_ObservableStore_makeElmishSimpleWithDocument(doc, init, update, dispose) {
    Sveltish_ObservableStore_Registry_initialise(doc);
    return Sveltish_ObservableStore_makeElmishWithCons((p) => [init(p), empty()], (msg, model) => [update(msg, model), empty()], dispose, (i, d) => {
        const s = Sveltish_ObservableStore_makeStore(i, d);
        return [s, (f) => {
            Sveltish_ObservableStore_Store$1__Update_Z1FC644CA(s, f);
            Sveltish_DOM_Event_notifyUpdated(doc);
        }];
    });
}

export function Sveltish_ObservableStore_makeElmishSimple(i, u, d) {
    return Sveltish_ObservableStore_makeElmishSimpleWithDocument(document, i, u, d);
}

export function Sveltish_ObservableStore_makeElmish(i, u, d) {
    return Sveltish_ObservableStore_makeElmishWithDocument(document, i, u, d);
}


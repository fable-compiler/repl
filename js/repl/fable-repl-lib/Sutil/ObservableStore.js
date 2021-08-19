import { Sutil_Logging_initWith, Sutil_Logging_enabled, Sutil_Logging_error, Sutil_Logging_log } from "./Logging.js";
import { class_type } from "../../fable-library/Reflection.js";
import { empty, iterate } from "../../fable-library/List.js";
import { int32ToString, createAtom } from "../../fable-library/Util.js";
import { Sutil_DOM_Event_notifyUpdated, Sutil_DOM_rafu, Sutil_DOM_findNodeWithSvId, Sutil_DOM_SutilNode, Sutil_DOM_SutilNode__PrettyPrint_Z721C83C5, Sutil_DOM_Event_NewStore, Sutil_DOM_dispatchSimple, Sutil_DOM_Event_UpdateStore, Sutil_DOM_dispatch } from "./DOM.js";
import { Sutil_Interop_Window_get_document } from "./Interop.js";
import { interpolate, toText } from "../../fable-library/String.js";
import { addToDict, getItemFromDict } from "../../fable-library/MapUtil.js";
import { Sutil_DevToolsControl_initialise, Sutil_DevToolsControl_Options, Sutil_DevToolsControl_Version } from "./Types.js";
import { iterate as iterate_1, map, toArray } from "../../fable-library/Seq.js";
import { toArray as toArray_1 } from "../../fable-library/Option.js";
import { Sutil_Helpers_disposable } from "./Helpers.js";
import { subscribe } from "../../fable-library/Observable.js";

export function Sutil_ObservableStore_log(s) {
    Sutil_Logging_log("store", s);
}

export class Sutil_ObservableStore_Helpers_CmdHandler$1 {
    constructor(handler, dispose) {
        this.handler = handler;
        this.dispose = dispose;
    }
    Dispose() {
        const this$ = this;
        Sutil_ObservableStore_Helpers_CmdHandler$1__Dispose(this$);
    }
}

export function Sutil_ObservableStore_Helpers_CmdHandler$1$reflection(gen0) {
    return class_type("Sutil.ObservableStore.Helpers.CmdHandler`1", [gen0], Sutil_ObservableStore_Helpers_CmdHandler$1);
}

export function Sutil_ObservableStore_Helpers_CmdHandler$1_$ctor_339679B6(handler, dispose) {
    return new Sutil_ObservableStore_Helpers_CmdHandler$1(handler, dispose);
}

export function Sutil_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_, cmd) {
    _.handler(cmd);
}

export function Sutil_ObservableStore_Helpers_CmdHandler$1__Dispose(_) {
    const matchValue = _.dispose;
    if (matchValue == null) {
    }
    else {
        matchValue();
    }
}

export function Sutil_ObservableStore_Helpers_cmdHandler(dispatch) {
    return Sutil_ObservableStore_Helpers_CmdHandler$1_$ctor_339679B6((list) => {
        iterate((cmd) => {
            void setTimeout(() => {
                cmd(dispatch);
            }, 0);
        }, list);
    });
}

export let Sutil_ObservableStore_Registry_nextId = createAtom(0);

export const Sutil_ObservableStore_Registry_idToStore = new Map([]);

export const Sutil_ObservableStore_Registry_storeToId = new Map([]);

export function Sutil_ObservableStore_Registry_notifyUpdateStore(s, v) {
    Sutil_DOM_dispatch(Sutil_Interop_Window_get_document(), Sutil_DOM_Event_UpdateStore, {
        Value: v,
    });
}

export function Sutil_ObservableStore_Registry_notifyMakeStore(s) {
    if (Sutil_ObservableStore_Registry_storeToId.has(s)) {
        throw (new Error("Store is already registered!"));
    }
    const id = Sutil_ObservableStore_Registry_nextId() | 0;
    Sutil_ObservableStore_log(toText(interpolate("make store #%P()", [id])));
    Sutil_ObservableStore_Registry_nextId(Sutil_ObservableStore_Registry_nextId() + 1, true);
    Sutil_ObservableStore_Registry_idToStore.set(id, s);
    Sutil_ObservableStore_Registry_storeToId.set(s, id);
    Sutil_DOM_dispatchSimple(Sutil_Interop_Window_get_document(), Sutil_DOM_Event_NewStore);
}

export function Sutil_ObservableStore_Registry_notifyDisposeStore(s) {
    const id = getItemFromDict(Sutil_ObservableStore_Registry_storeToId, s) | 0;
    Sutil_ObservableStore_log(toText(interpolate("dispose store #%P()", [id])));
    try {
        void Sutil_ObservableStore_Registry_idToStore.delete(id);
        void Sutil_ObservableStore_Registry_storeToId.delete(s);
    }
    catch (x) {
        Sutil_Logging_error(toText(interpolate("disposing store %P(): %P()", [id, x.message])));
    }
}

export function Sutil_ObservableStore_Registry_getStoreById(id) {
    return getItemFromDict(Sutil_ObservableStore_Registry_idToStore, id).Debugger;
}

export function Sutil_ObservableStore_Registry_controlBlock() {
    return new (class {
        get ControlBlockVersion() {
            return 1;
        }
        get Version() {
            return new Sutil_DevToolsControl_Version(0, 1, 0);
        }
        GetOptions() {
            return Sutil_DevToolsControl_Options();
        }
        SetOptions(op) {
            Sutil_DevToolsControl_Options(op, true);
        }
        GetStores() {
            return toArray(Sutil_ObservableStore_Registry_storeToId.values());
        }
        GetStoreById(id) {
            return Sutil_ObservableStore_Registry_getStoreById(id);
        }
        GetLogCategories() {
            return toArray(map((k) => [k[0], k[1]], Sutil_Logging_enabled));
        }
        SetLogCategories(states) {
            Sutil_Logging_initWith(states);
        }
        PrettyPrint(id_1) {
            iterate_1((n) => {
                Sutil_DOM_SutilNode__PrettyPrint_Z721C83C5(new Sutil_DOM_SutilNode(1, n), "Node #" + int32ToString(id_1));
            }, toArray_1(Sutil_DOM_findNodeWithSvId(Sutil_Interop_Window_get_document(), id_1)));
        }
        GetMountPoints() {
            return [];
        }
    }
    )();
}

export function Sutil_ObservableStore_Registry_initialise(doc) {
    Sutil_DevToolsControl_initialise(doc, Sutil_ObservableStore_Registry_controlBlock());
}

export class Sutil_ObservableStore_Store$1 {
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
        return Sutil_ObservableStore_Store$1__Subscribe_32482748(this$, observer);
    }
    Update(f) {
        const this$ = this;
        Sutil_ObservableStore_Store$1__Update_Z1FC644CA(this$, f);
    }
    get Value() {
        const this$ = this;
        return Sutil_ObservableStore_Store$1__get_Value(this$);
    }
    get Debugger() {
        const this$ = this;
        return new (class {
            get Value() {
                return Sutil_ObservableStore_Store$1__get_Value(this$);
            }
            get NumSubscribers() {
                return this$.subscribers.size;
            }
        }
        )();
    }
    Dispose() {
        const this$ = this;
        Sutil_ObservableStore_Store$1__Dispose(this$);
    }
}

export function Sutil_ObservableStore_Store$1$reflection(gen0) {
    return class_type("Sutil.ObservableStore.Store`1", [gen0], Sutil_ObservableStore_Store$1);
}

export function Sutil_ObservableStore_Store$1_$ctor_130652E0(init, dispose) {
    return new Sutil_ObservableStore_Store$1(init, dispose);
}

export function Sutil_ObservableStore_Store$1__get_Value(_) {
    return Sutil_ObservableStore_Store$1__model(_);
}

export function Sutil_ObservableStore_Store$1__Update_Z1FC644CA(_, f) {
    const newModel = f(Sutil_ObservableStore_Store$1__model(_));
    _._model = newModel;
    if (_.subscribers.size > 0) {
        iterate_1((s) => {
            s.OnNext(_._model);
        }, _.subscribers.values());
    }
}

export function Sutil_ObservableStore_Store$1__Subscribe_32482748(this$, observer) {
    const id = this$.uid | 0;
    this$.uid = ((this$.uid + 1) | 0);
    Sutil_Logging_log("store", toText(interpolate("subscribe %P()", [id])));
    addToDict(this$.subscribers, id, observer);
    observer.OnNext(Sutil_ObservableStore_Store$1__model(this$));
    return Sutil_Helpers_disposable(() => {
        Sutil_Logging_log("store", toText(interpolate("unsubscribe %P()", [id])));
        void this$.subscribers.delete(id);
    });
}

export function Sutil_ObservableStore_Store$1__Dispose(this$) {
    iterate_1((x) => {
        x.OnCompleted();
    }, this$.subscribers.values());
    this$.subscribers.clear();
    this$.dispose(Sutil_ObservableStore_Store$1__model(this$));
    this$._model = null;
    Sutil_ObservableStore_Registry_notifyDisposeStore(this$);
}

function Sutil_ObservableStore_Store$1__model(this$) {
    if (!this$._modelInitialized) {
        this$._model = this$.init();
        this$._modelInitialized = true;
    }
    return this$._model;
}

export function Sutil_ObservableStore_makeElmishWithCons(init, update, dispose, cons) {
    let _storeDispatch = void 0;
    let _cmdHandler = null;
    return (props) => {
        if (_storeDispatch == null) {
            const patternInput_1 = cons(() => {
                const patternInput = init(props);
                Sutil_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_cmdHandler, patternInput[1]);
                return patternInput[0];
            }, (m_1) => {
                Sutil_ObservableStore_Helpers_CmdHandler$1__Dispose(_cmdHandler);
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
                Sutil_ObservableStore_Helpers_CmdHandler$1__Handle_Z40332EE1(_cmdHandler, _cmds);
            };
            _cmdHandler = Sutil_ObservableStore_Helpers_cmdHandler(dispatch);
            _storeDispatch = [store, dispatch];
            return [store, dispatch];
        }
        else {
            return _storeDispatch;
        }
    };
}

export function Sutil_ObservableStore_makeStore(init, dispose) {
    const s = Sutil_ObservableStore_Store$1_$ctor_130652E0(init, dispose);
    Sutil_ObservableStore_Registry_notifyMakeStore(s);
    Sutil_DOM_rafu(() => {
        void subscribe((v) => {
            Sutil_ObservableStore_Registry_notifyUpdateStore(s, v);
        }, s);
    });
    return s;
}

export function Sutil_ObservableStore_makeElmishWithDocument(doc, init, update, dispose) {
    return Sutil_ObservableStore_makeElmishWithCons(init, update, dispose, (i, d) => {
        const s = Sutil_ObservableStore_makeStore(i, d);
        return [s, (f) => {
            Sutil_ObservableStore_Store$1__Update_Z1FC644CA(s, f);
            Sutil_DOM_Event_notifyUpdated(doc);
        }];
    });
}

export function Sutil_ObservableStore_makeElmishSimpleWithDocument(doc, init, update, dispose) {
    return Sutil_ObservableStore_makeElmishWithCons((p) => [init(p), empty()], (msg, model) => [update(msg, model), empty()], dispose, (i, d) => {
        const s = Sutil_ObservableStore_makeStore(i, d);
        return [s, (f) => {
            Sutil_ObservableStore_Store$1__Update_Z1FC644CA(s, f);
            Sutil_DOM_Event_notifyUpdated(doc);
        }];
    });
}

export function Sutil_ObservableStore_makeElmishSimple(i, u, d) {
    return Sutil_ObservableStore_makeElmishSimpleWithDocument(document, i, u, d);
}

export function Sutil_ObservableStore_makeElmish(i, u, d) {
    return Sutil_ObservableStore_makeElmishWithDocument(document, i, u, d);
}


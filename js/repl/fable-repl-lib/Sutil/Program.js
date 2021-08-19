import { Record } from "../../fable-library/Types.js";
import { record_type, string_type, class_type } from "../../fable-library/Reflection.js";
import { Sutil_DOM_Event_notifyUpdated, Sutil_DOM_exclusive, Sutil_DOM_mountOn, Sutil_DOM_SutilElement$reflection } from "./DOM.js";
import { interpolate, toText } from "../../fable-library/String.js";
import { cons, empty } from "../../fable-library/List.js";
import { Sutil_ObservableStore_Registry_initialise } from "./ObservableStore.js";

export class Sutil_Program_MountPoint extends Record {
    constructor(Doc, MountId, App) {
        super();
        this.Doc = Doc;
        this.MountId = MountId;
        this.App = App;
    }
}

export function Sutil_Program_MountPoint$reflection() {
    return record_type("Sutil.Program.MountPoint", [], Sutil_Program_MountPoint, () => [["Doc", class_type("Browser.Types.Document")], ["MountId", string_type], ["App", Sutil_DOM_SutilElement$reflection()]]);
}

export function Sutil_Program_MountPoint__Mount(this$) {
    const host = this$.Doc.querySelector(toText(interpolate("#%P()", [this$.MountId])));
    return Sutil_DOM_mountOn(Sutil_DOM_exclusive(this$.App), host);
}

let Sutil_Program__allMountPoints = empty();

export function Sutil_Program_allMountPoints() {
    return Sutil_Program__allMountPoints;
}

function Sutil_Program_createMountPoint(doc, id, app) {
    const self = new Sutil_Program_MountPoint(doc, id, app);
    Sutil_Program__allMountPoints = cons(self, Sutil_Program__allMountPoints);
    return self;
}

export function Sutil_Program_mountElementOnDocument(doc, id, app) {
    const mp = Sutil_Program_createMountPoint(doc, id, app);
    Sutil_ObservableStore_Registry_initialise(doc);
    void Sutil_Program_MountPoint__Mount(mp);
}

export function Sutil_Program_mountElement(id, app) {
    Sutil_Program_mountElementOnDocument(document, id, app);
}

export function Sutil_Program_makeProgram(host, init, update, view) {
    let update_1;
    const doc = document;
    const model = init();
    Sutil_Program_mountElementOnDocument(doc, host, view(model, (update_1 = update, (msg) => {
        update_1(msg, model);
        Sutil_DOM_Event_notifyUpdated(doc);
    })));
}


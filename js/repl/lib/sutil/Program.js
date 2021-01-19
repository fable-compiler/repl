import { Sveltish_DOM_Event_notifyUpdated, Sveltish_DOM_mountElementOnDocument } from "./DOM.js";
import { partialApply } from "../../fable-library/Util.js";

export function Sveltish_Program_makeProgram(host, init, update, view) {
    let update_1;
    const doc = document;
    const model = init();
    Sveltish_DOM_mountElementOnDocument(doc, host, partialApply(1, view, [model, (update_1 = update, (msg) => {
        update_1(msg, model);
        Sveltish_DOM_Event_notifyUpdated(doc);
    })]));
}


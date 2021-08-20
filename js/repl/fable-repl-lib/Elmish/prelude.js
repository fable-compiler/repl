import { some } from "../../fable-library/Option.js";
import Timer from "../../fable-library/Timer.js";
import { add } from "../../fable-library/Observable.js";

export function Elmish_Log_onError(text, ex) {
    console.error(some(text), ex);
}

export function Elmish_Log_toConsole(text, o) {
    console.log(some(text), o);
}

export function Elmish_Timer_delay(interval, callback) {
    let t;
    let returnVal = new Timer(interval);
    returnVal.AutoReset = false;
    t = returnVal;
    add(callback, t.Elapsed());
    t.Enabled = true;
    t.Start();
}


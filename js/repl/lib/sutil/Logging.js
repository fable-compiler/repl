import { Sveltish_DevToolsControl_Options } from "./Types.js";
import { createAtom } from "../../fable-library/Util.js";
import { some } from "../../fable-library/Option.js";
import { getEnumerator } from "../../fable-library/Seq.js";
import { printf, interpolate, toText } from "../../fable-library/String.js";
import { getItemFromDict } from "../../fable-library/MapUtil.js";
import { toNumber } from "../../fable-library/Long.js";
import { getTicks, now } from "../../fable-library/Date.js";

export const Sveltish_Logging_enabled = new Map([]);

export function Sveltish_Logging_le() {
    return Sveltish_DevToolsControl_Options().LoggingEnabled;
}

export const Sveltish_Logging_initialized = createAtom(false);

export const Sveltish_Logging_init = (!Sveltish_Logging_initialized()) ? (console.log(some("logging:init defaults")), (Sveltish_Logging_initialized(true, true), (Sveltish_Logging_enabled.set("store", false), (Sveltish_Logging_enabled.set("trans", false), (Sveltish_Logging_enabled.set("dom", false), (Sveltish_Logging_enabled.set("style", false), (Sveltish_Logging_enabled.set("bind", false), Sveltish_Logging_enabled.set("each", false)))))))) : (void 0);

export function Sveltish_Logging_initWith(states) {
    console.log(some("logging:init with states"));
    Sveltish_Logging_initialized(true, true);
    const enumerator = getEnumerator(states);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const state = forLoopVar[1];
            const name = forLoopVar[0];
            console.log(some(toText(interpolate("logging:%P(): %P()", [name, state]))));
            Sveltish_Logging_enabled.set(name, state);
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sveltish_Logging_log(source, message) {
    let arg10, copyOfStruct;
    if (Sveltish_Logging_le() ? ((!Sveltish_Logging_enabled.has(source)) ? true : getItemFromDict(Sveltish_Logging_enabled, source)) : false) {
        console.log(some((arg10 = ((toNumber((copyOfStruct = now(), getTicks(copyOfStruct))) / 10000000) % 60), toText(printf("%0.3f: %s: %s"))(arg10)(source)(message))));
    }
}

export function Sveltish_Logging_warning(message) {
    console.log(some(toText(printf("warning: %s"))(message)));
}

export function Sveltish_Logging_error(message) {
    console.log(some(toText(printf("error: %s"))(message)));
}


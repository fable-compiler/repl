import { Sutil_DevToolsControl_Options } from "./Types.js";
import { getEnumerator, createAtom } from "../../fable-library/Util.js";
import { some } from "../../fable-library/Option.js";
import { printf, interpolate, toText } from "../../fable-library/String.js";
import { toNumber } from "../../fable-library/Long.js";
import { getTicks, now } from "../../fable-library/Date.js";
import { getItemFromDict } from "../../fable-library/MapUtil.js";

export const Sutil_Logging_enabled = new Map([]);

export function Sutil_Logging_le() {
    return Sutil_DevToolsControl_Options().LoggingEnabled;
}

export let Sutil_Logging_initialized = createAtom(false);

export const Sutil_Logging_init = (!Sutil_Logging_initialized()) ? ((console.log(some("logging:init defaults")), (Sutil_Logging_initialized(true, true), (Sutil_Logging_enabled.set("store", false), (Sutil_Logging_enabled.set("trans", false), (Sutil_Logging_enabled.set("dom", true), (Sutil_Logging_enabled.set("style", false), (Sutil_Logging_enabled.set("bind", true), (Sutil_Logging_enabled.set("each", true), Sutil_Logging_enabled.set("tick", false)))))))))) : (void 0);

export function Sutil_Logging_initWith(states) {
    console.log(some("logging:init with states"));
    Sutil_Logging_initialized(true, true);
    const enumerator = getEnumerator(states);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const forLoopVar = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const state = forLoopVar[1];
            const name = forLoopVar[0];
            console.log(some(toText(interpolate("logging:%P(): %P()", [name, state]))));
            Sutil_Logging_enabled.set(name, state);
        }
    }
    finally {
        enumerator.Dispose();
    }
}

export function Sutil_Logging_timestamp() {
    let copyOfStruct;
    const arg10 = (toNumber((copyOfStruct = now(), getTicks(copyOfStruct))) / 10000000) % 60;
    return toText(printf("%0.3f"))(arg10);
}

export function Sutil_Logging_log(source, message) {
    let arg10;
    if (Sutil_Logging_le() ? ((!Sutil_Logging_enabled.has(source)) ? true : getItemFromDict(Sutil_Logging_enabled, source)) : false) {
        console.log(some((arg10 = Sutil_Logging_timestamp(), toText(printf("%s: %s: %s"))(arg10)(source)(message))));
    }
}

export function Sutil_Logging_warning(message) {
    console.log(some(toText(printf("warning: %s"))(message)));
}

export function Sutil_Logging_error(message) {
    console.log(some(toText(printf("error: %s"))(message)));
}


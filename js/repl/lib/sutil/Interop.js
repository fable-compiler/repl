import { makeProxy } from "../../../../../../Fable.Sveltish/src/Fable.Sveltish/proxy.js";
import { parse } from "../../fable-library/Int32.js";
import { printf, toText } from "../../fable-library/String.js";
import { getEnumerator } from "../../fable-library/Seq.js";
import { some } from "../../fable-library/Option.js";

export const Sveltish_Interop_makeProxy = makeProxy;

export function Sveltish_Interop_Browser_testMutationObserver() {
    document.body.insertAdjacentHTML("beforeEnd", "\u003col/\u003e");
    const ol = document.body.lastChild;
    document.body.insertAdjacentHTML("beforeEnd", "\u003cinput value=\u00273\u0027/\u003e");
    const volume = document.body.lastChild;
    document.body.insertAdjacentHTML("beforeEnd", "\u003cinput value=\u0027add\u0027 type=\u0027button\u0027/\u003e");
    const button = document.body.lastChild;
    window.scrollTo(0, document.body.scrollHeight);
    button.addEventListener("click", (_arg1) => {
        for (let i = 0; i <= parse(volume.value, 511, false, 32); i++) {
            ol.insertAdjacentHTML("beforeEnd", toText(printf("\u003cli\u003e%i\u003c/li\u003e"))(i));
        }
        window.scrollTo(0, document.body.scrollHeight);
    });
    (new MutationObserver(((mutations, observer) => {
        let enumerator = getEnumerator(mutations);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                console.log(some(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().addedNodes.length));
            }
        }
        finally {
            enumerator.Dispose();
        }
    }))).observe(ol, {
        childList: true,
    });
}


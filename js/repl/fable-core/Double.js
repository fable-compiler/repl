define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.tryParse = tryParse;
    exports.parse = parse;
    // TODO does this perfectly match the .NET behavior ?
    function tryParse(s, radix, initial) {
        if (s != null && /\S/.test(s)) {
            if (radix === 10) {
                const v = +s;
                if (!Number.isNaN(v)) {
                    return [true, v];
                }
            }
        }
        return [false, initial != null ? initial : 0];
    }
    function parse(s, radix = 10) {
        const a = tryParse(s, radix, 0);
        if (a[0]) {
            return a[1];
        } else {
            // TODO FormatException ?
            throw new Error("Input string was not in a correct format.");
        }
    }
});
define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.isValid = isValid;
    exports.tryParse = tryParse;
    exports.parse = parse;
    const parseRadix = /^\s*([\+\-])?(0[xob])?([0-9a-fA-F]+)\s*$/;
    const invalidRadix2 = /[^01]/;
    const invalidRadix8 = /[^0-7]/;
    const invalidRadix10 = /[^0-9]/;
    function isValid(s, radix) {
        const res = parseRadix.exec(s);
        if (res != null) {
            if (radix == null) {
                switch (res[2]) {
                    case "0b":
                        radix = 2;
                        break;
                    case "0o":
                        radix = 8;
                        break;
                    case "0x":
                        radix = 16;
                        break;
                    default:
                        radix = 10;
                        break;
                }
            }
            switch (radix) {
                case 2:
                    return invalidRadix2.test(res[3]) ? null : [res, 2];
                case 8:
                    return invalidRadix8.test(res[3]) ? null : [res, 8];
                case 10:
                    return invalidRadix10.test(res[3]) ? null : [res, 10];
                case 16:
                    return [res, 16];
                default:
                    throw new Error("Invalid Base.");
            }
        }
        return null;
    }
    // TODO does this perfectly match the .NET behavior ?
    function tryParse(s, radix, initial) {
        const a = isValid(s, radix);
        if (a !== null) {
            const [[, prefix,, digits], radix_] = a;
            const v = parseInt((prefix || "") + digits, radix_);
            if (!Number.isNaN(v)) {
                return [true, v];
            }
        }
        return [false, initial];
    }
    function parse(s, radix) {
        const a = tryParse(s, radix, 0);
        if (a[0]) {
            return a[1];
        } else {
            throw new Error("Input string was not in a correct format.");
        }
    }
});
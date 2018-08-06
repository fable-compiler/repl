// TODO does this perfectly match the .NET behavior ?
export function tryParse(s, radix, initial) {
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
export function parse(s, radix = 10) {
    const a = tryParse(s, radix, 0);
    if (a[0]) {
        return a[1];
    }
    else {
        // TODO FormatException ?
        throw new Error("Input string was not in a correct format.");
    }
}
// JS Number.isFinite function evals false for NaN
export function isInfinity(x) {
    return x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY;
}

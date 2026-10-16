export const symbol = Symbol("numeric");
export function isNumeric(x) {
    return typeof x === "number" || typeof x === "bigint" || x?.[symbol];
}
export function isIntegral(x) {
    // Not perfect, because in JS we can't distinguish between 1.0 and 1
    return typeof x === "number" && Number.isInteger(x) || typeof x === "bigint";
}
export function compare(x, y) {
    if (typeof x === "number") {
        return x < y ? -1 : (x > y ? 1 : 0);
    }
    else if (typeof x === "bigint") {
        return x < y ? -1 : (x > y ? 1 : 0);
    }
    else {
        return x.CompareTo(y);
    }
}
export function multiply(x, y) {
    if (typeof x === "number") {
        return x * y;
    }
    else if (typeof x === "bigint") {
        return x * BigInt(y);
    }
    else {
        return x[symbol]().multiply(y);
    }
}
export function divide(x, y) {
    if (typeof x === "number") {
        return x / y;
    }
    else if (typeof x === "bigint") {
        // Keep the fractional part so the caller can round it like .NET does
        return Number(x) / y;
    }
    else {
        return x[symbol]().multiply(1 / y);
    }
}
export function toFixed(x, dp) {
    if (typeof x === "number") {
        return x.toFixed(dp);
    }
    else if (typeof x === "bigint") {
        return x.toString();
    }
    else {
        return x[symbol]().toFixed(dp);
    }
}
export function toPrecision(x, sd) {
    if (typeof x === "number") {
        return x.toPrecision(sd);
    }
    else if (typeof x === "bigint") {
        return x.toString();
    }
    else {
        return x[symbol]().toPrecision(sd);
    }
}
// A bigint can hold more significant digits than a double, so the mantissa is rounded on the
// decimal digits themselves instead of going through Number
function bigintToExponential(x, dp) {
    const sign = x < 0n ? "-" : "";
    let digits = (x < 0n ? -x : x).toString();
    if (x === 0n) {
        return sign + (dp ? "0." + "0".repeat(dp) : "0") + "e+0";
    }
    dp = dp ?? digits.length - 1;
    let exponent = digits.length - 1;
    if (digits.length > dp + 1) {
        // .NET rounds the discarded digits away from zero
        const roundUp = digits.charCodeAt(dp + 1) >= 53;
        digits = (BigInt(digits.slice(0, dp + 1)) + (roundUp ? 1n : 0n)).toString();
        if (digits.length > dp + 1) {
            digits = digits.slice(0, dp + 1);
            exponent += 1;
        }
    }
    else {
        digits = digits.padEnd(dp + 1, "0");
    }
    const mantissa = dp > 0 ? digits[0] + "." + digits.slice(1) : digits[0];
    return sign + mantissa + "e+" + exponent;
}
export function toExponential(x, dp) {
    if (typeof x === "number") {
        return x.toExponential(dp);
    }
    else if (typeof x === "bigint") {
        return bigintToExponential(x, dp);
    }
    else {
        return x[symbol]().toExponential(dp);
    }
}
export function toHex(x) {
    if (typeof x === "number") {
        return (Number(x) >>> 0).toString(16);
    }
    else if (typeof x === "bigint") {
        // TODO: properly handle other bit sizes
        return BigInt.asUintN(64, x).toString(16);
    }
    else {
        return x[symbol]().toHex();
    }
}

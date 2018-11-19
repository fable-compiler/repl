import Decimal from "./lib/big.js";
export default Decimal;
export const get_Zero = new Decimal(0);
export const get_One = new Decimal(1);
export const get_MinusOne = new Decimal(-1);
export const get_MaxValue = new Decimal("79228162514264337593543950335");
export const get_MinValue = new Decimal("-79228162514264337593543950335");
export function compare(x, y) {
    return x.cmp(y);
}
export function equals(x, y) {
    return !x.cmp(y);
}
export function abs(x) {
    return x.abs();
}
export function round(x) {
    return x.round(0, x.cmp(0) >= 0 ? 1 /* ROUND_HALF_UP */ : 2 /* ROUND_HALF_EVEN */);
}
export function ceil(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */ : 0 /* ROUND_DOWN */);
}
export function floor(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */ : 3 /* ROUND_UP */);
}
export function pow(x, n) {
    return x.pow(n);
}
export function sqrt(x) {
    return x.sqrt();
}
export function op_Subtraction(x, y) {
    return x.sub(y);
}
export function op_Modulus(x, y) {
    return x.mod(y);
}
export function op_Addition(x, y) {
    return x.add(y);
}
export function op_Division(x, y) {
    return x.div(y);
}
export function op_Multiply(x, y) {
    return x.mul(y);
}
export function op_UnaryNegation(x) {
    const x2 = new Decimal(x);
    x2.s = -x2.s || 0;
    return x2;
}
export function toString(x) {
    return x.toString();
}
export function tryParse(str) {
    try {
        return [true, new Decimal(str.trim())];
    }
    catch (_a) {
        return [false, get_Zero];
    }
}
export function parse(str) {
    const [ok, value] = tryParse(str);
    if (ok) {
        return value;
    }
    else {
        throw new Error("Input string was not in a correct format.");
    }
}
export function toNumber(x) {
    return +x;
}
// tslint:disable
// From https://github.com/bridgedotnet/Bridge/blob/e99e7eab5eda0f9ef74e11fbc3aebd3c24e8c0b1/Bridge/Resources/Decimal.js#L516
// https://github.com/bridgedotnet/Bridge/blob/master/LICENSE.md
// tslint:enable
export function getBytes(x) {
    const s = x.s;
    const e = x.e;
    const d = x.c;
    const bytes = new Uint8Array(23);
    bytes[0] = s & 255;
    bytes[1] = e;
    if (d && d.length > 0) {
        bytes[2] = d.length * 4;
        for (let i = 0; i < d.length; i++) {
            bytes[i * 4 + 3] = d[i] & 255;
            bytes[i * 4 + 4] = (d[i] >> 8) & 255;
            bytes[i * 4 + 5] = (d[i] >> 16) & 255;
            bytes[i * 4 + 6] = (d[i] >> 24) & 255;
        }
    }
    else {
        bytes[2] = 0;
    }
    return bytes;
}
export function fromBytes(bytes) {
    const value = new Decimal(0);
    const s = bytes[0] & 255;
    const e = bytes[1];
    const ln = bytes[2];
    const d = [];
    value.s = s;
    value.e = e;
    if (ln > 0) {
        for (let i = 3; i < (ln + 3);) {
            d.push(bytes[i] | bytes[i + 1] << 8 | bytes[i + 2] << 16 | bytes[i + 3] << 24);
            i = i + 4;
        }
    }
    value.c = d;
    return value;
}

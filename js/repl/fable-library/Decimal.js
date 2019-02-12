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
export function round(x, digits = 0) {
    return x.round(digits, x.cmp(0) >= 0 ? 1 /* ROUND_HALF_UP */ : 2 /* ROUND_HALF_EVEN */);
}
export function truncate(x) {
    return x.round(0, 0 /* ROUND_DOWN */);
}
export function ceiling(x) {
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
function decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for (const d of dec) {
        let val = d;
        for (let i = 0; i < hexCount; i++) {
            const digit = hex[i] * 10 + val | 0;
            hex[i] = digit & 0xF;
            val = digit >> 4;
        }
        if (val !== 0) {
            hex[hexCount++] = val;
        }
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for (const d of hex) {
        let carry = d;
        for (let i = 0; i < decCount; i++) {
            const val = dec[i] * 16 + carry | 0;
            dec[i] = (val % 10) | 0;
            carry = (val / 10) | 0;
        }
        while (carry > 0) {
            dec[decCount++] = (carry % 10) | 0;
            carry = (carry / 10) | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function setInt32Bits(hexDigits, bits, offset) {
    for (let i = 0; i < 8; i++) {
        hexDigits[offset + i] = (bits >> (i * 4)) & 0xF;
    }
}
function getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for (let i = 0; i < 8; i++) {
        bits = bits | (hexDigits[offset + i] << (i * 4));
    }
    return bits;
}
export function fromIntArray(bits) {
    return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
export function fromInts(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = (signExp >> 16) & 0x7F;
    return fromParts(low, mid, high, isNegative, scale);
}
export function fromParts(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    setInt32Bits(hexDigits, low, 0);
    setInt32Bits(hexDigits, mid, 8);
    setInt32Bits(hexDigits, high, 16);
    const decDigits = hexToDecimal(hexDigits.reverse(), bitSize);
    const sign = isNegative ? "-" : "";
    const pos = scale & 0x7F;
    let decStr = "";
    for (let i = 0; i < decDigits.length; i++) {
        if (i === pos) {
            decStr = "." + decStr;
        }
        decStr = "0123456789".charAt(decDigits[i]) + decStr;
    }
    const d = new Decimal(sign + decStr);
    return d;
}
export function getBits(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = decimalToHex(decDigits, bitSize);
    const low = getInt32Bits(hexDigits, 0);
    const mid = getInt32Bits(hexDigits, 8);
    const high = getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const pos = decStr.indexOf(".");
    const scale = (pos < 0) ? 0 : decStr.length - pos - 1;
    const signExp = ((scale & 0x7F) << 16) * d.s;
    return [low, mid, high, signExp];
}

import { toInt64 } from "./BigInt.js";
import { Exception, padWithZeros } from "./Util.js";
export const Duration = Temporal.Duration;
// The generic equality/comparison/hashing helpers in Util.ts dispatch at runtime
// on .NET-style Equals/CompareTo/GetHashCode methods. Attach them so TimeSpan
// also works in generic contexts: records, tuples, erased generics, etc.
const proto = Temporal.Duration.prototype;
proto.Equals = function (other) { return Temporal.Duration.compare(this, other) === 0; };
proto.CompareTo = function (other) { return Temporal.Duration.compare(this, other); };
proto.GetHashCode = function () { return hash(this); };
// Lets String.Format format this value without String.ts importing this module (see String.ts)
proto[Symbol.for("Fable.DateTimeFormattable")] = function (format) { return toString(this, format); };
const nsPerMillisecond = 1000000n;
const nsPerSecond = 1000000000n;
const nsPerMinute = 60000000000n;
const nsPerHour = 3600000000000n;
const nsPerDay = 86400000000000n;
export function totalNanoseconds(ts) {
    return BigInt(ts.days) * nsPerDay
        + BigInt(ts.hours) * nsPerHour
        + BigInt(ts.minutes) * nsPerMinute
        + BigInt(ts.seconds) * nsPerSecond
        + BigInt(ts.milliseconds) * nsPerMillisecond
        + BigInt(ts.microseconds) * 1000n
        + BigInt(ts.nanoseconds);
}
function fromNanoseconds(totalNs) {
    const negative = totalNs < 0n;
    // A .NET TimeSpan is a whole number of 100ns ticks, so anything finer than a
    // tick is dropped (toward zero, as .NET does) rather than carried in the
    // Duration's nanosecond field — otherwise values that cannot exist in .NET
    // would leak out of Parse/FromMilliseconds/arithmetic.
    let n = (negative ? -totalNs : totalNs) / 100n * 100n;
    const days = Number(n / nsPerDay);
    n %= nsPerDay;
    const hours = Number(n / nsPerHour);
    n %= nsPerHour;
    const minutes = Number(n / nsPerMinute);
    n %= nsPerMinute;
    const seconds = Number(n / nsPerSecond);
    n %= nsPerSecond;
    const milliseconds = Number(n / nsPerMillisecond);
    n %= nsPerMillisecond;
    const microseconds = Number(n / 1000n);
    n %= 1000n;
    const d = new Temporal.Duration(0, 0, 0, days, hours, minutes, seconds, milliseconds, microseconds, Number(n));
    return negative ? d.negated() : d;
}
// Converts a possibly fractional unit count into an exact nanosecond amount,
// keeping the integer part exact for the full Int64 tick range.
function unitToNanoseconds(value, nsPerUnit) {
    const whole = Math.trunc(value);
    const frac = value - whole;
    return BigInt(whole) * nsPerUnit + BigInt(Math.round(frac * Number(nsPerUnit)));
}
export function create(d = 0, h = 0, m = 0, s = 0, ms = 0, us = 0) {
    switch (arguments.length) {
        case 1:
            // ticks
            return fromTicks(arguments[0]);
        case 3:
            // h,m,s
            d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
            break;
        default:
            // d,h,m,s,ms,us
            break;
    }
    return fromNanoseconds(unitToNanoseconds(d, nsPerDay) + unitToNanoseconds(h, nsPerHour) + unitToNanoseconds(m, nsPerMinute)
        + unitToNanoseconds(s, nsPerSecond) + unitToNanoseconds(ms, nsPerMillisecond) + unitToNanoseconds(us, 1000n));
}
export function fromTicks(ticks) {
    return fromNanoseconds(BigInt(ticks) * 100n);
}
export function zero() {
    return new Temporal.Duration();
}
const ticksPerUnit = {
    days: 864000000000,
    hours: 36000000000,
    minutes: 600000000,
    seconds: 10000000,
    milliseconds: 10000,
};
// The DateTime/DateTimeOffset/TimeOnly Add* members take a double and are
// tick-precise in .NET: the value is scaled to ticks and rounded, so
// AddSeconds(0.0000001) moves exactly one tick and AddDays(1.5) exactly 36 hours.
// Temporal's own `add({ days: 1.5 })` rejects non-integers, so the scaling has to
// happen here.
export function fromUnits(value, unit) {
    return fromTicks(BigInt(Math.round(value * ticksPerUnit[unit])));
}
export function fromDays(d, h = 0, m = 0n, s = 0n, ms = 0n) {
    return create(d, h, Number(m), Number(s), Number(ms));
}
export function fromHours(h, m = 0n, s = 0n, ms = 0n) {
    return create(0, h, Number(m), Number(s), Number(ms));
}
export function fromMinutes(m, s = 0n, ms = 0n) {
    return create(0, 0, Number(m), Number(s), Number(ms));
}
export function fromSeconds(s, ms = 0n) {
    return create(0, 0, 0, Number(s), Number(ms));
}
export function fromMilliseconds(ms) {
    return fromNanoseconds(unitToNanoseconds(Number(ms), nsPerMillisecond));
}
export function ticks(ts) {
    return toInt64(totalNanoseconds(ts) / 100n);
}
// .NET computes each total as (double)Ticks / TicksPerUnit; match that exactly
// (Temporal's own .total() balances differently and can be 1 ULP off).
function totalTicks(ts) {
    return Number(totalNanoseconds(ts) / 100n);
}
export function totalDays(ts) {
    return totalTicks(ts) / 864000000000;
}
export function totalHours(ts) {
    return totalTicks(ts) / 36000000000;
}
export function totalMinutes(ts) {
    return totalTicks(ts) / 600000000;
}
export function totalSeconds(ts) {
    return totalTicks(ts) / 10000000;
}
export function totalMilliseconds(ts) {
    return totalTicks(ts) / 10000;
}
export function negate(ts) {
    return ts.negated();
}
export function add(ts1, ts2) {
    return fromNanoseconds(totalNanoseconds(ts1) + totalNanoseconds(ts2));
}
export function subtract(ts1, ts2) {
    return fromNanoseconds(totalNanoseconds(ts1) - totalNanoseconds(ts2));
}
// .NET scales the tick count as a double and rounds: `new TimeSpan((long)Math
// .Round(Ticks * factor))`. Scaling ticks rather than nanoseconds keeps the
// magnitude — and so the rounding — identical to .NET's.
export function multiply(ts, factor) {
    return fromTicks(BigInt(Math.round(Number(ticks(ts)) * factor)));
}
export function divide(ts, factor) {
    return fromTicks(BigInt(Math.round(Number(ticks(ts)) / factor)));
}
export function divideByTimeSpan(ts, other) {
    return Number(ticks(ts)) / Number(ticks(other));
}
export const op_Addition = add;
export const op_Subtraction = subtract;
export const op_Multiply = multiply;
export const op_UnaryNegation = negate;
export function compare(x, y) {
    return Temporal.Duration.compare(x, y);
}
export const compareTo = compare;
export function equals(x, y) {
    return Temporal.Duration.compare(x, y) === 0;
}
export function hash(ts) {
    return Number(totalNanoseconds(ts) % 2147483647n);
}
export function duration(ts) {
    return ts.abs();
}
export function toString(ts, format = "c", _provider) {
    if (["c", "g", "G"].indexOf(format) === -1) {
        throw new Exception("Custom formats are not supported");
    }
    const d = Math.abs(ts.days);
    const h = Math.abs(ts.hours);
    const m = Math.abs(ts.minutes);
    const s = Math.abs(ts.seconds);
    const ticks = Math.abs(ts.milliseconds) * 10000
        + Math.abs(ts.microseconds) * 10
        + Math.trunc(Math.abs(ts.nanoseconds) / 100);
    const sign = ts.sign < 0 ? "-" : "";
    const days = d === 0 && format !== "G" ? "" : format === "c" ? d + "." : d + ":";
    const time = `${format === "g" ? h : padWithZeros(h, 2)}:${padWithZeros(m, 2)}:${padWithZeros(s, 2)}`;
    // .NET prints seven tick digits for "c" and "G", trims trailing zeros for "g", and omits a zero fraction for "c" and "g".
    const fraction = format === "g"
        ? (ticks === 0 ? "" : "." + padWithZeros(ticks, 7).replace(/0+$/, ""))
        : (ticks === 0 && format === "c" ? "" : "." + padWithZeros(ticks, 7));
    return `${sign}${days}${time}${fraction}`;
}
export function parse(str) {
    const firstDot = str.search("\\.");
    const firstColon = str.search("\\:");
    if (firstDot === -1 && firstColon === -1) { // There is only a day ex: 4
        const d = parseInt(str, 0);
        if (isNaN(d)) {
            throw new Exception(`String '${str}' was not recognized as a valid TimeSpan.`);
        }
        else {
            return create(d, 0, 0, 0, 0);
        }
    }
    if (firstColon > 0) { // process time part
        // WIP: (-?)(((\d+)\.)?([0-9]|0[0-9]|1[0-9]|2[0-3]):(\d+)(:\d+(\.\d{1,7})?)?|\d+(?:(?!\.)))
        const r = /^(-?)((\d+)\.)?(?:0*)([0-9]|0[0-9]|1[0-9]|2[0-3]):(?:0*)([0-5][0-9]|[0-9])(:(?:0*)([0-5][0-9]|[0-9]))?\.?(\d+)?$/.exec(str);
        if (r != null && r[4] != null && r[5] != null) {
            let d = 0;
            let ms = 0;
            let s = 0;
            const sign = r[1] != null && r[1] === "-" ? -1 : 1;
            const h = +r[4];
            const m = +r[5];
            if (r[3] != null) {
                d = +r[3];
            }
            if (r[7] != null) {
                s = +r[7];
            }
            if (r[8] != null) {
                // Depending on the number of decimals passed, we need to adapt the numbers
                switch (r[8].length) {
                    case 1:
                        ms = +r[8] * 100;
                        break;
                    case 2:
                        ms = +r[8] * 10;
                        break;
                    case 3:
                        ms = +r[8];
                        break;
                    case 4:
                        ms = +r[8] / 10;
                        break;
                    case 5:
                        ms = +r[8] / 100;
                        break;
                    case 6:
                        ms = +r[8] / 1000;
                        break;
                    case 7:
                        ms = +r[8] / 10000;
                        break;
                    default:
                        throw new Exception(`String '${str}' was not recognized as a valid TimeSpan.`);
                }
            }
            const ts = create(d, h, m, s, ms);
            return sign < 0 ? negate(ts) : ts;
        }
    }
    throw new Exception(`String '${str}' was not recognized as a valid TimeSpan.`);
}
export function tryParse(v, defValue) {
    try {
        defValue.contents = parse(v);
        return true;
    }
    catch {
        return false;
    }
}

import { dateTime as DateTime_stamp } from "./DateTimeTemporal.js";
import { fromDate as DateTimeOffset_fromDate } from "./DateTimeOffsetTemporal.js";
import { Exception, DateTimeKind, padWithZeros } from "./Util.js";
export const PlainDate = Temporal.PlainDate;
// The generic equality/comparison/hashing helpers in Util.ts dispatch at runtime
// on .NET-style Equals/CompareTo/GetHashCode methods (with a special case for JS
// Date, which Temporal.PlainDate cannot benefit from). Attach them so DateOnly
// also works in generic contexts: records, tuples, erased generics, etc.
const proto = Temporal.PlainDate.prototype;
proto.Equals = function (other) { return this.equals(other); };
proto.CompareTo = function (other) { return Temporal.PlainDate.compare(this, other); };
proto.GetHashCode = function () { return dayNumber(this); };
// Lets String.Format format this value without String.ts importing this module (see String.ts)
proto[Symbol.for("Fable.DateTimeFormattable")] = function (format) { return toString(this, format); };
export function create(year, month, day) {
    return new Temporal.PlainDate(year, month, day);
}
export function maxValue() {
    return new Temporal.PlainDate(9999, 12, 31);
}
export function minValue() {
    return new Temporal.PlainDate(1, 1, 1);
}
export function dayNumber(d) {
    return minValue().until(d).days;
}
export function fromDayNumber(dayNumber) {
    return minValue().add({ days: dayNumber });
}
export function fromDateTime(d) {
    // Under the Temporal representation a DateTime is a PlainDateTime (kind-agnostic wall-clock)
    return new Temporal.PlainDate(d.year, d.month, d.day);
}
export function dayOfWeek(d) {
    // Temporal: Monday = 1 ... Sunday = 7, .NET: Sunday = 0 ... Saturday = 6
    return d.dayOfWeek % 7;
}
export function toDateTime(d, time, kind = DateTimeKind.Unspecified) {
    return DateTime_stamp(d.toPlainDateTime(time), kind);
}
export function toDateTimeOffset(d, time, offset) {
    return DateTimeOffset_fromDate(DateTime_stamp(d.toPlainDateTime(time), DateTimeKind.Unspecified), offset);
}
export function addDays(d, v) {
    return d.add({ days: v });
}
export function addMonths(d, v) {
    return d.add({ months: v });
}
export function addYears(d, v) {
    return d.add({ years: v });
}
export function equals(x, y) {
    return x.equals(y);
}
export function compare(x, y) {
    return Temporal.PlainDate.compare(x, y);
}
export function hash(d) {
    return dayNumber(d);
}
export function toString(d, format = "d", _provider) {
    switch (format) {
        case "d":
            return `${padWithZeros(d.month, 2)}/${padWithZeros(d.day, 2)}/${padWithZeros(d.year, 4)}`;
        case "o":
        case "O":
            // PlainDate.toString() is the ISO yyyy-MM-dd round-trip format
            return d.toString();
        default:
            throw new Exception("Custom formats are not supported");
    }
}
export function parse(str) {
    function fail() {
        throw new Exception(`String '${str}' was not recognized as a valid DateOnly.`);
    }
    // Allowed separators: . , / -
    // TODO whitespace alone as the separator
    //
    // Whitespace around separators
    //
    // Allowed format types:
    // yyyy/mm/dd
    // mm/dd/yyyy
    // mm/dd
    // mm/yyyy
    // yyyy/mm
    const r = /^\s*(\d{1,4})(?:\s*[.,-\/]\s*(\d{1,2}))?\s*[.,-\/]\s*(\d{1,4})\s*$/.exec(str);
    if (r != null) {
        let y = 0;
        let m = 0;
        let d = 1;
        if (r[2] == null) {
            if (r[1].length < 3) {
                if (r[3].length < 3) {
                    // 12/30 = December 30, {CurrentYear}
                    y = Temporal.Now.plainDateISO().year;
                    m = +r[1];
                    d = +r[3];
                }
                else {
                    // 12/2000 = December 1, 2000
                    m = +r[1];
                    y = +r[3];
                }
            }
            else {
                if (r[3].length > 2)
                    fail();
                // 2000/12 = December 1, 2000
                y = +r[1];
                m = +r[3];
            }
        }
        else {
            // 2000/1/30 or 1/30/2000
            const yearFirst = r[1].length > 2;
            const yTmp = r[yearFirst ? 1 : 3];
            y = +yTmp;
            // year 0-29 is 2000-2029, 30-99 is 1930-1999
            if (yTmp.length < 3)
                y += y >= 30 ? 1900 : 2000;
            m = +r[yearFirst ? 2 : 1];
            d = +r[yearFirst ? 3 : 2];
        }
        if (y > 0) {
            try {
                return new Temporal.PlainDate(y, m, d);
            }
            catch {
                return fail();
            }
        }
    }
    return fail();
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

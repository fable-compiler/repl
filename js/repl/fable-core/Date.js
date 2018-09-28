/**
 * DateTimeOffset functions.
 *
 * Note: Date instances are always DateObjects in local
 * timezone (because JS dates are all kinds of messed up).
 * A local date returns UTC epoc when `.getTime()` is called.
 *
 * Basically; invariant: date.getTime() always return UTC time.
 */
import { fromValue, ticksToUnixEpochMilliseconds, unixEpochMillisecondsToTicks } from "./Long.js";
import { compareDates, dateOffset, dateToString } from "./Util.js";
export const offsetRegex = /(?:Z|[+-](\d+):?([0-5]?\d)?)\s*$/;
export const toString = dateToString;
export default function DateTime(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */ : kind) | 0;
    return d;
}
export function fromTicks(ticks, kind) {
    ticks = fromValue(ticks);
    kind = kind != null ? kind : 0 /* Unspecified */;
    let date = DateTime(ticksToUnixEpochMilliseconds(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */) {
        date = DateTime(date.getTime() - dateOffset(date), kind);
    }
    return date;
}
export function fromDateTimeOffset(date, kind) {
    switch (kind) {
        case 1 /* UTC */: return DateTime(date.getTime(), 1 /* UTC */);
        case 2 /* Local */: return DateTime(date.getTime(), 2 /* Local */);
        default:
            const d = DateTime(date.getTime() + date.offset, kind);
            return DateTime(d.getTime() - dateOffset(d), kind);
    }
}
export function getTicks(date) {
    return unixEpochMillisecondsToTicks(date.getTime(), dateOffset(date));
}
export function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
export function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
export function parseRaw(str) {
    let date = new Date(str);
    if (isNaN(date.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*([+-]\d+(?::\d+)?)?\s*$/.exec(str);
        if (m != null) {
            let baseDate = null;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds = parseInt(timeParts[0], 10) * 3600 +
                    parseInt(timeParts[1] || "0", 10) * 60 +
                    parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") {
                    timeInSeconds += 720;
                }
            }
            if (m[4] != null) { // There's an offset, parse as UTC
                if (m[1] != null) {
                    baseDate = new Date(m[1] + " UTC");
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                const offsetParts = m[4].substr(1).split(":");
                let offsetInMinutes = parseInt(offsetParts[0], 10) * 60 + parseInt(offsetParts[1] || "0", 10);
                if (m[4][0] === "+") {
                    offsetInMinutes *= -1;
                }
                timeInSeconds += offsetInMinutes * 60;
            }
            else {
                if (m[1] != null) {
                    baseDate = new Date(m[1]);
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
                }
            }
            date = new Date(baseDate.getTime() + timeInSeconds * 1000);
        }
        else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
export function parse(str, detectUTC = false) {
    const date = parseRaw(str);
    const offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null
        ? (detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */)
        : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
export function tryParse(v) {
    try {
        return [true, parse(v)];
    }
    catch (_err) {
        return [false, minValue()];
    }
}
export function create(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */
        ? Date.UTC(year, month - 1, day, h, m, s, ms)
        : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    const date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
export function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
export function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
export function today() {
    return date(now());
}
export function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
export function daysInMonth(year, month) {
    return month === 2
        ? (isLeapYear(year) ? 29 : 28)
        : (month >= 8 ? (month % 2 === 0 ? 31 : 30) : (month % 2 === 0 ? 30 : 31));
}
export function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
export function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
export function timeOfDay(d) {
    return hour(d) * 3600000
        + minute(d) * 60000
        + second(d) * 1000
        + millisecond(d);
}
export function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
export function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
export function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
export function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
export function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
export function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
export function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
export function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
export function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
export function dayOfYear(d) {
    const _year = year(d);
    const _month = month(d);
    let _day = day(d);
    for (let i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
export function add(d, ts) {
    return DateTime(d.getTime() + ts, d.kind);
}
export function addDays(d, v) {
    return DateTime(d.getTime() + v * 86400000, d.kind);
}
export function addHours(d, v) {
    return DateTime(d.getTime() + v * 3600000, d.kind);
}
export function addMinutes(d, v) {
    return DateTime(d.getTime() + v * 60000, d.kind);
}
export function addSeconds(d, v) {
    return DateTime(d.getTime() + v * 1000, d.kind);
}
export function addMilliseconds(d, v) {
    return DateTime(d.getTime() + v, d.kind);
}
export function addYears(d, v) {
    const newMonth = month(d);
    const newYear = year(d) + v;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
export function addMonths(d, v) {
    let newMonth = month(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = year(d) + yearOffset;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
export function subtract(d, that) {
    return typeof that === "number"
        ? DateTime(d.getTime() - that, d.kind)
        : d.getTime() - that.getTime();
}
export function toLongDateString(d) {
    return d.toDateString();
}
export function toShortDateString(d) {
    return d.toLocaleDateString();
}
export function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
export function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
export function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
export const compare = compareDates;
export const compareTo = compareDates;
export function op_Addition(x, y) {
    return add(x, y);
}
export function op_Subtraction(x, y) {
    return subtract(x, y);
}
export function isDaylightSavingTime(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}

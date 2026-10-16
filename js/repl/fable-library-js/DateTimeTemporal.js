/**
 * DateTime as an extended Temporal.PlainDateTime.
 *
 * .NET DateTime is a wall-clock date+time (no offset) plus a Kind (Utc | Local |
 * Unspecified) that is metadata only. PlainDateTime models the wall-clock exactly
 * and, unlike the JS Date representation, is tick (100ns) precise and DST-agnostic
 * for arithmetic — which matches .NET, where DateTime math operates on the raw
 * wall-clock ticks.
 *
 * Kind has no Temporal home, so it is attached to the instance as a `kind` property
 * (Temporal objects are extensible). Because Temporal operations return fresh,
 * un-stamped instances, every operation must funnel through `dateTime(...)` to
 * re-stamp the kind.
 *
 * Formatting, parsing and time-zone conversion are done on the Temporal value
 * itself (see DateTimeFormat.ts), never by round-tripping through a JS Date —
 * that would silently truncate every value to milliseconds. The one exception is
 * the four ToLong/ShortDate/TimeString members, which are host-locale display
 * strings with no .NET-defined layout and no sub-second component.
 */
import { toInt64 } from "./BigInt.js";
import { DateTimeKind } from "./Util.js";
import { fromTicks as TimeSpan_fromTicks, fromUnits as TimeSpan_fromUnits, totalNanoseconds as TimeSpan_totalNanoseconds, } from "./TimeSpanTemporal.js";
import * as Format from "./DateTimeFormat.js";
export const PlainDateTime = Temporal.PlainDateTime;
// Generic equality/comparison/hashing dispatch (Util.ts) uses .NET-style methods.
const proto = Temporal.PlainDateTime.prototype;
proto.Equals = function (other) { return Temporal.PlainDateTime.compare(this, other) === 0; };
proto.CompareTo = function (other) { return Temporal.PlainDateTime.compare(this, other); };
proto.GetHashCode = function () { return hash(this); };
// Lets String.Format format this value without String.ts importing this module (see String.ts)
proto[Symbol.for("Fable.DateTimeFormattable")] = function (format) { return toString(this, format); };
const minDateTime = new Temporal.PlainDateTime(1, 1, 1);
export function getKind(value) {
    return value.kind ?? DateTimeKind.Unspecified;
}
export function dateTime(value, kind = DateTimeKind.Unspecified) {
    const d = value;
    d.kind = kind;
    return d;
}
// `dateTime` stamps in place, so anything handing out a value derived from a
// shared instance (a module constant, or the argument of SpecifyKind) has to
// copy first, or it would mutate the caller's value.
function copy(d) {
    return new Temporal.PlainDateTime(d.year, d.month, d.day, d.hour, d.minute, d.second, d.millisecond, d.microsecond, d.nanosecond);
}
function hostTimeZone() {
    return Temporal.Now.timeZoneId();
}
// Host-zone offset at this wall-clock, e.g. "+01:00". Unlike building a JS Date
// from the fields, this is correct for years 0-99 (which JS maps to 1900-1999).
function hostOffsetString(d) {
    return d.toZonedDateTime(hostTimeZone()).offset;
}
// Wall-clock fields for the formatter. The sub-second component is carried in
// .NET ticks so that "O" and the f/F specifiers can print all 7 digits.
function toDateInfo(d) {
    return {
        year: d.year,
        month: d.month,
        day: d.day,
        hour: d.hour,
        minute: d.minute,
        second: d.second,
        tick: d.millisecond * 10000 + d.microsecond * 10 + Math.trunc(d.nanosecond / 100),
        dayOfWeek: dayOfWeek(d),
    };
}
// Display-only bridge for the host-locale strings below. Sub-second precision is
// irrelevant to all four, but years 0-99 still need correcting.
function toJsDate(d) {
    const jsDate = new Date(d.year, d.month - 1, d.day, d.hour, d.minute, d.second, d.millisecond);
    jsDate.setFullYear(d.year, d.month - 1, d.day);
    return jsDate;
}
export function create(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    return dateTime(new Temporal.PlainDateTime(year, month, day, h, m, s, ms), kind);
}
export function fromTicks(ticks, kind) {
    return dateTime(minDateTime.add(TimeSpan_fromTicks(ticks)), kind);
}
export function getTicks(date) {
    return toInt64(TimeSpan_totalNanoseconds(minDateTime.until(date, { largestUnit: "day" })) / 100n);
}
export function minValue() {
    return dateTime(copy(minDateTime), DateTimeKind.Unspecified);
}
export function maxValue() {
    return dateTime(new Temporal.PlainDateTime(9999, 12, 31, 23, 59, 59, 999, 999, 900), DateTimeKind.Unspecified);
}
// .NET DateTime has 100ns (tick) precision; Temporal.Now is nanosecond-precise.
function truncateToTicks(d) {
    return d.round({ smallestUnit: "nanosecond", roundingIncrement: 100, roundingMode: "trunc" });
}
export function now() {
    return dateTime(truncateToTicks(Temporal.Now.plainDateTimeISO()), DateTimeKind.Local);
}
export function utcNow() {
    return dateTime(truncateToTicks(Temporal.Now.plainDateTimeISO("UTC")), DateTimeKind.Utc);
}
export function today() {
    return date(now());
}
export function specifyKind(d, kind) {
    // Kind is metadata: every tick of the wall-clock is preserved.
    return dateTime(copy(d), kind);
}
export function dayOfWeek(d) {
    // Temporal: Monday = 1 ... Sunday = 7, .NET: Sunday = 0 ... Saturday = 6
    return d.dayOfWeek % 7;
}
export function date(d) {
    return dateTime(d.with({ hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }), getKind(d));
}
export function timeOfDay(d) {
    // Elapsed since midnight. DateTime values are tick-aligned, so this is too.
    return d.with({ hour: 0, minute: 0, second: 0, millisecond: 0, microsecond: 0, nanosecond: 0 }).until(d);
}
export function add(d, ts) {
    return dateTime(d.add(ts), getKind(d));
}
export function addYears(d, v) {
    return dateTime(d.add({ years: v }), getKind(d));
}
export function addMonths(d, v) {
    return dateTime(d.add({ months: v }), getKind(d));
}
export function addDays(d, v) {
    return dateTime(d.add(TimeSpan_fromUnits(v, "days")), getKind(d));
}
export function addHours(d, v) {
    return dateTime(d.add(TimeSpan_fromUnits(v, "hours")), getKind(d));
}
export function addMinutes(d, v) {
    return dateTime(d.add(TimeSpan_fromUnits(v, "minutes")), getKind(d));
}
export function addSeconds(d, v) {
    return dateTime(d.add(TimeSpan_fromUnits(v, "seconds")), getKind(d));
}
export function addMilliseconds(d, v) {
    return dateTime(d.add(TimeSpan_fromUnits(v, "milliseconds")), getKind(d));
}
export function addTicks(d, v) {
    return dateTime(d.add(TimeSpan_fromTicks(v)), getKind(d));
}
export function subtractDate(d, that) {
    return that.until(d, { largestUnit: "day" });
}
export function subtractTimeSpan(d, ts) {
    return dateTime(d.subtract(ts), getKind(d));
}
export function equals(d1, d2) {
    return Temporal.PlainDateTime.compare(d1, d2) === 0;
}
export function compare(d1, d2) {
    return Temporal.PlainDateTime.compare(d1, d2);
}
export const compareTo = compare;
export function op_Addition(x, y) {
    return add(x, y);
}
export function hash(d) {
    return Number(getTicks(d) % 2147483647n);
}
export function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
export function daysInMonth(year, month) {
    return month === 2
        ? (isLeapYear(year) ? 29 : 28)
        : (month >= 8 ? (month % 2 === 0 ? 31 : 30) : (month % 2 === 0 ? 30 : 31));
}
// --- Host time zone ---
export function toUniversalTime(d) {
    // .NET reads an Unspecified value as local time here.
    return getKind(d) === DateTimeKind.Utc
        ? d
        : dateTime(d.toZonedDateTime(hostTimeZone()).withTimeZone("UTC").toPlainDateTime(), DateTimeKind.Utc);
}
export function toLocalTime(d) {
    // .NET reads an Unspecified value as UTC here — the mirror image of the above.
    return getKind(d) === DateTimeKind.Local
        ? d
        : dateTime(d.toZonedDateTime("UTC").withTimeZone(hostTimeZone()).toPlainDateTime(), DateTimeKind.Local);
}
export function isDaylightSavingTime(d) {
    const tz = hostTimeZone();
    const offsetAt = (month) => new Temporal.PlainDateTime(d.year, month, 1).toZonedDateTime(tz).offsetNanoseconds;
    // The larger of the two mid-season offsets is the daylight-saving one.
    return Math.max(offsetAt(1), offsetAt(7)) === d.toZonedDateTime(tz).offsetNanoseconds;
}
// --- Host-locale display strings (no .NET-defined layout) ---
export function toLongDateString(d) {
    return toJsDate(d).toDateString();
}
export function toShortDateString(d) {
    return toJsDate(d).toLocaleDateString();
}
export function toLongTimeString(d) {
    return toJsDate(d).toLocaleTimeString();
}
export function toShortTimeString(d) {
    return toJsDate(d).toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
// --- Formatting and parsing ---
export function toString(d, format, _provider) {
    const kind = getKind(d);
    return Format.dateToString({
        info: toDateInfo(d),
        utcInfo: () => toDateInfo(toUniversalTime(d)),
        // An Unspecified DateTime prints no zone at all, which is what makes "O"
        // round-trip it back to Unspecified.
        roundTrip: () => d.toString({ fractionalSecondDigits: 7 })
            + (kind === DateTimeKind.Utc ? "Z" : kind === DateTimeKind.Local ? hostOffsetString(d) : ""),
        sortable: () => d.toString({ smallestUnit: "second" }),
        defaultSuffix: "",
        kind,
        hostOffsetString: () => hostOffsetString(d),
    }, format);
}
export function parse(str, detectUTC = false) {
    const [parsed, offset] = Format.parseRaw(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null
        ? (detectUTC && offset === "Z" ? DateTimeKind.Utc : DateTimeKind.Local)
        : DateTimeKind.Unspecified;
    // parseRaw resolves the instant through JS Date, which truncates at the
    // millisecond, so the digits below that are recovered from the input separately.
    const epochNs = BigInt(parsed.getTime()) * 1000000n + BigInt(Format.subMillisecondTicks(str)) * 100n;
    const zone = kind === DateTimeKind.Utc ? "UTC" : hostTimeZone();
    return dateTime(new Temporal.Instant(epochNs).toZonedDateTimeISO(zone).toPlainDateTime(), kind);
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

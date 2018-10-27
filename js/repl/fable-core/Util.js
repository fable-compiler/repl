// tslint:disable:ban-types
// Object.assign flattens getters and setters
// See https://stackoverflow.com/questions/37054596/js-es5-how-to-assign-objects-with-setters-and-getters
export function extend(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        }
    }
    return target;
}
export function isDisposable(x) {
    return x != null && typeof x.Dispose === "function";
}
export class Comparer {
    constructor(f) {
        this.Compare = f || compare;
    }
}
export function comparerFromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (typeof comparer.Compare === "function") {
        return new Comparer(comparer.Compare);
    }
    else {
        return new Comparer((x, y) => {
            const xhash = comparer.GetHashCode(x);
            const yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            }
            else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}
// TODO: Move these three methods to Map and Set modules
export function containsValue(v, map) {
    for (const kv of map) {
        if (equals(v, kv[1])) {
            return true;
        }
    }
    return false;
}
export function tryGetValue(map, key, defaultValue) {
    return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
}
export function addToSet(v, set) {
    if (set.has(v)) {
        return false;
    }
    set.add(v);
    return true;
}
export function assertEqual(actual, expected, msg) {
    if (!equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
export function assertNotEqual(actual, expected, msg) {
    if (equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
export class Lazy {
    constructor(factory) {
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
export function lazyFromValue(v) {
    return new Lazy(() => v);
}
export function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
export function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number"
        ? date1.offset
        : (date.kind === 1 /* UTC */
            ? 0 : date.getTimezoneOffset() * -60000);
}
export function dateOffsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = (offset % 3600000) / 60000;
    return (isMinus ? "-" : "+") +
        padWithZeros(hours, 2) + ":" +
        padWithZeros(minutes, 2);
}
export function dateToHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first"
        ? str.substring(0, str.indexOf("T"))
        : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function dateToISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    }
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return padWithZeros(d.getFullYear(), 4) + "-" +
            padWithZeros(d.getMonth() + 1, 2) + "-" +
            padWithZeros(d.getDate(), 2) + "T" +
            padWithZeros(d.getHours(), 2) + ":" +
            padWithZeros(d.getMinutes(), 2) + ":" +
            padWithZeros(d.getSeconds(), 2) + "." +
            padWithZeros(d.getMilliseconds(), 3) +
            (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}
function dateToStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match) => {
        let rep = match;
        switch (match.substring(0, 1)) {
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
        }
        if (rep !== match && rep < 10 && match.length > 1) {
            rep = "0" + rep;
        }
        return rep;
    });
}
function dateToStringWithOffset(date, format) {
    const d = new Date(date.getTime() + date.offset);
    if (typeof format !== "string") {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(date.offset);
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d": return dateToHalfUTCString(d, "first");
            case "T":
            case "t": return dateToHalfUTCString(d, "second");
            case "O":
            case "o": return dateToISOStringWithOffset(d, date.offset);
            default: throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(d, format, true);
    }
}
function dateToStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */;
    if (typeof format !== "string") {
        return utc ? date.toUTCString() : date.toLocaleString();
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return dateToISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(date, format, utc);
    }
}
export function dateToString(date, format) {
    return date.offset != null
        ? dateToStringWithOffset(date, format)
        : dateToStringWithKind(date, format);
}
export function int16ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
    return i.toString(radix);
}
export function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
    return i.toString(radix);
}
export function toString(obj, quoteStrings = false) {
    switch (typeof obj) {
        case "string":
            return quoteStrings ? JSON.stringify(obj) : obj;
        case "function":
            return obj.name;
        case "object":
            // TODO: Print some elements of iterables?
            if (isPlainObject(obj) || Array.isArray(obj)) {
                try {
                    return JSON.stringify(obj, (k, v) => {
                        if (v != null) {
                            if (v instanceof Date) {
                                return dateToString(v);
                            }
                            else if (isIterable(v) && !Array.isArray(v) && typeof v !== "string") {
                                return Array.from(v);
                            }
                        }
                        return String(v);
                    });
                }
                catch (err) {
                    // Fallback for objects with circular references
                    return "{" + Object.keys(obj).map((k) => k + ": " + String(obj[k])).join(", ") + "}";
                }
            }
            else {
                return obj instanceof Date ? dateToString(obj) : String(obj);
            }
        // number|boolean|symbol|null|undefined:
        default:
            return String(obj);
    }
}
export class ObjectRef {
    static id(o) {
        if (!ObjectRef.idMap.has(o)) {
            ObjectRef.idMap.set(o, ++ObjectRef.count);
        }
        return ObjectRef.idMap.get(o);
    }
}
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
export function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
export function numberHash(x) {
    return x * 2654435761 | 0;
}
// From https://stackoverflow.com/a/37449594
export function combineHashCodes(hashes) {
    if (hashes.length === 0) {
        return 0;
    }
    return hashes.reduce((h1, h2) => {
        return ((h1 << 5) + h1) ^ h2;
    });
}
export function identityHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default:
            return numberHash(ObjectRef.id(x));
    }
}
export function structuralHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default: {
            if (typeof x.GetHashCode === "function") {
                return x.GetHashCode();
            }
            else if (isArray(x)) {
                const ar = x;
                const len = ar.length;
                const hashes = new Array(len);
                for (let i = 0; i < len; i++) {
                    hashes[i] = structuralHash(ar[i]);
                }
                return combineHashCodes(hashes);
            }
            else {
                return stringHash(toString(x));
            }
        }
    }
}
export function isArray(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
export function isIterable(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
export function isPlainObject(x) {
    return x != null && Object.getPrototypeOf(x).constructor === Object;
}
export function equalArraysWith(x, y, eq) {
    if (x == null) {
        return y == null;
    }
    if (y == null) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!eq(x[i], y[i])) {
            return false;
        }
    }
    return true;
}
export function equalArrays(x, y) {
    return equalArraysWith(x, y, equals);
}
// export function equalObjects(x: { [k: string]: any }, y: { [k: string]: any }): boolean {
//   if (x == null) { return y == null; }
//   if (y == null) { return false; }
//   const xKeys = Object.keys(x);
//   const yKeys = Object.keys(y);
//   if (xKeys.length !== yKeys.length) {
//     return false;
//   }
//   xKeys.sort();
//   yKeys.sort();
//   for (let i = 0; i < xKeys.length; i++) {
//     if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
//       return false;
//     }
//   }
//   return true;
// }
export function equals(x, y) {
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (typeof x !== "object") {
        return false;
    }
    else if (typeof x.Equals === "function") {
        return x.Equals(y);
    }
    else if (isArray(x)) {
        return isArray(y) && equalArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y) === 0;
    }
    else {
        return false;
    }
}
export function compareDates(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    }
    else {
        xtime = x.getTime() + dateOffset(x);
        ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}
export function comparePrimitives(x, y) {
    return x === y ? 0 : (x < y ? -1 : 1);
}
export function compareArraysWith(x, y, comp) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    if (x.length !== y.length) {
        return x.length < y.length ? -1 : 1;
    }
    for (let i = 0, j = 0; i < x.length; i++) {
        j = comp(x[i], y[i]);
        if (j !== 0) {
            return j;
        }
    }
    return 0;
}
export function compareArrays(x, y) {
    return compareArraysWith(x, y, compare);
}
export function compareObjects(x, y) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return xKeys.length < yKeys.length ? -1 : 1;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0, j = 0; i < xKeys.length; i++) {
        const key = xKeys[i];
        if (key !== yKeys[i]) {
            return key < yKeys[i] ? -1 : 1;
        }
        else {
            j = compare(x[key], y[key]);
            if (j !== 0) {
                return j;
            }
        }
    }
    return 0;
}
export function compare(x, y) {
    if (x === y) {
        return 0;
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1;
    }
    else if (typeof x !== "object") {
        return x < y ? -1 : 1;
    }
    else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    }
    else if (isArray(x)) {
        return isArray(y) && compareArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y);
    }
    else {
        return 1;
    }
}
export function min(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
export function max(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
export function createAtom(value) {
    let atom = value;
    return (value) => {
        if (value === void 0) {
            return atom;
        }
        else {
            atom = value;
            return void 0;
        }
    };
}
const CaseRules = {
    None: 0,
    LowerFirst: 1,
};
function changeCase(str, caseRule) {
    switch (caseRule) {
        case CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case CaseRules.None:
        default:
            return str;
    }
}
export function createObj(fields, caseRule = CaseRules.None) {
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + toString(kvPair));
    }
    const o = {};
    const definedCaseRule = caseRule;
    for (let kvPair of fields) {
        let caseRule = CaseRules.None;
        if (kvPair == null) {
            fail(kvPair);
        }
        // Deflate unions and use the defined case rule
        if (typeof kvPair.toJSON === "function") {
            kvPair = kvPair.toJSON();
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair)) {
            switch (kvPair.length) {
                case 0:
                    fail(kvPair);
                    break;
                case 1:
                    o[changeCase(kvPair[0], caseRule)] = true;
                    break;
                case 2:
                    const value = kvPair[1];
                    o[changeCase(kvPair[0], caseRule)] = value;
                    break;
                default:
                    o[changeCase(kvPair[0], caseRule)] = kvPair.slice(1);
            }
        }
        else if (typeof kvPair === "string") {
            o[changeCase(kvPair, caseRule)] = true;
        }
        else {
            fail(kvPair);
        }
    }
    return o;
}
export function jsOptions(mutator) {
    const opts = {};
    mutator(opts);
    return opts;
}
export function round(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8;
    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
export function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
export function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
export function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent((s).replace(/\+/g, "%20"));
}
export function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
export function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)
export function count(col) {
    return isArray(col) ? col.length : col.size;
}
export function clear(col) {
    if (isArray(col)) {
        col.splice(0);
    }
    else {
        col.clear();
    }
}
export function uncurry(arity, f) {
    // f may be a function option with None value
    if (f == null) {
        return null;
    }
    // return (...args: any[]) => {
    //   // In some cases there may be more arguments applied than necessary
    //   // (e.g. index when mapping an array), discard them
    //   args = args.slice(0, arity);
    //   let res = f;
    //   while (args.length > 0) {
    //       const curArgs = args.splice(0, res.length);
    //       res = res.apply(null, curArgs);
    //   }
    //   return res;
    // };
    switch (arity) {
        case 2:
            return (a1, a2) => f(a1)(a2);
        case 3:
            return (a1, a2, a3) => f(a1)(a2)(a3);
        case 4:
            return (a1, a2, a3, a4) => f(a1)(a2)(a3)(a4);
        case 5:
            return (a1, a2, a3, a4, a5) => f(a1)(a2)(a3)(a4)(a5);
        case 6:
            return (a1, a2, a3, a4, a5, a6) => f(a1)(a2)(a3)(a4)(a5)(a6);
        case 7:
            return (a1, a2, a3, a4, a5, a6, a7) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7);
        case 8:
            return (a1, a2, a3, a4, a5, a6, a7, a8) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);
        default:
            throw new Error("Uncurrying to more than 8-arity is not supported: " + arity);
    }
}
export function curry(arity, f) {
    if (f == null) {
        return null;
    }
    switch (arity) {
        case 2:
            return (a1) => (a2) => f(a1, a2);
        case 3:
            return (a1) => (a2) => (a3) => f(a1, a2, a3);
        case 4:
            return (a1) => (a2) => (a3) => (a4) => f(a1, a2, a3, a4);
        case 5:
            return (a1) => (a2) => (a3) => (a4) => (a5) => f(a1, a2, a3, a4, a5);
        case 6:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f(a1, a2, a3, a4, a5, a6);
        case 7:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f(a1, a2, a3, a4, a5, a6, a7);
        case 8:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f(a1, a2, a3, a4, a5, a6, a7, a8);
        default:
            throw new Error("Currying to more than 8-arity is not supported: " + arity);
    }
}
export function partialApply(arity, f, args) {
    if (f == null) {
        return null;
    }
    else {
        switch (arity) {
            case 1:
                // Wrap arguments to make sure .concat doesn't destruct arrays. Example
                // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails
                // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok
                return (a1) => f.apply(null, args.concat([a1]));
            case 2:
                return (a1) => (a2) => f.apply(null, args.concat([a1, a2]));
            case 3:
                return (a1) => (a2) => (a3) => f.apply(null, args.concat([a1, a2, a3]));
            case 4:
                return (a1) => (a2) => (a3) => (a4) => f.apply(null, args.concat([a1, a2, a3, a4]));
            case 5:
                return (a1) => (a2) => (a3) => (a4) => (a5) => f.apply(null, args.concat([a1, a2, a3, a4, a5]));
            case 6:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6]));
            case 7:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7]));
            case 8:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f.apply(null, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));
            default:
                throw new Error("Partially applying to more than 8-arity is not supported: " + arity);
        }
    }
}

import { Union } from "./Types.js";
import { compare, equals, structuralHash } from "./Util.js";
// Using a class here for better compatibility with TS files importing Some
export class Some {
    constructor(value) {
        this.value = value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    toJSON() {
        return this.value;
    }
    GetHashCode() {
        return structuralHash(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return equals(this.value, other instanceof Some ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return compare(this.value, other instanceof Some ? other.value : other);
        }
    }
}
export function some(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
export function value(x) {
    if (x == null) {
        throw new Error("Option has no value");
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}
export function tryValue(x) {
    return x instanceof Some ? x.value : x;
}
export function toArray(opt) {
    return (opt == null) ? [] : [value(opt)];
}
export function defaultArg(opt, defaultValue) {
    return (opt != null) ? value(opt) : defaultValue;
}
export function defaultArgWith(opt, defThunk) {
    return (opt != null) ? value(opt) : defThunk();
}
export function filter(predicate, opt) {
    return (opt != null) ? (predicate(value(opt)) ? opt : undefined) : opt;
}
export function map(mapping, opt) {
    return (opt != null) ? some(mapping(value(opt))) : undefined;
}
export function map2(mapping, opt1, opt2) {
    return (opt1 != null && opt2 != null) ? mapping(value(opt1), value(opt2)) : undefined;
}
export function map3(mapping, opt1, opt2, opt3) {
    return (opt1 != null && opt2 != null && opt3 != null) ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}
export function bind(binder, opt) {
    return opt != null ? binder(value(opt)) : undefined;
}
export function tryOp(op, arg) {
    try {
        return some(op(arg));
    }
    catch (_a) {
        return undefined;
    }
}
// CHOICE
export class Choice extends Union {
}
export class Choice3 extends Union {
}
export class Choice4 extends Union {
}
export class Choice5 extends Union {
}
export class Choice6 extends Union {
}
export class Choice7 extends Union {
}
export function choice1Of2(x) {
    return new Choice(0, "Choice1Of2", x);
}
export function choice2Of2(x) {
    return new Choice(1, "Choice2Of2", x);
}
export function tryValueIfChoice1Of2(x) {
    return x.tag === 0 ? some(x.fields[0]) : undefined;
}
export function tryValueIfChoice2Of2(x) {
    return x.tag === 1 ? some(x.fields[0]) : undefined;
}
// RESULT
export class Result extends Union {
}
export function ok(x) {
    return new Result(0, "Ok", x);
}
export function error(x) {
    return new Result(1, "Error", x);
}
export function mapOk(f, result) {
    return result.tag === 0 ? ok(f(result.fields[0])) : result;
}
export function mapError(f, result) {
    return result.tag === 1 ? error(f(result.fields[0])) : result;
}
export function bindOk(f, result) {
    return result.tag === 0 ? f(result.fields[0]) : result;
}
//# sourceMappingURL=Option.js.map
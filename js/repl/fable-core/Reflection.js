import { compareArraysWith, equalArraysWith } from "./Util.js";
export class CaseInfo {
    constructor(declaringType, tag, name, fields) {
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name;
        this.fields = fields;
    }
}
export class TypeInfo {
    constructor(fullname, generics, constructor, fields, cases) {
        this.fullname = fullname;
        this.generics = generics;
        this.constructor = constructor;
        this.fields = fields;
        this.cases = cases;
    }
    toString() {
        return fullName(this);
    }
    Equals(other) {
        return equals(this, other);
    }
    CompareTo(other) {
        return compare(this, other);
    }
}
export function getGenerics(t) {
    return t.generics != null ? t.generics() : [];
}
export function equals(t1, t2) {
    return t1.fullname === t2.fullname
        && equalArraysWith(getGenerics(t1), getGenerics(t2), equals);
}
// System.Type is not comparable in .NET, but let's implement this
// in case users want to create a dictionary with types as keys
export function compare(t1, t2) {
    if (t1.fullname !== t2.fullname) {
        return t1.fullname < t2.fullname ? -1 : 1;
    }
    else {
        return compareArraysWith(getGenerics(t1), getGenerics(t2), compare);
    }
}
export function type(fullname, generics) {
    return new TypeInfo(fullname, generics);
}
export function record(fullname, generics, constructor, fields) {
    return new TypeInfo(fullname, generics, constructor, fields);
}
export function union(fullname, generics, constructor, cases) {
    const t = new TypeInfo(fullname, generics, constructor, null, () => cases().map((x, i) => typeof x === "string" ? new CaseInfo(t, i, x) : new CaseInfo(t, i, x[0], x[1])));
    return t;
}
export function tuple(...generics) {
    return new TypeInfo("System.Tuple`" + generics.length, () => generics);
}
export function delegate(...generics) {
    return new TypeInfo("System.Func`" + generics.length, () => generics);
}
export function lambda(argType, returnType) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", () => [argType, returnType]);
}
export function option(generic) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", () => [generic]);
}
export function list(generic) {
    return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", () => [generic]);
}
export function array(generic) {
    return new TypeInfo(generic.fullname + "[]", () => [generic]);
}
export const obj = new TypeInfo("System.Object");
export const unit = new TypeInfo("Microsoft.FSharp.Core.Unit");
export const char = new TypeInfo("System.Char");
export const string = new TypeInfo("System.String");
export const bool = new TypeInfo("System.Boolean");
export const int8 = new TypeInfo("System.SByte");
export const uint8 = new TypeInfo("System.Byte");
export const int16 = new TypeInfo("System.Int16");
export const uint16 = new TypeInfo("System.UInt16");
export const int32 = new TypeInfo("System.Int32");
export const uint32 = new TypeInfo("System.UInt32");
export const float32 = new TypeInfo("System.Single");
export const float64 = new TypeInfo("System.Double");
export const decimal = new TypeInfo("System.Decimal");
export function name(info) {
    if (Array.isArray(info)) {
        return info[0];
    }
    else if (info instanceof CaseInfo) {
        return info.name;
    }
    else {
        const i = info.fullname.lastIndexOf(".");
        return i === -1 ? info.fullname : info.fullname.substr(i + 1);
    }
}
export function fullName(t) {
    const gen = t.generics != null && !isArray(t) ? t.generics() : [];
    if (gen.length > 0) {
        return t.fullname + "[" + gen.map(fullName).join(",") + "]";
    }
    else {
        return t.fullname;
    }
}
export function namespace(t) {
    const i = t.fullname.lastIndexOf(".");
    return i === -1 ? "" : t.fullname.substr(0, i);
}
export function isArray(t) {
    return t.fullname.endsWith("[]");
}
export function getElementType(t) {
    return isArray(t) ? t.generics()[0] : null;
}
export function isGenericType(t) {
    return t.generics != null && t.generics().length > 0;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */
export function getGenericTypeDefinition(t) {
    return t.generics == null ? t : new TypeInfo(t.fullname, () => t.generics().map(() => obj));
}
// FSharpType
export function getUnionCases(t) {
    if (t.cases != null) {
        return t.cases();
    }
    else {
        throw new Error(`${t.fullname} is not an F# union type`);
    }
}
export function getRecordElements(t) {
    if (t.fields != null) {
        return t.fields();
    }
    else {
        throw new Error(`${t.fullname} is not an F# record type`);
    }
}
export function getTupleElements(t) {
    if (isTuple(t)) {
        return t.generics();
    }
    else {
        throw new Error(`${t.fullname} is not a tuple type`);
    }
}
export function getFunctionElements(t) {
    if (isFunction(t)) {
        const gen = t.generics();
        return [gen[0], gen[1]];
    }
    else {
        throw new Error(`${t.fullname} is not an F# function type`);
    }
}
export function isUnion(t) {
    return t.cases != null;
}
export function isRecord(t) {
    return t.fields != null;
}
export function isTuple(t) {
    return t.fullname.startsWith("System.Tuple");
}
// In .NET this is false for delegates
export function isFunction(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
// FSharpValue
export function getUnionFields(v, t) {
    const cases = getUnionCases(t);
    const case_ = cases[v.tag];
    if (case_ == null) {
        throw new Error(`Cannot find case ${v.name} in union type`);
    }
    return [case_, v.fields];
}
export function getUnionCaseFields(uci) {
    return uci.fields == null ? [] : uci.fields.map((t, i) => ["Data" + i, t]);
}
export function getRecordFields(v) {
    return Object.keys(v).map((k) => v[k]);
}
export function getRecordField(v, field) {
    return v[field[0]];
}
export function getTupleFields(v) {
    return v;
}
export function getTupleField(v, i) {
    return v[i];
}
export function makeUnion(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) {
        throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    }
    return new uci.declaringType.constructor(uci.tag, uci.name, ...values);
}
export function makeRecord(t, values) {
    const fields = getRecordElements(t);
    if (fields.length !== values.length) {
        throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    }
    return new t.constructor(...values);
}
export function makeTuple(values, t) {
    return values;
}

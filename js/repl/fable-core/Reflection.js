define(["exports", "./Util"], function (exports, _Util) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.decimal = exports.float64 = exports.float32 = exports.uint32 = exports.int32 = exports.uint16 = exports.int16 = exports.uint8 = exports.int8 = exports.bool = exports.string = exports.char = exports.unit = exports.obj = exports.TypeInfo = exports.CaseInfo = undefined;
    exports.getGenerics = getGenerics;
    exports.equals = equals;
    exports.compare = compare;
    exports.type = type;
    exports.record = record;
    exports.union = union;
    exports.tuple = tuple;
    exports.delegate = delegate;
    exports.lambda = lambda;
    exports.option = option;
    exports.list = list;
    exports.array = array;
    exports.name = name;
    exports.fullName = fullName;
    exports.namespace = namespace;
    exports.isArray = isArray;
    exports.getElementType = getElementType;
    exports.isGenericType = isGenericType;
    exports.getGenericTypeDefinition = getGenericTypeDefinition;
    exports.getUnionCases = getUnionCases;
    exports.getRecordElements = getRecordElements;
    exports.getTupleElements = getTupleElements;
    exports.getFunctionElements = getFunctionElements;
    exports.isUnion = isUnion;
    exports.isRecord = isRecord;
    exports.isTuple = isTuple;
    exports.isFunction = isFunction;
    exports.getUnionFields = getUnionFields;
    exports.getUnionCaseFields = getUnionCaseFields;
    exports.getRecordFields = getRecordFields;
    exports.getRecordField = getRecordField;
    exports.getTupleFields = getTupleFields;
    exports.getTupleField = getTupleField;
    exports.makeUnion = makeUnion;
    exports.makeRecord = makeRecord;
    exports.makeTuple = makeTuple;
    class CaseInfo {
        constructor(declaringType, tag, name, fields) {
            this.declaringType = declaringType;
            this.tag = tag;
            this.name = name;
            this.fields = fields;
        }
    }
    exports.CaseInfo = CaseInfo;
    class TypeInfo {
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
    exports.TypeInfo = TypeInfo;
    function getGenerics(t) {
        return t.generics != null ? t.generics() : [];
    }
    function equals(t1, t2) {
        return t1.fullname === t2.fullname && (0, _Util.equalArraysWith)(getGenerics(t1), getGenerics(t2), equals);
    }
    // System.Type is not comparable in .NET, but let's implement this
    // in case users want to create a dictionary with types as keys
    function compare(t1, t2) {
        if (t1.fullname !== t2.fullname) {
            return t1.fullname < t2.fullname ? -1 : 1;
        } else {
            return (0, _Util.compareArraysWith)(getGenerics(t1), getGenerics(t2), compare);
        }
    }
    function type(fullname, generics) {
        return new TypeInfo(fullname, generics);
    }
    function record(fullname, generics, constructor, fields) {
        return new TypeInfo(fullname, generics, constructor, fields);
    }
    function union(fullname, generics, constructor, cases) {
        const t = new TypeInfo(fullname, generics, constructor, null, () => cases().map((x, i) => typeof x === "string" ? new CaseInfo(t, i, x) : new CaseInfo(t, i, x[0], x[1])));
        return t;
    }
    function tuple(...generics) {
        return new TypeInfo("System.Tuple`" + generics.length, () => generics);
    }
    function delegate(...generics) {
        return new TypeInfo("System.Func`" + generics.length, () => generics);
    }
    function lambda(argType, returnType) {
        return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", () => [argType, returnType]);
    }
    function option(generic) {
        return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", () => [generic]);
    }
    function list(generic) {
        return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", () => [generic]);
    }
    function array(generic) {
        return new TypeInfo(generic.fullname + "[]", () => [generic]);
    }
    const obj = exports.obj = new TypeInfo("System.Object");
    const unit = exports.unit = new TypeInfo("Microsoft.FSharp.Core.Unit");
    const char = exports.char = new TypeInfo("System.Char");
    const string = exports.string = new TypeInfo("System.String");
    const bool = exports.bool = new TypeInfo("System.Boolean");
    const int8 = exports.int8 = new TypeInfo("System.SByte");
    const uint8 = exports.uint8 = new TypeInfo("System.Byte");
    const int16 = exports.int16 = new TypeInfo("System.Int16");
    const uint16 = exports.uint16 = new TypeInfo("System.UInt16");
    const int32 = exports.int32 = new TypeInfo("System.Int32");
    const uint32 = exports.uint32 = new TypeInfo("System.UInt32");
    const float32 = exports.float32 = new TypeInfo("System.Single");
    const float64 = exports.float64 = new TypeInfo("System.Double");
    const decimal = exports.decimal = new TypeInfo("System.Decimal");
    function name(info) {
        if (Array.isArray(info)) {
            return info[0];
        } else if (info instanceof CaseInfo) {
            return info.name;
        } else {
            const i = info.fullname.lastIndexOf(".");
            return i === -1 ? info.fullname : info.fullname.substr(i + 1);
        }
    }
    function fullName(t) {
        const gen = t.generics != null && !isArray(t) ? t.generics() : [];
        if (gen.length > 0) {
            return t.fullname + "[" + gen.map(fullName).join(",") + "]";
        } else {
            return t.fullname;
        }
    }
    function namespace(t) {
        const i = t.fullname.lastIndexOf(".");
        return i === -1 ? "" : t.fullname.substr(0, i);
    }
    function isArray(t) {
        return t.fullname.endsWith("[]");
    }
    function getElementType(t) {
        return isArray(t) ? t.generics()[0] : null;
    }
    function isGenericType(t) {
        return t.generics != null && t.generics().length > 0;
    }
    /**
     * This doesn't replace types for fields (records) or cases (unions)
     * but it should be enough for type comparison purposes
     */
    function getGenericTypeDefinition(t) {
        return t.generics == null ? t : new TypeInfo(t.fullname, () => t.generics().map(() => obj));
    }
    // FSharpType
    function getUnionCases(t) {
        if (t.cases != null) {
            return t.cases();
        } else {
            throw new Error(`${t.fullname} is not an F# union type`);
        }
    }
    function getRecordElements(t) {
        if (t.fields != null) {
            return t.fields();
        } else {
            throw new Error(`${t.fullname} is not an F# record type`);
        }
    }
    function getTupleElements(t) {
        if (isTuple(t)) {
            return t.generics();
        } else {
            throw new Error(`${t.fullname} is not a tuple type`);
        }
    }
    function getFunctionElements(t) {
        if (isFunction(t)) {
            const gen = t.generics();
            return [gen[0], gen[1]];
        } else {
            throw new Error(`${t.fullname} is not an F# function type`);
        }
    }
    function isUnion(t) {
        return t.cases != null;
    }
    function isRecord(t) {
        return t.fields != null;
    }
    function isTuple(t) {
        return t.fullname.startsWith("System.Tuple");
    }
    // In .NET this is false for delegates
    function isFunction(t) {
        return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
    }
    // FSharpValue
    function getUnionFields(v, t) {
        const cases = getUnionCases(t);
        const case_ = cases[v.tag];
        if (case_ == null) {
            throw new Error(`Cannot find case ${v.name} in union type`);
        }
        return [case_, v.fields];
    }
    function getUnionCaseFields(uci) {
        return uci.fields == null ? [] : uci.fields.map((t, i) => ["Data" + i, t]);
    }
    function getRecordFields(v) {
        return Object.keys(v).map(k => v[k]);
    }
    function getRecordField(v, field) {
        return v[field[0]];
    }
    function getTupleFields(v) {
        return v;
    }
    function getTupleField(v, i) {
        return v[i];
    }
    function makeUnion(uci, values) {
        const expectedLength = (uci.fields || []).length;
        if (values.length !== expectedLength) {
            throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
        }
        return new uci.declaringType.constructor(uci.tag, uci.name, ...values);
    }
    function makeRecord(t, values) {
        const fields = getRecordElements(t);
        if (fields.length !== values.length) {
            throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
        }
        return new t.constructor(...values);
    }
    function makeTuple(values, t) {
        return values;
    }
});
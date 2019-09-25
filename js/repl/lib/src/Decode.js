import { toText, printf, validateGuid, join } from "../fable-library.2.4.2/String.js";
import { mapCurriedArgs, compare, curry, comparePrimitives, uncurry, int32ToString, partialApply } from "../fable-library.2.4.2/Util.js";
import { mapOk, defaultArg, some, Result } from "../fable-library.2.4.2/Option.js";
import { Util$$$CachedDecoders as Util$0024$0024$0024CachedDecoders, Util$002ECache$00601$$GetOrAdd$$43981464 as Util$0024002ECache$002400601$0024$0024GetOrAdd$0024$002443981464, ErrorReason } from "./Types.js";
import { tryParse } from "../fable-library.2.4.2/Int32.js";
import { toNumber, fromBits, tryParse as tryParse$$1, fromInteger } from "../fable-library.2.4.2/Long.js";
import { parse, fromInt32 } from "../fable-library.2.4.2/BigInt.js";
import { tryParse as tryParse$$2 } from "../fable-library.2.4.2/Decimal.js";
import Decimal from "../fable-library.2.4.2/Decimal.js";
import { toUniversalTime, tryParse as tryParse$$3, minValue } from "../fable-library.2.4.2/Date.js";
import { tryParse as tryParse$$4, minValue as minValue$$1 } from "../fable-library.2.4.2/DateOffset.js";
import { tryParse as tryParse$$5 } from "../fable-library.2.4.2/TimeSpan.js";
import { declare, List } from "../fable-library.2.4.2/Types.js";
import { ofArray, map as map$$1, length, ofSeq, append, reverse, fold, tryLast } from "../fable-library.2.4.2/List.js";
import { ofList as ofList$$1, map as map$$2, tryFind, foldBack2, foldBack, fill, fold as fold$$1 } from "../fable-library.2.4.2/Array.js";
import { fold as fold$$2 } from "../fable-library.2.4.2/Seq.js";
import { empty, tryFind as tryFind$$1, ofSeq as ofSeq$$1, ofList } from "../fable-library.2.4.2/Map.js";
import { getGenerics, getGenericTypeDefinition, makeTuple, getTupleElements, isTuple, isGenericType, getElementType, isArray, isUnion, makeRecord, getRecordElements, isRecord, fullName, getUnionCaseFields, makeUnion as makeUnion$$1, name as name$$6, getUnionCases, type } from "../fable-library.2.4.2/Reflection.js";
import { ofSeq as ofSeq$$2 } from "../fable-library.2.4.2/Set.js";
export function Helpers$$$getField(fieldName, o) {
  return o[fieldName];
}
export function Helpers$$$isString(o$$1) {
  return typeof o$$1 === "string";
}
export function Helpers$$$isBoolean(o$$2) {
  return typeof o$$2 === "boolean";
}
export function Helpers$$$isNumber(o$$3) {
  return typeof o$$3 === "number";
}
export function Helpers$$$isArray(o$$4) {
  return Array.isArray(o$$4);
}
export function Helpers$$$isNaN(o$$5) {
  return Number.isNaN(o$$5);
}
export function Helpers$$$isNullValue(o$$6) {
  return o$$6 == null;
}
export function Helpers$$$isUndefined(o$$7) {
  return typeof o$$7 === "undefined";
}
export function Helpers$$$isFunction(o$$8) {
  return typeof o$$8 === "function";
}
export function Helpers$$$objectKeys(o$$9) {
  return Object.keys(o$$9);
}
export function Helpers$$$asBool(o$$10) {
  return o$$10;
}
export function Helpers$$$asInt(o$$11) {
  return o$$11;
}
export function Helpers$$$asFloat(o$$12) {
  return o$$12;
}
export function Helpers$$$asString(o$$13) {
  return o$$13;
}
export function Helpers$$$asArray(o$$14) {
  return o$$14;
}

function genericMsg(msg, value$$1, newLine) {
  try {
    return "Expecting " + msg + " but instead got:" + (newLine ? "\n" : " ") + (JSON.stringify(value$$1, null, 4) + "");
  } catch (matchValue) {
    return "Expecting " + msg + " but decoder failed. Couldn't report given value due to circular structure." + (newLine ? "\n" : " ");
  }
}

function errorToString(path, error) {
  const reason$$1 = error.tag === 2 ? genericMsg(error.fields[0], error.fields[1], true) : error.tag === 1 ? genericMsg(error.fields[0], error.fields[1], false) + "\nReason: " + error.fields[2] : error.tag === 3 ? genericMsg(error.fields[0], error.fields[1], true) : error.tag === 4 ? genericMsg(error.fields[0], error.fields[1], true) + ("\nNode `" + error.fields[2] + "` is unkown.") : error.tag === 5 ? "Expecting " + error.fields[0] + ".\n" + (JSON.stringify(error.fields[1], null, 4) + "") : error.tag === 7 ? "I run into the following problems:\n\n" + join("\n\n", error.fields[0]) : error.tag === 6 ? "I run into a `fail` decoder: " + error.fields[0] : genericMsg(error.fields[0], error.fields[1], false);

  if (error.tag === 7) {
    return reason$$1;
  } else {
    return "Error at: `" + path + "`\n" + reason$$1;
  }
}

export function fromValue(path$$1, decoder, value$$8) {
  let matchValue$$1;
  const clo1 = partialApply(1, decoder, [path$$1]);
  matchValue$$1 = clo1(value$$8);

  if (matchValue$$1.tag === 1) {
    return new Result(1, "Error", errorToString(matchValue$$1.fields[0][0], matchValue$$1.fields[0][1]));
  } else {
    return new Result(0, "Ok", matchValue$$1.fields[0]);
  }
}
export function fromString(decoder$$1, value$$9) {
  try {
    const json = JSON.parse(value$$9);
    return fromValue("$", decoder$$1, json);
  } catch (matchValue$$2) {
    if (matchValue$$2 instanceof SyntaxError) {
      return new Result(1, "Error", "Given an invalid JSON: " + matchValue$$2.message);
    } else {
      throw matchValue$$2;
    }
  }
}
export function unsafeFromString(decoder$$2, value$$10) {
  const matchValue$$3 = fromString(decoder$$2, value$$10);

  if (matchValue$$3.tag === 1) {
    throw new Error(matchValue$$3.fields[0]);
  } else {
    return matchValue$$3.fields[0];
  }
}
export function decodeValue(path$$3, decoder$$3) {
  return function (value$$11) {
    return fromValue(path$$3, decoder$$3, value$$11);
  };
}
export function decodeString(decoder$$5) {
  return function (value$$12) {
    return fromString(decoder$$5, value$$12);
  };
}
export function string(path$$4, value$$13) {
  if (typeof value$$13 === "string") {
    return new Result(0, "Ok", value$$13);
  } else {
    const arg0 = [path$$4, new ErrorReason(0, "BadPrimitive", "a string", value$$13)];
    return new Result(1, "Error", arg0);
  }
}
export function guid(path$$5, value$$14) {
  if (typeof value$$14 === "string") {
    const matchValue$$4 = validateGuid(value$$14, true);

    if (matchValue$$4[0]) {
      return new Result(0, "Ok", matchValue$$4[1]);
    } else {
      const arg0$$1 = [path$$5, new ErrorReason(0, "BadPrimitive", "a guid", value$$14)];
      return new Result(1, "Error", arg0$$1);
    }
  } else {
    const arg0$$2 = [path$$5, new ErrorReason(0, "BadPrimitive", "a guid", value$$14)];
    return new Result(1, "Error", arg0$$2);
  }
}
export function int$(path$$6, value$$15) {
  if (typeof value$$15 === "number") {
    if (-2147483648 < value$$15 && value$$15 < 2147483647 && (value$$15 | 0) === value$$15) {
      return new Result(0, "Ok", value$$15);
    } else {
      const arg0$$3 = [path$$6, new ErrorReason(1, "BadPrimitiveExtra", "an int", value$$15, "Value was either too large or too small for an int")];
      return new Result(1, "Error", arg0$$3);
    }
  } else if (typeof value$$15 === "string") {
    const matchValue$$5 = tryParse(value$$15, 511, false, 32);

    if (matchValue$$5[0]) {
      return new Result(0, "Ok", matchValue$$5[1]);
    } else {
      const arg0$$4 = [path$$6, new ErrorReason(0, "BadPrimitive", "an int", value$$15)];
      return new Result(1, "Error", arg0$$4);
    }
  } else {
    const arg0$$5 = [path$$6, new ErrorReason(0, "BadPrimitive", "an int", value$$15)];
    return new Result(1, "Error", arg0$$5);
  }
}
export function int64(path$$7, value$$16) {
  if (typeof value$$16 === "number") {
    let arg0$$6;
    const value$$17 = value$$16 | 0;
    arg0$$6 = fromInteger(value$$17, false, 2);
    return new Result(0, "Ok", arg0$$6);
  } else if (typeof value$$16 === "string") {
    const matchValue$$6 = tryParse$$1(value$$16, 511, false, 64);

    if (matchValue$$6[0]) {
      return new Result(0, "Ok", matchValue$$6[1]);
    } else {
      const arg0$$7 = [path$$7, new ErrorReason(0, "BadPrimitive", "an int64", value$$16)];
      return new Result(1, "Error", arg0$$7);
    }
  } else {
    const arg0$$8 = [path$$7, new ErrorReason(0, "BadPrimitive", "an int64", value$$16)];
    return new Result(1, "Error", arg0$$8);
  }
}
export function uint32(path$$8, value$$18) {
  if (typeof value$$18 === "number") {
    const x$$4 = value$$18;

    if (x$$4 >= 0 ? x$$4 <= 4294967295 : false) {
      let arg0$$9;
      const value$$19 = value$$18 | 0;
      arg0$$9 = value$$19 >>> 0;
      return new Result(0, "Ok", arg0$$9);
    } else {
      const arg0$$10 = [path$$8, new ErrorReason(1, "BadPrimitiveExtra", "an uint32", value$$18, "Value was either too large or too small for an uint32")];
      return new Result(1, "Error", arg0$$10);
    }
  } else if (typeof value$$18 === "string") {
    const matchValue$$7 = tryParse(value$$18, 511, true, 32);

    if (matchValue$$7[0]) {
      return new Result(0, "Ok", matchValue$$7[1]);
    } else {
      const arg0$$11 = [path$$8, new ErrorReason(0, "BadPrimitive", "an uint32", value$$18)];
      return new Result(1, "Error", arg0$$11);
    }
  } else {
    const arg0$$12 = [path$$8, new ErrorReason(0, "BadPrimitive", "an uint32", value$$18)];
    return new Result(1, "Error", arg0$$12);
  }
}
export function uint64(path$$9, value$$20) {
  if (typeof value$$20 === "number") {
    const x$$6 = value$$20;

    if (x$$6 >= 0 ? x$$6 <= toNumber(fromBits(4294967295, 4294967295, true)) : false) {
      let arg0$$13;
      const value$$21 = value$$20 | 0;
      arg0$$13 = fromInteger(value$$21, true, 2);
      return new Result(0, "Ok", arg0$$13);
    } else {
      const arg0$$14 = [path$$9, new ErrorReason(1, "BadPrimitiveExtra", "an uint64", value$$20, "Value was either too large or too small for an uint64")];
      return new Result(1, "Error", arg0$$14);
    }
  } else if (typeof value$$20 === "string") {
    const matchValue$$8 = tryParse$$1(value$$20, 511, true, 64);

    if (matchValue$$8[0]) {
      return new Result(0, "Ok", matchValue$$8[1]);
    } else {
      const arg0$$15 = [path$$9, new ErrorReason(0, "BadPrimitive", "an uint64", value$$20)];
      return new Result(1, "Error", arg0$$15);
    }
  } else {
    const arg0$$16 = [path$$9, new ErrorReason(0, "BadPrimitive", "an uint64", value$$20)];
    return new Result(1, "Error", arg0$$16);
  }
}
export function bigint(path$$10, value$$22) {
  if (typeof value$$22 === "number") {
    let arg0$$17;
    const arg00$$1 = value$$22 | 0;
    arg0$$17 = fromInt32(arg00$$1);
    return new Result(0, "Ok", arg0$$17);
  } else if (typeof value$$22 === "string") {
    try {
      const arg0$$18 = parse(value$$22);
      return new Result(0, "Ok", arg0$$18);
    } catch (matchValue$$9) {
      const arg0$$19 = [path$$10, new ErrorReason(0, "BadPrimitive", "a bigint", value$$22)];
      return new Result(1, "Error", arg0$$19);
    }
  } else {
    const arg0$$20 = [path$$10, new ErrorReason(0, "BadPrimitive", "a bigint", value$$22)];
    return new Result(1, "Error", arg0$$20);
  }
}
export function bool(path$$11, value$$23) {
  if (typeof value$$23 === "boolean") {
    return new Result(0, "Ok", value$$23);
  } else {
    const arg0$$21 = [path$$11, new ErrorReason(0, "BadPrimitive", "a boolean", value$$23)];
    return new Result(1, "Error", arg0$$21);
  }
}
export function float$(path$$12, value$$24) {
  if (typeof value$$24 === "number") {
    return new Result(0, "Ok", value$$24);
  } else {
    const arg0$$22 = [path$$12, new ErrorReason(0, "BadPrimitive", "a float", value$$24)];
    return new Result(1, "Error", arg0$$22);
  }
}
export function decimal(path$$13, value$$25) {
  if (typeof value$$25 === "number") {
    let arg0$$23;
    const value$$26 = value$$25;
    arg0$$23 = new Decimal(value$$26);
    return new Result(0, "Ok", arg0$$23);
  } else if (typeof value$$25 === "string") {
    const matchValue$$10 = tryParse$$2(value$$25);

    if (matchValue$$10[0]) {
      return new Result(0, "Ok", matchValue$$10[1]);
    } else {
      const arg0$$24 = [path$$13, new ErrorReason(0, "BadPrimitive", "a decimal", value$$25)];
      return new Result(1, "Error", arg0$$24);
    }
  } else {
    const arg0$$25 = [path$$13, new ErrorReason(0, "BadPrimitive", "a decimal", value$$25)];
    return new Result(1, "Error", arg0$$25);
  }
}
export function datetime(path$$14, value$$27) {
  if (typeof value$$27 === "string") {
    const matchValue$$11 = tryParse$$3(value$$27, minValue());

    if (matchValue$$11[0]) {
      const arg0$$26 = toUniversalTime(matchValue$$11[1]);
      return new Result(0, "Ok", arg0$$26);
    } else {
      const arg0$$27 = [path$$14, new ErrorReason(0, "BadPrimitive", "a datetime", value$$27)];
      return new Result(1, "Error", arg0$$27);
    }
  } else {
    const arg0$$28 = [path$$14, new ErrorReason(0, "BadPrimitive", "a datetime", value$$27)];
    return new Result(1, "Error", arg0$$28);
  }
}
export function datetimeOffset(path$$15, value$$28) {
  if (typeof value$$28 === "string") {
    const matchValue$$12 = tryParse$$4(value$$28, minValue$$1());

    if (matchValue$$12[0]) {
      return new Result(0, "Ok", matchValue$$12[1]);
    } else {
      const arg0$$29 = [path$$15, new ErrorReason(0, "BadPrimitive", "a datetimeoffset", value$$28)];
      return new Result(1, "Error", arg0$$29);
    }
  } else {
    const arg0$$30 = [path$$15, new ErrorReason(0, "BadPrimitive", "a datetime", value$$28)];
    return new Result(1, "Error", arg0$$30);
  }
}
export function timespan(path$$16, value$$29) {
  if (typeof value$$29 === "string") {
    const matchValue$$13 = tryParse$$5(value$$29, 0);

    if (matchValue$$13[0]) {
      return new Result(0, "Ok", matchValue$$13[1]);
    } else {
      const arg0$$31 = [path$$16, new ErrorReason(0, "BadPrimitive", "a timespan", value$$29)];
      return new Result(1, "Error", arg0$$31);
    }
  } else {
    const arg0$$32 = [path$$16, new ErrorReason(0, "BadPrimitive", "a timespan", value$$29)];
    return new Result(1, "Error", arg0$$32);
  }
}

function decodeMaybeNull(path$$17, decoder$$7, value$$30) {
  var o$$55;
  let matchValue$$14;
  const clo1$$1 = partialApply(1, decoder$$7, [path$$17]);
  matchValue$$14 = clo1$$1(value$$30);

  if (matchValue$$14.tag === 1) {
    if (o$$55 = value$$30, o$$55 == null) {
      return new Result(0, "Ok", null);
    } else {
      if (matchValue$$14.tag === 1) {
        return new Result(1, "Error", matchValue$$14.fields[0]);
      } else {
        throw new Error("The match cases were incomplete");
      }
    }
  } else {
    return new Result(0, "Ok", some(matchValue$$14.fields[0]));
  }
}

export function optional(fieldName$$2, decoder$$8, path$$18, value$$31) {
  if (value$$31 === null ? false : Object.getPrototypeOf(value$$31 || false) === Object.prototype) {
    const fieldValue = value$$31[fieldName$$2];

    if (Helpers$$$isUndefined(fieldValue)) {
      return new Result(0, "Ok", null);
    } else {
      return decodeMaybeNull(path$$18 + "." + fieldName$$2, decoder$$8, fieldValue);
    }
  } else {
    return new Result(1, "Error", [path$$18, new ErrorReason(2, "BadType", "an object", value$$31)]);
  }
}

function badPathError(fieldNames, currentPath, value$$32) {
  var strings, option$$1;
  const currentPath$$1 = defaultArg(currentPath, (strings = new List("$", fieldNames), (join(".", strings))));
  const msg$$9 = "an object with path `" + join(".", fieldNames) + "`";
  return new Result(1, "Error", [currentPath$$1, new ErrorReason(4, "BadPath", msg$$9, value$$32, (option$$1 = tryLast(fieldNames), (defaultArg(option$$1, ""))))]);
}

export function optionalAt(fieldNames$$1, decoder$$9, firstPath, firstValue) {
  let _arg1;

  const state = [firstPath, firstValue, null];
  _arg1 = fold(function folder(tupledArg, field$$1) {
    if (tupledArg[2] == null) {
      if (tupledArg[1] == null) {
        const res$$1 = badPathError(fieldNames$$1, tupledArg[0], firstValue);
        return [tupledArg[0], tupledArg[1], res$$1];
      } else if (tupledArg[1] === null ? false : Object.getPrototypeOf(tupledArg[1] || false) === Object.prototype) {
        const curValue$$1 = tupledArg[1][field$$1];
        return [tupledArg[0] + "." + field$$1, curValue$$1, null];
      } else {
        const res$$2 = new Result(1, "Error", [tupledArg[0], new ErrorReason(2, "BadType", "an object", tupledArg[1])]);
        return [tupledArg[0], tupledArg[1], res$$2];
      }
    } else {
      return [tupledArg[0], tupledArg[1], tupledArg[2]];
    }
  }, state, fieldNames$$1);

  if (_arg1[2] == null) {
    if (Helpers$$$isUndefined(_arg1[1])) {
      return new Result(0, "Ok", null);
    } else {
      return decodeMaybeNull(_arg1[0], decoder$$9, _arg1[1]);
    }
  } else {
    const res$$3 = _arg1[2];
    return res$$3;
  }
}
export function field(fieldName$$5, decoder$$10, path$$19, value$$34) {
  if (value$$34 === null ? false : Object.getPrototypeOf(value$$34 || false) === Object.prototype) {
    const fieldValue$$1 = value$$34[fieldName$$5];

    if (Helpers$$$isUndefined(fieldValue$$1)) {
      return new Result(1, "Error", [path$$19, new ErrorReason(3, "BadField", "an object with a field named `" + fieldName$$5 + "`", value$$34)]);
    } else {
      return decoder$$10(path$$19 + "." + fieldName$$5, fieldValue$$1);
    }
  } else {
    return new Result(1, "Error", [path$$19, new ErrorReason(2, "BadType", "an object", value$$34)]);
  }
}
export function at(fieldNames$$2, decoder$$11, firstPath$$1, firstValue$$1) {
  let _arg1$$1;

  const state$$1 = [firstPath$$1, firstValue$$1, null];
  _arg1$$1 = fold(function folder$$1(tupledArg$$1, field$$2) {
    if (tupledArg$$1[2] == null) {
      if (tupledArg$$1[1] == null) {
        const res$$5 = badPathError(fieldNames$$2, tupledArg$$1[0], firstValue$$1);
        return [tupledArg$$1[0], tupledArg$$1[1], res$$5];
      } else if (tupledArg$$1[1] === null ? false : Object.getPrototypeOf(tupledArg$$1[1] || false) === Object.prototype) {
        const curValue$$3 = tupledArg$$1[1][field$$2];

        if (Helpers$$$isUndefined(curValue$$3)) {
          const res$$6 = badPathError(fieldNames$$2, null, firstValue$$1);
          return [tupledArg$$1[0], curValue$$3, res$$6];
        } else {
          return [tupledArg$$1[0] + "." + field$$2, curValue$$3, null];
        }
      } else {
        const res$$7 = new Result(1, "Error", [tupledArg$$1[0], new ErrorReason(2, "BadType", "an object", tupledArg$$1[1])]);
        return [tupledArg$$1[0], tupledArg$$1[1], res$$7];
      }
    } else {
      return [tupledArg$$1[0], tupledArg$$1[1], tupledArg$$1[2]];
    }
  }, state$$1, fieldNames$$2);

  if (_arg1$$1[2] == null) {
    return decoder$$11(_arg1$$1[0], _arg1$$1[1]);
  } else {
    const res$$8 = _arg1$$1[2];
    return res$$8;
  }
}
export function index(requestedIndex, decoder$$12, path$$20, value$$35) {
  var copyOfStruct;
  const currentPath$$2 = path$$20 + ".[" + int32ToString(requestedIndex) + "]";

  if (Array.isArray(value$$35)) {
    const vArray = value$$35;

    if (requestedIndex < vArray.length) {
      return decoder$$12(currentPath$$2, vArray[requestedIndex]);
    } else {
      const msg$$10 = "a longer array. Need index `" + int32ToString(requestedIndex) + "` but there are only `" + (copyOfStruct = vArray.length | 0, int32ToString(copyOfStruct)) + "` entries";
      const arg0$$33 = [currentPath$$2, new ErrorReason(5, "TooSmallArray", msg$$10, value$$35)];
      return new Result(1, "Error", arg0$$33);
    }
  } else {
    const arg0$$34 = [currentPath$$2, new ErrorReason(0, "BadPrimitive", "an array", value$$35)];
    return new Result(1, "Error", arg0$$34);
  }
}
export function option(decoder$$13, path$$21, value$$36) {
  if (value$$36 == null) {
    return new Result(0, "Ok", null);
  } else {
    const result = decoder$$13(path$$21, value$$36);
    return mapOk(function mapping(arg0$$35) {
      return some(arg0$$35);
    }, result);
  }
}
export function list(decoder$$14, path$$22, value$$37) {
  if (Array.isArray(value$$37)) {
    let i = -1 | 0;
    const tokens = value$$37;
    let result$$1;
    const state$$2 = new Result(0, "Ok", new List());
    result$$1 = fold$$1(function folder$$2(acc, value$$38) {
      i = i + 1;

      if (acc.tag === 0) {
        const matchValue$$15 = decoder$$14(path$$22 + ".[" + int32ToString(i) + "]", value$$38);

        if (matchValue$$15.tag === 0) {
          return new Result(0, "Ok", new List(matchValue$$15.fields[0], acc.fields[0]));
        } else {
          return new Result(1, "Error", matchValue$$15.fields[0]);
        }
      } else {
        return acc;
      }
    }, state$$2, tokens);
    return mapOk(reverse, result$$1);
  } else {
    const arg0$$36 = [path$$22, new ErrorReason(0, "BadPrimitive", "a list", value$$37)];
    return new Result(1, "Error", arg0$$36);
  }
}
export function array(decoder$$15, path$$23, value$$40) {
  if (Array.isArray(value$$40)) {
    let i$$1 = -1 | 0;
    const tokens$$1 = value$$40;
    const arr = fill(new Array(tokens$$1.length), 0, tokens$$1.length, null);
    const state$$3 = new Result(0, "Ok", arr);
    return fold$$1(function folder$$3(acc$$2, value$$41) {
      i$$1 = i$$1 + 1;

      if (acc$$2.tag === 0) {
        const matchValue$$16 = decoder$$15(path$$23 + ".[" + int32ToString(i$$1) + "]", value$$41);

        if (matchValue$$16.tag === 0) {
          acc$$2.fields[0][i$$1] = matchValue$$16.fields[0];
          return new Result(0, "Ok", acc$$2.fields[0]);
        } else {
          return new Result(1, "Error", matchValue$$16.fields[0]);
        }
      } else {
        return acc$$2;
      }
    }, state$$3, tokens$$1);
  } else {
    const arg0$$37 = [path$$23, new ErrorReason(0, "BadPrimitive", "an array", value$$40)];
    return new Result(1, "Error", arg0$$37);
  }
}
export function keyValuePairs(decoder$$16, path$$24, value$$43) {
  if (value$$43 === null ? false : Object.getPrototypeOf(value$$43 || false) === Object.prototype) {
    let result$$2;
    const state$$4 = new Result(0, "Ok", new List());
    const source = Object.keys(value$$43);
    result$$2 = fold$$2(function folder$$4(acc$$4, prop) {
      if (acc$$4.tag === 0) {
        const matchValue$$17 = decoder$$16(path$$24, value$$43[prop]);

        if (matchValue$$17.tag === 0) {
          const arg0$$38 = new List([prop, matchValue$$17.fields[0]], acc$$4.fields[0]);
          return new Result(0, "Ok", arg0$$38);
        } else {
          return new Result(1, "Error", matchValue$$17.fields[0]);
        }
      } else {
        return acc$$4;
      }
    }, state$$4, source);
    return mapOk(reverse, result$$2);
  } else {
    const arg0$$39 = [path$$24, new ErrorReason(0, "BadPrimitive", "an object", value$$43)];
    return new Result(1, "Error", arg0$$39);
  }
}
export function oneOf(decoders, path$$25, value$$45) {
  const runner = function runner($decoders$$1$$121, $errors$$122) {
    runner: while (true) {
      const decoders$$1 = $decoders$$1$$121,
            errors = $errors$$122;

      if (decoders$$1.tail == null) {
        const arg0$$40 = [path$$25, new ErrorReason(7, "BadOneOf", errors)];
        return new Result(1, "Error", arg0$$40);
      } else {
        const matchValue$$18 = fromValue(path$$25, uncurry(2, decoders$$1.head), value$$45);

        if (matchValue$$18.tag === 1) {
          $decoders$$1$$121 = decoders$$1.tail;
          $errors$$122 = append(errors, new List(matchValue$$18.fields[0], new List()));
          continue runner;
        } else {
          return new Result(0, "Ok", matchValue$$18.fields[0]);
        }
      }

      break;
    }
  };

  return runner(decoders, new List());
}
export function nil(output, path$$26, value$$46) {
  if (value$$46 == null) {
    return new Result(0, "Ok", output);
  } else {
    const arg0$$41 = [path$$26, new ErrorReason(0, "BadPrimitive", "null", value$$46)];
    return new Result(1, "Error", arg0$$41);
  }
}
export function value(_arg1$$2, v$$2) {
  return new Result(0, "Ok", v$$2);
}
export function succeed(output$$1, _arg2, _arg1$$3) {
  return new Result(0, "Ok", output$$1);
}
export function fail(msg$$11, path$$27, _arg1$$4) {
  const arg0$$42 = [path$$27, new ErrorReason(6, "FailMessage", msg$$11)];
  return new Result(1, "Error", arg0$$42);
}
export function andThen(cb, decoder$$17, path$$28, value$$47) {
  const matchValue$$19 = decoder$$17(path$$28, value$$47);

  if (matchValue$$19.tag === 0) {
    return cb(matchValue$$19.fields[0], path$$28, value$$47);
  } else {
    return new Result(1, "Error", matchValue$$19.fields[0]);
  }
}
export function map(ctor, d1, path$$29, value$$48) {
  const matchValue$$20 = d1(path$$29, value$$48);

  if (matchValue$$20.tag === 1) {
    return new Result(1, "Error", matchValue$$20.fields[0]);
  } else {
    return new Result(0, "Ok", ctor(matchValue$$20.fields[0]));
  }
}
export function map2(ctor$$1, d1$$1, d2, path$$30, value$$49) {
  const matchValue$$21 = [d1$$1(path$$30, value$$49), d2(path$$30, value$$49)];

  if (matchValue$$21[0].tag === 1) {
    return new Result(1, "Error", matchValue$$21[0].fields[0]);
  } else if (matchValue$$21[1].tag === 1) {
    return new Result(1, "Error", matchValue$$21[1].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$1(matchValue$$21[0].fields[0], matchValue$$21[1].fields[0]));
  }
}
export function map3(ctor$$2, d1$$2, d2$$1, d3, path$$31, value$$50) {
  const matchValue$$22 = [d1$$2(path$$31, value$$50), d2$$1(path$$31, value$$50), d3(path$$31, value$$50)];

  if (matchValue$$22[0].tag === 1) {
    return new Result(1, "Error", matchValue$$22[0].fields[0]);
  } else if (matchValue$$22[1].tag === 1) {
    return new Result(1, "Error", matchValue$$22[1].fields[0]);
  } else if (matchValue$$22[2].tag === 1) {
    return new Result(1, "Error", matchValue$$22[2].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$2(matchValue$$22[0].fields[0], matchValue$$22[1].fields[0], matchValue$$22[2].fields[0]));
  }
}
export function map4(ctor$$3, d1$$3, d2$$2, d3$$1, d4, path$$32, value$$51) {
  const matchValue$$23 = [d1$$3(path$$32, value$$51), d2$$2(path$$32, value$$51), d3$$1(path$$32, value$$51), d4(path$$32, value$$51)];

  if (matchValue$$23[0].tag === 1) {
    return new Result(1, "Error", matchValue$$23[0].fields[0]);
  } else if (matchValue$$23[1].tag === 1) {
    return new Result(1, "Error", matchValue$$23[1].fields[0]);
  } else if (matchValue$$23[2].tag === 1) {
    return new Result(1, "Error", matchValue$$23[2].fields[0]);
  } else if (matchValue$$23[3].tag === 1) {
    return new Result(1, "Error", matchValue$$23[3].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$3(matchValue$$23[0].fields[0], matchValue$$23[1].fields[0], matchValue$$23[2].fields[0], matchValue$$23[3].fields[0]));
  }
}
export function map5(ctor$$4, d1$$4, d2$$3, d3$$2, d4$$1, d5, path$$33, value$$52) {
  const matchValue$$24 = [d1$$4(path$$33, value$$52), d2$$3(path$$33, value$$52), d3$$2(path$$33, value$$52), d4$$1(path$$33, value$$52), d5(path$$33, value$$52)];

  if (matchValue$$24[0].tag === 1) {
    return new Result(1, "Error", matchValue$$24[0].fields[0]);
  } else if (matchValue$$24[1].tag === 1) {
    return new Result(1, "Error", matchValue$$24[1].fields[0]);
  } else if (matchValue$$24[2].tag === 1) {
    return new Result(1, "Error", matchValue$$24[2].fields[0]);
  } else if (matchValue$$24[3].tag === 1) {
    return new Result(1, "Error", matchValue$$24[3].fields[0]);
  } else if (matchValue$$24[4].tag === 1) {
    return new Result(1, "Error", matchValue$$24[4].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$4(matchValue$$24[0].fields[0], matchValue$$24[1].fields[0], matchValue$$24[2].fields[0], matchValue$$24[3].fields[0], matchValue$$24[4].fields[0]));
  }
}
export function map6(ctor$$5, d1$$5, d2$$4, d3$$3, d4$$2, d5$$1, d6, path$$34, value$$53) {
  const matchValue$$25 = [d1$$5(path$$34, value$$53), d2$$4(path$$34, value$$53), d3$$3(path$$34, value$$53), d4$$2(path$$34, value$$53), d5$$1(path$$34, value$$53), d6(path$$34, value$$53)];

  if (matchValue$$25[0].tag === 1) {
    return new Result(1, "Error", matchValue$$25[0].fields[0]);
  } else if (matchValue$$25[1].tag === 1) {
    return new Result(1, "Error", matchValue$$25[1].fields[0]);
  } else if (matchValue$$25[2].tag === 1) {
    return new Result(1, "Error", matchValue$$25[2].fields[0]);
  } else if (matchValue$$25[3].tag === 1) {
    return new Result(1, "Error", matchValue$$25[3].fields[0]);
  } else if (matchValue$$25[4].tag === 1) {
    return new Result(1, "Error", matchValue$$25[4].fields[0]);
  } else if (matchValue$$25[5].tag === 1) {
    return new Result(1, "Error", matchValue$$25[5].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$5(matchValue$$25[0].fields[0], matchValue$$25[1].fields[0], matchValue$$25[2].fields[0], matchValue$$25[3].fields[0], matchValue$$25[4].fields[0], matchValue$$25[5].fields[0]));
  }
}
export function map7(ctor$$6, d1$$6, d2$$5, d3$$4, d4$$3, d5$$2, d6$$1, d7, path$$35, value$$54) {
  const matchValue$$26 = [d1$$6(path$$35, value$$54), d2$$5(path$$35, value$$54), d3$$4(path$$35, value$$54), d4$$3(path$$35, value$$54), d5$$2(path$$35, value$$54), d6$$1(path$$35, value$$54), d7(path$$35, value$$54)];

  if (matchValue$$26[0].tag === 1) {
    return new Result(1, "Error", matchValue$$26[0].fields[0]);
  } else if (matchValue$$26[1].tag === 1) {
    return new Result(1, "Error", matchValue$$26[1].fields[0]);
  } else if (matchValue$$26[2].tag === 1) {
    return new Result(1, "Error", matchValue$$26[2].fields[0]);
  } else if (matchValue$$26[3].tag === 1) {
    return new Result(1, "Error", matchValue$$26[3].fields[0]);
  } else if (matchValue$$26[4].tag === 1) {
    return new Result(1, "Error", matchValue$$26[4].fields[0]);
  } else if (matchValue$$26[5].tag === 1) {
    return new Result(1, "Error", matchValue$$26[5].fields[0]);
  } else if (matchValue$$26[6].tag === 1) {
    return new Result(1, "Error", matchValue$$26[6].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$6(matchValue$$26[0].fields[0], matchValue$$26[1].fields[0], matchValue$$26[2].fields[0], matchValue$$26[3].fields[0], matchValue$$26[4].fields[0], matchValue$$26[5].fields[0], matchValue$$26[6].fields[0]));
  }
}
export function map8(ctor$$7, d1$$7, d2$$6, d3$$5, d4$$4, d5$$3, d6$$2, d7$$1, d8, path$$36, value$$55) {
  const matchValue$$27 = [d1$$7(path$$36, value$$55), d2$$6(path$$36, value$$55), d3$$5(path$$36, value$$55), d4$$4(path$$36, value$$55), d5$$3(path$$36, value$$55), d6$$2(path$$36, value$$55), d7$$1(path$$36, value$$55), d8(path$$36, value$$55)];

  if (matchValue$$27[0].tag === 1) {
    return new Result(1, "Error", matchValue$$27[0].fields[0]);
  } else if (matchValue$$27[1].tag === 1) {
    return new Result(1, "Error", matchValue$$27[1].fields[0]);
  } else if (matchValue$$27[2].tag === 1) {
    return new Result(1, "Error", matchValue$$27[2].fields[0]);
  } else if (matchValue$$27[3].tag === 1) {
    return new Result(1, "Error", matchValue$$27[3].fields[0]);
  } else if (matchValue$$27[4].tag === 1) {
    return new Result(1, "Error", matchValue$$27[4].fields[0]);
  } else if (matchValue$$27[5].tag === 1) {
    return new Result(1, "Error", matchValue$$27[5].fields[0]);
  } else if (matchValue$$27[6].tag === 1) {
    return new Result(1, "Error", matchValue$$27[6].fields[0]);
  } else if (matchValue$$27[7].tag === 1) {
    return new Result(1, "Error", matchValue$$27[7].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$7(matchValue$$27[0].fields[0], matchValue$$27[1].fields[0], matchValue$$27[2].fields[0], matchValue$$27[3].fields[0], matchValue$$27[4].fields[0], matchValue$$27[5].fields[0], matchValue$$27[6].fields[0], matchValue$$27[7].fields[0]));
  }
}
export function dict(decoder$$18) {
  return function (path$$38) {
    return function (value$$57) {
      return map(function ctor$$8(elements) {
        return ofList(elements, {
          Compare: comparePrimitives
        });
      }, function d1$$8(path$$37, value$$56) {
        return keyValuePairs(decoder$$18, path$$37, value$$56);
      }, path$$38, value$$57);
    };
  };
}

function unwrapWith(errors$$1, path$$39, decoder$$20, value$$58) {
  let matchValue$$28;
  const clo1$$2 = partialApply(1, decoder$$20, [path$$39]);
  matchValue$$28 = clo1$$2(value$$58);

  if (matchValue$$28.tag === 1) {
    errors$$1.push(matchValue$$28.fields[0]);
    return null;
  } else {
    return matchValue$$28.fields[0];
  }
}

export const Getters$00601 = declare(function Thoth_Json_Decode_Getters(path$$40, v$$4) {
  const $this$$3 = this;
  $this$$3.errors = [];
  $this$$3.required = {
    Field(fieldName$$9, decoder$$21) {
      return unwrapWith($this$$3.errors, path$$40, function (path$$41, value$$59) {
        return field(fieldName$$9, decoder$$21, path$$41, value$$59);
      }, v$$4);
    },

    At(fieldNames$$3, decoder$$23) {
      return unwrapWith($this$$3.errors, path$$40, function (firstPath$$2, firstValue$$2) {
        return at(fieldNames$$3, decoder$$23, firstPath$$2, firstValue$$2);
      }, v$$4);
    },

    Raw(decoder$$25) {
      return unwrapWith($this$$3.errors, path$$40, decoder$$25, v$$4);
    }

  };
  $this$$3.optional = {
    Field(fieldName$$10, decoder$$26) {
      return unwrapWith($this$$3.errors, path$$40, function (path$$42, value$$60) {
        return optional(fieldName$$10, decoder$$26, path$$42, value$$60);
      }, v$$4);
    },

    At(fieldNames$$4, decoder$$28) {
      return unwrapWith($this$$3.errors, path$$40, function (firstPath$$3, firstValue$$3) {
        return optionalAt(fieldNames$$4, decoder$$28, firstPath$$3, firstValue$$3);
      }, v$$4);
    },

    Raw(decoder$$30) {
      let matchValue$$29;
      const clo1$$3 = partialApply(1, decoder$$30, [path$$40]);
      matchValue$$29 = clo1$$3(v$$4);

      if (matchValue$$29.tag === 1) {
        var $target$$206, v$$6;

        if (matchValue$$29.fields[0][1].tag === 1) {
          $target$$206 = 0;
          v$$6 = matchValue$$29.fields[0][1].fields[1];
        } else if (matchValue$$29.fields[0][1].tag === 2) {
          $target$$206 = 0;
          v$$6 = matchValue$$29.fields[0][1].fields[1];
        } else if (matchValue$$29.fields[0][1].tag === 3) {
          $target$$206 = 1;
        } else if (matchValue$$29.fields[0][1].tag === 4) {
          $target$$206 = 1;
        } else if (matchValue$$29.fields[0][1].tag === 5) {
          $target$$206 = 2;
        } else if (matchValue$$29.fields[0][1].tag === 6) {
          $target$$206 = 2;
        } else if (matchValue$$29.fields[0][1].tag === 7) {
          $target$$206 = 2;
        } else {
          $target$$206 = 0;
          v$$6 = matchValue$$29.fields[0][1].fields[1];
        }

        switch ($target$$206) {
          case 0:
            {
              if (v$$6 == null) {
                return null;
              } else {
                $this$$3.errors.push(matchValue$$29.fields[0]);
                return null;
              }
            }

          case 1:
            {
              return null;
            }

          case 2:
            {
              $this$$3.errors.push(matchValue$$29.fields[0]);
              return null;
            }
        }
      } else {
        return some(matchValue$$29.fields[0]);
      }
    }

  };
});
export function Getters$00601$reflection($gen$$207) {
  return type("Thoth.Json.Decode.Getters`1", [$gen$$207]);
}
export function Getters$00601$$$$002Ector$$4A51B60E(path$$40, v$$4) {
  return this instanceof Getters$00601 ? Getters$00601.call(this, path$$40, v$$4) : new Getters$00601(path$$40, v$$4);
}
export function Getters$00601$$get_Errors(__$$6) {
  return ofSeq(__$$6.errors);
}
Object.defineProperty(Getters$00601.prototype, "Required", {
  "get": function () {
    const __$$7 = this;
    return __$$7.required;
  }
});
Object.defineProperty(Getters$00601.prototype, "Optional", {
  "get": function () {
    const __$$8 = this;
    return __$$8.optional;
  }
});
export function object(builder, path$$43, v$$7) {
  const getters = Getters$00601$$$$002Ector$$4A51B60E(path$$43, v$$7);
  let result$$4;
  result$$4 = builder(getters);
  const matchValue$$30 = Getters$00601$$get_Errors(getters);

  if (matchValue$$30.tail != null) {
    if (length(matchValue$$30) > 1) {
      const errors$$3 = map$$1(function (tupledArg$$2) {
        return errorToString(tupledArg$$2[0], tupledArg$$2[1]);
      }, matchValue$$30);
      const arg0$$43 = [path$$43, new ErrorReason(7, "BadOneOf", errors$$3)];
      return new Result(1, "Error", arg0$$43);
    } else {
      return new Result(1, "Error", matchValue$$30.head);
    }
  } else {
    return new Result(0, "Ok", result$$4);
  }
}
export function tuple2(decoder1, decoder2) {
  return function (path$$48) {
    return function (value$$64) {
      return andThen(function cb$$2(v1$$8, path$$47, value$$63) {
        return andThen(function cb$$1(v2$$7, arg10$0040, arg20$0040) {
          return succeed([v1$$8, v2$$7], arg10$0040, arg20$0040);
        }, function (path$$46, value$$62) {
          return index(1, decoder2, path$$46, value$$62);
        }, path$$47, value$$63);
      }, function (path$$45, value$$61) {
        return index(0, decoder1, path$$45, value$$61);
      }, path$$48, value$$64);
    };
  };
}
export function tuple3(decoder1$$1, decoder2$$1, decoder3) {
  return function (path$$54) {
    return function (value$$70) {
      return andThen(function cb$$5(v1$$9, path$$53, value$$69) {
        return andThen(function cb$$4(v2$$8, path$$52, value$$68) {
          return andThen(function cb$$3(v3$$6, arg10$0040$$1, arg20$0040$$1) {
            return succeed([v1$$9, v2$$8, v3$$6], arg10$0040$$1, arg20$0040$$1);
          }, function (path$$51, value$$67) {
            return index(2, decoder3, path$$51, value$$67);
          }, path$$52, value$$68);
        }, function (path$$50, value$$66) {
          return index(1, decoder2$$1, path$$50, value$$66);
        }, path$$53, value$$69);
      }, function (path$$49, value$$65) {
        return index(0, decoder1$$1, path$$49, value$$65);
      }, path$$54, value$$70);
    };
  };
}
export function tuple4(decoder1$$2, decoder2$$2, decoder3$$1, decoder4) {
  return function (path$$62) {
    return function (value$$78) {
      return andThen(function cb$$9(v1$$10, path$$61, value$$77) {
        return andThen(function cb$$8(v2$$9, path$$60, value$$76) {
          return andThen(function cb$$7(v3$$7, path$$59, value$$75) {
            return andThen(function cb$$6(v4$$5, arg10$0040$$2, arg20$0040$$2) {
              return succeed([v1$$10, v2$$9, v3$$7, v4$$5], arg10$0040$$2, arg20$0040$$2);
            }, function (path$$58, value$$74) {
              return index(3, decoder4, path$$58, value$$74);
            }, path$$59, value$$75);
          }, function (path$$57, value$$73) {
            return index(2, decoder3$$1, path$$57, value$$73);
          }, path$$60, value$$76);
        }, function (path$$56, value$$72) {
          return index(1, decoder2$$2, path$$56, value$$72);
        }, path$$61, value$$77);
      }, function (path$$55, value$$71) {
        return index(0, decoder1$$2, path$$55, value$$71);
      }, path$$62, value$$78);
    };
  };
}
export function tuple5(decoder1$$3, decoder2$$3, decoder3$$2, decoder4$$1, decoder5) {
  return function (path$$72) {
    return function (value$$88) {
      return andThen(function cb$$14(v1$$11, path$$71, value$$87) {
        return andThen(function cb$$13(v2$$10, path$$70, value$$86) {
          return andThen(function cb$$12(v3$$8, path$$69, value$$85) {
            return andThen(function cb$$11(v4$$6, path$$68, value$$84) {
              return andThen(function cb$$10(v5$$4, arg10$0040$$3, arg20$0040$$3) {
                return succeed([v1$$11, v2$$10, v3$$8, v4$$6, v5$$4], arg10$0040$$3, arg20$0040$$3);
              }, function (path$$67, value$$83) {
                return index(4, decoder5, path$$67, value$$83);
              }, path$$68, value$$84);
            }, function (path$$66, value$$82) {
              return index(3, decoder4$$1, path$$66, value$$82);
            }, path$$69, value$$85);
          }, function (path$$65, value$$81) {
            return index(2, decoder3$$2, path$$65, value$$81);
          }, path$$70, value$$86);
        }, function (path$$64, value$$80) {
          return index(1, decoder2$$3, path$$64, value$$80);
        }, path$$71, value$$87);
      }, function (path$$63, value$$79) {
        return index(0, decoder1$$3, path$$63, value$$79);
      }, path$$72, value$$88);
    };
  };
}
export function tuple6(decoder1$$4, decoder2$$4, decoder3$$3, decoder4$$2, decoder5$$1, decoder6) {
  return function (path$$84) {
    return function (value$$100) {
      return andThen(function cb$$20(v1$$12, path$$83, value$$99) {
        return andThen(function cb$$19(v2$$11, path$$82, value$$98) {
          return andThen(function cb$$18(v3$$9, path$$81, value$$97) {
            return andThen(function cb$$17(v4$$7, path$$80, value$$96) {
              return andThen(function cb$$16(v5$$5, path$$79, value$$95) {
                return andThen(function cb$$15(v6$$3, arg10$0040$$4, arg20$0040$$4) {
                  return succeed([v1$$12, v2$$11, v3$$9, v4$$7, v5$$5, v6$$3], arg10$0040$$4, arg20$0040$$4);
                }, function (path$$78, value$$94) {
                  return index(5, decoder6, path$$78, value$$94);
                }, path$$79, value$$95);
              }, function (path$$77, value$$93) {
                return index(4, decoder5$$1, path$$77, value$$93);
              }, path$$80, value$$96);
            }, function (path$$76, value$$92) {
              return index(3, decoder4$$2, path$$76, value$$92);
            }, path$$81, value$$97);
          }, function (path$$75, value$$91) {
            return index(2, decoder3$$3, path$$75, value$$91);
          }, path$$82, value$$98);
        }, function (path$$74, value$$90) {
          return index(1, decoder2$$4, path$$74, value$$90);
        }, path$$83, value$$99);
      }, function (path$$73, value$$89) {
        return index(0, decoder1$$4, path$$73, value$$89);
      }, path$$84, value$$100);
    };
  };
}
export function tuple7(decoder1$$5, decoder2$$5, decoder3$$4, decoder4$$3, decoder5$$2, decoder6$$1, decoder7) {
  return function (path$$98) {
    return function (value$$114) {
      return andThen(function cb$$27(v1$$13, path$$97, value$$113) {
        return andThen(function cb$$26(v2$$12, path$$96, value$$112) {
          return andThen(function cb$$25(v3$$10, path$$95, value$$111) {
            return andThen(function cb$$24(v4$$8, path$$94, value$$110) {
              return andThen(function cb$$23(v5$$6, path$$93, value$$109) {
                return andThen(function cb$$22(v6$$4, path$$92, value$$108) {
                  return andThen(function cb$$21(v7$$2, arg10$0040$$5, arg20$0040$$5) {
                    return succeed([v1$$13, v2$$12, v3$$10, v4$$8, v5$$6, v6$$4, v7$$2], arg10$0040$$5, arg20$0040$$5);
                  }, function (path$$91, value$$107) {
                    return index(6, decoder7, path$$91, value$$107);
                  }, path$$92, value$$108);
                }, function (path$$90, value$$106) {
                  return index(5, decoder6$$1, path$$90, value$$106);
                }, path$$93, value$$109);
              }, function (path$$89, value$$105) {
                return index(4, decoder5$$2, path$$89, value$$105);
              }, path$$94, value$$110);
            }, function (path$$88, value$$104) {
              return index(3, decoder4$$3, path$$88, value$$104);
            }, path$$95, value$$111);
          }, function (path$$87, value$$103) {
            return index(2, decoder3$$4, path$$87, value$$103);
          }, path$$96, value$$112);
        }, function (path$$86, value$$102) {
          return index(1, decoder2$$5, path$$86, value$$102);
        }, path$$97, value$$113);
      }, function (path$$85, value$$101) {
        return index(0, decoder1$$5, path$$85, value$$101);
      }, path$$98, value$$114);
    };
  };
}
export function tuple8(decoder1$$6, decoder2$$6, decoder3$$5, decoder4$$4, decoder5$$3, decoder6$$2, decoder7$$1, decoder8) {
  return function (path$$114) {
    return function (value$$130) {
      return andThen(function cb$$35(v1$$14, path$$113, value$$129) {
        return andThen(function cb$$34(v2$$13, path$$112, value$$128) {
          return andThen(function cb$$33(v3$$11, path$$111, value$$127) {
            return andThen(function cb$$32(v4$$9, path$$110, value$$126) {
              return andThen(function cb$$31(v5$$7, path$$109, value$$125) {
                return andThen(function cb$$30(v6$$5, path$$108, value$$124) {
                  return andThen(function cb$$29(v7$$3, path$$107, value$$123) {
                    return andThen(function cb$$28(v8$$1, arg10$0040$$6, arg20$0040$$6) {
                      return succeed([v1$$14, v2$$13, v3$$11, v4$$9, v5$$7, v6$$5, v7$$3, v8$$1], arg10$0040$$6, arg20$0040$$6);
                    }, function (path$$106, value$$122) {
                      return index(7, decoder8, path$$106, value$$122);
                    }, path$$107, value$$123);
                  }, function (path$$105, value$$121) {
                    return index(6, decoder7$$1, path$$105, value$$121);
                  }, path$$108, value$$124);
                }, function (path$$104, value$$120) {
                  return index(5, decoder6$$2, path$$104, value$$120);
                }, path$$109, value$$125);
              }, function (path$$103, value$$119) {
                return index(4, decoder5$$3, path$$103, value$$119);
              }, path$$110, value$$126);
            }, function (path$$102, value$$118) {
              return index(3, decoder4$$4, path$$102, value$$118);
            }, path$$111, value$$127);
          }, function (path$$101, value$$117) {
            return index(2, decoder3$$5, path$$101, value$$117);
          }, path$$112, value$$128);
        }, function (path$$100, value$$116) {
          return index(1, decoder2$$6, path$$100, value$$116);
        }, path$$113, value$$129);
      }, function (path$$99, value$$115) {
        return index(0, decoder1$$6, path$$99, value$$115);
      }, path$$114, value$$130);
    };
  };
}
export function boxDecoder(d) {
  return curry(2, d);
}
export function unboxDecoder(d$$1) {
  return curry(2, d$$1);
}

function toMap(xs) {
  return ofSeq$$1(xs, {
    Compare: compare
  });
}

function toSet(xs$$1) {
  return ofSeq$$2(xs$$1, {
    Compare: compare
  });
}

function autoObject(decoderInfos, path$$115, value$$131) {
  if (!(value$$131 === null ? false : Object.getPrototypeOf(value$$131 || false) === Object.prototype)) {
    const arg0$$44 = [path$$115, new ErrorReason(0, "BadPrimitive", "an object", value$$131)];
    return new Result(1, "Error", arg0$$44);
  } else {
    const state$$5 = new Result(0, "Ok", new List());
    return foldBack(function folder$$5(tupledArg$$3, acc$$6) {
      if (acc$$6.tag === 0) {
        const result$$6 = tupledArg$$3[1](path$$115 + "." + tupledArg$$3[0])(value$$131[tupledArg$$3[0]]);
        return mapOk(function mapping$$3(v$$8) {
          return new List(v$$8, acc$$6.fields[0]);
        }, result$$6);
      } else {
        return acc$$6;
      }
    }, decoderInfos, state$$5);
  }
}

function autoObject2(keyDecoder, valueDecoder, path$$116, value$$132) {
  if (!(value$$132 === null ? false : Object.getPrototypeOf(value$$132 || false) === Object.prototype)) {
    const arg0$$45 = [path$$116, new ErrorReason(0, "BadPrimitive", "an object", value$$132)];
    return new Result(1, "Error", arg0$$45);
  } else {
    const state$$6 = new Result(0, "Ok", new List());
    const source$$1 = Object.keys(value$$132);
    return fold$$2(function folder$$6(acc$$7, name$$1) {
      if (acc$$7.tag === 0) {
        let matchValue$$31;
        const clo1$$4 = partialApply(1, keyDecoder, [path$$116]);
        matchValue$$31 = clo1$$4(name$$1);

        if (matchValue$$31.tag === 0) {
          const _arg1$$5 = valueDecoder(path$$116 + "." + name$$1, value$$132[name$$1]);

          if (_arg1$$5.tag === 0) {
            const arg0$$46 = new List([matchValue$$31.fields[0], _arg1$$5.fields[0]], acc$$7.fields[0]);
            return new Result(0, "Ok", arg0$$46);
          } else {
            return new Result(1, "Error", _arg1$$5.fields[0]);
          }
        } else {
          return new Result(1, "Error", matchValue$$31.fields[0]);
        }
      } else {
        return acc$$7;
      }
    }, state$$6, source$$1);
  }
}

function mixedArray(msg$$12, decoders$$2, path$$117, values) {
  var arg0$$47, arg10$$5, arg30, clo1$$5, clo2, clo3;

  if (decoders$$2.length !== values.length) {
    const arg0$$48 = [path$$117, (arg0$$47 = (arg10$$5 = decoders$$2.length | 0, arg30 = values.length | 0, (clo1$$5 = toText(printf("Expected %i %s but got %i")), clo2 = clo1$$5(arg10$$5), clo3 = clo2(msg$$12), clo3(arg30))), (new ErrorReason(6, "FailMessage", arg0$$47)))];
    return new Result(1, "Error", arg0$$48);
  } else {
    const state$$7 = new Result(0, "Ok", new List());
    return foldBack2(uncurry(3, mapCurriedArgs(function folder$$7(value$$133) {
      return function (decoder$$102) {
        return function (acc$$9) {
          if (acc$$9.tag === 0) {
            const result$$8 = decoder$$102(path$$117, value$$133);
            return mapOk(function mapping$$4(v$$10) {
              return new List(v$$10, acc$$9.fields[0]);
            }, result$$8);
          } else {
            return acc$$9;
          }
        };
      };
    }, [0, [0, 2], 0])), values, decoders$$2, state$$7);
  }
}

function makeUnion(extra, isCamelCase, t, name$$2, path$$118, values$$1) {
  let uci;
  const array$$4 = getUnionCases(t, true);
  uci = tryFind(function predicate(x$$12) {
    return name$$6(x$$12) === name$$2;
  }, array$$4);

  if (uci != null) {
    const uci$$1 = uci;

    if (values$$1.length === 0) {
      const arg0$$50 = makeUnion$$1(uci$$1, [], true);
      return new Result(0, "Ok", arg0$$50);
    } else {
      let decoders$$3;
      const array$$5 = getUnionCaseFields(uci$$1);
      decoders$$3 = map$$2(function mapping$$5(fi) {
        return autoDecoder(extra, isCamelCase, false, fi[1]);
      }, array$$5, Array);
      const result$$9 = mixedArray("union fields", decoders$$3, path$$118, values$$1);
      return mapOk(function mapping$$6(values$$2) {
        return makeUnion$$1(uci$$1, ofList$$1(values$$2, Array), true);
      }, result$$9);
    }
  } else {
    const arg0$$49 = [path$$118, new ErrorReason(6, "FailMessage", "Cannot find case " + name$$2 + " in " + fullName(t))];
    return new Result(1, "Error", arg0$$49);
  }
}

function autoDecodeRecordsAndUnions(extra$$1, isCamelCase$$1, isOptional, t$$1) {
  if (isRecord(t$$1, true)) {
    let decoders$$4;
    const array$$6 = getRecordElements(t$$1, true);
    decoders$$4 = map$$2(function mapping$$7(fi$$1) {
      const name$$3 = isCamelCase$$1 ? name$$6(fi$$1).slice(null, 0 + 1).toLowerCase() + name$$6(fi$$1).slice(1, name$$6(fi$$1).length) : name$$6(fi$$1);
      return [name$$3, autoDecoder(extra$$1, isCamelCase$$1, false, fi$$1[1])];
    }, array$$6, Array);
    return function (path$$119) {
      return function (value$$134) {
        const result$$10 = autoObject(decoders$$4, path$$119, value$$134);
        return mapOk(function mapping$$8(xs$$2) {
          return makeRecord(t$$1, ofList$$1(xs$$2, Array), true);
        }, result$$10);
      };
    };
  } else if (isUnion(t$$1, true)) {
    return function (path$$120) {
      return function (value$$135) {
        if (typeof value$$135 === "string") {
          const name$$4 = value$$135;
          return makeUnion(extra$$1, isCamelCase$$1, t$$1, name$$4, path$$120, []);
        } else if (Array.isArray(value$$135)) {
          const values$$3 = value$$135;
          let name$$5;
          const o$$80 = values$$3[0];
          name$$5 = o$$80;
          return makeUnion(extra$$1, isCamelCase$$1, t$$1, name$$5, path$$120, values$$3.slice(1, values$$3.length));
        } else {
          const arg0$$51 = [path$$120, new ErrorReason(0, "BadPrimitive", "a string or array", value$$135)];
          return new Result(1, "Error", arg0$$51);
        }
      };
    };
  } else if (isOptional) {
    return function d$$2(path$$121) {
      return function (value$$136) {
        return new Result(1, "Error", [path$$121, new ErrorReason(2, "BadType", "an extra coder for " + fullName(t$$1), value$$136)]);
      };
    };
  } else {
    let message;
    const arg10$$6 = fullName(t$$1);
    const clo1$$6 = toText(printf("Cannot generate auto decoder for %s. Please pass an extra decoder."));
    message = clo1$$6(arg10$$6);
    throw new Error(message);
  }
}

function autoDecoder(extra$$2, isCamelCase$$2, isOptional$$1, t$$2) {
  var decoder$$107;
  const fullname = fullName(t$$2);
  const matchValue$$32 = tryFind$$1(fullname, extra$$2);

  if (matchValue$$32 == null) {
    if (isArray(t$$2)) {
      let decoder$$104;
      const t$$3 = getElementType(t$$2);
      decoder$$104 = autoDecoder(extra$$2, isCamelCase$$2, false, t$$3);
      return function (path$$122) {
        return function (value$$137) {
          return array(uncurry(2, decoder$$104), path$$122, value$$137);
        };
      };
    } else if (isGenericType(t$$2)) {
      if (isTuple(t$$2)) {
        let decoders$$5;
        const array$$7 = getTupleElements(t$$2);
        decoders$$5 = map$$2(function mapping$$9(t$$4) {
          return autoDecoder(extra$$2, isCamelCase$$2, false, t$$4);
        }, array$$7, Array);
        return function (path$$123) {
          return function (value$$138) {
            if (Array.isArray(value$$138)) {
              const result$$11 = mixedArray("tuple elements", decoders$$5, path$$123, value$$138);
              return mapOk(function mapping$$10(xs$$3) {
                return makeTuple(ofList$$1(xs$$3, Array), t$$2);
              }, result$$11);
            } else {
              const arg0$$52 = [path$$123, new ErrorReason(0, "BadPrimitive", "an array", value$$138)];
              return new Result(1, "Error", arg0$$52);
            }
          };
        };
      } else {
        const fullname$$1 = fullName(getGenericTypeDefinition(t$$2));

        if (fullname$$1 === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]") {
          let d$$5;
          let decoder$$105;
          const t$$5 = getGenerics(t$$2)[0];
          decoder$$105 = autoDecoder(extra$$2, isCamelCase$$2, true, t$$5);

          d$$5 = function (path$$124) {
            return function (value$$139) {
              return option(uncurry(2, decoder$$105), path$$124, value$$139);
            };
          };

          return d$$5;
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpList`1[System.Object]") {
          let d$$7;
          let decoder$$106;
          const t$$6 = getGenerics(t$$2)[0];
          decoder$$106 = autoDecoder(extra$$2, isCamelCase$$2, false, t$$6);

          d$$7 = function (path$$125) {
            return function (value$$140) {
              return list(uncurry(2, decoder$$106), path$$125, value$$140);
            };
          };

          return d$$7;
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpMap`2[System.Object,System.Object]") {
          let keyDecoder$$1;
          const t$$7 = getGenerics(t$$2)[0];
          keyDecoder$$1 = autoDecoder(extra$$2, isCamelCase$$2, false, t$$7);
          let valueDecoder$$1;
          const t$$8 = getGenerics(t$$2)[1];
          valueDecoder$$1 = autoDecoder(extra$$2, isCamelCase$$2, false, t$$8);
          let d1$$9;
          const decoders$$6 = ofArray([function (path$$126) {
            return function (value$$141) {
              return autoObject2(uncurry(2, keyDecoder$$1), uncurry(2, valueDecoder$$1), path$$126, value$$141);
            };
          }, (decoder$$107 = tuple2(uncurry(2, keyDecoder$$1), uncurry(2, valueDecoder$$1)), function (path$$127) {
            return function (value$$142) {
              return list(uncurry(2, decoder$$107), path$$127, value$$142);
            };
          })]);

          d1$$9 = function (path$$128) {
            return function (value$$143) {
              return oneOf(decoders$$6, path$$128, value$$143);
            };
          };

          return function (path$$129) {
            return function (value$$145) {
              return map(function ctor$$9(ar) {
                const value$$144 = toMap(ar);
                return value$$144;
              }, uncurry(2, d1$$9), path$$129, value$$145);
            };
          };
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpSet`1[System.Object]") {
          let decoder$$108;
          const t$$9 = getGenerics(t$$2)[0];
          decoder$$108 = autoDecoder(extra$$2, isCamelCase$$2, false, t$$9);
          return function (path$$130) {
            return function (value$$146) {
              const matchValue$$33 = array(uncurry(2, decoder$$108), path$$130, value$$146);

              if (matchValue$$33.tag === 0) {
                let arg0$$53;
                const value$$147 = toSet(matchValue$$33.fields[0]);
                arg0$$53 = value$$147;
                return new Result(0, "Ok", arg0$$53);
              } else {
                return new Result(1, "Error", matchValue$$33.fields[0]);
              }
            };
          };
        } else {
          return autoDecodeRecordsAndUnions(extra$$2, isCamelCase$$2, isOptional$$1, t$$2);
        }
      }
    } else if (fullname === "System.Boolean") {
      return function d$$9(path$$131) {
        return function (value$$148) {
          return bool(path$$131, value$$148);
        };
      };
    } else if (fullname === "System.String") {
      return function d$$10(path$$132) {
        return function (value$$149) {
          return string(path$$132, value$$149);
        };
      };
    } else if (fullname === "System.Int32") {
      return function d$$11(path$$133) {
        return function (value$$150) {
          return int$(path$$133, value$$150);
        };
      };
    } else if (fullname === "System.UInt32") {
      return function d$$12(path$$134) {
        return function (value$$151) {
          return uint32(path$$134, value$$151);
        };
      };
    } else if (fullname === "System.Double") {
      return function d$$13(path$$135) {
        return function (value$$152) {
          return float$(path$$135, value$$152);
        };
      };
    } else if (fullname === "System.DateTime") {
      return function d$$14(path$$136) {
        return function (value$$153) {
          return datetime(path$$136, value$$153);
        };
      };
    } else if (fullname === "System.DateTimeOffset") {
      return function d$$15(path$$137) {
        return function (value$$154) {
          return datetimeOffset(path$$137, value$$154);
        };
      };
    } else if (fullname === "System.TimeSpan") {
      return function d$$16(path$$138) {
        return function (value$$155) {
          return timespan(path$$138, value$$155);
        };
      };
    } else if (fullname === "System.Guid") {
      return function d$$17(path$$139) {
        return function (value$$156) {
          return guid(path$$139, value$$156);
        };
      };
    } else if (fullname === "System.Object") {
      return function (_arg1$$6) {
        return function (v$$11) {
          return new Result(0, "Ok", v$$11);
        };
      };
    } else {
      return autoDecodeRecordsAndUnions(extra$$2, isCamelCase$$2, isOptional$$1, t$$2);
    }
  } else {
    const decoder$$103 = matchValue$$32[1];
    return decoder$$103;
  }
}

export const Auto = declare(function Thoth_Json_Decode_Auto() {});
export function Auto$reflection() {
  return type("Thoth.Json.Decode.Auto");
}
export function Auto$$$generateDecoderCached$$4AE6C623(isCamelCase$$3, extra$$3, resolver) {
  const t$$10 = resolver.ResolveType();
  const d$$18 = Util$0024002ECache$002400601$0024$0024GetOrAdd$0024$002443981464(Util$0024$0024$0024CachedDecoders, fullName(t$$10), function () {
    const isCamelCase$$4 = defaultArg(isCamelCase$$3, false);
    let extra$$4;

    if (extra$$3 == null) {
      extra$$4 = empty({
        Compare: comparePrimitives
      });
    } else {
      const e = extra$$3;
      extra$$4 = e;
    }

    return autoDecoder(extra$$4, isCamelCase$$4, false, t$$10);
  });
  return d$$18;
}
export function Auto$$$generateDecoder$$4AE6C623(isCamelCase$$5, extra$$5, resolver$$2) {
  const isCamelCase$$6 = defaultArg(isCamelCase$$5, false);
  let extra$$6;

  if (extra$$5 == null) {
    extra$$6 = empty({
      Compare: comparePrimitives
    });
  } else {
    const e$$1 = extra$$5;
    extra$$6 = e$$1;
  }

  let d$$20;
  const t$$11 = resolver$$2.ResolveType();
  d$$20 = autoDecoder(extra$$6, isCamelCase$$6, false, t$$11);
  return d$$20;
}
export function Auto$$$fromString$$Z33228D48(json$$1, isCamelCase$$7, extra$$7, resolver$$4) {
  const decoder$$109 = Auto$$$generateDecoder$$4AE6C623(isCamelCase$$7, extra$$7, resolver$$4);
  return fromString(uncurry(2, decoder$$109), json$$1);
}
export function Auto$$$unsafeFromString$$Z33228D48(json$$2, isCamelCase$$8, extra$$8, resolver$$5) {
  const decoder$$110 = Auto$$$generateDecoder$$4AE6C623(isCamelCase$$8, extra$$8, resolver$$5);
  const matchValue$$34 = fromString(uncurry(2, decoder$$110), json$$2);

  if (matchValue$$34.tag === 1) {
    throw new Error(matchValue$$34.fields[0]);
  } else {
    return matchValue$$34.fields[0];
  }
}

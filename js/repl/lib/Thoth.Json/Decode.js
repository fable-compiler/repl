import { toText, printf, validateGuid, join } from "../fable-library.2.2.0-beta-010/String.js";
import { List, declare, FSharpException } from "../fable-library.2.2.0-beta-010/Types.js";
import { getGenerics, getGenericTypeDefinition, makeTuple, getTupleElements, isTuple, isGenericType, getElementType, isArray, isUnion, makeRecord, getRecordElements, isRecord, fullName, getUnionCaseFields, makeUnion as makeUnion$$1, getUnionCases, name as name$$6, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { mapOk, some, defaultArg, Result } from "../fable-library.2.2.0-beta-010/Option.js";
import { Cache$$$Decoders as Cache$0024$0024$0024Decoders, Cache$002ECache$00601$$GetOrAdd$$43981464 as Cache$0024002ECache$002400601$0024$0024GetOrAdd$0024$002443981464, ErrorReason } from "./Types.js";
import { tryParse } from "../fable-library.2.2.0-beta-010/Int32.js";
import { toNumber, fromBits, tryParse as tryParse$$1, fromInteger } from "../fable-library.2.2.0-beta-010/Long.js";
import { parse, fromInt32 } from "../fable-library.2.2.0-beta-010/BigInt.js";
import { tryParse as tryParse$$2 } from "../fable-library.2.2.0-beta-010/Decimal.js";
import Decimal from "../fable-library.2.2.0-beta-010/Decimal.js";
import { toUniversalTime, tryParse as tryParse$$3 } from "../fable-library.2.2.0-beta-010/Date.js";
import { tryParse as tryParse$$4 } from "../fable-library.2.2.0-beta-010/DateOffset.js";
import { ofArray, append, reverse, tryLast, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { compare, curry, comparePrimitives, uncurry, int32ToString } from "../fable-library.2.2.0-beta-010/Util.js";
import { ofList as ofList$$1, map as map$$1, tryFind, foldBack2, foldBack, fill, fold as fold$$1 } from "../fable-library.2.2.0-beta-010/Array.js";
import { fold as fold$$2 } from "../fable-library.2.2.0-beta-010/Seq.js";
import { empty, tryFind as tryFind$$1, ofSeq, ofList } from "../fable-library.2.2.0-beta-010/Map.js";
import { ofSeq as ofSeq$$1 } from "../fable-library.2.2.0-beta-010/Set.js";
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
  let reason$$1;

  switch (error.tag) {
    case 2:
      {
        const value$$3 = error.fields[1];
        const msg$$2 = error.fields[0];
        reason$$1 = genericMsg(msg$$2, value$$3, true);
        break;
      }

    case 1:
      {
        const value$$4 = error.fields[1];
        const reason = error.fields[2];
        const msg$$3 = error.fields[0];
        reason$$1 = genericMsg(msg$$3, value$$4, false) + "\nReason: " + reason;
        break;
      }

    case 3:
      {
        const value$$5 = error.fields[1];
        const msg$$4 = error.fields[0];
        reason$$1 = genericMsg(msg$$4, value$$5, true);
        break;
      }

    case 4:
      {
        const value$$6 = error.fields[1];
        const msg$$5 = error.fields[0];
        const fieldName$$1 = error.fields[2];
        reason$$1 = genericMsg(msg$$5, value$$6, true) + ("\nNode `" + fieldName$$1 + "` is unkown.");
        break;
      }

    case 5:
      {
        const value$$7 = error.fields[1];
        const msg$$6 = error.fields[0];
        reason$$1 = "Expecting " + msg$$6 + ".\n" + (JSON.stringify(value$$7, null, 4) + "");
        break;
      }

    case 7:
      {
        const messages = error.fields[0];
        reason$$1 = "I run into the following problems:\n\n" + join("\n", ...messages);
        break;
      }

    case 6:
      {
        const msg$$7 = error.fields[0];
        reason$$1 = "I run into a `fail` decoder: " + msg$$7;
        break;
      }

    default:
      {
        const value$$2 = error.fields[1];
        const msg$$1 = error.fields[0];
        reason$$1 = genericMsg(msg$$1, value$$2, false);
      }
  }

  if (error.tag === 7) {
    return reason$$1;
  } else {
    return "Error at: `" + path + "`\n" + reason$$1;
  }
}

export const DecoderException = declare(function Thoth_Json_Decode_DecoderException(arg1) {
  this.Data0 = arg1;
}, FSharpException);
export function DecoderException$reflection() {
  return type("Thoth.Json.Decode.DecoderException");
}
export function unwrap(path$$1, decoder, value$$8) {
  const matchValue$$1 = decoder(path$$1, value$$8);

  if (matchValue$$1.tag === 1) {
    const error$$1 = matchValue$$1.fields[0];
    throw new DecoderException(error$$1);
  } else {
    const success = matchValue$$1.fields[0];
    return success;
  }
}
export function fromValue(path$$2, decoder$$1, value$$9) {
  const matchValue$$2 = decoder$$1(path$$2, value$$9);

  if (matchValue$$2.tag === 1) {
    const error$$2 = matchValue$$2.fields[0];
    return new Result(1, "Error", errorToString(error$$2[0], error$$2[1]));
  } else {
    const success$$1 = matchValue$$2.fields[0];
    return new Result(0, "Ok", success$$1);
  }
}
export function fromString(decoder$$2, value$$10) {
  var ex;

  try {
    const json = JSON.parse(value$$10);
    return fromValue("$", decoder$$2, json);
  } catch (matchValue$$3) {
    if (ex = matchValue$$3, ex instanceof SyntaxError) {
      const ex$$1 = matchValue$$3;
      return new Result(1, "Error", "Given an invalid JSON: " + ex$$1.message);
    } else {
      if (matchValue$$3 instanceof DecoderException) {
        return new Result(1, "Error", errorToString(matchValue$$3.Data0[0], matchValue$$3.Data0[1]));
      } else {
        throw matchValue$$3;
      }
    }
  }
}
export function unsafeFromString(decoder$$3, value$$11) {
  const matchValue$$4 = fromString(decoder$$3, value$$11);

  if (matchValue$$4.tag === 1) {
    const msg$$8 = matchValue$$4.fields[0];
    throw new Error(msg$$8);
  } else {
    const x = matchValue$$4.fields[0];
    return x;
  }
}
export function decodeValue(path$$5, decoder$$4) {
  return function (value$$12) {
    return fromValue(path$$5, decoder$$4, value$$12);
  };
}
export function decodeString(decoder$$6) {
  return function (value$$13) {
    return fromString(decoder$$6, value$$13);
  };
}
export function string(path$$6, value$$14) {
  if (typeof value$$14 === "string") {
    return new Result(0, "Ok", value$$14);
  } else {
    return new Result(1, "Error", [path$$6, new ErrorReason(0, "BadPrimitive", "a string", value$$14)]);
  }
}
export function guid(path$$7, value$$15) {
  if (typeof value$$15 === "string") {
    const matchValue$$5 = validateGuid(value$$15, true);

    if (matchValue$$5[0]) {
      return new Result(0, "Ok", matchValue$$5[1]);
    } else {
      return new Result(1, "Error", [path$$7, new ErrorReason(0, "BadPrimitive", "a guid", value$$15)]);
    }
  } else {
    return new Result(1, "Error", [path$$7, new ErrorReason(0, "BadPrimitive", "a guid", value$$15)]);
  }
}
export function int$(path$$8, value$$16) {
  if (typeof value$$16 === "number") {
    if (-2147483648 < value$$16 && value$$16 < 2147483647 && (value$$16 | 0) === value$$16) {
      return new Result(0, "Ok", value$$16);
    } else {
      return new Result(1, "Error", [path$$8, new ErrorReason(1, "BadPrimitiveExtra", "an int", value$$16, "Value was either too large or too small for an int")]);
    }
  } else if (typeof value$$16 === "string") {
    const matchValue$$6 = tryParse(value$$16, 511, false, 32);

    if (matchValue$$6[0]) {
      return new Result(0, "Ok", matchValue$$6[1]);
    } else {
      return new Result(1, "Error", [path$$8, new ErrorReason(0, "BadPrimitive", "an int", value$$16)]);
    }
  } else {
    return new Result(1, "Error", [path$$8, new ErrorReason(0, "BadPrimitive", "an int", value$$16)]);
  }
}
export function int64(path$$9, value$$17) {
  if (typeof value$$17 === "number") {
    return new Result(0, "Ok", fromInteger(value$$17, false, 2));
  } else if (typeof value$$17 === "string") {
    const matchValue$$7 = tryParse$$1(value$$17, 511, false, 64);

    if (matchValue$$7[0]) {
      return new Result(0, "Ok", matchValue$$7[1]);
    } else {
      return new Result(1, "Error", [path$$9, new ErrorReason(0, "BadPrimitive", "an int64", value$$17)]);
    }
  } else {
    return new Result(1, "Error", [path$$9, new ErrorReason(0, "BadPrimitive", "an int64", value$$17)]);
  }
}
export function uint32(path$$10, value$$19) {
  if (typeof value$$19 === "number") {
    const x$$4 = value$$19;

    if (x$$4 >= 0 ? x$$4 <= 4294967295 : false) {
      return new Result(0, "Ok", value$$19 >>> 0);
    } else {
      return new Result(1, "Error", [path$$10, new ErrorReason(1, "BadPrimitiveExtra", "an uint32", value$$19, "Value was either too large or too small for an uint32")]);
    }
  } else if (typeof value$$19 === "string") {
    const matchValue$$8 = tryParse(value$$19, 511, true, 32);

    if (matchValue$$8[0]) {
      return new Result(0, "Ok", matchValue$$8[1]);
    } else {
      return new Result(1, "Error", [path$$10, new ErrorReason(0, "BadPrimitive", "an uint32", value$$19)]);
    }
  } else {
    return new Result(1, "Error", [path$$10, new ErrorReason(0, "BadPrimitive", "an uint32", value$$19)]);
  }
}
export function uint64(path$$11, value$$21) {
  if (typeof value$$21 === "number") {
    const x$$6 = value$$21;

    if (x$$6 >= 0 ? x$$6 <= toNumber(fromBits(4294967295, 4294967295, true)) : false) {
      return new Result(0, "Ok", fromInteger(value$$21, true, 2));
    } else {
      return new Result(1, "Error", [path$$11, new ErrorReason(1, "BadPrimitiveExtra", "an uint64", value$$21, "Value was either too large or too small for an uint64")]);
    }
  } else if (typeof value$$21 === "string") {
    const matchValue$$9 = tryParse$$1(value$$21, 511, true, 64);

    if (matchValue$$9[0]) {
      return new Result(0, "Ok", matchValue$$9[1]);
    } else {
      return new Result(1, "Error", [path$$11, new ErrorReason(0, "BadPrimitive", "an uint64", value$$21)]);
    }
  } else {
    return new Result(1, "Error", [path$$11, new ErrorReason(0, "BadPrimitive", "an uint64", value$$21)]);
  }
}
export function bigint(path$$12, value$$23) {
  if (typeof value$$23 === "number") {
    return new Result(0, "Ok", fromInt32(value$$23));
  } else if (typeof value$$23 === "string") {
    try {
      return new Result(0, "Ok", parse(value$$23));
    } catch (matchValue$$10) {
      return new Result(1, "Error", [path$$12, new ErrorReason(0, "BadPrimitive", "a bigint", value$$23)]);
    }
  } else {
    return new Result(1, "Error", [path$$12, new ErrorReason(0, "BadPrimitive", "a bigint", value$$23)]);
  }
}
export function bool(path$$13, value$$24) {
  if (typeof value$$24 === "boolean") {
    return new Result(0, "Ok", value$$24);
  } else {
    return new Result(1, "Error", [path$$13, new ErrorReason(0, "BadPrimitive", "a boolean", value$$24)]);
  }
}
export function float$(path$$14, value$$25) {
  if (typeof value$$25 === "number") {
    return new Result(0, "Ok", value$$25);
  } else {
    return new Result(1, "Error", [path$$14, new ErrorReason(0, "BadPrimitive", "a float", value$$25)]);
  }
}
export function decimal(path$$15, value$$26) {
  if (typeof value$$26 === "number") {
    return new Result(0, "Ok", new Decimal(value$$26));
  } else if (typeof value$$26 === "string") {
    const matchValue$$11 = tryParse$$2(value$$26);

    if (matchValue$$11[0]) {
      return new Result(0, "Ok", matchValue$$11[1]);
    } else {
      return new Result(1, "Error", [path$$15, new ErrorReason(0, "BadPrimitive", "a decimal", value$$26)]);
    }
  } else {
    return new Result(1, "Error", [path$$15, new ErrorReason(0, "BadPrimitive", "a decimal", value$$26)]);
  }
}
export function datetime(path$$16, value$$28) {
  if (typeof value$$28 === "string") {
    const matchValue$$12 = tryParse$$3(value$$28);

    if (matchValue$$12[0]) {
      return new Result(0, "Ok", toUniversalTime(matchValue$$12[1]));
    } else {
      return new Result(1, "Error", [path$$16, new ErrorReason(0, "BadPrimitive", "a datetime", value$$28)]);
    }
  } else {
    return new Result(1, "Error", [path$$16, new ErrorReason(0, "BadPrimitive", "a datetime", value$$28)]);
  }
}
export function datetimeOffset(path$$17, value$$29) {
  if (typeof value$$29 === "string") {
    const matchValue$$13 = tryParse$$4(value$$29);

    if (matchValue$$13[0]) {
      return new Result(0, "Ok", matchValue$$13[1]);
    } else {
      return new Result(1, "Error", [path$$17, new ErrorReason(0, "BadPrimitive", "a datetimeoffset", value$$29)]);
    }
  } else {
    return new Result(1, "Error", [path$$17, new ErrorReason(0, "BadPrimitive", "a datetime", value$$29)]);
  }
}
export function field(fieldName$$2, decoder$$8, path$$18, value$$30) {
  if (Object.getPrototypeOf(value$$30 || false) === Object.prototype) {
    const fieldValue = value$$30[fieldName$$2];
    const matchValue$$14 = decoder$$8(path$$18 + "." + fieldName$$2, fieldValue);

    if (matchValue$$14.tag === 1) {
      const er = matchValue$$14;

      if (Helpers$$$isUndefined(fieldValue)) {
        return new Result(1, "Error", [path$$18, new ErrorReason(3, "BadField", "an object with a field named `" + fieldName$$2 + "`", value$$30)]);
      } else {
        return er;
      }
    } else {
      const ok = matchValue$$14;
      return ok;
    }
  } else {
    return new Result(1, "Error", [path$$18, new ErrorReason(2, "BadType", "an object", value$$30)]);
  }
}
export function at(fieldNames, decoder$$9, firstPath, firstValue) {
  const pathErrorMsg = function pathErrorMsg() {
    return "an object with path `" + join(".", ...fieldNames) + "`";
  };

  const _arg1 = fold(function folder(tupledArg, field$$1) {
    if (tupledArg[2] == null) {
      if (tupledArg[1] == null) {
        const res$$1 = new Result(1, "Error", [tupledArg[0], new ErrorReason(4, "BadPath", pathErrorMsg(), firstValue, field$$1)]);
        return [tupledArg[0], tupledArg[1], res$$1];
      } else if (Object.getPrototypeOf(tupledArg[1] || false) === Object.prototype) {
        const curValue$$1 = tupledArg[1][field$$1];
        return [tupledArg[0] + "." + field$$1, curValue$$1, null];
      } else {
        const res$$2 = new Result(1, "Error", [tupledArg[0], new ErrorReason(2, "BadType", "an object", tupledArg[1])]);
        return [tupledArg[0], tupledArg[1], res$$2];
      }
    } else {
      return [tupledArg[0], tupledArg[1], tupledArg[2]];
    }
  }, [firstPath, firstValue, null], fieldNames);

  if (_arg1[2] == null) {
    const matchValue$$15 = decoder$$9(_arg1[0], _arg1[1]);

    if (matchValue$$15.tag === 1) {
      const er$$1 = matchValue$$15;

      if (Helpers$$$isUndefined(_arg1[1])) {
        return new Result(1, "Error", [_arg1[0], new ErrorReason(4, "BadPath", pathErrorMsg(), firstValue, defaultArg(tryLast(fieldNames), ""))]);
      } else {
        return er$$1;
      }
    } else {
      const ok$$1 = matchValue$$15;
      return ok$$1;
    }
  } else {
    const res$$3 = _arg1[2];
    return res$$3;
  }
}
export function index(requestedIndex, decoder$$10, path$$19, value$$32) {
  var copyOfStruct;
  const currentPath = path$$19 + ".[" + int32ToString(requestedIndex) + "]";

  if (Array.isArray(value$$32)) {
    const vArray = value$$32;

    if (requestedIndex < vArray.length) {
      return decoder$$10(currentPath, vArray[requestedIndex]);
    } else {
      const msg$$9 = "a longer array. Need index `" + int32ToString(requestedIndex) + "` but there are only `" + (copyOfStruct = vArray.length | 0, int32ToString(copyOfStruct)) + "` entries";
      return new Result(1, "Error", [currentPath, new ErrorReason(5, "TooSmallArray", msg$$9, value$$32)]);
    }
  } else {
    return new Result(1, "Error", [currentPath, new ErrorReason(0, "BadPrimitive", "an array", value$$32)]);
  }
}
export function option(decoder$$11, path$$20, value$$33) {
  if (value$$33 == null) {
    return new Result(0, "Ok", null);
  } else {
    return mapOk(function mapping(arg0$$34) {
      return some(arg0$$34);
    }, decoder$$11(path$$20, value$$33));
  }
}
export function optional(fieldName$$5, decoder$$12) {
  return function (path$$22) {
    return function (value$$35) {
      return field(fieldName$$5, function decoder$$14(path$$21, value$$34) {
        return option(decoder$$12, path$$21, value$$34);
      }, path$$22, value$$35);
    };
  };
}
export function optionalAt(fieldNames$$1, decoder$$15) {
  return function (firstPath$$1) {
    return function (firstValue$$1) {
      return at(fieldNames$$1, function decoder$$17(path$$23, value$$36) {
        return option(decoder$$15, path$$23, value$$36);
      }, firstPath$$1, firstValue$$1);
    };
  };
}
export function list(decoder$$18, path$$24, value$$37) {
  if (Array.isArray(value$$37)) {
    let i = -1 | 0;
    const tokens = value$$37;
    return mapOk(reverse, fold$$1(function folder$$1(acc, value$$38) {
      i = i + 1;

      if (acc.tag === 0) {
        const acc$$1 = acc.fields[0];
        const matchValue$$16 = decoder$$18(path$$24 + "[" + int32ToString(i) + "]", value$$38);

        if (matchValue$$16.tag === 0) {
          const value$$39 = matchValue$$16.fields[0];
          return new Result(0, "Ok", new List(value$$39, acc$$1));
        } else {
          const er$$2 = matchValue$$16.fields[0];
          return new Result(1, "Error", er$$2);
        }
      } else {
        return acc;
      }
    }, new Result(0, "Ok", new List()), tokens));
  } else {
    return new Result(1, "Error", [path$$24, new ErrorReason(0, "BadPrimitive", "a list", value$$37)]);
  }
}
export function array(decoder$$19, path$$25, value$$40) {
  if (Array.isArray(value$$40)) {
    let i$$1 = -1 | 0;
    const tokens$$1 = value$$40;
    const arr = fill(new Array(tokens$$1.length), 0, tokens$$1.length, null);
    return fold$$1(function folder$$2(acc$$2, value$$41) {
      i$$1 = i$$1 + 1;

      if (acc$$2.tag === 0) {
        const acc$$3 = acc$$2.fields[0];
        const matchValue$$17 = decoder$$19(path$$25 + "[" + int32ToString(i$$1) + "]", value$$41);

        if (matchValue$$17.tag === 0) {
          const value$$42 = matchValue$$17.fields[0];
          acc$$3[i$$1] = value$$42;
          return new Result(0, "Ok", acc$$3);
        } else {
          const er$$3 = matchValue$$17.fields[0];
          return new Result(1, "Error", er$$3);
        }
      } else {
        return acc$$2;
      }
    }, new Result(0, "Ok", arr), tokens$$1);
  } else {
    return new Result(1, "Error", [path$$25, new ErrorReason(0, "BadPrimitive", "an array", value$$40)]);
  }
}
export function keyValuePairs(decoder$$20, path$$26, value$$43) {
  if (Object.getPrototypeOf(value$$43 || false) === Object.prototype) {
    return mapOk(reverse, fold$$2(function folder$$3(acc$$4, prop) {
      if (acc$$4.tag === 0) {
        const acc$$5 = acc$$4.fields[0];
        const matchValue$$18 = decoder$$20(path$$26, value$$43[prop]);

        if (matchValue$$18.tag === 0) {
          const value$$44 = matchValue$$18.fields[0];
          return new Result(0, "Ok", new List([prop, value$$44], acc$$5));
        } else {
          const er$$4 = matchValue$$18.fields[0];
          return new Result(1, "Error", er$$4);
        }
      } else {
        return acc$$4;
      }
    }, new Result(0, "Ok", new List()), Object.keys(value$$43)));
  } else {
    return new Result(1, "Error", [path$$26, new ErrorReason(0, "BadPrimitive", "an object", value$$43)]);
  }
}
export function oneOf(decoders, path$$27, value$$45) {
  const runner = function runner(decoders$$1, errors) {
    runner: while (true) {
      if (decoders$$1.tail == null) {
        return new Result(1, "Error", [path$$27, new ErrorReason(7, "BadOneOf", errors)]);
      } else {
        const tail = decoders$$1.tail;
        const head = decoders$$1.head;
        const matchValue$$19 = fromValue(path$$27, uncurry(2, head), value$$45);

        if (matchValue$$19.tag === 1) {
          const error$$6 = matchValue$$19.fields[0];
          const $errors$$55 = errors;
          decoders$$1 = tail;
          errors = append($errors$$55, new List(error$$6, new List()));
          continue runner;
        } else {
          const v = matchValue$$19.fields[0];
          return new Result(0, "Ok", v);
        }
      }

      break;
    }
  };

  return runner(decoders, new List());
}
export function nil(output, path$$28, value$$46) {
  if (value$$46 == null) {
    return new Result(0, "Ok", output);
  } else {
    return new Result(1, "Error", [path$$28, new ErrorReason(0, "BadPrimitive", "null", value$$46)]);
  }
}
export function value(_arg1$$1, v$$1) {
  return new Result(0, "Ok", v$$1);
}
export function succeed(output$$1, _arg2, _arg1$$2) {
  return new Result(0, "Ok", output$$1);
}
export function fail(msg$$10, path$$29, _arg1$$3) {
  return new Result(1, "Error", [path$$29, new ErrorReason(6, "FailMessage", msg$$10)]);
}
export function andThen(cb, decoder$$21, path$$30, value$$47) {
  const matchValue$$20 = decoder$$21(path$$30, value$$47);

  if (matchValue$$20.tag === 0) {
    const result$$3 = matchValue$$20.fields[0];
    return cb(result$$3, path$$30, value$$47);
  } else {
    const error$$7 = matchValue$$20.fields[0];
    return new Result(1, "Error", error$$7);
  }
}
export function map(ctor, d1, path$$31, value$$48) {
  const matchValue$$21 = d1(path$$31, value$$48);

  if (matchValue$$21.tag === 1) {
    const er$$5 = matchValue$$21.fields[0];
    return new Result(1, "Error", er$$5);
  } else {
    const v1 = matchValue$$21.fields[0];
    return new Result(0, "Ok", ctor(v1));
  }
}
export function map2(ctor$$1, d1$$1, d2, path$$32, value$$49) {
  const matchValue$$22 = [d1$$1(path$$32, value$$49), d2(path$$32, value$$49)];

  if (matchValue$$22[0].tag === 1) {
    return new Result(1, "Error", matchValue$$22[0].fields[0]);
  } else if (matchValue$$22[1].tag === 1) {
    return new Result(1, "Error", matchValue$$22[1].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$1(matchValue$$22[0].fields[0], matchValue$$22[1].fields[0]));
  }
}
export function map3(ctor$$2, d1$$2, d2$$1, d3, path$$33, value$$50) {
  const matchValue$$23 = [d1$$2(path$$33, value$$50), d2$$1(path$$33, value$$50), d3(path$$33, value$$50)];

  if (matchValue$$23[0].tag === 1) {
    return new Result(1, "Error", matchValue$$23[0].fields[0]);
  } else if (matchValue$$23[1].tag === 1) {
    return new Result(1, "Error", matchValue$$23[1].fields[0]);
  } else if (matchValue$$23[2].tag === 1) {
    return new Result(1, "Error", matchValue$$23[2].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$2(matchValue$$23[0].fields[0], matchValue$$23[1].fields[0], matchValue$$23[2].fields[0]));
  }
}
export function map4(ctor$$3, d1$$3, d2$$2, d3$$1, d4, path$$34, value$$51) {
  const matchValue$$24 = [d1$$3(path$$34, value$$51), d2$$2(path$$34, value$$51), d3$$1(path$$34, value$$51), d4(path$$34, value$$51)];

  if (matchValue$$24[0].tag === 1) {
    return new Result(1, "Error", matchValue$$24[0].fields[0]);
  } else if (matchValue$$24[1].tag === 1) {
    return new Result(1, "Error", matchValue$$24[1].fields[0]);
  } else if (matchValue$$24[2].tag === 1) {
    return new Result(1, "Error", matchValue$$24[2].fields[0]);
  } else if (matchValue$$24[3].tag === 1) {
    return new Result(1, "Error", matchValue$$24[3].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$3(matchValue$$24[0].fields[0], matchValue$$24[1].fields[0], matchValue$$24[2].fields[0], matchValue$$24[3].fields[0]));
  }
}
export function map5(ctor$$4, d1$$4, d2$$3, d3$$2, d4$$1, d5, path$$35, value$$52) {
  const matchValue$$25 = [d1$$4(path$$35, value$$52), d2$$3(path$$35, value$$52), d3$$2(path$$35, value$$52), d4$$1(path$$35, value$$52), d5(path$$35, value$$52)];

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
  } else {
    return new Result(0, "Ok", ctor$$4(matchValue$$25[0].fields[0], matchValue$$25[1].fields[0], matchValue$$25[2].fields[0], matchValue$$25[3].fields[0], matchValue$$25[4].fields[0]));
  }
}
export function map6(ctor$$5, d1$$5, d2$$4, d3$$3, d4$$2, d5$$1, d6, path$$36, value$$53) {
  const matchValue$$26 = [d1$$5(path$$36, value$$53), d2$$4(path$$36, value$$53), d3$$3(path$$36, value$$53), d4$$2(path$$36, value$$53), d5$$1(path$$36, value$$53), d6(path$$36, value$$53)];

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
  } else {
    return new Result(0, "Ok", ctor$$5(matchValue$$26[0].fields[0], matchValue$$26[1].fields[0], matchValue$$26[2].fields[0], matchValue$$26[3].fields[0], matchValue$$26[4].fields[0], matchValue$$26[5].fields[0]));
  }
}
export function map7(ctor$$6, d1$$6, d2$$5, d3$$4, d4$$3, d5$$2, d6$$1, d7, path$$37, value$$54) {
  const matchValue$$27 = [d1$$6(path$$37, value$$54), d2$$5(path$$37, value$$54), d3$$4(path$$37, value$$54), d4$$3(path$$37, value$$54), d5$$2(path$$37, value$$54), d6$$1(path$$37, value$$54), d7(path$$37, value$$54)];

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
  } else {
    return new Result(0, "Ok", ctor$$6(matchValue$$27[0].fields[0], matchValue$$27[1].fields[0], matchValue$$27[2].fields[0], matchValue$$27[3].fields[0], matchValue$$27[4].fields[0], matchValue$$27[5].fields[0], matchValue$$27[6].fields[0]));
  }
}
export function map8(ctor$$7, d1$$7, d2$$6, d3$$5, d4$$4, d5$$3, d6$$2, d7$$1, d8, path$$38, value$$55) {
  const matchValue$$28 = [d1$$7(path$$38, value$$55), d2$$6(path$$38, value$$55), d3$$5(path$$38, value$$55), d4$$4(path$$38, value$$55), d5$$3(path$$38, value$$55), d6$$2(path$$38, value$$55), d7$$1(path$$38, value$$55), d8(path$$38, value$$55)];

  if (matchValue$$28[0].tag === 1) {
    return new Result(1, "Error", matchValue$$28[0].fields[0]);
  } else if (matchValue$$28[1].tag === 1) {
    return new Result(1, "Error", matchValue$$28[1].fields[0]);
  } else if (matchValue$$28[2].tag === 1) {
    return new Result(1, "Error", matchValue$$28[2].fields[0]);
  } else if (matchValue$$28[3].tag === 1) {
    return new Result(1, "Error", matchValue$$28[3].fields[0]);
  } else if (matchValue$$28[4].tag === 1) {
    return new Result(1, "Error", matchValue$$28[4].fields[0]);
  } else if (matchValue$$28[5].tag === 1) {
    return new Result(1, "Error", matchValue$$28[5].fields[0]);
  } else if (matchValue$$28[6].tag === 1) {
    return new Result(1, "Error", matchValue$$28[6].fields[0]);
  } else if (matchValue$$28[7].tag === 1) {
    return new Result(1, "Error", matchValue$$28[7].fields[0]);
  } else {
    return new Result(0, "Ok", ctor$$7(matchValue$$28[0].fields[0], matchValue$$28[1].fields[0], matchValue$$28[2].fields[0], matchValue$$28[3].fields[0], matchValue$$28[4].fields[0], matchValue$$28[5].fields[0], matchValue$$28[6].fields[0], matchValue$$28[7].fields[0]));
  }
}
export function dict(decoder$$22) {
  return function (path$$40) {
    return function (value$$57) {
      return map(function ctor$$8(elements) {
        return ofList(elements, {
          Compare: comparePrimitives
        });
      }, function d1$$8(path$$39, value$$56) {
        return keyValuePairs(decoder$$22, path$$39, value$$56);
      }, path$$40, value$$57);
    };
  };
}
export function object(builder, path$$41, v$$2) {
  return new Result(0, "Ok", builder({
    get Required() {
      return {
        Field(fieldName$$7, decoder$$24) {
          return unwrap(path$$41, function (path$$42, value$$58) {
            return field(fieldName$$7, decoder$$24, path$$42, value$$58);
          }, v$$2);
        },

        At(fieldNames$$2, decoder$$26) {
          return unwrap(path$$41, function (firstPath$$2, firstValue$$2) {
            return at(fieldNames$$2, decoder$$26, firstPath$$2, firstValue$$2);
          }, v$$2);
        },

        Raw(decoder$$28) {
          return unwrap(path$$41, decoder$$28, v$$2);
        }

      };
    },

    get Optional() {
      return {
        Field(fieldName$$8, decoder$$29) {
          return unwrap(path$$41, function (path$$44, value$$60) {
            return field(fieldName$$8, function decoder$$31(path$$43, value$$59) {
              return option(decoder$$29, path$$43, value$$59);
            }, path$$44, value$$60);
          }, v$$2);
        },

        At(fieldNames$$3, decoder$$32) {
          return unwrap(path$$41, function (firstPath$$3, firstValue$$3) {
            return at(fieldNames$$3, function decoder$$34(path$$45, value$$61) {
              return option(decoder$$32, path$$45, value$$61);
            }, firstPath$$3, firstValue$$3);
          }, v$$2);
        },

        Raw(decoder$$35) {
          const matchValue$$29 = decoder$$35(path$$41, v$$2);

          if (matchValue$$29.tag === 1) {
            const reason$$2 = matchValue$$29.fields[0][1];
            const error$$8 = matchValue$$29.fields[0];
            var $target$$124, v$$4;

            switch (reason$$2.tag) {
              case 1:
                $target$$124 = 0;
                v$$4 = reason$$2.fields[1];
                break;

              case 2:
                $target$$124 = 0;
                v$$4 = reason$$2.fields[1];
                break;

              case 3:
              case 4:
                $target$$124 = 1;
                break;

              case 5:
              case 6:
              case 7:
                $target$$124 = 2;
                break;

              default:
                $target$$124 = 0;
                v$$4 = reason$$2.fields[1];
            }

            switch ($target$$124) {
              case 0:
                {
                  if (v$$4 == null) {
                    return null;
                  } else {
                    throw new DecoderException(error$$8);
                  }
                }

              case 1:
                {
                  return null;
                }

              case 2:
                {
                  throw new DecoderException(error$$8);
                }
            }
          } else {
            const v$$3 = matchValue$$29.fields[0];
            return some(v$$3);
          }
        }

      };
    }

  }));
}
export function tuple2(decoder1, decoder2) {
  return function (path$$49) {
    return function (value$$65) {
      return andThen(function cb$$2(v1$$8, path$$48, value$$64) {
        return andThen(uncurry(3, function cb$$1(v2$$7) {
          const output$$2 = [v1$$8, v2$$7];
          return function (arg10$0040) {
            return function (arg20$0040) {
              return succeed(output$$2, arg10$0040, arg20$0040);
            };
          };
        }), function (path$$47, value$$63) {
          return index(1, decoder2, path$$47, value$$63);
        }, path$$48, value$$64);
      }, function (path$$46, value$$62) {
        return index(0, decoder1, path$$46, value$$62);
      }, path$$49, value$$65);
    };
  };
}
export function tuple3(decoder1$$1, decoder2$$1, decoder3) {
  return function (path$$55) {
    return function (value$$71) {
      return andThen(function cb$$5(v1$$9, path$$54, value$$70) {
        return andThen(function cb$$4(v2$$8, path$$53, value$$69) {
          return andThen(uncurry(3, function cb$$3(v3$$6) {
            const output$$3 = [v1$$9, v2$$8, v3$$6];
            return function (arg10$0040$$1) {
              return function (arg20$0040$$1) {
                return succeed(output$$3, arg10$0040$$1, arg20$0040$$1);
              };
            };
          }), function (path$$52, value$$68) {
            return index(2, decoder3, path$$52, value$$68);
          }, path$$53, value$$69);
        }, function (path$$51, value$$67) {
          return index(1, decoder2$$1, path$$51, value$$67);
        }, path$$54, value$$70);
      }, function (path$$50, value$$66) {
        return index(0, decoder1$$1, path$$50, value$$66);
      }, path$$55, value$$71);
    };
  };
}
export function tuple4(decoder1$$2, decoder2$$2, decoder3$$1, decoder4) {
  return function (path$$63) {
    return function (value$$79) {
      return andThen(function cb$$9(v1$$10, path$$62, value$$78) {
        return andThen(function cb$$8(v2$$9, path$$61, value$$77) {
          return andThen(function cb$$7(v3$$7, path$$60, value$$76) {
            return andThen(uncurry(3, function cb$$6(v4$$5) {
              const output$$4 = [v1$$10, v2$$9, v3$$7, v4$$5];
              return function (arg10$0040$$2) {
                return function (arg20$0040$$2) {
                  return succeed(output$$4, arg10$0040$$2, arg20$0040$$2);
                };
              };
            }), function (path$$59, value$$75) {
              return index(3, decoder4, path$$59, value$$75);
            }, path$$60, value$$76);
          }, function (path$$58, value$$74) {
            return index(2, decoder3$$1, path$$58, value$$74);
          }, path$$61, value$$77);
        }, function (path$$57, value$$73) {
          return index(1, decoder2$$2, path$$57, value$$73);
        }, path$$62, value$$78);
      }, function (path$$56, value$$72) {
        return index(0, decoder1$$2, path$$56, value$$72);
      }, path$$63, value$$79);
    };
  };
}
export function tuple5(decoder1$$3, decoder2$$3, decoder3$$2, decoder4$$1, decoder5) {
  return function (path$$73) {
    return function (value$$89) {
      return andThen(function cb$$14(v1$$11, path$$72, value$$88) {
        return andThen(function cb$$13(v2$$10, path$$71, value$$87) {
          return andThen(function cb$$12(v3$$8, path$$70, value$$86) {
            return andThen(function cb$$11(v4$$6, path$$69, value$$85) {
              return andThen(uncurry(3, function cb$$10(v5$$4) {
                const output$$5 = [v1$$11, v2$$10, v3$$8, v4$$6, v5$$4];
                return function (arg10$0040$$3) {
                  return function (arg20$0040$$3) {
                    return succeed(output$$5, arg10$0040$$3, arg20$0040$$3);
                  };
                };
              }), function (path$$68, value$$84) {
                return index(4, decoder5, path$$68, value$$84);
              }, path$$69, value$$85);
            }, function (path$$67, value$$83) {
              return index(3, decoder4$$1, path$$67, value$$83);
            }, path$$70, value$$86);
          }, function (path$$66, value$$82) {
            return index(2, decoder3$$2, path$$66, value$$82);
          }, path$$71, value$$87);
        }, function (path$$65, value$$81) {
          return index(1, decoder2$$3, path$$65, value$$81);
        }, path$$72, value$$88);
      }, function (path$$64, value$$80) {
        return index(0, decoder1$$3, path$$64, value$$80);
      }, path$$73, value$$89);
    };
  };
}
export function tuple6(decoder1$$4, decoder2$$4, decoder3$$3, decoder4$$2, decoder5$$1, decoder6) {
  return function (path$$85) {
    return function (value$$101) {
      return andThen(function cb$$20(v1$$12, path$$84, value$$100) {
        return andThen(function cb$$19(v2$$11, path$$83, value$$99) {
          return andThen(function cb$$18(v3$$9, path$$82, value$$98) {
            return andThen(function cb$$17(v4$$7, path$$81, value$$97) {
              return andThen(function cb$$16(v5$$5, path$$80, value$$96) {
                return andThen(uncurry(3, function cb$$15(v6$$3) {
                  const output$$6 = [v1$$12, v2$$11, v3$$9, v4$$7, v5$$5, v6$$3];
                  return function (arg10$0040$$4) {
                    return function (arg20$0040$$4) {
                      return succeed(output$$6, arg10$0040$$4, arg20$0040$$4);
                    };
                  };
                }), function (path$$79, value$$95) {
                  return index(5, decoder6, path$$79, value$$95);
                }, path$$80, value$$96);
              }, function (path$$78, value$$94) {
                return index(4, decoder5$$1, path$$78, value$$94);
              }, path$$81, value$$97);
            }, function (path$$77, value$$93) {
              return index(3, decoder4$$2, path$$77, value$$93);
            }, path$$82, value$$98);
          }, function (path$$76, value$$92) {
            return index(2, decoder3$$3, path$$76, value$$92);
          }, path$$83, value$$99);
        }, function (path$$75, value$$91) {
          return index(1, decoder2$$4, path$$75, value$$91);
        }, path$$84, value$$100);
      }, function (path$$74, value$$90) {
        return index(0, decoder1$$4, path$$74, value$$90);
      }, path$$85, value$$101);
    };
  };
}
export function tuple7(decoder1$$5, decoder2$$5, decoder3$$4, decoder4$$3, decoder5$$2, decoder6$$1, decoder7) {
  return function (path$$99) {
    return function (value$$115) {
      return andThen(function cb$$27(v1$$13, path$$98, value$$114) {
        return andThen(function cb$$26(v2$$12, path$$97, value$$113) {
          return andThen(function cb$$25(v3$$10, path$$96, value$$112) {
            return andThen(function cb$$24(v4$$8, path$$95, value$$111) {
              return andThen(function cb$$23(v5$$6, path$$94, value$$110) {
                return andThen(function cb$$22(v6$$4, path$$93, value$$109) {
                  return andThen(uncurry(3, function cb$$21(v7$$2) {
                    const output$$7 = [v1$$13, v2$$12, v3$$10, v4$$8, v5$$6, v6$$4, v7$$2];
                    return function (arg10$0040$$5) {
                      return function (arg20$0040$$5) {
                        return succeed(output$$7, arg10$0040$$5, arg20$0040$$5);
                      };
                    };
                  }), function (path$$92, value$$108) {
                    return index(6, decoder7, path$$92, value$$108);
                  }, path$$93, value$$109);
                }, function (path$$91, value$$107) {
                  return index(5, decoder6$$1, path$$91, value$$107);
                }, path$$94, value$$110);
              }, function (path$$90, value$$106) {
                return index(4, decoder5$$2, path$$90, value$$106);
              }, path$$95, value$$111);
            }, function (path$$89, value$$105) {
              return index(3, decoder4$$3, path$$89, value$$105);
            }, path$$96, value$$112);
          }, function (path$$88, value$$104) {
            return index(2, decoder3$$4, path$$88, value$$104);
          }, path$$97, value$$113);
        }, function (path$$87, value$$103) {
          return index(1, decoder2$$5, path$$87, value$$103);
        }, path$$98, value$$114);
      }, function (path$$86, value$$102) {
        return index(0, decoder1$$5, path$$86, value$$102);
      }, path$$99, value$$115);
    };
  };
}
export function tuple8(decoder1$$6, decoder2$$6, decoder3$$5, decoder4$$4, decoder5$$3, decoder6$$2, decoder7$$1, decoder8) {
  return function (path$$115) {
    return function (value$$131) {
      return andThen(function cb$$35(v1$$14, path$$114, value$$130) {
        return andThen(function cb$$34(v2$$13, path$$113, value$$129) {
          return andThen(function cb$$33(v3$$11, path$$112, value$$128) {
            return andThen(function cb$$32(v4$$9, path$$111, value$$127) {
              return andThen(function cb$$31(v5$$7, path$$110, value$$126) {
                return andThen(function cb$$30(v6$$5, path$$109, value$$125) {
                  return andThen(function cb$$29(v7$$3, path$$108, value$$124) {
                    return andThen(uncurry(3, function cb$$28(v8$$1) {
                      const output$$8 = [v1$$14, v2$$13, v3$$11, v4$$9, v5$$7, v6$$5, v7$$3, v8$$1];
                      return function (arg10$0040$$6) {
                        return function (arg20$0040$$6) {
                          return succeed(output$$8, arg10$0040$$6, arg20$0040$$6);
                        };
                      };
                    }), function (path$$107, value$$123) {
                      return index(7, decoder8, path$$107, value$$123);
                    }, path$$108, value$$124);
                  }, function (path$$106, value$$122) {
                    return index(6, decoder7$$1, path$$106, value$$122);
                  }, path$$109, value$$125);
                }, function (path$$105, value$$121) {
                  return index(5, decoder6$$2, path$$105, value$$121);
                }, path$$110, value$$126);
              }, function (path$$104, value$$120) {
                return index(4, decoder5$$3, path$$104, value$$120);
              }, path$$111, value$$127);
            }, function (path$$103, value$$119) {
              return index(3, decoder4$$4, path$$103, value$$119);
            }, path$$112, value$$128);
          }, function (path$$102, value$$118) {
            return index(2, decoder3$$5, path$$102, value$$118);
          }, path$$113, value$$129);
        }, function (path$$101, value$$117) {
          return index(1, decoder2$$6, path$$101, value$$117);
        }, path$$114, value$$130);
      }, function (path$$100, value$$116) {
        return index(0, decoder1$$6, path$$100, value$$116);
      }, path$$115, value$$131);
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
  return ofSeq(xs, {
    Compare: compare
  });
}

function toSet(xs$$1) {
  return ofSeq$$1(xs$$1, {
    Compare: compare
  });
}

function autoObject(decoderInfos, path$$116, value$$132) {
  if (!(Object.getPrototypeOf(value$$132 || false) === Object.prototype)) {
    return new Result(1, "Error", [path$$116, new ErrorReason(0, "BadPrimitive", "an object", value$$132)]);
  } else {
    return foldBack(function folder$$4(tupledArg$$1, acc$$6) {
      if (acc$$6.tag === 0) {
        const result$$4 = acc$$6.fields[0];
        return mapOk(function mapping$$3(v$$5) {
          return new List(v$$5, result$$4);
        }, field(tupledArg$$1[0], uncurry(2, tupledArg$$1[1]), path$$116, value$$132));
      } else {
        return acc$$6;
      }
    }, decoderInfos, new Result(0, "Ok", new List()));
  }
}

function autoObject2(keyDecoder, valueDecoder, path$$117, value$$133) {
  if (!(Object.getPrototypeOf(value$$133 || false) === Object.prototype)) {
    return new Result(1, "Error", [path$$117, new ErrorReason(0, "BadPrimitive", "an object", value$$133)]);
  } else {
    return fold$$2(function folder$$5(acc$$7, name$$1) {
      if (acc$$7.tag === 0) {
        const acc$$8 = acc$$7.fields[0];
        const matchValue$$30 = keyDecoder(path$$117, name$$1);

        if (matchValue$$30.tag === 0) {
          const k = matchValue$$30.fields[0];
          const matchValue$$31 = field(name$$1, valueDecoder, path$$117, value$$133);

          if (matchValue$$31.tag === 0) {
            const v$$6 = matchValue$$31.fields[0];
            return new Result(0, "Ok", new List([k, v$$6], acc$$8));
          } else {
            const er$$42 = matchValue$$31.fields[0];
            return new Result(1, "Error", er$$42);
          }
        } else {
          const er$$41 = matchValue$$30.fields[0];
          return new Result(1, "Error", er$$41);
        }
      } else {
        return acc$$7;
      }
    }, new Result(0, "Ok", new List()), Object.keys(value$$133));
  }
}

function mixedArray(msg$$11, decoders$$2, path$$118, values) {
  if (decoders$$2.length !== values.length) {
    return new Result(1, "Error", [path$$118, new ErrorReason(6, "FailMessage", toText(printf("Expected %i %s but got %i"))(decoders$$2.length)(msg$$11)(values.length))]);
  } else {
    return foldBack2(function ($arg$$11, $arg$$12, $arg$$13) {
      return function folder$$6(value$$134) {
        return function (decoder$$107) {
          return function (acc$$9) {
            if (acc$$9.tag === 0) {
              const result$$6 = acc$$9.fields[0];
              return mapOk(function mapping$$4(v$$7) {
                return new List(v$$7, result$$6);
              }, decoder$$107(path$$118, value$$134));
            } else {
              return acc$$9;
            }
          };
        };
      }($arg$$11)(uncurry(2, $arg$$12))($arg$$13);
    }, values, decoders$$2, new Result(0, "Ok", new List()));
  }
}

function makeUnion(extra, isCamelCase, t, name$$2, path$$119, values$$1) {
  const uci = tryFind(function predicate(x$$11) {
    return name$$6(x$$11) === name$$2;
  }, getUnionCases(t, true));

  if (uci != null) {
    const uci$$1 = uci;

    if (values$$1.length === 0) {
      return new Result(0, "Ok", makeUnion$$1(uci$$1, [], true));
    } else {
      const decoders$$3 = map$$1(function mapping$$5(fi) {
        return autoDecoder(extra, isCamelCase, false, fi[1]);
      }, getUnionCaseFields(uci$$1), Array);
      return mapOk(function mapping$$6(values$$2) {
        return makeUnion$$1(uci$$1, ofList$$1(values$$2, Array), true);
      }, mixedArray("union fields", decoders$$3, path$$119, values$$1));
    }
  } else {
    return new Result(1, "Error", [path$$119, new ErrorReason(6, "FailMessage", "Cannot find case " + name$$2 + " in " + fullName(t))]);
  }
}

function autoDecodeRecordsAndUnions(extra$$1, isCamelCase$$1, isOptional, t$$1) {
  if (isRecord(t$$1, true)) {
    const decoders$$4 = map$$1(function mapping$$7(fi$$1) {
      const name$$3 = isCamelCase$$1 ? name$$6(fi$$1).slice(null, 0 + 1).toLowerCase() + name$$6(fi$$1).slice(1, name$$6(fi$$1).length) : name$$6(fi$$1);
      return [name$$3, autoDecoder(extra$$1, isCamelCase$$1, false, fi$$1[1])];
    }, getRecordElements(t$$1, true), Array);
    return function (path$$120) {
      return function (value$$135) {
        return mapOk(function mapping$$8(xs$$2) {
          return makeRecord(t$$1, ofList$$1(xs$$2, Array), true);
        }, autoObject(decoders$$4, path$$120, value$$135));
      };
    };
  } else if (isUnion(t$$1, true)) {
    return function (path$$121) {
      return function (value$$136) {
        if (typeof value$$136 === "string") {
          const name$$4 = value$$136;
          return makeUnion(extra$$1, isCamelCase$$1, t$$1, name$$4, path$$121, []);
        } else if (Array.isArray(value$$136)) {
          const values$$3 = value$$136;
          const name$$5 = values$$3[0];
          return makeUnion(extra$$1, isCamelCase$$1, t$$1, name$$5, path$$121, values$$3.slice(1, values$$3.length));
        } else {
          return new Result(1, "Error", [path$$121, new ErrorReason(0, "BadPrimitive", "a string or array", value$$136)]);
        }
      };
    };
  } else if (isOptional) {
    return function d$$2(path$$122) {
      return function (value$$137) {
        return new Result(1, "Error", [path$$122, new ErrorReason(2, "BadType", "an extra coder for " + fullName(t$$1), value$$137)]);
      };
    };
  } else {
    return function (message) {
      throw new Error(message);
    }(toText(printf("Cannot generate auto decoder for %s. Please pass an extra decoder."))(fullName(t$$1)));
  }
}

function autoDecoder(extra$$2, isCamelCase$$2, isOptional$$1, t$$2) {
  const fullname = fullName(t$$2);
  const matchValue$$32 = tryFind$$1(fullname, extra$$2);

  if (matchValue$$32 == null) {
    if (isArray(t$$2)) {
      const decoder$$109 = function (t$$3) {
        return autoDecoder(extra$$2, isCamelCase$$2, false, t$$3);
      }(getElementType(t$$2));

      return function (d$$3) {
        return curry(2, d$$3);
      }(function (path$$123, value$$138) {
        return array(uncurry(2, decoder$$109), path$$123, value$$138);
      });
    } else if (isGenericType(t$$2)) {
      if (isTuple(t$$2)) {
        const decoders$$5 = map$$1(function mapping$$9(t$$4) {
          return autoDecoder(extra$$2, isCamelCase$$2, false, t$$4);
        }, getTupleElements(t$$2), Array);
        return function (path$$124) {
          return function (value$$139) {
            return Array.isArray(value$$139) ? mapOk(function mapping$$10(xs$$3) {
              return makeTuple(ofList$$1(xs$$3, Array), t$$2);
            }, mixedArray("tuple elements", decoders$$5, path$$124, value$$139)) : new Result(1, "Error", [path$$124, new ErrorReason(0, "BadPrimitive", "an array", value$$139)]);
          };
        };
      } else {
        const fullname$$1 = fullName(getGenericTypeDefinition(t$$2));

        if (fullname$$1 === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]") {
          return function (d$$5) {
            return curry(2, d$$5);
          }(function (path$$125, value$$140) {
            return option(uncurry(2, function (t$$5) {
              return autoDecoder(extra$$2, isCamelCase$$2, true, t$$5);
            }(getGenerics(t$$2)[0])), path$$125, value$$140);
          });
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpList`1[System.Object]") {
          return function (d$$7) {
            return curry(2, d$$7);
          }(function (path$$126, value$$141) {
            return list(uncurry(2, function (t$$6) {
              return autoDecoder(extra$$2, isCamelCase$$2, false, t$$6);
            }(getGenerics(t$$2)[0])), path$$126, value$$141);
          });
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpMap`2[System.Object,System.Object]") {
          const keyDecoder$$1 = function (t$$7) {
            return autoDecoder(extra$$2, isCamelCase$$2, false, t$$7);
          }(getGenerics(t$$2)[0]);

          const valueDecoder$$1 = function (t$$8) {
            return autoDecoder(extra$$2, isCamelCase$$2, false, t$$8);
          }(getGenerics(t$$2)[1]);

          return function (path$$130) {
            return function (value$$146) {
              return map(function ctor$$9(ar) {
                return toMap(ar);
              }, function (path$$129, value$$144) {
                return oneOf(ofArray([function (path$$127) {
                  return function (value$$142) {
                    return autoObject2(uncurry(2, keyDecoder$$1), uncurry(2, valueDecoder$$1), path$$127, value$$142);
                  };
                }, function (path$$128) {
                  return function (value$$143) {
                    return list(uncurry(2, tuple2(uncurry(2, keyDecoder$$1), uncurry(2, valueDecoder$$1))), path$$128, value$$143);
                  };
                }]), path$$129, value$$144);
              }, path$$130, value$$146);
            };
          };
        } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpSet`1[System.Object]") {
          const decoder$$113 = function (t$$9) {
            return autoDecoder(extra$$2, isCamelCase$$2, false, t$$9);
          }(getGenerics(t$$2)[0]);

          return function (path$$131) {
            return function (value$$147) {
              const matchValue$$33 = array(uncurry(2, decoder$$113), path$$131, value$$147);

              if (matchValue$$33.tag === 0) {
                const ar$$1 = matchValue$$33.fields[0];
                return new Result(0, "Ok", toSet(ar$$1));
              } else {
                const er$$43 = matchValue$$33.fields[0];
                return new Result(1, "Error", er$$43);
              }
            };
          };
        } else {
          return autoDecodeRecordsAndUnions(extra$$2, isCamelCase$$2, isOptional$$1, t$$2);
        }
      }
    } else if (fullname === "System.Boolean") {
      return function d$$9(path$$132) {
        return function (value$$149) {
          return bool(path$$132, value$$149);
        };
      };
    } else if (fullname === "System.String") {
      return function d$$10(path$$133) {
        return function (value$$150) {
          return string(path$$133, value$$150);
        };
      };
    } else if (fullname === "System.Int32") {
      return function d$$11(path$$134) {
        return function (value$$151) {
          return int$(path$$134, value$$151);
        };
      };
    } else if (fullname === "System.UInt32") {
      return function d$$12(path$$135) {
        return function (value$$152) {
          return uint32(path$$135, value$$152);
        };
      };
    } else if (fullname === "System.Double") {
      return function d$$13(path$$136) {
        return function (value$$153) {
          return float$(path$$136, value$$153);
        };
      };
    } else if (fullname === "System.DateTime") {
      return function d$$14(path$$137) {
        return function (value$$154) {
          return datetime(path$$137, value$$154);
        };
      };
    } else if (fullname === "System.DateTimeOffset") {
      return function d$$15(path$$138) {
        return function (value$$155) {
          return datetimeOffset(path$$138, value$$155);
        };
      };
    } else if (fullname === "System.Guid") {
      return function d$$16(path$$139) {
        return function (value$$156) {
          return guid(path$$139, value$$156);
        };
      };
    } else if (fullname === "System.Object") {
      return function (_arg1$$4) {
        return function (v$$8) {
          return new Result(0, "Ok", v$$8);
        };
      };
    } else {
      return autoDecodeRecordsAndUnions(extra$$2, isCamelCase$$2, isOptional$$1, t$$2);
    }
  } else {
    const decoder$$108 = matchValue$$32[1];
    return decoder$$108;
  }
}

export const Auto = declare(function Thoth_Json_Decode_Auto() {});
export function Auto$reflection() {
  return type("Thoth.Json.Decode.Auto");
}
export function Auto$$$generateDecoderCached$$4AE6C623(isCamelCase$$3, extra$$3, resolver) {
  const t$$10 = resolver.ResolveType();
  return function (d$$17) {
    return curry(2, d$$17);
  }(uncurry(2, Cache$0024002ECache$002400601$0024$0024GetOrAdd$0024$002443981464(Cache$0024$0024$0024Decoders, fullName(t$$10), function () {
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
  })));
}
export function Auto$$$generateDecoder$$4AE6C623(isCamelCase$$5, extra$$5, resolver$$1) {
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

  return function (d$$19) {
    return curry(2, d$$19);
  }(uncurry(2, function (t$$11) {
    return autoDecoder(extra$$6, isCamelCase$$6, false, t$$11);
  }(resolver$$1.ResolveType())));
}
export function Auto$$$fromString$$Z33228D48(json$$1, isCamelCase$$7, extra$$7, resolver$$2) {
  const decoder$$114 = Auto$$$generateDecoder$$4AE6C623(isCamelCase$$7, extra$$7, resolver$$2);
  return fromString(uncurry(2, decoder$$114), json$$1);
}
export function Auto$$$unsafeFromString$$Z33228D48(json$$2, isCamelCase$$8, extra$$8, resolver$$3) {
  const decoder$$115 = Auto$$$generateDecoder$$4AE6C623(isCamelCase$$8, extra$$8, resolver$$3);
  const matchValue$$34 = fromString(uncurry(2, decoder$$115), json$$2);

  if (matchValue$$34.tag === 1) {
    const msg$$12 = matchValue$$34.fields[0];
    throw new Error(msg$$12);
  } else {
    const x$$12 = matchValue$$34.fields[0];
    return x$$12;
  }
}

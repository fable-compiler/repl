import { L, FSharpException, declare, Union } from "../../fable-core/Types.js";
import { toText, printf, validateGuid, join } from "../../fable-core/String.js";
import { defaultArg, mapOk, some, Result } from "../../fable-core/Option.js";
import { fromString as fromString$$1, toNumber, fromBits, tryParse, fromInteger } from "../../fable-core/Long.js";
import { parse } from "../../fable-core/Int32.js";
import { parse as parse$$1, fromInt32 } from "../../fable-core/BigInt.js";
import { parse as parse$$2 } from "../../fable-core/Decimal.js";
import Decimal from "../../fable-core/Decimal.js";
import { tryParse as tryParse$$1 } from "../../fable-core/Date.js";
import { tryParse as tryParse$$2 } from "../../fable-core/DateOffset.js";
import { append, ofSeq, slice } from "../../fable-core/List.js";
import { map as map$$2, iterate } from "../../fable-core/Seq.js";
import { curry, compare, comparePrimitives, uncurry, equals, int32ToString } from "../../fable-core/Util.js";
import { ofList as ofList$$1, tryFind, foldBack2, foldBack, toList, map as map$$1 } from "../../fable-core/Array.js";
import { ofSeq as ofSeq$$1, ofList } from "../../fable-core/Map.js";
import { makeTuple, getTupleElements, isTuple, getElementType, isArray, isUnion, makeRecord, getRecordElements, getGenerics, getGenericTypeDefinition, isGenericType, isRecord, fullName, getUnionCaseFields, makeUnion as makeUnion$$1, getUnionCases, name as name$$5 } from "../../fable-core/Reflection.js";
export const ErrorReason = declare(function ErrorReason(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Helpers$$$isString(o) {
  return typeof o === "string";
}
export function Helpers$$$isBoolean(o$$1) {
  return typeof o$$1 === "boolean";
}
export function Helpers$$$isNumber(o$$2) {
  return typeof o$$2 === "number";
}
export function Helpers$$$isArray(o$$3) {
  return Array.isArray(o$$3);
}
export function Helpers$$$isNaN(o$$4) {
  return Number.isNaN(o$$4);
}
export function Helpers$$$isNull(o$$5) {
  return o$$5 == null;
}
export function Helpers$$$isFunction(o$$6) {
  return typeof o$$6 === "function";
}
export function Helpers$$$objectKeys(o$$7) {
  return Object.keys(o$$7);
}
export function Helpers$$$asBool(o$$8) {
  return o$$8;
}
export function Helpers$$$asInt(o$$9) {
  return o$$9;
}
export function Helpers$$$asFloat(o$$10) {
  return o$$10;
}
export function Helpers$$$asString(o$$11) {
  return o$$11;
}
export function Helpers$$$asArray(o$$12) {
  return o$$12;
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
    case 1:
      {
        const value$$3 = error.fields[1];
        const msg$$2 = error.fields[0];
        reason$$1 = genericMsg(msg$$2, value$$3, true);
        break;
      }

    case 2:
      {
        const value$$4 = error.fields[1];
        const msg$$3 = error.fields[0];
        reason$$1 = genericMsg(msg$$3, value$$4, true);
        break;
      }

    case 3:
      {
        const value$$5 = error.fields[1];
        const reason = error.fields[2];
        const msg$$4 = error.fields[0];
        reason$$1 = genericMsg(msg$$4, value$$5, false) + "\nReason: " + reason;
        break;
      }

    case 4:
      {
        const value$$6 = error.fields[1];
        const msg$$5 = error.fields[0];
        reason$$1 = genericMsg(msg$$5, value$$6, true);
        break;
      }

    case 5:
      {
        const value$$7 = error.fields[1];
        const msg$$6 = error.fields[0];
        const fieldName = error.fields[2];
        reason$$1 = genericMsg(msg$$6, value$$7, true) + ("\nNode `" + fieldName + "` is unkown.");
        break;
      }

    case 6:
      {
        const value$$8 = error.fields[1];
        const msg$$7 = error.fields[0];
        reason$$1 = "Expecting " + msg$$7 + ".\n" + (JSON.stringify(value$$8, null, 4) + "");
        break;
      }

    case 8:
      {
        const messages = error.fields[0];
        reason$$1 = "I run into the following problems:\n\n" + join("\n", ...messages);
        break;
      }

    case 7:
      {
        const msg$$8 = error.fields[0];
        reason$$1 = "I run into a `fail` decoder: " + msg$$8;
        break;
      }

    default:
      {
        const value$$2 = error.fields[1];
        const msg$$1 = error.fields[0];
        reason$$1 = genericMsg(msg$$1, value$$2, false);
      }
  }

  if (error.tag === 8) {
    return reason$$1;
  } else {
    return "Error at: `" + path + "`\n" + reason$$1;
  }
}

export const DecoderException = declare(function DecoderException(arg1) {
  this.Data0 = arg1;
}, FSharpException);
export function unwrap(path$$1, decoder, value$$9) {
  const matchValue$$1 = decoder(path$$1, value$$9);

  if (matchValue$$1.tag === 1) {
    const error$$1 = matchValue$$1.fields[0];
    throw new DecoderException(error$$1);
  } else {
    const success = matchValue$$1.fields[0];
    return success;
  }
}

function decodeValueError(path$$2, decoder$$1, value$$10) {
  try {
    const matchValue$$2 = decoder$$1(path$$2, value$$10);

    if (matchValue$$2.tag === 1) {
      const error$$2 = matchValue$$2.fields[0];
      return new Result(1, "Error", error$$2);
    } else {
      const success$$1 = matchValue$$2.fields[0];
      return new Result(0, "Ok", success$$1);
    }
  } catch (matchValue$$3) {
    if (matchValue$$3 instanceof DecoderException) {
      return new Result(1, "Error", matchValue$$3.Data0);
    } else {
      throw matchValue$$3;
    }
  }
}

export function fromValue(path$$3, decoder$$2, value$$11) {
  const matchValue$$4 = decodeValueError(path$$3, decoder$$2, value$$11);

  if (matchValue$$4.tag === 1) {
    const error$$4 = matchValue$$4.fields[0];
    return new Result(1, "Error", errorToString(error$$4[0], error$$4[1]));
  } else {
    const success$$2 = matchValue$$4.fields[0];
    return new Result(0, "Ok", success$$2);
  }
}
export function fromString(decoder$$3, value$$12) {
  var ex;

  try {
    const json = JSON.parse(value$$12);
    return fromValue("$", decoder$$3, json);
  } catch (matchValue$$5) {
    if (ex = matchValue$$5, ex instanceof SyntaxError) {
      const ex$$1 = matchValue$$5;
      return new Result(1, "Error", "Given an invalid JSON: " + ex$$1.message);
    } else {
      if (matchValue$$5 instanceof DecoderException) {
        return new Result(1, "Error", errorToString(matchValue$$5.Data0[0], matchValue$$5.Data0[1]));
      } else {
        throw matchValue$$5;
      }
    }
  }
}
export function decodeValue(path$$6, decoder$$4) {
  return function (value$$13) {
    return fromValue(path$$6, decoder$$4, value$$13);
  };
}
export function decodeString(decoder$$6) {
  return function (value$$14) {
    return fromString(decoder$$6, value$$14);
  };
}
export function string(path$$7, value$$15) {
  if (typeof value$$15 === "string") {
    return new Result(0, "Ok", value$$15);
  } else {
    return new Result(1, "Error", [path$$7, new ErrorReason(0, "BadPrimitive", "a string", value$$15)]);
  }
}
export function guid(path$$8, value$$16) {
  if (typeof value$$16 === "string") {
    const matchValue$$6 = validateGuid(value$$16, true);

    if (matchValue$$6[0]) {
      return new Result(0, "Ok", matchValue$$6[1]);
    } else {
      return new Result(1, "Error", [path$$8, new ErrorReason(0, "BadPrimitive", "a guid", value$$16)]);
    }
  } else {
    return new Result(1, "Error", [path$$8, new ErrorReason(0, "BadPrimitive", "a guid", value$$16)]);
  }
}
export function int$(path$$9, value$$17) {
  if (typeof value$$17 === "number") {
    if (-2147483648 < value$$17 && value$$17 < 2147483647 && (value$$17 | 0) === value$$17) {
      return new Result(0, "Ok", value$$17);
    } else {
      return new Result(1, "Error", [path$$9, new ErrorReason(3, "BadPrimitiveExtra", "an int", value$$17, "Value was either too large or too small for an int")]);
    }
  } else {
    return new Result(1, "Error", [path$$9, new ErrorReason(0, "BadPrimitive", "an int", value$$17)]);
  }
}
export function int64(path$$10, value$$18) {
  if (typeof value$$18 === "number") {
    return new Result(0, "Ok", fromInteger(value$$18, false, 2));
  } else if (typeof value$$18 === "string") {
    const matchValue$$7 = tryParse(value$$18, 10, null);

    if (matchValue$$7[0]) {
      return new Result(0, "Ok", matchValue$$7[1]);
    } else {
      return new Result(1, "Error", [path$$10, new ErrorReason(0, "BadPrimitive", "an int64", value$$18)]);
    }
  } else {
    return new Result(1, "Error", [path$$10, new ErrorReason(0, "BadPrimitive", "an int64", value$$18)]);
  }
}
export function uint32(path$$11, value$$20) {
  if (typeof value$$20 === "number") {
    const x$$2 = value$$20;

    if (x$$2 >= 0 ? x$$2 <= 4294967295 : false) {
      return new Result(0, "Ok", value$$20 >>> 0);
    } else {
      return new Result(1, "Error", [path$$11, new ErrorReason(3, "BadPrimitiveExtra", "an uint32", value$$20, "Value was either too large or too small for an uint32")]);
    }
  } else if (typeof value$$20 === "string") {
    try {
      return new Result(0, "Ok", parse(value$$20));
    } catch (ex$$2) {
      return new Result(1, "Error", [path$$11, new ErrorReason(3, "BadPrimitiveExtra", "an uint32", value$$20, ex$$2.message)]);
    }
  } else {
    return new Result(1, "Error", [path$$11, new ErrorReason(0, "BadPrimitive", "an uint32", value$$20)]);
  }
}
export function uint64(path$$12, value$$23) {
  if (typeof value$$23 === "number") {
    const x$$3 = value$$23;

    if (x$$3 >= 0 ? x$$3 <= toNumber(fromBits(4294967295, 4294967295, true)) : false) {
      return new Result(0, "Ok", fromInteger(value$$23, true, 2));
    } else {
      return new Result(1, "Error", [path$$12, new ErrorReason(3, "BadPrimitiveExtra", "an uint64", value$$23, "Value was either too large or too small for an uint64")]);
    }
  } else if (typeof value$$23 === "string") {
    try {
      return new Result(0, "Ok", fromString$$1(value$$23, true));
    } catch (ex$$3) {
      return new Result(1, "Error", [path$$12, new ErrorReason(3, "BadPrimitiveExtra", "an uint64", value$$23, ex$$3.message)]);
    }
  } else {
    return new Result(1, "Error", [path$$12, new ErrorReason(0, "BadPrimitive", "an uint64", value$$23)]);
  }
}
export function bigint(path$$13, value$$26) {
  if (typeof value$$26 === "number") {
    return new Result(0, "Ok", fromInt32(value$$26));
  } else if (typeof value$$26 === "string") {
    try {
      return new Result(0, "Ok", parse$$1(value$$26, {}));
    } catch (matchValue$$8) {
      return new Result(1, "Error", [path$$13, new ErrorReason(0, "BadPrimitive", "a bigint", value$$26)]);
    }
  } else {
    return new Result(1, "Error", [path$$13, new ErrorReason(0, "BadPrimitive", "a bigint", value$$26)]);
  }
}
export function bool(path$$14, value$$27) {
  if (typeof value$$27 === "boolean") {
    return new Result(0, "Ok", value$$27);
  } else {
    return new Result(1, "Error", [path$$14, new ErrorReason(0, "BadPrimitive", "a boolean", value$$27)]);
  }
}
export function float$(path$$15, value$$28) {
  if (typeof value$$28 === "number") {
    return new Result(0, "Ok", value$$28);
  } else {
    return new Result(1, "Error", [path$$15, new ErrorReason(0, "BadPrimitive", "a float", value$$28)]);
  }
}
export function decimal(path$$16, value$$29) {
  if (typeof value$$29 === "number") {
    return new Result(0, "Ok", new Decimal(value$$29));
  } else if (typeof value$$29 === "string") {
    try {
      return new Result(0, "Ok", parse$$2(value$$29, 10));
    } catch (ex$$4) {
      return new Result(1, "Error", [path$$16, new ErrorReason(3, "BadPrimitiveExtra", "a decimal", value$$29, ex$$4.message)]);
    }
  } else {
    return new Result(1, "Error", [path$$16, new ErrorReason(0, "BadPrimitive", "a decimal", value$$29)]);
  }
}
export function datetime(path$$17, value$$31) {
  if (typeof value$$31 === "string") {
    const matchValue$$9 = tryParse$$1(value$$31, null);

    if (matchValue$$9[0]) {
      return new Result(0, "Ok", matchValue$$9[1]);
    } else {
      return new Result(1, "Error", [path$$17, new ErrorReason(0, "BadPrimitive", "a datetime", value$$31)]);
    }
  } else {
    return new Result(1, "Error", [path$$17, new ErrorReason(0, "BadPrimitive", "a datetime", value$$31)]);
  }
}
export function datetimeOffset(path$$18, value$$32) {
  if (typeof value$$32 === "string") {
    const matchValue$$10 = tryParse$$2(value$$32, null);

    if (matchValue$$10[0]) {
      return new Result(0, "Ok", matchValue$$10[1]);
    } else {
      return new Result(1, "Error", [path$$18, new ErrorReason(0, "BadPrimitive", "a datetimeoffset", value$$32)]);
    }
  } else {
    return new Result(1, "Error", [path$$18, new ErrorReason(0, "BadPrimitive", "a datetime", value$$32)]);
  }
}
export function field(fieldName$$1, decoder$$8, path$$19, value$$33) {
  const currentPath = path$$19 + "." + fieldName$$1;

  if (Object.getPrototypeOf(value$$33 || false) === Object.prototype) {
    const fieldValue = value$$33[fieldName$$1];

    if (fieldValue !== undefined) {
      return decoder$$8(currentPath, fieldValue);
    } else {
      return new Result(1, "Error", [currentPath, new ErrorReason(4, "BadField", "an object with a field named `" + fieldName$$1 + "`", value$$33)]);
    }
  } else {
    return new Result(1, "Error", [currentPath, new ErrorReason(1, "BadType", "an object", value$$33)]);
  }
}
export const UndefinedValueException = declare(function UndefinedValueException(arg1) {
  this.Data0 = arg1;
}, FSharpException);
export const NonObjectTypeException = declare(function NonObjectTypeException() {}, FSharpException);
export function at(fieldNames, decoder$$9, path$$20, value$$34) {
  let cValue = value$$34;
  let currentPath$$1 = path$$20;
  let index$$1 = 0;

  try {
    iterate(function (fieldName$$2) {
      if (Object.getPrototypeOf(cValue || false) === Object.prototype) {
        const currentNode = cValue[fieldName$$2];
        currentPath$$1 = currentPath$$1 + "." + fieldName$$2;

        if (currentNode !== undefined) {
          cValue = currentNode;
        } else {
          throw new UndefinedValueException(fieldName$$2);
        }
      } else {
        throw new NonObjectTypeException();
      }

      index$$1 = index$$1 + 1;
    }, fieldNames);
    return new Result(0, "Ok", unwrap(currentPath$$1, decoder$$9, cValue));
  } catch (matchValue$$11) {
    if (matchValue$$11 instanceof NonObjectTypeException) {
      const path$$21 = join(".", ...slice(null, index$$1 - 1, fieldNames));
      return new Result(1, "Error", [currentPath$$1, new ErrorReason(2, "BadTypeAt", "an object at `" + path$$21 + "`", cValue)]);
    } else if (matchValue$$11 instanceof UndefinedValueException) {
      const msg$$9 = "an object with path `" + join(".", ...fieldNames) + "`";
      return new Result(1, "Error", [currentPath$$1, new ErrorReason(5, "BadPath", msg$$9, value$$34, matchValue$$11.Data0)]);
    } else {
      throw matchValue$$11;
    }
  }
}
export function index(requestedIndex, decoder$$10, path$$22, value$$35) {
  var copyOfStruct;
  const currentPath$$2 = path$$22 + ".[" + int32ToString(requestedIndex) + "]";

  if (Array.isArray(value$$35)) {
    const vArray = value$$35;

    if (requestedIndex < vArray.length) {
      return new Result(0, "Ok", unwrap(currentPath$$2, decoder$$10, vArray[requestedIndex]));
    } else {
      const msg$$10 = "a longer array. Need index `" + int32ToString(requestedIndex) + "` but there are only `" + (copyOfStruct = vArray.length | 0, int32ToString(copyOfStruct)) + "` entries";
      return new Result(1, "Error", [currentPath$$2, new ErrorReason(6, "TooSmallArray", msg$$10, value$$35)]);
    }
  } else {
    return new Result(1, "Error", [currentPath$$2, new ErrorReason(0, "BadPrimitive", "an array", value$$35)]);
  }
}
export function optional(fieldName$$4, decoder$$11, path$$23, v) {
  const matchValue$$12 = decodeValueError(path$$23, function (path$$24, value$$36) {
    return field(fieldName$$4, decoder$$11, path$$24, value$$36);
  }, v);
  var $target$$38, v$$1, error$$8;

  if (matchValue$$12.tag === 1) {
    if (matchValue$$12.fields[0][1].tag === 4) {
      $target$$38 = 1;
    } else if (matchValue$$12.fields[0][1].tag === 1) {
      if (equals(matchValue$$12.fields[0][1].fields[1], null)) {
        $target$$38 = 1;
      } else {
        $target$$38 = 2;
        error$$8 = matchValue$$12.fields[0];
      }
    } else if (matchValue$$12.fields[0][1].tag === 0) {
      if (equals(matchValue$$12.fields[0][1].fields[1], null)) {
        $target$$38 = 1;
      } else {
        $target$$38 = 2;
        error$$8 = matchValue$$12.fields[0];
      }
    } else {
      $target$$38 = 2;
      error$$8 = matchValue$$12.fields[0];
    }
  } else {
    $target$$38 = 0;
    v$$1 = matchValue$$12.fields[0];
  }

  switch ($target$$38) {
    case 0:
      {
        return new Result(0, "Ok", some(v$$1));
      }

    case 1:
      {
        return new Result(0, "Ok", null);
      }

    case 2:
      {
        throw new DecoderException(error$$8);
      }
  }
}
export function optionalAt(fieldNames$$1, decoder$$13, path$$25, v$$2) {
  const matchValue$$13 = decodeValueError(path$$25, function (path$$26, value$$37) {
    return at(fieldNames$$1, decoder$$13, path$$26, value$$37);
  }, v$$2);
  var $target$$43, v$$3, error$$9;

  if (matchValue$$13.tag === 1) {
    if (matchValue$$13.fields[0][1].tag === 5) {
      $target$$43 = 1;
    } else if (matchValue$$13.fields[0][1].tag === 1) {
      if (equals(matchValue$$13.fields[0][1].fields[1], null)) {
        $target$$43 = 1;
      } else {
        $target$$43 = 2;
        error$$9 = matchValue$$13.fields[0];
      }
    } else if (matchValue$$13.fields[0][1].tag === 2) {
      $target$$43 = 1;
    } else if (matchValue$$13.fields[0][1].tag === 0) {
      if (equals(matchValue$$13.fields[0][1].fields[1], null)) {
        $target$$43 = 1;
      } else {
        $target$$43 = 2;
        error$$9 = matchValue$$13.fields[0];
      }
    } else {
      $target$$43 = 2;
      error$$9 = matchValue$$13.fields[0];
    }
  } else {
    $target$$43 = 0;
    v$$3 = matchValue$$13.fields[0];
  }

  switch ($target$$43) {
    case 0:
      {
        return new Result(0, "Ok", some(v$$3));
      }

    case 1:
      {
        return new Result(0, "Ok", null);
      }

    case 2:
      {
        throw new DecoderException(error$$9);
      }
  }
}
export function list(decoder$$15, path$$27, value$$38) {
  if (Array.isArray(value$$38)) {
    return new Result(0, "Ok", toList(map$$1(function mapping(value$$39) {
      return unwrap(path$$27, decoder$$15, value$$39);
    }, value$$38, Array)));
  } else {
    return new Result(1, "Error", [path$$27, new ErrorReason(0, "BadPrimitive", "a list", value$$38)]);
  }
}
export function array(decoder$$17, path$$28, value$$40) {
  if (Array.isArray(value$$40)) {
    return new Result(0, "Ok", map$$1(function mapping$$1(value$$41) {
      return unwrap(path$$28, decoder$$17, value$$41);
    }, value$$40, Array));
  } else {
    return new Result(1, "Error", [path$$28, new ErrorReason(0, "BadPrimitive", "an array", value$$40)]);
  }
}
export function keyValuePairs(decoder$$19, path$$29, value$$42) {
  if (!(Object.getPrototypeOf(value$$42 || false) === Object.prototype) ? true : Array.isArray(value$$42)) {
    return new Result(1, "Error", [path$$29, new ErrorReason(0, "BadPrimitive", "an object", value$$42)]);
  } else {
    return new Result(0, "Ok", ofSeq(map$$2(function mapping$$2(key) {
      return [key, unwrap(path$$29, decoder$$19, value$$42[key])];
    }, Object.keys(value$$42))));
  }
}
export function option(d1, path$$30, value$$44) {
  if (value$$44 == null) {
    return new Result(0, "Ok", null);
  } else {
    const matchValue$$14 = d1(path$$30, value$$44);
    var $target$$56, v$$4, error$$10;

    if (matchValue$$14.tag === 1) {
      if (matchValue$$14.fields[0][1].tag === 4) {
        $target$$56 = 1;
      } else if (matchValue$$14.fields[0][1].tag === 1) {
        if (equals(matchValue$$14.fields[0][1].fields[1], null)) {
          $target$$56 = 1;
        } else {
          $target$$56 = 2;
          error$$10 = matchValue$$14.fields[0];
        }
      } else if (matchValue$$14.fields[0][1].tag === 0) {
        if (equals(matchValue$$14.fields[0][1].fields[1], null)) {
          $target$$56 = 1;
        } else {
          $target$$56 = 2;
          error$$10 = matchValue$$14.fields[0];
        }
      } else {
        $target$$56 = 2;
        error$$10 = matchValue$$14.fields[0];
      }
    } else {
      $target$$56 = 0;
      v$$4 = matchValue$$14.fields[0];
    }

    switch ($target$$56) {
      case 0:
        {
          return new Result(0, "Ok", some(v$$4));
        }

      case 1:
        {
          return new Result(0, "Ok", null);
        }

      case 2:
        {
          return new Result(1, "Error", error$$10);
        }
    }
  }
}
export function oneOf(decoders, path$$31, value$$45) {
  const runner = function runner(decoders$$1, errors) {
    runner: while (true) {
      if (decoders$$1.tail == null) {
        return new Result(1, "Error", [path$$31, new ErrorReason(8, "BadOneOf", errors)]);
      } else {
        const tail = decoders$$1.tail;
        const head = decoders$$1.head;
        const matchValue$$15 = fromValue(path$$31, uncurry(2, head), value$$45);

        if (matchValue$$15.tag === 1) {
          const error$$11 = matchValue$$15.fields[0];
          const $errors$$57 = errors;
          decoders$$1 = tail;
          errors = append($errors$$57, L(error$$11, L()));
          continue runner;
        } else {
          const v$$5 = matchValue$$15.fields[0];
          return new Result(0, "Ok", v$$5);
        }
      }

      break;
    }
  };

  return runner(decoders, L());
}
export function nil(output, path$$32, value$$46) {
  if (value$$46 == null) {
    return new Result(0, "Ok", output);
  } else {
    return new Result(1, "Error", [path$$32, new ErrorReason(0, "BadPrimitive", "null", value$$46)]);
  }
}
export function value(_arg1, v$$6) {
  return new Result(0, "Ok", v$$6);
}
export function succeed(output$$1, _arg2, _arg1$$1) {
  return new Result(0, "Ok", output$$1);
}
export function fail(msg$$11, path$$33, _arg1$$2) {
  return new Result(1, "Error", [path$$33, new ErrorReason(7, "FailMessage", msg$$11)]);
}
export function andThen(cb, decoder$$21, path$$34, value$$47) {
  const matchValue$$16 = decodeValueError(path$$34, decoder$$21, value$$47);

  if (matchValue$$16.tag === 0) {
    const result = matchValue$$16.fields[0];
    return cb(result, path$$34, value$$47);
  } else {
    const error$$12 = matchValue$$16.fields[0];
    throw new DecoderException(error$$12);
  }
}
export function map(ctor, d1$$1, path$$35, value$$48) {
  const t = unwrap(path$$35, d1$$1, value$$48);
  return new Result(0, "Ok", ctor(t));
}
export function map2(ctor$$1, d1$$2, d2, path$$36, value$$49) {
  const t$$1 = unwrap(path$$36, d1$$2, value$$49);
  const t2 = unwrap(path$$36, d2, value$$49);
  return new Result(0, "Ok", ctor$$1(t$$1, t2));
}
export function map3(ctor$$2, d1$$3, d2$$1, d3, path$$37, value$$50) {
  const v1 = unwrap(path$$37, d1$$3, value$$50);
  const v2 = unwrap(path$$37, d2$$1, value$$50);
  const v3 = unwrap(path$$37, d3, value$$50);
  return new Result(0, "Ok", ctor$$2(v1, v2, v3));
}
export function map4(ctor$$3, d1$$4, d2$$2, d3$$1, d4, path$$38, value$$51) {
  const v1$$1 = unwrap(path$$38, d1$$4, value$$51);
  const v2$$1 = unwrap(path$$38, d2$$2, value$$51);
  const v3$$1 = unwrap(path$$38, d3$$1, value$$51);
  const v4 = unwrap(path$$38, d4, value$$51);
  return new Result(0, "Ok", ctor$$3(v1$$1, v2$$1, v3$$1, v4));
}
export function map5(ctor$$4, d1$$5, d2$$3, d3$$2, d4$$1, d5, path$$39, value$$52) {
  const v1$$2 = unwrap(path$$39, d1$$5, value$$52);
  const v2$$2 = unwrap(path$$39, d2$$3, value$$52);
  const v3$$2 = unwrap(path$$39, d3$$2, value$$52);
  const v4$$1 = unwrap(path$$39, d4$$1, value$$52);
  const v5 = unwrap(path$$39, d5, value$$52);
  return new Result(0, "Ok", ctor$$4(v1$$2, v2$$2, v3$$2, v4$$1, v5));
}
export function map6(ctor$$5, d1$$6, d2$$4, d3$$3, d4$$2, d5$$1, d6, path$$40, value$$53) {
  const v1$$3 = unwrap(path$$40, d1$$6, value$$53);
  const v2$$3 = unwrap(path$$40, d2$$4, value$$53);
  const v3$$3 = unwrap(path$$40, d3$$3, value$$53);
  const v4$$2 = unwrap(path$$40, d4$$2, value$$53);
  const v5$$1 = unwrap(path$$40, d5$$1, value$$53);
  const v6 = unwrap(path$$40, d6, value$$53);
  return new Result(0, "Ok", ctor$$5(v1$$3, v2$$3, v3$$3, v4$$2, v5$$1, v6));
}
export function map7(ctor$$6, d1$$7, d2$$5, d3$$4, d4$$3, d5$$2, d6$$1, d7, path$$41, value$$54) {
  const v1$$4 = unwrap(path$$41, d1$$7, value$$54);
  const v2$$4 = unwrap(path$$41, d2$$5, value$$54);
  const v3$$4 = unwrap(path$$41, d3$$4, value$$54);
  const v4$$3 = unwrap(path$$41, d4$$3, value$$54);
  const v5$$2 = unwrap(path$$41, d5$$2, value$$54);
  const v6$$1 = unwrap(path$$41, d6$$1, value$$54);
  const v7 = unwrap(path$$41, d7, value$$54);
  return new Result(0, "Ok", ctor$$6(v1$$4, v2$$4, v3$$4, v4$$3, v5$$2, v6$$1, v7));
}
export function map8(ctor$$7, d1$$8, d2$$6, d3$$5, d4$$4, d5$$3, d6$$2, d7$$1, d8, path$$42, value$$55) {
  const v1$$5 = unwrap(path$$42, d1$$8, value$$55);
  const v2$$5 = unwrap(path$$42, d2$$6, value$$55);
  const v3$$5 = unwrap(path$$42, d3$$5, value$$55);
  const v4$$4 = unwrap(path$$42, d4$$4, value$$55);
  const v5$$3 = unwrap(path$$42, d5$$3, value$$55);
  const v6$$2 = unwrap(path$$42, d6$$2, value$$55);
  const v7$$1 = unwrap(path$$42, d7$$1, value$$55);
  const v8 = unwrap(path$$42, d8, value$$55);
  return new Result(0, "Ok", ctor$$7(v1$$5, v2$$5, v3$$5, v4$$4, v5$$3, v6$$2, v7$$1, v8));
}
export function dict(decoder$$22) {
  return function (path$$44) {
    return function (value$$57) {
      return map(function ctor$$8(elements) {
        return ofList(elements, {
          Compare: comparePrimitives
        });
      }, function d1$$9(path$$43, value$$56) {
        return keyValuePairs(decoder$$22, path$$43, value$$56);
      }, path$$44, value$$57);
    };
  };
}
export function object(builder, path$$45, v$$7) {
  return new Result(0, "Ok", builder({
    get Required() {
      return {
        Field(fieldName$$5, decoder$$24) {
          const matchValue$$17 = decodeValueError(path$$45, function (path$$46, value$$58) {
            return field(fieldName$$5, decoder$$24, path$$46, value$$58);
          }, v$$7);

          if (matchValue$$17.tag === 1) {
            const error$$13 = matchValue$$17.fields[0];
            throw new DecoderException(error$$13);
          } else {
            const v$$8 = matchValue$$17.fields[0];
            return v$$8;
          }
        },

        At(fieldNames$$2, decoder$$26) {
          const matchValue$$18 = decodeValueError(path$$45, function (path$$47, value$$59) {
            return at(fieldNames$$2, decoder$$26, path$$47, value$$59);
          }, v$$7);

          if (matchValue$$18.tag === 1) {
            const error$$14 = matchValue$$18.fields[0];
            throw new DecoderException(error$$14);
          } else {
            const v$$9 = matchValue$$18.fields[0];
            return v$$9;
          }
        },

        Raw(decoder$$28) {
          const matchValue$$19 = decodeValueError(path$$45, decoder$$28, v$$7);

          if (matchValue$$19.tag === 1) {
            const error$$15 = matchValue$$19.fields[0];
            throw new DecoderException(error$$15);
          } else {
            const v$$10 = matchValue$$19.fields[0];
            return v$$10;
          }
        }

      };
    },

    get Optional() {
      return {
        Field(fieldName$$6, decoder$$29) {
          const matchValue$$20 = decodeValueError(path$$45, function (path$$48, value$$60) {
            return field(fieldName$$6, decoder$$29, path$$48, value$$60);
          }, v$$7);
          var $target$$126, v$$11, error$$16;

          if (matchValue$$20.tag === 1) {
            if (matchValue$$20.fields[0][1].tag === 4) {
              $target$$126 = 1;
            } else if (matchValue$$20.fields[0][1].tag === 1) {
              if (equals(matchValue$$20.fields[0][1].fields[1], null)) {
                $target$$126 = 1;
              } else {
                $target$$126 = 2;
                error$$16 = matchValue$$20.fields[0];
              }
            } else if (matchValue$$20.fields[0][1].tag === 0) {
              if (equals(matchValue$$20.fields[0][1].fields[1], null)) {
                $target$$126 = 1;
              } else {
                $target$$126 = 2;
                error$$16 = matchValue$$20.fields[0];
              }
            } else {
              $target$$126 = 2;
              error$$16 = matchValue$$20.fields[0];
            }
          } else {
            $target$$126 = 0;
            v$$11 = matchValue$$20.fields[0];
          }

          switch ($target$$126) {
            case 0:
              {
                return some(v$$11);
              }

            case 1:
              {
                return null;
              }

            case 2:
              {
                throw new DecoderException(error$$16);
              }
          }
        },

        At(fieldNames$$3, decoder$$31) {
          if (Object.getPrototypeOf(v$$7 || false) === Object.prototype) {
            const matchValue$$21 = decodeValueError(path$$45, function (path$$49, value$$61) {
              return at(fieldNames$$3, decoder$$31, path$$49, value$$61);
            }, v$$7);
            var $target$$127, v$$12, error$$17;

            if (matchValue$$21.tag === 1) {
              if (matchValue$$21.fields[0][1].tag === 5) {
                $target$$127 = 1;
              } else if (matchValue$$21.fields[0][1].tag === 1) {
                if (equals(matchValue$$21.fields[0][1].fields[1], null)) {
                  $target$$127 = 1;
                } else {
                  $target$$127 = 2;
                  error$$17 = matchValue$$21.fields[0];
                }
              } else if (matchValue$$21.fields[0][1].tag === 2) {
                $target$$127 = 1;
              } else if (matchValue$$21.fields[0][1].tag === 0) {
                if (equals(matchValue$$21.fields[0][1].fields[1], null)) {
                  $target$$127 = 1;
                } else {
                  $target$$127 = 2;
                  error$$17 = matchValue$$21.fields[0];
                }
              } else {
                $target$$127 = 2;
                error$$17 = matchValue$$21.fields[0];
              }
            } else {
              $target$$127 = 0;
              v$$12 = matchValue$$21.fields[0];
            }

            switch ($target$$127) {
              case 0:
                {
                  return some(v$$12);
                }

              case 1:
                {
                  return null;
                }

              case 2:
                {
                  throw new DecoderException(error$$17);
                }
            }
          } else {
            throw new DecoderException([path$$45, new ErrorReason(1, "BadType", "an object", v$$7)]);
          }
        },

        Raw(decoder$$33) {
          const matchValue$$22 = decodeValueError(path$$45, decoder$$33, v$$7);
          var $target$$128, v$$13, error$$18;

          if (matchValue$$22.tag === 1) {
            if (matchValue$$22.fields[0][1].tag === 4) {
              $target$$128 = 1;
            } else if (matchValue$$22.fields[0][1].tag === 0) {
              if (equals(matchValue$$22.fields[0][1].fields[1], null)) {
                $target$$128 = 1;
              } else {
                $target$$128 = 2;
                error$$18 = matchValue$$22.fields[0];
              }
            } else {
              $target$$128 = 2;
              error$$18 = matchValue$$22.fields[0];
            }
          } else {
            $target$$128 = 0;
            v$$13 = matchValue$$22.fields[0];
          }

          switch ($target$$128) {
            case 0:
              {
                return some(v$$13);
              }

            case 1:
              {
                return null;
              }

            case 2:
              {
                throw new DecoderException(error$$18);
              }
          }
        }

      };
    }

  }));
}
export function tuple2(decoder1, decoder2) {
  return function (path$$53) {
    return function (value$$65) {
      return andThen(function cb$$2(v1$$6, path$$52, value$$64) {
        return andThen(uncurry(3, function cb$$1(v2$$6) {
          const output$$2 = [v1$$6, v2$$6];
          return function (arg10$0040) {
            return function (arg20$0040) {
              return succeed(output$$2, arg10$0040, arg20$0040);
            };
          };
        }), function (path$$51, value$$63) {
          return index(1, decoder2, path$$51, value$$63);
        }, path$$52, value$$64);
      }, function (path$$50, value$$62) {
        return index(0, decoder1, path$$50, value$$62);
      }, path$$53, value$$65);
    };
  };
}
export function tuple3(decoder1$$1, decoder2$$1, decoder3) {
  return function (path$$59) {
    return function (value$$71) {
      return andThen(function cb$$5(v1$$7, path$$58, value$$70) {
        return andThen(function cb$$4(v2$$7, path$$57, value$$69) {
          return andThen(uncurry(3, function cb$$3(v3$$6) {
            const output$$3 = [v1$$7, v2$$7, v3$$6];
            return function (arg10$0040$$1) {
              return function (arg20$0040$$1) {
                return succeed(output$$3, arg10$0040$$1, arg20$0040$$1);
              };
            };
          }), function (path$$56, value$$68) {
            return index(2, decoder3, path$$56, value$$68);
          }, path$$57, value$$69);
        }, function (path$$55, value$$67) {
          return index(1, decoder2$$1, path$$55, value$$67);
        }, path$$58, value$$70);
      }, function (path$$54, value$$66) {
        return index(0, decoder1$$1, path$$54, value$$66);
      }, path$$59, value$$71);
    };
  };
}
export function tuple4(decoder1$$2, decoder2$$2, decoder3$$1, decoder4) {
  return function (path$$67) {
    return function (value$$79) {
      return andThen(function cb$$9(v1$$8, path$$66, value$$78) {
        return andThen(function cb$$8(v2$$8, path$$65, value$$77) {
          return andThen(function cb$$7(v3$$7, path$$64, value$$76) {
            return andThen(uncurry(3, function cb$$6(v4$$5) {
              const output$$4 = [v1$$8, v2$$8, v3$$7, v4$$5];
              return function (arg10$0040$$2) {
                return function (arg20$0040$$2) {
                  return succeed(output$$4, arg10$0040$$2, arg20$0040$$2);
                };
              };
            }), function (path$$63, value$$75) {
              return index(3, decoder4, path$$63, value$$75);
            }, path$$64, value$$76);
          }, function (path$$62, value$$74) {
            return index(2, decoder3$$1, path$$62, value$$74);
          }, path$$65, value$$77);
        }, function (path$$61, value$$73) {
          return index(1, decoder2$$2, path$$61, value$$73);
        }, path$$66, value$$78);
      }, function (path$$60, value$$72) {
        return index(0, decoder1$$2, path$$60, value$$72);
      }, path$$67, value$$79);
    };
  };
}
export function tuple5(decoder1$$3, decoder2$$3, decoder3$$2, decoder4$$1, decoder5) {
  return function (path$$77) {
    return function (value$$89) {
      return andThen(function cb$$14(v1$$9, path$$76, value$$88) {
        return andThen(function cb$$13(v2$$9, path$$75, value$$87) {
          return andThen(function cb$$12(v3$$8, path$$74, value$$86) {
            return andThen(function cb$$11(v4$$6, path$$73, value$$85) {
              return andThen(uncurry(3, function cb$$10(v5$$4) {
                const output$$5 = [v1$$9, v2$$9, v3$$8, v4$$6, v5$$4];
                return function (arg10$0040$$3) {
                  return function (arg20$0040$$3) {
                    return succeed(output$$5, arg10$0040$$3, arg20$0040$$3);
                  };
                };
              }), function (path$$72, value$$84) {
                return index(4, decoder5, path$$72, value$$84);
              }, path$$73, value$$85);
            }, function (path$$71, value$$83) {
              return index(3, decoder4$$1, path$$71, value$$83);
            }, path$$74, value$$86);
          }, function (path$$70, value$$82) {
            return index(2, decoder3$$2, path$$70, value$$82);
          }, path$$75, value$$87);
        }, function (path$$69, value$$81) {
          return index(1, decoder2$$3, path$$69, value$$81);
        }, path$$76, value$$88);
      }, function (path$$68, value$$80) {
        return index(0, decoder1$$3, path$$68, value$$80);
      }, path$$77, value$$89);
    };
  };
}
export function tuple6(decoder1$$4, decoder2$$4, decoder3$$3, decoder4$$2, decoder5$$1, decoder6) {
  return function (path$$89) {
    return function (value$$101) {
      return andThen(function cb$$20(v1$$10, path$$88, value$$100) {
        return andThen(function cb$$19(v2$$10, path$$87, value$$99) {
          return andThen(function cb$$18(v3$$9, path$$86, value$$98) {
            return andThen(function cb$$17(v4$$7, path$$85, value$$97) {
              return andThen(function cb$$16(v5$$5, path$$84, value$$96) {
                return andThen(uncurry(3, function cb$$15(v6$$3) {
                  const output$$6 = [v1$$10, v2$$10, v3$$9, v4$$7, v5$$5, v6$$3];
                  return function (arg10$0040$$4) {
                    return function (arg20$0040$$4) {
                      return succeed(output$$6, arg10$0040$$4, arg20$0040$$4);
                    };
                  };
                }), function (path$$83, value$$95) {
                  return index(5, decoder6, path$$83, value$$95);
                }, path$$84, value$$96);
              }, function (path$$82, value$$94) {
                return index(4, decoder5$$1, path$$82, value$$94);
              }, path$$85, value$$97);
            }, function (path$$81, value$$93) {
              return index(3, decoder4$$2, path$$81, value$$93);
            }, path$$86, value$$98);
          }, function (path$$80, value$$92) {
            return index(2, decoder3$$3, path$$80, value$$92);
          }, path$$87, value$$99);
        }, function (path$$79, value$$91) {
          return index(1, decoder2$$4, path$$79, value$$91);
        }, path$$88, value$$100);
      }, function (path$$78, value$$90) {
        return index(0, decoder1$$4, path$$78, value$$90);
      }, path$$89, value$$101);
    };
  };
}
export function tuple7(decoder1$$5, decoder2$$5, decoder3$$4, decoder4$$3, decoder5$$2, decoder6$$1, decoder7) {
  return function (path$$103) {
    return function (value$$115) {
      return andThen(function cb$$27(v1$$11, path$$102, value$$114) {
        return andThen(function cb$$26(v2$$11, path$$101, value$$113) {
          return andThen(function cb$$25(v3$$10, path$$100, value$$112) {
            return andThen(function cb$$24(v4$$8, path$$99, value$$111) {
              return andThen(function cb$$23(v5$$6, path$$98, value$$110) {
                return andThen(function cb$$22(v6$$4, path$$97, value$$109) {
                  return andThen(uncurry(3, function cb$$21(v7$$2) {
                    const output$$7 = [v1$$11, v2$$11, v3$$10, v4$$8, v5$$6, v6$$4, v7$$2];
                    return function (arg10$0040$$5) {
                      return function (arg20$0040$$5) {
                        return succeed(output$$7, arg10$0040$$5, arg20$0040$$5);
                      };
                    };
                  }), function (path$$96, value$$108) {
                    return index(6, decoder7, path$$96, value$$108);
                  }, path$$97, value$$109);
                }, function (path$$95, value$$107) {
                  return index(5, decoder6$$1, path$$95, value$$107);
                }, path$$98, value$$110);
              }, function (path$$94, value$$106) {
                return index(4, decoder5$$2, path$$94, value$$106);
              }, path$$99, value$$111);
            }, function (path$$93, value$$105) {
              return index(3, decoder4$$3, path$$93, value$$105);
            }, path$$100, value$$112);
          }, function (path$$92, value$$104) {
            return index(2, decoder3$$4, path$$92, value$$104);
          }, path$$101, value$$113);
        }, function (path$$91, value$$103) {
          return index(1, decoder2$$5, path$$91, value$$103);
        }, path$$102, value$$114);
      }, function (path$$90, value$$102) {
        return index(0, decoder1$$5, path$$90, value$$102);
      }, path$$103, value$$115);
    };
  };
}
export function tuple8(decoder1$$6, decoder2$$6, decoder3$$5, decoder4$$4, decoder5$$3, decoder6$$2, decoder7$$1, decoder8) {
  return function (path$$119) {
    return function (value$$131) {
      return andThen(function cb$$35(v1$$12, path$$118, value$$130) {
        return andThen(function cb$$34(v2$$12, path$$117, value$$129) {
          return andThen(function cb$$33(v3$$11, path$$116, value$$128) {
            return andThen(function cb$$32(v4$$9, path$$115, value$$127) {
              return andThen(function cb$$31(v5$$7, path$$114, value$$126) {
                return andThen(function cb$$30(v6$$5, path$$113, value$$125) {
                  return andThen(function cb$$29(v7$$3, path$$112, value$$124) {
                    return andThen(uncurry(3, function cb$$28(v8$$1) {
                      const output$$8 = [v1$$12, v2$$12, v3$$11, v4$$9, v5$$7, v6$$5, v7$$3, v8$$1];
                      return function (arg10$0040$$6) {
                        return function (arg20$0040$$6) {
                          return succeed(output$$8, arg10$0040$$6, arg20$0040$$6);
                        };
                      };
                    }), function (path$$111, value$$123) {
                      return index(7, decoder8, path$$111, value$$123);
                    }, path$$112, value$$124);
                  }, function (path$$110, value$$122) {
                    return index(6, decoder7$$1, path$$110, value$$122);
                  }, path$$113, value$$125);
                }, function (path$$109, value$$121) {
                  return index(5, decoder6$$2, path$$109, value$$121);
                }, path$$114, value$$126);
              }, function (path$$108, value$$120) {
                return index(4, decoder5$$3, path$$108, value$$120);
              }, path$$115, value$$127);
            }, function (path$$107, value$$119) {
              return index(3, decoder4$$4, path$$107, value$$119);
            }, path$$116, value$$128);
          }, function (path$$106, value$$118) {
            return index(2, decoder3$$5, path$$106, value$$118);
          }, path$$117, value$$129);
        }, function (path$$105, value$$117) {
          return index(1, decoder2$$6, path$$105, value$$117);
        }, path$$118, value$$130);
      }, function (path$$104, value$$116) {
        return index(0, decoder1$$6, path$$104, value$$116);
      }, path$$119, value$$131);
    };
  };
}
export const FieldType = declare(function FieldType(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function FieldType$$get_ToBool(this$) {
  if (this$.tag === 1) {
    return false;
  } else {
    return true;
  }
}

function toMap(xs) {
  return ofSeq$$1(xs, {
    Compare: compare
  });
}

function autoObject(decoderInfos, path$$120, value$$132) {
  if (!(Object.getPrototypeOf(value$$132 || false) === Object.prototype)) {
    return new Result(1, "Error", [path$$120, new ErrorReason(0, "BadPrimitive", "an object", value$$132)]);
  } else {
    return foldBack(function folder(tupledArg, acc) {
      if (acc.tag === 0) {
        const result$$1 = acc.fields[0];

        if (tupledArg[0].tag === 1) {
          return mapOk(function mapping$$4(v$$15) {
            return L(v$$15, result$$1);
          }, field(tupledArg[1], uncurry(2, tupledArg[2]), path$$120, value$$132));
        } else {
          return mapOk(function mapping$$3(v$$14) {
            return L(v$$14, result$$1);
          }, optional(tupledArg[1], uncurry(2, tupledArg[2]), path$$120, value$$132));
        }
      } else {
        return acc;
      }
    }, decoderInfos, new Result(0, "Ok", L()));
  }
}

function mixedArray(msg$$12, decoders$$2, path$$121, values) {
  if (decoders$$2.length !== values.length) {
    return new Result(1, "Error", [path$$121, new ErrorReason(7, "FailMessage", toText(printf("Expected %i %s but got %i"))(decoders$$2.length)(msg$$12)(values.length))]);
  } else {
    return foldBack2(function ($arg$$5, $arg$$6, $arg$$7) {
      return function folder$$1(value$$133) {
        return function (decoder$$105) {
          return function (acc$$1) {
            if (acc$$1.tag === 0) {
              const result$$4 = acc$$1.fields[0];
              return mapOk(function mapping$$5(v$$16) {
                return L(v$$16, result$$4);
              }, decoder$$105(path$$121, value$$133));
            } else {
              return acc$$1;
            }
          };
        };
      }($arg$$5)(uncurry(2, $arg$$6))($arg$$7);
    }, values, decoders$$2, new Result(0, "Ok", L()));
  }
}

function makeUnion(t$$2, isCamelCase, name$$1, path$$122, values$$1) {
  const matchValue$$23 = tryFind(function predicate(x$$6) {
    return name$$5(x$$6) === name$$1;
  }, getUnionCases(t$$2, 16 | 32));

  if (matchValue$$23 != null) {
    const uci = matchValue$$23;

    if (values$$1.length === 0) {
      return new Result(0, "Ok", makeUnion$$1(uci, [], 16 | 32));
    } else {
      const decoders$$3 = map$$1(function mapping$$6(fi) {
        return autoDecoder(isCamelCase, false, fi[1]);
      }, getUnionCaseFields(uci), Array);
      return mapOk(function mapping$$7(values$$2) {
        return makeUnion$$1(uci, ofList$$1(values$$2, Array), 16 | 32);
      }, mixedArray("union fields", decoders$$3, path$$122, values$$1));
    }
  } else {
    return new Result(1, "Error", [path$$122, new ErrorReason(7, "FailMessage", "Cannot find case " + name$$1 + " in " + fullName(t$$2))]);
  }
}

function autoDecodeRecordsAndUnions(t$$3, isCamelCase$$1, isOptional) {
  if (isRecord(t$$3, 16 | 32)) {
    return function (path$$123) {
      return function (value$$134) {
        const decoders$$4 = map$$1(function mapping$$8(fi$$1) {
          const name$$2 = isCamelCase$$1 ? name$$5(fi$$1).slice(null, 0 + 1).toLowerCase() + name$$5(fi$$1).slice(1, name$$5(fi$$1).length) : name$$5(fi$$1);
          let patternInput;

          if (isGenericType(fi$$1[1])) {
            const fullname = fullName(getGenericTypeDefinition(fi$$1[1]));
            patternInput = fullname === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]" ? [new FieldType(0, "Optional"), getGenerics(fi$$1[1])[0]] : [new FieldType(1, "Required"), fi$$1[1]];
          } else {
            patternInput = [new FieldType(1, "Required"), fi$$1[1]];
          }

          return [patternInput[0], name$$2, autoDecoder(isCamelCase$$1, FieldType$$get_ToBool(patternInput[0]), patternInput[1])];
        }, getRecordElements(t$$3, 16 | 32), Array);
        return mapOk(function mapping$$9(xs$$1) {
          return makeRecord(t$$3, ofList$$1(xs$$1, Array), 16 | 32);
        }, autoObject(decoders$$4, path$$123, value$$134));
      };
    };
  } else if (isUnion(t$$3, 32)) {
    return function (path$$124) {
      return function (value$$135) {
        if (typeof value$$135 === "string") {
          const name$$3 = value$$135;
          return makeUnion(t$$3, isCamelCase$$1, name$$3, path$$124, []);
        } else if (Array.isArray(value$$135)) {
          const values$$3 = value$$135;
          const name$$4 = values$$3[0];
          return makeUnion(t$$3, isCamelCase$$1, name$$4, path$$124, values$$3.slice(1, values$$3.length));
        } else {
          return new Result(1, "Error", [path$$124, new ErrorReason(0, "BadPrimitive", "a string or array", value$$135)]);
        }
      };
    };
  } else {
    return function (path$$125) {
      return function (_arg1$$3) {
        return isOptional ? new Result(1, "Error", [path$$125, new ErrorReason(0, "BadPrimitive", "Generating an error message as the field is optional so the `option` decoders will return `None` instead of failing", null)]) : new Result(1, "Error", [path$$125, new ErrorReason(7, "FailMessage", toText(printf("Class types cannot be automatically deserialized: %s"))(fullName(t$$3)))]);
      };
    };
  }
}

function autoDecoder(isCamelCase$$2, isOptional$$1, t$$4) {
  if (isArray(t$$4)) {
    const decoder$$106 = function (t$$5) {
      return autoDecoder(isCamelCase$$2, false, t$$5);
    }(getElementType(t$$4));

    return function (d) {
      return curry(2, d);
    }(function (path$$126, value$$136) {
      return array(uncurry(2, decoder$$106), path$$126, value$$136);
    });
  } else if (isGenericType(t$$4)) {
    if (isTuple(t$$4)) {
      const decoders$$5 = map$$1(function mapping$$10(t$$6) {
        return autoDecoder(isCamelCase$$2, false, t$$6);
      }, getTupleElements(t$$4), Array);
      return function (path$$127) {
        return function (value$$137) {
          return Array.isArray(value$$137) ? mapOk(function mapping$$11(xs$$2) {
            return makeTuple(ofList$$1(xs$$2, Array), t$$4);
          }, mixedArray("tuple elements", decoders$$5, path$$127, value$$137)) : new Result(1, "Error", [path$$127, new ErrorReason(0, "BadPrimitive", "an array", value$$137)]);
        };
      };
    } else {
      const fullname$$1 = fullName(getGenericTypeDefinition(t$$4));

      if (fullname$$1 === "Microsoft.FSharp.Core.FSharpOption`1[System.Object]") {
        return function (d$$2) {
          return curry(2, d$$2);
        }(function (path$$128, value$$138) {
          return option(uncurry(2, function (t$$7) {
            return autoDecoder(isCamelCase$$2, true, t$$7);
          }(getGenerics(t$$4)[0])), path$$128, value$$138);
        });
      } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpList`1[System.Object]") {
        return function (d$$4) {
          return curry(2, d$$4);
        }(function (path$$129, value$$139) {
          return list(uncurry(2, function (t$$8) {
            return autoDecoder(isCamelCase$$2, false, t$$8);
          }(getGenerics(t$$4)[0])), path$$129, value$$139);
        });
      } else if (fullname$$1 === "Microsoft.FSharp.Collections.FSharpMap`2[System.Object,System.Object]") {
        const decoder1$$7 = function (t$$9) {
          return autoDecoder(isCamelCase$$2, false, t$$9);
        }(getGenerics(t$$4)[0]);

        const decoder2$$7 = function (t$$10) {
          return autoDecoder(isCamelCase$$2, false, t$$10);
        }(getGenerics(t$$4)[1]);

        return function (path$$130) {
          return function (value$$140) {
            const matchValue$$24 = array(uncurry(2, tuple2(uncurry(2, decoder1$$7), uncurry(2, decoder2$$7))), path$$130, value$$140);

            if (matchValue$$24.tag === 0) {
              const ar = matchValue$$24.fields[0];
              return new Result(0, "Ok", toMap(ar));
            } else {
              const er = matchValue$$24.fields[0];
              return new Result(1, "Error", er);
            }
          };
        };
      } else {
        return autoDecodeRecordsAndUnions(t$$4, isCamelCase$$2, isOptional$$1);
      }
    }
  } else {
    const fullname$$2 = fullName(t$$4);

    if (fullname$$2 === "System.Boolean") {
      return function d$$6(path$$131) {
        return function (value$$142) {
          return bool(path$$131, value$$142);
        };
      };
    } else if (fullname$$2 === "System.String") {
      return function d$$7(path$$132) {
        return function (value$$143) {
          return string(path$$132, value$$143);
        };
      };
    } else if (fullname$$2 === "System.Int32") {
      return function d$$8(path$$133) {
        return function (value$$144) {
          return int$(path$$133, value$$144);
        };
      };
    } else if (fullname$$2 === "System.Double") {
      return function d$$9(path$$134) {
        return function (value$$145) {
          return float$(path$$134, value$$145);
        };
      };
    } else if (fullname$$2 === "System.Decimal") {
      return function d$$10(path$$135) {
        return function (value$$146) {
          return decimal(path$$135, value$$146);
        };
      };
    } else if (fullname$$2 === "System.Int64") {
      return function d$$11(path$$136) {
        return function (value$$147) {
          return int64(path$$136, value$$147);
        };
      };
    } else if (fullname$$2 === "System.UInt32") {
      return function d$$12(path$$137) {
        return function (value$$148) {
          return uint32(path$$137, value$$148);
        };
      };
    } else if (fullname$$2 === "System.UInt64") {
      return function d$$13(path$$138) {
        return function (value$$149) {
          return uint64(path$$138, value$$149);
        };
      };
    } else if (fullname$$2 === "System.Numerics.BigInteger") {
      return function d$$14(path$$139) {
        return function (value$$150) {
          return bigint(path$$139, value$$150);
        };
      };
    } else if (fullname$$2 === "System.DateTime") {
      return function d$$15(path$$140) {
        return function (value$$151) {
          return datetime(path$$140, value$$151);
        };
      };
    } else if (fullname$$2 === "System.DateTimeOffset") {
      return function d$$16(path$$141) {
        return function (value$$152) {
          return datetimeOffset(path$$141, value$$152);
        };
      };
    } else if (fullname$$2 === "System.Guid") {
      return function d$$17(path$$142) {
        return function (value$$153) {
          return guid(path$$142, value$$153);
        };
      };
    } else if (fullname$$2 === "System.Object") {
      return function (arg00$0040) {
        return function (v$$17) {
          return value(arg00$0040, v$$17);
        };
      };
    } else {
      return autoDecodeRecordsAndUnions(t$$4, isCamelCase$$2, isOptional$$1);
    }
  }
}

export const Auto = declare(function Auto() {});
export function Auto$$$generateDecoder$$38AE3D3E(isCamelCase$$3, resolver) {
  const isCamelCase$$4 = defaultArg(isCamelCase$$3, false);
  return function (d$$18) {
    return curry(2, d$$18);
  }(uncurry(2, function (t$$11) {
    return autoDecoder(isCamelCase$$4, false, t$$11);
  }(resolver.ResolveType())));
}
export function Auto$$$fromString$$Z4741753B(json$$1, isCamelCase$$5, resolver$$1) {
  const decoder$$108 = Auto$$$generateDecoder$$38AE3D3E(isCamelCase$$5, resolver$$1);
  return fromString(uncurry(2, decoder$$108), json$$1);
}
export function Auto$$$unsafeFromString$$Z4741753B(json$$2, isCamelCase$$6, resolver$$2) {
  const decoder$$109 = Auto$$$generateDecoder$$38AE3D3E(isCamelCase$$6, resolver$$2);
  const matchValue$$25 = fromString(uncurry(2, decoder$$109), json$$2);

  if (matchValue$$25.tag === 1) {
    const msg$$13 = matchValue$$25.fields[0];
    throw new Error(msg$$13);
  } else {
    const x$$7 = matchValue$$25.fields[0];
    return x$$7;
  }
}

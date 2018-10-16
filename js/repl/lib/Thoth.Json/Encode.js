import { iterate } from "../../fable-core/Seq.js";
import { toList } from "../../fable-core/Map.js";
import { toString as toString$$1 } from "../../fable-core/Date.js";
import { toString as toString$$2 } from "../../fable-core/Long.js";
import { isIterable, uncurry } from "../../fable-core/Util.js";
import { defaultArgWith, defaultArg } from "../../fable-core/Option.js";
import { declare } from "../../fable-core/Types.js";
export function string(value) {
  return value;
}
export function guid(value$$1) {
  return value$$1.toString();
}
export function int$(value$$4) {
  return value$$4;
}
export function float$(value$$5) {
  return value$$5;
}
export function decimal(value$$6) {
  return value$$6;
}
export const nil = null;
export function bool(value$$9) {
  return value$$9;
}
export function object(values) {
  const o = {};
  iterate(function (forLoopVar) {
    o[forLoopVar[0]] = forLoopVar[1];
  }, values);
  return o;
}
export function array(values$$1) {
  return values$$1;
}
export function list(values$$2) {
  return Array.from(values$$2);
}
export function dict(values$$3) {
  return object(toList(values$$3));
}
export function bigint(value$$11) {
  return value$$11.toString();
}
export function datetimeOffset(value$$12) {
  return toString$$1(value$$12, "O");
}
export function int64(value$$15) {
  return toString$$2(value$$15);
}
export function uint64(value$$16) {
  return toString$$2(value$$16);
}
export function tuple2(enc1, enc2, v1, v2) {
  return [enc1(v1), enc2(v2)];
}
export function tuple3(enc1$$1, enc2$$1, enc3, v1$$1, v2$$1, v3) {
  return [enc1$$1(v1$$1), enc2$$1(v2$$1), enc3(v3)];
}
export function tuple4(enc1$$2, enc2$$2, enc3$$1, enc4, v1$$2, v2$$2, v3$$1, v4) {
  return [enc1$$2(v1$$2), enc2$$2(v2$$2), enc3$$1(v3$$1), enc4(v4)];
}
export function tuple5(enc1$$3, enc2$$3, enc3$$2, enc4$$1, enc5, v1$$3, v2$$3, v3$$2, v4$$1, v5) {
  return [enc1$$3(v1$$3), enc2$$3(v2$$3), enc3$$2(v3$$2), enc4$$1(v4$$1), enc5(v5)];
}
export function tuple6(enc1$$4, enc2$$4, enc3$$3, enc4$$2, enc5$$1, enc6, v1$$4, v2$$4, v3$$3, v4$$2, v5$$1, v6) {
  return [enc1$$4(v1$$4), enc2$$4(v2$$4), enc3$$3(v3$$3), enc4$$2(v4$$2), enc5$$1(v5$$1), enc6(v6)];
}
export function tuple7(enc1$$5, enc2$$5, enc3$$4, enc4$$3, enc5$$2, enc6$$1, enc7, v1$$5, v2$$5, v3$$4, v4$$3, v5$$2, v6$$1, v7) {
  return [enc1$$5(v1$$5), enc2$$5(v2$$5), enc3$$4(v3$$4), enc4$$3(v4$$3), enc5$$2(v5$$2), enc6$$1(v6$$1), enc7(v7)];
}
export function tuple8(enc1$$6, enc2$$6, enc3$$5, enc4$$4, enc5$$3, enc6$$2, enc7$$1, enc8, v1$$6, v2$$6, v3$$5, v4$$4, v5$$3, v6$$2, v7$$1, v8) {
  return [enc1$$6(v1$$6), enc2$$6(v2$$6), enc3$$5(v3$$5), enc4$$4(v4$$4), enc5$$3(v5$$3), enc6$$2(v6$$2), enc7$$1(v7$$1), enc8(v8)];
}
export function datetime(value$$17) {
  return toString$$1(value$$17, "O");
}
export function toString(space, value$$20) {
  return JSON.stringify(value$$20, uncurry(2, null), space);
}
export function option(encoder) {
  return function ($arg$$1) {
    return defaultArgWith(defaultArg($arg$$1, null, encoder), function defThunk() {
      return nil;
    });
  };
}
export const Auto = declare(function Auto() {});
export function Auto$$$toString$$Z17AB748(space$$1, value$$21, forceCamelCase) {
  return JSON.stringify(value$$21, function (_arg1$$1, value$$22) {
    if (typeof value$$22 === "string") {
      return value$$22;
    } else if (isIterable(value$$22)) {
      return Array.isArray(value$$22) ? value$$22 : Array.from(value$$22);
    } else {
      if (defaultArg(forceCamelCase, false) ? Object.getPrototypeOf(value$$22 || false) === Object.prototype : false) {
        const replacement = {};
        iterate(function (key$$1) {
          replacement[key$$1.slice(null, 0 + 1).toLowerCase() + key$$1.slice(1, key$$1.length)] = value$$22[key$$1];
        }, Object.keys(value$$22));
        return replacement;
      } else {
        return value$$22;
      }
    }
  }, space$$1);
}
export function encode(space$$2, value$$24) {
  return toString(space$$2, value$$24);
}

import { structuralHash, equals, compare } from "./Util.js";
import { ComparisonIdentity$$$Structural as ComparisonIdentity$0024$0024$0024Structural } from "./FSharp.Collections.js";
import { StringBuilder$$Append$$Z721C83C5 as StringBuilder$0024$0024Append$0024$0024Z721C83C5 } from "./System.Text.js";
export function LanguagePrimitives$$$FastGenericComparerFromTable() {
  return {
    Compare(x, y) {
      return compare(x, y);
    }

  };
}
export function LanguagePrimitives$$$FastGenericComparer() {
  return ComparisonIdentity$0024$0024$0024Structural();
}
export const LanguagePrimitives$$$GenericEqualityComparer = {
  Equals(x$$1, y$$1) {
    return equals(x$$1, y$$1);
  },

  GetHashCode(x$$2) {
    return structuralHash(x$$2);
  }

};
export const LanguagePrimitives$$$GenericEqualityERComparer = {
  Equals(x$$3, y$$2) {
    return equals(x$$3, y$$2);
  },

  GetHashCode(x$$4) {
    return structuralHash(x$$4);
  }

};
export function Operators$$$Failure(message) {
  return new Error(message);
}
export function Operators$$$FailurePattern(exn) {
  return exn.message;
}
export function Operators$$$NullArg(x$$5) {
  throw new Error(x$$5);
}
export function Operators$$$Lock(_lockObj, action) {
  return action();
}
export function PrintfModule$$$PrintFormatToStringBuilderThen(continuation, builder, format) {
  const append = function append(s) {
    StringBuilder$0024$0024Append$0024$0024Z721C83C5(builder, s);
    return continuation();
  };

  return format.cont(append);
}
export function PrintfModule$$$PrintFormatToStringBuilder(builder$$1, format$$1) {
  return PrintfModule$$$PrintFormatToStringBuilderThen(function () {}, builder$$1, format$$1);
}
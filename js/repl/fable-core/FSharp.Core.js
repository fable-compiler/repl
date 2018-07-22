import { structuralHash, equals } from "./Util.js";
import { HashIdentity$$$Structural as HashIdentity$0024$0024$0024Structural, ComparisonIdentity$$$Structural as ComparisonIdentity$0024$0024$0024Structural } from "./FSharp.Collections.js";
import { StringBuilder$$Append$$Z721C83C5 as StringBuilder$0024$0024Append$0024$0024Z721C83C5 } from "./System.Text.js";
export const LanguagePrimitives$$$GenericEqualityComparer = {
  Equals(x, y) {
    return equals(x, y);
  },

  GetHashCode(x$$1) {
    return structuralHash(x$$1);
  }

};
export const LanguagePrimitives$$$GenericEqualityERComparer = {
  Equals(x$$2, y$$1) {
    return equals(x$$2, y$$1);
  },

  GetHashCode(x$$3) {
    return structuralHash(x$$3);
  }

};
export function LanguagePrimitives$$$FastGenericComparer() {
  return ComparisonIdentity$0024$0024$0024Structural();
}
export function LanguagePrimitives$$$FastGenericComparerFromTable() {
  return ComparisonIdentity$0024$0024$0024Structural();
}
export function LanguagePrimitives$$$FastGenericEqualityComparer() {
  return HashIdentity$0024$0024$0024Structural();
}
export function LanguagePrimitives$$$FastGenericEqualityComparerFromTable() {
  return HashIdentity$0024$0024$0024Structural();
}
export function Operators$$$Failure(message) {
  return new Error(message);
}
export function Operators$$$FailurePattern(exn) {
  return exn.message;
}
export function Operators$$$NullArg(x$$4) {
  throw new Error(x$$4);
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
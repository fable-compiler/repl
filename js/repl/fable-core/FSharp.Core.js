define(["exports", "./Util", "./FSharp.Collections", "./System.Text"], function (exports, _Util, _FSharp, _System) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LanguagePrimitives$$$GenericEqualityERComparer = exports.LanguagePrimitives$$$GenericEqualityComparer = undefined;
  exports.LanguagePrimitives$$$FastGenericComparerFromTable = LanguagePrimitives$$$FastGenericComparerFromTable;
  exports.LanguagePrimitives$$$FastGenericComparer = LanguagePrimitives$$$FastGenericComparer;
  exports.Operators$$$Failure = Operators$$$Failure;
  exports.Operators$$$FailurePattern = Operators$$$FailurePattern;
  exports.Operators$$$NullArg = Operators$$$NullArg;
  exports.Operators$$$Lock = Operators$$$Lock;
  exports.PrintfModule$$$PrintFormatToStringBuilderThen = PrintfModule$$$PrintFormatToStringBuilderThen;
  exports.PrintfModule$$$PrintFormatToStringBuilder = PrintfModule$$$PrintFormatToStringBuilder;
  function LanguagePrimitives$$$FastGenericComparerFromTable() {
    return {
      Compare(x, y) {
        return (0, _Util.compare)(x, y);
      }

    };
  }
  function LanguagePrimitives$$$FastGenericComparer() {
    return (0, _FSharp.ComparisonIdentity$$$Structural)();
  }
  const LanguagePrimitives$$$GenericEqualityComparer = exports.LanguagePrimitives$$$GenericEqualityComparer = {
    Equals(x$$1, y$$1) {
      return (0, _Util.equals)(x$$1, y$$1);
    },

    GetHashCode(x$$2) {
      return (0, _Util.structuralHash)(x$$2);
    }

  };
  const LanguagePrimitives$$$GenericEqualityERComparer = exports.LanguagePrimitives$$$GenericEqualityERComparer = {
    Equals(x$$3, y$$2) {
      return (0, _Util.equals)(x$$3, y$$2);
    },

    GetHashCode(x$$4) {
      return (0, _Util.structuralHash)(x$$4);
    }

  };
  function Operators$$$Failure(message) {
    return new Error(message);
  }
  function Operators$$$FailurePattern(exn) {
    return exn.message;
  }
  function Operators$$$NullArg(x$$5) {
    throw new Error(x$$5);
  }
  function Operators$$$Lock(_lockObj, action) {
    return action();
  }
  function PrintfModule$$$PrintFormatToStringBuilderThen(continuation, builder, format) {
    const append = function append(s) {
      (0, _System.StringBuilder$$Append$$Z721C83C5)(builder, s);
      return continuation();
    };

    return format.cont(append);
  }
  function PrintfModule$$$PrintFormatToStringBuilder(builder$$1, format$$1) {
    return PrintfModule$$$PrintFormatToStringBuilderThen(function () {}, builder$$1, format$$1);
  }
});
define(["exports", "./Util"], function (exports, _Util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HashIdentity$$$FromFunctions = HashIdentity$$$FromFunctions;
  exports.HashIdentity$$$Structural = HashIdentity$$$Structural;
  exports.HashIdentity$$$Reference = HashIdentity$$$Reference;
  exports.ComparisonIdentity$$$FromFunction = ComparisonIdentity$$$FromFunction;
  exports.ComparisonIdentity$$$Structural = ComparisonIdentity$$$Structural;
  function HashIdentity$$$FromFunctions(hash, eq) {
    return {
      GetHashCode(x) {
        return hash(x);
      },

      Equals(x$$1, y) {
        return eq(x$$1, y);
      }

    };
  }
  function HashIdentity$$$Structural() {
    return HashIdentity$$$FromFunctions(function (obj) {
      return (0, _Util.structuralHash)(obj);
    }, function (e1, e2) {
      return (0, _Util.equals)(e1, e2);
    });
  }
  function HashIdentity$$$Reference() {
    return HashIdentity$$$FromFunctions(function (obj$$1) {
      return (0, _Util.identityHash)(obj$$1);
    }, function (e1$$1, e2$$1) {
      return e1$$1 === e2$$1;
    });
  }
  function ComparisonIdentity$$$FromFunction(comparer) {
    return {
      Compare(x$$2, y$$1) {
        return comparer(x$$2, y$$1);
      }

    };
  }
  function ComparisonIdentity$$$Structural() {
    return ComparisonIdentity$$$FromFunction(function (e1$$2, e2$$2) {
      return (0, _Util.compare)(e1$$2, e2$$2);
    });
  }
});
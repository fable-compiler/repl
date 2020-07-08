import { declare } from "./Types.js";
import { class_type } from "./Reflection.js";
import { structuralHash, equals, compare } from "./Util.js";
export const Comparer$00601 = declare(function System_Collections_Generic_Comparer() {
  void null;
});
export function Comparer$00601$reflection($gen$$3) {
  return class_type("System.Collections.Generic.Comparer`1", [$gen$$3], Comparer$00601);
}
export function Comparer$00601$$$$002Ector() {
  return this instanceof Comparer$00601 ? Comparer$00601.call(this) : new Comparer$00601();
}
export function Comparer$00601$$$get_Default() {
  return {
    Compare(x, y) {
      return compare(x, y);
    }

  };
}

Comparer$00601.prototype.Compare = function (x$$1, y$$1) {
  return compare(x$$1, y$$1);
};

export const EqualityComparer$00601 = declare(function System_Collections_Generic_EqualityComparer() {
  void null;
});
export function EqualityComparer$00601$reflection($gen$$4) {
  return class_type("System.Collections.Generic.EqualityComparer`1", [$gen$$4], EqualityComparer$00601);
}
export function EqualityComparer$00601$$$$002Ector() {
  return this instanceof EqualityComparer$00601 ? EqualityComparer$00601.call(this) : new EqualityComparer$00601();
}
export function EqualityComparer$00601$$$get_Default() {
  return {
    Equals(x$$2, y$$2) {
      return equals(x$$2, y$$2);
    },

    GetHashCode(x$$3) {
      return structuralHash(x$$3);
    }

  };
}

EqualityComparer$00601.prototype.Equals = function (x$$4, y$$3) {
  return equals(x$$4, y$$3);
};

EqualityComparer$00601.prototype.GetHashCode = function (x$$5) {
  return structuralHash(x$$5);
};
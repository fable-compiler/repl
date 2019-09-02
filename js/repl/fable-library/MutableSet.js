import { declare } from "./Types.js";
import { type } from "./Reflection.js";
import { EqualityComparer$00601$$$get_Default as EqualityComparer$002400601$0024$0024$0024get_Default } from "./System.Collections.Generic.js";
import { getItemFromDict, tryGetValue } from "./Util.js";
import { some } from "./Option.js";
import { iterateIndexed, toIterator, getEnumerator, delay, collect, map, sumBy } from "./Seq.js";
export const MutableSet$00601 = declare(function Fable_Collections_MutableSet(comparer) {
  const $this$$1 = this;
  $this$$1.comparer = comparer;
  $this$$1.entries = new Map([]);
});
export function MutableSet$00601$reflection($gen$$4) {
  return type("Fable.Collections.MutableSet`1", [$gen$$4]);
}
export function MutableSet$00601$$$$002Ector$$Z79760D57(comparer) {
  return this instanceof MutableSet$00601 ? MutableSet$00601.call(this, comparer) : new MutableSet$00601(comparer);
}
export function MutableSet$00601$$$$002Ector() {
  return MutableSet$00601$$$$002Ector$$Z79760D57.call(this, EqualityComparer$002400601$0024$0024$0024get_Default());
}

function MutableSet$00601$$TryFindIndex$$2B595(this$, k) {
  const h = this$.comparer.GetHashCode(k) | 0;
  const matchValue = tryGetValue(this$.entries, h, null);

  if (matchValue[0]) {
    const values = matchValue[1];
    return [true, h, values.findIndex(function (v) {
      return this$.comparer.Equals(k, v);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableSet$00601$$TryFind$$2B595(this$$$1, k$$1) {
  var i, h$$1;
  const matchValue$$1 = MutableSet$00601$$TryFindIndex$$2B595(this$$$1, k$$1);
  var $target$$5;

  if (matchValue$$1[0]) {
    if (i = matchValue$$1[2] | 0, (h$$1 = matchValue$$1[1] | 0, i > -1)) {
      $target$$5 = 0;
    } else {
      $target$$5 = 1;
    }
  } else {
    $target$$5 = 1;
  }

  switch ($target$$5) {
    case 0:
      {
        const i$$1 = matchValue$$1[2] | 0;
        const h$$2 = matchValue$$1[1] | 0;
        return some(getItemFromDict(this$$$1.entries, h$$2)[i$$1]);
      }

    case 1:
      {
        return null;
      }
  }
}

export function MutableSet$00601$$get_Comparer(this$$$2) {
  return this$$$2.comparer;
}
export function MutableSet$00601$$Clear(this$$$3) {
  this$$$3.entries.clear();
}
export function MutableSet$00601$$get_Count(this$$$4) {
  return sumBy(function projection(pairs) {
    return pairs.length;
  }, this$$$4.entries.values(), {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  });
}
export function MutableSet$00601$$Add$$2B595(this$$$5, k$$2) {
  var i$$2, h$$3;
  const matchValue$$2 = MutableSet$00601$$TryFindIndex$$2B595(this$$$5, k$$2);
  var $target$$6;

  if (matchValue$$2[0]) {
    if (i$$2 = matchValue$$2[2] | 0, (h$$3 = matchValue$$2[1] | 0, i$$2 > -1)) {
      $target$$6 = 0;
    } else {
      $target$$6 = 1;
    }
  } else {
    $target$$6 = 1;
  }

  switch ($target$$6) {
    case 0:
      {
        const i$$3 = matchValue$$2[2] | 0;
        const h$$4 = matchValue$$2[1] | 0;
        return false;
      }

    case 1:
      {
        if (matchValue$$2[0]) {
          const h$$5 = matchValue$$2[1] | 0;
          const value = getItemFromDict(this$$$5.entries, h$$5).push(k$$2);
          null, null;
          return true;
        } else {
          const h$$6 = matchValue$$2[1] | 0;
          this$$$5.entries.set(h$$6, [k$$2]);
          return true;
        }
      }
  }
}
export function MutableSet$00601$$Contains$$2B595(this$$$6, k$$3) {
  var i$$4, h$$7;
  const matchValue$$3 = MutableSet$00601$$TryFindIndex$$2B595(this$$$6, k$$3);
  var $target$$7;

  if (matchValue$$3[0]) {
    if (i$$4 = matchValue$$3[2] | 0, (h$$7 = matchValue$$3[1] | 0, i$$4 > -1)) {
      $target$$7 = 0;
    } else {
      $target$$7 = 1;
    }
  } else {
    $target$$7 = 1;
  }

  switch ($target$$7) {
    case 0:
      {
        const i$$5 = matchValue$$3[2] | 0;
        const h$$8 = matchValue$$3[1] | 0;
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
export function MutableSet$00601$$Remove$$2B595(this$$$7, k$$4) {
  var i$$6, h$$9;
  const matchValue$$4 = MutableSet$00601$$TryFindIndex$$2B595(this$$$7, k$$4);
  var $target$$8;

  if (matchValue$$4[0]) {
    if (i$$6 = matchValue$$4[2] | 0, (h$$9 = matchValue$$4[1] | 0, i$$6 > -1)) {
      $target$$8 = 0;
    } else {
      $target$$8 = 1;
    }
  } else {
    $target$$8 = 1;
  }

  switch ($target$$8) {
    case 0:
      {
        const i$$7 = matchValue$$4[2] | 0;
        const h$$10 = matchValue$$4[1] | 0;
        getItemFromDict(this$$$7.entries, h$$10).splice(i$$7, 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableSet$00601.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$8 = this;
  return toIterator((elems = delay(function () {
    return collect(function (values$$1) {
      return map(function (value$$1) {
        return value$$1;
      }, values$$1);
    }, this$$$8.entries.values());
  }), getEnumerator(elems)));
};

MutableSet$00601.prototype.Add = function (item) {
  const this$$$9 = this;
  MutableSet$00601$$Add$$2B595(this$$$9, item), null;
};

MutableSet$00601.prototype.Clear = function () {
  const this$$$10 = this;
  MutableSet$00601$$Clear(this$$$10);
};

MutableSet$00601.prototype.Contains = function (item$$1) {
  const this$$$11 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$11, item$$1);
};

MutableSet$00601.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$12 = this;
  iterateIndexed(function action(i$$8, e) {
    array[arrayIndex + i$$8] = e;
  }, this$$$12);
};

Object.defineProperty(MutableSet$00601.prototype, "Count", {
  "get": function () {
    const this$$$13 = this;
    return MutableSet$00601$$get_Count(this$$$13) | 0;
  }
});
Object.defineProperty(MutableSet$00601.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableSet$00601.prototype.Remove = function (item$$2) {
  const this$$$15 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$15, item$$2);
};

Object.defineProperty(MutableSet$00601.prototype, "size", {
  "get": function () {
    const this$$$16 = this;
    return MutableSet$00601$$get_Count(this$$$16) | 0;
  }
});

MutableSet$00601.prototype.add = function (k$$5) {
  const this$$$17 = this;
  MutableSet$00601$$Add$$2B595(this$$$17, k$$5), null;
  return this$$$17;
};

MutableSet$00601.prototype.add_ = function (k$$6) {
  const this$$$18 = this;
  return MutableSet$00601$$Add$$2B595(this$$$18, k$$6);
};

MutableSet$00601.prototype.clear = function () {
  const this$$$19 = this;
  MutableSet$00601$$Clear(this$$$19);
};

MutableSet$00601.prototype.delete = function (k$$7) {
  const this$$$20 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$20, k$$7);
};

MutableSet$00601.prototype.has = function (k$$8) {
  const this$$$21 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$21, k$$8);
};

MutableSet$00601.prototype.values = function () {
  const this$$$22 = this;
  return map(function mapping(x) {
    return x;
  }, this$$$22);
};
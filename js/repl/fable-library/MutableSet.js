import { declare, FSharpRef } from "./Types.js";
import { iterateIndexed, toIterator, getEnumerator, delay, collect, map, sumBy, iterate } from "./Seq.js";
import { class_type } from "./Reflection.js";
import { getItemFromDict, tryGetValue } from "./Util.js";
import { some } from "./Option.js";
export const MutableSet$00601 = declare(function Fable_Collections_MutableSet(items, comparer) {
  const $this$$1 = this;
  const this$ = new FSharpRef(null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1.hashMap = new Map([]);
  $this$$1["init@21-2"] = 1;
  iterate(function (item) {
    const value = MutableSet$00601$$Add$$2B595(this$.contents, item);
    void value;
  }, items);
  void null;
});
export function MutableSet$00601$reflection($gen$$4) {
  return class_type("Fable.Collections.MutableSet`1", [$gen$$4], MutableSet$00601);
}
export function MutableSet$00601$$$$002Ector$$Z6150332D(items, comparer) {
  return this instanceof MutableSet$00601 ? MutableSet$00601.call(this, items, comparer) : new MutableSet$00601(items, comparer);
}

function MutableSet$00601$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = tryGetValue(this$$$1.hashMap, h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (v) {
      return this$$$1.comparer.Equals(k, v);
    })];
  } else {
    return [false, h, -1];
  }
}

function MutableSet$00601$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableSet$00601$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$9;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$9 = 0;
    } else {
      $target$$9 = 1;
    }
  } else {
    $target$$9 = 1;
  }

  switch ($target$$9) {
    case 0:
      {
        return some(getItemFromDict(this$$$2.hashMap, matchValue$$1[1])[matchValue$$1[2]]);
      }

    case 1:
      {
        return undefined;
      }
  }
}

export function MutableSet$00601$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
export function MutableSet$00601$$Clear(this$$$4) {
  this$$$4.hashMap.clear();
}
export function MutableSet$00601$$get_Count(this$$$5) {
  const source = this$$$5.hashMap.values();
  return sumBy(function projection(pairs) {
    return pairs.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
export function MutableSet$00601$$Add$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableSet$00601$$TryFindIndex$$2B595(this$$$6, k$$2);
  var $target$$16;

  if (matchValue$$2[0]) {
    if (matchValue$$2[2] > -1) {
      $target$$16 = 0;
    } else {
      $target$$16 = 1;
    }
  } else {
    $target$$16 = 1;
  }

  switch ($target$$16) {
    case 0:
      {
        return false;
      }

    case 1:
      {
        if (matchValue$$2[0]) {
          const value$$1 = void getItemFromDict(this$$$6.hashMap, matchValue$$2[1]).push(k$$2);
          void null;
          return true;
        } else {
          this$$$6.hashMap.set(matchValue$$2[1], [k$$2]);
          return true;
        }
      }
  }
}
export function MutableSet$00601$$Contains$$2B595(this$$$7, k$$3) {
  const matchValue$$3 = MutableSet$00601$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$19;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$19 = 0;
    } else {
      $target$$19 = 1;
    }
  } else {
    $target$$19 = 1;
  }

  switch ($target$$19) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
export function MutableSet$00601$$Remove$$2B595(this$$$8, k$$4) {
  const matchValue$$4 = MutableSet$00601$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$22;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$22 = 0;
    } else {
      $target$$22 = 1;
    }
  } else {
    $target$$22 = 1;
  }

  switch ($target$$22) {
    case 0:
      {
        getItemFromDict(this$$$8.hashMap, matchValue$$4[1]).splice(matchValue$$4[2], 1);
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
  const this$$$9 = this;
  return toIterator((elems = delay(function () {
    return collect(function (values$$1) {
      return map(function (value$$2) {
        return value$$2;
      }, values$$1);
    }, this$$$9.hashMap.values());
  }), getEnumerator(elems)));
};

MutableSet$00601.prototype.Add = function (item$$1) {
  const this$$$10 = this;
  const value$$3 = MutableSet$00601$$Add$$2B595(this$$$10, item$$1);
  void value$$3;
};

MutableSet$00601.prototype.Clear = function () {
  const this$$$11 = this;
  MutableSet$00601$$Clear(this$$$11);
};

MutableSet$00601.prototype.Contains = function (item$$2) {
  const this$$$12 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$12, item$$2);
};

MutableSet$00601.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$13 = this;
  iterateIndexed(function action(i$$8, e) {
    array[arrayIndex + i$$8] = e;
  }, this$$$13);
};

Object.defineProperty(MutableSet$00601.prototype, "Count", {
  "get": function () {
    const this$$$14 = this;
    return MutableSet$00601$$get_Count(this$$$14) | 0;
  }
});
Object.defineProperty(MutableSet$00601.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableSet$00601.prototype.Remove = function (item$$3) {
  const this$$$16 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$16, item$$3);
};

Object.defineProperty(MutableSet$00601.prototype, "size", {
  "get": function () {
    const this$$$17 = this;
    return MutableSet$00601$$get_Count(this$$$17) | 0;
  }
});

MutableSet$00601.prototype.add = function (k$$5) {
  const this$$$18 = this;
  const value$$4 = MutableSet$00601$$Add$$2B595(this$$$18, k$$5);
  void value$$4;
  return this$$$18;
};

MutableSet$00601.prototype.add_ = function (k$$6) {
  const this$$$19 = this;
  return MutableSet$00601$$Add$$2B595(this$$$19, k$$6);
};

MutableSet$00601.prototype.clear = function () {
  const this$$$20 = this;
  MutableSet$00601$$Clear(this$$$20);
};

MutableSet$00601.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableSet$00601$$Remove$$2B595(this$$$21, k$$7);
};

MutableSet$00601.prototype.has = function (k$$8) {
  const this$$$22 = this;
  return MutableSet$00601$$Contains$$2B595(this$$$22, k$$8);
};

MutableSet$00601.prototype.keys = function () {
  const this$$$23 = this;
  return map(function mapping(x) {
    return x;
  }, this$$$23);
};

MutableSet$00601.prototype.values = function () {
  const this$$$24 = this;
  return map(function mapping$$1(x$$1) {
    return x$$1;
  }, this$$$24);
};

MutableSet$00601.prototype.entries = function () {
  const this$$$25 = this;
  return map(function mapping$$2(v$$1) {
    return [v$$1, v$$1];
  }, this$$$25);
};
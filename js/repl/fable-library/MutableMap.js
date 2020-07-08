import { declare, FSharpRef } from "./Types.js";
import { iterateIndexed, toIterator, getEnumerator, delay, collect, map, sumBy, iterate } from "./Seq.js";
import { class_type } from "./Reflection.js";
import { equals, getItemFromDict, tryGetValue } from "./Util.js";
import { format } from "./String.js";
export const MutableMap$00602 = declare(function Fable_Collections_MutableMap(pairs, comparer) {
  const $this$$1 = this;
  const this$ = new FSharpRef(null);
  $this$$1.comparer = comparer;
  this$.contents = $this$$1;
  $this$$1.hashMap = new Map([]);
  $this$$1["init@20-1"] = 1;
  iterate(function (pair) {
    MutableMap$00602$$Add$$5BDDA1(this$.contents, pair[0], pair[1]);
  }, pairs);
  void null;
});
export function MutableMap$00602$reflection($gen$$4, $gen$$5) {
  return class_type("Fable.Collections.MutableMap`2", [$gen$$4, $gen$$5], MutableMap$00602);
}
export function MutableMap$00602$$$$002Ector$$6623D9B3(pairs, comparer) {
  return this instanceof MutableMap$00602 ? MutableMap$00602.call(this, pairs, comparer) : new MutableMap$00602(pairs, comparer);
}

function MutableMap$00602$$TryFindIndex$$2B595(this$$$1, k) {
  const h = this$$$1.comparer.GetHashCode(k) | 0;
  const matchValue = tryGetValue(this$$$1.hashMap, h, null);

  if (matchValue[0]) {
    return [true, h, matchValue[1].findIndex(function (pair$$1) {
      return this$$$1.comparer.Equals(k, pair$$1[0]);
    })];
  } else {
    return [false, h, -1];
  }
}

export function MutableMap$00602$$TryFind$$2B595(this$$$2, k$$1) {
  const matchValue$$1 = MutableMap$00602$$TryFindIndex$$2B595(this$$$2, k$$1);
  var $target$$10;

  if (matchValue$$1[0]) {
    if (matchValue$$1[2] > -1) {
      $target$$10 = 0;
    } else {
      $target$$10 = 1;
    }
  } else {
    $target$$10 = 1;
  }

  switch ($target$$10) {
    case 0:
      {
        return getItemFromDict(this$$$2.hashMap, matchValue$$1[1])[matchValue$$1[2]];
      }

    case 1:
      {
        return undefined;
      }
  }
}
export function MutableMap$00602$$get_Comparer(this$$$3) {
  return this$$$3.comparer;
}
export function MutableMap$00602$$Clear(this$$$4) {
  this$$$4.hashMap.clear();
}
export function MutableMap$00602$$get_Count(this$$$5) {
  const source = this$$$5.hashMap.values();
  return sumBy(function projection(pairs$$2) {
    return pairs$$2.length;
  }, source, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
export function MutableMap$00602$$get_Item$$2B595(this$$$6, k$$2) {
  const matchValue$$2 = MutableMap$00602$$TryFind$$2B595(this$$$6, k$$2);

  if (matchValue$$2 != null) {
    const pair$$2 = matchValue$$2;
    return pair$$2[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
export function MutableMap$00602$$set_Item$$5BDDA1(this$$$7, k$$3, v) {
  const matchValue$$3 = MutableMap$00602$$TryFindIndex$$2B595(this$$$7, k$$3);
  var $target$$20;

  if (matchValue$$3[0]) {
    if (matchValue$$3[2] > -1) {
      $target$$20 = 0;
    } else {
      $target$$20 = 1;
    }
  } else {
    $target$$20 = 1;
  }

  switch ($target$$20) {
    case 0:
      {
        getItemFromDict(this$$$7.hashMap, matchValue$$3[1])[matchValue$$3[2]] = [k$$3, v];
        break;
      }

    case 1:
      {
        if (matchValue$$3[0]) {
          const value = void getItemFromDict(this$$$7.hashMap, matchValue$$3[1]).push([k$$3, v]);
          void null;
        } else {
          this$$$7.hashMap.set(matchValue$$3[1], [[k$$3, v]]);
        }

        break;
      }
  }
}
export function MutableMap$00602$$Add$$5BDDA1(this$$$8, k$$4, v$$1) {
  const matchValue$$4 = MutableMap$00602$$TryFindIndex$$2B595(this$$$8, k$$4);
  var $target$$24;

  if (matchValue$$4[0]) {
    if (matchValue$$4[2] > -1) {
      $target$$24 = 0;
    } else {
      $target$$24 = 1;
    }
  } else {
    $target$$24 = 1;
  }

  switch ($target$$24) {
    case 0:
      {
        const msg = format("An item with the same key has already been added. Key: {0}", k$$4);
        throw new Error(msg);
        break;
      }

    case 1:
      {
        if (matchValue$$4[0]) {
          const value$$1 = void getItemFromDict(this$$$8.hashMap, matchValue$$4[1]).push([k$$4, v$$1]);
          void null;
        } else {
          this$$$8.hashMap.set(matchValue$$4[1], [[k$$4, v$$1]]);
        }

        break;
      }
  }
}
export function MutableMap$00602$$ContainsKey$$2B595(this$$$9, k$$5) {
  const matchValue$$5 = MutableMap$00602$$TryFindIndex$$2B595(this$$$9, k$$5);
  var $target$$27;

  if (matchValue$$5[0]) {
    if (matchValue$$5[2] > -1) {
      $target$$27 = 0;
    } else {
      $target$$27 = 1;
    }
  } else {
    $target$$27 = 1;
  }

  switch ($target$$27) {
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
export function MutableMap$00602$$Remove$$2B595(this$$$10, k$$6) {
  const matchValue$$6 = MutableMap$00602$$TryFindIndex$$2B595(this$$$10, k$$6);
  var $target$$30;

  if (matchValue$$6[0]) {
    if (matchValue$$6[2] > -1) {
      $target$$30 = 0;
    } else {
      $target$$30 = 1;
    }
  } else {
    $target$$30 = 1;
  }

  switch ($target$$30) {
    case 0:
      {
        getItemFromDict(this$$$10.hashMap, matchValue$$6[1]).splice(matchValue$$6[2], 1);
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}

MutableMap$00602.prototype[Symbol.iterator] = function () {
  var elems;
  const this$$$11 = this;
  return toIterator((elems = delay(function () {
    return collect(function (pairs$$3) {
      return map(function (pair$$3) {
        return pair$$3;
      }, pairs$$3);
    }, this$$$11.hashMap.values());
  }), getEnumerator(elems)));
};

MutableMap$00602.prototype.Add = function (item) {
  const this$$$12 = this;
  MutableMap$00602$$Add$$5BDDA1(this$$$12, item[0], item[1]);
};

MutableMap$00602.prototype.Clear = function () {
  const this$$$13 = this;
  MutableMap$00602$$Clear(this$$$13);
};

MutableMap$00602.prototype.Contains = function (item$$1) {
  var p;
  const this$$$14 = this;
  const matchValue$$7 = MutableMap$00602$$TryFind$$2B595(this$$$14, item$$1[0]);
  var $target$$31;

  if (matchValue$$7 != null) {
    if (p = matchValue$$7, equals(p[1], item$$1[1])) {
      $target$$31 = 0;
    } else {
      $target$$31 = 1;
    }
  } else {
    $target$$31 = 1;
  }

  switch ($target$$31) {
    case 0:
      {
        return true;
      }

    case 1:
      {
        return false;
      }
  }
};

MutableMap$00602.prototype.CopyTo = function (array, arrayIndex) {
  const this$$$15 = this;
  iterateIndexed(function action(i$$10, e) {
    array[arrayIndex + i$$10] = e;
  }, this$$$15);
};

Object.defineProperty(MutableMap$00602.prototype, "Count", {
  "get": function () {
    const this$$$16 = this;
    return MutableMap$00602$$get_Count(this$$$16) | 0;
  }
});
Object.defineProperty(MutableMap$00602.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableMap$00602.prototype.Remove = function (item$$2) {
  const this$$$18 = this;
  const matchValue$$8 = MutableMap$00602$$TryFind$$2B595(this$$$18, item$$2[0]);

  if (matchValue$$8 != null) {
    const pair$$4 = matchValue$$8;

    if (equals(pair$$4[1], item$$2[1])) {
      const value$$2 = MutableMap$00602$$Remove$$2B595(this$$$18, item$$2[0]);
      void value$$2;
    } else {
      void null;
    }

    return true;
  } else {
    return false;
  }
};

Object.defineProperty(MutableMap$00602.prototype, "size", {
  "get": function () {
    const this$$$19 = this;
    return MutableMap$00602$$get_Count(this$$$19) | 0;
  }
});

MutableMap$00602.prototype.clear = function () {
  const this$$$20 = this;
  MutableMap$00602$$Clear(this$$$20);
};

MutableMap$00602.prototype.delete = function (k$$7) {
  const this$$$21 = this;
  return MutableMap$00602$$Remove$$2B595(this$$$21, k$$7);
};

MutableMap$00602.prototype.entries = function () {
  const this$$$22 = this;
  return map(function mapping(x) {
    return x;
  }, this$$$22);
};

MutableMap$00602.prototype.get = function (k$$8) {
  const this$$$23 = this;
  return MutableMap$00602$$get_Item$$2B595(this$$$23, k$$8);
};

MutableMap$00602.prototype.has = function (k$$9) {
  const this$$$24 = this;
  return MutableMap$00602$$ContainsKey$$2B595(this$$$24, k$$9);
};

MutableMap$00602.prototype.keys = function () {
  const this$$$25 = this;
  return map(function mapping$$1(pair$$5) {
    return pair$$5[0];
  }, this$$$25);
};

MutableMap$00602.prototype.set = function (k$$10, v$$2) {
  const this$$$26 = this;
  MutableMap$00602$$set_Item$$5BDDA1(this$$$26, k$$10, v$$2);
  return this$$$26;
};

MutableMap$00602.prototype.values = function () {
  const this$$$27 = this;
  return map(function mapping$$2(pair$$6) {
    return pair$$6[1];
  }, this$$$27);
};
import { declare } from "./Types.js";
import { type } from "./Reflection.js";
import { EqualityComparer$00601$$$get_Default as EqualityComparer$002400601$0024$0024$0024get_Default } from "./System.Collections.Generic.js";
import { equals, getItemFromDict, tryGetValue } from "./Util.js";
import { iterateIndexed, toIterator, getEnumerator, delay, collect, map, sumBy } from "./Seq.js";
import { toText, printf } from "./String.js";
export const MutableMap$00602 = declare(function Fable_Collections_MutableMap(comparer) {
  const $this$$1 = this;
  $this$$1.comparer = comparer;
  $this$$1["entries@23"] = new Map([]);
});
export function MutableMap$00602$reflection($gen$$4, $gen$$5) {
  return type("Fable.Collections.MutableMap`2", [$gen$$4, $gen$$5]);
}
export function MutableMap$00602$$$$002Ector$$Z79760D57(comparer) {
  return this instanceof MutableMap$00602 ? MutableMap$00602.call(this, comparer) : new MutableMap$00602(comparer);
}
export function MutableMap$00602$$$$002Ector() {
  return MutableMap$00602$$$$002Ector$$Z79760D57.call(this, EqualityComparer$002400601$0024$0024$0024get_Default());
}

function MutableMap$00602$$TryFindIndex$$2B595(this$, k) {
  const h = this$.comparer.GetHashCode(k) | 0;
  const matchValue = tryGetValue(this$["entries@23"], h, null);

  if (matchValue[0]) {
    const pairs = matchValue[1];
    return [true, h, pairs.findIndex(function (pair) {
      return this$.comparer.Equals(k, pair[0]);
    })];
  } else {
    return [false, h, -1];
  }
}

export function MutableMap$00602$$TryFind$$2B595(this$$$1, k$$1) {
  var i, h$$1;
  const matchValue$$1 = MutableMap$00602$$TryFindIndex$$2B595(this$$$1, k$$1);
  var $target$$6;

  if (matchValue$$1[0]) {
    if (i = matchValue$$1[2] | 0, (h$$1 = matchValue$$1[1] | 0, i > -1)) {
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
        const i$$1 = matchValue$$1[2] | 0;
        const h$$2 = matchValue$$1[1] | 0;
        return getItemFromDict(this$$$1["entries@23"], h$$2)[i$$1];
      }

    case 1:
      {
        return null;
      }
  }
}
export function MutableMap$00602$$get_Comparer(this$$$2) {
  return this$$$2.comparer;
}
export function MutableMap$00602$$Clear(this$$$3) {
  this$$$3["entries@23"].clear();
}
export function MutableMap$00602$$get_Count(this$$$4) {
  return sumBy(function projection(pairs$$1) {
    return pairs$$1.length;
  }, this$$$4["entries@23"].values(), {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  });
}
export function MutableMap$00602$$get_Item$$2B595(this$$$5, k$$2) {
  const matchValue$$2 = MutableMap$00602$$TryFind$$2B595(this$$$5, k$$2);

  if (matchValue$$2 != null) {
    const pair$$1 = matchValue$$2;
    return pair$$1[1];
  } else {
    throw new Error("The item was not found in collection");
  }
}
export function MutableMap$00602$$set_Item$$5BDDA1(this$$$6, k$$3, v) {
  var i$$2, h$$3;
  const matchValue$$3 = MutableMap$00602$$TryFindIndex$$2B595(this$$$6, k$$3);
  var $target$$7;

  if (matchValue$$3[0]) {
    if (i$$2 = matchValue$$3[2] | 0, (h$$3 = matchValue$$3[1] | 0, i$$2 > -1)) {
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
        const i$$3 = matchValue$$3[2] | 0;
        const h$$4 = matchValue$$3[1] | 0;
        getItemFromDict(this$$$6["entries@23"], h$$4)[i$$3] = [k$$3, v];
        break;
      }

    case 1:
      {
        if (matchValue$$3[0]) {
          const h$$5 = matchValue$$3[1] | 0;
          const value = getItemFromDict(this$$$6["entries@23"], h$$5).push([k$$3, v]);
          null, null;
        } else {
          const h$$6 = matchValue$$3[1] | 0;
          this$$$6["entries@23"].set(h$$6, [[k$$3, v]]);
        }

        break;
      }
  }
}
export function MutableMap$00602$$Add$$5BDDA1(this$$$7, k$$4, v$$1) {
  var i$$4, h$$7;
  const matchValue$$4 = MutableMap$00602$$TryFindIndex$$2B595(this$$$7, k$$4);
  var $target$$8;

  if (matchValue$$4[0]) {
    if (i$$4 = matchValue$$4[2] | 0, (h$$7 = matchValue$$4[1] | 0, i$$4 > -1)) {
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
        const i$$5 = matchValue$$4[2] | 0;
        const h$$8 = matchValue$$4[1] | 0;
        const msg = toText(printf("An item with the same key has already been added. Key: %A"))(k$$4);
        throw new Error(msg);
        break;
      }

    case 1:
      {
        if (matchValue$$4[0]) {
          const h$$9 = matchValue$$4[1] | 0;
          const value$$1 = getItemFromDict(this$$$7["entries@23"], h$$9).push([k$$4, v$$1]);
          null, null;
        } else {
          const h$$10 = matchValue$$4[1] | 0;
          this$$$7["entries@23"].set(h$$10, [[k$$4, v$$1]]);
        }

        break;
      }
  }
}
export function MutableMap$00602$$ContainsKey$$2B595(this$$$8, k$$5) {
  var i$$6, h$$11;
  const matchValue$$5 = MutableMap$00602$$TryFindIndex$$2B595(this$$$8, k$$5);
  var $target$$9;

  if (matchValue$$5[0]) {
    if (i$$6 = matchValue$$5[2] | 0, (h$$11 = matchValue$$5[1] | 0, i$$6 > -1)) {
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
        const i$$7 = matchValue$$5[2] | 0;
        const h$$12 = matchValue$$5[1] | 0;
        return true;
      }

    case 1:
      {
        return false;
      }
  }
}
export function MutableMap$00602$$Remove$$2B595(this$$$9, k$$6) {
  var i$$8, h$$13;
  const matchValue$$6 = MutableMap$00602$$TryFindIndex$$2B595(this$$$9, k$$6);
  var $target$$10;

  if (matchValue$$6[0]) {
    if (i$$8 = matchValue$$6[2] | 0, (h$$13 = matchValue$$6[1] | 0, i$$8 > -1)) {
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
        const i$$9 = matchValue$$6[2] | 0;
        const h$$14 = matchValue$$6[1] | 0;
        getItemFromDict(this$$$9["entries@23"], h$$14).splice(i$$9, 1);
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
  const this$$$10 = this;
  return toIterator((elems = delay(function () {
    return collect(function (pairs$$2) {
      return map(function (pair$$2) {
        return pair$$2;
      }, pairs$$2);
    }, this$$$10["entries@23"].values());
  }), getEnumerator(elems)));
};

MutableMap$00602.prototype.Add = function (item) {
  const this$$$11 = this;
  MutableMap$00602$$Add$$5BDDA1(this$$$11, item[0], item[1]);
};

MutableMap$00602.prototype.Clear = function () {
  const this$$$12 = this;
  MutableMap$00602$$Clear(this$$$12);
};

MutableMap$00602.prototype.Contains = function (item$$1) {
  var p;
  const this$$$13 = this;
  const matchValue$$7 = MutableMap$00602$$TryFind$$2B595(this$$$13, item$$1[0]);
  var $target$$11;

  if (matchValue$$7 != null) {
    if (p = matchValue$$7, equals(p[1], item$$1[1])) {
      $target$$11 = 0;
    } else {
      $target$$11 = 1;
    }
  } else {
    $target$$11 = 1;
  }

  switch ($target$$11) {
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
  const this$$$14 = this;
  iterateIndexed(function action(i$$10, e) {
    array[arrayIndex + i$$10] = e;
  }, this$$$14);
};

Object.defineProperty(MutableMap$00602.prototype, "Count", {
  "get": function () {
    const this$$$15 = this;
    return MutableMap$00602$$get_Count(this$$$15) | 0;
  }
});
Object.defineProperty(MutableMap$00602.prototype, "IsReadOnly", {
  "get": function () {
    return false;
  }
});

MutableMap$00602.prototype.Remove = function (item$$2) {
  const this$$$17 = this;
  const matchValue$$8 = MutableMap$00602$$TryFind$$2B595(this$$$17, item$$2[0]);

  if (matchValue$$8 != null) {
    const pair$$3 = matchValue$$8;

    if (equals(pair$$3[1], item$$2[1])) {
      MutableMap$00602$$Remove$$2B595(this$$$17, item$$2[0]), null;
    }

    return true;
  } else {
    return false;
  }
};

Object.defineProperty(MutableMap$00602.prototype, "size", {
  "get": function () {
    const this$$$18 = this;
    return MutableMap$00602$$get_Count(this$$$18) | 0;
  }
});

MutableMap$00602.prototype.clear = function () {
  const this$$$19 = this;
  MutableMap$00602$$Clear(this$$$19);
};

MutableMap$00602.prototype.delete = function (k$$7) {
  const this$$$20 = this;
  return MutableMap$00602$$Remove$$2B595(this$$$20, k$$7);
};

MutableMap$00602.prototype.entries = function () {
  const this$$$21 = this;
  return map(function mapping(x) {
    return x;
  }, this$$$21);
};

MutableMap$00602.prototype.get = function (k$$8) {
  const this$$$22 = this;
  return MutableMap$00602$$get_Item$$2B595(this$$$22, k$$8);
};

MutableMap$00602.prototype.has = function (k$$9) {
  const this$$$23 = this;
  return MutableMap$00602$$ContainsKey$$2B595(this$$$23, k$$9);
};

MutableMap$00602.prototype.keys = function () {
  const this$$$24 = this;
  return map(function mapping$$1(pair$$4) {
    return pair$$4[0];
  }, this$$$24);
};

MutableMap$00602.prototype.set = function (k$$10, v$$2) {
  const this$$$25 = this;
  MutableMap$00602$$set_Item$$5BDDA1(this$$$25, k$$10, v$$2);
  return this$$$25;
};

MutableMap$00602.prototype.values = function () {
  const this$$$26 = this;
  return map(function mapping$$2(pair$$5) {
    return pair$$5[1];
  }, this$$$26);
};
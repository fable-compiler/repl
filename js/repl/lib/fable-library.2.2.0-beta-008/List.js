import { defaultArg, value as value$$1, some } from "./Option.js";
import { FSharpRef, List } from "./Types.js";
import { delay, rangeNumber, iterate as iterate$$1, collect as collect$$1, scanBack as scanBack$$1, scan as scan$$1, foldBack2 as foldBack2$$1, fold2 as fold2$$1, fold as fold$$1, map as map$$1 } from "./Seq.js";
import { tryGetValue, addToSet, comparerFromEqualityComparer, count } from "./Util.js";
import { ofList } from "./Array.js";
import { permute as permute$$1, findIndexBack as findIndexBack$$1, tryFindIndexBack as tryFindIndexBack$$1 } from "./Array.js";
import { createMutable } from "./Set.js";
import { ofSeq as ofSeq$$1, slice as slice$$1, item as item$$1, length as length$$1 } from "./List.js";
import { createMutable as createMutable$$1 } from "./Map.js";
export function head(_arg1) {
  if (_arg1.tail != null) {
    const x = _arg1.head;
    return x;
  } else {
    throw new Error("List was empty");
  }
}
export function tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    const x$$1 = _arg1$$1.head;
    return some(x$$1);
  } else {
    return null;
  }
}
export function tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    const xs = _arg1$$2.tail;
    return xs;
  } else {
    throw new Error("List was empty");
  }
}
export function last(_arg1$$3) {
  last: while (true) {
    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        const $_arg1$$3$$2 = _arg1$$3;
        _arg1$$3 = $_arg1$$3$$2.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }

    break;
  }
}
export function tryLast(_arg1$$4) {
  tryLast: while (true) {
    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return some(_arg1$$4.head);
      } else {
        const $_arg1$$4$$3 = _arg1$$4;
        _arg1$$4 = $_arg1$$4$$3.tail;
        continue tryLast;
      }
    } else {
      return null;
    }

    break;
  }
}
export function compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    const loop = function loop(xs$$4, ys$$1) {
      loop: while (true) {
        const matchValue = [xs$$4, ys$$1];

        if (matchValue[0].tail != null) {
          if (matchValue[1].tail != null) {
            const matchValue$$1 = comparer(matchValue[0].head, matchValue[1].head) | 0;

            if (matchValue$$1 === 0) {
              xs$$4 = matchValue[0].tail;
              ys$$1 = matchValue[1].tail;
              continue loop;
            } else {
              const res = matchValue$$1 | 0;
              return res | 0;
            }
          } else {
            return 1;
          }
        } else if (matchValue[1].tail == null) {
          return 0;
        } else {
          return -1 | 0;
        }

        break;
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
export function foldIndexedAux($arg$$7, $arg$$8, $arg$$9, $arg$$10) {
  foldIndexedAux: while (true) {
    const f = $arg$$7,
          i = $arg$$8,
          acc = $arg$$9,
          _arg1$$5 = $arg$$10;

    if (_arg1$$5.tail != null) {
      const xs$$6 = _arg1$$5.tail;
      const x$$5 = _arg1$$5.head;
      $arg$$7 = f;
      $arg$$8 = i + 1;
      $arg$$9 = f(i, acc, x$$5);
      $arg$$10 = xs$$6;
      continue foldIndexedAux;
    } else {
      return acc;
    }

    break;
  }
}
export function foldIndexed(f$$1, state, xs$$7) {
  return foldIndexedAux(f$$1, 0, state, xs$$7);
}
export function fold($arg$$14, $arg$$15, $arg$$16) {
  fold: while (true) {
    const f$$2 = $arg$$14,
          state$$1 = $arg$$15,
          xs$$8 = $arg$$16;

    if (xs$$8.tail != null) {
      const t = xs$$8.tail;
      const h = xs$$8.head;
      $arg$$14 = f$$2;
      $arg$$15 = f$$2(state$$1, h);
      $arg$$16 = t;
      continue fold;
    } else {
      return state$$1;
    }

    break;
  }
}
export function reverse(xs$$9) {
  return fold(function (acc$$1, x$$6) {
    return new List(x$$6, acc$$1);
  }, new List(), xs$$9);
}
export function foldBack(f$$3, xs$$10, state$$2) {
  return fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, reverse(xs$$10));
}
export function toSeq(xs$$11) {
  return map$$1(function (x$$8) {
    return x$$8;
  }, xs$$11);
}
export function ofSeq(xs$$12) {
  return reverse(fold$$1(function (acc$$3, x$$9) {
    return new List(x$$9, acc$$3);
  }, new List(), xs$$12));
}
export function concat(lists) {
  return reverse(fold$$1(function (state$$3, xs$$14) {
    return fold(function f$$4(acc$$4, x$$10) {
      return new List(x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, new List(), lists));
}
export function foldIndexed2Aux($arg$$20, $arg$$21, $arg$$22, $arg$$23, $arg$$24) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $arg$$20,
          i$$1 = $arg$$21,
          acc$$5 = $arg$$22,
          bs = $arg$$23,
          cs = $arg$$24;
    const matchValue$$2 = [bs, cs];
    var $target$$25, x$$11, xs$$16, y$$1, ys$$3;

    if (matchValue$$2[0].tail != null) {
      if (matchValue$$2[1].tail != null) {
        $target$$25 = 1;
        x$$11 = matchValue$$2[0].head;
        xs$$16 = matchValue$$2[0].tail;
        y$$1 = matchValue$$2[1].head;
        ys$$3 = matchValue$$2[1].tail;
      } else {
        $target$$25 = 2;
      }
    } else if (matchValue$$2[1].tail == null) {
      $target$$25 = 0;
    } else {
      $target$$25 = 2;
    }

    switch ($target$$25) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $arg$$20 = f$$5;
          $arg$$21 = i$$1 + 1;
          $arg$$22 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $arg$$23 = xs$$16;
          $arg$$24 = ys$$3;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
export function foldIndexed2(f$$6, state$$4, xs$$17, ys$$4) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$17, ys$$4);
}
export function fold2(f$$7, state$$5, xs$$18, ys$$5) {
  return fold2$$1(f$$7, state$$5, xs$$18, ys$$5);
}
export function foldBack2(f$$8, xs$$19, ys$$6, state$$6) {
  return foldBack2$$1(f$$8, xs$$19, ys$$6, state$$6);
}
export function unfold(f$$9, state$$7) {
  const unfoldInner = function unfoldInner(acc$$6, state$$8) {
    unfoldInner: while (true) {
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        const $acc$$6$$40 = acc$$6;
        acc$$6 = new List(x$$12, $acc$$6$$40);
        state$$8 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }

      break;
    }
  };

  return unfoldInner(new List(), state$$7);
}
export function foldIndexed3Aux($arg$$41, $arg$$42, $arg$$43, $arg$$44, $arg$$45, $arg$$46) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $arg$$41,
          i$$2 = $arg$$42,
          acc$$7 = $arg$$43,
          bs$$1 = $arg$$44,
          cs$$1 = $arg$$45,
          ds = $arg$$46;
    const matchValue$$4 = [bs$$1, cs$$1, ds];
    var $target$$47, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (matchValue$$4[0].tail != null) {
      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[2].tail != null) {
          $target$$47 = 1;
          x$$13 = matchValue$$4[0].head;
          xs$$20 = matchValue$$4[0].tail;
          y$$2 = matchValue$$4[1].head;
          ys$$7 = matchValue$$4[1].tail;
          z = matchValue$$4[2].head;
          zs = matchValue$$4[2].tail;
        } else {
          $target$$47 = 2;
        }
      } else {
        $target$$47 = 2;
      }
    } else if (matchValue$$4[1].tail == null) {
      if (matchValue$$4[2].tail == null) {
        $target$$47 = 0;
      } else {
        $target$$47 = 2;
      }
    } else {
      $target$$47 = 2;
    }

    switch ($target$$47) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $arg$$41 = f$$10;
          $arg$$42 = i$$2 + 1;
          $arg$$43 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $arg$$44 = xs$$20;
          $arg$$45 = ys$$7;
          $arg$$46 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
export function foldIndexed3(f$$11, seed, xs$$21, ys$$8, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$21, ys$$8, zs$$1);
}
export function fold3(f$$12, state$$10, xs$$22, ys$$9, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$22, ys$$9, zs$$2);
}
export function scan(f$$13, state$$11, xs$$23) {
  return ofSeq(scan$$1(f$$13, state$$11, xs$$23));
}
export function scanBack(f$$14, xs$$25, state$$12) {
  return ofSeq(scanBack$$1(f$$14, xs$$25, state$$12));
}
export function length(xs$$27) {
  return fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$27);
}
export function append(xs$$28, ys$$10) {
  return fold(function (acc$$10, x$$15) {
    return new List(x$$15, acc$$10);
  }, ys$$10, reverse(xs$$28));
}
export function collect(f$$15, xs$$29) {
  return ofSeq(collect$$1(f$$15, xs$$29));
}
export function map(f$$16, xs$$31) {
  return reverse(fold(function (acc$$11, x$$16) {
    return new List(f$$16(x$$16), acc$$11);
  }, new List(), xs$$31));
}
export function mapIndexed(f$$17, xs$$33) {
  return reverse(foldIndexed(function (i$$3, acc$$12, x$$17) {
    return new List(f$$17(i$$3, x$$17), acc$$12);
  }, new List(), xs$$33));
}
export function indexed(xs$$35) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}
export function map2(f$$18, xs$$36, ys$$11) {
  return reverse(fold2(function (acc$$13, x$$19, y$$4) {
    return new List(f$$18(x$$19, y$$4), acc$$13);
  }, new List(), xs$$36, ys$$11));
}
export function mapIndexed2(f$$19, xs$$38, ys$$12) {
  return reverse(foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return new List(f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, new List(), xs$$38, ys$$12));
}
export function map3(f$$20, xs$$40, ys$$13, zs$$3) {
  return reverse(fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return new List(f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, new List(), xs$$40, ys$$13, zs$$3));
}
export function mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  return reverse(foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return new List(f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, new List(), xs$$42, ys$$14, zs$$4));
}
export function mapFold(f$$22, s, xs$$44) {
  const foldFn = function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [new List(patternInput[0], tupledArg[0]), patternInput[1]];
  };

  const patternInput$$1 = fold(foldFn, [new List(), s], xs$$44);
  return [reverse(patternInput$$1[0]), patternInput$$1[1]];
}
export function mapFoldBack(f$$23, xs$$45, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, reverse(xs$$45));
}
export function iterate(f$$24, xs$$46) {
  fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, null, xs$$46);
}
export function iterate2(f$$25, xs$$47, ys$$15) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, null, xs$$47, ys$$15);
}
export function iterateIndexed(f$$26, xs$$48) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, null, xs$$48);
}
export function iterateIndexed2(f$$27, xs$$49, ys$$16) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, null, xs$$49, ys$$16);
}
export function ofArray(xs$$50) {
  let res$$1 = new List();

  for (let i$$9 = count(xs$$50) - 1; i$$9 >= 0; i$$9--) {
    res$$1 = new List(xs$$50[i$$9], res$$1);
  }

  return res$$1;
}
export function empty() {
  return new List();
}
export function isEmpty(_arg1$$8) {
  if (_arg1$$8.tail == null) {
    return true;
  } else {
    return false;
  }
}
export function tryPickIndexedAux($arg$$100, $arg$$101, $arg$$102) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $arg$$100,
          i$$10 = $arg$$101,
          _arg1$$9 = $arg$$102;

    if (_arg1$$9.tail != null) {
      const xs$$51 = _arg1$$9.tail;
      const x$$28 = _arg1$$9.head;
      const result = f$$28(i$$10, x$$28);

      if (result == null) {
        $arg$$100 = f$$28;
        $arg$$101 = i$$10 + 1;
        $arg$$102 = xs$$51;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }

    break;
  }
}
export function tryPickIndexed(f$$29, xs$$52) {
  return tryPickIndexedAux(f$$29, 0, xs$$52);
}
export function tryPick(f$$30, xs$$53) {
  return tryPickIndexed(function (_arg1$$10, x$$29) {
    return f$$30(x$$29);
  }, xs$$53);
}
export function pick(f$$31, xs$$54) {
  const matchValue$$5 = tryPick(f$$31, xs$$54);

  if (matchValue$$5 != null) {
    const x$$30 = value$$1(matchValue$$5);
    return x$$30;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function tryFindIndexed(f$$32, xs$$55) {
  return tryPickIndexed(function (i$$11, x$$31) {
    return f$$32(i$$11, x$$31) ? some(x$$31) : null;
  }, xs$$55);
}
export function tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$32) {
    return f$$33(x$$32) ? some(x$$32) : null;
  }, xs$$56);
}
export function findIndexed(f$$34, xs$$57) {
  const matchValue$$6 = tryFindIndexed(f$$34, xs$$57);

  if (matchValue$$6 != null) {
    const x$$33 = value$$1(matchValue$$6);
    return x$$33;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function find(f$$35, xs$$58) {
  return findIndexed(function (_arg1$$12, x$$34) {
    return f$$35(x$$34);
  }, xs$$58);
}
export function findBack(f$$36, xs$$59) {
  return find(f$$36, reverse(xs$$59));
}
export function tryFindBack(f$$37, xs$$62) {
  return tryFind(f$$37, reverse(xs$$62));
}
export function tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$12, x$$35) {
    return f$$38(x$$35) ? i$$12 : null;
  }, xs$$65);
}
export function tryFindIndexBack(f$$39, xs$$66) {
  return tryFindIndexBack$$1(f$$39, ofList(xs$$66, Array));
}
export function findIndex(f$$40, xs$$67) {
  const matchValue$$7 = tryFindIndex(f$$40, xs$$67);

  if (matchValue$$7 != null) {
    const x$$36 = matchValue$$7 | 0;
    return x$$36 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function findIndexBack(f$$41, xs$$68) {
  return findIndexBack$$1(f$$41, ofList(xs$$68, Array));
}
export function item(n, xs$$69) {
  return findIndexed(function (i$$13, _arg1$$13) {
    return n === i$$13;
  }, xs$$69);
}
export function tryItem(n$$1, xs$$70) {
  return tryFindIndexed(function (i$$14, _arg1$$14) {
    return n$$1 === i$$14;
  }, xs$$70);
}
export function filter(f$$42, xs$$71) {
  return reverse(fold(function (acc$$17, x$$37) {
    return f$$42(x$$37) ? new List(x$$37, acc$$17) : acc$$17;
  }, new List(), xs$$71));
}
export function partition(f$$43, xs$$73) {
  return fold(function (tupledArg$$1, x$$38) {
    return f$$43(x$$38) ? [new List(x$$38, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], new List(x$$38, tupledArg$$1[1])];
  }, [new List(), new List()], reverse(xs$$73));
}
export function choose(f$$44, xs$$74) {
  return reverse(fold(function (acc$$18, x$$39) {
    const matchValue$$8 = f$$44(x$$39);

    if (matchValue$$8 == null) {
      return acc$$18;
    } else {
      const y$$10 = value$$1(matchValue$$8);
      return new List(y$$10, acc$$18);
    }
  }, new List(), xs$$74));
}
export function contains(value, list, eq) {
  const loop$$1 = function loop$$1(xs$$76) {
    loop$$1: while (true) {
      if (xs$$76.tail != null) {
        const v$$1 = xs$$76.head;
        const rest = xs$$76.tail;

        if (eq.Equals(value, v$$1)) {
          return true;
        } else {
          xs$$76 = rest;
          continue loop$$1;
        }
      } else {
        return false;
      }

      break;
    }
  };

  return loop$$1(list);
}
export function except(itemsToExclude, array$$2, eq$$1) {
  if (isEmpty(array$$2)) {
    return array$$2;
  } else {
    const cached = createMutable(itemsToExclude, comparerFromEqualityComparer(eq$$1));
    return filter(function f$$45(arg00) {
      return addToSet(arg00, cached);
    }, array$$2);
  }
}
export function initialize(n$$2, f$$46) {
  let xs$$78 = new List();

  for (let i$$15 = 1; i$$15 <= n$$2; i$$15++) {
    xs$$78 = new List(f$$46(n$$2 - i$$15), xs$$78);
  }

  return xs$$78;
}
export function replicate(n$$3, x$$40) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$40;
  });
}
export function reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    const t$$1 = _arg1$$16.tail;
    const h$$1 = _arg1$$16.head;
    return fold(f$$47, h$$1, t$$1);
  } else {
    throw new Error("List was empty");
  }
}
export function reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    const t$$2 = _arg1$$17.tail;
    const h$$2 = _arg1$$17.head;
    return foldBack(f$$48, t$$2, h$$2);
  } else {
    throw new Error("List was empty");
  }
}
export function forAll(f$$49, xs$$79) {
  return fold(function (acc$$19, x$$41) {
    return acc$$19 ? f$$49(x$$41) : false;
  }, true, xs$$79);
}
export function forAll2(f$$50, xs$$80, ys$$17) {
  return fold2(function (acc$$20, x$$42, y$$11) {
    return acc$$20 ? f$$50(x$$42, y$$11) : false;
  }, true, xs$$80, ys$$17);
}
export function exists($arg$$146, $arg$$147) {
  exists: while (true) {
    const f$$51 = $arg$$146,
          _arg1$$18 = $arg$$147;

    if (_arg1$$18.tail != null) {
      const xs$$81 = _arg1$$18.tail;
      const x$$43 = _arg1$$18.head;

      if (f$$51(x$$43)) {
        return true;
      } else {
        $arg$$146 = f$$51;
        $arg$$147 = xs$$81;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
export function exists2($arg$$148, $arg$$149, $arg$$150) {
  exists2: while (true) {
    const f$$52 = $arg$$148,
          bs$$2 = $arg$$149,
          cs$$2 = $arg$$150;
    const matchValue$$9 = [bs$$2, cs$$2];
    var $target$$151, x$$44, xs$$82, y$$12, ys$$18;

    if (matchValue$$9[0].tail != null) {
      if (matchValue$$9[1].tail != null) {
        $target$$151 = 1;
        x$$44 = matchValue$$9[0].head;
        xs$$82 = matchValue$$9[0].tail;
        y$$12 = matchValue$$9[1].head;
        ys$$18 = matchValue$$9[1].tail;
      } else {
        $target$$151 = 2;
      }
    } else if (matchValue$$9[1].tail == null) {
      $target$$151 = 0;
    } else {
      $target$$151 = 2;
    }

    switch ($target$$151) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $arg$$148 = f$$52;
            $arg$$149 = xs$$82;
            $arg$$150 = ys$$18;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }

    break;
  }
}
export function unzip(xs$$83) {
  return foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [new List(tupledArg$$2[0], tupledArg$$3[0]), new List(tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$83, [new List(), new List()]);
}
export function unzip3(xs$$84) {
  return foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [new List(tupledArg$$4[0], tupledArg$$5[0]), new List(tupledArg$$4[1], tupledArg$$5[1]), new List(tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$84, [new List(), new List(), new List()]);
}
export function zip(xs$$85, ys$$19) {
  return map2(function (x$$47, y$$15) {
    return [x$$47, y$$15];
  }, xs$$85, ys$$19);
}
export function zip3(xs$$86, ys$$20, zs$$5) {
  return map3(function (x$$48, y$$16, z$$5) {
    return [x$$48, y$$16, z$$5];
  }, xs$$86, ys$$20, zs$$5);
}
export function sort(xs$$87, comparer$$1) {
  var xs$$88;
  return ofArray((xs$$88 = ofList(xs$$87, Array), (xs$$88.sort(function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  }), xs$$88)));
}
export function sortBy(projection, xs$$90, comparer$$3) {
  var xs$$91;
  return ofArray((xs$$91 = ofList(xs$$90, Array), (xs$$91.sort(function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  }), xs$$91)));
}
export function sortDescending(xs$$93, comparer$$5) {
  var xs$$94;
  return ofArray((xs$$94 = ofList(xs$$93, Array), (xs$$94.sort(function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  }), xs$$94)));
}
export function sortByDescending(projection$$1, xs$$96, comparer$$7) {
  var xs$$97;
  return ofArray((xs$$97 = ofList(xs$$96, Array), (xs$$97.sort(function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  }), xs$$97)));
}
export function sortWith(comparer$$9, xs$$99) {
  var xs$$100;
  return ofArray((xs$$100 = ofList(xs$$99, Array), (xs$$100.sort(comparer$$9), xs$$100)));
}
export function sum(xs$$102, adder) {
  return fold(function (acc$$21, x$$53) {
    return adder.Add(acc$$21, x$$53);
  }, adder.GetZero(), xs$$102);
}
export function sumBy(f$$53, xs$$103, adder$$1) {
  return fold(function (acc$$22, x$$54) {
    return adder$$1.Add(acc$$22, f$$53(x$$54));
  }, adder$$1.GetZero(), xs$$103);
}
export function maxBy(projection$$2, xs$$104, comparer$$11) {
  return reduce(function (x$$55, y$$21) {
    return comparer$$11.Compare(projection$$2(y$$21), projection$$2(x$$55)) > 0 ? y$$21 : x$$55;
  }, xs$$104);
}
export function max(li, comparer$$12) {
  return reduce(function (x$$56, y$$22) {
    return comparer$$12.Compare(y$$22, x$$56) > 0 ? y$$22 : x$$56;
  }, li);
}
export function minBy(projection$$3, xs$$105, comparer$$13) {
  return reduce(function (x$$57, y$$23) {
    return comparer$$13.Compare(projection$$3(y$$23), projection$$3(x$$57)) > 0 ? x$$57 : y$$23;
  }, xs$$105);
}
export function min(xs$$106, comparer$$14) {
  return reduce(function (x$$58, y$$24) {
    return comparer$$14.Compare(y$$24, x$$58) > 0 ? x$$58 : y$$24;
  }, xs$$106);
}
export function average(xs$$107, averager) {
  const total = fold(function (acc$$23, x$$59) {
    return averager.Add(acc$$23, x$$59);
  }, averager.GetZero(), xs$$107);
  return averager.DivideByInt(total, length(xs$$107));
}
export function averageBy(f$$54, xs$$108, averager$$1) {
  const total$$1 = fold(function (acc$$24, x$$60) {
    return averager$$1.Add(acc$$24, f$$54(x$$60));
  }, averager$$1.GetZero(), xs$$108);
  return averager$$1.DivideByInt(total$$1, length(xs$$108));
}
export function permute(f$$55, xs$$109) {
  return ofArray(permute$$1(f$$55, ofList(xs$$109, Array)));
}
export function skip(i$$16, xs$$111) {
  const skipInner = function skipInner(i$$17, xs$$112) {
    skipInner: while (true) {
      const matchValue$$10 = [i$$17, xs$$112];

      if (matchValue$$10[0] === 0) {
        return xs$$112;
      } else if (matchValue$$10[1].tail != null) {
        const xs$$113 = matchValue$$10[1].tail;
        const $i$$17$$174 = i$$17;
        i$$17 = $i$$17$$174 - 1;
        xs$$112 = xs$$113;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  const matchValue$$11 = [i$$16, xs$$111];

  if (matchValue$$11[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$175, i$$20, xs$$115;

    if (matchValue$$11[0] === 0) {
      $target$$175 = 0;
    } else if (matchValue$$11[0] === 1) {
      if (matchValue$$11[1].tail != null) {
        $target$$175 = 1;
      } else {
        $target$$175 = 2;
        i$$20 = matchValue$$11[0];
        xs$$115 = matchValue$$11[1];
      }
    } else {
      $target$$175 = 2;
      i$$20 = matchValue$$11[0];
      xs$$115 = matchValue$$11[1];
    }

    switch ($target$$175) {
      case 0:
        {
          return xs$$111;
        }

      case 1:
        {
          const xs$$114 = matchValue$$11[1].tail;
          return xs$$114;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$115);
        }
    }
  }
}
export function skipWhile($arg$$176, $arg$$177) {
  var t$$3, h$$3;

  skipWhile: while (true) {
    const predicate = $arg$$176,
          xs$$116 = $arg$$177;
    var $target$$178, h$$4, t$$4;

    if (xs$$116.tail != null) {
      if (t$$3 = xs$$116.tail, (h$$3 = xs$$116.head, predicate(h$$3))) {
        $target$$178 = 0;
        h$$4 = xs$$116.head;
        t$$4 = xs$$116.tail;
      } else {
        $target$$178 = 1;
      }
    } else {
      $target$$178 = 1;
    }

    switch ($target$$178) {
      case 0:
        {
          $arg$$176 = predicate;
          $arg$$177 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$116;
        }
    }

    break;
  }
}
export function takeSplitAux(error, i$$21, acc$$25, xs$$117) {
  takeSplitAux: while (true) {
    const matchValue$$12 = [i$$21, xs$$117];

    if (matchValue$$12[0] === 0) {
      return [reverse(acc$$25), xs$$117];
    } else if (matchValue$$12[1].tail != null) {
      const xs$$118 = matchValue$$12[1].tail;
      const x$$61 = matchValue$$12[1].head;
      const $acc$$25$$181 = acc$$25;
      const $error$$179 = error;
      const $i$$21$$180 = i$$21;
      error = $error$$179;
      i$$21 = $i$$21$$180 - 1;
      acc$$25 = new List(x$$61, $acc$$25$$181);
      xs$$117 = xs$$118;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$25), xs$$117];
      }
    }

    break;
  }
}
export function take(i$$22, xs$$119) {
  const matchValue$$13 = [i$$22, xs$$119];

  if (matchValue$$13[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$182, i$$25, xs$$120;

    if (matchValue$$13[0] === 0) {
      $target$$182 = 0;
    } else if (matchValue$$13[0] === 1) {
      if (matchValue$$13[1].tail != null) {
        $target$$182 = 1;
      } else {
        $target$$182 = 2;
        i$$25 = matchValue$$13[0];
        xs$$120 = matchValue$$13[1];
      }
    } else {
      $target$$182 = 2;
      i$$25 = matchValue$$13[0];
      xs$$120 = matchValue$$13[1];
    }

    switch ($target$$182) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          const x$$62 = matchValue$$13[1].head;
          return new List(x$$62, new List());
        }

      case 2:
        {
          return takeSplitAux(true, i$$25, new List(), xs$$120)[0];
        }
    }
  }
}
export function takeWhile(predicate$$1, xs$$121) {
  if (xs$$121.tail != null) {
    if (xs$$121.tail.tail == null) {
      if (predicate$$1(xs$$121.head)) {
        return xs$$121;
      } else {
        return xs$$121.tail;
      }
    } else {
      if (!predicate$$1(xs$$121.head)) {
        return new List();
      } else {
        return new List(xs$$121.head, takeWhile(predicate$$1, xs$$121.tail));
      }
    }
  } else {
    return xs$$121;
  }
}
export function truncate(i$$26, xs$$123) {
  const matchValue$$14 = [i$$26, xs$$123];

  if (matchValue$$14[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$185, i$$29, xs$$124;

    if (matchValue$$14[0] === 0) {
      $target$$185 = 0;
    } else if (matchValue$$14[0] === 1) {
      if (matchValue$$14[1].tail != null) {
        $target$$185 = 1;
      } else {
        $target$$185 = 2;
        i$$29 = matchValue$$14[0];
        xs$$124 = matchValue$$14[1];
      }
    } else {
      $target$$185 = 2;
      i$$29 = matchValue$$14[0];
      xs$$124 = matchValue$$14[1];
    }

    switch ($target$$185) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          const x$$65 = matchValue$$14[1].head;
          return new List(x$$65, new List());
        }

      case 2:
        {
          return takeSplitAux(false, i$$29, new List(), xs$$124)[0];
        }
    }
  }
}
export function splitAt(i$$30, xs$$125) {
  const matchValue$$15 = [i$$30, xs$$125];

  if (matchValue$$15[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$186, i$$33, xs$$127;

    if (matchValue$$15[0] === 0) {
      $target$$186 = 0;
    } else if (matchValue$$15[0] === 1) {
      if (matchValue$$15[1].tail != null) {
        $target$$186 = 1;
      } else {
        $target$$186 = 2;
        i$$33 = matchValue$$15[0];
        xs$$127 = matchValue$$15[1];
      }
    } else {
      $target$$186 = 2;
      i$$33 = matchValue$$15[0];
      xs$$127 = matchValue$$15[1];
    }

    switch ($target$$186) {
      case 0:
        {
          return [new List(), xs$$125];
        }

      case 1:
        {
          const xs$$126 = matchValue$$15[1].tail;
          const x$$66 = matchValue$$15[1].head;
          return [new List(x$$66, new List()), xs$$126];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new List(), xs$$127);
        }
    }
  }
}
export function slice(lower, upper, xs$$128) {
  const lower$$1 = defaultArg(lower, -1) | 0;
  const upper$$1 = defaultArg(upper, -1) | 0;
  return reverse(foldIndexed(function f$$56(i$$34, acc$$26, x$$67) {
    if ((lower$$1 === -1 ? true : lower$$1 <= i$$34) ? upper$$1 === -1 ? true : i$$34 <= upper$$1 : false) {
      return new List(x$$67, acc$$26);
    } else {
      return acc$$26;
    }
  }, new List(), xs$$128));
}
export function distinctBy(projection$$4, xs$$131, eq$$2) {
  const hashSet = createMutable([], comparerFromEqualityComparer(eq$$2));
  return filter(function f$$57($arg$$1) {
    return addToSet(projection$$4($arg$$1), hashSet);
  }, xs$$131);
}
export function distinct(xs$$133, eq$$3) {
  return distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$133, eq$$3);
}
export function exactlyOne(xs$$134) {
  if (length$$1(xs$$134) === 1) {
    return item$$1(0, xs$$134);
  } else if (length$$1(xs$$134) === 0) {
    throw new Error("The input sequence was empty\\nParameter name: list");
  } else {
    throw new Error("Input list too long\\nParameter name: list");
  }
}
export function groupBy(projection$$5, xs$$135, eq$$4) {
  const dict = createMutable$$1([], comparerFromEqualityComparer(eq$$4));
  iterate$$1(function (v$$2) {
    const key = projection$$5(v$$2);

    if (dict.has(key)) {
      dict.set(key, new List(v$$2, dict.get(key)));
    } else {
      dict.set(key, new List(v$$2, new List()));
    }
  }, xs$$135);
  return ofSeq(map$$1(function mapping(kv) {
    return [kv[0], reverse(kv[1])];
  }, dict));
}
export function countBy(projection$$6, xs$$137, eq$$5) {
  const dict$$1 = createMutable$$1([], comparerFromEqualityComparer(eq$$5));
  iterate(function (v$$3) {
    const key$$1 = projection$$6(v$$3);
    const matchValue$$16 = tryGetValue(dict$$1, key$$1, null);

    if (matchValue$$16[0]) {
      matchValue$$16[1].contents = matchValue$$16[1].contents + 1;
    } else {
      dict$$1.set(key$$1, new FSharpRef(1));
    }
  }, xs$$137);
  let result$$1 = new List();
  iterate$$1(function (group) {
    result$$1 = new List([group[0], group[1].contents], result$$1);
  }, dict$$1);
  return result$$1;
}
export function where(predicate$$2, xs$$138) {
  return filter(predicate$$2, xs$$138);
}
export function pairwise(xs$$139) {
  const inner = function inner(xs$$140, acc$$27, x1) {
    inner: while (true) {
      if (xs$$140.tail != null) {
        const xs$$141 = xs$$140.tail;
        const x2 = xs$$140.head;
        acc$$27.push([x1, x2]);
        const $acc$$27$$198 = acc$$27;
        xs$$140 = xs$$141;
        acc$$27 = $acc$$27$$198;
        x1 = x2;
        continue inner;
      } else {
        return ofArray(acc$$27);
      }

      break;
    }
  };

  var $target$$199, x1$$1, x2$$1, xs$$142;

  if (xs$$139.tail != null) {
    if (xs$$139.tail.tail != null) {
      $target$$199 = 1;
      x1$$1 = xs$$139.head;
      x2$$1 = xs$$139.tail.head;
      xs$$142 = xs$$139.tail.tail;
    } else {
      $target$$199 = 0;
    }
  } else {
    $target$$199 = 0;
  }

  switch ($target$$199) {
    case 0:
      {
        return new List();
      }

    case 1:
      {
        const acc$$28 = [];
        acc$$28.push([x1$$1, x2$$1]);
        return inner(xs$$142, acc$$28, x2$$1);
      }
  }
}
export function windowed(windowSize, source$$1) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  return ofSeq$$1(delay(function () {
    return map$$1(function (i$$35) {
      return slice$$1(i$$35 - windowSize, i$$35 - 1, source$$1);
    }, rangeNumber(windowSize, 1, length$$1(source$$1)));
  }));
}

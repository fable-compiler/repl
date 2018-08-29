import { defaultArg, value as value$$1, some } from "./Option.js";
import { FSharpRef, L } from "./Types.js";
import { iterate as iterate$$1, collect as collect$$1, scanBack as scanBack$$1, scan as scan$$1, foldBack2 as foldBack2$$1, fold2 as fold2$$1, fold as fold$$1, map as map$$1 } from "./Seq.js";
import { permute as permute$$1, ofList as ofList$$1, findIndexBack as findIndexBack$$1, tryFindIndexBack as tryFindIndexBack$$1, foldBack as foldBack$$1 } from "./Array.js";
import { ofList } from "./Array.js";
import { tryGetValue, addToSet, comparerFromEqualityComparer } from "./Util.js";
import { createMutable } from "./Set.js";
import { ofSeq as ofSeq$$1, length as length$$1 } from "./List.js";
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
        _arg1$$3 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }
  }
}
export function tryLast(_arg1$$4) {
  tryLast: while (true) {
    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return some(_arg1$$4.head);
      } else {
        _arg1$$4 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return null;
    }
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
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
export function equalsWith(comparer$$1, xs$$6, ys$$3) {
  return compareWith(comparer$$1, xs$$6, ys$$3) === 0;
}
export function foldIndexedAux($arg$$8, $arg$$9, $arg$$10, $arg$$11) {
  foldIndexedAux: while (true) {
    const f = $arg$$8,
          i = $arg$$9,
          acc = $arg$$10,
          _arg1$$5 = $arg$$11;

    if (_arg1$$5.tail != null) {
      const xs$$7 = _arg1$$5.tail;
      const x$$5 = _arg1$$5.head;
      $arg$$8 = f;
      $arg$$9 = i + 1;
      $arg$$10 = f(i, acc, x$$5);
      $arg$$11 = xs$$7;
      continue foldIndexedAux;
    } else {
      return acc;
    }
  }
}
export function foldIndexed(f$$1, state, xs$$8) {
  return foldIndexedAux(f$$1, 0, state, xs$$8);
}
export function fold($arg$$15, $arg$$16, $arg$$17) {
  fold: while (true) {
    const f$$2 = $arg$$15,
          state$$1 = $arg$$16,
          xs$$9 = $arg$$17;

    if (xs$$9.tail != null) {
      const t = xs$$9.tail;
      const h = xs$$9.head;
      $arg$$15 = f$$2;
      $arg$$16 = f$$2(state$$1, h);
      $arg$$17 = t;
      continue fold;
    } else {
      return state$$1;
    }
  }
}
export function reverse(xs$$10) {
  return fold(function (acc$$1, x$$6) {
    return L(x$$6, acc$$1);
  }, L(), xs$$10);
}
export function foldBack(f$$3, xs$$11, state$$2) {
  return fold(function (acc$$2, x$$7) {
    return f$$3(x$$7, acc$$2);
  }, state$$2, reverse(xs$$11));
}
export function toSeq(xs$$12) {
  return map$$1(function (x$$8) {
    return x$$8;
  }, xs$$12);
}
export function ofSeq(xs$$13) {
  return reverse(fold$$1(function (acc$$3, x$$9) {
    return L(x$$9, acc$$3);
  }, L(), xs$$13));
}
export function concat(lists) {
  return reverse(fold$$1(function (state$$3, xs$$15) {
    return fold(function f$$4(acc$$4, x$$10) {
      return L(x$$10, acc$$4);
    }, state$$3, xs$$15);
  }, L(), lists));
}
export function foldIndexed2Aux($arg$$21, $arg$$22, $arg$$23, $arg$$24, $arg$$25) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $arg$$21,
          i$$1 = $arg$$22,
          acc$$5 = $arg$$23,
          bs = $arg$$24,
          cs = $arg$$25;
    const matchValue$$2 = [bs, cs];
    var $target$$26, x$$11, xs$$17, y$$1, ys$$4;

    if (matchValue$$2[0].tail != null) {
      if (matchValue$$2[1].tail != null) {
        $target$$26 = 1;
        x$$11 = matchValue$$2[0].head;
        xs$$17 = matchValue$$2[0].tail;
        y$$1 = matchValue$$2[1].head;
        ys$$4 = matchValue$$2[1].tail;
      } else {
        $target$$26 = 2;
      }
    } else if (matchValue$$2[1].tail == null) {
      $target$$26 = 0;
    } else {
      $target$$26 = 2;
    }

    switch ($target$$26) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $arg$$21 = f$$5;
          $arg$$22 = i$$1 + 1;
          $arg$$23 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $arg$$24 = xs$$17;
          $arg$$25 = ys$$4;
          continue foldIndexed2Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}
export function foldIndexed2(f$$6, state$$4, xs$$18, ys$$5) {
  return foldIndexed2Aux(f$$6, 0, state$$4, xs$$18, ys$$5);
}
export function fold2(f$$7, state$$5, xs$$19, ys$$6) {
  return fold2$$1(f$$7, state$$5, xs$$19, ys$$6);
}
export function foldBack2(f$$8, xs$$20, ys$$7, state$$6) {
  return foldBack2$$1(f$$8, xs$$20, ys$$7, state$$6);
}
export function unfold(f$$9, state$$7) {
  const unfoldInner = function unfoldInner(acc$$6, state$$8) {
    unfoldInner: while (true) {
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        acc$$6 = L(x$$12, acc$$6);
        state$$8 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }
    }
  };

  return unfoldInner(L(), state$$7);
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
    var $target$$47, x$$13, xs$$21, y$$2, ys$$8, z, zs;

    if (matchValue$$4[0].tail != null) {
      if (matchValue$$4[1].tail != null) {
        if (matchValue$$4[2].tail != null) {
          $target$$47 = 1;
          x$$13 = matchValue$$4[0].head;
          xs$$21 = matchValue$$4[0].tail;
          y$$2 = matchValue$$4[1].head;
          ys$$8 = matchValue$$4[1].tail;
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
          $arg$$44 = xs$$21;
          $arg$$45 = ys$$8;
          $arg$$46 = zs;
          continue foldIndexed3Aux;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}
export function foldIndexed3(f$$11, seed, xs$$22, ys$$9, zs$$1) {
  return foldIndexed3Aux(f$$11, 0, seed, xs$$22, ys$$9, zs$$1);
}
export function fold3(f$$12, state$$10, xs$$23, ys$$10, zs$$2) {
  return foldIndexed3(function (_arg1$$6, acc$$8, x$$14, y$$3, z$$1) {
    return f$$12(acc$$8, x$$14, y$$3, z$$1);
  }, state$$10, xs$$23, ys$$10, zs$$2);
}
export function scan(f$$13, state$$11, xs$$24) {
  return ofSeq(scan$$1(f$$13, state$$11, xs$$24));
}
export function scanBack(f$$14, xs$$26, state$$12) {
  return ofSeq(scanBack$$1(f$$14, xs$$26, state$$12));
}
export function length(xs$$28) {
  return fold(function (acc$$9, _arg1$$7) {
    return acc$$9 + 1;
  }, 0, xs$$28);
}
export function append(xs$$29, ys$$11) {
  return fold(function (acc$$10, x$$15) {
    return L(x$$15, acc$$10);
  }, ys$$11, reverse(xs$$29));
}
export function collect(f$$15, xs$$30) {
  return ofSeq(collect$$1(f$$15, xs$$30));
}
export function map(f$$16, xs$$32) {
  return reverse(fold(function (acc$$11, x$$16) {
    return L(f$$16(x$$16), acc$$11);
  }, L(), xs$$32));
}
export function mapIndexed(f$$17, xs$$34) {
  return reverse(foldIndexed(function (i$$3, acc$$12, x$$17) {
    return L(f$$17(i$$3, x$$17), acc$$12);
  }, L(), xs$$34));
}
export function indexed(xs$$36) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$36);
}
export function map2(f$$18, xs$$37, ys$$12) {
  return reverse(fold2(function (acc$$13, x$$19, y$$4) {
    return L(f$$18(x$$19, y$$4), acc$$13);
  }, L(), xs$$37, ys$$12));
}
export function mapIndexed2(f$$19, xs$$39, ys$$13) {
  return reverse(foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return L(f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, L(), xs$$39, ys$$13));
}
export function map3(f$$20, xs$$41, ys$$14, zs$$3) {
  return reverse(fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return L(f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, L(), xs$$41, ys$$14, zs$$3));
}
export function mapIndexed3(f$$21, xs$$43, ys$$15, zs$$4) {
  return reverse(foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return L(f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, L(), xs$$43, ys$$15, zs$$4));
}
export function mapFold(f$$22, s, xs$$45) {
  const foldFn = function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [L(patternInput[0], tupledArg[0]), patternInput[1]];
  };

  const patternInput$$1 = fold(foldFn, [L(), s], xs$$45);
  return [reverse(patternInput$$1[0]), patternInput$$1[1]];
}
export function mapFoldBack(f$$23, xs$$46, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$23(v, s$$3);
  }, s$$2, reverse(xs$$46));
}
export function iterate(f$$24, xs$$47) {
  fold(function (unitVar0, x$$24) {
    f$$24(x$$24);
  }, null, xs$$47);
}
export function iterate2(f$$25, xs$$48, ys$$16) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, null, xs$$48, ys$$16);
}
export function iterateIndexed(f$$26, xs$$49) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, null, xs$$49);
}
export function iterateIndexed2(f$$27, xs$$50, ys$$17) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, null, xs$$50, ys$$17);
}
export function ofArray(xs$$51) {
  return foldBack$$1(function (x$$28, acc$$17) {
    return L(x$$28, acc$$17);
  }, xs$$51, L());
}
export function empty() {
  return L();
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
          i$$9 = $arg$$101,
          _arg1$$9 = $arg$$102;

    if (_arg1$$9.tail != null) {
      const xs$$52 = _arg1$$9.tail;
      const x$$29 = _arg1$$9.head;
      const result = f$$28(i$$9, x$$29);

      if (result == null) {
        $arg$$100 = f$$28;
        $arg$$101 = i$$9 + 1;
        $arg$$102 = xs$$52;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }
  }
}
export function tryPickIndexed(f$$29, xs$$53) {
  return tryPickIndexedAux(f$$29, 0, xs$$53);
}
export function tryPick(f$$30, xs$$54) {
  return tryPickIndexed(function (_arg1$$10, x$$30) {
    return f$$30(x$$30);
  }, xs$$54);
}
export function pick(f$$31, xs$$55) {
  const matchValue$$5 = tryPick(f$$31, xs$$55);

  if (matchValue$$5 != null) {
    const x$$31 = value$$1(matchValue$$5);
    return x$$31;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function tryFindIndexed(f$$32, xs$$56) {
  return tryPickIndexed(function (i$$10, x$$32) {
    return f$$32(i$$10, x$$32) ? some(x$$32) : null;
  }, xs$$56);
}
export function tryFind(f$$33, xs$$57) {
  return tryPickIndexed(function (_arg1$$11, x$$33) {
    return f$$33(x$$33) ? some(x$$33) : null;
  }, xs$$57);
}
export function findIndexed(f$$34, xs$$58) {
  const matchValue$$6 = tryFindIndexed(f$$34, xs$$58);

  if (matchValue$$6 != null) {
    const x$$34 = value$$1(matchValue$$6);
    return x$$34;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function find(f$$35, xs$$59) {
  return findIndexed(function (_arg1$$12, x$$35) {
    return f$$35(x$$35);
  }, xs$$59);
}
export function findBack(f$$36, xs$$60) {
  return find(f$$36, reverse(xs$$60));
}
export function tryFindBack(f$$37, xs$$63) {
  return tryFind(f$$37, reverse(xs$$63));
}
export function tryFindIndex(f$$38, xs$$66) {
  return tryPickIndexed(function (i$$11, x$$36) {
    return f$$38(x$$36) ? i$$11 : null;
  }, xs$$66);
}
export function tryFindIndexBack(f$$39, xs$$67) {
  return tryFindIndexBack$$1(f$$39, ofList(xs$$67, Array));
}
export function findIndex(f$$40, xs$$68) {
  const matchValue$$7 = tryFindIndex(f$$40, xs$$68);

  if (matchValue$$7 != null) {
    const x$$37 = matchValue$$7 | 0;
    return x$$37 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function findIndexBack(f$$41, xs$$69) {
  return findIndexBack$$1(f$$41, ofList(xs$$69, Array));
}
export function item(n, xs$$70) {
  return findIndexed(function (i$$12, _arg1$$13) {
    return n === i$$12;
  }, xs$$70);
}
export function tryItem(n$$1, xs$$71) {
  return tryFindIndexed(function (i$$13, _arg1$$14) {
    return n$$1 === i$$13;
  }, xs$$71);
}
export function filter(f$$42, xs$$72) {
  return foldBack(function (x$$38, acc$$18) {
    return f$$42(x$$38) ? L(x$$38, acc$$18) : acc$$18;
  }, xs$$72, L());
}
export function partition(f$$43, xs$$73) {
  return fold(function (tupledArg$$1, x$$39) {
    return f$$43(x$$39) ? [L(x$$39, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], L(x$$39, tupledArg$$1[1])];
  }, [L(), L()], reverse(xs$$73));
}
export function choose(f$$44, xs$$74) {
  return reverse(fold(function (acc$$19, x$$40) {
    const matchValue$$8 = f$$44(x$$40);

    if (matchValue$$8 == null) {
      return acc$$19;
    } else {
      const y$$10 = value$$1(matchValue$$8);
      return L(y$$10, acc$$19);
    }
  }, L(), xs$$74));
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
  let xs$$78 = L();

  for (let i$$14 = 1; i$$14 <= n$$2; i$$14++) {
    xs$$78 = L(f$$46(n$$2 - i$$14), xs$$78);
  }

  return xs$$78;
}
export function replicate(n$$3, x$$41) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$41;
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
  return fold(function (acc$$20, x$$42) {
    return acc$$20 ? f$$49(x$$42) : false;
  }, true, xs$$79);
}
export function forAll2(f$$50, xs$$80, ys$$18) {
  return fold2(function (acc$$21, x$$43, y$$11) {
    return acc$$21 ? f$$50(x$$43, y$$11) : false;
  }, true, xs$$80, ys$$18);
}
export function exists($arg$$146, $arg$$147) {
  exists: while (true) {
    const f$$51 = $arg$$146,
          _arg1$$18 = $arg$$147;

    if (_arg1$$18.tail != null) {
      const xs$$81 = _arg1$$18.tail;
      const x$$44 = _arg1$$18.head;

      if (f$$51(x$$44)) {
        return true;
      } else {
        $arg$$146 = f$$51;
        $arg$$147 = xs$$81;
        continue exists;
      }
    } else {
      return false;
    }
  }
}
export function exists2($arg$$148, $arg$$149, $arg$$150) {
  exists2: while (true) {
    const f$$52 = $arg$$148,
          bs$$2 = $arg$$149,
          cs$$2 = $arg$$150;
    const matchValue$$9 = [bs$$2, cs$$2];
    var $target$$151, x$$45, xs$$82, y$$12, ys$$19;

    if (matchValue$$9[0].tail != null) {
      if (matchValue$$9[1].tail != null) {
        $target$$151 = 1;
        x$$45 = matchValue$$9[0].head;
        xs$$82 = matchValue$$9[0].tail;
        y$$12 = matchValue$$9[1].head;
        ys$$19 = matchValue$$9[1].tail;
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
          if (f$$52(x$$45, y$$12)) {
            return true;
          } else {
            $arg$$148 = f$$52;
            $arg$$149 = xs$$82;
            $arg$$150 = ys$$19;
            continue exists2;
          }
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
        }
    }
  }
}
export function unzip(xs$$83) {
  return foldBack(function (tupledArg$$2, tupledArg$$3) {
    return [L(tupledArg$$2[0], tupledArg$$3[0]), L(tupledArg$$2[1], tupledArg$$3[1])];
  }, xs$$83, [L(), L()]);
}
export function unzip3(xs$$84) {
  return foldBack(function (tupledArg$$4, tupledArg$$5) {
    return [L(tupledArg$$4[0], tupledArg$$5[0]), L(tupledArg$$4[1], tupledArg$$5[1]), L(tupledArg$$4[2], tupledArg$$5[2])];
  }, xs$$84, [L(), L(), L()]);
}
export function zip(xs$$85, ys$$20) {
  return map2(function (x$$48, y$$15) {
    return [x$$48, y$$15];
  }, xs$$85, ys$$20);
}
export function zip3(xs$$86, ys$$21, zs$$5) {
  return map3(function (x$$49, y$$16, z$$5) {
    return [x$$49, y$$16, z$$5];
  }, xs$$86, ys$$21, zs$$5);
}
export function sort(xs$$87, comparer$$2) {
  var xs$$88;
  return ofArray((xs$$88 = ofList$$1(xs$$87, Array), (xs$$88.sort(function comparer$$3(x$$50, y$$17) {
    return comparer$$2.Compare(x$$50, y$$17);
  }), xs$$88)));
}
export function sortBy(projection, xs$$90, comparer$$4) {
  var xs$$91;
  return ofArray((xs$$91 = ofList$$1(xs$$90, Array), (xs$$91.sort(function comparer$$5(x$$51, y$$18) {
    return comparer$$4.Compare(projection(x$$51), projection(y$$18));
  }), xs$$91)));
}
export function sortDescending(xs$$93, comparer$$6) {
  var xs$$94;
  return ofArray((xs$$94 = ofList$$1(xs$$93, Array), (xs$$94.sort(function comparer$$7(x$$52, y$$19) {
    return comparer$$6.Compare(x$$52, y$$19) * -1;
  }), xs$$94)));
}
export function sortByDescending(projection$$1, xs$$96, comparer$$8) {
  var xs$$97;
  return ofArray((xs$$97 = ofList$$1(xs$$96, Array), (xs$$97.sort(function comparer$$9(x$$53, y$$20) {
    return comparer$$8.Compare(projection$$1(x$$53), projection$$1(y$$20)) * -1;
  }), xs$$97)));
}
export function sortWith(comparer$$10, xs$$99) {
  var xs$$100;
  return ofArray((xs$$100 = ofList$$1(xs$$99, Array), (xs$$100.sort(comparer$$10), xs$$100)));
}
export function sum(xs$$102) {
  return fold(function (x$$54, y$$21) {
    return x$$54 + y$$21;
  }, 0, xs$$102);
}
export function sumBy(f$$53, xs$$103) {
  return fold(function (acc$$22, x$$55) {
    return acc$$22 + f$$53(x$$55);
  }, 0, xs$$103);
}
export function maxBy(projection$$2, xs$$104, comparer$$12) {
  return reduce(function (x$$56, y$$22) {
    return comparer$$12.Compare(projection$$2(y$$22), projection$$2(x$$56)) > 0 ? y$$22 : x$$56;
  }, xs$$104);
}
export function max(li, comparer$$13) {
  return reduce(function (x$$57, y$$23) {
    return comparer$$13.Compare(y$$23, x$$57) > 0 ? y$$23 : x$$57;
  }, li);
}
export function minBy(projection$$3, xs$$105, comparer$$14) {
  return reduce(function (x$$58, y$$24) {
    return comparer$$14.Compare(projection$$3(y$$24), projection$$3(x$$58)) > 0 ? x$$58 : y$$24;
  }, xs$$105);
}
export function min(xs$$106, comparer$$15) {
  return reduce(function (x$$59, y$$25) {
    return comparer$$15.Compare(y$$25, x$$59) > 0 ? x$$59 : y$$25;
  }, xs$$106);
}
export function average(zs$$6) {
  const total = sum(zs$$6);
  return total / length$$1(zs$$6);
}
export function averageBy(g, zs$$7) {
  const total$$1 = sumBy(g, zs$$7);
  return total$$1 / length$$1(zs$$7);
}
export function permute(f$$54, xs$$107) {
  return ofArray(permute$$1(f$$54, ofList(xs$$107, Array)));
}
export function skip(i$$15, xs$$109) {
  const skipInner = function skipInner(i$$16, xs$$110) {
    skipInner: while (true) {
      const matchValue$$10 = [i$$16, xs$$110];

      if (matchValue$$10[0] === 0) {
        return xs$$110;
      } else if (matchValue$$10[1].tail != null) {
        const xs$$111 = matchValue$$10[1].tail;
        i$$16 = i$$16 - 1;
        xs$$110 = xs$$111;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }
    }
  };

  const matchValue$$11 = [i$$15, xs$$109];

  if (matchValue$$11[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$172, i$$19, xs$$113;

    if (matchValue$$11[0] === 0) {
      $target$$172 = 0;
    } else if (matchValue$$11[0] === 1) {
      if (matchValue$$11[1].tail != null) {
        $target$$172 = 1;
      } else {
        $target$$172 = 2;
        i$$19 = matchValue$$11[0];
        xs$$113 = matchValue$$11[1];
      }
    } else {
      $target$$172 = 2;
      i$$19 = matchValue$$11[0];
      xs$$113 = matchValue$$11[1];
    }

    switch ($target$$172) {
      case 0:
        {
          return xs$$109;
        }

      case 1:
        {
          const xs$$112 = matchValue$$11[1].tail;
          return xs$$112;
        }

      case 2:
        {
          return skipInner(i$$19, xs$$113);
        }
    }
  }
}
export function skipWhile($arg$$173, $arg$$174) {
  var t$$3, h$$3;

  skipWhile: while (true) {
    const predicate = $arg$$173,
          xs$$114 = $arg$$174;
    var $target$$175, h$$4, t$$4;

    if (xs$$114.tail != null) {
      if (t$$3 = xs$$114.tail, (h$$3 = xs$$114.head, predicate(h$$3))) {
        $target$$175 = 0;
        h$$4 = xs$$114.head;
        t$$4 = xs$$114.tail;
      } else {
        $target$$175 = 1;
      }
    } else {
      $target$$175 = 1;
    }

    switch ($target$$175) {
      case 0:
        {
          $arg$$173 = predicate;
          $arg$$174 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$114;
        }
    }
  }
}
export function takeSplitAux(error, i$$20, acc$$23, xs$$115) {
  takeSplitAux: while (true) {
    const matchValue$$12 = [i$$20, xs$$115];

    if (matchValue$$12[0] === 0) {
      return [reverse(acc$$23), xs$$115];
    } else if (matchValue$$12[1].tail != null) {
      const xs$$116 = matchValue$$12[1].tail;
      const x$$60 = matchValue$$12[1].head;
      error = error;
      i$$20 = i$$20 - 1;
      acc$$23 = L(x$$60, acc$$23);
      xs$$115 = xs$$116;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$23), xs$$115];
      }
    }
  }
}
export function take(i$$21, xs$$117) {
  const matchValue$$13 = [i$$21, xs$$117];

  if (matchValue$$13[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$176, i$$24, xs$$118;

    if (matchValue$$13[0] === 0) {
      $target$$176 = 0;
    } else if (matchValue$$13[0] === 1) {
      if (matchValue$$13[1].tail != null) {
        $target$$176 = 1;
      } else {
        $target$$176 = 2;
        i$$24 = matchValue$$13[0];
        xs$$118 = matchValue$$13[1];
      }
    } else {
      $target$$176 = 2;
      i$$24 = matchValue$$13[0];
      xs$$118 = matchValue$$13[1];
    }

    switch ($target$$176) {
      case 0:
        {
          return L();
        }

      case 1:
        {
          const x$$61 = matchValue$$13[1].head;
          return L(x$$61, L());
        }

      case 2:
        {
          return takeSplitAux(true, i$$24, L(), xs$$118)[0];
        }
    }
  }
}
export function takeWhile(predicate$$1, xs$$119) {
  if (xs$$119.tail != null) {
    if (xs$$119.tail.tail == null) {
      if (predicate$$1(xs$$119.head)) {
        return xs$$119;
      } else {
        return xs$$119.tail;
      }
    } else {
      if (!predicate$$1(xs$$119.head)) {
        return L();
      } else {
        return L(xs$$119.head, takeWhile(predicate$$1, xs$$119.tail));
      }
    }
  } else {
    return xs$$119;
  }
}
export function truncate(i$$25, xs$$121) {
  const matchValue$$14 = [i$$25, xs$$121];

  if (matchValue$$14[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$179, i$$28, xs$$122;

    if (matchValue$$14[0] === 0) {
      $target$$179 = 0;
    } else if (matchValue$$14[0] === 1) {
      if (matchValue$$14[1].tail != null) {
        $target$$179 = 1;
      } else {
        $target$$179 = 2;
        i$$28 = matchValue$$14[0];
        xs$$122 = matchValue$$14[1];
      }
    } else {
      $target$$179 = 2;
      i$$28 = matchValue$$14[0];
      xs$$122 = matchValue$$14[1];
    }

    switch ($target$$179) {
      case 0:
        {
          return L();
        }

      case 1:
        {
          const x$$64 = matchValue$$14[1].head;
          return L(x$$64, L());
        }

      case 2:
        {
          return takeSplitAux(false, i$$28, L(), xs$$122)[0];
        }
    }
  }
}
export function splitAt(i$$29, xs$$123) {
  const matchValue$$15 = [i$$29, xs$$123];

  if (matchValue$$15[0] < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$180, i$$32, xs$$125;

    if (matchValue$$15[0] === 0) {
      $target$$180 = 0;
    } else if (matchValue$$15[0] === 1) {
      if (matchValue$$15[1].tail != null) {
        $target$$180 = 1;
      } else {
        $target$$180 = 2;
        i$$32 = matchValue$$15[0];
        xs$$125 = matchValue$$15[1];
      }
    } else {
      $target$$180 = 2;
      i$$32 = matchValue$$15[0];
      xs$$125 = matchValue$$15[1];
    }

    switch ($target$$180) {
      case 0:
        {
          return [L(), xs$$123];
        }

      case 1:
        {
          const xs$$124 = matchValue$$15[1].tail;
          const x$$65 = matchValue$$15[1].head;
          return [L(x$$65, L()), xs$$124];
        }

      case 2:
        {
          return takeSplitAux(true, i$$32, L(), xs$$125);
        }
    }
  }
}
export function slice(lower, upper, xs$$126) {
  const lower$$1 = defaultArg(lower, -1) | 0;
  const upper$$1 = defaultArg(upper, -1) | 0;
  return reverse(foldIndexed(function f$$55(i$$33, acc$$24, x$$66) {
    if ((lower$$1 === -1 ? true : lower$$1 <= i$$33) ? upper$$1 === -1 ? true : i$$33 <= upper$$1 : false) {
      return L(x$$66, acc$$24);
    } else {
      return acc$$24;
    }
  }, L(), xs$$126));
}
export function distinctBy(projection$$4, xs$$129, eq$$2) {
  const hashSet = createMutable([], comparerFromEqualityComparer(eq$$2));
  return filter(function f$$56($arg$$1) {
    return addToSet(projection$$4($arg$$1), hashSet);
  }, xs$$129);
}
export function distinct(xs$$131, eq$$3) {
  return distinctBy(function (x$$67) {
    return x$$67;
  }, xs$$131, eq$$3);
}
export function groupBy(projection$$5, xs$$132, eq$$4) {
  const dict = createMutable$$1([], comparerFromEqualityComparer(eq$$4));
  iterate$$1(function (v$$2) {
    const key = projection$$5(v$$2);

    if (dict.has(key)) {
      dict.set(key, L(v$$2, dict.get(key)));
    } else {
      dict.set(key, L(v$$2, L()));
    }
  }, xs$$132);
  return ofSeq$$1(map$$1(function mapping(kv) {
    return [kv[0], reverse(kv[1])];
  }, dict));
}
export function countBy(projection$$6, xs$$133, eq$$5) {
  const dict$$1 = createMutable$$1([], comparerFromEqualityComparer(eq$$5));
  iterate(function (v$$3) {
    const key$$1 = projection$$6(v$$3);
    const matchValue$$16 = tryGetValue(dict$$1, key$$1, null);

    if (matchValue$$16[0]) {
      matchValue$$16[1].contents = matchValue$$16[1].contents + 1;
    } else {
      dict$$1.set(key$$1, new FSharpRef(1));
    }
  }, xs$$133);
  let result$$1 = L();
  iterate$$1(function (group) {
    result$$1 = L([group[0], group[1].contents], result$$1);
  }, dict$$1);
  return result$$1;
}
export function where(predicate$$2, xs$$134) {
  return filter(predicate$$2, xs$$134);
}
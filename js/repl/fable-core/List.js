import { defaultArg, value as value$$1, some } from "./Option.js";
import { FSharpRef, L } from "./Types.js";
import { tryGetValue, addToSet, comparerFromEqualityComparer, uncurry } from "./Util.js";
import { permute as permute$$1, ofList as ofList$$1, findIndexBack as findIndexBack$$1, tryFindIndexBack as tryFindIndexBack$$1, foldBack as foldBack$$1 } from "./Array.js";
import { ofList } from "./Array.js";
import { createMutable } from "./Set.js";
import { ofSeq as ofSeq$$1, foldBack as foldBack$$3, length as length$$1 } from "./List.js";
import { map as map$$1, iterate as iterate$$1, foldBack as foldBack$$2, unfold as unfold$$1 } from "./Seq.js";
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
        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            const matchValue$$1 = comparer(xs$$4.head, ys$$1.head) | 0;

            if (matchValue$$1 === 0) {
              xs$$4 = xs$$4.tail;
              ys$$1 = ys$$1.tail;
              continue loop;
            } else {
              const res = matchValue$$1 | 0;
              return res | 0;
            }
          } else {
            return 1;
          }
        } else if (ys$$1.tail == null) {
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
export function foldIndexed(f$$1, seed, xs$$8) {
  return foldIndexedAux(f$$1, 0, seed, xs$$8);
}
export function fold(f$$2, seed$$1, xs$$9) {
  return foldIndexed(function (_arg1$$6, acc$$1, x$$6) {
    return f$$2(acc$$1, x$$6);
  }, seed$$1, xs$$9);
}
export function reverse(xs$$10) {
  return fold(function (acc$$2, x$$7) {
    return L(x$$7, acc$$2);
  }, L(), xs$$10);
}
export function foldBack(f$$3, xs$$11, seed$$2) {
  return fold(function (acc$$3, x$$8) {
    return f$$3(x$$8, acc$$3);
  }, seed$$2, reverse(xs$$11));
}
export function foldIndexed2Aux($arg$$21, $arg$$22, $arg$$23, $arg$$24, $arg$$25) {
  foldIndexed2Aux: while (true) {
    const f$$4 = $arg$$21,
          i$$1 = $arg$$22,
          acc$$4 = $arg$$23,
          bs = $arg$$24,
          cs = $arg$$25;
    var $target$$26, x$$9, xs$$12, y$$1, ys$$4;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$26 = 1;
        x$$9 = bs.head;
        xs$$12 = bs.tail;
        y$$1 = cs.head;
        ys$$4 = cs.tail;
      } else {
        $target$$26 = 2;
      }
    } else if (cs.tail == null) {
      $target$$26 = 0;
    } else {
      $target$$26 = 2;
    }

    switch ($target$$26) {
      case 0:
        {
          return acc$$4;
          break;
        }

      case 1:
        {
          $arg$$21 = f$$4;
          $arg$$22 = i$$1 + 1;
          $arg$$23 = f$$4(i$$1, acc$$4, x$$9, y$$1);
          $arg$$24 = xs$$12;
          $arg$$25 = ys$$4;
          continue foldIndexed2Aux;
          break;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
          break;
        }
    }
  }
}
export function foldIndexed2(f$$5, seed$$3, xs$$13, ys$$5) {
  return foldIndexed2Aux(f$$5, 0, seed$$3, xs$$13, ys$$5);
}
export function fold2(f$$6, seed$$4, xs$$14, ys$$6) {
  return foldIndexed2(function (_arg1$$7, acc$$5, x$$10, y$$2) {
    return f$$6(acc$$5, x$$10, y$$2);
  }, seed$$4, xs$$14, ys$$6);
}
export function foldBack2(f$$7, xs$$15, ys$$7, seed$$5) {
  return fold2(function (acc$$6, x$$11, y$$3) {
    return f$$7(x$$11, y$$3, acc$$6);
  }, seed$$5, reverse(xs$$15), reverse(ys$$7));
}
export function unfold(f$$8, state) {
  const unfoldInner = function unfoldInner(acc$$7, state$$1) {
    unfoldInner: while (true) {
      const matchValue$$3 = f$$8(state$$1);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$2 = matchValue$$3[1];
        acc$$7 = L(x$$12, acc$$7);
        state$$1 = state$$2;
        continue unfoldInner;
      } else {
        return reverse(acc$$7);
      }
    }
  };

  return unfoldInner(L(), state);
}
export function foldIndexed3Aux($arg$$41, $arg$$42, $arg$$43, $arg$$44, $arg$$45, $arg$$46) {
  foldIndexed3Aux: while (true) {
    const f$$9 = $arg$$41,
          i$$2 = $arg$$42,
          acc$$8 = $arg$$43,
          bs$$1 = $arg$$44,
          cs$$1 = $arg$$45,
          ds = $arg$$46;
    var $target$$47, x$$13, xs$$16, y$$4, ys$$8, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$47 = 1;
          x$$13 = bs$$1.head;
          xs$$16 = bs$$1.tail;
          y$$4 = cs$$1.head;
          ys$$8 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$47 = 2;
        }
      } else {
        $target$$47 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
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
          return acc$$8;
          break;
        }

      case 1:
        {
          $arg$$41 = f$$9;
          $arg$$42 = i$$2 + 1;
          $arg$$43 = f$$9(i$$2, acc$$8, x$$13, y$$4, z);
          $arg$$44 = xs$$16;
          $arg$$45 = ys$$8;
          $arg$$46 = zs;
          continue foldIndexed3Aux;
          break;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
          break;
        }
    }
  }
}
export function foldIndexed3(f$$10, seed$$6, xs$$17, ys$$9, zs$$1) {
  return foldIndexed3Aux(f$$10, 0, seed$$6, xs$$17, ys$$9, zs$$1);
}
export function fold3(f$$11, seed$$7, xs$$18, ys$$10, zs$$2) {
  return foldIndexed3(function (_arg1$$8, acc$$9, x$$14, y$$5, z$$1) {
    return f$$11(acc$$9, x$$14, y$$5, z$$1);
  }, seed$$7, xs$$18, ys$$10, zs$$2);
}
export function scan(f$$12, seed$$8, xs$$19) {
  return reverse(fold(function (acc$$10, x$$15) {
    if (acc$$10.tail != null) {
      const y$$6 = acc$$10.head;
      return L(f$$12(y$$6, x$$15), acc$$10);
    } else {
      throw new Error("never");
    }
  }, L(seed$$8, L()), xs$$19));
}
export function scanBack(f$$13, xs$$21, seed$$9) {
  return reverse(scan(function (acc$$11, x$$16) {
    return f$$13(x$$16, acc$$11);
  }, seed$$9, reverse(xs$$21)));
}
export function length(xs$$23) {
  return fold(function (acc$$12, _arg1$$9) {
    return acc$$12 + 1;
  }, 0, xs$$23);
}
export function append(xs$$24, ys$$11) {
  return fold(function (acc$$13, x$$17) {
    return L(x$$17, acc$$13);
  }, ys$$11, reverse(xs$$24));
}
export function collect(f$$14, xs$$25) {
  return fold(function (acc$$14, x$$18) {
    return append(f$$14(x$$18), acc$$14);
  }, L(), reverse(xs$$25));
}
export function map(f$$15, xs$$26) {
  return reverse(fold(function (acc$$15, x$$19) {
    return L(f$$15(x$$19), acc$$15);
  }, L(), xs$$26));
}
export function mapIndexed(f$$16, xs$$28) {
  return reverse(foldIndexed(function (i$$3, acc$$16, x$$20) {
    return L(f$$16(i$$3, x$$20), acc$$16);
  }, L(), xs$$28));
}
export function indexed(xs$$30) {
  return mapIndexed(function (i$$4, x$$21) {
    return [i$$4, x$$21];
  }, xs$$30);
}
export function map2(f$$17, xs$$31, ys$$12) {
  return reverse(fold2(function (acc$$17, x$$22, y$$7) {
    return L(f$$17(x$$22, y$$7), acc$$17);
  }, L(), xs$$31, ys$$12));
}
export function mapIndexed2(f$$18, xs$$33, ys$$13) {
  return reverse(foldIndexed2(function (i$$5, acc$$18, x$$23, y$$8) {
    return L(f$$18(i$$5, x$$23, y$$8), acc$$18);
  }, L(), xs$$33, ys$$13));
}
export function map3(f$$19, xs$$35, ys$$14, zs$$3) {
  return reverse(fold3(function (acc$$19, x$$24, y$$9, z$$2) {
    return L(f$$19(x$$24, y$$9, z$$2), acc$$19);
  }, L(), xs$$35, ys$$14, zs$$3));
}
export function mapIndexed3(f$$20, xs$$37, ys$$15, zs$$4) {
  return reverse(foldIndexed3(function (i$$6, acc$$20, x$$25, y$$10, z$$3) {
    return L(f$$20(i$$6, x$$25, y$$10, z$$3), acc$$20);
  }, L(), xs$$37, ys$$15, zs$$4));
}
export function mapFold(f$$21, s, xs$$39) {
  const foldFn = function foldFn(tupledArg) {
    const nxs = tupledArg[0];
    const fs = tupledArg[1];
    return function (x$$26) {
      const patternInput = f$$21(fs, x$$26);
      const nx = patternInput[0];
      const fs$$1 = patternInput[1];
      return [L(nx, nxs), fs$$1];
    };
  };

  const patternInput$$1 = fold(uncurry(2, foldFn), [L(), s], xs$$39);
  const s$$1 = patternInput$$1[1];
  const nxs$$1 = patternInput$$1[0];
  return [reverse(nxs$$1), s$$1];
}
export function mapFoldBack(f$$22, xs$$40, s$$2) {
  return mapFold(function (s$$3, v) {
    return f$$22(v, s$$3);
  }, s$$2, reverse(xs$$40));
}
export function iterate(f$$23, xs$$41) {
  fold(function (unitVar0, x$$27) {
    f$$23(x$$27);
  }, null, xs$$41);
}
export function iterate2(f$$24, xs$$42, ys$$16) {
  fold2(function (unitVar0$$1, x$$28, y$$11) {
    f$$24(x$$28, y$$11);
  }, null, xs$$42, ys$$16);
}
export function iterateIndexed(f$$25, xs$$43) {
  foldIndexed(function (i$$7, unitVar1, x$$29) {
    f$$25(i$$7, x$$29);
  }, null, xs$$43);
}
export function iterateIndexed2(f$$26, xs$$44, ys$$17) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$30, y$$12) {
    f$$26(i$$8, x$$30, y$$12);
  }, null, xs$$44, ys$$17);
}
export function ofArray(xs$$45) {
  return foldBack$$1(function (x$$31, acc$$21) {
    return L(x$$31, acc$$21);
  }, xs$$45, L());
}
export function empty() {
  return L();
}
export function isEmpty(_arg1$$10) {
  if (_arg1$$10.tail == null) {
    return true;
  } else {
    return false;
  }
}
export function tryPickIndexedAux($arg$$100, $arg$$101, $arg$$102) {
  tryPickIndexedAux: while (true) {
    const f$$27 = $arg$$100,
          i$$9 = $arg$$101,
          _arg1$$11 = $arg$$102;

    if (_arg1$$11.tail != null) {
      const xs$$46 = _arg1$$11.tail;
      const x$$32 = _arg1$$11.head;
      const result = f$$27(i$$9, x$$32);

      if (result == null) {
        $arg$$100 = f$$27;
        $arg$$101 = i$$9 + 1;
        $arg$$102 = xs$$46;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return null;
    }
  }
}
export function tryPickIndexed(f$$28, xs$$47) {
  return tryPickIndexedAux(f$$28, 0, xs$$47);
}
export function tryPick(f$$29, xs$$48) {
  return tryPickIndexed(function (_arg1$$12, x$$33) {
    return f$$29(x$$33);
  }, xs$$48);
}
export function pick(f$$30, xs$$49) {
  const matchValue$$5 = tryPick(f$$30, xs$$49);

  if (matchValue$$5 != null) {
    const x$$34 = value$$1(matchValue$$5);
    return x$$34;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function tryFindIndexed(f$$31, xs$$50) {
  return tryPickIndexed(function (i$$10, x$$35) {
    return f$$31(i$$10, x$$35) ? some(x$$35) : null;
  }, xs$$50);
}
export function tryFind(f$$32, xs$$51) {
  return tryPickIndexed(function (_arg1$$13, x$$36) {
    return f$$32(x$$36) ? some(x$$36) : null;
  }, xs$$51);
}
export function findIndexed(f$$33, xs$$52) {
  const matchValue$$6 = tryFindIndexed(f$$33, xs$$52);

  if (matchValue$$6 != null) {
    const x$$37 = value$$1(matchValue$$6);
    return x$$37;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function find(f$$34, xs$$53) {
  return findIndexed(function (_arg1$$14, x$$38) {
    return f$$34(x$$38);
  }, xs$$53);
}
export function findBack(f$$35, xs$$54) {
  return find(f$$35, reverse(xs$$54));
}
export function tryFindBack(f$$36, xs$$57) {
  return tryFind(f$$36, reverse(xs$$57));
}
export function tryFindIndex(f$$37, xs$$60) {
  return tryPickIndexed(function (i$$11, x$$39) {
    return f$$37(x$$39) ? i$$11 : null;
  }, xs$$60);
}
export function tryFindIndexBack(f$$38, xs$$61) {
  return tryFindIndexBack$$1(f$$38, ofList(xs$$61, Array));
}
export function findIndex(f$$39, xs$$62) {
  const matchValue$$7 = tryFindIndex(f$$39, xs$$62);

  if (matchValue$$7 != null) {
    const x$$40 = matchValue$$7 | 0;
    return x$$40 | 0;
  } else {
    throw new Error("List did not contain any matching elements");
  }
}
export function findIndexBack(f$$40, xs$$63) {
  return findIndexBack$$1(f$$40, ofList(xs$$63, Array));
}
export function item(n, xs$$64) {
  return findIndexed(function (i$$12, _arg1$$15) {
    return n === i$$12;
  }, xs$$64);
}
export function tryItem(n$$1, xs$$65) {
  return tryFindIndexed(function (i$$13, _arg1$$16) {
    return n$$1 === i$$13;
  }, xs$$65);
}
export function filter(f$$41, xs$$66) {
  return foldBack(function (x$$41, acc$$22) {
    return f$$41(x$$41) ? L(x$$41, acc$$22) : acc$$22;
  }, xs$$66, L());
}
export function partition(f$$42, xs$$67) {
  return fold(uncurry(2, function (tupledArg$$1) {
    const lacc = tupledArg$$1[0];
    const racc = tupledArg$$1[1];
    return function (x$$42) {
      return f$$42(x$$42) ? [L(x$$42, lacc), racc] : [lacc, L(x$$42, racc)];
    };
  }), [L(), L()], reverse(xs$$67));
}
export function choose(f$$43, xs$$68) {
  return reverse(fold(function (acc$$23, x$$43) {
    const matchValue$$8 = f$$43(x$$43);

    if (matchValue$$8 == null) {
      return acc$$23;
    } else {
      const y$$13 = value$$1(matchValue$$8);
      return L(y$$13, acc$$23);
    }
  }, L(), xs$$68));
}
export function contains(value, list, eq) {
  const loop$$1 = function loop$$1(xs$$70) {
    loop$$1: while (true) {
      if (xs$$70.tail != null) {
        const v$$1 = xs$$70.head;
        const rest = xs$$70.tail;

        if (eq.Equals(value, v$$1)) {
          return true;
        } else {
          xs$$70 = rest;
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
    return filter(function f$$44(arg00) {
      return addToSet(arg00, cached);
    }, array$$2);
  }
}
export function initialize(n$$2, f$$45) {
  let xs$$72 = L();

  for (let i$$14 = 1; i$$14 <= n$$2; i$$14++) {
    xs$$72 = L(f$$45(n$$2 - i$$14), xs$$72);
  }

  return xs$$72;
}
export function replicate(n$$3, x$$44) {
  return initialize(n$$3, function (_arg1$$17) {
    return x$$44;
  });
}
export function reduce(f$$46, _arg1$$18) {
  if (_arg1$$18.tail != null) {
    const t = _arg1$$18.tail;
    const h = _arg1$$18.head;
    return fold(f$$46, h, t);
  } else {
    throw new Error("List was empty");
  }
}
export function reduceBack(f$$47, _arg1$$19) {
  if (_arg1$$19.tail != null) {
    const t$$1 = _arg1$$19.tail;
    const h$$1 = _arg1$$19.head;
    return foldBack(f$$47, t$$1, h$$1);
  } else {
    throw new Error("List was empty");
  }
}
export function forAll(f$$48, xs$$73) {
  return fold(function (acc$$24, x$$45) {
    return acc$$24 ? f$$48(x$$45) : false;
  }, true, xs$$73);
}
export function forAll2(f$$49, xs$$74, ys$$18) {
  return fold2(function (acc$$25, x$$46, y$$14) {
    return acc$$25 ? f$$49(x$$46, y$$14) : false;
  }, true, xs$$74, ys$$18);
}
export function exists($arg$$146, $arg$$147) {
  exists: while (true) {
    const f$$50 = $arg$$146,
          _arg1$$20 = $arg$$147;

    if (_arg1$$20.tail != null) {
      const xs$$75 = _arg1$$20.tail;
      const x$$47 = _arg1$$20.head;

      if (f$$50(x$$47)) {
        return true;
      } else {
        $arg$$146 = f$$50;
        $arg$$147 = xs$$75;
        continue exists;
      }
    } else {
      return false;
    }
  }
}
export function exists2($arg$$148, $arg$$149, $arg$$150) {
  exists2: while (true) {
    const f$$51 = $arg$$148,
          bs$$2 = $arg$$149,
          cs$$2 = $arg$$150;
    var $target$$151, x$$48, xs$$76, y$$15, ys$$19;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$151 = 1;
        x$$48 = bs$$2.head;
        xs$$76 = bs$$2.tail;
        y$$15 = cs$$2.head;
        ys$$19 = cs$$2.tail;
      } else {
        $target$$151 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$151 = 0;
    } else {
      $target$$151 = 2;
    }

    switch ($target$$151) {
      case 0:
        {
          return false;
          break;
        }

      case 1:
        {
          if (f$$51(x$$48, y$$15)) {
            return true;
          } else {
            $arg$$148 = f$$51;
            $arg$$149 = xs$$76;
            $arg$$150 = ys$$19;
            continue exists2;
          }

          break;
        }

      case 2:
        {
          throw new Error("Lists had different lengths");
          break;
        }
    }
  }
}
export function unzip(xs$$77) {
  return foldBack(uncurry(2, function (tupledArg$$2) {
    const x$$49 = tupledArg$$2[0];
    const y$$16 = tupledArg$$2[1];
    return function (tupledArg$$3) {
      const lacc$$1 = tupledArg$$3[0];
      const racc$$1 = tupledArg$$3[1];
      return [L(x$$49, lacc$$1), L(y$$16, racc$$1)];
    };
  }), xs$$77, [L(), L()]);
}
export function unzip3(xs$$78) {
  return foldBack(uncurry(2, function (tupledArg$$4) {
    const x$$50 = tupledArg$$4[0];
    const y$$17 = tupledArg$$4[1];
    const z$$4 = tupledArg$$4[2];
    return function (tupledArg$$5) {
      const lacc$$2 = tupledArg$$5[0];
      const macc = tupledArg$$5[1];
      const racc$$2 = tupledArg$$5[2];
      return [L(x$$50, lacc$$2), L(y$$17, macc), L(z$$4, racc$$2)];
    };
  }), xs$$78, [L(), L(), L()]);
}
export function zip(xs$$79, ys$$20) {
  return map2(function (x$$51, y$$18) {
    return [x$$51, y$$18];
  }, xs$$79, ys$$20);
}
export function zip3(xs$$80, ys$$21, zs$$5) {
  return map3(function (x$$52, y$$19, z$$5) {
    return [x$$52, y$$19, z$$5];
  }, xs$$80, ys$$21, zs$$5);
}
export function sort(xs$$81, comparer$$2) {
  var xs$$82;
  return ofArray((xs$$82 = ofList$$1(xs$$81, Array), (xs$$82.sort(function comparer$$3(x$$53, y$$20) {
    return comparer$$2.Compare(x$$53, y$$20);
  }), xs$$82)));
}
export function sortBy(projection, xs$$84, comparer$$4) {
  var xs$$85;
  return ofArray((xs$$85 = ofList$$1(xs$$84, Array), (xs$$85.sort(function comparer$$5(x$$54, y$$21) {
    return comparer$$4.Compare(projection(x$$54), projection(y$$21));
  }), xs$$85)));
}
export function sortDescending(xs$$87, comparer$$6) {
  var xs$$88;
  return ofArray((xs$$88 = ofList$$1(xs$$87, Array), (xs$$88.sort(function comparer$$7(x$$55, y$$22) {
    return comparer$$6.Compare(x$$55, y$$22) * -1;
  }), xs$$88)));
}
export function sortByDescending(projection$$1, xs$$90, comparer$$8) {
  var xs$$91;
  return ofArray((xs$$91 = ofList$$1(xs$$90, Array), (xs$$91.sort(function comparer$$9(x$$56, y$$23) {
    return comparer$$8.Compare(projection$$1(x$$56), projection$$1(y$$23)) * -1;
  }), xs$$91)));
}
export function sortWith(comparer$$10, xs$$93) {
  var xs$$94;
  return ofArray((xs$$94 = ofList$$1(xs$$93, Array), (xs$$94.sort(comparer$$10), xs$$94)));
}
export function sum(xs$$96) {
  return fold(function (x$$57, y$$24) {
    return x$$57 + y$$24;
  }, 0, xs$$96);
}
export function sumBy(f$$52, xs$$97) {
  return fold(function (acc$$26, x$$58) {
    return acc$$26 + f$$52(x$$58);
  }, 0, xs$$97);
}
export function maxBy(projection$$2, xs$$98, comparer$$12) {
  return reduce(function (x$$59, y$$25) {
    return comparer$$12.Compare(projection$$2(y$$25), projection$$2(x$$59)) > 0 ? y$$25 : x$$59;
  }, xs$$98);
}
export function max(li, comparer$$13) {
  return reduce(function (x$$60, y$$26) {
    return comparer$$13.Compare(y$$26, x$$60) > 0 ? y$$26 : x$$60;
  }, li);
}
export function minBy(projection$$3, xs$$99, comparer$$14) {
  return reduce(function (x$$61, y$$27) {
    return comparer$$14.Compare(projection$$3(y$$27), projection$$3(x$$61)) > 0 ? x$$61 : y$$27;
  }, xs$$99);
}
export function min(xs$$100, comparer$$15) {
  return reduce(function (x$$62, y$$28) {
    return comparer$$15.Compare(y$$28, x$$62) > 0 ? x$$62 : y$$28;
  }, xs$$100);
}
export function average(zs$$6) {
  const total = sum(zs$$6);
  return total / length$$1(zs$$6);
}
export function averageBy(g, zs$$7) {
  const total$$1 = sumBy(g, zs$$7);
  return total$$1 / length$$1(zs$$7);
}
export function permute(f$$53, xs$$101) {
  return ofArray(permute$$1(f$$53, ofList(xs$$101, Array)));
}
export function skip(i$$15, xs$$103) {
  var i$$17;

  const skipInner = function skipInner(i$$16, xs$$104) {
    skipInner: while (true) {
      if (i$$16 === 0) {
        return xs$$104;
      } else if (xs$$104.tail != null) {
        const xs$$105 = xs$$104.tail;
        i$$16 = i$$16 - 1;
        xs$$104 = xs$$105;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }
    }
  };

  if (i$$17 = i$$15 | 0, i$$17 < 0) {
    const i$$18 = i$$15 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$172, i$$19, xs$$107;

    if (i$$15 === 0) {
      $target$$172 = 0;
    } else if (i$$15 === 1) {
      if (xs$$103.tail != null) {
        $target$$172 = 1;
      } else {
        $target$$172 = 2;
        i$$19 = i$$15;
        xs$$107 = xs$$103;
      }
    } else {
      $target$$172 = 2;
      i$$19 = i$$15;
      xs$$107 = xs$$103;
    }

    switch ($target$$172) {
      case 0:
        {
          return xs$$103;
          break;
        }

      case 1:
        {
          const xs$$106 = xs$$103.tail;
          return xs$$106;
          break;
        }

      case 2:
        {
          return skipInner(i$$19, xs$$107);
          break;
        }
    }
  }
}
export function skipWhile($arg$$173, $arg$$174) {
  var t$$2, h$$2;

  skipWhile: while (true) {
    const predicate = $arg$$173,
          xs$$108 = $arg$$174;
    var $target$$175, h$$3, t$$3;

    if (xs$$108.tail != null) {
      if (t$$2 = xs$$108.tail, (h$$2 = xs$$108.head, predicate(h$$2))) {
        $target$$175 = 0;
        h$$3 = xs$$108.head;
        t$$3 = xs$$108.tail;
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
          $arg$$174 = t$$3;
          continue skipWhile;
          break;
        }

      case 1:
        {
          return xs$$108;
          break;
        }
    }
  }
}
export function takeSplitAux(error, i$$20, acc$$27, xs$$109) {
  takeSplitAux: while (true) {
    if (i$$20 === 0) {
      return [reverse(acc$$27), xs$$109];
    } else if (xs$$109.tail != null) {
      const xs$$110 = xs$$109.tail;
      const x$$63 = xs$$109.head;
      error = error;
      i$$20 = i$$20 - 1;
      acc$$27 = L(x$$63, acc$$27);
      xs$$109 = xs$$110;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$27), xs$$109];
      }
    }
  }
}
export function take(i$$21, xs$$111) {
  var i$$22;

  if (i$$22 = i$$21 | 0, i$$22 < 0) {
    const i$$23 = i$$21 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$176, i$$24, xs$$112;

    if (i$$21 === 0) {
      $target$$176 = 0;
    } else if (i$$21 === 1) {
      if (xs$$111.tail != null) {
        $target$$176 = 1;
      } else {
        $target$$176 = 2;
        i$$24 = i$$21;
        xs$$112 = xs$$111;
      }
    } else {
      $target$$176 = 2;
      i$$24 = i$$21;
      xs$$112 = xs$$111;
    }

    switch ($target$$176) {
      case 0:
        {
          return L();
          break;
        }

      case 1:
        {
          const x$$64 = xs$$111.head;
          return L(x$$64, L());
          break;
        }

      case 2:
        {
          return takeSplitAux(true, i$$24, L(), xs$$112)[0];
          break;
        }
    }
  }
}
export function takeWhile(predicate$$1, xs$$113) {
  if (xs$$113.tail != null) {
    if (xs$$113.tail.tail == null) {
      if (predicate$$1(xs$$113.head)) {
        return xs$$113;
      } else {
        return xs$$113.tail;
      }
    } else {
      if (!predicate$$1(xs$$113.head)) {
        return L();
      } else {
        return L(xs$$113.head, takeWhile(predicate$$1, xs$$113.tail));
      }
    }
  } else {
    return xs$$113;
  }
}
export function truncate(i$$25, xs$$115) {
  var i$$26;

  if (i$$26 = i$$25 | 0, i$$26 < 0) {
    const i$$27 = i$$25 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$179, i$$28, xs$$116;

    if (i$$25 === 0) {
      $target$$179 = 0;
    } else if (i$$25 === 1) {
      if (xs$$115.tail != null) {
        $target$$179 = 1;
      } else {
        $target$$179 = 2;
        i$$28 = i$$25;
        xs$$116 = xs$$115;
      }
    } else {
      $target$$179 = 2;
      i$$28 = i$$25;
      xs$$116 = xs$$115;
    }

    switch ($target$$179) {
      case 0:
        {
          return L();
          break;
        }

      case 1:
        {
          const x$$67 = xs$$115.head;
          return L(x$$67, L());
          break;
        }

      case 2:
        {
          return takeSplitAux(false, i$$28, L(), xs$$116)[0];
          break;
        }
    }
  }
}
export function splitAt(i$$29, xs$$117) {
  var i$$30;

  if (i$$30 = i$$29 | 0, i$$30 < 0) {
    const i$$31 = i$$29 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$180, i$$32, xs$$119;

    if (i$$29 === 0) {
      $target$$180 = 0;
    } else if (i$$29 === 1) {
      if (xs$$117.tail != null) {
        $target$$180 = 1;
      } else {
        $target$$180 = 2;
        i$$32 = i$$29;
        xs$$119 = xs$$117;
      }
    } else {
      $target$$180 = 2;
      i$$32 = i$$29;
      xs$$119 = xs$$117;
    }

    switch ($target$$180) {
      case 0:
        {
          return [L(), xs$$117];
          break;
        }

      case 1:
        {
          const xs$$118 = xs$$117.tail;
          const x$$68 = xs$$117.head;
          return [L(x$$68, L()), xs$$118];
          break;
        }

      case 2:
        {
          return takeSplitAux(true, i$$32, L(), xs$$119);
          break;
        }
    }
  }
}
export function toSeq(xs$$120) {
  return unfold$$1(function (_arg1$$21) {
    if (_arg1$$21.tail != null) {
      const xs$$121 = _arg1$$21.tail;
      const x$$69 = _arg1$$21.head;
      return [x$$69, xs$$121];
    } else {
      return null;
    }
  }, xs$$120);
}
export function ofSeq(xs$$122) {
  return foldBack$$2(function (x$$70, acc$$28) {
    return L(x$$70, acc$$28);
  }, xs$$122, L());
}
export function concat(lists) {
  return foldBack$$2(function (list$$2, state$$3) {
    return foldBack$$3(function folder(x$$71, acc$$29) {
      return L(x$$71, acc$$29);
    }, list$$2, state$$3);
  }, lists, L());
}
export function slice(lower, upper, xs$$123) {
  const lower$$1 = defaultArg(lower, -1) | 0;
  const upper$$1 = defaultArg(upper, -1) | 0;
  return reverse(foldIndexed(function f$$54(i$$33, acc$$30, x$$72) {
    if ((lower$$1 === -1 ? true : lower$$1 <= i$$33) ? upper$$1 === -1 ? true : i$$33 <= upper$$1 : false) {
      return L(x$$72, acc$$30);
    } else {
      return acc$$30;
    }
  }, L(), xs$$123));
}
export function distinctBy(projection$$4, xs$$126, eq$$2) {
  const hashSet = createMutable([], comparerFromEqualityComparer(eq$$2));
  return filter(function f$$55($arg$$1) {
    return addToSet(projection$$4($arg$$1), hashSet);
  }, xs$$126);
}
export function distinct(xs$$128, eq$$3) {
  return distinctBy(function (x$$73) {
    return x$$73;
  }, xs$$128, eq$$3);
}
export function groupBy(projection$$5, xs$$129, eq$$4) {
  const dict = createMutable$$1([], comparerFromEqualityComparer(eq$$4));
  iterate$$1(function (v$$2) {
    const key = projection$$5(v$$2);

    if (dict.has(key)) {
      dict.set(key, L(v$$2, dict.get(key)));
    } else {
      dict.set(key, L(v$$2, L()));
    }
  }, xs$$129);
  return ofSeq$$1(map$$1(function mapping(kv) {
    return [kv[0], reverse(kv[1])];
  }, dict));
}
export function countBy(projection$$6, xs$$130, eq$$5) {
  const dict$$1 = createMutable$$1([], comparerFromEqualityComparer(eq$$5));
  iterate(function (v$$3) {
    const key$$1 = projection$$6(v$$3);
    const matchValue$$16 = tryGetValue(dict$$1, key$$1, null);

    if (matchValue$$16[0]) {
      const prev = matchValue$$16[1];
      prev.contents = prev.contents + 1;
    } else {
      dict$$1.set(key$$1, new FSharpRef(1));
    }
  }, xs$$130);
  let result$$1 = L();
  iterate$$1(function (group) {
    result$$1 = L([group[0], group[1].contents], result$$1);
  }, dict$$1);
  return result$$1;
}
export function where(predicate$$2, xs$$131) {
  return filter(predicate$$2, xs$$131);
}
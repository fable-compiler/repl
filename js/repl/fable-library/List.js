import { defaultArg, value as value$$1, some } from "./Option.js";
import { List } from "./Types.js";
import { collect as collect$$1, scanBack as scanBack$$1, scan as scan$$1, foldBack2 as foldBack2$$1, fold2 as fold2$$1, fold as fold$$1, map as map$$1 } from "./Seq.js";
import { partialApply, getItemFromDict, addToDict, tryGetValue, addToSet, count, uncurry } from "./Util.js";
import { ofList } from "./Array.js";
import { permute as permute$$1, findIndexBack as findIndexBack$$1, tryFindIndexBack as tryFindIndexBack$$1 } from "./Array.js";
import { createMutable } from "./Set.js";
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
        const x$$2 = _arg1$$3.head;
        return x$$2;
      } else {
        const xs$$1 = _arg1$$3.tail;
        _arg1$$3 = xs$$1;
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
        const x$$3 = _arg1$$4.head;
        return some(x$$3);
      } else {
        const xs$$2 = _arg1$$4.tail;
        _arg1$$4 = xs$$2;
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
        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            const x$$4 = xs$$4.head;
            const xs$$5 = xs$$4.tail;
            const y = ys$$1.head;
            const ys$$2 = ys$$1.tail;
            const matchValue$$1 = comparer(x$$4, y) | 0;

            if (matchValue$$1 === 0) {
              xs$$4 = xs$$5;
              ys$$1 = ys$$2;
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

        break;
      }
    };

    return loop(xs$$3, ys) | 0;
  }
}
export function foldIndexedAux($arg$$5, $arg$$6, $arg$$7, $arg$$8) {
  foldIndexedAux: while (true) {
    const f = $arg$$5,
          i = $arg$$6,
          acc = $arg$$7,
          _arg1$$5 = $arg$$8;

    if (_arg1$$5.tail != null) {
      const xs$$6 = _arg1$$5.tail;
      const x$$5 = _arg1$$5.head;
      $arg$$5 = f;
      $arg$$6 = i + 1;
      $arg$$7 = f(i, acc, x$$5);
      $arg$$8 = xs$$6;
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
export function fold($arg$$12, $arg$$13, $arg$$14) {
  fold: while (true) {
    const f$$2 = $arg$$12,
          state$$1 = $arg$$13,
          xs$$8 = $arg$$14;

    if (xs$$8.tail != null) {
      const t = xs$$8.tail;
      const h = xs$$8.head;
      $arg$$12 = f$$2;
      $arg$$13 = f$$2(state$$1, h);
      $arg$$14 = t;
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
export function foldIndexed2Aux($arg$$18, $arg$$19, $arg$$20, $arg$$21, $arg$$22) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $arg$$18,
          i$$1 = $arg$$19,
          acc$$5 = $arg$$20,
          bs = $arg$$21,
          cs = $arg$$22;
    var $target$$23, x$$11, xs$$16, y$$1, ys$$3;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$23 = 1;
        x$$11 = bs.head;
        xs$$16 = bs.tail;
        y$$1 = cs.head;
        ys$$3 = cs.tail;
      } else {
        $target$$23 = 2;
      }
    } else if (cs.tail == null) {
      $target$$23 = 0;
    } else {
      $target$$23 = 2;
    }

    switch ($target$$23) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $arg$$18 = f$$5;
          $arg$$19 = i$$1 + 1;
          $arg$$20 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $arg$$21 = xs$$16;
          $arg$$22 = ys$$3;
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
        const $acc$$6$$38 = acc$$6;
        acc$$6 = new List(x$$12, $acc$$6$$38);
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
export function foldIndexed3Aux($arg$$39, $arg$$40, $arg$$41, $arg$$42, $arg$$43, $arg$$44) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $arg$$39,
          i$$2 = $arg$$40,
          acc$$7 = $arg$$41,
          bs$$1 = $arg$$42,
          cs$$1 = $arg$$43,
          ds = $arg$$44;
    var $target$$45, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$45 = 1;
          x$$13 = bs$$1.head;
          xs$$20 = bs$$1.tail;
          y$$2 = cs$$1.head;
          ys$$7 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$45 = 2;
        }
      } else {
        $target$$45 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
        $target$$45 = 0;
      } else {
        $target$$45 = 2;
      }
    } else {
      $target$$45 = 2;
    }

    switch ($target$$45) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $arg$$39 = f$$10;
          $arg$$40 = i$$2 + 1;
          $arg$$41 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $arg$$42 = xs$$20;
          $arg$$43 = ys$$7;
          $arg$$44 = zs;
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
  const foldFn = function foldFn(tupledArg) {
    const nxs = tupledArg[0];
    const fs = tupledArg[1];
    return function (x$$23) {
      const patternInput = f$$22(fs, x$$23);
      const nx = patternInput[0];
      const fs$$1 = patternInput[1];
      return [new List(nx, nxs), fs$$1];
    };
  };

  const patternInput$$1 = fold(uncurry(2, foldFn), [new List(), s], xs$$44);
  const s$$1 = patternInput$$1[1];
  const nxs$$1 = patternInput$$1[0];
  return [reverse(nxs$$1), s$$1];
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
export function tryPickIndexedAux($arg$$98, $arg$$99, $arg$$100) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $arg$$98,
          i$$10 = $arg$$99,
          _arg1$$9 = $arg$$100;

    if (_arg1$$9.tail != null) {
      const xs$$51 = _arg1$$9.tail;
      const x$$28 = _arg1$$9.head;
      const result = f$$28(i$$10, x$$28);

      if (result == null) {
        $arg$$98 = f$$28;
        $arg$$99 = i$$10 + 1;
        $arg$$100 = xs$$51;
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
  return fold(uncurry(2, function (tupledArg$$1) {
    const lacc = tupledArg$$1[0];
    const racc = tupledArg$$1[1];
    return function (x$$38) {
      return f$$43(x$$38) ? [new List(x$$38, lacc), racc] : [lacc, new List(x$$38, racc)];
    };
  }), [new List(), new List()], reverse(xs$$73));
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
    const cached = createMutable(itemsToExclude, eq$$1);
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
export function exists($arg$$144, $arg$$145) {
  exists: while (true) {
    const f$$51 = $arg$$144,
          _arg1$$18 = $arg$$145;

    if (_arg1$$18.tail != null) {
      const xs$$81 = _arg1$$18.tail;
      const x$$43 = _arg1$$18.head;

      if (f$$51(x$$43)) {
        return true;
      } else {
        $arg$$144 = f$$51;
        $arg$$145 = xs$$81;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
export function exists2($arg$$146, $arg$$147, $arg$$148) {
  exists2: while (true) {
    const f$$52 = $arg$$146,
          bs$$2 = $arg$$147,
          cs$$2 = $arg$$148;
    var $target$$149, x$$44, xs$$82, y$$12, ys$$18;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$149 = 1;
        x$$44 = bs$$2.head;
        xs$$82 = bs$$2.tail;
        y$$12 = cs$$2.head;
        ys$$18 = cs$$2.tail;
      } else {
        $target$$149 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$149 = 0;
    } else {
      $target$$149 = 2;
    }

    switch ($target$$149) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $arg$$146 = f$$52;
            $arg$$147 = xs$$82;
            $arg$$148 = ys$$18;
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
  return foldBack(uncurry(2, function (tupledArg$$2) {
    const x$$45 = tupledArg$$2[0];
    const y$$13 = tupledArg$$2[1];
    return function (tupledArg$$3) {
      const lacc$$1 = tupledArg$$3[0];
      const racc$$1 = tupledArg$$3[1];
      return [new List(x$$45, lacc$$1), new List(y$$13, racc$$1)];
    };
  }), xs$$83, [new List(), new List()]);
}
export function unzip3(xs$$84) {
  return foldBack(uncurry(2, function (tupledArg$$4) {
    const x$$46 = tupledArg$$4[0];
    const y$$14 = tupledArg$$4[1];
    const z$$4 = tupledArg$$4[2];
    return function (tupledArg$$5) {
      const lacc$$2 = tupledArg$$5[0];
      const macc = tupledArg$$5[1];
      const racc$$2 = tupledArg$$5[2];
      return [new List(x$$46, lacc$$2), new List(y$$14, macc), new List(z$$4, racc$$2)];
    };
  }), xs$$84, [new List(), new List(), new List()]);
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
  var comparer$$2, xs$$88;
  return ofArray((comparer$$2 = function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  }, (xs$$88 = ofList(xs$$87, Array), (xs$$88.sort(comparer$$2), xs$$88))));
}
export function sortBy(projection, xs$$90, comparer$$3) {
  var comparer$$4, xs$$91;
  return ofArray((comparer$$4 = function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  }, (xs$$91 = ofList(xs$$90, Array), (xs$$91.sort(comparer$$4), xs$$91))));
}
export function sortDescending(xs$$93, comparer$$5) {
  var comparer$$6, xs$$94;
  return ofArray((comparer$$6 = function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  }, (xs$$94 = ofList(xs$$93, Array), (xs$$94.sort(comparer$$6), xs$$94))));
}
export function sortByDescending(projection$$1, xs$$96, comparer$$7) {
  var comparer$$8, xs$$97;
  return ofArray((comparer$$8 = function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  }, (xs$$97 = ofList(xs$$96, Array), (xs$$97.sort(comparer$$8), xs$$97))));
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
  var i$$18;

  const skipInner = function skipInner(i$$17, xs$$112) {
    skipInner: while (true) {
      if (i$$17 === 0) {
        return xs$$112;
      } else if (xs$$112.tail != null) {
        const xs$$113 = xs$$112.tail;
        const $i$$17$$172 = i$$17;
        i$$17 = $i$$17$$172 - 1;
        xs$$112 = xs$$113;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  if (i$$18 = i$$16 | 0, i$$18 < 0) {
    const i$$19 = i$$16 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$173, i$$20, xs$$115;

    if (i$$16 === 0) {
      $target$$173 = 0;
    } else if (i$$16 === 1) {
      if (xs$$111.tail != null) {
        $target$$173 = 1;
      } else {
        $target$$173 = 2;
        i$$20 = i$$16;
        xs$$115 = xs$$111;
      }
    } else {
      $target$$173 = 2;
      i$$20 = i$$16;
      xs$$115 = xs$$111;
    }

    switch ($target$$173) {
      case 0:
        {
          return xs$$111;
        }

      case 1:
        {
          const xs$$114 = xs$$111.tail;
          return xs$$114;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$115);
        }
    }
  }
}
export function skipWhile($arg$$174, $arg$$175) {
  var t$$3, h$$3;

  skipWhile: while (true) {
    const predicate = $arg$$174,
          xs$$116 = $arg$$175;
    var $target$$176, h$$4, t$$4;

    if (xs$$116.tail != null) {
      if (t$$3 = xs$$116.tail, (h$$3 = xs$$116.head, predicate(h$$3))) {
        $target$$176 = 0;
        h$$4 = xs$$116.head;
        t$$4 = xs$$116.tail;
      } else {
        $target$$176 = 1;
      }
    } else {
      $target$$176 = 1;
    }

    switch ($target$$176) {
      case 0:
        {
          $arg$$174 = predicate;
          $arg$$175 = t$$4;
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
    if (i$$21 === 0) {
      return [reverse(acc$$25), xs$$117];
    } else if (xs$$117.tail != null) {
      const xs$$118 = xs$$117.tail;
      const x$$61 = xs$$117.head;
      const $acc$$25$$179 = acc$$25;
      const $error$$177 = error;
      const $i$$21$$178 = i$$21;
      error = $error$$177;
      i$$21 = $i$$21$$178 - 1;
      acc$$25 = new List(x$$61, $acc$$25$$179);
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
  var i$$23;

  if (i$$23 = i$$22 | 0, i$$23 < 0) {
    const i$$24 = i$$22 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$180, i$$25, xs$$120;

    if (i$$22 === 0) {
      $target$$180 = 0;
    } else if (i$$22 === 1) {
      if (xs$$119.tail != null) {
        $target$$180 = 1;
      } else {
        $target$$180 = 2;
        i$$25 = i$$22;
        xs$$120 = xs$$119;
      }
    } else {
      $target$$180 = 2;
      i$$25 = i$$22;
      xs$$120 = xs$$119;
    }

    switch ($target$$180) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          const x$$62 = xs$$119.head;
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
      const nil = xs$$121.tail;
      const x$$63 = xs$$121.head;

      if (predicate$$1(x$$63)) {
        return xs$$121;
      } else {
        return nil;
      }
    } else {
      const x$$64 = xs$$121.head;
      const xs$$122 = xs$$121.tail;

      if (!predicate$$1(x$$64)) {
        return new List();
      } else {
        return new List(x$$64, takeWhile(predicate$$1, xs$$122));
      }
    }
  } else {
    return xs$$121;
  }
}
export function truncate(i$$26, xs$$123) {
  var i$$27;

  if (i$$27 = i$$26 | 0, i$$27 < 0) {
    const i$$28 = i$$26 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$183, i$$29, xs$$124;

    if (i$$26 === 0) {
      $target$$183 = 0;
    } else if (i$$26 === 1) {
      if (xs$$123.tail != null) {
        $target$$183 = 1;
      } else {
        $target$$183 = 2;
        i$$29 = i$$26;
        xs$$124 = xs$$123;
      }
    } else {
      $target$$183 = 2;
      i$$29 = i$$26;
      xs$$124 = xs$$123;
    }

    switch ($target$$183) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          const x$$65 = xs$$123.head;
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
  var i$$31;

  if (i$$31 = i$$30 | 0, i$$31 < 0) {
    const i$$32 = i$$30 | 0;
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$184, i$$33, xs$$127;

    if (i$$30 === 0) {
      $target$$184 = 0;
    } else if (i$$30 === 1) {
      if (xs$$125.tail != null) {
        $target$$184 = 1;
      } else {
        $target$$184 = 2;
        i$$33 = i$$30;
        xs$$127 = xs$$125;
      }
    } else {
      $target$$184 = 2;
      i$$33 = i$$30;
      xs$$127 = xs$$125;
    }

    switch ($target$$184) {
      case 0:
        {
          return [new List(), xs$$125];
        }

      case 1:
        {
          const xs$$126 = xs$$125.tail;
          const x$$66 = xs$$125.head;
          return [new List(x$$66, new List()), xs$$126];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new List(), xs$$127);
        }
    }
  }
}
export function outOfRange() {
  throw new Error("Index out of range");
}
export function slice(lower, upper, xs$$128) {
  const lower$$1 = defaultArg(lower, 0) | 0;
  const hasUpper = upper != null;

  if (lower$$1 < 0) {
    return outOfRange();
  } else if (hasUpper ? upper < lower$$1 : false) {
    return new List();
  } else {
    let lastIndex = -1 | 0;
    const res$$2 = foldIndexed(function f$$56(i$$34, acc$$26, x$$67) {
      lastIndex = i$$34;

      if (lower$$1 <= i$$34 ? !hasUpper ? true : i$$34 <= upper : false) {
        return new List(x$$67, acc$$26);
      } else {
        return acc$$26;
      }
    }, new List(), xs$$128);

    if (lower$$1 > lastIndex + 1 ? true : hasUpper ? upper > lastIndex : false) {
      outOfRange();
    }

    return reverse(res$$2);
  }
}
export function distinctBy(projection$$4, xs$$130, eq$$2) {
  const hashSet = createMutable([], eq$$2);
  return filter(function f$$57($arg$$1) {
    return addToSet(projection$$4($arg$$1), hashSet);
  }, xs$$130);
}
export function distinct(xs$$132, eq$$3) {
  return distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$132, eq$$3);
}
export function exactlyOne(xs$$133) {
  if (xs$$133.tail != null) {
    if (xs$$133.tail.tail != null) {
      const x1 = xs$$133.head;
      const x2 = xs$$133.tail.head;
      const xs$$134 = xs$$133.tail.tail;
      throw new Error("Input list too long\\nParameter name: list");
    } else {
      const x$$69 = xs$$133.head;
      return x$$69;
    }
  } else {
    throw new Error("The input sequence was empty\\nParameter name: list");
  }
}
export function groupBy(projection$$5, xs$$135, eq$$4) {
  const dict = createMutable$$1([], eq$$4);
  let keys = new List();
  iterate(function f$$58(v$$2) {
    const key = projection$$5(v$$2);
    const matchValue$$16 = tryGetValue(dict, key, null);

    if (matchValue$$16[0]) {
      const prev = matchValue$$16[1];
      dict.set(key, new List(v$$2, prev));
    } else {
      addToDict(dict, key, new List(v$$2, new List()));
      keys = new List(key, keys);
    }
  }, xs$$135);
  let result$$1 = new List();
  iterate(function f$$59(key$$1) {
    result$$1 = new List([key$$1, reverse(getItemFromDict(dict, key$$1))], result$$1);
  }, keys);
  return result$$1;
}
export function countBy(projection$$6, xs$$138, eq$$5) {
  const dict$$1 = createMutable$$1([], eq$$5);
  let keys$$1 = new List();
  iterate(function f$$60(v$$3) {
    const key$$2 = projection$$6(v$$3);
    const matchValue$$17 = tryGetValue(dict$$1, key$$2, 0);

    if (matchValue$$17[0]) {
      const prev$$1 = matchValue$$17[1] | 0;
      dict$$1.set(key$$2, prev$$1 + 1);
    } else {
      dict$$1.set(key$$2, 1);
      keys$$1 = new List(key$$2, keys$$1);
    }
  }, xs$$138);
  let result$$2 = new List();
  iterate(function f$$61(key$$3) {
    result$$2 = new List([key$$3, getItemFromDict(dict$$1, key$$3)], result$$2);
  }, keys$$1);
  return result$$2;
}
export function where(predicate$$2, xs$$141) {
  return filter(predicate$$2, xs$$141);
}
export function pairwise(xs$$142) {
  const inner = function inner(xs$$143, acc$$27, x1$$1) {
    inner: while (true) {
      if (xs$$143.tail != null) {
        const xs$$144 = xs$$143.tail;
        const x2$$1 = xs$$143.head;
        let copyOfStruct = acc$$27;
        copyOfStruct.push([x1$$1, x2$$1]);
        const $acc$$27$$196 = acc$$27;
        xs$$143 = xs$$144;
        acc$$27 = $acc$$27$$196;
        x1$$1 = x2$$1;
        continue inner;
      } else {
        return ofArray(acc$$27);
      }

      break;
    }
  };

  var $target$$197, x1$$2, x2$$2, xs$$145;

  if (xs$$142.tail != null) {
    if (xs$$142.tail.tail != null) {
      $target$$197 = 1;
      x1$$2 = xs$$142.head;
      x2$$2 = xs$$142.tail.head;
      xs$$145 = xs$$142.tail.tail;
    } else {
      $target$$197 = 0;
    }
  } else {
    $target$$197 = 0;
  }

  switch ($target$$197) {
    case 0:
      {
        return new List();
      }

    case 1:
      {
        const acc$$28 = [];
        acc$$28.push([x1$$2, x2$$2]);
        return function (arg00$$2) {
          const clo1 = partialApply(2, inner, [arg00$$2]);
          return function (arg10) {
            const clo2 = clo1(arg10);
            return function (arg20) {
              return clo2(arg20);
            };
          };
        }(xs$$145)(acc$$28)(x2$$2);
      }
  }
}
export function windowed(windowSize, source) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  let res$$3 = new List();

  for (let i$$35 = length(source); i$$35 >= windowSize; i$$35--) {
    res$$3 = new List(slice(i$$35 - windowSize, i$$35 - 1, source), res$$3);
  }

  return res$$3;
}
import { defaultArg, value as value$$1, some } from "./Option.js";
import { List } from "./Types.js";
import { transpose as transpose$$1, pairwise as pairwise$$1, collect as collect$$1, scanBack as scanBack$$1, scan as scan$$1, foldBack2 as foldBack2$$1, fold2 as fold2$$1, fold as fold$$1, map as map$$1 } from "./Seq.js";
import { getItemFromDict, addToDict, tryGetValue, addToSet, count } from "./Util.js";
import { ofList } from "./Array.js";
import { splitInto as splitInto$$1, chunkBySize as chunkBySize$$1, permute as permute$$1, findIndexBack as findIndexBack$$1, tryFindIndexBack as tryFindIndexBack$$1 } from "./Array.js";
import { createMutable } from "./Set.js";
import { createMutable as createMutable$$1 } from "./Map.js";
export function head(_arg1) {
  if (_arg1.tail != null) {
    return _arg1.head;
  } else {
    throw new Error("List was empty");
  }
}
export function tryHead(_arg1$$1) {
  if (_arg1$$1.tail != null) {
    return some(_arg1$$1.head);
  } else {
    return undefined;
  }
}
export function tail(_arg1$$2) {
  if (_arg1$$2.tail != null) {
    return _arg1$$2.tail;
  } else {
    throw new Error("List was empty");
  }
}
export function last($_arg1$$3$$5) {
  last: while (true) {
    const _arg1$$3 = $_arg1$$3$$5;

    if (_arg1$$3.tail != null) {
      if (_arg1$$3.tail.tail == null) {
        return _arg1$$3.head;
      } else {
        $_arg1$$3$$5 = _arg1$$3.tail;
        continue last;
      }
    } else {
      throw new Error("List was empty");
    }

    break;
  }
}
export function tryLast($_arg1$$4$$6) {
  tryLast: while (true) {
    const _arg1$$4 = $_arg1$$4$$6;

    if (_arg1$$4.tail != null) {
      if (_arg1$$4.tail.tail == null) {
        return some(_arg1$$4.head);
      } else {
        $_arg1$$4$$6 = _arg1$$4.tail;
        continue tryLast;
      }
    } else {
      return undefined;
    }

    break;
  }
}
export function compareWith(comparer, xs$$3, ys) {
  if (xs$$3 === ys) {
    return 0;
  } else {
    const loop = function loop($xs$$4$$10, $ys$$1$$11) {
      loop: while (true) {
        const xs$$4 = $xs$$4$$10,
              ys$$1 = $ys$$1$$11;

        if (xs$$4.tail != null) {
          if (ys$$1.tail != null) {
            const matchValue$$1 = comparer(xs$$4.head, ys$$1.head) | 0;

            if (matchValue$$1 === 0) {
              $xs$$4$$10 = xs$$4.tail;
              $ys$$1$$11 = ys$$1.tail;
              continue loop;
            } else {
              return matchValue$$1 | 0;
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
export function foldIndexedAux($f$$12, $i$$13, $acc$$14, $_arg1$$5$$15) {
  foldIndexedAux: while (true) {
    const f = $f$$12,
          i = $i$$13,
          acc = $acc$$14,
          _arg1$$5 = $_arg1$$5$$15;

    if (_arg1$$5.tail != null) {
      $f$$12 = f;
      $i$$13 = i + 1;
      $acc$$14 = f(i, acc, _arg1$$5.head);
      $_arg1$$5$$15 = _arg1$$5.tail;
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
export function fold($f$$2$$19, $state$$1$$20, $xs$$8$$21) {
  fold: while (true) {
    const f$$2 = $f$$2$$19,
          state$$1 = $state$$1$$20,
          xs$$8 = $xs$$8$$21;

    if (xs$$8.tail != null) {
      $f$$2$$19 = f$$2;
      $state$$1$$20 = f$$2(state$$1, xs$$8.head);
      $xs$$8$$21 = xs$$8.tail;
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
  const xs$$13 = fold$$1(function (acc$$3, x$$9) {
    return new List(x$$9, acc$$3);
  }, new List(), xs$$12);
  return reverse(xs$$13);
}
export function concat(lists) {
  const xs$$15 = fold$$1(function (state$$3, xs$$14) {
    return fold(function f$$4(acc$$4, x$$10) {
      return new List(x$$10, acc$$4);
    }, state$$3, xs$$14);
  }, new List(), lists);
  return reverse(xs$$15);
}
export function foldIndexed2Aux($f$$5$$31, $i$$1$$32, $acc$$5$$33, $bs$$34, $cs$$35) {
  foldIndexed2Aux: while (true) {
    const f$$5 = $f$$5$$31,
          i$$1 = $i$$1$$32,
          acc$$5 = $acc$$5$$33,
          bs = $bs$$34,
          cs = $cs$$35;
    var $target$$36, x$$11, xs$$16, y$$1, ys$$3;

    if (bs.tail != null) {
      if (cs.tail != null) {
        $target$$36 = 1;
        x$$11 = bs.head;
        xs$$16 = bs.tail;
        y$$1 = cs.head;
        ys$$3 = cs.tail;
      } else {
        $target$$36 = 2;
      }
    } else if (cs.tail == null) {
      $target$$36 = 0;
    } else {
      $target$$36 = 2;
    }

    switch ($target$$36) {
      case 0:
        {
          return acc$$5;
        }

      case 1:
        {
          $f$$5$$31 = f$$5;
          $i$$1$$32 = i$$1 + 1;
          $acc$$5$$33 = f$$5(i$$1, acc$$5, x$$11, y$$1);
          $bs$$34 = xs$$16;
          $cs$$35 = ys$$3;
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
  const unfoldInner = function unfoldInner($acc$$6$$51, $state$$8$$52) {
    unfoldInner: while (true) {
      const acc$$6 = $acc$$6$$51,
            state$$8 = $state$$8$$52;
      const matchValue$$3 = f$$9(state$$8);

      if (matchValue$$3 != null) {
        const x$$12 = matchValue$$3[0];
        const state$$9 = matchValue$$3[1];
        $acc$$6$$51 = new List(x$$12, acc$$6);
        $state$$8$$52 = state$$9;
        continue unfoldInner;
      } else {
        return reverse(acc$$6);
      }

      break;
    }
  };

  return unfoldInner(new List(), state$$7);
}
export function foldIndexed3Aux($f$$10$$53, $i$$2$$54, $acc$$7$$55, $bs$$1$$56, $cs$$1$$57, $ds$$58) {
  foldIndexed3Aux: while (true) {
    const f$$10 = $f$$10$$53,
          i$$2 = $i$$2$$54,
          acc$$7 = $acc$$7$$55,
          bs$$1 = $bs$$1$$56,
          cs$$1 = $cs$$1$$57,
          ds = $ds$$58;
    var $target$$59, x$$13, xs$$20, y$$2, ys$$7, z, zs;

    if (bs$$1.tail != null) {
      if (cs$$1.tail != null) {
        if (ds.tail != null) {
          $target$$59 = 1;
          x$$13 = bs$$1.head;
          xs$$20 = bs$$1.tail;
          y$$2 = cs$$1.head;
          ys$$7 = cs$$1.tail;
          z = ds.head;
          zs = ds.tail;
        } else {
          $target$$59 = 2;
        }
      } else {
        $target$$59 = 2;
      }
    } else if (cs$$1.tail == null) {
      if (ds.tail == null) {
        $target$$59 = 0;
      } else {
        $target$$59 = 2;
      }
    } else {
      $target$$59 = 2;
    }

    switch ($target$$59) {
      case 0:
        {
          return acc$$7;
        }

      case 1:
        {
          $f$$10$$53 = f$$10;
          $i$$2$$54 = i$$2 + 1;
          $acc$$7$$55 = f$$10(i$$2, acc$$7, x$$13, y$$2, z);
          $bs$$1$$56 = xs$$20;
          $cs$$1$$57 = ys$$7;
          $ds$$58 = zs;
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
  const xs$$24 = scan$$1(f$$13, state$$11, xs$$23);
  return ofSeq(xs$$24);
}
export function scanBack(f$$14, xs$$25, state$$12) {
  const xs$$26 = scanBack$$1(f$$14, xs$$25, state$$12);
  return ofSeq(xs$$26);
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
  const xs$$30 = collect$$1(f$$15, xs$$29);
  return ofSeq(xs$$30);
}
export function map(f$$16, xs$$31) {
  const xs$$32 = fold(function (acc$$11, x$$16) {
    return new List(f$$16(x$$16), acc$$11);
  }, new List(), xs$$31);
  return reverse(xs$$32);
}
export function mapIndexed(f$$17, xs$$33) {
  const xs$$34 = foldIndexed(function (i$$3, acc$$12, x$$17) {
    return new List(f$$17(i$$3, x$$17), acc$$12);
  }, new List(), xs$$33);
  return reverse(xs$$34);
}
export function indexed(xs$$35) {
  return mapIndexed(function (i$$4, x$$18) {
    return [i$$4, x$$18];
  }, xs$$35);
}
export function map2(f$$18, xs$$36, ys$$11) {
  const xs$$37 = fold2(function (acc$$13, x$$19, y$$4) {
    return new List(f$$18(x$$19, y$$4), acc$$13);
  }, new List(), xs$$36, ys$$11);
  return reverse(xs$$37);
}
export function mapIndexed2(f$$19, xs$$38, ys$$12) {
  const xs$$39 = foldIndexed2(function (i$$5, acc$$14, x$$20, y$$5) {
    return new List(f$$19(i$$5, x$$20, y$$5), acc$$14);
  }, new List(), xs$$38, ys$$12);
  return reverse(xs$$39);
}
export function map3(f$$20, xs$$40, ys$$13, zs$$3) {
  const xs$$41 = fold3(function (acc$$15, x$$21, y$$6, z$$2) {
    return new List(f$$20(x$$21, y$$6, z$$2), acc$$15);
  }, new List(), xs$$40, ys$$13, zs$$3);
  return reverse(xs$$41);
}
export function mapIndexed3(f$$21, xs$$42, ys$$14, zs$$4) {
  const xs$$43 = foldIndexed3(function (i$$6, acc$$16, x$$22, y$$7, z$$3) {
    return new List(f$$21(i$$6, x$$22, y$$7, z$$3), acc$$16);
  }, new List(), xs$$42, ys$$14, zs$$4);
  return reverse(xs$$43);
}
export function mapFold(f$$22, s, xs$$44) {
  const patternInput$$1 = fold(function foldFn(tupledArg, x$$23) {
    const patternInput = f$$22(tupledArg[1], x$$23);
    return [new List(patternInput[0], tupledArg[0]), patternInput[1]];
  }, [new List(), s], xs$$44);
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
  }, void null, xs$$46);
}
export function iterate2(f$$25, xs$$47, ys$$15) {
  fold2(function (unitVar0$$1, x$$25, y$$8) {
    f$$25(x$$25, y$$8);
  }, void null, xs$$47, ys$$15);
}
export function iterateIndexed(f$$26, xs$$48) {
  foldIndexed(function (i$$7, unitVar1, x$$26) {
    f$$26(i$$7, x$$26);
  }, void null, xs$$48);
}
export function iterateIndexed2(f$$27, xs$$49, ys$$16) {
  foldIndexed2(function (i$$8, unitVar1$$1, x$$27, y$$9) {
    f$$27(i$$8, x$$27, y$$9);
  }, void null, xs$$49, ys$$16);
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
export function tryPickIndexedAux($f$$28$$120, $i$$10$$121, $_arg1$$9$$122) {
  tryPickIndexedAux: while (true) {
    const f$$28 = $f$$28$$120,
          i$$10 = $i$$10$$121,
          _arg1$$9 = $_arg1$$9$$122;

    if (_arg1$$9.tail != null) {
      const result = f$$28(i$$10, _arg1$$9.head);

      if (result == null) {
        $f$$28$$120 = f$$28;
        $i$$10$$121 = i$$10 + 1;
        $_arg1$$9$$122 = _arg1$$9.tail;
        continue tryPickIndexedAux;
      } else {
        return result;
      }
    } else {
      return undefined;
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
    return f$$32(i$$11, x$$31) ? some(x$$31) : undefined;
  }, xs$$55);
}
export function tryFind(f$$33, xs$$56) {
  return tryPickIndexed(function (_arg1$$11, x$$32) {
    return f$$33(x$$32) ? some(x$$32) : undefined;
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
  let xs$$61;
  xs$$61 = reverse(xs$$59);
  return find(f$$36, xs$$61);
}
export function tryFindBack(f$$37, xs$$62) {
  let xs$$64;
  xs$$64 = reverse(xs$$62);
  return tryFind(f$$37, xs$$64);
}
export function tryFindIndex(f$$38, xs$$65) {
  return tryPickIndexed(function (i$$12, x$$35) {
    return f$$38(x$$35) ? i$$12 : undefined;
  }, xs$$65);
}
export function tryFindIndexBack(f$$39, xs$$66) {
  const array = ofList(xs$$66, Array);
  return tryFindIndexBack$$1(f$$39, array);
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
  const array$$1 = ofList(xs$$68, Array);
  return findIndexBack$$1(f$$41, array$$1) | 0;
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
  const xs$$72 = fold(function (acc$$17, x$$37) {
    return f$$42(x$$37) ? new List(x$$37, acc$$17) : acc$$17;
  }, new List(), xs$$71);
  return reverse(xs$$72);
}
export function partition(f$$43, xs$$73) {
  return fold(function (tupledArg$$1, x$$38) {
    return f$$43(x$$38) ? [new List(x$$38, tupledArg$$1[0]), tupledArg$$1[1]] : [tupledArg$$1[0], new List(x$$38, tupledArg$$1[1])];
  }, [new List(), new List()], reverse(xs$$73));
}
export function choose(f$$44, xs$$74) {
  const xs$$75 = fold(function (acc$$18, x$$39) {
    const matchValue$$8 = f$$44(x$$39);

    if (matchValue$$8 == null) {
      return acc$$18;
    } else {
      const y$$10 = value$$1(matchValue$$8);
      return new List(y$$10, acc$$18);
    }
  }, new List(), xs$$74);
  return reverse(xs$$75);
}
export function contains(value, list, eq) {
  const loop$$1 = function loop$$1($xs$$76$$162) {
    loop$$1: while (true) {
      const xs$$76 = $xs$$76$$162;

      if (xs$$76.tail != null) {
        if (eq.Equals(value, xs$$76.head)) {
          return true;
        } else {
          $xs$$76$$162 = xs$$76.tail;
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

  for (let i$$15 = 0; i$$15 <= n$$2 - 1; i$$15++) {
    xs$$78 = new List(f$$46(i$$15), xs$$78);
  }

  return reverse(xs$$78);
}
export function replicate(n$$3, x$$40) {
  return initialize(n$$3, function (_arg1$$15) {
    return x$$40;
  });
}
export function reduce(f$$47, _arg1$$16) {
  if (_arg1$$16.tail != null) {
    return fold(f$$47, _arg1$$16.head, _arg1$$16.tail);
  } else {
    throw new Error("List was empty");
  }
}
export function reduceBack(f$$48, _arg1$$17) {
  if (_arg1$$17.tail != null) {
    return foldBack(f$$48, _arg1$$17.tail, _arg1$$17.head);
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
export function exists($f$$51$$180, $_arg1$$18$$181) {
  exists: while (true) {
    const f$$51 = $f$$51$$180,
          _arg1$$18 = $_arg1$$18$$181;

    if (_arg1$$18.tail != null) {
      if (f$$51(_arg1$$18.head)) {
        return true;
      } else {
        $f$$51$$180 = f$$51;
        $_arg1$$18$$181 = _arg1$$18.tail;
        continue exists;
      }
    } else {
      return false;
    }

    break;
  }
}
export function exists2($f$$52$$182, $bs$$2$$183, $cs$$2$$184) {
  exists2: while (true) {
    const f$$52 = $f$$52$$182,
          bs$$2 = $bs$$2$$183,
          cs$$2 = $cs$$2$$184;
    var $target$$185, x$$44, xs$$82, y$$12, ys$$18;

    if (bs$$2.tail != null) {
      if (cs$$2.tail != null) {
        $target$$185 = 1;
        x$$44 = bs$$2.head;
        xs$$82 = bs$$2.tail;
        y$$12 = cs$$2.head;
        ys$$18 = cs$$2.tail;
      } else {
        $target$$185 = 2;
      }
    } else if (cs$$2.tail == null) {
      $target$$185 = 0;
    } else {
      $target$$185 = 2;
    }

    switch ($target$$185) {
      case 0:
        {
          return false;
        }

      case 1:
        {
          if (f$$52(x$$44, y$$12)) {
            return true;
          } else {
            $f$$52$$182 = f$$52;
            $bs$$2$$183 = xs$$82;
            $cs$$2$$184 = ys$$18;
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
  let xs$$89;
  const xs$$88 = ofList(xs$$87, Array);
  xs$$88.sort(function comparer$$2(x$$49, y$$17) {
    return comparer$$1.Compare(x$$49, y$$17);
  });
  xs$$89 = xs$$88;
  return ofArray(xs$$89);
}
export function sortBy(projection, xs$$90, comparer$$3) {
  let xs$$92;
  const xs$$91 = ofList(xs$$90, Array);
  xs$$91.sort(function comparer$$4(x$$50, y$$18) {
    return comparer$$3.Compare(projection(x$$50), projection(y$$18));
  });
  xs$$92 = xs$$91;
  return ofArray(xs$$92);
}
export function sortDescending(xs$$93, comparer$$5) {
  let xs$$95;
  const xs$$94 = ofList(xs$$93, Array);
  xs$$94.sort(function comparer$$6(x$$51, y$$19) {
    return comparer$$5.Compare(x$$51, y$$19) * -1;
  });
  xs$$95 = xs$$94;
  return ofArray(xs$$95);
}
export function sortByDescending(projection$$1, xs$$96, comparer$$7) {
  let xs$$98;
  const xs$$97 = ofList(xs$$96, Array);
  xs$$97.sort(function comparer$$8(x$$52, y$$20) {
    return comparer$$7.Compare(projection$$1(x$$52), projection$$1(y$$20)) * -1;
  });
  xs$$98 = xs$$97;
  return ofArray(xs$$98);
}
export function sortWith(comparer$$9, xs$$99) {
  let xs$$101;
  const xs$$100 = ofList(xs$$99, Array);
  xs$$100.sort(comparer$$9);
  xs$$101 = xs$$100;
  return ofArray(xs$$101);
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
  let xs$$110;
  let array$$3;
  array$$3 = ofList(xs$$109, Array);
  xs$$110 = permute$$1(f$$55, array$$3);
  return ofArray(xs$$110);
}
export function chunkBySize(chunkSize, xs$$111) {
  let xs$$114;
  let xs$$112;
  let array$$4;
  array$$4 = ofList(xs$$111, Array);
  xs$$112 = chunkBySize$$1(chunkSize, array$$4);
  xs$$114 = ofArray(xs$$112);
  return map(function f$$56(xs$$113) {
    return ofArray(xs$$113);
  }, xs$$114);
}
export function skip(i$$16, xs$$115) {
  const skipInner = function skipInner($i$$17$$240, $xs$$116$$241) {
    skipInner: while (true) {
      const i$$17 = $i$$17$$240,
            xs$$116 = $xs$$116$$241;

      if (i$$17 === 0) {
        return xs$$116;
      } else if (xs$$116.tail != null) {
        $i$$17$$240 = i$$17 - 1;
        $xs$$116$$241 = xs$$116.tail;
        continue skipInner;
      } else {
        throw new Error("The input sequence has an insufficient number of elements.");
      }

      break;
    }
  };

  if (i$$16 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$242, i$$20, xs$$119;

    if (i$$16 === 0) {
      $target$$242 = 0;
    } else if (i$$16 === 1) {
      if (xs$$115.tail != null) {
        $target$$242 = 1;
      } else {
        $target$$242 = 2;
        i$$20 = i$$16;
        xs$$119 = xs$$115;
      }
    } else {
      $target$$242 = 2;
      i$$20 = i$$16;
      xs$$119 = xs$$115;
    }

    switch ($target$$242) {
      case 0:
        {
          return xs$$115;
        }

      case 1:
        {
          return xs$$115.tail;
        }

      case 2:
        {
          return skipInner(i$$20, xs$$119);
        }
    }
  }
}
export function skipWhile($predicate$$243, $xs$$120$$244) {
  skipWhile: while (true) {
    const predicate = $predicate$$243,
          xs$$120 = $xs$$120$$244;
    var $target$$245, h$$4, t$$4;

    if (xs$$120.tail != null) {
      if (predicate(xs$$120.head)) {
        $target$$245 = 0;
        h$$4 = xs$$120.head;
        t$$4 = xs$$120.tail;
      } else {
        $target$$245 = 1;
      }
    } else {
      $target$$245 = 1;
    }

    switch ($target$$245) {
      case 0:
        {
          $predicate$$243 = predicate;
          $xs$$120$$244 = t$$4;
          continue skipWhile;
        }

      case 1:
        {
          return xs$$120;
        }
    }

    break;
  }
}
export function takeSplitAux($error$$246, $i$$21$$247, $acc$$25$$248, $xs$$121$$249) {
  takeSplitAux: while (true) {
    const error = $error$$246,
          i$$21 = $i$$21$$247,
          acc$$25 = $acc$$25$$248,
          xs$$121 = $xs$$121$$249;

    if (i$$21 === 0) {
      return [reverse(acc$$25), xs$$121];
    } else if (xs$$121.tail != null) {
      $error$$246 = error;
      $i$$21$$247 = i$$21 - 1;
      $acc$$25$$248 = new List(xs$$121.head, acc$$25);
      $xs$$121$$249 = xs$$121.tail;
      continue takeSplitAux;
    } else {
      if (error) {
        throw new Error("The input sequence has an insufficient number of elements.");
      } else {
        return [reverse(acc$$25), xs$$121];
      }
    }

    break;
  }
}
export function take(i$$22, xs$$123) {
  if (i$$22 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$252, i$$25, xs$$124;

    if (i$$22 === 0) {
      $target$$252 = 0;
    } else if (i$$22 === 1) {
      if (xs$$123.tail != null) {
        $target$$252 = 1;
      } else {
        $target$$252 = 2;
        i$$25 = i$$22;
        xs$$124 = xs$$123;
      }
    } else {
      $target$$252 = 2;
      i$$25 = i$$22;
      xs$$124 = xs$$123;
    }

    switch ($target$$252) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          return new List(xs$$123.head, new List());
        }

      case 2:
        {
          const tuple = takeSplitAux(true, i$$25, new List(), xs$$124);
          return tuple[0];
        }
    }
  }
}
export function takeWhile(predicate$$1, xs$$125) {
  if (xs$$125.tail != null) {
    if (xs$$125.tail.tail == null) {
      if (predicate$$1(xs$$125.head)) {
        return xs$$125;
      } else {
        return xs$$125.tail;
      }
    } else {
      if (!predicate$$1(xs$$125.head)) {
        return new List();
      } else {
        return new List(xs$$125.head, takeWhile(predicate$$1, xs$$125.tail));
      }
    }
  } else {
    return xs$$125;
  }
}
export function truncate(i$$26, xs$$127) {
  if (i$$26 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$257, i$$29, xs$$128;

    if (i$$26 === 0) {
      $target$$257 = 0;
    } else if (i$$26 === 1) {
      if (xs$$127.tail != null) {
        $target$$257 = 1;
      } else {
        $target$$257 = 2;
        i$$29 = i$$26;
        xs$$128 = xs$$127;
      }
    } else {
      $target$$257 = 2;
      i$$29 = i$$26;
      xs$$128 = xs$$127;
    }

    switch ($target$$257) {
      case 0:
        {
          return new List();
        }

      case 1:
        {
          return new List(xs$$127.head, new List());
        }

      case 2:
        {
          const tuple$$1 = takeSplitAux(false, i$$29, new List(), xs$$128);
          return tuple$$1[0];
        }
    }
  }
}
export function splitAt(i$$30, xs$$129) {
  if (i$$30 < 0) {
    throw new Error("The input must be non-negative.");
  } else {
    var $target$$260, i$$33, xs$$131;

    if (i$$30 === 0) {
      $target$$260 = 0;
    } else if (i$$30 === 1) {
      if (xs$$129.tail != null) {
        $target$$260 = 1;
      } else {
        $target$$260 = 2;
        i$$33 = i$$30;
        xs$$131 = xs$$129;
      }
    } else {
      $target$$260 = 2;
      i$$33 = i$$30;
      xs$$131 = xs$$129;
    }

    switch ($target$$260) {
      case 0:
        {
          return [new List(), xs$$129];
        }

      case 1:
        {
          return [new List(xs$$129.head, new List()), xs$$129.tail];
        }

      case 2:
        {
          return takeSplitAux(true, i$$33, new List(), xs$$131);
        }
    }
  }
}
export function outOfRange() {
  throw new Error("Index out of range");
}
export function slice(lower, upper, xs$$132) {
  const lower$$1 = defaultArg(lower, 0) | 0;
  const hasUpper = upper != null;

  if (lower$$1 < 0) {
    return outOfRange();
  } else if (hasUpper ? upper < lower$$1 : false) {
    return new List();
  } else {
    let lastIndex = -1 | 0;
    let res$$2;
    const state$$13 = new List();
    res$$2 = foldIndexed(function f$$57(i$$34, acc$$26, x$$67) {
      lastIndex = i$$34;

      if (lower$$1 <= i$$34 ? !hasUpper ? true : i$$34 <= upper : false) {
        return new List(x$$67, acc$$26);
      } else {
        return acc$$26;
      }
    }, state$$13, xs$$132);

    if (lower$$1 > lastIndex + 1 ? true : hasUpper ? upper > lastIndex : false) {
      outOfRange();
    } else {
      void null;
    }

    return reverse(res$$2);
  }
}
export function distinctBy(projection$$4, xs$$134, eq$$2) {
  const hashSet = createMutable([], eq$$2);
  return filter(function f$$58($arg$$1) {
    const arg00$$1 = projection$$4($arg$$1);
    return addToSet(arg00$$1, hashSet);
  }, xs$$134);
}
export function distinct(xs$$136, eq$$3) {
  return distinctBy(function (x$$68) {
    return x$$68;
  }, xs$$136, eq$$3);
}
export function exactlyOne(xs$$137) {
  if (xs$$137.tail != null) {
    if (xs$$137.tail.tail != null) {
      throw new Error("Input list too long\\nParameter name: list");
    } else {
      return xs$$137.head;
    }
  } else {
    throw new Error("The input sequence was empty\\nParameter name: list");
  }
}
export function groupBy(projection$$5, xs$$139, eq$$4) {
  const dict = createMutable$$1([], eq$$4);
  let keys = new List();
  iterate(function f$$59(v$$2) {
    const key = projection$$5(v$$2);
    const matchValue$$16 = tryGetValue(dict, key, null);

    if (matchValue$$16[0]) {
      dict.set(key, new List(v$$2, matchValue$$16[1]));
    } else {
      addToDict(dict, key, new List(v$$2, new List()));
      keys = new List(key, keys);
    }
  }, xs$$139);
  let result$$1 = new List();
  const xs$$141 = keys;
  iterate(function f$$60(key$$1) {
    result$$1 = new List([key$$1, reverse(getItemFromDict(dict, key$$1))], result$$1);
  }, xs$$141);
  return result$$1;
}
export function countBy(projection$$6, xs$$142, eq$$5) {
  const dict$$1 = createMutable$$1([], eq$$5);
  let keys$$1 = new List();
  iterate(function f$$61(v$$3) {
    const key$$2 = projection$$6(v$$3);
    const matchValue$$17 = tryGetValue(dict$$1, key$$2, 0);

    if (matchValue$$17[0]) {
      dict$$1.set(key$$2, matchValue$$17[1] + 1);
    } else {
      dict$$1.set(key$$2, 1);
      keys$$1 = new List(key$$2, keys$$1);
    }
  }, xs$$142);
  let result$$2 = new List();
  const xs$$144 = keys$$1;
  iterate(function f$$62(key$$3) {
    result$$2 = new List([key$$3, getItemFromDict(dict$$1, key$$3)], result$$2);
  }, xs$$144);
  return result$$2;
}
export function where(predicate$$2, source) {
  return filter(predicate$$2, source);
}
export function pairwise(source$$1) {
  const xs$$145 = pairwise$$1(source$$1);
  return ofSeq(xs$$145);
}
export function windowed(windowSize, source$$2) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  } else {
    void null;
  }

  let res$$3 = new List();

  for (let i$$35 = length(source$$2); i$$35 >= windowSize; i$$35--) {
    res$$3 = new List(slice(i$$35 - windowSize, i$$35 - 1, source$$2), res$$3);
  }

  return res$$3;
}
export function splitInto(chunks, source$$3) {
  let xs$$148;
  let xs$$146;
  let array$$5;
  array$$5 = ofList(source$$3, Array);
  xs$$146 = splitInto$$1(chunks, array$$5);
  xs$$148 = ofArray(xs$$146);
  return map(function f$$63(xs$$147) {
    return ofArray(xs$$147);
  }, xs$$148);
}
export function transpose(lists$$1) {
  let xs$$150;
  let source$$5;
  source$$5 = transpose$$1(lists$$1);
  xs$$150 = map$$1(ofSeq, source$$5);
  return ofSeq(xs$$150);
}

define(["exports", "./Option", "./Types", "./Util", "./Array", "./Set", "./List", "./Seq", "./Map"], function (exports, _Option, _Types, _Util, _Array, _Set, _List, _Seq, _Map) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.head = head;
  exports.tryHead = tryHead;
  exports.tail = tail;
  exports.last = last;
  exports.tryLast = tryLast;
  exports.compareWith = compareWith;
  exports.equalsWith = equalsWith;
  exports.foldIndexedAux = foldIndexedAux;
  exports.foldIndexed = foldIndexed;
  exports.fold = fold;
  exports.reverse = reverse;
  exports.foldBack = foldBack;
  exports.foldIndexed2Aux = foldIndexed2Aux;
  exports.foldIndexed2 = foldIndexed2;
  exports.fold2 = fold2;
  exports.foldBack2 = foldBack2;
  exports.unfold = unfold;
  exports.foldIndexed3Aux = foldIndexed3Aux;
  exports.foldIndexed3 = foldIndexed3;
  exports.fold3 = fold3;
  exports.scan = scan;
  exports.scanBack = scanBack;
  exports.length = length;
  exports.append = append;
  exports.collect = collect;
  exports.map = map;
  exports.mapIndexed = mapIndexed;
  exports.indexed = indexed;
  exports.map2 = map2;
  exports.mapIndexed2 = mapIndexed2;
  exports.map3 = map3;
  exports.mapIndexed3 = mapIndexed3;
  exports.mapFold = mapFold;
  exports.mapFoldBack = mapFoldBack;
  exports.iterate = iterate;
  exports.iterate2 = iterate2;
  exports.iterateIndexed = iterateIndexed;
  exports.iterateIndexed2 = iterateIndexed2;
  exports.ofArray = ofArray;
  exports.empty = empty;
  exports.isEmpty = isEmpty;
  exports.tryPickIndexedAux = tryPickIndexedAux;
  exports.tryPickIndexed = tryPickIndexed;
  exports.tryPick = tryPick;
  exports.pick = pick;
  exports.tryFindIndexed = tryFindIndexed;
  exports.tryFind = tryFind;
  exports.findIndexed = findIndexed;
  exports.find = find;
  exports.findBack = findBack;
  exports.tryFindBack = tryFindBack;
  exports.tryFindIndex = tryFindIndex;
  exports.tryFindIndexBack = tryFindIndexBack;
  exports.findIndex = findIndex;
  exports.findIndexBack = findIndexBack;
  exports.item = item;
  exports.tryItem = tryItem;
  exports.filter = filter;
  exports.partition = partition;
  exports.choose = choose;
  exports.contains = contains;
  exports.except = except;
  exports.initialize = initialize;
  exports.replicate = replicate;
  exports.reduce = reduce;
  exports.reduceBack = reduceBack;
  exports.forAll = forAll;
  exports.forAll2 = forAll2;
  exports.exists = exists;
  exports.exists2 = exists2;
  exports.unzip = unzip;
  exports.unzip3 = unzip3;
  exports.zip = zip;
  exports.zip3 = zip3;
  exports.sort = sort;
  exports.sortBy = sortBy;
  exports.sortDescending = sortDescending;
  exports.sortByDescending = sortByDescending;
  exports.sortWith = sortWith;
  exports.sum = sum;
  exports.sumBy = sumBy;
  exports.maxBy = maxBy;
  exports.max = max;
  exports.minBy = minBy;
  exports.min = min;
  exports.average = average;
  exports.averageBy = averageBy;
  exports.permute = permute;
  exports.skip = skip;
  exports.skipWhile = skipWhile;
  exports.takeSplitAux = takeSplitAux;
  exports.take = take;
  exports.takeWhile = takeWhile;
  exports.truncate = truncate;
  exports.splitAt = splitAt;
  exports.toSeq = toSeq;
  exports.ofSeq = ofSeq;
  exports.concat = concat;
  exports.slice = slice;
  exports.distinctBy = distinctBy;
  exports.distinct = distinct;
  exports.groupBy = groupBy;
  exports.countBy = countBy;
  exports.where = where;
  function head(_arg1) {
    if (_arg1.tail != null) {
      const x = _arg1.head;
      return x;
    } else {
      throw new Error("List was empty");
    }
  }
  function tryHead(_arg1$$1) {
    if (_arg1$$1.tail != null) {
      const x$$1 = _arg1$$1.head;
      return (0, _Option.some)(x$$1);
    } else {
      return null;
    }
  }
  function tail(_arg1$$2) {
    if (_arg1$$2.tail != null) {
      const xs = _arg1$$2.tail;
      return xs;
    } else {
      throw new Error("List was empty");
    }
  }
  function last(_arg1$$3) {
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
  function tryLast(_arg1$$4) {
    tryLast: while (true) {
      if (_arg1$$4.tail != null) {
        if (_arg1$$4.tail.tail == null) {
          return (0, _Option.some)(_arg1$$4.head);
        } else {
          _arg1$$4 = _arg1$$4.tail;
          continue tryLast;
        }
      } else {
        return null;
      }
    }
  }
  function compareWith(comparer, xs$$3, ys) {
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
  function equalsWith(comparer$$1, xs$$6, ys$$3) {
    return compareWith(comparer$$1, xs$$6, ys$$3) === 0;
  }
  function foldIndexedAux($arg$$8, $arg$$9, $arg$$10, $arg$$11) {
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
  function foldIndexed(f$$1, seed, xs$$8) {
    return foldIndexedAux(f$$1, 0, seed, xs$$8);
  }
  function fold(f$$2, seed$$1, xs$$9) {
    return foldIndexed(function (_arg1$$6, acc$$1, x$$6) {
      return f$$2(acc$$1, x$$6);
    }, seed$$1, xs$$9);
  }
  function reverse(xs$$10) {
    return fold(function (acc$$2, x$$7) {
      return (0, _Types.L)(x$$7, acc$$2);
    }, (0, _Types.L)(), xs$$10);
  }
  function foldBack(f$$3, xs$$11, seed$$2) {
    return fold(function (acc$$3, x$$8) {
      return f$$3(x$$8, acc$$3);
    }, seed$$2, reverse(xs$$11));
  }
  function foldIndexed2Aux($arg$$21, $arg$$22, $arg$$23, $arg$$24, $arg$$25) {
    foldIndexed2Aux: while (true) {
      const f$$4 = $arg$$21,
            i$$1 = $arg$$22,
            acc$$4 = $arg$$23,
            bs = $arg$$24,
            cs = $arg$$25;
      const matchValue$$2 = [bs, cs];
      var $target$$26, x$$9, xs$$12, y$$1, ys$$4;

      if (matchValue$$2[0].tail != null) {
        if (matchValue$$2[1].tail != null) {
          $target$$26 = 1;
          x$$9 = matchValue$$2[0].head;
          xs$$12 = matchValue$$2[0].tail;
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
  function foldIndexed2(f$$5, seed$$3, xs$$13, ys$$5) {
    return foldIndexed2Aux(f$$5, 0, seed$$3, xs$$13, ys$$5);
  }
  function fold2(f$$6, seed$$4, xs$$14, ys$$6) {
    return foldIndexed2(function (_arg1$$7, acc$$5, x$$10, y$$2) {
      return f$$6(acc$$5, x$$10, y$$2);
    }, seed$$4, xs$$14, ys$$6);
  }
  function foldBack2(f$$7, xs$$15, ys$$7, seed$$5) {
    return fold2(function (acc$$6, x$$11, y$$3) {
      return f$$7(x$$11, y$$3, acc$$6);
    }, seed$$5, reverse(xs$$15), reverse(ys$$7));
  }
  function unfold(f$$8, state) {
    const unfoldInner = function unfoldInner(acc$$7, state$$1) {
      unfoldInner: while (true) {
        const matchValue$$3 = f$$8(state$$1);

        if (matchValue$$3 != null) {
          const x$$12 = matchValue$$3[0];
          const state$$2 = matchValue$$3[1];
          acc$$7 = (0, _Types.L)(x$$12, acc$$7);
          state$$1 = state$$2;
          continue unfoldInner;
        } else {
          return reverse(acc$$7);
        }
      }
    };

    return unfoldInner((0, _Types.L)(), state);
  }
  function foldIndexed3Aux($arg$$41, $arg$$42, $arg$$43, $arg$$44, $arg$$45, $arg$$46) {
    foldIndexed3Aux: while (true) {
      const f$$9 = $arg$$41,
            i$$2 = $arg$$42,
            acc$$8 = $arg$$43,
            bs$$1 = $arg$$44,
            cs$$1 = $arg$$45,
            ds = $arg$$46;
      const matchValue$$4 = [bs$$1, cs$$1, ds];
      var $target$$47, x$$13, xs$$16, y$$4, ys$$8, z, zs;

      if (matchValue$$4[0].tail != null) {
        if (matchValue$$4[1].tail != null) {
          if (matchValue$$4[2].tail != null) {
            $target$$47 = 1;
            x$$13 = matchValue$$4[0].head;
            xs$$16 = matchValue$$4[0].tail;
            y$$4 = matchValue$$4[1].head;
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
  function foldIndexed3(f$$10, seed$$6, xs$$17, ys$$9, zs$$1) {
    return foldIndexed3Aux(f$$10, 0, seed$$6, xs$$17, ys$$9, zs$$1);
  }
  function fold3(f$$11, seed$$7, xs$$18, ys$$10, zs$$2) {
    return foldIndexed3(function (_arg1$$8, acc$$9, x$$14, y$$5, z$$1) {
      return f$$11(acc$$9, x$$14, y$$5, z$$1);
    }, seed$$7, xs$$18, ys$$10, zs$$2);
  }
  function scan(f$$12, seed$$8, xs$$19) {
    return function (xs$$20) {
      return reverse(xs$$20);
    }(fold(function (acc$$10, x$$15) {
      if (acc$$10.tail != null) {
        const y$$6 = acc$$10.head;
        return (0, _Types.L)(f$$12(y$$6, x$$15), acc$$10);
      } else {
        throw new Error("never");
      }
    }, (0, _Types.L)(seed$$8, (0, _Types.L)()), xs$$19));
  }
  function scanBack(f$$13, xs$$21, seed$$9) {
    return function (xs$$22) {
      return reverse(xs$$22);
    }(scan(function (acc$$11, x$$16) {
      return f$$13(x$$16, acc$$11);
    }, seed$$9, reverse(xs$$21)));
  }
  function length(xs$$23) {
    return fold(function (acc$$12, _arg1$$9) {
      return acc$$12 + 1;
    }, 0, xs$$23);
  }
  function append(xs$$24, ys$$11) {
    return fold(function (acc$$13, x$$17) {
      return (0, _Types.L)(x$$17, acc$$13);
    }, ys$$11, reverse(xs$$24));
  }
  function collect(f$$14, xs$$25) {
    return fold(function (acc$$14, x$$18) {
      return append(f$$14(x$$18), acc$$14);
    }, (0, _Types.L)(), reverse(xs$$25));
  }
  function map(f$$15, xs$$26) {
    return function (xs$$27) {
      return reverse(xs$$27);
    }(fold(function (acc$$15, x$$19) {
      return (0, _Types.L)(f$$15(x$$19), acc$$15);
    }, (0, _Types.L)(), xs$$26));
  }
  function mapIndexed(f$$16, xs$$28) {
    return function (xs$$29) {
      return reverse(xs$$29);
    }(foldIndexed(function (i$$3, acc$$16, x$$20) {
      return (0, _Types.L)(f$$16(i$$3, x$$20), acc$$16);
    }, (0, _Types.L)(), xs$$28));
  }
  function indexed(xs$$30) {
    return mapIndexed(function (i$$4, x$$21) {
      return [i$$4, x$$21];
    }, xs$$30);
  }
  function map2(f$$17, xs$$31, ys$$12) {
    return function (xs$$32) {
      return reverse(xs$$32);
    }(fold2(function (acc$$17, x$$22, y$$7) {
      return (0, _Types.L)(f$$17(x$$22, y$$7), acc$$17);
    }, (0, _Types.L)(), xs$$31, ys$$12));
  }
  function mapIndexed2(f$$18, xs$$33, ys$$13) {
    return function (xs$$34) {
      return reverse(xs$$34);
    }(foldIndexed2(function (i$$5, acc$$18, x$$23, y$$8) {
      return (0, _Types.L)(f$$18(i$$5, x$$23, y$$8), acc$$18);
    }, (0, _Types.L)(), xs$$33, ys$$13));
  }
  function map3(f$$19, xs$$35, ys$$14, zs$$3) {
    return function (xs$$36) {
      return reverse(xs$$36);
    }(fold3(function (acc$$19, x$$24, y$$9, z$$2) {
      return (0, _Types.L)(f$$19(x$$24, y$$9, z$$2), acc$$19);
    }, (0, _Types.L)(), xs$$35, ys$$14, zs$$3));
  }
  function mapIndexed3(f$$20, xs$$37, ys$$15, zs$$4) {
    return function (xs$$38) {
      return reverse(xs$$38);
    }(foldIndexed3(function (i$$6, acc$$20, x$$25, y$$10, z$$3) {
      return (0, _Types.L)(f$$20(i$$6, x$$25, y$$10, z$$3), acc$$20);
    }, (0, _Types.L)(), xs$$37, ys$$15, zs$$4));
  }
  function mapFold(f$$21, s, xs$$39) {
    const foldFn = function foldFn(tupledArg) {
      const nxs = tupledArg[0];
      const fs = tupledArg[1];
      return function (x$$26) {
        const patternInput = f$$21(fs, x$$26);
        const nx = patternInput[0];
        const fs$$1 = patternInput[1];
        return [(0, _Types.L)(nx, nxs), fs$$1];
      };
    };

    const patternInput$$1 = fold((0, _Util.uncurry)(2, foldFn), [(0, _Types.L)(), s], xs$$39);
    const s$$1 = patternInput$$1[1];
    const nxs$$1 = patternInput$$1[0];
    return [reverse(nxs$$1), s$$1];
  }
  function mapFoldBack(f$$22, xs$$40, s$$2) {
    return mapFold(function (s$$3, v) {
      return f$$22(v, s$$3);
    }, s$$2, reverse(xs$$40));
  }
  function iterate(f$$23, xs$$41) {
    fold(function (unitVar0, x$$27) {
      f$$23(x$$27);
    }, null, xs$$41);
  }
  function iterate2(f$$24, xs$$42, ys$$16) {
    fold2(function (unitVar0$$1, x$$28, y$$11) {
      f$$24(x$$28, y$$11);
    }, null, xs$$42, ys$$16);
  }
  function iterateIndexed(f$$25, xs$$43) {
    foldIndexed(function (i$$7, unitVar1, x$$29) {
      f$$25(i$$7, x$$29);
    }, null, xs$$43);
  }
  function iterateIndexed2(f$$26, xs$$44, ys$$17) {
    foldIndexed2(function (i$$8, unitVar1$$1, x$$30, y$$12) {
      f$$26(i$$8, x$$30, y$$12);
    }, null, xs$$44, ys$$17);
  }
  function ofArray(xs$$45) {
    return (0, _Array.foldBack)(function (x$$31, acc$$21) {
      return (0, _Types.L)(x$$31, acc$$21);
    }, xs$$45, (0, _Types.L)());
  }
  function empty() {
    return (0, _Types.L)();
  }
  function isEmpty(_arg1$$10) {
    if (_arg1$$10.tail == null) {
      return true;
    } else {
      return false;
    }
  }
  function tryPickIndexedAux($arg$$100, $arg$$101, $arg$$102) {
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
  function tryPickIndexed(f$$28, xs$$47) {
    return tryPickIndexedAux(f$$28, 0, xs$$47);
  }
  function tryPick(f$$29, xs$$48) {
    return tryPickIndexed(function (_arg1$$12, x$$33) {
      return f$$29(x$$33);
    }, xs$$48);
  }
  function pick(f$$30, xs$$49) {
    const matchValue$$5 = tryPick(f$$30, xs$$49);

    if (matchValue$$5 != null) {
      const x$$34 = (0, _Option.value)(matchValue$$5);
      return x$$34;
    } else {
      throw new Error("List did not contain any matching elements");
    }
  }
  function tryFindIndexed(f$$31, xs$$50) {
    return tryPickIndexed(function (i$$10, x$$35) {
      return f$$31(i$$10, x$$35) ? (0, _Option.some)(x$$35) : null;
    }, xs$$50);
  }
  function tryFind(f$$32, xs$$51) {
    return tryPickIndexed(function (_arg1$$13, x$$36) {
      return f$$32(x$$36) ? (0, _Option.some)(x$$36) : null;
    }, xs$$51);
  }
  function findIndexed(f$$33, xs$$52) {
    const matchValue$$6 = tryFindIndexed(f$$33, xs$$52);

    if (matchValue$$6 != null) {
      const x$$37 = (0, _Option.value)(matchValue$$6);
      return x$$37;
    } else {
      throw new Error("List did not contain any matching elements");
    }
  }
  function find(f$$34, xs$$53) {
    return findIndexed(function (_arg1$$14, x$$38) {
      return f$$34(x$$38);
    }, xs$$53);
  }
  function findBack(f$$35, xs$$54) {
    return function (xs$$56) {
      return find(f$$35, xs$$56);
    }(function (xs$$55) {
      return reverse(xs$$55);
    }(xs$$54));
  }
  function tryFindBack(f$$36, xs$$57) {
    return function (xs$$59) {
      return tryFind(f$$36, xs$$59);
    }(function (xs$$58) {
      return reverse(xs$$58);
    }(xs$$57));
  }
  function tryFindIndex(f$$37, xs$$60) {
    return tryPickIndexed(function (i$$11, x$$39) {
      return f$$37(x$$39) ? i$$11 : null;
    }, xs$$60);
  }
  function tryFindIndexBack(f$$38, xs$$61) {
    return function (array) {
      return (0, _Array.tryFindIndexBack)(f$$38, array);
    }((0, _Array.ofList)(xs$$61, Array));
  }
  function findIndex(f$$39, xs$$62) {
    const matchValue$$7 = tryFindIndex(f$$39, xs$$62);

    if (matchValue$$7 != null) {
      const x$$40 = matchValue$$7 | 0;
      return x$$40 | 0;
    } else {
      throw new Error("List did not contain any matching elements");
    }
  }
  function findIndexBack(f$$40, xs$$63) {
    return function (array$$1) {
      return (0, _Array.findIndexBack)(f$$40, array$$1);
    }((0, _Array.ofList)(xs$$63, Array));
  }
  function item(n, xs$$64) {
    return findIndexed(function (i$$12, _arg1$$15) {
      return n === i$$12;
    }, xs$$64);
  }
  function tryItem(n$$1, xs$$65) {
    return tryFindIndexed(function (i$$13, _arg1$$16) {
      return n$$1 === i$$13;
    }, xs$$65);
  }
  function filter(f$$41, xs$$66) {
    return foldBack(function (x$$41, acc$$22) {
      return f$$41(x$$41) ? (0, _Types.L)(x$$41, acc$$22) : acc$$22;
    }, xs$$66, (0, _Types.L)());
  }
  function partition(f$$42, xs$$67) {
    return fold((0, _Util.uncurry)(2, function (tupledArg$$1) {
      const lacc = tupledArg$$1[0];
      const racc = tupledArg$$1[1];
      return function (x$$42) {
        return f$$42(x$$42) ? [(0, _Types.L)(x$$42, lacc), racc] : [lacc, (0, _Types.L)(x$$42, racc)];
      };
    }), [(0, _Types.L)(), (0, _Types.L)()], reverse(xs$$67));
  }
  function choose(f$$43, xs$$68) {
    return function (xs$$69) {
      return reverse(xs$$69);
    }(fold(function (acc$$23, x$$43) {
      const matchValue$$8 = f$$43(x$$43);

      if (matchValue$$8 == null) {
        return acc$$23;
      } else {
        const y$$13 = (0, _Option.value)(matchValue$$8);
        return (0, _Types.L)(y$$13, acc$$23);
      }
    }, (0, _Types.L)(), xs$$68));
  }
  function contains(value, list, eq) {
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
  function except(itemsToExclude, array$$2, eq$$1) {
    var f$$44;

    if (isEmpty(array$$2)) {
      return array$$2;
    } else {
      const cached = (0, _Set.createMutable)(itemsToExclude, (0, _Util.comparerFromEqualityComparer)(eq$$1));
      return (f$$44 = function f$$44(arg00) {
        return (0, _Util.addToSet)(arg00, cached);
      }, function (xs$$71) {
        return filter(f$$44, xs$$71);
      })(array$$2);
    }
  }
  function initialize(n$$2, f$$45) {
    let xs$$72 = (0, _Types.L)();

    for (let i$$14 = 1; i$$14 <= n$$2; i$$14++) {
      xs$$72 = (0, _Types.L)(f$$45(n$$2 - i$$14), xs$$72);
    }

    return xs$$72;
  }
  function replicate(n$$3, x$$44) {
    return initialize(n$$3, function (_arg1$$17) {
      return x$$44;
    });
  }
  function reduce(f$$46, _arg1$$18) {
    if (_arg1$$18.tail != null) {
      const t = _arg1$$18.tail;
      const h = _arg1$$18.head;
      return fold(f$$46, h, t);
    } else {
      throw new Error("List was empty");
    }
  }
  function reduceBack(f$$47, _arg1$$19) {
    if (_arg1$$19.tail != null) {
      const t$$1 = _arg1$$19.tail;
      const h$$1 = _arg1$$19.head;
      return foldBack(f$$47, t$$1, h$$1);
    } else {
      throw new Error("List was empty");
    }
  }
  function forAll(f$$48, xs$$73) {
    return fold(function (acc$$24, x$$45) {
      return acc$$24 ? f$$48(x$$45) : false;
    }, true, xs$$73);
  }
  function forAll2(f$$49, xs$$74, ys$$18) {
    return fold2(function (acc$$25, x$$46, y$$14) {
      return acc$$25 ? f$$49(x$$46, y$$14) : false;
    }, true, xs$$74, ys$$18);
  }
  function exists($arg$$146, $arg$$147) {
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
  function exists2($arg$$148, $arg$$149, $arg$$150) {
    exists2: while (true) {
      const f$$51 = $arg$$148,
            bs$$2 = $arg$$149,
            cs$$2 = $arg$$150;
      const matchValue$$9 = [bs$$2, cs$$2];
      var $target$$151, x$$48, xs$$76, y$$15, ys$$19;

      if (matchValue$$9[0].tail != null) {
        if (matchValue$$9[1].tail != null) {
          $target$$151 = 1;
          x$$48 = matchValue$$9[0].head;
          xs$$76 = matchValue$$9[0].tail;
          y$$15 = matchValue$$9[1].head;
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
  function unzip(xs$$77) {
    return foldBack((0, _Util.uncurry)(2, function (tupledArg$$2) {
      const x$$49 = tupledArg$$2[0];
      const y$$16 = tupledArg$$2[1];
      return function (tupledArg$$3) {
        const lacc$$1 = tupledArg$$3[0];
        const racc$$1 = tupledArg$$3[1];
        return [(0, _Types.L)(x$$49, lacc$$1), (0, _Types.L)(y$$16, racc$$1)];
      };
    }), xs$$77, [(0, _Types.L)(), (0, _Types.L)()]);
  }
  function unzip3(xs$$78) {
    return foldBack((0, _Util.uncurry)(2, function (tupledArg$$4) {
      const x$$50 = tupledArg$$4[0];
      const y$$17 = tupledArg$$4[1];
      const z$$4 = tupledArg$$4[2];
      return function (tupledArg$$5) {
        const lacc$$2 = tupledArg$$5[0];
        const macc = tupledArg$$5[1];
        const racc$$2 = tupledArg$$5[2];
        return [(0, _Types.L)(x$$50, lacc$$2), (0, _Types.L)(y$$17, macc), (0, _Types.L)(z$$4, racc$$2)];
      };
    }), xs$$78, [(0, _Types.L)(), (0, _Types.L)(), (0, _Types.L)()]);
  }
  function zip(xs$$79, ys$$20) {
    return map2(function (x$$51, y$$18) {
      return [x$$51, y$$18];
    }, xs$$79, ys$$20);
  }
  function zip3(xs$$80, ys$$21, zs$$5) {
    return map3(function (x$$52, y$$19, z$$5) {
      return [x$$52, y$$19, z$$5];
    }, xs$$80, ys$$21, zs$$5);
  }
  function sort(xs$$81, comparer$$2) {
    var comparer$$3, xs$$82;
    return function (xs$$83) {
      return ofArray(xs$$83);
    }((comparer$$3 = function comparer$$3(x$$53, y$$20) {
      return comparer$$2.Compare(x$$53, y$$20);
    }, (xs$$82 = (0, _Array.ofList)(xs$$81, Array), (xs$$82.sort(comparer$$3), xs$$82))));
  }
  function sortBy(projection, xs$$84, comparer$$4) {
    var comparer$$5, xs$$85;
    return function (xs$$86) {
      return ofArray(xs$$86);
    }((comparer$$5 = function comparer$$5(x$$54, y$$21) {
      return comparer$$4.Compare(projection(x$$54), projection(y$$21));
    }, (xs$$85 = (0, _Array.ofList)(xs$$84, Array), (xs$$85.sort(comparer$$5), xs$$85))));
  }
  function sortDescending(xs$$87, comparer$$6) {
    var comparer$$7, xs$$88;
    return function (xs$$89) {
      return ofArray(xs$$89);
    }((comparer$$7 = function comparer$$7(x$$55, y$$22) {
      return comparer$$6.Compare(x$$55, y$$22) * -1;
    }, (xs$$88 = (0, _Array.ofList)(xs$$87, Array), (xs$$88.sort(comparer$$7), xs$$88))));
  }
  function sortByDescending(projection$$1, xs$$90, comparer$$8) {
    var comparer$$9, xs$$91;
    return function (xs$$92) {
      return ofArray(xs$$92);
    }((comparer$$9 = function comparer$$9(x$$56, y$$23) {
      return comparer$$8.Compare(projection$$1(x$$56), projection$$1(y$$23)) * -1;
    }, (xs$$91 = (0, _Array.ofList)(xs$$90, Array), (xs$$91.sort(comparer$$9), xs$$91))));
  }
  function sortWith(comparer$$10, xs$$93) {
    var comparer$$11, xs$$94;
    return function (xs$$95) {
      return ofArray(xs$$95);
    }((comparer$$11 = comparer$$10, (xs$$94 = (0, _Array.ofList)(xs$$93, Array), (xs$$94.sort(comparer$$11), xs$$94))));
  }
  function sum(xs$$96) {
    return fold(function (x$$57, y$$24) {
      return x$$57 + y$$24;
    }, 0, xs$$96);
  }
  function sumBy(f$$52, xs$$97) {
    return fold(function (acc$$26, x$$58) {
      return acc$$26 + f$$52(x$$58);
    }, 0, xs$$97);
  }
  function maxBy(projection$$2, xs$$98, comparer$$12) {
    return reduce(function (x$$59, y$$25) {
      return comparer$$12.Compare(projection$$2(y$$25), projection$$2(x$$59)) > 0 ? y$$25 : x$$59;
    }, xs$$98);
  }
  function max(li, comparer$$13) {
    return reduce(function (x$$60, y$$26) {
      return comparer$$13.Compare(y$$26, x$$60) > 0 ? y$$26 : x$$60;
    }, li);
  }
  function minBy(projection$$3, xs$$99, comparer$$14) {
    return reduce(function (x$$61, y$$27) {
      return comparer$$14.Compare(projection$$3(y$$27), projection$$3(x$$61)) > 0 ? x$$61 : y$$27;
    }, xs$$99);
  }
  function min(xs$$100, comparer$$15) {
    return reduce(function (x$$62, y$$28) {
      return comparer$$15.Compare(y$$28, x$$62) > 0 ? x$$62 : y$$28;
    }, xs$$100);
  }
  function average(zs$$6) {
    const total = sum(zs$$6);
    return total / (0, _List.length)(zs$$6);
  }
  function averageBy(g, zs$$7) {
    const total$$1 = sumBy(g, zs$$7);
    return total$$1 / (0, _List.length)(zs$$7);
  }
  function permute(f$$53, xs$$101) {
    return function (xs$$102) {
      return ofArray(xs$$102);
    }(function (array$$3) {
      return (0, _Array.permute)(f$$53, array$$3);
    }(function (list$$1) {
      return (0, _Array.ofList)(list$$1, Array);
    }(xs$$101)));
  }
  function skip(i$$15, xs$$103) {
    var i$$17;

    const skipInner = function skipInner(i$$16, xs$$104) {
      skipInner: while (true) {
        const matchValue$$10 = [i$$16, xs$$104];

        if (matchValue$$10[0] === 0) {
          return xs$$104;
        } else if (matchValue$$10[1].tail != null) {
          const xs$$105 = matchValue$$10[1].tail;
          i$$16 = i$$16 - 1;
          xs$$104 = xs$$105;
          continue skipInner;
        } else {
          throw new Error("The input sequence has an insufficient number of elements.");
        }
      }
    };

    const matchValue$$11 = [i$$15, xs$$103];

    if (i$$17 = matchValue$$11[0] | 0, i$$17 < 0) {
      const i$$18 = matchValue$$11[0] | 0;
      throw new Error("The input must be non-negative.");
    } else {
      var $target$$172, i$$19, xs$$107;

      if (matchValue$$11[0] === 0) {
        $target$$172 = 0;
      } else if (matchValue$$11[0] === 1) {
        if (matchValue$$11[1].tail != null) {
          $target$$172 = 1;
        } else {
          $target$$172 = 2;
          i$$19 = matchValue$$11[0];
          xs$$107 = matchValue$$11[1];
        }
      } else {
        $target$$172 = 2;
        i$$19 = matchValue$$11[0];
        xs$$107 = matchValue$$11[1];
      }

      switch ($target$$172) {
        case 0:
          {
            return xs$$103;
            break;
          }

        case 1:
          {
            const xs$$106 = matchValue$$11[1].tail;
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
  function skipWhile($arg$$173, $arg$$174) {
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
  function takeSplitAux(error, i$$20, acc$$27, xs$$109) {
    takeSplitAux: while (true) {
      const matchValue$$12 = [i$$20, xs$$109];

      if (matchValue$$12[0] === 0) {
        return [reverse(acc$$27), xs$$109];
      } else if (matchValue$$12[1].tail != null) {
        const xs$$110 = matchValue$$12[1].tail;
        const x$$63 = matchValue$$12[1].head;
        error = error;
        i$$20 = i$$20 - 1;
        acc$$27 = (0, _Types.L)(x$$63, acc$$27);
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
  function take(i$$21, xs$$111) {
    var i$$22;
    const matchValue$$13 = [i$$21, xs$$111];

    if (i$$22 = matchValue$$13[0] | 0, i$$22 < 0) {
      const i$$23 = matchValue$$13[0] | 0;
      throw new Error("The input must be non-negative.");
    } else {
      var $target$$176, i$$24, xs$$112;

      if (matchValue$$13[0] === 0) {
        $target$$176 = 0;
      } else if (matchValue$$13[0] === 1) {
        if (matchValue$$13[1].tail != null) {
          $target$$176 = 1;
        } else {
          $target$$176 = 2;
          i$$24 = matchValue$$13[0];
          xs$$112 = matchValue$$13[1];
        }
      } else {
        $target$$176 = 2;
        i$$24 = matchValue$$13[0];
        xs$$112 = matchValue$$13[1];
      }

      switch ($target$$176) {
        case 0:
          {
            return (0, _Types.L)();
            break;
          }

        case 1:
          {
            const x$$64 = matchValue$$13[1].head;
            return (0, _Types.L)(x$$64, (0, _Types.L)());
            break;
          }

        case 2:
          {
            return function (tuple) {
              return tuple[0];
            }(takeSplitAux(true, i$$24, (0, _Types.L)(), xs$$112));
            break;
          }
      }
    }
  }
  function takeWhile(predicate$$1, xs$$113) {
    if (xs$$113.tail != null) {
      if (xs$$113.tail.tail == null) {
        if (predicate$$1(xs$$113.head)) {
          return xs$$113;
        } else {
          return xs$$113.tail;
        }
      } else {
        if (!predicate$$1(xs$$113.head)) {
          return (0, _Types.L)();
        } else {
          return (0, _Types.L)(xs$$113.head, takeWhile(predicate$$1, xs$$113.tail));
        }
      }
    } else {
      return xs$$113;
    }
  }
  function truncate(i$$25, xs$$115) {
    var i$$26;
    const matchValue$$14 = [i$$25, xs$$115];

    if (i$$26 = matchValue$$14[0] | 0, i$$26 < 0) {
      const i$$27 = matchValue$$14[0] | 0;
      throw new Error("The input must be non-negative.");
    } else {
      var $target$$179, i$$28, xs$$116;

      if (matchValue$$14[0] === 0) {
        $target$$179 = 0;
      } else if (matchValue$$14[0] === 1) {
        if (matchValue$$14[1].tail != null) {
          $target$$179 = 1;
        } else {
          $target$$179 = 2;
          i$$28 = matchValue$$14[0];
          xs$$116 = matchValue$$14[1];
        }
      } else {
        $target$$179 = 2;
        i$$28 = matchValue$$14[0];
        xs$$116 = matchValue$$14[1];
      }

      switch ($target$$179) {
        case 0:
          {
            return (0, _Types.L)();
            break;
          }

        case 1:
          {
            const x$$67 = matchValue$$14[1].head;
            return (0, _Types.L)(x$$67, (0, _Types.L)());
            break;
          }

        case 2:
          {
            return function (tuple$$1) {
              return tuple$$1[0];
            }(takeSplitAux(false, i$$28, (0, _Types.L)(), xs$$116));
            break;
          }
      }
    }
  }
  function splitAt(i$$29, xs$$117) {
    var i$$30;
    const matchValue$$15 = [i$$29, xs$$117];

    if (i$$30 = matchValue$$15[0] | 0, i$$30 < 0) {
      const i$$31 = matchValue$$15[0] | 0;
      throw new Error("The input must be non-negative.");
    } else {
      var $target$$180, i$$32, xs$$119;

      if (matchValue$$15[0] === 0) {
        $target$$180 = 0;
      } else if (matchValue$$15[0] === 1) {
        if (matchValue$$15[1].tail != null) {
          $target$$180 = 1;
        } else {
          $target$$180 = 2;
          i$$32 = matchValue$$15[0];
          xs$$119 = matchValue$$15[1];
        }
      } else {
        $target$$180 = 2;
        i$$32 = matchValue$$15[0];
        xs$$119 = matchValue$$15[1];
      }

      switch ($target$$180) {
        case 0:
          {
            return [(0, _Types.L)(), xs$$117];
            break;
          }

        case 1:
          {
            const xs$$118 = matchValue$$15[1].tail;
            const x$$68 = matchValue$$15[1].head;
            return [(0, _Types.L)(x$$68, (0, _Types.L)()), xs$$118];
            break;
          }

        case 2:
          {
            return takeSplitAux(true, i$$32, (0, _Types.L)(), xs$$119);
            break;
          }
      }
    }
  }
  function toSeq(xs$$120) {
    return (0, _Seq.unfold)(function (_arg1$$21) {
      if (_arg1$$21.tail != null) {
        const xs$$121 = _arg1$$21.tail;
        const x$$69 = _arg1$$21.head;
        return [x$$69, xs$$121];
      } else {
        return null;
      }
    }, xs$$120);
  }
  function ofSeq(xs$$122) {
    return (0, _Seq.foldBack)(function (x$$70, acc$$28) {
      return (0, _Types.L)(x$$70, acc$$28);
    }, xs$$122, (0, _Types.L)());
  }
  function concat(lists) {
    var folder;
    return (0, _Seq.foldBack)((0, _Util.uncurry)(2, (folder = function folder(x$$71, acc$$29) {
      return (0, _Types.L)(x$$71, acc$$29);
    }, function (list$$2) {
      return function (state$$3) {
        return (0, _List.foldBack)(folder, list$$2, state$$3);
      };
    })), lists, (0, _Types.L)());
  }
  function slice(lower, upper, xs$$123) {
    var f$$54;
    const lower$$1 = (0, _Option.defaultArg)(lower, -1) | 0;
    const upper$$1 = (0, _Option.defaultArg)(upper, -1) | 0;
    return function (xs$$125) {
      return reverse(xs$$125);
    }((f$$54 = function f$$54(i$$33, acc$$30, x$$72) {
      if ((lower$$1 === -1 ? true : lower$$1 <= i$$33) ? upper$$1 === -1 ? true : i$$33 <= upper$$1 : false) {
        return (0, _Types.L)(x$$72, acc$$30);
      } else {
        return acc$$30;
      }
    }, function (seed$$10) {
      return function (xs$$124) {
        return foldIndexed(f$$54, seed$$10, xs$$124);
      };
    })((0, _Types.L)())(xs$$123));
  }
  function distinctBy(projection$$4, xs$$126, eq$$2) {
    var f$$55;
    const hashSet = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$2));
    return (f$$55 = function f$$55($arg$$1) {
      return function (arg00$$1) {
        return (0, _Util.addToSet)(arg00$$1, hashSet);
      }(projection$$4($arg$$1));
    }, function (xs$$127) {
      return filter(f$$55, xs$$127);
    })(xs$$126);
  }
  function distinct(xs$$128, eq$$3) {
    return distinctBy(function (x$$73) {
      return x$$73;
    }, xs$$128, eq$$3);
  }
  function groupBy(projection$$5, xs$$129, eq$$4) {
    var mapping;
    const dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$4));
    (0, _Seq.iterate)(function (v$$2) {
      const key = projection$$5(v$$2);

      if (dict.has(key)) {
        dict.set(key, (0, _Types.L)(v$$2, dict.get(key)));
      } else {
        dict.set(key, (0, _Types.L)(v$$2, (0, _Types.L)()));
      }
    }, xs$$129);
    return function (source$$1) {
      return (0, _List.ofSeq)(source$$1);
    }((mapping = function mapping(kv) {
      return [kv[0], reverse(kv[1])];
    }, function (source) {
      return (0, _Seq.map)(mapping, source);
    })(dict));
  }
  function countBy(projection$$6, xs$$130, eq$$5) {
    const dict$$1 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$5));
    iterate(function (v$$3) {
      const key$$1 = projection$$6(v$$3);
      const matchValue$$16 = (0, _Util.tryGetValue)(dict$$1, key$$1, null);

      if (matchValue$$16[0]) {
        const prev = matchValue$$16[1];
        prev.contents = prev.contents + 1;
      } else {
        dict$$1.set(key$$1, new _Types.FSharpRef(1));
      }
    }, xs$$130);
    let result$$1 = (0, _Types.L)();
    (0, _Seq.iterate)(function (group) {
      result$$1 = (0, _Types.L)([group[0], group[1].contents], result$$1);
    }, dict$$1);
    return result$$1;
  }
  function where(predicate$$2, xs$$131) {
    return filter(predicate$$2, xs$$131);
  }
});
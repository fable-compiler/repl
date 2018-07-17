define(["exports", "./Option", "./Util", "./Seq", "./Array", "./Map", "./Set", "./List", "./Types"], function (exports, _Option, _Util, _Seq, _Array, _Map, _Set, _List, _Types) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.append = append;
  exports.filter = filter;
  exports.fill = fill;
  exports.getSubArray = getSubArray;
  exports.last = last;
  exports.tryLast = tryLast;
  exports.mapIndexed = mapIndexed;
  exports.map = map;
  exports.mapIndexed2 = mapIndexed2;
  exports.map2 = map2;
  exports.mapIndexed3 = mapIndexed3;
  exports.map3 = map3;
  exports.mapFold = mapFold;
  exports.mapFoldBack = mapFoldBack;
  exports.indexed = indexed;
  exports.truncate = truncate;
  exports.concat = concat;
  exports.collect = collect;
  exports.countBy = countBy;
  exports.distinctBy = distinctBy;
  exports.distinct = distinct;
  exports.where = where;
  exports.contains = contains;
  exports.except = except;
  exports.groupBy = groupBy;
  exports.empty = empty;
  exports.singleton = singleton;
  exports.initialize = initialize;
  exports.pairwise = pairwise;
  exports.replicate = replicate;
  exports.reverse = reverse;
  exports.scan = scan;
  exports.scanBack = scanBack;
  exports.skip = skip;
  exports.skipWhile = skipWhile;
  exports.take = take;
  exports.takeWhile = takeWhile;
  exports.addRangeInPlace = addRangeInPlace;
  exports.removeInPlace = removeInPlace;
  exports.copyTo = copyTo;
  exports.partition = partition;
  exports.find = find;
  exports.tryFind = tryFind;
  exports.findIndex = findIndex;
  exports.tryFindIndex = tryFindIndex;
  exports.pick = pick;
  exports.tryPick = tryPick;
  exports.findBack = findBack;
  exports.tryFindBack = tryFindBack;
  exports.findIndexBack = findIndexBack;
  exports.tryFindIndexBack = tryFindIndexBack;
  exports.choose = choose;
  exports.foldIndexed = foldIndexed;
  exports.fold = fold;
  exports.iterate = iterate;
  exports.iterate2 = iterate2;
  exports.iterateIndexed = iterateIndexed;
  exports.iterateIndexed2 = iterateIndexed2;
  exports.isEmpty = isEmpty;
  exports.forAll = forAll;
  exports.permute = permute;
  exports.setSlice = setSlice;
  exports.sortInPlaceBy = sortInPlaceBy;
  exports.sortInPlace = sortInPlace;
  exports.sort = sort;
  exports.sortBy = sortBy;
  exports.sortDescending = sortDescending;
  exports.sortByDescending = sortByDescending;
  exports.sortWith = sortWith;
  exports.unfold = unfold;
  exports.unzip = unzip;
  exports.unzip3 = unzip3;
  exports.zip = zip;
  exports.zip3 = zip3;
  exports.chunkBySize = chunkBySize;
  exports.splitAt = splitAt;
  exports.compareWith = compareWith;
  exports.equalsWith = equalsWith;
  exports.exactlyOne = exactlyOne;
  exports.head = head;
  exports.tryHead = tryHead;
  exports.tail = tail;
  exports.item = item;
  exports.tryItem = tryItem;
  exports.foldBackIndexed = foldBackIndexed;
  exports.foldBack = foldBack;
  exports.foldIndexed2 = foldIndexed2;
  exports.fold2 = fold2;
  exports.foldBackIndexed2 = foldBackIndexed2;
  exports.foldBack2 = foldBack2;
  exports.reduce = reduce;
  exports.reduceBack = reduceBack;
  exports.forAll2 = forAll2;
  exports.existsOffset = existsOffset;
  exports.exists = exists;
  exports.existsOffset2 = existsOffset2;
  exports.exists2 = exists2;
  exports.sum = sum;
  exports.sumBy = sumBy;
  exports.maxBy = maxBy;
  exports.max = max;
  exports.minBy = minBy;
  exports.min = min;
  exports.average = average;
  exports.averageBy = averageBy;
  exports.ofSeq = ofSeq;
  exports.ofList = ofList;
  exports.toList = toList;


  function indexNotFound() {
    throw new Error("An index satisfying the predicate was not found in the collection.");
  }

  function append(array1, array2, cons) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = new cons(len1 + len2);

    for (let i = 0; i <= len1 - 1; i++) {
      newArray[i] = array1[i];
    }

    for (let i$$1 = 0; i$$1 <= len2 - 1; i$$1++) {
      newArray[i$$1 + len1] = array2[i$$1];
    }

    return newArray;
  }
  function filter(predicate, array) {
    return array.filter(predicate);
  }
  function fill(target, targetIndex, count, value) {
    for (let i$$2 = targetIndex; i$$2 <= targetIndex + count - 1; i$$2++) {
      target[i$$2] = value;
    }

    return target;
  }
  function getSubArray(array$$2, offset, length) {
    return array$$2.slice(offset, offset + length);
  }
  function last(array$$4) {
    if (array$$4.length === 0) {
      throw new Error("The input array was empty" + "\\nParameter name: " + "array");
    }

    return array$$4[array$$4.length - 1];
  }
  function tryLast(array$$5) {
    if (array$$5.length === 0) {
      return null;
    } else {
      return (0, _Option.some)(array$$5[array$$5.length - 1]);
    }
  }
  function mapIndexed(f, source, cons$$1) {
    const len = source.length | 0;
    const target$$1 = new cons$$1(len);

    for (let i$$3 = 0; i$$3 <= len - 1; i$$3++) {
      target$$1[i$$3] = f(i$$3, source[i$$3]);
    }

    return target$$1;
  }
  function map(f$$1, source$$1, cons$$2) {
    const len$$1 = source$$1.length | 0;
    const target$$2 = new cons$$2(len$$1);

    for (let i$$4 = 0; i$$4 <= len$$1 - 1; i$$4++) {
      target$$2[i$$4] = f$$1(source$$1[i$$4]);
    }

    return target$$2;
  }
  function mapIndexed2(f$$2, source1, source2, cons$$3) {
    if (source1.length !== source2.length) {
      throw new Error("Arrays had different lengths");
    }

    const result = new cons$$3(source1.length);

    for (let i$$5 = 0; i$$5 <= source1.length - 1; i$$5++) {
      result[i$$5] = f$$2(i$$5, source1[i$$5], source2[i$$5]);
    }

    return result;
  }
  function map2(f$$3, source1$$1, source2$$1, cons$$4) {
    if (source1$$1.length !== source2$$1.length) {
      throw new Error("Arrays had different lengths");
    }

    const result$$1 = new cons$$4(source1$$1.length);

    for (let i$$6 = 0; i$$6 <= source1$$1.length - 1; i$$6++) {
      result$$1[i$$6] = f$$3(source1$$1[i$$6], source2$$1[i$$6]);
    }

    return result$$1;
  }
  function mapIndexed3(f$$4, source1$$2, source2$$2, source3, cons$$5) {
    if (source1$$2.length !== source2$$2.length ? true : source2$$2.length !== source3.length) {
      throw new Error("Arrays had different lengths");
    }

    const result$$2 = new cons$$5(source1$$2.length);

    for (let i$$7 = 0; i$$7 <= source1$$2.length - 1; i$$7++) {
      result$$2[i$$7] = f$$4(i$$7, source1$$2[i$$7], source2$$2[i$$7], source3[i$$7]);
    }

    return result$$2;
  }
  function map3(f$$5, source1$$3, source2$$3, source3$$1, cons$$6) {
    if (source1$$3.length !== source2$$3.length ? true : source2$$3.length !== source3$$1.length) {
      throw new Error("Arrays had different lengths");
    }

    const result$$3 = new cons$$6(source1$$3.length);

    for (let i$$8 = 0; i$$8 <= source1$$3.length - 1; i$$8++) {
      result$$3[i$$8] = f$$5(source1$$3[i$$8], source2$$3[i$$8], source3$$1[i$$8]);
    }

    return result$$3;
  }
  function mapFold(mapping, state, array$$6, cons$$7) {
    const matchValue = array$$6.length | 0;

    if (matchValue === 0) {
      return [[], state];
    } else {
      const len$$2 = matchValue | 0;
      let acc = state;
      const res = new cons$$7(len$$2);

      for (let i$$9 = 0; i$$9 <= array$$6.length - 1; i$$9++) {
        const patternInput = mapping(acc, array$$6[i$$9]);
        res[i$$9] = patternInput[0];
        acc = patternInput[1];
      }

      return [res, acc];
    }
  }
  function mapFoldBack(mapping$$1, array$$7, state$$1, cons$$8) {
    const matchValue$$1 = array$$7.length | 0;

    if (matchValue$$1 === 0) {
      return [[], state$$1];
    } else {
      const len$$3 = matchValue$$1 | 0;
      let acc$$1 = state$$1;
      const res$$1 = new cons$$8(len$$3);

      for (let i$$10 = array$$7.length - 1; i$$10 >= 0; i$$10--) {
        const patternInput$$1 = mapping$$1(array$$7[i$$10], acc$$1);
        res$$1[i$$10] = patternInput$$1[0];
        acc$$1 = patternInput$$1[1];
      }

      return [res$$1, acc$$1];
    }
  }
  function indexed(source$$2) {
    const len$$4 = source$$2.length | 0;
    const target$$3 = new Array(len$$4);

    for (let i$$11 = 0; i$$11 <= len$$4 - 1; i$$11++) {
      target$$3[i$$11] = [i$$11, source$$2[i$$11]];
    }

    return target$$3;
  }

  function concatImpl(cons$$9, arrays) {
    const arrays$$1 = Array.from(arrays);

    if ((0, _Util.count)(arrays$$1) > 0) {
      let totalIdx = 0;
      let totalLength = 0;
      (0, _Seq.iterate)(function (arr) {
        totalLength = totalLength + arr.length;
      }, arrays$$1);
      const result$$4 = new cons$$9(totalLength);

      for (let i$$12 = 0; i$$12 <= (0, _Util.count)(arrays$$1) - 1; i$$12++) {
        const ar = arrays$$1[i$$12];

        for (let j = 0; j <= ar.length - 1; j++) {
          result$$4[totalIdx] = ar[j];
          totalIdx = totalIdx + 1;
        }
      }

      return result$$4;
    } else {
      return new cons$$9(0);
    }
  }

  function truncate(count$$1, array$$8) {
    const count$$2 = (0, _Util.max)(_Util.comparePrimitives, 0, count$$1) | 0;
    return array$$8.slice(0, count$$2);
  }
  function concat(arrays$$2, cons$$10) {
    return concatImpl(cons$$10, (0, _Array.ofSeq)(arrays$$2, Array));
  }
  function collect(mapping$$2, array$$10, cons$$11) {
    return concatImpl(cons$$11, map(mapping$$2, array$$10, Array));
  }
  function countBy(projection, array$$11, eq) {
    const dict = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq));

    for (let idx = 0; idx <= array$$11.length - 1; idx++) {
      const value$$1 = array$$11[idx];
      const key = projection(value$$1);
      const matchValue$$2 = (0, _Util.tryGetValue)(dict, key, 0);

      if (matchValue$$2[0]) {
        dict.set(key, matchValue$$2[1] + 1);
      } else {
        dict.set(key, 1);
      }
    }

    const res$$2 = new Array(dict.size);
    let i$$13 = 0;
    (0, _Seq.iterate)(function (group) {
      res$$2[i$$13] = [group[0], group[1]];
      i$$13 = i$$13 + 1;
    }, dict);
    return res$$2;
  }
  function distinctBy(projection$$1, array$$12, eq$$1) {
    const hashSet = (0, _Set.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$1));
    return filter(function predicate$$2($arg$$1) {
      return (0, _Util.addToSet)(projection$$1($arg$$1), hashSet);
    }, array$$12);
  }
  function distinct(array$$14, eq$$2) {
    return distinctBy(function (x) {
      return x;
    }, array$$14, eq$$2);
  }
  function where(predicate$$3, array$$15) {
    return array$$15.filter(predicate$$3);
  }
  function contains(value$$2, array$$17, eq$$3) {
    const loop = function loop(i$$14) {
      loop: while (true) {
        if (i$$14 >= array$$17.length) {
          return false;
        } else if (eq$$3.Equals(value$$2, array$$17[i$$14])) {
          return true;
        } else {
          i$$14 = i$$14 + 1;
          continue loop;
        }
      }
    };

    return loop(0);
  }
  function except(itemsToExclude, array$$18, eq$$4) {
    if (array$$18.length === 0) {
      return array$$18;
    } else {
      const cached = (0, _Set.createMutable)(itemsToExclude, (0, _Util.comparerFromEqualityComparer)(eq$$4));
      return array$$18.filter(function predicate$$5(arg00$$1) {
        return (0, _Util.addToSet)(arg00$$1, cached);
      });
    }
  }
  function groupBy(projection$$2, array$$21, cons$$12, eq$$5) {
    const dict$$1 = (0, _Map.createMutable)([], (0, _Util.comparerFromEqualityComparer)(eq$$5));

    for (let idx$$1 = 0; idx$$1 <= array$$21.length - 1; idx$$1++) {
      const v = array$$21[idx$$1];
      const key$$1 = projection$$2(v);
      const matchValue$$3 = (0, _Util.tryGetValue)(dict$$1, key$$1, null);

      if (matchValue$$3[0]) {
        matchValue$$3[1].push(v);
      } else {
        const prev$$2 = [v];
        dict$$1.set(key$$1, prev$$2);
      }
    }

    const result$$5 = new Array(dict$$1.size);
    let i$$15 = 0;
    (0, _Seq.iterate)(function (group$$1) {
      result$$5[i$$15] = [group$$1[0], cons$$12.from(group$$1[1])];
      i$$15 = i$$15 + 1;
    }, dict$$1);
    return result$$5;
  }
  function empty(cons$$13) {
    return new cons$$13(0);
  }
  function singleton(value$$4, cons$$15) {
    const ar$$1 = new cons$$15(1);
    ar$$1[0] = value$$4;
    return ar$$1;
  }
  function initialize(count$$3, initializer, cons$$16) {
    if (count$$3 < 0) {
      throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
    }

    const result$$6 = new cons$$16(count$$3);

    for (let i$$16 = 0; i$$16 <= count$$3 - 1; i$$16++) {
      result$$6[i$$16] = initializer(i$$16);
    }

    return result$$6;
  }
  function pairwise(array$$23) {
    if (array$$23.length < 2) {
      return [];
    } else {
      const count$$4 = array$$23.length - 1 | 0;
      const result$$7 = new Array(count$$4);

      for (let i$$17 = 0; i$$17 <= count$$4 - 1; i$$17++) {
        result$$7[i$$17] = [array$$23[i$$17], array$$23[i$$17 + 1]];
      }

      return result$$7;
    }
  }
  function replicate(count$$5, initial, cons$$17) {
    if (count$$5 < 0) {
      throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
    }

    const result$$8 = new cons$$17(count$$5);

    for (let i$$18 = 0; i$$18 <= result$$8.length - 1; i$$18++) {
      result$$8[i$$18] = initial;
    }

    return result$$8;
  }
  function reverse(array$$24, cons$$18) {
    const res$$3 = new cons$$18(array$$24.length);
    let j$$1 = array$$24.length - 1 | 0;

    for (let i$$19 = 0; i$$19 <= array$$24.length - 1; i$$19++) {
      res$$3[j$$1] = array$$24[i$$19];
      j$$1 = j$$1 - 1;
    }

    return res$$3;
  }
  function scan(folder, state$$2, array$$25, cons$$19) {
    const res$$4 = new cons$$19(array$$25.length + 1);
    res$$4[0] = state$$2;

    for (let i$$20 = 0; i$$20 <= array$$25.length - 1; i$$20++) {
      res$$4[i$$20 + 1] = folder(res$$4[i$$20], array$$25[i$$20]);
    }

    return res$$4;
  }
  function scanBack(folder$$1, array$$26, state$$3, cons$$20) {
    const res$$5 = new cons$$20(array$$26.length + 1);
    res$$5[array$$26.length] = state$$3;

    for (let i$$21 = array$$26.length - 1; i$$21 >= 0; i$$21--) {
      res$$5[i$$21] = folder$$1(array$$26[i$$21], res$$5[i$$21 + 1]);
    }

    return res$$5;
  }
  function skip(count$$6, array$$27, cons$$21) {
    if (count$$6 > array$$27.length) {
      throw new Error("count is greater than array length" + "\\nParameter name: " + "count");
    }

    if (count$$6 === array$$27.length) {
      return new cons$$21(0);
    } else {
      const count$$7 = (count$$6 < 0 ? 0 : count$$6) | 0;
      return array$$27.slice(count$$7);
    }
  }
  function skipWhile(predicate$$7, array$$29, cons$$23) {
    let count$$8 = 0;

    while (count$$8 < array$$29.length ? predicate$$7(array$$29[count$$8]) : false) {
      count$$8 = count$$8 + 1;
    }

    if (count$$8 === array$$29.length) {
      return new cons$$23(0);
    } else {
      const begin$$3 = count$$8 | 0;
      return array$$29.slice(begin$$3);
    }
  }
  function take(count$$9, array$$31, cons$$25) {
    if (count$$9 < 0) {
      throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
    }

    if (count$$9 > array$$31.length) {
      throw new Error("count is greater than array length" + "\\nParameter name: " + "count");
    }

    if (count$$9 === 0) {
      return new cons$$25(0);
    } else {
      return array$$31.slice(0, count$$9);
    }
  }
  function takeWhile(predicate$$8, array$$33, cons$$27) {
    let count$$10 = 0;

    while (count$$10 < array$$33.length ? predicate$$8(array$$33[count$$10]) : false) {
      count$$10 = count$$10 + 1;
    }

    if (count$$10 === 0) {
      return new cons$$27(0);
    } else {
      const end$$3 = count$$10 | 0;
      return array$$33.slice(0, end$$3);
    }
  }
  function addRangeInPlace(range, array$$35) {
    var item$$1;
    const iter = range[Symbol.iterator]();
    let cur = iter.next();

    while (!cur.done) {
      item$$1 = cur.value, array$$35.push(item$$1);
      cur = iter.next();
    }
  }
  function removeInPlace(item$$2, array$$37) {
    const i$$22 = array$$37.indexOf(item$$2);

    if (i$$22 > -1) {
      array$$37.splice(i$$22, 1);
      return true;
    } else {
      return false;
    }
  }
  function copyTo(source$$4, sourceIndex, target$$4, targetIndex$$1, count$$11) {
    const diff = targetIndex$$1 - sourceIndex | 0;

    for (let i$$23 = sourceIndex; i$$23 <= sourceIndex + count$$11 - 1; i$$23++) {
      target$$4[i$$23 + diff] = source$$4[i$$23];
    }
  }
  function partition(f$$6, source$$5, cons$$29) {
    const len$$9 = source$$5.length | 0;
    const res1 = new cons$$29(len$$9);
    const res2 = new cons$$29(len$$9);
    let iTrue = 0;
    let iFalse = 0;

    for (let i$$24 = 0; i$$24 <= len$$9 - 1; i$$24++) {
      if (f$$6(source$$5[i$$24])) {
        res1[iTrue] = source$$5[i$$24];
        iTrue = iTrue + 1;
      } else {
        res2[iFalse] = source$$5[i$$24];
        iFalse = iFalse + 1;
      }
    }

    return [res1, res2];
  }
  function find(predicate$$9, array$$40) {
    const matchValue$$4 = array$$40.find(predicate$$9);

    if (matchValue$$4 == null) {
      return indexNotFound();
    } else {
      return (0, _Option.value)(matchValue$$4);
    }
  }
  function tryFind(predicate$$11, array$$42) {
    return array$$42.find(predicate$$11);
  }
  function findIndex(predicate$$13, array$$44) {
    var index;
    const matchValue$$5 = array$$44.findIndex(predicate$$13);

    if (index = matchValue$$5 | 0, index > -1) {
      const index$$1 = matchValue$$5 | 0;
      return index$$1 | 0;
    } else {
      return indexNotFound() | 0;
    }
  }
  function tryFindIndex(predicate$$15, array$$46) {
    var index$$2;
    const matchValue$$6 = array$$46.findIndex(predicate$$15);

    if (index$$2 = matchValue$$6 | 0, index$$2 > -1) {
      const index$$3 = matchValue$$6 | 0;
      return index$$3;
    } else {
      return null;
    }
  }
  function pick(chooser, array$$48) {
    const loop$$1 = function loop$$1(i$$25) {
      loop$$1: while (true) {
        if (i$$25 >= array$$48.length) {
          return indexNotFound();
        } else {
          const matchValue$$7 = chooser(array$$48[i$$25]);

          if (matchValue$$7 != null) {
            return (0, _Option.value)(matchValue$$7);
          } else {
            i$$25 = i$$25 + 1;
            continue loop$$1;
          }
        }
      }
    };

    return loop$$1(0);
  }
  function tryPick(chooser$$1, array$$49) {
    const loop$$2 = function loop$$2(i$$26) {
      loop$$2: while (true) {
        if (i$$26 >= array$$49.length) {
          return null;
        } else {
          const matchValue$$8 = chooser$$1(array$$49[i$$26]);

          if (matchValue$$8 == null) {
            i$$26 = i$$26 + 1;
            continue loop$$2;
          } else {
            const res$$8 = matchValue$$8;
            return res$$8;
          }
        }
      }
    };

    return loop$$2(0);
  }
  function findBack(predicate$$17, array$$50) {
    const loop$$3 = function loop$$3(i$$27) {
      loop$$3: while (true) {
        if (i$$27 < 0) {
          return indexNotFound();
        } else if (predicate$$17(array$$50[i$$27])) {
          return array$$50[i$$27];
        } else {
          i$$27 = i$$27 - 1;
          continue loop$$3;
        }
      }
    };

    return loop$$3(array$$50.length - 1);
  }
  function tryFindBack(predicate$$18, array$$51) {
    const loop$$4 = function loop$$4(i$$28) {
      loop$$4: while (true) {
        if (i$$28 < 0) {
          return null;
        } else if (predicate$$18(array$$51[i$$28])) {
          return (0, _Option.some)(array$$51[i$$28]);
        } else {
          i$$28 = i$$28 - 1;
          continue loop$$4;
        }
      }
    };

    return loop$$4(array$$51.length - 1);
  }
  function findIndexBack(predicate$$19, array$$52) {
    const loop$$5 = function loop$$5(i$$29) {
      loop$$5: while (true) {
        if (i$$29 < 0) {
          return indexNotFound() | 0;
        } else if (predicate$$19(array$$52[i$$29])) {
          return i$$29 | 0;
        } else {
          i$$29 = i$$29 - 1;
          continue loop$$5;
        }
      }
    };

    return loop$$5(array$$52.length - 1) | 0;
  }
  function tryFindIndexBack(predicate$$20, array$$53) {
    const loop$$6 = function loop$$6(i$$30) {
      loop$$6: while (true) {
        if (i$$30 < 0) {
          return null;
        } else if (predicate$$20(array$$53[i$$30])) {
          return i$$30;
        } else {
          i$$30 = i$$30 - 1;
          continue loop$$6;
        }
      }
    };

    return loop$$6(array$$53.length - 1);
  }
  function choose(f$$7, source$$6, cons$$30) {
    const res$$9 = new cons$$30(0);
    let j$$2 = 0;

    for (let i$$31 = 0; i$$31 <= source$$6.length - 1; i$$31++) {
      const matchValue$$9 = f$$7(source$$6[i$$31]);

      if (matchValue$$9 == null) {} else {
        res$$9[j$$2] = (0, _Option.value)(matchValue$$9);
        j$$2 = j$$2 + 1;
      }
    }

    return res$$9;
  }
  function foldIndexed(folder$$2, state$$4, array$$54) {
    let acc$$2 = state$$4;

    for (let i$$32 = 0; i$$32 <= array$$54.length - 1; i$$32++) {
      acc$$2 = folder$$2(i$$32, acc$$2, array$$54[i$$32]);
    }

    return acc$$2;
  }
  function fold(folder$$3, state$$5, array$$55) {
    let acc$$3 = state$$5;

    for (let i$$33 = 0; i$$33 <= array$$55.length - 1; i$$33++) {
      acc$$3 = folder$$3(acc$$3, array$$55[i$$33]);
    }

    return acc$$3;
  }
  function iterate(action, array$$56) {
    for (let i$$34 = 0; i$$34 <= array$$56.length - 1; i$$34++) {
      action(array$$56[i$$34]);
    }
  }
  function iterate2(action$$1, array1$$1, array2$$1) {
    if (array1$$1.length !== array2$$1.length) {
      throw new Error("Arrays had different lengths");
    }

    for (let i$$35 = 0; i$$35 <= array1$$1.length - 1; i$$35++) {
      action$$1(array1$$1[i$$35], array2$$1[i$$35]);
    }
  }
  function iterateIndexed(action$$2, array$$57) {
    for (let i$$36 = 0; i$$36 <= array$$57.length - 1; i$$36++) {
      action$$2(i$$36, array$$57[i$$36]);
    }
  }
  function iterateIndexed2(action$$3, array1$$2, array2$$2) {
    if (array1$$2.length !== array2$$2.length) {
      throw new Error("Arrays had different lengths");
    }

    for (let i$$37 = 0; i$$37 <= array1$$2.length - 1; i$$37++) {
      action$$3(i$$37, array1$$2[i$$37], array2$$2[i$$37]);
    }
  }
  function isEmpty(array$$58) {
    return array$$58.length === 0;
  }
  function forAll(predicate$$21, array$$59) {
    let i$$38 = 0;
    let result$$9 = true;

    while (i$$38 < array$$59.length ? result$$9 : false) {
      result$$9 = predicate$$21(array$$59[i$$38]);
      i$$38 = i$$38 + 1;
    }

    return result$$9;
  }
  function permute(f$$8, array$$60) {
    const size = array$$60.length | 0;
    const res$$10 = new array$$60.constructor(array$$60.length);
    const checkFlags = new Array(size);
    iterateIndexed(function (i$$39, x$$1) {
      const j$$3 = f$$8(i$$39) | 0;

      if (j$$3 < 0 ? true : j$$3 >= size) {
        throw new Error("Not a valid permutation");
      }

      res$$10[j$$3] = x$$1;
      checkFlags[j$$3] = 1;
    }, array$$60);
    const isValid = forAll(function (y$$1) {
      return 1 === y$$1;
    }, checkFlags);

    if (!isValid) {
      throw new Error("Not a valid permutation");
    }

    return res$$10;
  }
  function setSlice(target$$5, lower, upper, source$$7) {
    const lower$$1 = (0, _Option.defaultArg)(lower, 0) | 0;
    const upper$$1 = (0, _Option.defaultArg)(upper, 0) | 0;
    const length$$1 = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

    if (ArrayBuffer.isView(target$$5) ? source$$7.length <= length$$1 : false) {
      return target$$5.set(source$$7, lower$$1);
    } else {
      for (let i$$40 = 0; i$$40 <= length$$1; i$$40++) {
        target$$5[i$$40 + lower$$1] = source$$7[i$$40];
      }
    }
  }
  function sortInPlaceBy(projection$$3, xs, comparer) {
    return xs.sort(function comparer$$1(x$$3, y$$2) {
      return comparer.Compare(projection$$3(x$$3), projection$$3(y$$2));
    });
  }
  function sortInPlace(xs$$1, comparer$$2) {
    return xs$$1.sort(function comparer$$3(x$$4, y$$3) {
      return comparer$$2.Compare(x$$4, y$$3);
    });
  }

  function copyArray(array$$63) {
    const result$$10 = new array$$63.constructor(array$$63.length);

    for (let i$$41 = 0; i$$41 <= array$$63.length - 1; i$$41++) {
      result$$10[i$$41] = array$$63[i$$41];
    }

    return result$$10;
  }

  function sort(xs$$2, comparer$$4) {
    const xs$$3 = copyArray(xs$$2);
    xs$$3.sort(function comparer$$5(x$$5, y$$4) {
      return comparer$$4.Compare(x$$5, y$$4);
    });
    return xs$$3;
  }
  function sortBy(projection$$4, xs$$4, comparer$$7) {
    const xs$$5 = copyArray(xs$$4);
    xs$$5.sort(function comparer$$8(x$$6, y$$5) {
      return comparer$$7.Compare(projection$$4(x$$6), projection$$4(y$$5));
    });
    return xs$$5;
  }
  function sortDescending(xs$$6, comparer$$10) {
    const xs$$7 = copyArray(xs$$6);
    xs$$7.sort(function comparer$$11(x$$7, y$$6) {
      return comparer$$10.Compare(x$$7, y$$6) * -1;
    });
    return xs$$7;
  }
  function sortByDescending(projection$$5, xs$$8, comparer$$13) {
    const xs$$9 = copyArray(xs$$8);
    xs$$9.sort(function comparer$$14(x$$8, y$$7) {
      return comparer$$13.Compare(projection$$5(x$$8), projection$$5(y$$7)) * -1;
    });
    return xs$$9;
  }
  function sortWith(comparer$$16, xs$$10) {
    const xs$$11 = copyArray(xs$$10);
    xs$$11.sort(comparer$$16);
    return xs$$11;
  }
  function unfold(generator, state$$6) {
    const res$$11 = [];

    const loop$$7 = function loop$$7(state$$7) {
      const matchValue$$10 = generator(state$$7);

      if (matchValue$$10 != null) {
        const x$$9 = matchValue$$10[0];
        const s$0027$$2 = matchValue$$10[1];
        res$$11.push(x$$9);
        loop$$7(s$0027$$2);
      }
    };

    loop$$7(state$$6);
    return res$$11;
  }
  function unzip(array$$70) {
    const len$$11 = array$$70.length | 0;
    const res1$$1 = new Array(len$$11);
    const res2$$1 = new Array(len$$11);
    iterateIndexed(function (i$$42, tupledArg) {
      res1$$1[i$$42] = tupledArg[0];
      res2$$1[i$$42] = tupledArg[1];
    }, array$$70);
    return [res1$$1, res2$$1];
  }
  function unzip3(array$$71) {
    const len$$14 = array$$71.length | 0;
    const res1$$2 = new Array(len$$14);
    const res2$$2 = new Array(len$$14);
    const res3 = new Array(len$$14);
    iterateIndexed(function (i$$43, tupledArg$$1) {
      res1$$2[i$$43] = tupledArg$$1[0];
      res2$$2[i$$43] = tupledArg$$1[1];
      res3[i$$43] = tupledArg$$1[2];
    }, array$$71);
    return [res1$$2, res2$$2, res3];
  }
  function zip(array1$$3, array2$$3) {
    if (array1$$3.length !== array2$$3.length) {
      throw new Error("Arrays had different lengths");
    }

    const result$$11 = new Array(array1$$3.length);

    for (let i$$44 = 0; i$$44 <= array1$$3.length - 1; i$$44++) {
      result$$11[i$$44] = [array1$$3[i$$44], array2$$3[i$$44]];
    }

    return result$$11;
  }
  function zip3(array1$$4, array2$$4, array3) {
    if (array1$$4.length !== array2$$4.length ? true : array2$$4.length !== array3.length) {
      throw new Error("Arrays had different lengths");
    }

    const result$$12 = new Array(array1$$4.length);

    for (let i$$45 = 0; i$$45 <= array1$$4.length - 1; i$$45++) {
      result$$12[i$$45] = [array1$$4[i$$45], array2$$4[i$$45], array3[i$$45]];
    }

    return result$$12;
  }
  function chunkBySize(chunkSize, array$$72) {
    if (chunkSize < 1) {
      throw new Error("The input must be positive." + "\\nParameter name: " + "size");
    }

    if (array$$72.length === 0) {
      return [[]];
    } else {
      const result$$13 = [];

      for (let x$$10 = 0; x$$10 <= ~~Math.ceil(array$$72.length / chunkSize) - 1; x$$10++) {
        const start$$1 = x$$10 * chunkSize | 0;
        const end$0027 = start$$1 + chunkSize | 0;
        const slice = array$$72.slice(start$$1, end$0027);
        result$$13.push(slice);
      }

      return result$$13;
    }
  }
  function splitAt(index$$4, array$$75) {
    if (index$$4 < 0) {
      throw new Error("The input must be non-negative" + "\\nParameter name: " + "index");
    }

    if (index$$4 > array$$75.length) {
      throw new Error("The input sequence has an insufficient number of elements." + "\\nParameter name: " + "index");
    }

    return [array$$75.slice(0, index$$4), array$$75.slice(index$$4)];
  }
  function compareWith(comparer$$19, array1$$5, array2$$5) {
    if (array1$$5 == null) {
      if (array2$$5 == null) {
        return 0;
      } else {
        return -1 | 0;
      }
    } else if (array2$$5 == null) {
      return 1;
    } else {
      let i$$46 = 0;
      let result$$14 = 0;
      const length1 = array1$$5.length | 0;
      const length2 = array2$$5.length | 0;

      if (length1 > length2) {
        return 1;
      } else if (length1 < length2) {
        return -1 | 0;
      } else {
        while (i$$46 < length1 ? result$$14 === 0 : false) {
          result$$14 = comparer$$19(array1$$5[i$$46], array2$$5[i$$46]);
          i$$46 = i$$46 + 1;
        }

        return result$$14 | 0;
      }
    }
  }
  function equalsWith(comparer$$20, array1$$6, array2$$6) {
    return compareWith(_Util.compare, array1$$6, array2$$6) === 0;
  }
  function exactlyOne(array$$78) {
    if (array$$78.length === 1) {
      return array$$78[0];
    } else if (array$$78.length === 0) {
      throw new Error("The input sequence was empty" + "\\nParameter name: " + "array");
    } else {
      throw new Error("Input array too long" + "\\nParameter name: " + "array");
    }
  }
  function head(array$$79) {
    if (array$$79.length === 0) {
      throw new Error("The input array was empty" + "\\nParameter name: " + "array");
    } else {
      return array$$79[0];
    }
  }
  function tryHead(array$$80) {
    if (array$$80.length === 0) {
      return null;
    } else {
      return (0, _Option.some)(array$$80[0]);
    }
  }
  function tail(array$$81) {
    if (array$$81.length === 0) {
      throw new Error("Not enough elements" + "\\nParameter name: " + "array");
    }

    return array$$81.slice(1);
  }
  function item(index$$5, array$$83) {
    return array$$83[index$$5];
  }
  function tryItem(index$$6, array$$84) {
    if (index$$6 < 0 ? true : index$$6 >= array$$84.length) {
      return null;
    } else {
      return (0, _Option.some)(array$$84[index$$6]);
    }
  }
  function foldBackIndexed(folder$$4, array$$85, state$$8) {
    let acc$$4 = state$$8;
    const size$$1 = array$$85.length | 0;

    for (let i$$47 = 1; i$$47 <= size$$1; i$$47++) {
      acc$$4 = folder$$4(i$$47 - 1, array$$85[size$$1 - i$$47], acc$$4);
    }

    return acc$$4;
  }
  function foldBack(folder$$5, array$$86, state$$9) {
    return foldBackIndexed(function (_arg1, x$$11, acc$$5) {
      return folder$$5(x$$11, acc$$5);
    }, array$$86, state$$9);
  }
  function foldIndexed2(folder$$6, state$$10, array1$$7, array2$$7) {
    let acc$$6 = state$$10;

    if (array1$$7.length !== array2$$7.length) {
      throw new Error("Arrays have different lengths");
    }

    for (let i$$48 = 0; i$$48 <= array1$$7.length - 1; i$$48++) {
      acc$$6 = folder$$6(i$$48, acc$$6, array1$$7[i$$48], array2$$7[i$$48]);
    }

    return acc$$6;
  }
  function fold2(folder$$7, state$$11, array1$$8, array2$$8) {
    return foldIndexed2(function (_arg1$$1, acc$$7, x$$12, y$$8) {
      return folder$$7(acc$$7, x$$12, y$$8);
    }, state$$11, array1$$8, array2$$8);
  }
  function foldBackIndexed2(folder$$8, array1$$9, array2$$9, state$$12) {
    let acc$$8 = state$$12;

    if (array1$$9.length !== array2$$9.length) {
      throw new Error("Arrays had different lengths");
    }

    const size$$2 = array1$$9.length | 0;

    for (let i$$49 = 1; i$$49 <= size$$2; i$$49++) {
      acc$$8 = folder$$8(i$$49 - 1, array1$$9[size$$2 - i$$49], array2$$9[size$$2 - i$$49], acc$$8);
    }

    return acc$$8;
  }
  function foldBack2(f$$9, array1$$10, array2$$10, state$$13) {
    return foldBackIndexed2(function (_arg1$$2, x$$13, y$$9, acc$$9) {
      return f$$9(x$$13, y$$9, acc$$9);
    }, array1$$10, array2$$10, state$$13);
  }
  function reduce(reduction, array$$87) {
    if (array$$87.length === 0) {
      throw new Error("The input array was empty");
    } else {
      return foldIndexed(function (i$$50, acc$$10, x$$14) {
        return i$$50 === 0 ? x$$14 : reduction(acc$$10, x$$14);
      }, null, array$$87);
    }
  }
  function reduceBack(reduction$$1, array$$88) {
    if (array$$88.length === 0) {
      throw new Error("The input array was empty");
    } else {
      return foldBackIndexed(function (i$$51, x$$15, acc$$11) {
        return i$$51 === 0 ? x$$15 : reduction$$1(acc$$11, x$$15);
      }, array$$88, null);
    }
  }
  function forAll2(predicate$$22, array1$$11, array2$$11) {
    return fold2(function (acc$$12, x$$16, y$$10) {
      return acc$$12 ? predicate$$22(x$$16, y$$10) : false;
    }, true, array1$$11, array2$$11);
  }
  function existsOffset($arg$$162, $arg$$163, $arg$$164) {
    existsOffset: while (true) {
      const predicate$$23 = $arg$$162,
            array$$89 = $arg$$163,
            index$$7 = $arg$$164;

      if (index$$7 === array$$89.length) {
        return false;
      } else if (predicate$$23(array$$89[index$$7])) {
        return true;
      } else {
        $arg$$162 = predicate$$23;
        $arg$$163 = array$$89;
        $arg$$164 = index$$7 + 1;
        continue existsOffset;
      }
    }
  }
  function exists(predicate$$24, array$$90) {
    return existsOffset(predicate$$24, array$$90, 0);
  }
  function existsOffset2($arg$$167, $arg$$168, $arg$$169, $arg$$170) {
    existsOffset2: while (true) {
      const predicate$$25 = $arg$$167,
            array1$$12 = $arg$$168,
            array2$$12 = $arg$$169,
            index$$8 = $arg$$170;

      if (index$$8 === array1$$12.length) {
        return false;
      } else if (predicate$$25(array1$$12[index$$8], array2$$12[index$$8])) {
        return true;
      } else {
        $arg$$167 = predicate$$25;
        $arg$$168 = array1$$12;
        $arg$$169 = array2$$12;
        $arg$$170 = index$$8 + 1;
        continue existsOffset2;
      }
    }
  }
  function exists2(predicate$$26, array1$$13, array2$$13) {
    if (array1$$13.length !== array2$$13.length) {
      throw new Error("Arrays had different lengths");
    }

    return existsOffset2(predicate$$26, array1$$13, array2$$13, 0);
  }
  function sum(array$$91) {
    let acc$$13 = 0;

    for (let i$$52 = 0; i$$52 <= array$$91.length - 1; i$$52++) {
      acc$$13 = acc$$13 + array$$91[i$$52];
    }

    return acc$$13;
  }
  function sumBy(projection$$6, array$$92) {
    let acc$$14 = 0;

    for (let i$$53 = 0; i$$53 <= array$$92.length - 1; i$$53++) {
      acc$$14 = acc$$14 + projection$$6(array$$92[i$$53]);
    }

    return acc$$14;
  }
  function maxBy(projection$$7, xs$$12, comparer$$21) {
    return reduce(function (x$$17, y$$11) {
      return comparer$$21.Compare(projection$$7(y$$11), projection$$7(x$$17)) > 0 ? y$$11 : x$$17;
    }, xs$$12);
  }
  function max(xs$$13, comparer$$22) {
    return reduce(function (x$$18, y$$12) {
      return comparer$$22.Compare(y$$12, x$$18) > 0 ? y$$12 : x$$18;
    }, xs$$13);
  }
  function minBy(projection$$8, xs$$14, comparer$$23) {
    return reduce(function (x$$19, y$$13) {
      return comparer$$23.Compare(projection$$8(y$$13), projection$$8(x$$19)) > 0 ? x$$19 : y$$13;
    }, xs$$14);
  }
  function min(xs$$15, comparer$$24) {
    return reduce(function (x$$20, y$$14) {
      return comparer$$24.Compare(y$$14, x$$20) > 0 ? x$$20 : y$$14;
    }, xs$$15);
  }
  function average(array$$93) {
    if (array$$93.length === 0) {
      throw new Error("The input array was empty" + "\\nParameter name: " + "array");
    }

    const total = sum(array$$93);
    return total / array$$93.length;
  }
  function averageBy(projection$$9, array$$94) {
    if (array$$94.length === 0) {
      throw new Error("The input array was empty" + "\\nParameter name: " + "array");
    }

    const total$$1 = sumBy(projection$$9, array$$94);
    return total$$1 / array$$94.length;
  }
  function ofSeq(source$$9, cons$$31) {
    return cons$$31.from(source$$9);
  }
  function ofList(source$$10, cons$$32) {
    const len$$20 = (0, _List.length)(source$$10) | 0;
    const target$$7 = new cons$$32(len$$20);
    let i$$54 = 0;
    (0, _Seq.iterate)(function (x$$21) {
      target$$7[i$$54] = x$$21;
      i$$54 = i$$54 + 1;
    }, source$$10);
    return target$$7;
  }
  function toList(source$$11) {
    const len$$21 = source$$11.length | 0;
    let target$$8 = (0, _Types.L)();

    for (let i$$55 = len$$21 - 1; i$$55 >= 0; i$$55--) {
      target$$8 = (0, _Types.L)(source$$11[i$$55], target$$8);
    }

    return target$$8;
  }
});
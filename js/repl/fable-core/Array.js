import { defaultArg, value as value$$10, some } from "./Option.js";
import { compare, addToSet, tryGetValue, comparerFromEqualityComparer, max as max$$1, comparePrimitives } from "./Util.js";
import { createMutable } from "./Map.js";
import { iterate as iterate$$1 } from "./Seq.js";
import { createMutable as createMutable$$1 } from "./Set.js";
import { L } from "./Types.js";

function indexNotFound() {
  throw new Error("An index satisfying the predicate was not found in the collection.");
}

export function append(array1, array2, cons) {
  if (ArrayBuffer.isView(array1)) {
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
  } else {
    return array1.concat(array2);
  }
}
export function filter(predicate, array) {
  return array.filter(predicate);
}
export function fill(target, targetIndex, count, value) {
  target.fill(value, targetIndex, targetIndex + count);
  return target;
}
export function getSubArray(array$$3, start$$1, count$$2) {
  return array$$3.slice(start$$1, start$$1 + count$$2);
}
export function last(array$$5) {
  if (array$$5.length === 0) {
    throw new Error("The input array was empty" + "\\nParameter name: " + "array");
  }

  return array$$5[array$$5.length - 1];
}
export function tryLast(array$$6) {
  if (array$$6.length === 0) {
    return null;
  } else {
    return some(array$$6[array$$6.length - 1]);
  }
}
export function mapIndexed(f, source, cons$$1) {
  if (ArrayBuffer.isView(source)) {
    const len = source.length | 0;
    const target$$1 = new cons$$1(len);

    for (let i$$2 = 0; i$$2 <= len - 1; i$$2++) {
      target$$1[i$$2] = f(i$$2, source[i$$2]);
    }

    return target$$1;
  } else {
    return source.map(function mapping(x, i$$3) {
      return f(i$$3, x);
    });
  }
}
export function map(f$$1, source$$1, cons$$2) {
  if (ArrayBuffer.isView(source$$1)) {
    const len$$1 = source$$1.length | 0;
    const target$$2 = new cons$$2(len$$1);

    for (let i$$4 = 0; i$$4 <= len$$1 - 1; i$$4++) {
      target$$2[i$$4] = f$$1(source$$1[i$$4]);
    }

    return target$$2;
  } else {
    return source$$1.map(function mapping$$1(x$$1) {
      return f$$1(x$$1);
    });
  }
}
export function mapIndexed2(f$$2, source1, source2, cons$$3) {
  if (source1.length !== source2.length) {
    throw new Error("Arrays had different lengths");
  }

  const result = new cons$$3(source1.length);

  for (let i$$5 = 0; i$$5 <= source1.length - 1; i$$5++) {
    result[i$$5] = f$$2(i$$5, source1[i$$5], source2[i$$5]);
  }

  return result;
}
export function map2(f$$3, source1$$1, source2$$1, cons$$4) {
  if (source1$$1.length !== source2$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$1 = new cons$$4(source1$$1.length);

  for (let i$$6 = 0; i$$6 <= source1$$1.length - 1; i$$6++) {
    result$$1[i$$6] = f$$3(source1$$1[i$$6], source2$$1[i$$6]);
  }

  return result$$1;
}
export function mapIndexed3(f$$4, source1$$2, source2$$2, source3, cons$$5) {
  if (source1$$2.length !== source2$$2.length ? true : source2$$2.length !== source3.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$2 = new cons$$5(source1$$2.length);

  for (let i$$7 = 0; i$$7 <= source1$$2.length - 1; i$$7++) {
    result$$2[i$$7] = f$$4(i$$7, source1$$2[i$$7], source2$$2[i$$7], source3[i$$7]);
  }

  return result$$2;
}
export function map3(f$$5, source1$$3, source2$$3, source3$$1, cons$$6) {
  if (source1$$3.length !== source2$$3.length ? true : source2$$3.length !== source3$$1.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$3 = new cons$$6(source1$$3.length);

  for (let i$$8 = 0; i$$8 <= source1$$3.length - 1; i$$8++) {
    result$$3[i$$8] = f$$5(source1$$3[i$$8], source2$$3[i$$8], source3$$1[i$$8]);
  }

  return result$$3;
}
export function mapFold(mapping$$2, state, array$$9, cons$$7) {
  const matchValue = array$$9.length | 0;

  if (matchValue === 0) {
    return [[], state];
  } else {
    const len$$2 = matchValue | 0;
    let acc = state;
    const res = new cons$$7(len$$2);

    for (let i$$9 = 0; i$$9 <= array$$9.length - 1; i$$9++) {
      const patternInput = mapping$$2(acc, array$$9[i$$9]);
      res[i$$9] = patternInput[0];
      acc = patternInput[1];
    }

    return [res, acc];
  }
}
export function mapFoldBack(mapping$$3, array$$10, state$$1, cons$$8) {
  const matchValue$$1 = array$$10.length | 0;

  if (matchValue$$1 === 0) {
    return [[], state$$1];
  } else {
    const len$$3 = matchValue$$1 | 0;
    let acc$$1 = state$$1;
    const res$$1 = new cons$$8(len$$3);

    for (let i$$10 = array$$10.length - 1; i$$10 >= 0; i$$10--) {
      const patternInput$$1 = mapping$$3(array$$10[i$$10], acc$$1);
      res$$1[i$$10] = patternInput$$1[0];
      acc$$1 = patternInput$$1[1];
    }

    return [res$$1, acc$$1];
  }
}
export function indexed(source$$2) {
  const len$$4 = source$$2.length | 0;
  const target$$3 = new Array(len$$4);

  for (let i$$11 = 0; i$$11 <= len$$4 - 1; i$$11++) {
    target$$3[i$$11] = [i$$11, source$$2[i$$11]];
  }

  return target$$3;
}
export function truncate(count$$4, array$$11) {
  const count$$5 = max$$1(comparePrimitives, 0, count$$4) | 0;
  return array$$11.slice(0, 0 + count$$5);
}
export function concat(arrays, cons$$9) {
  const arrays$$1 = Array.from(arrays);
  const matchValue$$2 = arrays$$1.length | 0;

  switch (matchValue$$2) {
    case 0:
      {
        return new cons$$9(0);
      }

    case 1:
      {
        return arrays$$1[0];
      }

    default:
      {
        if (ArrayBuffer.isView(arrays$$1[0])) {
          let totalIdx = 0;
          let totalLength = 0;

          for (let idx = 0; idx <= arrays$$1.length - 1; idx++) {
            const arr$$4 = arrays$$1[idx];
            totalLength = totalLength + arr$$4.length;
          }

          const result$$4 = new cons$$9(totalLength);

          for (let idx$$1 = 0; idx$$1 <= arrays$$1.length - 1; idx$$1++) {
            const arr$$5 = arrays$$1[idx$$1];

            for (let j = 0; j <= arr$$5.length - 1; j++) {
              result$$4[totalIdx] = arr$$5[j];
              totalIdx = totalIdx + 1;
            }
          }

          return result$$4;
        } else {
          return arrays$$1[0].concat(...arrays$$1.slice(1));
        }
      }
  }
}
export function collect(mapping$$4, array$$14, cons$$10) {
  const mapped = map(mapping$$4, array$$14, Array);
  return concat(mapped, cons$$10);
}
export function countBy(projection, array$$15, eq) {
  const dict = createMutable([], comparerFromEqualityComparer(eq));

  for (let idx$$2 = 0; idx$$2 <= array$$15.length - 1; idx$$2++) {
    const value$$2 = array$$15[idx$$2];
    const key = projection(value$$2);
    const matchValue$$3 = tryGetValue(dict, key, 0);

    if (matchValue$$3[0]) {
      dict.set(key, matchValue$$3[1] + 1);
    } else {
      dict.set(key, 1);
    }
  }

  const res$$2 = new Array(dict.size);
  let i$$12 = 0;
  iterate$$1(function (group) {
    res$$2[i$$12] = [group[0], group[1]];
    i$$12 = i$$12 + 1;
  }, dict);
  return res$$2;
}
export function distinctBy(projection$$1, array$$16, eq$$1) {
  const hashSet = createMutable$$1([], comparerFromEqualityComparer(eq$$1));
  return filter(function predicate$$2($arg$$3) {
    return addToSet(projection$$1($arg$$3), hashSet);
  }, array$$16);
}
export function distinct(array$$18, eq$$2) {
  return distinctBy(function (x$$2) {
    return x$$2;
  }, array$$18, eq$$2);
}
export function where(predicate$$3, array$$19) {
  return array$$19.filter(predicate$$3);
}
export function contains(value$$3, array$$21, eq$$3) {
  const loop = function loop(i$$13) {
    loop: while (true) {
      if (i$$13 >= array$$21.length) {
        return false;
      } else if (eq$$3.Equals(value$$3, array$$21[i$$13])) {
        return true;
      } else {
        i$$13 = i$$13 + 1;
        continue loop;
      }
    }
  };

  return loop(0);
}
export function except(itemsToExclude, array$$22, eq$$4) {
  if (array$$22.length === 0) {
    return array$$22;
  } else {
    const cached = createMutable$$1(itemsToExclude, comparerFromEqualityComparer(eq$$4));
    return array$$22.filter(function predicate$$5(arg00$$1) {
      return addToSet(arg00$$1, cached);
    });
  }
}
export function groupBy(projection$$2, array$$25, cons$$11, eq$$5) {
  const dict$$1 = createMutable([], comparerFromEqualityComparer(eq$$5));

  for (let idx$$3 = 0; idx$$3 <= array$$25.length - 1; idx$$3++) {
    const v = array$$25[idx$$3];
    const key$$1 = projection$$2(v);
    const matchValue$$4 = tryGetValue(dict$$1, key$$1, null);

    if (matchValue$$4[0]) {
      matchValue$$4[1].push(v);
    } else {
      const prev$$2 = [v];
      dict$$1.set(key$$1, prev$$2);
    }
  }

  const result$$5 = new Array(dict$$1.size);
  let i$$14 = 0;
  iterate$$1(function (group$$1) {
    result$$5[i$$14] = [group$$1[0], cons$$11.from(group$$1[1])];
    i$$14 = i$$14 + 1;
  }, dict$$1);
  return result$$5;
}
export function empty(cons$$12) {
  return new cons$$12(0);
}
export function singleton(value$$5, cons$$14) {
  const ar = new cons$$14(1);
  ar[0] = value$$5;
  return ar;
}
export function initialize(count$$8, initializer, cons$$15) {
  if (count$$8 < 0) {
    throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
  }

  const result$$6 = new cons$$15(count$$8);

  for (let i$$15 = 0; i$$15 <= count$$8 - 1; i$$15++) {
    result$$6[i$$15] = initializer(i$$15);
  }

  return result$$6;
}
export function pairwise(array$$27) {
  if (array$$27.length < 2) {
    return [];
  } else {
    const count$$9 = array$$27.length - 1 | 0;
    const result$$7 = new Array(count$$9);

    for (let i$$16 = 0; i$$16 <= count$$9 - 1; i$$16++) {
      result$$7[i$$16] = [array$$27[i$$16], array$$27[i$$16 + 1]];
    }

    return result$$7;
  }
}
export function replicate(count$$10, initial, cons$$16) {
  if (count$$10 < 0) {
    throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
  }

  const result$$8 = new cons$$16(count$$10);

  for (let i$$17 = 0; i$$17 <= result$$8.length - 1; i$$17++) {
    result$$8[i$$17] = initial;
  }

  return result$$8;
}
export function copy(array$$28, cons$$17) {
  return array$$28.slice();
}
export function reverse(array$$30, cons$$18) {
  return array$$30.slice().reverse();
}
export function scan(folder, state$$2, array$$34, cons$$19) {
  const res$$3 = new cons$$19(array$$34.length + 1);
  res$$3[0] = state$$2;

  for (let i$$18 = 0; i$$18 <= array$$34.length - 1; i$$18++) {
    res$$3[i$$18 + 1] = folder(res$$3[i$$18], array$$34[i$$18]);
  }

  return res$$3;
}
export function scanBack(folder$$1, array$$35, state$$3, cons$$20) {
  const res$$4 = new cons$$20(array$$35.length + 1);
  res$$4[array$$35.length] = state$$3;

  for (let i$$19 = array$$35.length - 1; i$$19 >= 0; i$$19--) {
    res$$4[i$$19] = folder$$1(array$$35[i$$19], res$$4[i$$19 + 1]);
  }

  return res$$4;
}
export function skip(count$$11, array$$36, cons$$21) {
  if (count$$11 > array$$36.length) {
    throw new Error("count is greater than array length" + "\\nParameter name: " + "count");
  }

  if (count$$11 === array$$36.length) {
    return new cons$$21(0);
  } else {
    const count$$12 = (count$$11 < 0 ? 0 : count$$11) | 0;
    return array$$36.slice(count$$12);
  }
}
export function skipWhile(predicate$$7, array$$38, cons$$23) {
  let count$$14 = 0;

  while (count$$14 < array$$38.length ? predicate$$7(array$$38[count$$14]) : false) {
    count$$14 = count$$14 + 1;
  }

  if (count$$14 === array$$38.length) {
    return new cons$$23(0);
  } else {
    return array$$38.slice(count$$14);
  }
}
export function take(count$$16, array$$40, cons$$25) {
  if (count$$16 < 0) {
    throw new Error("The input must be non-negative" + "\\nParameter name: " + "count");
  }

  if (count$$16 > array$$40.length) {
    throw new Error("count is greater than array length" + "\\nParameter name: " + "count");
  }

  if (count$$16 === 0) {
    return new cons$$25(0);
  } else {
    return array$$40.slice(0, 0 + count$$16);
  }
}
export function takeWhile(predicate$$8, array$$42, cons$$27) {
  let count$$18 = 0;

  while (count$$18 < array$$42.length ? predicate$$8(array$$42[count$$18]) : false) {
    count$$18 = count$$18 + 1;
  }

  if (count$$18 === 0) {
    return new cons$$27(0);
  } else {
    return array$$42.slice(0, 0 + count$$18);
  }
}
export function addRangeInPlace(range, array$$44) {
  const iter = range[Symbol.iterator]();
  let cur = iter.next();

  while (!cur.done) {
    array$$44.push(cur.value);
    cur = iter.next();
  }
}
export function removeInPlace(item$$3, array$$46) {
  const i$$20 = array$$46.indexOf(item$$3);

  if (i$$20 > -1) {
    array$$46.splice(i$$20, 1);
    return true;
  } else {
    return false;
  }
}
export function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$20) {
  const diff = targetIndex$$1 - sourceIndex | 0;

  for (let i$$21 = sourceIndex; i$$21 <= sourceIndex + count$$20 - 1; i$$21++) {
    target$$4[i$$21 + diff] = source$$3[i$$21];
  }
}
export function partition(f$$6, source$$4, cons$$29) {
  const len$$9 = source$$4.length | 0;
  const res1 = new cons$$29(len$$9);
  const res2 = new cons$$29(len$$9);
  let iTrue = 0;
  let iFalse = 0;

  for (let i$$22 = 0; i$$22 <= len$$9 - 1; i$$22++) {
    if (f$$6(source$$4[i$$22])) {
      res1[iTrue] = source$$4[i$$22];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$22];
      iFalse = iFalse + 1;
    }
  }

  return [truncate(iTrue, res1), truncate(iFalse, res2)];
}
export function find(predicate$$9, array$$51) {
  const matchValue$$5 = array$$51.find(predicate$$9);

  if (matchValue$$5 == null) {
    return indexNotFound();
  } else {
    const res$$5 = value$$10(matchValue$$5);
    return res$$5;
  }
}
export function tryFind(predicate$$11, array$$53) {
  return array$$53.find(predicate$$11);
}
export function findIndex(predicate$$13, array$$55) {
  var index;
  const matchValue$$6 = array$$55.findIndex(predicate$$13);

  if (index = matchValue$$6 | 0, index > -1) {
    const index$$1 = matchValue$$6 | 0;
    return index$$1 | 0;
  } else {
    return indexNotFound() | 0;
  }
}
export function tryFindIndex(predicate$$15, array$$57) {
  var index$$2;
  const matchValue$$7 = array$$57.findIndex(predicate$$15);

  if (index$$2 = matchValue$$7 | 0, index$$2 > -1) {
    const index$$3 = matchValue$$7 | 0;
    return index$$3;
  } else {
    return null;
  }
}
export function pick(chooser, array$$59) {
  const loop$$1 = function loop$$1(i$$23) {
    loop$$1: while (true) {
      if (i$$23 >= array$$59.length) {
        return indexNotFound();
      } else {
        const matchValue$$8 = chooser(array$$59[i$$23]);

        if (matchValue$$8 != null) {
          const res$$6 = value$$10(matchValue$$8);
          return res$$6;
        } else {
          i$$23 = i$$23 + 1;
          continue loop$$1;
        }
      }
    }
  };

  return loop$$1(0);
}
export function tryPick(chooser$$1, array$$60) {
  const loop$$2 = function loop$$2(i$$24) {
    loop$$2: while (true) {
      if (i$$24 >= array$$60.length) {
        return null;
      } else {
        const matchValue$$9 = chooser$$1(array$$60[i$$24]);

        if (matchValue$$9 == null) {
          i$$24 = i$$24 + 1;
          continue loop$$2;
        } else {
          const res$$7 = matchValue$$9;
          return res$$7;
        }
      }
    }
  };

  return loop$$2(0);
}
export function findBack(predicate$$17, array$$61) {
  const loop$$3 = function loop$$3(i$$25) {
    loop$$3: while (true) {
      if (i$$25 < 0) {
        return indexNotFound();
      } else if (predicate$$17(array$$61[i$$25])) {
        return array$$61[i$$25];
      } else {
        i$$25 = i$$25 - 1;
        continue loop$$3;
      }
    }
  };

  return loop$$3(array$$61.length - 1);
}
export function tryFindBack(predicate$$18, array$$62) {
  const loop$$4 = function loop$$4(i$$26) {
    loop$$4: while (true) {
      if (i$$26 < 0) {
        return null;
      } else if (predicate$$18(array$$62[i$$26])) {
        return some(array$$62[i$$26]);
      } else {
        i$$26 = i$$26 - 1;
        continue loop$$4;
      }
    }
  };

  return loop$$4(array$$62.length - 1);
}
export function findIndexBack(predicate$$19, array$$63) {
  const loop$$5 = function loop$$5(i$$27) {
    loop$$5: while (true) {
      if (i$$27 < 0) {
        return indexNotFound() | 0;
      } else if (predicate$$19(array$$63[i$$27])) {
        return i$$27 | 0;
      } else {
        i$$27 = i$$27 - 1;
        continue loop$$5;
      }
    }
  };

  return loop$$5(array$$63.length - 1) | 0;
}
export function tryFindIndexBack(predicate$$20, array$$64) {
  const loop$$6 = function loop$$6(i$$28) {
    loop$$6: while (true) {
      if (i$$28 < 0) {
        return null;
      } else if (predicate$$20(array$$64[i$$28])) {
        return i$$28;
      } else {
        i$$28 = i$$28 - 1;
        continue loop$$6;
      }
    }
  };

  return loop$$6(array$$64.length - 1);
}
export function choose(f$$7, source$$5, cons$$30) {
  const res$$8 = new cons$$30(0);
  let j$$1 = 0;

  for (let i$$29 = 0; i$$29 <= source$$5.length - 1; i$$29++) {
    const matchValue$$10 = f$$7(source$$5[i$$29]);

    if (matchValue$$10 == null) {} else {
      const y = value$$10(matchValue$$10);
      res$$8[j$$1] = y;
      j$$1 = j$$1 + 1;
    }
  }

  return res$$8;
}
export function foldIndexed(folder$$2, state$$4, array$$65) {
  return array$$65.reduce(function folder$$3(acc$$2, x$$3, i$$30) {
    return folder$$2(i$$30, acc$$2, x$$3);
  }, state$$4);
}
export function fold(folder$$4, state$$6, array$$67) {
  return array$$67.reduce(folder$$4, state$$6);
}
export function iterate(action, array$$69) {
  for (let i$$31 = 0; i$$31 <= array$$69.length - 1; i$$31++) {
    action(array$$69[i$$31]);
  }
}
export function iterateIndexed(action$$1, array$$70) {
  for (let i$$32 = 0; i$$32 <= array$$70.length - 1; i$$32++) {
    action$$1(i$$32, array$$70[i$$32]);
  }
}
export function iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$33 = 0; i$$33 <= array1$$2.length - 1; i$$33++) {
    action$$2(array1$$2[i$$33], array2$$2[i$$33]);
  }
}
export function iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$34 = 0; i$$34 <= array1$$3.length - 1; i$$34++) {
    action$$3(i$$34, array1$$3[i$$34], array2$$3[i$$34]);
  }
}
export function isEmpty(array$$71) {
  return array$$71.length === 0;
}
export function forAll(predicate$$21, array$$72) {
  return array$$72.every(predicate$$21);
}
export function permute(f$$8, array$$74) {
  const size = array$$74.length | 0;
  const res$$9 = new array$$74.constructor(array$$74.length);
  const checkFlags = new Array(size);
  iterateIndexed(function (i$$35, x$$5) {
    const j$$2 = f$$8(i$$35) | 0;

    if (j$$2 < 0 ? true : j$$2 >= size) {
      throw new Error("Not a valid permutation");
    }

    res$$9[j$$2] = x$$5;
    checkFlags[j$$2] = 1;
  }, array$$74);
  const isValid = forAll(function (y$$1) {
    return 1 === y$$1;
  }, checkFlags);

  if (!isValid) {
    throw new Error("Not a valid permutation");
  }

  return res$$9;
}
export function setSlice(target$$5, lower, upper, source$$6) {
  const lower$$1 = defaultArg(lower, 0) | 0;
  const upper$$1 = defaultArg(upper, 0) | 0;
  const length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  if (ArrayBuffer.isView(target$$5) ? source$$6.length <= length : false) {
    return target$$5.set(source$$6, lower$$1);
  } else {
    for (let i$$36 = 0; i$$36 <= length; i$$36++) {
      target$$5[i$$36 + lower$$1] = source$$6[i$$36];
    }
  }
}
export function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$7, y$$2) {
    return comparer.Compare(projection$$3(x$$7), projection$$3(y$$2));
  });
}
export function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$8, y$$3) {
    return comparer$$1.Compare(x$$8, y$$3);
  });
}

function copyArray(array$$75) {
  const result$$9 = new array$$75.constructor(array$$75.length);

  for (let i$$37 = 0; i$$37 <= array$$75.length - 1; i$$37++) {
    result$$9[i$$37] = array$$75[i$$37];
  }

  return result$$9;
}

export function sort(xs$$2, comparer$$2) {
  const xs$$3 = copyArray(xs$$2);
  xs$$3.sort(function comparer$$3(x$$9, y$$4) {
    return comparer$$2.Compare(x$$9, y$$4);
  });
  return xs$$3;
}
export function sortBy(projection$$4, xs$$4, comparer$$4) {
  const xs$$5 = copyArray(xs$$4);
  xs$$5.sort(function comparer$$5(x$$10, y$$5) {
    return comparer$$4.Compare(projection$$4(x$$10), projection$$4(y$$5));
  });
  return xs$$5;
}
export function sortDescending(xs$$6, comparer$$6) {
  const xs$$7 = copyArray(xs$$6);
  xs$$7.sort(function comparer$$7(x$$11, y$$6) {
    return comparer$$6.Compare(x$$11, y$$6) * -1;
  });
  return xs$$7;
}
export function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  const xs$$9 = copyArray(xs$$8);
  xs$$9.sort(function comparer$$9(x$$12, y$$7) {
    return comparer$$8.Compare(projection$$5(x$$12), projection$$5(y$$7)) * -1;
  });
  return xs$$9;
}
export function sortWith(comparer$$10, xs$$10) {
  const xs$$11 = copyArray(xs$$10);
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
export function unfold(generator, state$$8) {
  const res$$10 = [];

  const loop$$7 = function loop$$7(state$$9) {
    const matchValue$$11 = generator(state$$9);

    if (matchValue$$11 != null) {
      const x$$13 = matchValue$$11[0];
      const s$0027$$2 = matchValue$$11[1];
      res$$10.push(x$$13);
      loop$$7(s$0027$$2);
    }
  };

  loop$$7(state$$8);
  return res$$10;
}
export function unzip(array$$77) {
  const len$$11 = array$$77.length | 0;
  const res1$$1 = new Array(len$$11);
  const res2$$1 = new Array(len$$11);
  iterateIndexed(function (i$$38, tupledArg) {
    res1$$1[i$$38] = tupledArg[0];
    res2$$1[i$$38] = tupledArg[1];
  }, array$$77);
  return [res1$$1, res2$$1];
}
export function unzip3(array$$78) {
  const len$$14 = array$$78.length | 0;
  const res1$$2 = new Array(len$$14);
  const res2$$2 = new Array(len$$14);
  const res3 = new Array(len$$14);
  iterateIndexed(function (i$$39, tupledArg$$1) {
    res1$$2[i$$39] = tupledArg$$1[0];
    res2$$2[i$$39] = tupledArg$$1[1];
    res3[i$$39] = tupledArg$$1[2];
  }, array$$78);
  return [res1$$2, res2$$2, res3];
}
export function zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$10 = new Array(array1$$4.length);

  for (let i$$40 = 0; i$$40 <= array1$$4.length - 1; i$$40++) {
    result$$10[i$$40] = [array1$$4[i$$40], array2$$4[i$$40]];
  }

  return result$$10;
}
export function zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$11 = new Array(array1$$5.length);

  for (let i$$41 = 0; i$$41 <= array1$$5.length - 1; i$$41++) {
    result$$11[i$$41] = [array1$$5[i$$41], array2$$5[i$$41], array3[i$$41]];
  }

  return result$$11;
}
export function chunkBySize(chunkSize, array$$79) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive." + "\\nParameter name: " + "size");
  }

  if (array$$79.length === 0) {
    return [[]];
  } else {
    const result$$12 = [];

    for (let x$$14 = 0; x$$14 <= ~~Math.ceil(array$$79.length / chunkSize) - 1; x$$14++) {
      const start$$7 = x$$14 * chunkSize | 0;
      const slice = array$$79.slice(start$$7, start$$7 + chunkSize);
      result$$12.push(slice);
    }

    return result$$12;
  }
}
export function splitAt(index$$4, array$$82) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative" + "\\nParameter name: " + "index");
  }

  if (index$$4 > array$$82.length) {
    throw new Error("The input sequence has an insufficient number of elements." + "\\nParameter name: " + "index");
  }

  return [array$$82.slice(0, 0 + index$$4), array$$82.slice(index$$4)];
}
export function compareWith(comparer$$12, array1$$6, array2$$6) {
  if (array1$$6 == null) {
    if (array2$$6 == null) {
      return 0;
    } else {
      return -1 | 0;
    }
  } else if (array2$$6 == null) {
    return 1;
  } else {
    let i$$42 = 0;
    let result$$13 = 0;
    const length1 = array1$$6.length | 0;
    const length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$42 < length1 ? result$$13 === 0 : false) {
        result$$13 = comparer$$12(array1$$6[i$$42], array2$$6[i$$42]);
        i$$42 = i$$42 + 1;
      }

      return result$$13 | 0;
    }
  }
}
export function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return compareWith(compare, array1$$7, array2$$7) === 0;
}
export function exactlyOne(array$$85) {
  if (array$$85.length === 1) {
    return array$$85[0];
  } else if (array$$85.length === 0) {
    throw new Error("The input sequence was empty" + "\\nParameter name: " + "array");
  } else {
    throw new Error("Input array too long" + "\\nParameter name: " + "array");
  }
}
export function head(array$$86) {
  if (array$$86.length === 0) {
    throw new Error("The input array was empty" + "\\nParameter name: " + "array");
  } else {
    return array$$86[0];
  }
}
export function tryHead(array$$87) {
  if (array$$87.length === 0) {
    return null;
  } else {
    return some(array$$87[0]);
  }
}
export function tail(array$$88) {
  if (array$$88.length === 0) {
    throw new Error("Not enough elements" + "\\nParameter name: " + "array");
  }

  return array$$88.slice(1);
}
export function item(index$$5, array$$90) {
  return array$$90[index$$5];
}
export function tryItem(index$$6, array$$91) {
  if (index$$6 < 0 ? true : index$$6 >= array$$91.length) {
    return null;
  } else {
    return some(array$$91[index$$6]);
  }
}
export function foldBackIndexed(folder$$6, array$$92, state$$10) {
  return array$$92.reduceRight(function folder$$7(acc$$4, x$$15, i$$43) {
    return folder$$6(i$$43, x$$15, acc$$4);
  }, state$$10);
}
export function foldBack(folder$$8, array$$94, state$$12) {
  return array$$94.reduceRight(function folder$$9(acc$$5, x$$16) {
    return folder$$8(x$$16, acc$$5);
  }, state$$12);
}
export function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  let acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  }

  for (let i$$44 = 0; i$$44 <= array1$$8.length - 1; i$$44++) {
    acc$$6 = folder$$10(i$$44, acc$$6, array1$$8[i$$44], array2$$8[i$$44]);
  }

  return acc$$6;
}
export function fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$17, y$$8) {
    return folder$$11(acc$$7, x$$17, y$$8);
  }, state$$15, array1$$9, array2$$9);
}
export function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  let acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  }

  const size$$1 = array1$$10.length | 0;

  for (let i$$45 = 1; i$$45 <= size$$1; i$$45++) {
    acc$$8 = folder$$12(i$$45 - 1, array1$$10[size$$1 - i$$45], array2$$10[size$$1 - i$$45], acc$$8);
  }

  return acc$$8;
}
export function foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$18, y$$9, acc$$9) {
    return f$$9(x$$18, y$$9, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
export function reduce(reduction, array$$96) {
  if (array$$96.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$96.reduce(reduction);
}
export function reduceBack(reduction$$2, array$$98) {
  if (array$$98.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$98.reduceRight(reduction$$2);
}
export function forAll2(predicate$$23, array1$$12, array2$$12) {
  return fold2(function (acc$$10, x$$19, y$$10) {
    return acc$$10 ? predicate$$23(x$$19, y$$10) : false;
  }, true, array1$$12, array2$$12);
}
export function existsOffset($arg$$164, $arg$$165, $arg$$166) {
  existsOffset: while (true) {
    const predicate$$24 = $arg$$164,
          array$$100 = $arg$$165,
          index$$7 = $arg$$166;

    if (index$$7 === array$$100.length) {
      return false;
    } else if (predicate$$24(array$$100[index$$7])) {
      return true;
    } else {
      $arg$$164 = predicate$$24;
      $arg$$165 = array$$100;
      $arg$$166 = index$$7 + 1;
      continue existsOffset;
    }
  }
}
export function exists(predicate$$25, array$$101) {
  return existsOffset(predicate$$25, array$$101, 0);
}
export function existsOffset2($arg$$169, $arg$$170, $arg$$171, $arg$$172) {
  existsOffset2: while (true) {
    const predicate$$26 = $arg$$169,
          array1$$13 = $arg$$170,
          array2$$13 = $arg$$171,
          index$$8 = $arg$$172;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$26(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $arg$$169 = predicate$$26;
      $arg$$170 = array1$$13;
      $arg$$171 = array2$$13;
      $arg$$172 = index$$8 + 1;
      continue existsOffset2;
    }
  }
}
export function exists2(predicate$$27, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  }

  return existsOffset2(predicate$$27, array1$$14, array2$$14, 0);
}
export function sum(array$$102, adder) {
  let acc$$11 = adder.GetZero();

  for (let i$$46 = 0; i$$46 <= array$$102.length - 1; i$$46++) {
    acc$$11 = adder.Add(acc$$11, array$$102[i$$46]);
  }

  return acc$$11;
}
export function sumBy(projection$$6, array$$103, adder$$1) {
  let acc$$12 = adder$$1.GetZero();

  for (let i$$47 = 0; i$$47 <= array$$103.length - 1; i$$47++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$103[i$$47]));
  }

  return acc$$12;
}
export function maxBy(projection$$7, xs$$12, comparer$$14) {
  return reduce(function (x$$20, y$$11) {
    return comparer$$14.Compare(projection$$7(y$$11), projection$$7(x$$20)) > 0 ? y$$11 : x$$20;
  }, xs$$12);
}
export function max(xs$$13, comparer$$15) {
  return reduce(function (x$$21, y$$12) {
    return comparer$$15.Compare(y$$12, x$$21) > 0 ? y$$12 : x$$21;
  }, xs$$13);
}
export function minBy(projection$$8, xs$$14, comparer$$16) {
  return reduce(function (x$$22, y$$13) {
    return comparer$$16.Compare(projection$$8(y$$13), projection$$8(x$$22)) > 0 ? x$$22 : y$$13;
  }, xs$$14);
}
export function min(xs$$15, comparer$$17) {
  return reduce(function (x$$23, y$$14) {
    return comparer$$17.Compare(y$$14, x$$23) > 0 ? x$$23 : y$$14;
  }, xs$$15);
}
export function average(array$$104, averager) {
  if (array$$104.length === 0) {
    throw new Error("The input array was empty" + "\\nParameter name: " + "array");
  }

  let total = averager.GetZero();

  for (let i$$48 = 0; i$$48 <= array$$104.length - 1; i$$48++) {
    total = averager.Add(total, array$$104[i$$48]);
  }

  return averager.DivideByInt(total, array$$104.length);
}
export function averageBy(projection$$9, array$$105, averager$$1) {
  if (array$$105.length === 0) {
    throw new Error("The input array was empty" + "\\nParameter name: " + "array");
  }

  let total$$1 = averager$$1.GetZero();

  for (let i$$49 = 0; i$$49 <= array$$105.length - 1; i$$49++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$105[i$$49]));
  }

  return averager$$1.DivideByInt(total$$1, array$$105.length);
}
export function ofSeq(source$$8, cons$$31) {
  return cons$$31.from(source$$8);
}
export function ofList(source$$9, cons$$32) {
  return cons$$32.from(source$$9);
}
export function toList(source$$10) {
  const len$$20 = source$$10.length | 0;
  let target$$7 = L();

  for (let i$$50 = len$$20 - 1; i$$50 >= 0; i$$50--) {
    target$$7 = L(source$$10[i$$50], target$$7);
  }

  return target$$7;
}
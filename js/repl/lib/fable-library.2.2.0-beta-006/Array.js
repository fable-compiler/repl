import { defaultArg, value as value$$11, some } from "./Option.js";
import { compare, addToSet, tryGetValue, comparerFromEqualityComparer, max as max$$1, comparePrimitives } from "./Util.js";
import { createMutable } from "./Map.js";
import { delay, map as map$$1, rangeNumber, iterate as iterate$$1 } from "./Seq.js";
import { createMutable as createMutable$$1 } from "./Set.js";
import { List } from "./Types.js";
import { ofSeq as ofSeq$$1 } from "./Array.js";

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
    throw new Error("The input array was empty\\nParameter name: array");
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
        const $i$$13$$49 = i$$13;
        i$$13 = $i$$13$$49 + 1;
        continue loop;
      }

      break;
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
    throw new Error("The input must be non-negative\\nParameter name: count");
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
    throw new Error("The input must be non-negative\\nParameter name: count");
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
    throw new Error("count is greater than array length\\nParameter name: count");
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
    throw new Error("The input must be non-negative\\nParameter name: count");
  }

  if (count$$16 > array$$40.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
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
export function removeAllInPlace(predicate$$9, array$$49) {
  const countRemoveAll = function countRemoveAll(count$$20) {
    const i$$21 = array$$49.findIndex(predicate$$9);

    if (i$$21 > -1) {
      array$$49.splice(i$$21, 1);
      return countRemoveAll(count$$20) + 1 | 0;
    } else {
      return count$$20 | 0;
    }
  };

  return countRemoveAll(0) | 0;
}
export function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$21) {
  const diff = targetIndex$$1 - sourceIndex | 0;

  for (let i$$22 = sourceIndex; i$$22 <= sourceIndex + count$$21 - 1; i$$22++) {
    target$$4[i$$22 + diff] = source$$3[i$$22];
  }
}
export function partition(f$$6, source$$4, cons$$29) {
  const len$$9 = source$$4.length | 0;
  const res1 = new cons$$29(len$$9);
  const res2 = new cons$$29(len$$9);
  let iTrue = 0;
  let iFalse = 0;

  for (let i$$23 = 0; i$$23 <= len$$9 - 1; i$$23++) {
    if (f$$6(source$$4[i$$23])) {
      res1[iTrue] = source$$4[i$$23];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$23];
      iFalse = iFalse + 1;
    }
  }

  return [truncate(iTrue, res1), truncate(iFalse, res2)];
}
export function find(predicate$$11, array$$54) {
  const matchValue$$5 = array$$54.find(predicate$$11);

  if (matchValue$$5 == null) {
    return indexNotFound();
  } else {
    const res$$5 = value$$11(matchValue$$5);
    return res$$5;
  }
}
export function tryFind(predicate$$13, array$$56) {
  return array$$56.find(predicate$$13);
}
export function findIndex(predicate$$15, array$$58) {
  var index;
  const matchValue$$6 = array$$58.findIndex(predicate$$15);

  if (index = matchValue$$6 | 0, index > -1) {
    const index$$1 = matchValue$$6 | 0;
    return index$$1 | 0;
  } else {
    return indexNotFound() | 0;
  }
}
export function tryFindIndex(predicate$$17, array$$60) {
  var index$$2;
  const matchValue$$7 = array$$60.findIndex(predicate$$17);

  if (index$$2 = matchValue$$7 | 0, index$$2 > -1) {
    const index$$3 = matchValue$$7 | 0;
    return index$$3;
  } else {
    return null;
  }
}
export function pick(chooser, array$$62) {
  const loop$$1 = function loop$$1(i$$24) {
    loop$$1: while (true) {
      if (i$$24 >= array$$62.length) {
        return indexNotFound();
      } else {
        const matchValue$$8 = chooser(array$$62[i$$24]);

        if (matchValue$$8 != null) {
          const res$$6 = value$$11(matchValue$$8);
          return res$$6;
        } else {
          const $i$$24$$86 = i$$24;
          i$$24 = $i$$24$$86 + 1;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return loop$$1(0);
}
export function tryPick(chooser$$1, array$$63) {
  const loop$$2 = function loop$$2(i$$25) {
    loop$$2: while (true) {
      if (i$$25 >= array$$63.length) {
        return null;
      } else {
        const matchValue$$9 = chooser$$1(array$$63[i$$25]);

        if (matchValue$$9 == null) {
          const $i$$25$$89 = i$$25;
          i$$25 = $i$$25$$89 + 1;
          continue loop$$2;
        } else {
          const res$$7 = matchValue$$9;
          return res$$7;
        }
      }

      break;
    }
  };

  return loop$$2(0);
}
export function findBack(predicate$$19, array$$64) {
  const loop$$3 = function loop$$3(i$$26) {
    loop$$3: while (true) {
      if (i$$26 < 0) {
        return indexNotFound();
      } else if (predicate$$19(array$$64[i$$26])) {
        return array$$64[i$$26];
      } else {
        const $i$$26$$92 = i$$26;
        i$$26 = $i$$26$$92 - 1;
        continue loop$$3;
      }

      break;
    }
  };

  return loop$$3(array$$64.length - 1);
}
export function tryFindBack(predicate$$20, array$$65) {
  const loop$$4 = function loop$$4(i$$27) {
    loop$$4: while (true) {
      if (i$$27 < 0) {
        return null;
      } else if (predicate$$20(array$$65[i$$27])) {
        return some(array$$65[i$$27]);
      } else {
        const $i$$27$$95 = i$$27;
        i$$27 = $i$$27$$95 - 1;
        continue loop$$4;
      }

      break;
    }
  };

  return loop$$4(array$$65.length - 1);
}
export function findLastIndex(predicate$$21, array$$66) {
  const loop$$5 = function loop$$5(i$$28) {
    loop$$5: while (true) {
      if (i$$28 < 0) {
        return -1 | 0;
      } else if (predicate$$21(array$$66[i$$28])) {
        return i$$28 | 0;
      } else {
        const $i$$28$$98 = i$$28;
        i$$28 = $i$$28$$98 - 1;
        continue loop$$5;
      }

      break;
    }
  };

  return loop$$5(array$$66.length - 1) | 0;
}
export function findIndexBack(predicate$$22, array$$67) {
  const loop$$6 = function loop$$6(i$$29) {
    loop$$6: while (true) {
      if (i$$29 < 0) {
        return indexNotFound() | 0;
      } else if (predicate$$22(array$$67[i$$29])) {
        return i$$29 | 0;
      } else {
        const $i$$29$$101 = i$$29;
        i$$29 = $i$$29$$101 - 1;
        continue loop$$6;
      }

      break;
    }
  };

  return loop$$6(array$$67.length - 1) | 0;
}
export function tryFindIndexBack(predicate$$23, array$$68) {
  const loop$$7 = function loop$$7(i$$30) {
    loop$$7: while (true) {
      if (i$$30 < 0) {
        return null;
      } else if (predicate$$23(array$$68[i$$30])) {
        return i$$30;
      } else {
        const $i$$30$$104 = i$$30;
        i$$30 = $i$$30$$104 - 1;
        continue loop$$7;
      }

      break;
    }
  };

  return loop$$7(array$$68.length - 1);
}
export function choose(chooser$$2, array$$69, cons$$30) {
  const f$$7 = function f$$7(x$$3) {
    return chooser$$2(x$$3) != null;
  };

  const g = function g(x$$4) {
    return value$$11(chooser$$2(x$$4));
  };

  const arr$$6 = array$$69.filter(f$$7);
  return map(g, arr$$6, cons$$30);
}
export function foldIndexed(folder$$2, state$$4, array$$71) {
  return array$$71.reduce(function folder$$3(acc$$2, x$$5, i$$31) {
    return folder$$2(i$$31, acc$$2, x$$5);
  }, state$$4);
}
export function fold(folder$$4, state$$6, array$$73) {
  return array$$73.reduce(folder$$4, state$$6);
}
export function iterate(action, array$$75) {
  for (let i$$32 = 0; i$$32 <= array$$75.length - 1; i$$32++) {
    action(array$$75[i$$32]);
  }
}
export function iterateIndexed(action$$1, array$$76) {
  for (let i$$33 = 0; i$$33 <= array$$76.length - 1; i$$33++) {
    action$$1(i$$33, array$$76[i$$33]);
  }
}
export function iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$34 = 0; i$$34 <= array1$$2.length - 1; i$$34++) {
    action$$2(array1$$2[i$$34], array2$$2[i$$34]);
  }
}
export function iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  }

  for (let i$$35 = 0; i$$35 <= array1$$3.length - 1; i$$35++) {
    action$$3(i$$35, array1$$3[i$$35], array2$$3[i$$35]);
  }
}
export function isEmpty(array$$77) {
  return array$$77.length === 0;
}
export function forAll(predicate$$25, array$$78) {
  return array$$78.every(predicate$$25);
}
export function permute(f$$8, array$$80) {
  const size = array$$80.length | 0;
  const res$$8 = new array$$80.constructor(array$$80.length);
  const checkFlags = new Array(size);
  iterateIndexed(function (i$$36, x$$7) {
    const j$$1 = f$$8(i$$36) | 0;

    if (j$$1 < 0 ? true : j$$1 >= size) {
      throw new Error("Not a valid permutation");
    }

    res$$8[j$$1] = x$$7;
    checkFlags[j$$1] = 1;
  }, array$$80);
  const isValid = forAll(function (y) {
    return 1 === y;
  }, checkFlags);

  if (!isValid) {
    throw new Error("Not a valid permutation");
  }

  return res$$8;
}
export function setSlice(target$$5, lower, upper, source$$5) {
  const lower$$1 = defaultArg(lower, 0) | 0;
  const upper$$1 = defaultArg(upper, 0) | 0;
  const length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  if (ArrayBuffer.isView(target$$5) ? source$$5.length <= length : false) {
    return target$$5.set(source$$5, lower$$1);
  } else {
    for (let i$$37 = 0; i$$37 <= length; i$$37++) {
      target$$5[i$$37 + lower$$1] = source$$5[i$$37];
    }
  }
}
export function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$9, y$$1) {
    return comparer.Compare(projection$$3(x$$9), projection$$3(y$$1));
  });
}
export function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$10, y$$2) {
    return comparer$$1.Compare(x$$10, y$$2);
  });
}

function copyArray(array$$81) {
  const result$$9 = new array$$81.constructor(array$$81.length);

  for (let i$$38 = 0; i$$38 <= array$$81.length - 1; i$$38++) {
    result$$9[i$$38] = array$$81[i$$38];
  }

  return result$$9;
}

export function sort(xs$$2, comparer$$2) {
  const xs$$3 = copyArray(xs$$2);
  xs$$3.sort(function comparer$$3(x$$11, y$$3) {
    return comparer$$2.Compare(x$$11, y$$3);
  });
  return xs$$3;
}
export function sortBy(projection$$4, xs$$4, comparer$$4) {
  const xs$$5 = copyArray(xs$$4);
  xs$$5.sort(function comparer$$5(x$$12, y$$4) {
    return comparer$$4.Compare(projection$$4(x$$12), projection$$4(y$$4));
  });
  return xs$$5;
}
export function sortDescending(xs$$6, comparer$$6) {
  const xs$$7 = copyArray(xs$$6);
  xs$$7.sort(function comparer$$7(x$$13, y$$5) {
    return comparer$$6.Compare(x$$13, y$$5) * -1;
  });
  return xs$$7;
}
export function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  const xs$$9 = copyArray(xs$$8);
  xs$$9.sort(function comparer$$9(x$$14, y$$6) {
    return comparer$$8.Compare(projection$$5(x$$14), projection$$5(y$$6)) * -1;
  });
  return xs$$9;
}
export function sortWith(comparer$$10, xs$$10) {
  const xs$$11 = copyArray(xs$$10);
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
export function unfold(generator, state$$8) {
  const res$$9 = [];

  const loop$$8 = function loop$$8(state$$9) {
    loop$$8: while (true) {
      const matchValue$$10 = generator(state$$9);

      if (matchValue$$10 != null) {
        const x$$15 = matchValue$$10[0];
        const s$0027$$2 = matchValue$$10[1];
        res$$9.push(x$$15);
        state$$9 = s$0027$$2;
        continue loop$$8;
      }

      break;
    }
  };

  loop$$8(state$$8);
  return res$$9;
}
export function unzip(array$$83) {
  const len$$11 = array$$83.length | 0;
  const res1$$1 = new Array(len$$11);
  const res2$$1 = new Array(len$$11);
  iterateIndexed(function (i$$39, tupledArg) {
    res1$$1[i$$39] = tupledArg[0];
    res2$$1[i$$39] = tupledArg[1];
  }, array$$83);
  return [res1$$1, res2$$1];
}
export function unzip3(array$$84) {
  const len$$14 = array$$84.length | 0;
  const res1$$2 = new Array(len$$14);
  const res2$$2 = new Array(len$$14);
  const res3 = new Array(len$$14);
  iterateIndexed(function (i$$40, tupledArg$$1) {
    res1$$2[i$$40] = tupledArg$$1[0];
    res2$$2[i$$40] = tupledArg$$1[1];
    res3[i$$40] = tupledArg$$1[2];
  }, array$$84);
  return [res1$$2, res2$$2, res3];
}
export function zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$10 = new Array(array1$$4.length);

  for (let i$$41 = 0; i$$41 <= array1$$4.length - 1; i$$41++) {
    result$$10[i$$41] = [array1$$4[i$$41], array2$$4[i$$41]];
  }

  return result$$10;
}
export function zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  }

  const result$$11 = new Array(array1$$5.length);

  for (let i$$42 = 0; i$$42 <= array1$$5.length - 1; i$$42++) {
    result$$11[i$$42] = [array1$$5[i$$42], array2$$5[i$$42], array3[i$$42]];
  }

  return result$$11;
}
export function chunkBySize(chunkSize, array$$85) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive.\\nParameter name: size");
  }

  if (array$$85.length === 0) {
    return [[]];
  } else {
    const result$$12 = [];

    for (let x$$16 = 0; x$$16 <= ~~Math.ceil(array$$85.length / chunkSize) - 1; x$$16++) {
      const start$$8 = x$$16 * chunkSize | 0;
      const slice = array$$85.slice(start$$8, start$$8 + chunkSize);
      result$$12.push(slice);
    }

    return result$$12;
  }
}
export function splitAt(index$$4, array$$88) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: index");
  }

  if (index$$4 > array$$88.length) {
    throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
  }

  return [array$$88.slice(0, 0 + index$$4), array$$88.slice(index$$4)];
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
    let i$$43 = 0;
    let result$$13 = 0;
    const length1 = array1$$6.length | 0;
    const length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$43 < length1 ? result$$13 === 0 : false) {
        result$$13 = comparer$$12(array1$$6[i$$43], array2$$6[i$$43]);
        i$$43 = i$$43 + 1;
      }

      return result$$13 | 0;
    }
  }
}
export function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return compareWith(compare, array1$$7, array2$$7) === 0;
}
export function exactlyOne(array$$91) {
  if (array$$91.length === 1) {
    return array$$91[0];
  } else if (array$$91.length === 0) {
    throw new Error("The input sequence was empty\\nParameter name: array");
  } else {
    throw new Error("Input array too long\\nParameter name: array");
  }
}
export function head(array$$92) {
  if (array$$92.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    return array$$92[0];
  }
}
export function tryHead(array$$93) {
  if (array$$93.length === 0) {
    return null;
  } else {
    return some(array$$93[0]);
  }
}
export function tail(array$$94) {
  if (array$$94.length === 0) {
    throw new Error("Not enough elements\\nParameter name: array");
  }

  return array$$94.slice(1);
}
export function item(index$$5, array$$96) {
  return array$$96[index$$5];
}
export function tryItem(index$$6, array$$97) {
  if (index$$6 < 0 ? true : index$$6 >= array$$97.length) {
    return null;
  } else {
    return some(array$$97[index$$6]);
  }
}
export function foldBackIndexed(folder$$6, array$$98, state$$10) {
  return array$$98.reduceRight(function folder$$7(acc$$4, x$$17, i$$44) {
    return folder$$6(i$$44, x$$17, acc$$4);
  }, state$$10);
}
export function foldBack(folder$$8, array$$100, state$$12) {
  return array$$100.reduceRight(function folder$$9(acc$$5, x$$18) {
    return folder$$8(x$$18, acc$$5);
  }, state$$12);
}
export function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  let acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  }

  for (let i$$45 = 0; i$$45 <= array1$$8.length - 1; i$$45++) {
    acc$$6 = folder$$10(i$$45, acc$$6, array1$$8[i$$45], array2$$8[i$$45]);
  }

  return acc$$6;
}
export function fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$19, y$$7) {
    return folder$$11(acc$$7, x$$19, y$$7);
  }, state$$15, array1$$9, array2$$9);
}
export function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  let acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  }

  const size$$1 = array1$$10.length | 0;

  for (let i$$46 = 1; i$$46 <= size$$1; i$$46++) {
    acc$$8 = folder$$12(i$$46 - 1, array1$$10[size$$1 - i$$46], array2$$10[size$$1 - i$$46], acc$$8);
  }

  return acc$$8;
}
export function foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$20, y$$8, acc$$9) {
    return f$$9(x$$20, y$$8, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
export function reduce(reduction, array$$102) {
  if (array$$102.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$102.reduce(reduction);
}
export function reduceBack(reduction$$2, array$$104) {
  if (array$$104.length === 0) {
    throw new Error("The input array was empty");
  }

  return array$$104.reduceRight(reduction$$2);
}
export function forAll2(predicate$$27, array1$$12, array2$$12) {
  return fold2(function (acc$$10, x$$21, y$$9) {
    return acc$$10 ? predicate$$27(x$$21, y$$9) : false;
  }, true, array1$$12, array2$$12);
}
export function existsOffset($arg$$176, $arg$$177, $arg$$178) {
  existsOffset: while (true) {
    const predicate$$28 = $arg$$176,
          array$$106 = $arg$$177,
          index$$7 = $arg$$178;

    if (index$$7 === array$$106.length) {
      return false;
    } else if (predicate$$28(array$$106[index$$7])) {
      return true;
    } else {
      $arg$$176 = predicate$$28;
      $arg$$177 = array$$106;
      $arg$$178 = index$$7 + 1;
      continue existsOffset;
    }

    break;
  }
}
export function exists(predicate$$29, array$$107) {
  return existsOffset(predicate$$29, array$$107, 0);
}
export function existsOffset2($arg$$181, $arg$$182, $arg$$183, $arg$$184) {
  existsOffset2: while (true) {
    const predicate$$30 = $arg$$181,
          array1$$13 = $arg$$182,
          array2$$13 = $arg$$183,
          index$$8 = $arg$$184;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$30(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $arg$$181 = predicate$$30;
      $arg$$182 = array1$$13;
      $arg$$183 = array2$$13;
      $arg$$184 = index$$8 + 1;
      continue existsOffset2;
    }

    break;
  }
}
export function exists2(predicate$$31, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  }

  return existsOffset2(predicate$$31, array1$$14, array2$$14, 0);
}
export function sum(array$$108, adder) {
  let acc$$11 = adder.GetZero();

  for (let i$$47 = 0; i$$47 <= array$$108.length - 1; i$$47++) {
    acc$$11 = adder.Add(acc$$11, array$$108[i$$47]);
  }

  return acc$$11;
}
export function sumBy(projection$$6, array$$109, adder$$1) {
  let acc$$12 = adder$$1.GetZero();

  for (let i$$48 = 0; i$$48 <= array$$109.length - 1; i$$48++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$109[i$$48]));
  }

  return acc$$12;
}
export function maxBy(projection$$7, xs$$12, comparer$$14) {
  return reduce(function (x$$22, y$$10) {
    return comparer$$14.Compare(projection$$7(y$$10), projection$$7(x$$22)) > 0 ? y$$10 : x$$22;
  }, xs$$12);
}
export function max(xs$$13, comparer$$15) {
  return reduce(function (x$$23, y$$11) {
    return comparer$$15.Compare(y$$11, x$$23) > 0 ? y$$11 : x$$23;
  }, xs$$13);
}
export function minBy(projection$$8, xs$$14, comparer$$16) {
  return reduce(function (x$$24, y$$12) {
    return comparer$$16.Compare(projection$$8(y$$12), projection$$8(x$$24)) > 0 ? x$$24 : y$$12;
  }, xs$$14);
}
export function min(xs$$15, comparer$$17) {
  return reduce(function (x$$25, y$$13) {
    return comparer$$17.Compare(y$$13, x$$25) > 0 ? x$$25 : y$$13;
  }, xs$$15);
}
export function average(array$$110, averager) {
  if (array$$110.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  let total = averager.GetZero();

  for (let i$$49 = 0; i$$49 <= array$$110.length - 1; i$$49++) {
    total = averager.Add(total, array$$110[i$$49]);
  }

  return averager.DivideByInt(total, array$$110.length);
}
export function averageBy(projection$$9, array$$111, averager$$1) {
  if (array$$111.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  }

  let total$$1 = averager$$1.GetZero();

  for (let i$$50 = 0; i$$50 <= array$$111.length - 1; i$$50++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$111[i$$50]));
  }

  return averager$$1.DivideByInt(total$$1, array$$111.length);
}
export function ofSeq(source$$7, cons$$31) {
  return cons$$31.from(source$$7);
}
export function ofList(source$$8, cons$$32) {
  return cons$$32.from(source$$8);
}
export function toList(source$$9) {
  const len$$20 = source$$9.length | 0;
  let target$$7 = new List();

  for (let i$$51 = len$$20 - 1; i$$51 >= 0; i$$51--) {
    target$$7 = new List(source$$9[i$$51], target$$7);
  }

  return target$$7;
}
export function windowed(windowSize, source$$10) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  }

  return ofSeq$$1(delay(function () {
    return map$$1(function (i$$52) {
      return source$$10.slice(i$$52 - windowSize, i$$52 - 1 + 1);
    }, rangeNumber(windowSize, 1, source$$10.length));
  }), Array);
}

import { defaultArg, value as value$$15, some } from "./Option.js";
import { min as min$$1, compare, addToDict, addToSet, getItemFromDict, tryGetValue, max as max$$1, comparePrimitives } from "./Util.js";
import { createMutable } from "./Map.js";
import { createMutable as createMutable$$1 } from "./Set.js";
import { List } from "./Types.js";
import { iterate as iterate$$1 } from "./Seq.js";
const indexNotFoundMsg = "An index satisfying the predicate was not found in the collection.";
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
  } else {
    void null;
  }

  return array$$5[array$$5.length - 1];
}
export function tryLast(array$$6) {
  if (array$$6.length === 0) {
    return undefined;
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
    return source.map(function (delegateArg0, delegateArg1) {
      return f(delegateArg1, delegateArg0);
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
  } else {
    void null;
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
  } else {
    void null;
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
  } else {
    void null;
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
  } else {
    void null;
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
    let acc = state;
    const res = new cons$$7(matchValue);

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
    let acc$$1 = state$$1;
    const res$$1 = new cons$$8(matchValue$$1);

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
  var arr$$4;
  const arrays$$1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
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
        if (arr$$4 = arrays$$1[0], ArrayBuffer.isView(arr$$4)) {
          let totalIdx = 0;
          let totalLength = 0;

          for (let idx = 0; idx <= arrays$$1.length - 1; idx++) {
            const arr$$5 = arrays$$1[idx];
            totalLength = totalLength + arr$$5.length;
          }

          const result$$4 = new cons$$9(totalLength);

          for (let idx$$1 = 0; idx$$1 <= arrays$$1.length - 1; idx$$1++) {
            const arr$$6 = arrays$$1[idx$$1];

            for (let j = 0; j <= arr$$6.length - 1; j++) {
              result$$4[totalIdx] = arr$$6[j];
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
  const dict = createMutable([], eq);
  const keys = [];

  for (let idx$$2 = 0; idx$$2 <= array$$15.length - 1; idx$$2++) {
    const value$$2 = array$$15[idx$$2];
    const key = projection(value$$2);
    const matchValue$$3 = tryGetValue(dict, key, 0);

    if (matchValue$$3[0]) {
      dict.set(key, matchValue$$3[1] + 1);
    } else {
      dict.set(key, 1);
      const value$$3 = keys.push(key);
      void value$$3;
    }
  }

  const result$$5 = map(function (key$$1) {
    return [key$$1, getItemFromDict(dict, key$$1)];
  }, keys, Array);
  return result$$5;
}
export function distinctBy(projection$$1, array$$17, eq$$1) {
  const hashSet = createMutable$$1([], eq$$1);
  return filter(function predicate$$2($arg$$3) {
    const arg00 = projection$$1($arg$$3);
    return addToSet(arg00, hashSet);
  }, array$$17);
}
export function distinct(array$$19, eq$$2) {
  return distinctBy(function (x$$2) {
    return x$$2;
  }, array$$19, eq$$2);
}
export function where(predicate$$3, array$$20) {
  return array$$20.filter(predicate$$3);
}
export function contains(value$$4, array$$22, eq$$3) {
  const loop = function loop($i$$12$$79) {
    loop: while (true) {
      const i$$12 = $i$$12$$79;

      if (i$$12 >= array$$22.length) {
        return false;
      } else if (eq$$3.Equals(value$$4, array$$22[i$$12])) {
        return true;
      } else {
        $i$$12$$79 = i$$12 + 1;
        continue loop;
      }

      break;
    }
  };

  return loop(0);
}
export function except(itemsToExclude, array$$23, eq$$4) {
  if (array$$23.length === 0) {
    return array$$23;
  } else {
    const cached = createMutable$$1(itemsToExclude, eq$$4);
    return array$$23.filter(function predicate$$5(arg00$$1) {
      return addToSet(arg00$$1, cached);
    });
  }
}
export function groupBy(projection$$2, array$$26, cons$$11, eq$$5) {
  const dict$$1 = createMutable([], eq$$5);
  const keys$$1 = [];

  for (let idx$$3 = 0; idx$$3 <= array$$26.length - 1; idx$$3++) {
    const v = array$$26[idx$$3];
    const key$$2 = projection$$2(v);
    const matchValue$$4 = tryGetValue(dict$$1, key$$2, null);

    if (matchValue$$4[0]) {
      dict$$1.set(key$$2, new List(v, matchValue$$4[1]));
    } else {
      addToDict(dict$$1, key$$2, new List(v, new List()));
      const value$$5 = keys$$1.push(key$$2);
      void value$$5;
    }
  }

  const result$$6 = map(function (key$$3) {
    var array$$28;
    return [key$$3, (array$$28 = cons$$11.from(getItemFromDict(dict$$1, key$$3)), (array$$28.reverse()))];
  }, keys$$1, Array);
  return result$$6;
}
export function empty(cons$$12) {
  return new cons$$12(0);
}
export function singleton(value$$6, cons$$14) {
  const ar = new cons$$14(1);
  ar[0] = value$$6;
  return ar;
}
export function initialize(count$$8, initializer, cons$$15) {
  if (count$$8 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  const result$$7 = new cons$$15(count$$8);

  for (let i$$13 = 0; i$$13 <= count$$8 - 1; i$$13++) {
    result$$7[i$$13] = initializer(i$$13);
  }

  return result$$7;
}
export function pairwise(array$$30) {
  if (array$$30.length < 2) {
    return [];
  } else {
    const count$$9 = array$$30.length - 1 | 0;
    const result$$8 = new Array(count$$9);

    for (let i$$14 = 0; i$$14 <= count$$9 - 1; i$$14++) {
      result$$8[i$$14] = [array$$30[i$$14], array$$30[i$$14 + 1]];
    }

    return result$$8;
  }
}
export function replicate(count$$10, initial, cons$$16) {
  if (count$$10 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  const result$$9 = new cons$$16(count$$10);

  for (let i$$15 = 0; i$$15 <= result$$9.length - 1; i$$15++) {
    result$$9[i$$15] = initial;
  }

  return result$$9;
}
export function copy(array$$31, cons$$17) {
  return array$$31.slice();
}
export function reverse(array$$33, cons$$18) {
  const array$$35 = array$$33.slice();
  return array$$35.reverse();
}
export function scan(folder, state$$2, array$$37, cons$$19) {
  const res$$2 = new cons$$19(array$$37.length + 1);
  res$$2[0] = state$$2;

  for (let i$$16 = 0; i$$16 <= array$$37.length - 1; i$$16++) {
    res$$2[i$$16 + 1] = folder(res$$2[i$$16], array$$37[i$$16]);
  }

  return res$$2;
}
export function scanBack(folder$$1, array$$38, state$$3, cons$$20) {
  const res$$3 = new cons$$20(array$$38.length + 1);
  res$$3[array$$38.length] = state$$3;

  for (let i$$17 = array$$38.length - 1; i$$17 >= 0; i$$17--) {
    res$$3[i$$17] = folder$$1(array$$38[i$$17], res$$3[i$$17 + 1]);
  }

  return res$$3;
}
export function skip(count$$11, array$$39, cons$$21) {
  if (count$$11 > array$$39.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$11 === array$$39.length) {
    return new cons$$21(0);
  } else {
    const count$$12 = (count$$11 < 0 ? 0 : count$$11) | 0;
    return array$$39.slice(count$$12);
  }
}
export function skipWhile(predicate$$7, array$$41, cons$$23) {
  let count$$14 = 0;

  while (count$$14 < array$$41.length ? predicate$$7(array$$41[count$$14]) : false) {
    count$$14 = count$$14 + 1;
  }

  if (count$$14 === array$$41.length) {
    return new cons$$23(0);
  } else {
    const count$$15 = count$$14 | 0;
    return array$$41.slice(count$$15);
  }
}
export function take(count$$16, array$$43, cons$$25) {
  if (count$$16 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$16 > array$$43.length) {
    throw new Error("count is greater than array length\\nParameter name: count");
  } else {
    void null;
  }

  if (count$$16 === 0) {
    return new cons$$25(0);
  } else {
    return array$$43.slice(0, 0 + count$$16);
  }
}
export function takeWhile(predicate$$8, array$$45, cons$$27) {
  let count$$18 = 0;

  while (count$$18 < array$$45.length ? predicate$$8(array$$45[count$$18]) : false) {
    count$$18 = count$$18 + 1;
  }

  if (count$$18 === 0) {
    return new cons$$27(0);
  } else {
    const count$$19 = count$$18 | 0;
    return array$$45.slice(0, 0 + count$$19);
  }
}
export function addInPlace(x$$3, array$$47) {
  const value$$7 = array$$47.push(x$$3);
  void value$$7;
}
export function addRangeInPlace(range, array$$49) {
  iterate$$1(function (x$$4) {
    const value$$8 = array$$49.push(x$$4);
    void value$$8;
  }, range);
}
export function removeInPlace(item$$5, array$$51) {
  const i$$18 = array$$51.indexOf(item$$5);

  if (i$$18 > -1) {
    const value$$9 = array$$51.splice(i$$18, 1);
    void value$$9;
    return true;
  } else {
    return false;
  }
}
export function removeAllInPlace(predicate$$9, array$$54) {
  const countRemoveAll = function countRemoveAll(count$$20) {
    const i$$19 = array$$54.findIndex(predicate$$9);

    if (i$$19 > -1) {
      const value$$10 = array$$54.splice(i$$19, 1);
      void value$$10;
      return countRemoveAll(count$$20) + 1 | 0;
    } else {
      return count$$20 | 0;
    }
  };

  return countRemoveAll(0) | 0;
}
export function copyTo(source$$3, sourceIndex, target$$4, targetIndex$$1, count$$21) {
  const diff = targetIndex$$1 - sourceIndex | 0;

  for (let i$$20 = sourceIndex; i$$20 <= sourceIndex + count$$21 - 1; i$$20++) {
    target$$4[i$$20 + diff] = source$$3[i$$20];
  }
}
export function partition(f$$6, source$$4, cons$$29) {
  const len$$7 = source$$4.length | 0;
  const res1 = new cons$$29(len$$7);
  const res2 = new cons$$29(len$$7);
  let iTrue = 0;
  let iFalse = 0;

  for (let i$$21 = 0; i$$21 <= len$$7 - 1; i$$21++) {
    if (f$$6(source$$4[i$$21])) {
      res1[iTrue] = source$$4[i$$21];
      iTrue = iTrue + 1;
    } else {
      res2[iFalse] = source$$4[i$$21];
      iFalse = iFalse + 1;
    }
  }

  return [(truncate(iTrue, res1)), (truncate(iFalse, res2))];
}
export function find(predicate$$11, array$$59) {
  const matchValue$$5 = array$$59.find(predicate$$11);

  if (matchValue$$5 == null) {
    throw new Error(indexNotFoundMsg);
  } else {
    const res$$4 = value$$15(matchValue$$5);
    return res$$4;
  }
}
export function tryFind(predicate$$13, array$$61) {
  return array$$61.find(predicate$$13);
}
export function findIndex(predicate$$15, array$$63) {
  const matchValue$$6 = array$$63.findIndex(predicate$$15);

  if (matchValue$$6 > -1) {
    return matchValue$$6 | 0;
  } else {
    throw new Error(indexNotFoundMsg);
  }
}
export function tryFindIndex(predicate$$17, array$$65) {
  const matchValue$$7 = array$$65.findIndex(predicate$$17);

  if (matchValue$$7 > -1) {
    return matchValue$$7;
  } else {
    return undefined;
  }
}
export function pick(chooser, array$$67) {
  const loop$$1 = function loop$$1($i$$22$$149) {
    loop$$1: while (true) {
      const i$$22 = $i$$22$$149;

      if (i$$22 >= array$$67.length) {
        throw new Error(indexNotFoundMsg);
      } else {
        const matchValue$$8 = chooser(array$$67[i$$22]);

        if (matchValue$$8 != null) {
          const res$$5 = value$$15(matchValue$$8);
          return res$$5;
        } else {
          $i$$22$$149 = i$$22 + 1;
          continue loop$$1;
        }
      }

      break;
    }
  };

  return loop$$1(0);
}
export function tryPick(chooser$$1, array$$68) {
  const loop$$2 = function loop$$2($i$$23$$152) {
    loop$$2: while (true) {
      const i$$23 = $i$$23$$152;

      if (i$$23 >= array$$68.length) {
        return undefined;
      } else {
        const matchValue$$9 = chooser$$1(array$$68[i$$23]);

        if (matchValue$$9 == null) {
          $i$$23$$152 = i$$23 + 1;
          continue loop$$2;
        } else {
          return matchValue$$9;
        }
      }

      break;
    }
  };

  return loop$$2(0);
}
export function findBack(predicate$$19, array$$69) {
  const loop$$3 = function loop$$3($i$$24$$155) {
    loop$$3: while (true) {
      const i$$24 = $i$$24$$155;

      if (i$$24 < 0) {
        throw new Error(indexNotFoundMsg);
      } else if (predicate$$19(array$$69[i$$24])) {
        return array$$69[i$$24];
      } else {
        $i$$24$$155 = i$$24 - 1;
        continue loop$$3;
      }

      break;
    }
  };

  return loop$$3(array$$69.length - 1);
}
export function tryFindBack(predicate$$20, array$$70) {
  const loop$$4 = function loop$$4($i$$25$$158) {
    loop$$4: while (true) {
      const i$$25 = $i$$25$$158;

      if (i$$25 < 0) {
        return undefined;
      } else if (predicate$$20(array$$70[i$$25])) {
        return some(array$$70[i$$25]);
      } else {
        $i$$25$$158 = i$$25 - 1;
        continue loop$$4;
      }

      break;
    }
  };

  return loop$$4(array$$70.length - 1);
}
export function findLastIndex(predicate$$21, array$$71) {
  const loop$$5 = function loop$$5($i$$26$$161) {
    loop$$5: while (true) {
      const i$$26 = $i$$26$$161;

      if (i$$26 < 0) {
        return -1 | 0;
      } else if (predicate$$21(array$$71[i$$26])) {
        return i$$26 | 0;
      } else {
        $i$$26$$161 = i$$26 - 1;
        continue loop$$5;
      }

      break;
    }
  };

  return loop$$5(array$$71.length - 1) | 0;
}
export function findIndexBack(predicate$$22, array$$72) {
  const loop$$6 = function loop$$6($i$$27$$164) {
    loop$$6: while (true) {
      const i$$27 = $i$$27$$164;

      if (i$$27 < 0) {
        throw new Error(indexNotFoundMsg);
      } else if (predicate$$22(array$$72[i$$27])) {
        return i$$27 | 0;
      } else {
        $i$$27$$164 = i$$27 - 1;
        continue loop$$6;
      }

      break;
    }
  };

  return loop$$6(array$$72.length - 1) | 0;
}
export function tryFindIndexBack(predicate$$23, array$$73) {
  const loop$$7 = function loop$$7($i$$28$$167) {
    loop$$7: while (true) {
      const i$$28 = $i$$28$$167;

      if (i$$28 < 0) {
        return undefined;
      } else if (predicate$$23(array$$73[i$$28])) {
        return i$$28;
      } else {
        $i$$28$$167 = i$$28 - 1;
        continue loop$$7;
      }

      break;
    }
  };

  return loop$$7(array$$73.length - 1);
}
export function choose(chooser$$2, array$$74, cons$$30) {
  const arr$$7 = array$$74.filter(function f$$7(x$$5) {
    const option = chooser$$2(x$$5);
    return option != null;
  });
  return map(function g(x$$6) {
    const option$$1 = chooser$$2(x$$6);
    return value$$15(option$$1);
  }, arr$$7, cons$$30);
}
export function foldIndexed(folder$$2, state$$4, array$$76) {
  return array$$76.reduce(function (delegateArg0$$1, delegateArg1$$1, delegateArg2) {
    return folder$$2(delegateArg2, delegateArg0$$1, delegateArg1$$1);
  }, state$$4);
}
export function fold(folder$$4, state$$6, array$$78) {
  return array$$78.reduce(function (delegateArg0$$2, delegateArg1$$2) {
    return folder$$4(delegateArg0$$2, delegateArg1$$2);
  }, state$$6);
}
export function iterate(action, array$$80) {
  for (let i$$30 = 0; i$$30 <= array$$80.length - 1; i$$30++) {
    action(array$$80[i$$30]);
  }
}
export function iterateIndexed(action$$1, array$$81) {
  for (let i$$31 = 0; i$$31 <= array$$81.length - 1; i$$31++) {
    action$$1(i$$31, array$$81[i$$31]);
  }
}
export function iterate2(action$$2, array1$$2, array2$$2) {
  if (array1$$2.length !== array2$$2.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  for (let i$$32 = 0; i$$32 <= array1$$2.length - 1; i$$32++) {
    action$$2(array1$$2[i$$32], array2$$2[i$$32]);
  }
}
export function iterateIndexed2(action$$3, array1$$3, array2$$3) {
  if (array1$$3.length !== array2$$3.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  for (let i$$33 = 0; i$$33 <= array1$$3.length - 1; i$$33++) {
    action$$3(i$$33, array1$$3[i$$33], array2$$3[i$$33]);
  }
}
export function isEmpty(array$$82) {
  return array$$82.length === 0;
}
export function forAll(predicate$$25, array$$83) {
  return array$$83.every(predicate$$25);
}
export function permute(f$$8, array$$85) {
  const size = array$$85.length | 0;
  const res$$7 = array$$85.slice();
  const checkFlags = new Int32Array(size);
  iterateIndexed(function (i$$34, x$$9) {
    const j$$1 = f$$8(i$$34) | 0;

    if (j$$1 < 0 ? true : j$$1 >= size) {
      throw new Error("Not a valid permutation");
    } else {
      void null;
    }

    res$$7[j$$1] = x$$9;
    checkFlags[j$$1] = 1;
  }, array$$85);
  let isValid;
  isValid = checkFlags.every(function predicate$$27(y) {
    return 1 === y;
  });

  if (!isValid) {
    throw new Error("Not a valid permutation");
  } else {
    void null;
  }

  return res$$7;
}
export function setSlice(target$$5, lower, upper, source$$5) {
  const lower$$1 = defaultArg(lower, 0) | 0;
  const upper$$1 = defaultArg(upper, 0) | 0;
  const length = (upper$$1 > 0 ? upper$$1 : target$$5.length - 1) - lower$$1 | 0;

  for (let i$$35 = 0; i$$35 <= length; i$$35++) {
    target$$5[i$$35 + lower$$1] = source$$5[i$$35];
  }
}
export function sortInPlaceBy(projection$$3, xs, comparer) {
  xs.sort(function (x$$11, y$$1) {
    return comparer.Compare(projection$$3(x$$11), projection$$3(y$$1));
  });
}
export function sortInPlace(xs$$1, comparer$$1) {
  xs$$1.sort(function (x$$12, y$$2) {
    return comparer$$1.Compare(x$$12, y$$2);
  });
}
export function sort(xs$$2, comparer$$2) {
  const xs$$3 = xs$$2.slice();
  xs$$3.sort(function comparer$$3(x$$13, y$$3) {
    return comparer$$2.Compare(x$$13, y$$3);
  });
  return xs$$3;
}
export function sortBy(projection$$4, xs$$4, comparer$$4) {
  const xs$$5 = xs$$4.slice();
  xs$$5.sort(function comparer$$5(x$$14, y$$4) {
    return comparer$$4.Compare(projection$$4(x$$14), projection$$4(y$$4));
  });
  return xs$$5;
}
export function sortDescending(xs$$6, comparer$$6) {
  const xs$$7 = xs$$6.slice();
  xs$$7.sort(function comparer$$7(x$$15, y$$5) {
    return comparer$$6.Compare(x$$15, y$$5) * -1;
  });
  return xs$$7;
}
export function sortByDescending(projection$$5, xs$$8, comparer$$8) {
  const xs$$9 = xs$$8.slice();
  xs$$9.sort(function comparer$$9(x$$16, y$$6) {
    return comparer$$8.Compare(projection$$5(x$$16), projection$$5(y$$6)) * -1;
  });
  return xs$$9;
}
export function sortWith(comparer$$10, xs$$10) {
  const xs$$11 = xs$$10.slice();
  xs$$11.sort(comparer$$10);
  return xs$$11;
}
export function unfold(generator, state$$8) {
  const res$$8 = [];

  const loop$$8 = function loop$$8($state$$9$$226) {
    loop$$8: while (true) {
      const state$$9 = $state$$9$$226;
      const matchValue$$10 = generator(state$$9);

      if (matchValue$$10 != null) {
        const x$$17 = matchValue$$10[0];
        const s$$2 = matchValue$$10[1];
        const value$$11 = res$$8.push(x$$17);
        void value$$11;
        $state$$9$$226 = s$$2;
        continue loop$$8;
      } else {
        void null;
      }

      break;
    }
  };

  loop$$8(state$$8);
  return res$$8;
}
export function unzip(array$$95) {
  const len$$8 = array$$95.length | 0;
  const res1$$1 = new Array(len$$8);
  const res2$$1 = new Array(len$$8);
  iterateIndexed(function (i$$36, tupledArg) {
    res1$$1[i$$36] = tupledArg[0];
    res2$$1[i$$36] = tupledArg[1];
  }, array$$95);
  return [res1$$1, res2$$1];
}
export function unzip3(array$$96) {
  const len$$11 = array$$96.length | 0;
  const res1$$2 = new Array(len$$11);
  const res2$$2 = new Array(len$$11);
  const res3 = new Array(len$$11);
  iterateIndexed(function (i$$37, tupledArg$$1) {
    res1$$2[i$$37] = tupledArg$$1[0];
    res2$$2[i$$37] = tupledArg$$1[1];
    res3[i$$37] = tupledArg$$1[2];
  }, array$$96);
  return [res1$$2, res2$$2, res3];
}
export function zip(array1$$4, array2$$4) {
  if (array1$$4.length !== array2$$4.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  let result$$10;
  const len$$15 = array1$$4.length | 0;
  result$$10 = new Array(len$$15);

  for (let i$$38 = 0; i$$38 <= array1$$4.length - 1; i$$38++) {
    result$$10[i$$38] = [array1$$4[i$$38], array2$$4[i$$38]];
  }

  return result$$10;
}
export function zip3(array1$$5, array2$$5, array3) {
  if (array1$$5.length !== array2$$5.length ? true : array2$$5.length !== array3.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  let result$$11;
  const len$$16 = array1$$5.length | 0;
  result$$11 = new Array(len$$16);

  for (let i$$39 = 0; i$$39 <= array1$$5.length - 1; i$$39++) {
    result$$11[i$$39] = [array1$$5[i$$39], array2$$5[i$$39], array3[i$$39]];
  }

  return result$$11;
}
export function chunkBySize(chunkSize, array$$97) {
  if (chunkSize < 1) {
    throw new Error("The input must be positive.\\nParameter name: size");
  } else {
    void null;
  }

  if (array$$97.length === 0) {
    return [[]];
  } else {
    const result$$12 = [];

    for (let x$$18 = 0; x$$18 <= ~~Math.ceil(array$$97.length / chunkSize) - 1; x$$18++) {
      const start$$8 = x$$18 * chunkSize | 0;
      const slice = array$$97.slice(start$$8, start$$8 + chunkSize);
      const value$$12 = result$$12.push(slice);
      void value$$12;
    }

    return result$$12;
  }
}
export function splitAt(index$$4, array$$100) {
  if (index$$4 < 0) {
    throw new Error("The input must be non-negative\\nParameter name: index");
  } else {
    void null;
  }

  if (index$$4 > array$$100.length) {
    throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
  } else {
    void null;
  }

  return [array$$100.slice(0, 0 + index$$4), array$$100.slice(index$$4)];
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
    let i$$40 = 0;
    let result$$13 = 0;
    const length1 = array1$$6.length | 0;
    const length2 = array2$$6.length | 0;

    if (length1 > length2) {
      return 1;
    } else if (length1 < length2) {
      return -1 | 0;
    } else {
      while (i$$40 < length1 ? result$$13 === 0 : false) {
        result$$13 = comparer$$12(array1$$6[i$$40], array2$$6[i$$40]);
        i$$40 = i$$40 + 1;
      }

      return result$$13 | 0;
    }
  }
}
export function equalsWith(comparer$$13, array1$$7, array2$$7) {
  return compareWith(compare, array1$$7, array2$$7) === 0;
}
export function exactlyOne(array$$103) {
  if (array$$103.length === 1) {
    return array$$103[0];
  } else if (array$$103.length === 0) {
    throw new Error("The input sequence was empty\\nParameter name: array");
  } else {
    throw new Error("Input array too long\\nParameter name: array");
  }
}
export function head(array$$104) {
  if (array$$104.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    return array$$104[0];
  }
}
export function tryHead(array$$105) {
  if (array$$105.length === 0) {
    return undefined;
  } else {
    return some(array$$105[0]);
  }
}
export function tail(array$$106) {
  if (array$$106.length === 0) {
    throw new Error("Not enough elements\\nParameter name: array");
  } else {
    void null;
  }

  return array$$106.slice(1);
}
export function item(index$$5, array$$108) {
  return array$$108[index$$5];
}
export function tryItem(index$$6, array$$109) {
  if (index$$6 < 0 ? true : index$$6 >= array$$109.length) {
    return undefined;
  } else {
    return some(array$$109[index$$6]);
  }
}
export function foldBackIndexed(folder$$6, array$$110, state$$10) {
  return array$$110.reduceRight(function (delegateArg0$$3, delegateArg1$$3, delegateArg2$$1) {
    return folder$$6(delegateArg2$$1, delegateArg1$$3, delegateArg0$$3);
  }, state$$10);
}
export function foldBack(folder$$8, array$$112, state$$12) {
  return array$$112.reduceRight(function (delegateArg0$$4, delegateArg1$$4) {
    return folder$$8(delegateArg1$$4, delegateArg0$$4);
  }, state$$12);
}
export function foldIndexed2(folder$$10, state$$14, array1$$8, array2$$8) {
  let acc$$6 = state$$14;

  if (array1$$8.length !== array2$$8.length) {
    throw new Error("Arrays have different lengths");
  } else {
    void null;
  }

  for (let i$$42 = 0; i$$42 <= array1$$8.length - 1; i$$42++) {
    acc$$6 = folder$$10(i$$42, acc$$6, array1$$8[i$$42], array2$$8[i$$42]);
  }

  return acc$$6;
}
export function fold2(folder$$11, state$$15, array1$$9, array2$$9) {
  return foldIndexed2(function (_arg1, acc$$7, x$$21, y$$7) {
    return folder$$11(acc$$7, x$$21, y$$7);
  }, state$$15, array1$$9, array2$$9);
}
export function foldBackIndexed2(folder$$12, array1$$10, array2$$10, state$$16) {
  let acc$$8 = state$$16;

  if (array1$$10.length !== array2$$10.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  const size$$1 = array1$$10.length | 0;

  for (let i$$43 = 1; i$$43 <= size$$1; i$$43++) {
    acc$$8 = folder$$12(i$$43 - 1, array1$$10[size$$1 - i$$43], array2$$10[size$$1 - i$$43], acc$$8);
  }

  return acc$$8;
}
export function foldBack2(f$$9, array1$$11, array2$$11, state$$17) {
  return foldBackIndexed2(function (_arg1$$1, x$$22, y$$8, acc$$9) {
    return f$$9(x$$22, y$$8, acc$$9);
  }, array1$$11, array2$$11, state$$17);
}
export function reduce(reduction, array$$114) {
  if (array$$114.length === 0) {
    throw new Error("The input array was empty");
  } else {
    void null;
  }

  return array$$114.reduce(reduction);
}
export function reduceBack(reduction$$2, array$$116) {
  if (array$$116.length === 0) {
    throw new Error("The input array was empty");
  } else {
    void null;
  }

  return array$$116.reduceRight(reduction$$2);
}
export function forAll2(predicate$$29, array1$$12, array2$$12) {
  return fold2(function (acc$$10, x$$23, y$$9) {
    return acc$$10 ? predicate$$29(x$$23, y$$9) : false;
  }, true, array1$$12, array2$$12);
}
export function existsOffset($predicate$$30$$281, $array$$118$$282, $index$$7$$283) {
  existsOffset: while (true) {
    const predicate$$30 = $predicate$$30$$281,
          array$$118 = $array$$118$$282,
          index$$7 = $index$$7$$283;

    if (index$$7 === array$$118.length) {
      return false;
    } else if (predicate$$30(array$$118[index$$7])) {
      return true;
    } else {
      $predicate$$30$$281 = predicate$$30;
      $array$$118$$282 = array$$118;
      $index$$7$$283 = index$$7 + 1;
      continue existsOffset;
    }

    break;
  }
}
export function exists(predicate$$31, array$$119) {
  return existsOffset(predicate$$31, array$$119, 0);
}
export function existsOffset2($predicate$$32$$286, $array1$$13$$287, $array2$$13$$288, $index$$8$$289) {
  existsOffset2: while (true) {
    const predicate$$32 = $predicate$$32$$286,
          array1$$13 = $array1$$13$$287,
          array2$$13 = $array2$$13$$288,
          index$$8 = $index$$8$$289;

    if (index$$8 === array1$$13.length) {
      return false;
    } else if (predicate$$32(array1$$13[index$$8], array2$$13[index$$8])) {
      return true;
    } else {
      $predicate$$32$$286 = predicate$$32;
      $array1$$13$$287 = array1$$13;
      $array2$$13$$288 = array2$$13;
      $index$$8$$289 = index$$8 + 1;
      continue existsOffset2;
    }

    break;
  }
}
export function exists2(predicate$$33, array1$$14, array2$$14) {
  if (array1$$14.length !== array2$$14.length) {
    throw new Error("Arrays had different lengths");
  } else {
    void null;
  }

  return existsOffset2(predicate$$33, array1$$14, array2$$14, 0);
}
export function sum(array$$120, adder) {
  let acc$$11 = adder.GetZero();

  for (let i$$44 = 0; i$$44 <= array$$120.length - 1; i$$44++) {
    acc$$11 = adder.Add(acc$$11, array$$120[i$$44]);
  }

  return acc$$11;
}
export function sumBy(projection$$6, array$$121, adder$$1) {
  let acc$$12 = adder$$1.GetZero();

  for (let i$$45 = 0; i$$45 <= array$$121.length - 1; i$$45++) {
    acc$$12 = adder$$1.Add(acc$$12, projection$$6(array$$121[i$$45]));
  }

  return acc$$12;
}
export function maxBy(projection$$7, xs$$12, comparer$$14) {
  return reduce(function (x$$24, y$$10) {
    return comparer$$14.Compare(projection$$7(y$$10), projection$$7(x$$24)) > 0 ? y$$10 : x$$24;
  }, xs$$12);
}
export function max(xs$$13, comparer$$15) {
  return reduce(function (x$$25, y$$11) {
    return comparer$$15.Compare(y$$11, x$$25) > 0 ? y$$11 : x$$25;
  }, xs$$13);
}
export function minBy(projection$$8, xs$$14, comparer$$16) {
  return reduce(function (x$$26, y$$12) {
    return comparer$$16.Compare(projection$$8(y$$12), projection$$8(x$$26)) > 0 ? x$$26 : y$$12;
  }, xs$$14);
}
export function min(xs$$15, comparer$$17) {
  return reduce(function (x$$27, y$$13) {
    return comparer$$17.Compare(y$$13, x$$27) > 0 ? x$$27 : y$$13;
  }, xs$$15);
}
export function average(array$$122, averager) {
  if (array$$122.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    void null;
  }

  let total = averager.GetZero();

  for (let i$$46 = 0; i$$46 <= array$$122.length - 1; i$$46++) {
    total = averager.Add(total, array$$122[i$$46]);
  }

  return averager.DivideByInt(total, array$$122.length);
}
export function averageBy(projection$$9, array$$123, averager$$1) {
  if (array$$123.length === 0) {
    throw new Error("The input array was empty\\nParameter name: array");
  } else {
    void null;
  }

  let total$$1 = averager$$1.GetZero();

  for (let i$$47 = 0; i$$47 <= array$$123.length - 1; i$$47++) {
    total$$1 = averager$$1.Add(total$$1, projection$$9(array$$123[i$$47]));
  }

  return averager$$1.DivideByInt(total$$1, array$$123.length);
}
export function ofSeq(source$$6, cons$$31) {
  return cons$$31.from(source$$6);
}
export function ofList(source$$7, cons$$32) {
  return cons$$32.from(source$$7);
}
export function toList(source$$8) {
  const len$$17 = source$$8.length | 0;
  let target$$6 = new List();

  for (let i$$48 = len$$17 - 1; i$$48 >= 0; i$$48--) {
    target$$6 = new List(source$$8[i$$48], target$$6);
  }

  return target$$6;
}
export function windowed(windowSize, source$$9) {
  if (windowSize <= 0) {
    throw new Error("windowSize must be positive");
  } else {
    void null;
  }

  let res$$9;
  const len$$18 = max$$1(comparePrimitives, 0, source$$9.length - windowSize) | 0;
  res$$9 = new Array(len$$18);

  for (let i$$49 = windowSize; i$$49 <= source$$9.length; i$$49++) {
    res$$9[i$$49 - windowSize] = source$$9.slice(i$$49 - windowSize, i$$49 - 1 + 1);
  }

  return res$$9;
}
export function splitInto(chunks, array$$124) {
  if (chunks < 1) {
    throw new Error("The input must be positive.\\nParameter name: chunks");
  } else {
    void null;
  }

  if (array$$124.length === 0) {
    return [[]];
  } else {
    const result$$14 = [];
    const chunks$$1 = min$$1(comparePrimitives, chunks, array$$124.length) | 0;
    const minChunkSize = ~~(array$$124.length / chunks$$1) | 0;
    const chunksWithExtraItem = array$$124.length % chunks$$1 | 0;

    for (let i$$50 = 0; i$$50 <= chunks$$1 - 1; i$$50++) {
      const chunkSize$$1 = (i$$50 < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
      const start$$11 = i$$50 * minChunkSize + min$$1(comparePrimitives, chunksWithExtraItem, i$$50) | 0;
      const slice$$1 = array$$124.slice(start$$11, start$$11 + chunkSize$$1);
      const value$$13 = result$$14.push(slice$$1);
      void value$$13;
    }

    return result$$14;
  }
}
export function transpose(arrays$$2, cons$$33) {
  var value$$14;
  const arrays$$3 = Array.isArray(arrays$$2) ? arrays$$2 : Array.from(arrays$$2);
  const len$$20 = arrays$$3.length | 0;

  if (len$$20 === 0) {
    return new Array(0);
  } else {
    const lenInner = arrays$$3[0].length | 0;

    if (value$$14 = (forAll(function predicate$$34(a) {
      return a.length === lenInner;
    }, arrays$$3)), (!value$$14)) {
      throw new Error("Arrays had different lengths");
    } else {
      void null;
    }

    const result$$15 = new Array(lenInner);

    for (let i$$51 = 0; i$$51 <= lenInner - 1; i$$51++) {
      result$$15[i$$51] = new cons$$33(len$$20);

      for (let j$$2 = 0; j$$2 <= len$$20 - 1; j$$2++) {
        result$$15[i$$51][j$$2] = arrays$$3[j$$2][i$$51];
      }
    }

    return result$$15;
  }
}
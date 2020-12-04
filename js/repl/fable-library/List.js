import { List } from "./Types.js";
import { defaultArg, value as value_1, some } from "./Option.js";
import { FSharpRef, List as List_1 } from "./Types.js";
import { transpose as transpose_1, pairwise as pairwise_1, collect as collect_1, scanBack as scanBack_1, scan as scan_1, foldBack2 as foldBack2_1, fold2 as fold2_1, fold as fold_1, map as map_1 } from "./Seq.js";
import { uncurry, count } from "./Util.js";
import { splitInto as splitInto_1, chunkBySize as chunkBySize_1, permute as permute_1, findIndexBack as findIndexBack_1, tryFindIndexBack as tryFindIndexBack_1 } from "./Array.js";
import { HashSet } from "./MutableSet.js";
import { getItemFromDict, addToDict, tryGetValue, addToSet } from "./MapUtil.js";
import { Dictionary } from "./MutableMap.js";

export function empty() {
    return new List();
}

export function singleton(x) {
    return new List(x, empty());
}

export function cons(x, xs) {
    return new List(x, xs);
}

export function head(_arg1) {
    if (_arg1.tail != null) {
        return _arg1.head;
    }
    else {
        throw (new Error("List was empty"));
    }
}

export function tryHead(_arg1) {
    if (_arg1.tail != null) {
        return some(_arg1.head);
    }
    else {
        return void 0;
    }
}

export function tail(_arg1) {
    if (_arg1.tail != null) {
        return _arg1.tail;
    }
    else {
        throw (new Error("List was empty"));
    }
}

export function last(_arg1_mut) {
    last:
    while (true) {
        const _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (_arg1.tail.tail == null) {
                return _arg1.head;
            }
            else {
                _arg1_mut = _arg1.tail;
                continue last;
            }
        }
        else {
            throw (new Error("List was empty"));
        }
        break;
    }
}

export function tryLast(_arg1_mut) {
    tryLast:
    while (true) {
        const _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (_arg1.tail.tail == null) {
                return some(_arg1.head);
            }
            else {
                _arg1_mut = _arg1.tail;
                continue tryLast;
            }
        }
        else {
            return void 0;
        }
        break;
    }
}

export function compareWith(comparer, xs, ys) {
    if (xs === ys) {
        return 0;
    }
    else {
        const loop = (xs_1_mut, ys_1_mut) => {
            loop:
            while (true) {
                const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                const matchValue = [xs_1, ys_1];
                if (matchValue[0].tail != null) {
                    if (matchValue[1].tail != null) {
                        const matchValue_1 = comparer(matchValue[0].head, matchValue[1].head) | 0;
                        if (matchValue_1 === 0) {
                            xs_1_mut = matchValue[0].tail;
                            ys_1_mut = matchValue[1].tail;
                            continue loop;
                        }
                        else {
                            return matchValue_1 | 0;
                        }
                    }
                    else {
                        return 1;
                    }
                }
                else if (matchValue[1].tail == null) {
                    return 0;
                }
                else {
                    return -1;
                }
                break;
            }
        };
        return loop(xs, ys) | 0;
    }
}

export function foldIndexedAux(f_mut, i_mut, acc_mut, _arg1_mut) {
    foldIndexedAux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            f_mut = f;
            i_mut = (i + 1);
            acc_mut = f(i, acc, _arg1.head);
            _arg1_mut = _arg1.tail;
            continue foldIndexedAux;
        }
        else {
            return acc;
        }
        break;
    }
}

export function foldIndexed(f, state, xs) {
    return foldIndexedAux(f, 0, state, xs);
}

export function fold(f_mut, state_mut, xs_mut) {
    fold:
    while (true) {
        const f = f_mut, state = state_mut, xs = xs_mut;
        if (xs.tail != null) {
            f_mut = f;
            state_mut = f(state, xs.head);
            xs_mut = xs.tail;
            continue fold;
        }
        else {
            return state;
        }
        break;
    }
}

export function reverse(xs) {
    return fold((acc, x) => (new List_1(x, acc)), new List_1(), xs);
}

export function foldBack(f, xs, state) {
    return fold((acc, x) => f(x, acc), state, reverse(xs));
}

export function toSeq(xs) {
    return map_1((x) => x, xs);
}

export function ofSeq(xs) {
    return reverse(fold_1((acc, x) => (new List_1(x, acc)), new List_1(), xs));
}

export function concat(lists) {
    return reverse(fold_1((state, xs) => fold((acc, x) => (new List_1(x, acc)), state, xs), new List_1(), lists));
}

export function foldIndexed2Aux(f_mut, i_mut, acc_mut, bs_mut, cs_mut) {
    foldIndexed2Aux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, bs = bs_mut, cs = cs_mut;
        const matchValue = [bs, cs];
        let pattern_matching_result, x, xs, y, ys;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
                x = matchValue[0].head;
                xs = matchValue[0].tail;
                y = matchValue[1].head;
                ys = matchValue[1].tail;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return acc;
            }
            case 1: {
                f_mut = f;
                i_mut = (i + 1);
                acc_mut = f(i, acc, x, y);
                bs_mut = xs;
                cs_mut = ys;
                continue foldIndexed2Aux;
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

export function foldIndexed2(f, state, xs, ys) {
    return foldIndexed2Aux(f, 0, state, xs, ys);
}

export function fold2(f, state, xs, ys) {
    return fold2_1(f, state, xs, ys);
}

export function foldBack2(f, xs, ys, state) {
    return foldBack2_1(f, xs, ys, state);
}

export function unfold(f, state) {
    const unfoldInner = (acc_mut, state_1_mut) => {
        unfoldInner:
        while (true) {
            const acc = acc_mut, state_1 = state_1_mut;
            const matchValue = f(state_1);
            if (matchValue != null) {
                acc_mut = (new List_1(matchValue[0], acc));
                state_1_mut = matchValue[1];
                continue unfoldInner;
            }
            else {
                return reverse(acc);
            }
            break;
        }
    };
    return unfoldInner(new List_1(), state);
}

export function foldIndexed3Aux(f_mut, i_mut, acc_mut, bs_mut, cs_mut, ds_mut) {
    foldIndexed3Aux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, bs = bs_mut, cs = cs_mut, ds = ds_mut;
        const matchValue = [bs, cs, ds];
        let pattern_matching_result, x, xs, y, ys, z, zs;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                if (matchValue[2].tail != null) {
                    pattern_matching_result = 1;
                    x = matchValue[0].head;
                    xs = matchValue[0].tail;
                    y = matchValue[1].head;
                    ys = matchValue[1].tail;
                    z = matchValue[2].head;
                    zs = matchValue[2].tail;
                }
                else {
                    pattern_matching_result = 2;
                }
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            if (matchValue[2].tail == null) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return acc;
            }
            case 1: {
                f_mut = f;
                i_mut = (i + 1);
                acc_mut = f(i, acc, x, y, z);
                bs_mut = xs;
                cs_mut = ys;
                ds_mut = zs;
                continue foldIndexed3Aux;
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

export function foldIndexed3(f, seed, xs, ys, zs) {
    return foldIndexed3Aux(f, 0, seed, xs, ys, zs);
}

export function fold3(f, state, xs, ys, zs) {
    return foldIndexed3((_arg1, acc, x, y, z) => f(acc, x, y, z), state, xs, ys, zs);
}

export function scan(f, state, xs) {
    return ofSeq(scan_1(f, state, xs));
}

export function scanBack(f, xs, state) {
    return ofSeq(scanBack_1(f, xs, state));
}

export function length(xs) {
    return fold((acc, _arg1) => (acc + 1), 0, xs);
}

export function append(xs, ys) {
    return fold((acc, x) => (new List_1(x, acc)), ys, reverse(xs));
}

export function collect(f, xs) {
    return ofSeq(collect_1(f, xs));
}

export function map(f, xs) {
    return reverse(fold((acc, x) => (new List_1(f(x), acc)), new List_1(), xs));
}

export function mapIndexed(f, xs) {
    return reverse(foldIndexed((i, acc, x) => (new List_1(f(i, x), acc)), new List_1(), xs));
}

export function indexed(xs) {
    return mapIndexed((i, x) => [i, x], xs);
}

export function map2(f, xs, ys) {
    return reverse(fold2((acc, x, y) => (new List_1(f(x, y), acc)), new List_1(), xs, ys));
}

export function mapIndexed2(f, xs, ys) {
    return reverse(foldIndexed2((i, acc, x, y) => (new List_1(f(i, x, y), acc)), new List_1(), xs, ys));
}

export function map3(f, xs, ys, zs) {
    return reverse(fold3((acc, x, y, z) => (new List_1(f(x, y, z), acc)), new List_1(), xs, ys, zs));
}

export function mapIndexed3(f, xs, ys, zs) {
    return reverse(foldIndexed3((i, acc, x, y, z) => (new List_1(f(i, x, y, z), acc)), new List_1(), xs, ys, zs));
}

export function mapFold(f, s, xs) {
    const patternInput_1 = fold((tupledArg, x) => {
        const patternInput = f(tupledArg[1], x);
        return [new List_1(patternInput[0], tupledArg[0]), patternInput[1]];
    }, [new List_1(), s], xs);
    return [reverse(patternInput_1[0]), patternInput_1[1]];
}

export function mapFoldBack(f, xs, s) {
    return mapFold((s_1, v) => f(v, s_1), s, reverse(xs));
}

export function iterate(f, xs) {
    fold((unitVar0, x) => {
        f(x);
    }, void 0, xs);
}

export function iterate2(f, xs, ys) {
    fold2((unitVar0, x, y) => {
        f(x, y);
    }, void 0, xs, ys);
}

export function iterateIndexed(f, xs) {
    foldIndexed((i, unitVar1, x) => {
        f(i, x);
    }, void 0, xs);
}

export function iterateIndexed2(f, xs, ys) {
    foldIndexed2((i, unitVar1, x, y) => {
        f(i, x, y);
    }, void 0, xs, ys);
}

export function ofArrayWithTail(xs, tail_1) {
    let res = tail_1;
    for (let i = count(xs) - 1; i >= 0; i--) {
        res = (new List_1(xs[i], res));
    }
    return res;
}

export function ofArray(xs) {
    return ofArrayWithTail(xs, new List_1());
}

export function isEmpty(_arg1) {
    if (_arg1.tail == null) {
        return true;
    }
    else {
        return false;
    }
}

export function tryPickIndexedAux(f_mut, i_mut, _arg1_mut) {
    tryPickIndexedAux:
    while (true) {
        const f = f_mut, i = i_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            const result = f(i, _arg1.head);
            if (result == null) {
                f_mut = f;
                i_mut = (i + 1);
                _arg1_mut = _arg1.tail;
                continue tryPickIndexedAux;
            }
            else {
                return result;
            }
        }
        else {
            return void 0;
        }
        break;
    }
}

export function tryPickIndexed(f, xs) {
    return tryPickIndexedAux(f, 0, xs);
}

export function tryPick(f, xs) {
    return tryPickIndexed((_arg1, x) => f(x), xs);
}

export function pick(f, xs) {
    const matchValue = tryPick(f, xs);
    if (matchValue != null) {
        return value_1(matchValue);
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

export function tryFindIndexed(f, xs) {
    return tryPickIndexed((i, x) => (f(i, x) ? some(x) : (void 0)), xs);
}

export function tryFind(f, xs) {
    return tryPickIndexed((_arg1, x) => (f(x) ? some(x) : (void 0)), xs);
}

export function findIndexed(f, xs) {
    const matchValue = tryFindIndexed(f, xs);
    if (matchValue != null) {
        return value_1(matchValue);
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

export function find(f, xs) {
    return findIndexed((_arg1, x) => f(x), xs);
}

export function findBack(f, xs) {
    return find(f, reverse(xs));
}

export function tryFindBack(f, xs) {
    return tryFind(f, reverse(xs));
}

export function tryFindIndex(f, xs) {
    return tryPickIndexed((i, x) => (f(x) ? i : (void 0)), xs);
}

export function tryFindIndexBack(f, xs) {
    return tryFindIndexBack_1(f, Array.from(xs));
}

export function findIndex(f, xs) {
    const matchValue = tryFindIndex(f, xs);
    if (matchValue != null) {
        return matchValue | 0;
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

export function findIndexBack(f, xs) {
    return findIndexBack_1(f, Array.from(xs));
}

export function item(n, xs) {
    return findIndexed((i, _arg1) => (n === i), xs);
}

export function tryItem(n, xs) {
    return tryFindIndexed((i, _arg1) => (n === i), xs);
}

export function filter(f, xs) {
    return reverse(fold((acc, x) => (f(x) ? (new List_1(x, acc)) : acc), new List_1(), xs));
}

export function partition(f, xs) {
    return fold(uncurry(2, (tupledArg) => {
        const lacc = tupledArg[0];
        const racc = tupledArg[1];
        return (x) => (f(x) ? [new List_1(x, lacc), racc] : [lacc, new List_1(x, racc)]);
    }), [new List_1(), new List_1()], reverse(xs));
}

export function choose(f, xs) {
    return reverse(fold((acc, x) => {
        const matchValue = f(x);
        return (matchValue == null) ? acc : (new List_1(value_1(matchValue), acc));
    }, new List_1(), xs));
}

export function contains(value, list, eq) {
    const loop = (xs_mut) => {
        loop:
        while (true) {
            const xs = xs_mut;
            if (xs.tail != null) {
                if (eq.Equals(value, xs.head)) {
                    return true;
                }
                else {
                    xs_mut = xs.tail;
                    continue loop;
                }
            }
            else {
                return false;
            }
            break;
        }
    };
    return loop(list);
}

export function except(itemsToExclude, array, eq) {
    if (isEmpty(array)) {
        return array;
    }
    else {
        const cached = new HashSet(itemsToExclude, eq);
        return filter((arg00) => addToSet(arg00, cached), array);
    }
}

export function initialize(n, f) {
    let xs = new List_1();
    for (let i = 0; i <= (n - 1); i++) {
        xs = (new List_1(f(i), xs));
    }
    return reverse(xs);
}

export function replicate(n, x) {
    return initialize(n, (_arg1) => x);
}

export function reduce(f, _arg1) {
    if (_arg1.tail != null) {
        return fold(f, _arg1.head, _arg1.tail);
    }
    else {
        throw (new Error("List was empty"));
    }
}

export function reduceBack(f, _arg1) {
    if (_arg1.tail != null) {
        return foldBack(f, _arg1.tail, _arg1.head);
    }
    else {
        throw (new Error("List was empty"));
    }
}

export function forAll(f, xs) {
    return fold((acc, x) => (acc ? f(x) : false), true, xs);
}

export function forAll2(f, xs, ys) {
    return fold2((acc, x, y) => (acc ? f(x, y) : false), true, xs, ys);
}

export function exists(f_mut, _arg1_mut) {
    exists:
    while (true) {
        const f = f_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (f(_arg1.head)) {
                return true;
            }
            else {
                f_mut = f;
                _arg1_mut = _arg1.tail;
                continue exists;
            }
        }
        else {
            return false;
        }
        break;
    }
}

export function exists2(f_mut, bs_mut, cs_mut) {
    exists2:
    while (true) {
        const f = f_mut, bs = bs_mut, cs = cs_mut;
        const matchValue = [bs, cs];
        let pattern_matching_result, x, xs, y, ys;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
                x = matchValue[0].head;
                xs = matchValue[0].tail;
                y = matchValue[1].head;
                ys = matchValue[1].tail;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return false;
            }
            case 1: {
                if (f(x, y)) {
                    return true;
                }
                else {
                    f_mut = f;
                    bs_mut = xs;
                    cs_mut = ys;
                    continue exists2;
                }
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

export function unzip(xs) {
    return foldBack((tupledArg, tupledArg_1) => [new List_1(tupledArg[0], tupledArg_1[0]), new List_1(tupledArg[1], tupledArg_1[1])], xs, [new List_1(), new List_1()]);
}

export function unzip3(xs) {
    return foldBack((tupledArg, tupledArg_1) => [new List_1(tupledArg[0], tupledArg_1[0]), new List_1(tupledArg[1], tupledArg_1[1]), new List_1(tupledArg[2], tupledArg_1[2])], xs, [new List_1(), new List_1(), new List_1()]);
}

export function zip(xs, ys) {
    return map2((x, y) => [x, y], xs, ys);
}

export function zip3(xs, ys, zs) {
    return map3((x, y, z) => [x, y, z], xs, ys, zs);
}

export function sort(xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => comparer.Compare(x, y))), xs_1)));
}

export function sortBy(projection, xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => comparer.Compare(projection(x), projection(y)))), xs_1)));
}

export function sortDescending(xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => (comparer.Compare(x, y) * -1))), xs_1)));
}

export function sortByDescending(projection, xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => (comparer.Compare(projection(x), projection(y)) * -1))), xs_1)));
}

export function sortWith(comparer, xs) {
    let comparer_1, xs_1;
    return ofArray((comparer_1 = comparer, (xs_1 = Array.from(xs), (xs_1.sort(comparer_1), xs_1))));
}

export function sum(xs, adder) {
    return fold((acc, x) => adder.Add(acc, x), adder.GetZero(), xs);
}

export function sumBy(f, xs, adder) {
    return fold((acc, x) => adder.Add(acc, f(x)), adder.GetZero(), xs);
}

export function maxBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? y : x), xs);
}

export function max(li, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? y : x), li);
}

export function minBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? x : y), xs);
}

export function min(xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? x : y), xs);
}

export function average(xs, averager) {
    return averager.DivideByInt(fold((acc, x) => averager.Add(acc, x), averager.GetZero(), xs), length(xs));
}

export function averageBy(f, xs, averager) {
    return averager.DivideByInt(fold((acc, x) => averager.Add(acc, f(x)), averager.GetZero(), xs), length(xs));
}

export function permute(f, xs) {
    return ofArray(permute_1(f, Array.from(xs)));
}

export function chunkBySize(chunkSize, xs) {
    return map(ofArray, ofArray(chunkBySize_1(chunkSize, Array.from(xs))));
}

export function skip(i, xs) {
    const skipInner = (i_1_mut, xs_1_mut) => {
        skipInner:
        while (true) {
            const i_1 = i_1_mut, xs_1 = xs_1_mut;
            const matchValue = [i_1, xs_1];
            if (matchValue[0] === 0) {
                return xs_1;
            }
            else if (matchValue[1].tail != null) {
                i_1_mut = (i_1 - 1);
                xs_1_mut = matchValue[1].tail;
                continue skipInner;
            }
            else {
                throw (new Error("The input sequence has an insufficient number of elements."));
            }
            break;
        }
    };
    const matchValue_1 = [i, xs];
    if (matchValue_1[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_4, xs_4;
        if (matchValue_1[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue_1[0] === 1) {
            if (matchValue_1[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_4 = matchValue_1[0];
                xs_4 = matchValue_1[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_4 = matchValue_1[0];
            xs_4 = matchValue_1[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return xs;
            }
            case 1: {
                return matchValue_1[1].tail;
            }
            case 2: {
                return skipInner(i_4, xs_4);
            }
        }
    }
}

export function skipWhile(predicate_mut, xs_mut) {
    skipWhile:
    while (true) {
        const predicate = predicate_mut, xs = xs_mut;
        let pattern_matching_result, h_1, t_1;
        if (xs.tail != null) {
            if (predicate(xs.head)) {
                pattern_matching_result = 0;
                h_1 = xs.head;
                t_1 = xs.tail;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                predicate_mut = predicate;
                xs_mut = t_1;
                continue skipWhile;
            }
            case 1: {
                return xs;
            }
        }
        break;
    }
}

export function takeSplitAux(error_mut, i_mut, acc_mut, xs_mut) {
    takeSplitAux:
    while (true) {
        const error = error_mut, i = i_mut, acc = acc_mut, xs = xs_mut;
        const matchValue = [i, xs];
        if (matchValue[0] === 0) {
            return [reverse(acc), xs];
        }
        else if (matchValue[1].tail != null) {
            error_mut = error;
            i_mut = (i - 1);
            acc_mut = (new List_1(matchValue[1].head, acc));
            xs_mut = matchValue[1].tail;
            continue takeSplitAux;
        }
        else if (error) {
            throw (new Error("The input sequence has an insufficient number of elements."));
        }
        else {
            return [reverse(acc), xs];
        }
        break;
    }
}

export function take(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_1;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_1 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_1 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return new List_1();
            }
            case 1: {
                return new List_1(matchValue[1].head, new List_1());
            }
            case 2: {
                return takeSplitAux(true, i_3, new List_1(), xs_1)[0];
            }
        }
    }
}

export function takeWhile(predicate, xs) {
    if (xs.tail != null) {
        if (xs.tail.tail == null) {
            if (predicate(xs.head)) {
                return xs;
            }
            else {
                return xs.tail;
            }
        }
        else if (!predicate(xs.head)) {
            return new List_1();
        }
        else {
            return new List_1(xs.head, takeWhile(predicate, xs.tail));
        }
    }
    else {
        return xs;
    }
}

export function truncate(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_1;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_1 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_1 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return new List_1();
            }
            case 1: {
                return new List_1(matchValue[1].head, new List_1());
            }
            case 2: {
                return takeSplitAux(false, i_3, new List_1(), xs_1)[0];
            }
        }
    }
}

export function splitAt(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_2;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_2 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_2 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return [new List_1(), xs];
            }
            case 1: {
                return [new List_1(matchValue[1].head, new List_1()), matchValue[1].tail];
            }
            case 2: {
                return takeSplitAux(true, i_3, new List_1(), xs_2);
            }
        }
    }
}

export function outOfRange() {
    throw (new Error("Index out of range"));
}

export function getSlice(lower, upper, xs) {
    const lower_1 = defaultArg(lower, 0) | 0;
    const hasUpper = upper != null;
    if (lower_1 < 0) {
        return outOfRange();
    }
    else if (hasUpper ? (upper < lower_1) : false) {
        return new List_1();
    }
    else {
        let lastIndex = -1;
        const res = foldIndexed((i, acc, x) => {
            lastIndex = i;
            if ((lower_1 <= i) ? ((!hasUpper) ? true : (i <= upper)) : false) {
                return new List_1(x, acc);
            }
            else {
                return acc;
            }
        }, new List_1(), xs);
        if ((lower_1 > (lastIndex + 1)) ? true : (hasUpper ? (upper > lastIndex) : false)) {
            outOfRange();
        }
        return reverse(res);
    }
}

export function distinctBy(projection, xs, eq) {
    const hashSet = new HashSet([], eq);
    return filter((arg) => addToSet(projection(arg), hashSet), xs);
}

export function distinct(xs, eq) {
    return distinctBy((x) => x, xs, eq);
}

export function exactlyOne(xs) {
    if (xs.tail != null) {
        if (xs.tail.tail != null) {
            throw (new Error("Input list too long\\nParameter name: list"));
        }
        else {
            return xs.head;
        }
    }
    else {
        throw (new Error("The input sequence was empty\\nParameter name: list"));
    }
}

export function groupBy(projection, xs, eq) {
    const dict = new Dictionary([], eq);
    let keys = new List_1();
    iterate((v) => {
        const key = projection(v);
        let matchValue;
        let outArg = null;
        matchValue = [tryGetValue(dict, key, new FSharpRef(() => outArg, (v_1) => {
            outArg = v_1;
        })), outArg];
        if (matchValue[0]) {
            dict.set(key, new List_1(v, matchValue[1]));
        }
        else {
            addToDict(dict, key, new List_1(v, new List_1()));
            keys = (new List_1(key, keys));
        }
    }, xs);
    let result = new List_1();
    iterate((key_1) => {
        result = (new List_1([key_1, reverse(getItemFromDict(dict, key_1))], result));
    }, keys);
    return result;
}

export function countBy(projection, xs, eq) {
    const dict = new Dictionary([], eq);
    let keys = new List_1();
    iterate((v) => {
        const key = projection(v);
        let matchValue;
        let outArg = 0;
        matchValue = [tryGetValue(dict, key, new FSharpRef(() => outArg, (v_1) => {
            outArg = v_1;
        })), outArg];
        if (matchValue[0]) {
            dict.set(key, matchValue[1] + 1);
        }
        else {
            dict.set(key, 1);
            keys = (new List_1(key, keys));
        }
    }, xs);
    let result = new List_1();
    iterate((key_1) => {
        result = (new List_1([key_1, getItemFromDict(dict, key_1)], result));
    }, keys);
    return result;
}

export function where(predicate, source) {
    return filter(predicate, source);
}

export function pairwise(source) {
    return ofSeq(pairwise_1(source));
}

export function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw (new Error("windowSize must be positive"));
    }
    let res = new List_1();
    for (let i = length(source); i >= windowSize; i--) {
        res = (new List_1(getSlice(i - windowSize, i - 1, source), res));
    }
    return res;
}

export function splitInto(chunks, source) {
    return map(ofArray, ofArray(splitInto_1(chunks, Array.from(source))));
}

export function transpose(lists) {
    return ofSeq(map_1(ofSeq, transpose_1(lists)));
}


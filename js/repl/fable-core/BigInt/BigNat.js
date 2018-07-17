define(["exports", "../Long", "../Seq", "./FFT", "../Types", "../String"], function (exports, _Long, _Seq, _FFT, _Types, _String) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.two = exports.productDigitsUpperFft = exports.singleDigitForceSchoolBook = exports.productDigitsUpperSchoolBook = exports.minDigitsKaratsuba = exports.twopowersI64 = exports.twopowers = exports.bitmask = exports.table = exports.Encoding = exports.zero = exports.one = exports.boundBase = exports.boundInt64 = exports.boundInt = exports.baseShift64C = exports.baseShift64B = exports.baseMask64C = exports.baseMask64B = exports.baseMask64A = exports.baseShift32B = exports.baseMask32B = exports.baseMask32A = exports.baseMaskU = exports.baseMaski64 = exports.baseNi64 = exports.baseMask = exports.baseN = exports.baseBits = undefined;
    exports.bound = bound;
    exports.setBound = setBound;
    exports.coeff = coeff;
    exports.coeff64 = coeff64;
    exports.setCoeff = setCoeff;
    exports.pow64 = pow64;
    exports.pow32 = pow32;
    exports.hash = hash;
    exports.maxInt = maxInt;
    exports.minInt = minInt;
    exports.divbase = divbase;
    exports.modbase = modbase;
    exports.createN = createN;
    exports.copyN = copyN;
    exports.normN = normN;
    exports.embed = embed;
    exports.embed64 = embed64;
    exports.eval32 = eval32;
    exports.eval64 = eval64;
    exports.restrictTo = restrictTo;
    exports.shiftUp = shiftUp;
    exports.shiftDown = shiftDown;
    exports.degree = degree;
    exports.addP = addP;
    exports.add = add;
    exports.subP = subP;
    exports.sub = sub;
    exports.isZero = isZero;
    exports.IsZero = IsZero;
    exports.isOne = isOne;
    exports.equal = equal;
    exports.shiftCompare = shiftCompare;
    exports.compare = compare;
    exports.lt = lt;
    exports.gt = gt;
    exports.lte = lte;
    exports.gte = gte;
    exports.min = min;
    exports.max = max;
    exports.contributeArr = contributeArr;
    exports.scale = scale;
    exports.mulSchoolBookBothSmall = mulSchoolBookBothSmall;
    exports.mulSchoolBookCarry = mulSchoolBookCarry;
    exports.mulSchoolBookOneSmall = mulSchoolBookOneSmall;
    exports.mulSchoolBookNeitherSmall = mulSchoolBookNeitherSmall;
    exports.mulSchoolBook = mulSchoolBook;
    exports.mkEncoding = mkEncoding;
    exports.calculateTableTow = calculateTableTow;
    exports.encodingGivenResultBits = encodingGivenResultBits;
    exports.wordBits = wordBits;
    exports.bits = bits;
    exports.extractBits = extractBits;
    exports.encodePoly = encodePoly;
    exports.decodeResultBits = decodeResultBits;
    exports.decodePoly = decodePoly;
    exports.quickMulUsingFft = quickMulUsingFft;
    exports.recMulKaratsuba = recMulKaratsuba;
    exports.mulKaratsuba = mulKaratsuba;
    exports.mul = mul;
    exports.scaleSubInPlace = scaleSubInPlace;
    exports.scaleSub = scaleSub;
    exports.scaleAddInPlace = scaleAddInPlace;
    exports.scaleAdd = scaleAdd;
    exports.removeFactor = removeFactor;
    exports.divmod = divmod;
    exports.div = div;
    exports.rem = rem;
    exports.bitAnd = bitAnd;
    exports.bitOr = bitOr;
    exports.hcf = hcf;
    exports.powi = powi;
    exports.pow = pow;
    exports.toFloat = toFloat;
    exports.ofInt32 = ofInt32;
    exports.ofInt64 = ofInt64;
    exports.toUInt32 = toUInt32;
    exports.toUInt64 = toUInt64;
    exports.toString = toString;
    exports.ofString = ofString;
    exports.isSmall = isSmall;
    exports.getSmall = getSmall;
    exports.factorial = factorial;
    class BigNat {
        constructor(bound, digits) {
            this.bound = bound;
            this.digits = digits;
        }
    }
    exports.default = BigNat;
    function bound(n) {
        return n.bound;
    }
    function setBound(n, v) {
        n.bound = v;
    }
    function coeff(n, i) {
        return n.digits[i];
    }
    function coeff64(n, i) {
        return (0, _Long.fromNumber)(coeff(n, i), false);
    }
    function setCoeff(n, i, v) {
        n.digits[i] = v;
    }
    function pow64(x, n) {
        if (n === 0) {
            return (0, _Long.fromBits)(1, 0, false);
        } else if (n % 2 === 0) {
            return pow64((0, _Long.mul)(x, x), ~~(n / 2));
        } else {
            return (0, _Long.mul)(x, pow64((0, _Long.mul)(x, x), ~~(n / 2)));
        }
    }
    function pow32(x, n) {
        if (n === 0) {
            return 1;
        } else if (n % 2 === 0) {
            return pow32(x * x, ~~(n / 2));
        } else {
            return x * pow32(x * x, ~~(n / 2));
        }
    }
    function hash(n) {
        let res = 0;
        for (let i = 0; i <= n.bound - 1; i++) {
            res = n.digits[i] + (res << 3);
        }
        return res;
    }
    function maxInt(a, b) {
        if (a < b) {
            return b;
        } else {
            return a;
        }
    }
    function minInt(a, b) {
        if (a < b) {
            return a;
        } else {
            return b;
        }
    }
    const baseBits = exports.baseBits = 24;
    const baseN = exports.baseN = 16777216;
    const baseMask = exports.baseMask = 16777215;
    const baseNi64 = exports.baseNi64 = (0, _Long.fromBits)(16777216, 0, false);
    const baseMaski64 = exports.baseMaski64 = (0, _Long.fromBits)(16777215, 0, false);
    const baseMaskU = exports.baseMaskU = (0, _Long.fromBits)(16777215, 0, true);
    const baseMask32A = exports.baseMask32A = 16777215;
    const baseMask32B = exports.baseMask32B = 255;
    const baseShift32B = exports.baseShift32B = 24;
    const baseMask64A = exports.baseMask64A = 16777215;
    const baseMask64B = exports.baseMask64B = 16777215;
    const baseMask64C = exports.baseMask64C = 65535;
    const baseShift64B = exports.baseShift64B = 24;
    const baseShift64C = exports.baseShift64C = 48;
    function divbase(x) {
        return ~~(x >>> 0 >> baseBits);
    }
    function modbase(x) {
        return x & baseMask;
    }
    function createN(b) {
        return new BigNat(b, new Int32Array(b));
    }
    function copyN(x) {
        return new BigNat(x.bound, x.digits.slice());
    }
    function normN(n) {
        const findLeastBound = na => i => {
            if (i === -1 ? true : na[i] !== 0) {
                return i + 1;
            } else {
                return findLeastBound(na)(i - 1);
            }
        };
        const bound_1 = findLeastBound(n.digits)(n.bound - 1);
        n.bound = bound_1;
        return n;
    }
    const boundInt = exports.boundInt = 2;
    const boundInt64 = exports.boundInt64 = 3;
    const boundBase = exports.boundBase = 1;
    function embed(x) {
        const x_1 = x < 0 ? 0 : x;
        if (x_1 < baseN) {
            const r = createN(1);
            r.digits[0] = x_1;
            return normN(r);
        } else {
            const r = createN(boundInt);
            for (let i = 0; i <= boundInt - 1; i++) {
                r.digits[i] = ~~(x_1 / pow32(baseN, i)) % baseN;
            }
            return normN(r);
        }
    }
    function embed64(x) {
        const x_1 = x.CompareTo((0, _Long.fromBits)(0, 0, false)) < 0 ? (0, _Long.fromBits)(0, 0, false) : x;
        const r = createN(boundInt64);
        for (let i = 0; i <= boundInt64 - 1; i++) {
            r.digits[i] = ~~(0, _Long.toNumber)((0, _Long.mod)((0, _Long.div)(x_1, pow64(baseNi64, i)), baseNi64));
        }
        return normN(r);
    }
    function eval32(n) {
        if (n.bound === 1) {
            return n.digits[0];
        } else {
            let acc = 0;
            for (let i = n.bound - 1; i >= 0; i--) {
                acc = n.digits[i] + baseN * acc;
            }
            return acc;
        }
    }
    function eval64(n) {
        if (n.bound === 1) {
            return (0, _Long.fromNumber)(n.digits[0], false);
        } else {
            let acc = (0, _Long.fromBits)(0, 0, false);
            for (let i = n.bound - 1; i >= 0; i--) {
                acc = (0, _Long.add)((0, _Long.fromNumber)(n.digits[i], false), (0, _Long.mul)(baseNi64, acc));
            }
            return acc;
        }
    }
    const one = exports.one = embed(1);
    const zero = exports.zero = embed(0);
    function restrictTo(d, n) {
        return new BigNat(minInt(d, n.bound), n.digits);
    }
    function shiftUp(d, n) {
        const m = createN(n.bound + d);
        for (let i = 0; i <= n.bound - 1; i++) {
            m.digits[i + d] = n.digits[i];
        }
        return m;
    }
    function shiftDown(d, n) {
        if (n.bound - d <= 0) {
            return zero;
        } else {
            const m = createN(n.bound - d);
            for (let i = 0; i <= m.bound - 1; i++) {
                m.digits[i] = n.digits[i + d];
            }
            return m;
        }
    }
    function degree(n) {
        return n.bound - 1;
    }
    function addP(i, n, c, p, q, r) {
        if (i < n) {
            const x = (i < p.bound ? p.digits[i] : 0) + (i < q.bound ? q.digits[i] : 0) + c;
            r.digits[i] = modbase(x);
            const c_1 = divbase(x);
            addP(i + 1, n, c_1, p, q, r);
        }
    }
    function add(p, q) {
        const rbound = 1 + maxInt(p.bound, q.bound);
        const r = createN(rbound);
        const carry = 0;
        addP(0, rbound, carry, p, q, r);
        return normN(r);
    }
    function subP(i, n, c, p, q, r) {
        if (i < n) {
            const x = (i < p.bound ? p.digits[i] : 0) - (i < q.bound ? q.digits[i] : 0) + c;
            if (x > 0) {
                r.digits[i] = modbase(x);
                const c_1 = divbase(x);
                return subP(i + 1, n, c_1, p, q, r);
            } else {
                const x_1 = x + baseN;
                r.digits[i] = modbase(x_1);
                const c_1 = divbase(x_1) - 1;
                return subP(i + 1, n, c_1, p, q, r);
            }
        } else {
            const underflow = c !== 0;
            return underflow;
        }
    }
    function sub(p, q) {
        const rbound = maxInt(p.bound, q.bound);
        const r = createN(rbound);
        const carry = 0;
        const underflow = subP(0, rbound, carry, p, q, r);
        if (underflow) {
            return embed(0);
        } else {
            return normN(r);
        }
    }
    function isZero(p) {
        return p.bound === 0;
    }
    function IsZero(p) {
        return isZero(p);
    }
    function isOne(p) {
        if (p.bound === 1) {
            return p.digits[0] === 1;
        } else {
            return false;
        }
    }
    function equal(p, q) {
        if (p.bound === q.bound) {
            const check = pa => qa => i => {
                if (i === -1) {
                    return true;
                } else if (pa[i] === qa[i]) {
                    return check(pa)(qa)(i - 1);
                } else {
                    return false;
                }
            };
            return check(p.digits)(q.digits)(p.bound - 1);
        } else {
            return false;
        }
    }
    function shiftCompare(p, pn, q, qn) {
        if (p.bound + pn < q.bound + qn) {
            return -1;
        } else if (p.bound + pn > q.bound + pn) {
            return 1;
        } else {
            const check = pa => qa => i => {
                if (i === -1) {
                    return 0;
                } else {
                    const pai = i < pn ? 0 : pa[i - pn];
                    const qai = i < qn ? 0 : qa[i - qn];
                    if (pai === qai) {
                        return check(pa)(qa)(i - 1);
                    } else if (pai < qai) {
                        return -1;
                    } else {
                        return 1;
                    }
                }
            };
            return check(p.digits)(q.digits)(p.bound + pn - 1);
        }
    }
    function compare(p, q) {
        if (p.bound < q.bound) {
            return -1;
        } else if (p.bound > q.bound) {
            return 1;
        } else {
            const check = pa => qa => i => {
                if (i === -1) {
                    return 0;
                } else if (pa[i] === qa[i]) {
                    return check(pa)(qa)(i - 1);
                } else if (pa[i] < qa[i]) {
                    return -1;
                } else {
                    return 1;
                }
            };
            return check(p.digits)(q.digits)(p.bound - 1);
        }
    }
    function lt(p, q) {
        return compare(p, q) === -1;
    }
    function gt(p, q) {
        return compare(p, q) === 1;
    }
    function lte(p, q) {
        return compare(p, q) !== 1;
    }
    function gte(p, q) {
        return compare(p, q) !== -1;
    }
    function min(a, b) {
        if (lt(a, b)) {
            return a;
        } else {
            return b;
        }
    }
    function max(a, b) {
        if (lt(a, b)) {
            return b;
        } else {
            return a;
        }
    }
    function contributeArr(a, i, c) {
        const x = (0, _Long.add)((0, _Long.fromNumber)(a[i], false), c);
        const c_1 = (0, _Long.div)(x, baseNi64);
        const x_1 = ~~(0, _Long.toNumber)((0, _Long.and)(x, baseMaski64));
        a[i] = x_1;
        if (c_1.CompareTo((0, _Long.fromBits)(0, 0, false)) > 0) {
            contributeArr(a, i + 1, c_1);
        }
    }
    function scale(k, p) {
        const rbound = p.bound + boundInt;
        const r = createN(rbound);
        const k_1 = (0, _Long.fromNumber)(k, false);
        for (let i = 0; i <= p.bound - 1; i++) {
            const kpi = (0, _Long.mul)(k_1, (0, _Long.fromNumber)(p.digits[i], false));
            contributeArr(r.digits, i, kpi);
        }
        return normN(r);
    }
    function mulSchoolBookBothSmall(p, q) {
        const r = createN(2);
        const rak = (0, _Long.mul)((0, _Long.fromNumber)(p, false), (0, _Long.fromNumber)(q, false));
        setCoeff(r, 0, ~~(0, _Long.toNumber)((0, _Long.and)(rak, baseMaski64)));
        setCoeff(r, 1, ~~(0, _Long.toNumber)((0, _Long.div)(rak, baseNi64)));
        return normN(r);
    }
    function mulSchoolBookCarry(r, c, k) {
        if (c.CompareTo((0, _Long.fromBits)(0, 0, false)) > 0) {
            const rak = (0, _Long.add)(coeff64(r, k), c);
            setCoeff(r, k, ~~(0, _Long.toNumber)((0, _Long.and)(rak, baseMaski64)));
            mulSchoolBookCarry(r, (0, _Long.div)(rak, baseNi64), k + 1);
        }
    }
    function mulSchoolBookOneSmall(p, q) {
        const bp = bound(p);
        const rbound = bp + 1;
        const r = createN(rbound);
        const q_1 = (0, _Long.fromNumber)(q, false);
        let c = (0, _Long.fromBits)(0, 0, false);
        for (let i = 0; i <= bp - 1; i++) {
            const rak = (0, _Long.add)((0, _Long.add)(c, coeff64(r, i)), (0, _Long.mul)(coeff64(p, i), q_1));
            setCoeff(r, i, ~~(0, _Long.toNumber)((0, _Long.and)(rak, baseMaski64)));
            c = (0, _Long.div)(rak, baseNi64);
        }
        mulSchoolBookCarry(r, c, bp);
        return normN(r);
    }
    function mulSchoolBookNeitherSmall(p, q) {
        const rbound = p.bound + q.bound;
        const r = createN(rbound);
        for (let i = 0; i <= p.bound - 1; i++) {
            const pai = (0, _Long.fromNumber)(p.digits[i], false);
            let c = (0, _Long.fromBits)(0, 0, false);
            let k = i;
            for (let j = 0; j <= q.bound - 1; j++) {
                const qaj = (0, _Long.fromNumber)(q.digits[j], false);
                const rak = (0, _Long.add)((0, _Long.add)((0, _Long.fromNumber)(r.digits[k], false), c), (0, _Long.mul)(pai, qaj));
                r.digits[k] = ~~(0, _Long.toNumber)((0, _Long.and)(rak, baseMaski64));
                c = (0, _Long.div)(rak, baseNi64);
                k = k + 1;
            }
            mulSchoolBookCarry(r, c, k);
        }
        return normN(r);
    }
    function mulSchoolBook(p, q) {
        const pSmall = bound(p) === 1;
        const qSmall = bound(q) === 1;
        if (pSmall ? qSmall : false) {
            return mulSchoolBookBothSmall(coeff(p, 0), coeff(q, 0));
        } else if (pSmall) {
            return mulSchoolBookOneSmall(q, coeff(p, 0));
        } else if (qSmall) {
            return mulSchoolBookOneSmall(p, coeff(q, 0));
        } else {
            return mulSchoolBookNeitherSmall(p, q);
        }
    }
    class Encoding {
        constructor(bigL, twoToBigL, k, bigK, bigN, split, splits) {
            this.bigL = bigL;
            this.twoToBigL = twoToBigL;
            this.k = k;
            this.bigK = bigK;
            this.bigN = bigN;
            this.split = split;
            this.splits = splits;
        }
    }
    exports.Encoding = Encoding;
    function mkEncoding(bigL, k, bigK, bigN) {
        return new Encoding(bigL, pow32(2, bigL), k, bigK, bigN, ~~(baseBits / bigL), Int32Array.from((0, _Seq.initialize)(~~(baseBits / bigL), i => pow32(2, bigL * i))));
    }
    const table = exports.table = [mkEncoding(1, 28, 268435456, 268435456), mkEncoding(2, 26, 67108864, 134217728), mkEncoding(3, 24, 16777216, 50331648), mkEncoding(4, 22, 4194304, 16777216), mkEncoding(5, 20, 1048576, 5242880), mkEncoding(6, 18, 262144, 1572864), mkEncoding(7, 16, 65536, 458752), mkEncoding(8, 14, 16384, 131072), mkEncoding(9, 12, 4096, 36864), mkEncoding(10, 10, 1024, 10240), mkEncoding(11, 8, 256, 2816), mkEncoding(12, 6, 64, 768), mkEncoding(13, 4, 16, 208)];
    function calculateTableTow(bigL) {
        const k = _FFT.maxBitsInsideFp - 2 * bigL;
        const bigK = pow64((0, _Long.fromBits)(2, 0, false), k);
        const N = (0, _Long.mul)(bigK, (0, _Long.fromNumber)(bigL, false));
        return [bigL, k, bigK, N];
    }
    function encodingGivenResultBits(bitsRes) {
        const selectFrom = i => {
            if (i + 1 < table.length ? bitsRes < table[i + 1].bigN : false) {
                return selectFrom(i + 1);
            } else {
                return table[i];
            }
        };
        if (bitsRes >= table[0].bigN) {
            throw new Error("Product is huge, around 268435456 bits, beyond quickmul");
        } else {
            return selectFrom(0);
        }
    }
    const bitmask = exports.bitmask = Int32Array.from((0, _Seq.initialize)(baseBits, i => pow32(2, i) - 1));
    const twopowers = exports.twopowers = Int32Array.from((0, _Seq.initialize)(baseBits, i => pow32(2, i)));
    const twopowersI64 = exports.twopowersI64 = Array.from((0, _Seq.initialize)(baseBits, i => pow64((0, _Long.fromBits)(2, 0, false), i)));
    function wordBits(word) {
        const hi = k => {
            if (k === 0) {
                return 0;
            } else if ((word & twopowers[k - 1]) !== 0) {
                return k;
            } else {
                return hi(k - 1);
            }
        };
        return hi(baseBits);
    }
    function bits(u) {
        if (u.bound === 0) {
            return 0;
        } else {
            return degree(u) * baseBits + wordBits(u.digits[degree(u)]);
        }
    }
    function extractBits(n, enc, bi) {
        const bj = bi + enc.bigL - 1;
        const biw = ~~(bi / baseBits);
        const bjw = ~~(bj / baseBits);
        if (biw !== bjw) {
            const x = biw < n.bound ? n.digits[biw] : 0;
            const y = bjw < n.bound ? n.digits[bjw] : 0;
            const xbit = bi % baseBits;
            const nxbits = baseBits - xbit;
            const x_1 = x >> xbit;
            const y_1 = y << nxbits;
            const x_2 = x_1 | y_1;
            const x_3 = x_2 & bitmask[enc.bigL];
            return x_3;
        } else {
            const x = biw < n.bound ? n.digits[biw] : 0;
            const xbit = bi % baseBits;
            const x_1 = x >> xbit;
            const x_2 = x_1 & bitmask[enc.bigL];
            return x_2;
        }
    }
    function encodePoly(enc, n) {
        const poly = Uint32Array.from((0, _Seq.replicate)(enc.bigK, (0, _FFT.ofInt32)(0)));
        const biMax = n.bound * baseBits;
        const encoder = i => bi => {
            if (i === enc.bigK ? true : bi > biMax) {} else {
                const pi = extractBits(n, enc, bi);
                poly[i] = (0, _FFT.ofInt32)(pi);
                const i_1 = i + 1;
                const bi_1 = bi + enc.bigL;
                encoder(i_1)(bi_1);
            }
        };
        encoder(0)(0);
        return poly;
    }
    function decodeResultBits(enc, poly) {
        let n = 0;
        for (let i = 0; i <= poly.length - 1; i++) {
            if (poly[i] !== _FFT.mzero) {
                n = i;
            }
        }
        const rbits = _FFT.maxBitsInsideFp + enc.bigL * n + 1;
        return rbits + 1;
    }
    function decodePoly(enc, poly) {
        const rbound = ~~(decodeResultBits(enc, poly) / baseBits) + 1;
        const r = createN(rbound);
        const evaluate = i => j => d => {
            if (i === enc.bigK) {} else {
                if (j >= rbound) {} else {
                    const x = (0, _Long.mul)((0, _Long.fromNumber)((0, _FFT.toInt)(poly[i]), false), twopowersI64[d]);
                    contributeArr(r.digits, j, x);
                }
                const i_1 = i + 1;
                const d_1 = d + enc.bigL;
                const patternInput = d_1 >= baseBits ? [j + 1, d_1 - baseBits] : [j, d_1];
                evaluate(i_1)(patternInput[0])(patternInput[1]);
            }
        };
        evaluate(0)(0)(0);
        return normN(r);
    }
    function quickMulUsingFft(u, v) {
        const bitsRes = bits(u) + bits(v);
        const enc = encodingGivenResultBits(bitsRes);
        const upoly = encodePoly(enc, u);
        const vpoly = encodePoly(enc, v);
        const rpoly = (0, _FFT.computeFftPaddedPolynomialProduct)(enc.bigK, enc.k, upoly, vpoly);
        const r = decodePoly(enc, rpoly);
        return normN(r);
    }
    const minDigitsKaratsuba = exports.minDigitsKaratsuba = 16;
    function recMulKaratsuba(mul, p, q) {
        const bp = p.bound;
        const bq = q.bound;
        const bmax = maxInt(bp, bq);
        if (bmax > minDigitsKaratsuba) {
            const k = ~~(bmax / 2);
            const a0 = restrictTo(k, p);
            const a1 = shiftDown(k, p);
            const b0 = restrictTo(k, q);
            const b1 = shiftDown(k, q);
            const q0 = mul(a0)(b0);
            const q1 = mul(add(a0, a1))(add(b0, b1));
            const q2 = mul(a1)(b1);
            const p1 = sub(q1, add(q0, q2));
            const r = add(q0, shiftUp(k, add(p1, shiftUp(k, q2))));
            return r;
        } else {
            return mulSchoolBook(p, q);
        }
    }
    function mulKaratsuba(x, y) {
        return recMulKaratsuba(x_1 => y_1 => mulKaratsuba(x_1, y_1), x, y);
    }
    const productDigitsUpperSchoolBook = exports.productDigitsUpperSchoolBook = ~~(64000 / baseBits);
    const singleDigitForceSchoolBook = exports.singleDigitForceSchoolBook = ~~(32000 / baseBits);
    const productDigitsUpperFft = exports.productDigitsUpperFft = ~~(table[0].bigN / baseBits);
    function mul(p, q) {
        return mulSchoolBook(p, q);
    }
    function scaleSubInPlace(x, f, a, n) {
        const invariant = tupledArg => {};
        const patternInput = [x.digits, degree(x)];
        const patternInput_1 = [a.digits, degree(a)];
        const f_1 = (0, _Long.fromNumber)(f, false);
        let j = 0;
        let z = (0, _Long.mul)(f_1, (0, _Long.fromNumber)(patternInput_1[0][0], false));
        while (z.CompareTo((0, _Long.fromBits)(0, 0, false)) > 0 ? true : j < patternInput_1[1]) {
            if (j > patternInput[1]) {
                throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
            }
            invariant([z, j, n]);
            let zLo = ~~(0, _Long.toNumber)((0, _Long.and)(z, baseMaski64));
            let zHi = (0, _Long.div)(z, baseNi64);
            if (zLo <= patternInput[0][j + n]) {
                patternInput[0][j + n] = patternInput[0][j + n] - zLo;
            } else {
                patternInput[0][j + n] = patternInput[0][j + n] + (baseN - zLo);
                zHi = (0, _Long.add)(zHi, (0, _Long.fromBits)(1, 0, false));
            }
            if (j < patternInput_1[1]) {
                z = (0, _Long.add)(zHi, (0, _Long.mul)(f_1, (0, _Long.fromNumber)(patternInput_1[0][j + 1], false)));
            } else {
                z = zHi;
            }
            j = j + 1;
        }
        normN(x);
    }
    function scaleSub(x, f, a, n) {
        const freshx = add(x, zero);
        scaleSubInPlace(freshx, f, a, n);
        return normN(freshx);
    }
    function scaleAddInPlace(x, f, a, n) {
        const invariant = tupledArg => {};
        const patternInput = [x.digits, degree(x)];
        const patternInput_1 = [a.digits, degree(a)];
        const f_1 = (0, _Long.fromNumber)(f, false);
        let j = 0;
        let z = (0, _Long.mul)(f_1, (0, _Long.fromNumber)(patternInput_1[0][0], false));
        while (z.CompareTo((0, _Long.fromBits)(0, 0, false)) > 0 ? true : j < patternInput_1[1]) {
            if (j > patternInput[1]) {
                throw new Error("scaleSubInPlace: pre-condition did not apply, result would be -ve");
            }
            invariant([z, j, n]);
            let zLo = ~~(0, _Long.toNumber)((0, _Long.and)(z, baseMaski64));
            let zHi = (0, _Long.div)(z, baseNi64);
            if (zLo < baseN - patternInput[0][j + n]) {
                patternInput[0][j + n] = patternInput[0][j + n] + zLo;
            } else {
                patternInput[0][j + n] = zLo - (baseN - patternInput[0][j + n]);
                zHi = (0, _Long.add)(zHi, (0, _Long.fromBits)(1, 0, false));
            }
            if (j < patternInput_1[1]) {
                z = (0, _Long.add)(zHi, (0, _Long.mul)(f_1, (0, _Long.fromNumber)(patternInput_1[0][j + 1], false)));
            } else {
                z = zHi;
            }
            j = j + 1;
        }
        normN(x);
    }
    function scaleAdd(x, f, a, n) {
        const freshx = add(x, zero);
        scaleAddInPlace(freshx, f, a, n);
        return normN(freshx);
    }
    function removeFactor(x, a, n) {
        const patternInput = [degree(a), degree(x)];
        if (patternInput[1] < patternInput[0] + n) {
            return 0;
        } else {
            const patternInput_1 = [a.digits, x.digits];
            const f = patternInput[0] === 0 ? patternInput[1] === n ? ~~(patternInput_1[1][n] / patternInput_1[0][0]) : (0, _Long.toNumber)((0, _Long.div)((0, _Long.add)((0, _Long.mul)((0, _Long.fromNumber)(patternInput_1[1][patternInput[1]], false), baseNi64), (0, _Long.fromNumber)(patternInput_1[1][patternInput[1] - 1], false)), (0, _Long.fromNumber)(patternInput_1[0][0], false))) : patternInput[1] === patternInput[0] + n ? ~~(patternInput_1[1][patternInput[1]] / (patternInput_1[0][patternInput[0]] + 1)) : (0, _Long.toNumber)((0, _Long.div)((0, _Long.add)((0, _Long.mul)((0, _Long.fromNumber)(patternInput_1[1][patternInput[1]], false), baseNi64), (0, _Long.fromNumber)(patternInput_1[1][patternInput[1] - 1], false)), (0, _Long.add)((0, _Long.fromNumber)(patternInput_1[0][patternInput[0]], false), (0, _Long.fromBits)(1, 0, false))));
            if (f === 0) {
                const lte_1 = shiftCompare(a, n, x, 0) !== 1;
                if (lte_1) {
                    return 1;
                } else {
                    return 0;
                }
            } else {
                return f;
            }
        }
    }
    function divmod(b, a) {
        if (isZero(a)) {
            throw new Error();
        } else if (degree(b) < degree(a)) {
            return [zero, b];
        } else {
            const x = copyN(b);
            const d = createN(degree(b) - degree(a) + 1 + 1);
            let p = degree(b);
            const m = degree(a);
            let n = p - m;
            const Invariant = tupledArg => {};
            let finished = false;
            while (!finished) {
                Invariant([d, x, n, p]);
                const f = removeFactor(x, a, n);
                if (f > 0) {
                    scaleSubInPlace(x, f, a, n);
                    scaleAddInPlace(d, f, one, n);
                    Invariant([d, x, n, p]);
                } else {
                    if (f === 0) {
                        finished = n === 0;
                    } else {
                        finished = false;
                    }
                    if (!finished) {
                        if (p === m + n) {
                            Invariant([d, x, n - 1, p]);
                            n = n - 1;
                        } else {
                            Invariant([d, x, n - 1, p - 1]);
                            n = n - 1;
                            p = p - 1;
                        }
                    }
                }
            }
            return [normN(d), normN(x)];
        }
    }
    function div(b, a) {
        return divmod(b, a)[0];
    }
    function rem(b, a) {
        return divmod(b, a)[1];
    }
    function bitAnd(a, b) {
        const rbound = minInt(a.bound, b.bound);
        const r = createN(rbound);
        for (let i = 0; i <= r.bound - 1; i++) {
            r.digits[i] = a.digits[i] & b.digits[i];
        }
        return normN(r);
    }
    function bitOr(a, b) {
        const rbound = maxInt(a.bound, b.bound);
        const r = createN(rbound);
        for (let i = 0; i <= a.bound - 1; i++) {
            r.digits[i] = r.digits[i] | a.digits[i];
        }
        for (let i = 0; i <= b.bound - 1; i++) {
            r.digits[i] = r.digits[i] | b.digits[i];
        }
        return normN(r);
    }
    function hcf(a, b) {
        const hcfloop = a_1 => b_1 => {
            if (equal(zero, a_1)) {
                return b_1;
            } else {
                const patternInput = divmod(b_1, a_1);
                return hcfloop(patternInput[1])(a_1);
            }
        };
        if (lt(a, b)) {
            return hcfloop(a)(b);
        } else {
            return hcfloop(b)(a);
        }
    }
    const two = exports.two = embed(2);
    function powi(x, n) {
        const power = acc => x_1 => n_1 => {
            if (n_1 === 0) {
                return acc;
            } else if (n_1 % 2 === 0) {
                return power(acc)(mul(x_1, x_1))(~~(n_1 / 2));
            } else {
                return power(mul(x_1, acc))(mul(x_1, x_1))(~~(n_1 / 2));
            }
        };
        return power(one)(x)(n);
    }
    function pow(x, n) {
        const power = acc => x_1 => n_1 => {
            if (isZero(n_1)) {
                return acc;
            } else {
                const patternInput = divmod(n_1, two);
                if (isZero(patternInput[1])) {
                    return power(acc)(mul(x_1, x_1))(patternInput[0]);
                } else {
                    return power(mul(x_1, acc))(mul(x_1, x_1))(patternInput[0]);
                }
            }
        };
        return power(one)(x)(n);
    }
    function toFloat(n) {
        const basef = baseN;
        const evalFloat = acc => k => i => {
            if (i === n.bound) {
                return acc;
            } else {
                return evalFloat(acc + k * n.digits[i])(k * basef)(i + 1);
            }
        };
        return evalFloat(0)(1)(0);
    }
    function ofInt32(n) {
        return embed(n);
    }
    function ofInt64(n) {
        return embed64(n);
    }
    function toUInt32(n) {
        let $var15 = null;
        switch (n.bound) {
            case 0:
                $var15 = 0;
                break;
            case 1:
                $var15 = n.digits[0] >>> 0;
                break;
            case 2:
                if (n.digits[1] > baseMask32B) {
                    throw new Error();
                }
                $var15 = ((n.digits[0] & baseMask32A) >>> 0) + ((n.digits[1] & baseMask32B) >>> 0 << baseShift32B);
                break;
            default:
                throw new Error();
        }
        return $var15;
    }
    function toUInt64(n) {
        let $var16 = null;
        switch (n.bound) {
            case 0:
                $var16 = (0, _Long.fromBits)(0, 0, true);
                break;
            case 1:
                $var16 = (0, _Long.fromNumber)(n.digits[0], true);
                break;
            case 2:
                $var16 = (0, _Long.add)((0, _Long.fromNumber)(n.digits[0] & baseMask64A, true), (0, _Long.shl)((0, _Long.fromNumber)(n.digits[1] & baseMask64B, true), baseShift64B));
                break;
            case 3:
                if (n.digits[2] > baseMask64C) {
                    throw new Error();
                }
                $var16 = (0, _Long.add)((0, _Long.add)((0, _Long.fromNumber)(n.digits[0] & baseMask64A, true), (0, _Long.shl)((0, _Long.fromNumber)(n.digits[1] & baseMask64B, true), baseShift64B)), (0, _Long.shl)((0, _Long.fromNumber)(n.digits[2] & baseMask64C, true), baseShift64C));
                break;
            default:
                throw new Error();
        }
        return $var16;
    }
    function toString(n) {
        const degn = degree(n);
        const route = prior => k => ten2k => {
            if (degree(ten2k) > degn) {
                return new _Types.List([k, ten2k], prior);
            } else {
                return route(new _Types.List([k, ten2k], prior))(k + 1)(mul(ten2k, ten2k));
            }
        };
        const kten2ks = route(new _Types.List())(0)(embed(10));
        const collect = isLeading => digits => n_1 => _arg1 => {
            if (_arg1.tail != null) {
                const ten2k = _arg1.head[1];
                const patternInput = divmod(n_1, ten2k);
                if (isLeading ? isZero(patternInput[0]) : false) {
                    const digits_1 = collect(isLeading)(digits)(patternInput[1])(_arg1.tail);
                    return digits_1;
                } else {
                    const digits_1 = collect(false)(digits)(patternInput[1])(_arg1.tail);
                    const digits_2 = collect(isLeading)(digits_1)(patternInput[0])(_arg1.tail);
                    return digits_2;
                }
            } else {
                const n_2 = eval32(n_1);
                if (isLeading ? n_2 === 0 : false) {
                    return digits;
                } else {
                    return new _Types.List(String(n_2), digits);
                }
            }
        };
        const digits = collect(true)(new _Types.List())(n)(kten2ks);
        if (digits.tail == null) {
            return "0";
        } else {
            return (0, _String.join)("", ...Array.from(digits));
        }
    }
    function ofString(str) {
        const len = str.length;
        if ((0, _String.isNullOrEmpty)(str)) {
            throw new Error("empty string" + "\nParameter name: " + "str");
        }
        const ten = embed(10);
        const build = acc => i => {
            if (i === len) {
                return acc;
            } else {
                const c = str[i];
                const d = c.charCodeAt(0) - "0".charCodeAt(0);
                if (0 <= d ? d <= 9 : false) {
                    return build(add(mul(ten, acc), embed(d)))(i + 1);
                } else {
                    throw new Error();
                }
            }
        };
        return build(embed(0))(0);
    }
    function isSmall(n) {
        return n.bound <= 1;
    }
    function getSmall(n) {
        if (0 < n.bound) {
            return n.digits[0];
        } else {
            return 0;
        }
    }
    function factorial(n) {
        const productR = a => b => {
            if (equal(a, b)) {
                return a;
            } else {
                const m = div(add(a, b), ofInt32(2));
                return mul(productR(a)(m), productR(add(m, one))(b));
            }
        };
        return productR(one)(n);
    }
});
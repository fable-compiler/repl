define(["exports", "./Util", "./BigInt/BigNat", "./Seq", "./Long", "./String"], function (exports, _Util, _BigNat, _Seq, _Long, _String) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.get_One = exports.get_Zero = exports.fromString = exports.equals = exports.zero = exports.two = exports.one = undefined;
    exports.fromZero = fromZero;
    exports.fromOne = fromOne;
    exports.fromInt32 = fromInt32;
    exports.fromInt64 = fromInt64;
    exports.nat = nat;
    exports.create = create;
    exports.posn = posn;
    exports.negn = negn;
    exports.op_Equality = op_Equality;
    exports.op_Inequality = op_Inequality;
    exports.op_LessThan = op_LessThan;
    exports.op_GreaterThan = op_GreaterThan;
    exports.compare = compare;
    exports.hash = hash;
    exports.op_UnaryNegation = op_UnaryNegation;
    exports.scale = scale;
    exports.subnn = subnn;
    exports.addnn = addnn;
    exports.op_Addition = op_Addition;
    exports.op_Subtraction = op_Subtraction;
    exports.op_Multiply = op_Multiply;
    exports.divRem = divRem;
    exports.op_Division = op_Division;
    exports.op_Modulus = op_Modulus;
    exports.op_RightShift = op_RightShift;
    exports.op_LeftShift = op_LeftShift;
    exports.op_BitwiseAnd = op_BitwiseAnd;
    exports.op_BitwiseOr = op_BitwiseOr;
    exports.greatestCommonDivisor = greatestCommonDivisor;
    exports.abs = abs;
    exports.op_LessThanOrEqual = op_LessThanOrEqual;
    exports.op_GreaterThanOrEqual = op_GreaterThanOrEqual;
    exports.toSByte = toSByte;
    exports.toByte = toByte;
    exports.toInt16 = toInt16;
    exports.toUInt16 = toUInt16;
    exports.toInt32 = toInt32;
    exports.toUInt32 = toUInt32;
    exports.toInt64 = toInt64;
    exports.toUInt64 = toUInt64;
    exports.toDouble = toDouble;
    exports.toSingle = toSingle;
    exports.toDecimal = toDecimal;
    exports.parse = parse;
    exports.factorial = factorial;
    exports.op_UnaryPlus = op_UnaryPlus;
    exports.pow = pow;
    class BigInteger {
        constructor(signInt, v) {
            this.signInt = signInt;
            this.v = v;
        }
        get Sign() {
            if (this.IsZero) {
                return 0;
            } else {
                return this.signInt;
            }
        }
        get SignInt() {
            return this.signInt;
        }
        get V() {
            return this.v;
        }
        get IsZero() {
            if (this.SignInt === 0) {
                return true;
            } else {
                return (0, _BigNat.isZero)(this.V);
            }
        }
        get IsOne() {
            if (this.SignInt === 1) {
                return (0, _BigNat.isOne)(this.V);
            } else {
                return false;
            }
        }
        get StructuredDisplayString() {
            return (0, _Util.toString)(this);
        }
        get IsSmall() {
            if (this.IsZero) {
                return true;
            } else {
                return (0, _BigNat.isSmall)(this.V);
            }
        }
        get IsNegative() {
            if (this.SignInt === -1) {
                return !this.IsZero;
            } else {
                return false;
            }
        }
        get IsPositive() {
            if (this.SignInt === 1) {
                return !this.IsZero;
            } else {
                return false;
            }
        }
        CompareTo(obj) {
            if (obj instanceof BigInteger) {
                const that = obj;
                return compare(this, that);
            } else {
                throw new Error("the objects are not comparable" + "\nParameter name: " + "obj");
            }
        }
        toString() {
            const matchValue = this.SignInt;
            let $var19 = null;
            switch (matchValue) {
                case 1:
                    $var19 = (0, _BigNat.toString)(this.V);
                    break;
                case -1:
                    if ((0, _BigNat.isZero)(this.V)) {
                        $var19 = "0";
                    } else {
                        $var19 = "-" + (0, _BigNat.toString)(this.V);
                    }
                    break;
                case 0:
                    $var19 = "0";
                    break;
                default:
                    throw new Error("signs should be +/- 1 or 0");
            }
            return $var19;
        }
        Equals(obj) {
            if (obj instanceof BigInteger) {
                const that = obj;
                return op_Equality(this, that);
            } else {
                return false;
            }
        }
        GetHashCode() {
            return hash(this);
        }
        toJSON() {
            return this.toString();
        }
    }
    exports.default = BigInteger;
    const smallLim = 4096;
    const smallPosTab = Array.from((0, _Seq.initialize)(smallLim, n => (0, _BigNat.ofInt32)(n)));
    const one = exports.one = fromInt32(1);
    const two = exports.two = fromInt32(2);
    const zero = exports.zero = fromInt32(0);
    const equals = exports.equals = op_Equality;
    const fromString = exports.fromString = parse;
    const get_Zero = exports.get_Zero = fromZero;
    const get_One = exports.get_One = fromOne;
    function fromZero() {
        return zero;
    }
    function fromOne() {
        return one;
    }
    function fromInt32(n) {
        if (n >= 0) {
            return new BigInteger(1, nat((0, _BigNat.ofInt32)(n)));
        } else if (n === -2147483648) {
            return new BigInteger(-1, nat((0, _BigNat.ofInt64)((0, _Long.neg)((0, _Long.fromNumber)(n, false)))));
        } else {
            return new BigInteger(-1, nat((0, _BigNat.ofInt32)(-n)));
        }
    }
    function fromInt64(n) {
        if (n.CompareTo((0, _Long.fromBits)(0, 0, false)) >= 0) {
            return new BigInteger(1, nat((0, _BigNat.ofInt64)(n)));
        } else if (n.Equals((0, _Long.fromBits)(0, 2147483648, false))) {
            return new BigInteger(-1, nat((0, _BigNat.add)((0, _BigNat.ofInt64)((0, _Long.fromBits)(4294967295, 2147483647, false)), _BigNat.one)));
        } else {
            return new BigInteger(-1, nat((0, _BigNat.ofInt64)((0, _Long.neg)(n))));
        }
    }
    function nat(n) {
        if ((0, _BigNat.isSmall)(n) ? (0, _BigNat.getSmall)(n) < smallLim : false) {
            return smallPosTab[(0, _BigNat.getSmall)(n)];
        } else {
            return n;
        }
    }
    function create(s, n) {
        return new BigInteger(s, nat(n));
    }
    function posn(n) {
        return new BigInteger(1, nat(n));
    }
    function negn(n) {
        return new BigInteger(-1, nat(n));
    }
    function op_Equality(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === -1) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.equal)(x.V, y.V);
            } else if (matchValue[1] === 0) {
                return (0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                if ((0, _BigNat.isZero)(x.V)) {
                    return (0, _BigNat.isZero)(y.V);
                } else {
                    return false;
                }
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 0) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.isZero)(y.V);
            } else if (matchValue[1] === 0) {
                return true;
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.isZero)(y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 1) {
            if (matchValue[1] === -1) {
                if ((0, _BigNat.isZero)(x.V)) {
                    return (0, _BigNat.isZero)(y.V);
                } else {
                    return false;
                }
            } else if (matchValue[1] === 0) {
                return (0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.equal)(x.V, y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else {
            throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
    }
    function op_Inequality(x, y) {
        return !op_Equality(x, y);
    }
    function op_LessThan(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === -1) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.lt)(y.V, x.V);
            } else if (matchValue[1] === 0) {
                return !(0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                if (!(0, _BigNat.isZero)(x.V)) {
                    return true;
                } else {
                    return !(0, _BigNat.isZero)(y.V);
                }
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 0) {
            if (matchValue[1] === -1) {
                return false;
            } else if (matchValue[1] === 0) {
                return false;
            } else if (matchValue[1] === 1) {
                return !(0, _BigNat.isZero)(y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 1) {
            if (matchValue[1] === -1) {
                return false;
            } else if (matchValue[1] === 0) {
                return false;
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.lt)(x.V, y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else {
            throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
    }
    function op_GreaterThan(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === -1) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.gt)(y.V, x.V);
            } else if (matchValue[1] === 0) {
                return false;
            } else if (matchValue[1] === 1) {
                return false;
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 0) {
            if (matchValue[1] === -1) {
                return !(0, _BigNat.isZero)(y.V);
            } else if (matchValue[1] === 0) {
                return false;
            } else if (matchValue[1] === 1) {
                return false;
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 1) {
            if (matchValue[1] === -1) {
                if (!(0, _BigNat.isZero)(x.V)) {
                    return true;
                } else {
                    return !(0, _BigNat.isZero)(y.V);
                }
            } else if (matchValue[1] === 0) {
                return !(0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.gt)(x.V, y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else {
            throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
    }
    function compare(n, nn) {
        if (op_LessThan(n, nn)) {
            return -1;
        } else if (op_Equality(n, nn)) {
            return 0;
        } else {
            return 1;
        }
    }
    function hash(z) {
        if (z.SignInt === 0) {
            return 1;
        } else {
            return z.SignInt + (0, _BigNat.hash)(z.V);
        }
    }
    function op_UnaryNegation(z) {
        const matchValue = z.SignInt;
        if (matchValue === 0) {
            return zero;
        } else {
            return create(-matchValue, z.V);
        }
    }
    function scale(k, z) {
        if (z.SignInt === 0) {
            return zero;
        } else if (k < 0) {
            return create(-z.SignInt, (0, _BigNat.scale)(-k, z.V));
        } else {
            return create(z.SignInt, (0, _BigNat.scale)(k, z.V));
        }
    }
    function subnn(nx, ny) {
        if ((0, _BigNat.gte)(nx, ny)) {
            return posn((0, _BigNat.sub)(nx, ny));
        } else {
            return negn((0, _BigNat.sub)(ny, nx));
        }
    }
    function addnn(nx, ny) {
        return posn((0, _BigNat.add)(nx, ny));
    }
    function op_Addition(x, y) {
        if (y.IsZero) {
            return x;
        } else if (x.IsZero) {
            return y;
        } else {
            const matchValue = [x.SignInt, y.SignInt];
            if (matchValue[0] === -1) {
                if (matchValue[1] === -1) {
                    return op_UnaryNegation(addnn(x.V, y.V));
                } else if (matchValue[1] === 1) {
                    return subnn(y.V, x.V);
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else if (matchValue[0] === 1) {
                if (matchValue[1] === -1) {
                    return subnn(x.V, y.V);
                } else if (matchValue[1] === 1) {
                    return addnn(x.V, y.V);
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else {
                throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
            }
        }
    }
    function op_Subtraction(x, y) {
        if (y.IsZero) {
            return x;
        } else if (x.IsZero) {
            return op_UnaryNegation(y);
        } else {
            const matchValue = [x.SignInt, y.SignInt];
            if (matchValue[0] === -1) {
                if (matchValue[1] === -1) {
                    return subnn(y.V, x.V);
                } else if (matchValue[1] === 1) {
                    return op_UnaryNegation(addnn(x.V, y.V));
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else if (matchValue[0] === 1) {
                if (matchValue[1] === -1) {
                    return addnn(x.V, y.V);
                } else if (matchValue[1] === 1) {
                    return subnn(x.V, y.V);
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else {
                throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
            }
        }
    }
    function op_Multiply(x, y) {
        if (x.IsZero) {
            return x;
        } else if (y.IsZero) {
            return y;
        } else if (x.IsOne) {
            return y;
        } else if (y.IsOne) {
            return x;
        } else {
            const m = (0, _BigNat.mul)(x.V, y.V);
            return create(x.SignInt * y.SignInt, m);
        }
    }
    function divRem(x, y) {
        if (y.IsZero) {
            throw new Error();
        }
        if (x.IsZero) {
            return [zero, zero];
        } else {
            const patternInput = (0, _BigNat.divmod)(x.V, y.V);
            const matchValue = [x.SignInt, y.SignInt];
            if (matchValue[0] === -1) {
                if (matchValue[1] === -1) {
                    return [posn(patternInput[0]), negn(patternInput[1])];
                } else if (matchValue[1] === 1) {
                    return [negn(patternInput[0]), negn(patternInput[1])];
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else if (matchValue[0] === 1) {
                if (matchValue[1] === -1) {
                    return [negn(patternInput[0]), posn(patternInput[1])];
                } else if (matchValue[1] === 1) {
                    return [posn(patternInput[0]), posn(patternInput[1])];
                } else {
                    throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
                }
            } else {
                throw new Error("signs should be +/- 1" + "\nParameter name: " + "x");
            }
        }
    }
    function op_Division(x, y) {
        return divRem(x, y)[0];
    }
    function op_Modulus(x, y) {
        return divRem(x, y)[1];
    }
    function op_RightShift(x, y) {
        return op_Division(x, pow(two, y));
    }
    function op_LeftShift(x, y) {
        return op_Multiply(x, pow(two, y));
    }
    function op_BitwiseAnd(x, y) {
        return posn((0, _BigNat.bitAnd)(x.V, y.V));
    }
    function op_BitwiseOr(x, y) {
        return posn((0, _BigNat.bitOr)(x.V, y.V));
    }
    function greatestCommonDivisor(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === 0) {
            if (matchValue[1] === 0) {
                return zero;
            } else {
                return posn(y.V);
            }
        } else if (matchValue[1] === 0) {
            return posn(x.V);
        } else {
            return posn((0, _BigNat.hcf)(x.V, y.V));
        }
    }
    function abs(x) {
        if (x.SignInt === -1) {
            return op_UnaryNegation(x);
        } else {
            return x;
        }
    }
    function op_LessThanOrEqual(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === -1) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.lte)(y.V, x.V);
            } else if (matchValue[1] === 0) {
                return true;
            } else if (matchValue[1] === 1) {
                return true;
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 0) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.isZero)(y.V);
            } else if (matchValue[1] === 0) {
                return true;
            } else if (matchValue[1] === 1) {
                return true;
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 1) {
            if (matchValue[1] === -1) {
                if ((0, _BigNat.isZero)(x.V)) {
                    return (0, _BigNat.isZero)(y.V);
                } else {
                    return false;
                }
            } else if (matchValue[1] === 0) {
                return (0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.lte)(x.V, y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else {
            throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
    }
    function op_GreaterThanOrEqual(x, y) {
        const matchValue = [x.SignInt, y.SignInt];
        if (matchValue[0] === -1) {
            if (matchValue[1] === -1) {
                return (0, _BigNat.gte)(y.V, x.V);
            } else if (matchValue[1] === 0) {
                return (0, _BigNat.isZero)(x.V);
            } else if (matchValue[1] === 1) {
                if ((0, _BigNat.isZero)(x.V)) {
                    return (0, _BigNat.isZero)(y.V);
                } else {
                    return false;
                }
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 0) {
            if (matchValue[1] === -1) {
                return true;
            } else if (matchValue[1] === 0) {
                return true;
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.isZero)(y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else if (matchValue[0] === 1) {
            if (matchValue[1] === -1) {
                return true;
            } else if (matchValue[1] === 0) {
                return true;
            } else if (matchValue[1] === 1) {
                return (0, _BigNat.gte)(x.V, y.V);
            } else {
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
            }
        } else {
            throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
    }
    function toSByte(x) {
        return (toInt32(x) + 0x80 & 0xFF) - 0x80;
    }
    function toByte(x) {
        return toUInt32(x) & 0xFF;
    }
    function toInt16(x) {
        return (toInt32(x) + 0x8000 & 0xFFFF) - 0x8000;
    }
    function toUInt16(x) {
        return toUInt32(x) & 0xFFFF;
    }
    function toInt32(x) {
        if (x.IsZero) {
            return 0;
        } else {
            const u = (0, _BigNat.toUInt32)(x.V);
            if (u <= 2147483647 >>> 0) {
                return x.SignInt * ~~u;
            } else if (x.SignInt === -1 ? u === 2147483647 + 1 >>> 0 : false) {
                return -2147483648;
            } else {
                throw new Error();
            }
        }
    }
    function toUInt32(x) {
        if (x.IsZero) {
            return 0;
        } else {
            return (0, _BigNat.toUInt32)(x.V);
        }
    }
    function toInt64(x) {
        if (x.IsZero) {
            return (0, _Long.fromBits)(0, 0, false);
        } else {
            const u = (0, _BigNat.toUInt64)(x.V);
            if (u.CompareTo((0, _Long.fromBits)(4294967295, 2147483647, false)) <= 0) {
                return (0, _Long.mul)((0, _Long.fromNumber)(x.SignInt, false), u);
            } else if (x.SignInt === -1 ? u.Equals((0, _Long.add)((0, _Long.fromBits)(4294967295, 2147483647, false), (0, _Long.fromBits)(1, 0, false))) : false) {
                return (0, _Long.fromBits)(0, 2147483648, false);
            } else {
                throw new Error();
            }
        }
    }
    function toUInt64(x) {
        if (x.IsZero) {
            return (0, _Long.fromBits)(0, 0, true);
        } else {
            return (0, _BigNat.toUInt64)(x.V);
        }
    }
    function toDouble(x) {
        const matchValue = x.SignInt;
        let $var20 = null;
        switch (matchValue) {
            case 1:
                $var20 = (0, _BigNat.toFloat)(x.V);
                break;
            case -1:
                $var20 = -(0, _BigNat.toFloat)(x.V);
                break;
            case 0:
                $var20 = 0;
                break;
            default:
                throw new Error("signs should be +/- 1 or 0" + "\nParameter name: " + "x");
        }
        return $var20;
    }
    function toSingle(x) {
        return Math.fround(toDouble(x));
    }
    function toDecimal(x) {
        return toDouble(x); //TODO: fix when decimal is implemented
    }
    function parse(text) {
        if (text == null) {
            throw new Error("text");
        }
        const text_1 = (0, _String.trim)(text, "both");
        const len = text_1.length;
        if (len === 0) {
            throw new Error();
        }
        const matchValue = [text_1[0], len];
        if (matchValue[0] === "+") {
            if (matchValue[1] === 1) {
                throw new Error();
            } else {
                return posn((0, _BigNat.ofString)(text_1.slice(1, len - 1 + 1)));
            }
        } else if (matchValue[0] === "-") {
            if (matchValue[1] === 1) {
                throw new Error();
            } else {
                return negn((0, _BigNat.ofString)(text_1.slice(1, len - 1 + 1)));
            }
        } else {
            return posn((0, _BigNat.ofString)(text_1));
        }
    }
    function factorial(x) {
        if (x.IsNegative) {
            throw new Error("mustBeNonNegative" + "\nParameter name: " + "x");
        }
        if (x.IsPositive) {
            return posn((0, _BigNat.factorial)(x.V));
        } else {
            return one;
        }
    }
    function op_UnaryPlus(n1) {
        return n1;
    }
    function pow(x, y) {
        if (y < 0) {
            throw new Error("y");
        }
        const matchValue = [x.IsZero, y];
        if (matchValue[0]) {
            if (matchValue[1] === 0) {
                return one;
            } else {
                return zero;
            }
        } else {
            const yval = fromInt32(y);
            return create((0, _BigNat.isZero)((0, _BigNat.rem)(yval.V, _BigNat.two)) ? 1 : x.SignInt, (0, _BigNat.pow)(x.V, yval.V));
        }
    }
});
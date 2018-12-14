import { BigInteger$$get_IsOne as BigInteger$0024$0024get_IsOne, BigInteger$$get_IsZero as BigInteger$0024$0024get_IsZero, BigInteger$$get_Sign as BigInteger$0024$0024get_Sign, BigInteger$$get_ToDecimal as BigInteger$0024$0024get_ToDecimal, BigInteger$$get_ToDouble as BigInteger$0024$0024get_ToDouble, BigInteger$$get_ToSingle as BigInteger$0024$0024get_ToSingle, BigInteger$$get_ToUInt64 as BigInteger$0024$0024get_ToUInt64, BigInteger$$get_ToInt64 as BigInteger$0024$0024get_ToInt64, BigInteger$$get_ToUInt32 as BigInteger$0024$0024get_ToUInt32, BigInteger$$get_ToInt32 as BigInteger$0024$0024get_ToInt32, BigInteger$$get_ToUInt16 as BigInteger$0024$0024get_ToUInt16, BigInteger$$get_ToInt16 as BigInteger$0024$0024get_ToInt16, BigInteger$$get_ToByte as BigInteger$0024$0024get_ToByte, BigInteger$$get_ToSByte as BigInteger$0024$0024get_ToSByte, BigInteger$$$$002Ector$$Z524259C1 as BigInteger$0024$0024$0024$0024002Ector$0024$0024Z524259C1, BigInteger$$$$002Ector$$Z524259A4 as BigInteger$0024$0024$0024$0024002Ector$0024$0024Z524259A4, BigInteger$$$get_Two as BigInteger$0024$0024$0024get_Two, BigInteger$$$Abs$$Z665282C2 as BigInteger$0024$0024$0024Abs$0024$0024Z665282C2, BigInteger$$$Pow$$62E082A2 as BigInteger$0024$0024$0024Pow$0024$002462E082A2, BigInteger$$$GreatestCommonDivisor$$56F059C0 as BigInteger$0024$0024$0024GreatestCommonDivisor$0024$002456F059C0, BigInteger$$$DivRem$$56F059C0 as BigInteger$0024$0024$0024DivRem$0024$002456F059C0, BigInteger$$$Parse$$Z721C83C5 as BigInteger$0024$0024$0024Parse$0024$0024Z721C83C5, BigInteger$$$op_Inequality$$56F059C0 as BigInteger$0024$0024$0024op_Inequality$0024$002456F059C0, BigInteger$$$op_Equality$$56F059C0 as BigInteger$0024$0024$0024op_Equality$0024$002456F059C0, BigInteger$$$op_GreaterThanOrEqual$$56F059C0 as BigInteger$0024$0024$0024op_GreaterThanOrEqual$0024$002456F059C0, BigInteger$$$op_GreaterThan$$56F059C0 as BigInteger$0024$0024$0024op_GreaterThan$0024$002456F059C0, BigInteger$$$op_LessThanOrEqual$$56F059C0 as BigInteger$0024$0024$0024op_LessThanOrEqual$0024$002456F059C0, BigInteger$$$op_LessThan$$56F059C0 as BigInteger$0024$0024$0024op_LessThan$0024$002456F059C0, BigInteger$$$op_BitwiseOr$$56F059C0 as BigInteger$0024$0024$0024op_BitwiseOr$0024$002456F059C0, BigInteger$$$op_BitwiseAnd$$56F059C0 as BigInteger$0024$0024$0024op_BitwiseAnd$0024$002456F059C0, BigInteger$$$op_LeftShift$$62E082A2 as BigInteger$0024$0024$0024op_LeftShift$0024$002462E082A2, BigInteger$$$op_RightShift$$62E082A2 as BigInteger$0024$0024$0024op_RightShift$0024$002462E082A2, BigInteger$$$op_UnaryPlus$$Z665282C2 as BigInteger$0024$0024$0024op_UnaryPlus$0024$0024Z665282C2, BigInteger$$$op_UnaryNegation$$Z665282C2 as BigInteger$0024$0024$0024op_UnaryNegation$0024$0024Z665282C2, BigInteger$$$op_Modulus$$56F059C0 as BigInteger$0024$0024$0024op_Modulus$0024$002456F059C0, BigInteger$$$op_Division$$56F059C0 as BigInteger$0024$0024$0024op_Division$0024$002456F059C0, BigInteger$$$op_Multiply$$56F059C0 as BigInteger$0024$0024$0024op_Multiply$0024$002456F059C0, BigInteger$$$op_Subtraction$$56F059C0 as BigInteger$0024$0024$0024op_Subtraction$0024$002456F059C0, BigInteger$$$op_Addition$$56F059C0 as BigInteger$0024$0024$0024op_Addition$0024$002456F059C0, BigInteger$$$get_One as BigInteger$0024$0024$0024get_One, BigInteger$$$get_Zero as BigInteger$0024$0024$0024get_Zero, BigInteger } from "../BigInt/z.js";
import { equals as equals$$1, structuralHash } from "./Util.js";
export function isBigInt(x) {
  return x instanceof BigInteger;
}
export const get_Zero = BigInteger$0024$0024$0024get_Zero();
export const get_One = BigInteger$0024$0024$0024get_One();
export function op_Addition(arg00, arg01) {
  return BigInteger$0024$0024$0024op_Addition$0024$002456F059C0(arg00, arg01);
}
export function op_Subtraction(arg00$$1, arg01$$1) {
  return BigInteger$0024$0024$0024op_Subtraction$0024$002456F059C0(arg00$$1, arg01$$1);
}
export function op_Multiply(arg00$$2, arg01$$2) {
  return BigInteger$0024$0024$0024op_Multiply$0024$002456F059C0(arg00$$2, arg01$$2);
}
export function op_Division(arg00$$3, arg01$$3) {
  return BigInteger$0024$0024$0024op_Division$0024$002456F059C0(arg00$$3, arg01$$3);
}
export function op_Modulus(arg00$$4, arg01$$4) {
  return BigInteger$0024$0024$0024op_Modulus$0024$002456F059C0(arg00$$4, arg01$$4);
}
export function op_UnaryNegation(arg00$$5) {
  return BigInteger$0024$0024$0024op_UnaryNegation$0024$0024Z665282C2(arg00$$5);
}
export function op_UnaryPlus(arg00$$6) {
  return BigInteger$0024$0024$0024op_UnaryPlus$0024$0024Z665282C2(arg00$$6);
}
export function op_RightShift(arg00$$7, arg01$$5) {
  return BigInteger$0024$0024$0024op_RightShift$0024$002462E082A2(arg00$$7, arg01$$5);
}
export function op_LeftShift(arg00$$8, arg01$$6) {
  return BigInteger$0024$0024$0024op_LeftShift$0024$002462E082A2(arg00$$8, arg01$$6);
}
export function op_BitwiseAnd(arg00$$9, arg01$$7) {
  return BigInteger$0024$0024$0024op_BitwiseAnd$0024$002456F059C0(arg00$$9, arg01$$7);
}
export function op_BitwiseOr(arg00$$10, arg01$$8) {
  return BigInteger$0024$0024$0024op_BitwiseOr$0024$002456F059C0(arg00$$10, arg01$$8);
}
export function op_LessThan(arg00$$11, arg01$$9) {
  return BigInteger$0024$0024$0024op_LessThan$0024$002456F059C0(arg00$$11, arg01$$9);
}
export function op_LessThanOrEqual(arg00$$12, arg01$$10) {
  return BigInteger$0024$0024$0024op_LessThanOrEqual$0024$002456F059C0(arg00$$12, arg01$$10);
}
export function op_GreaterThan(arg00$$13, arg01$$11) {
  return BigInteger$0024$0024$0024op_GreaterThan$0024$002456F059C0(arg00$$13, arg01$$11);
}
export function op_GreaterThanOrEqual(arg00$$14, arg01$$12) {
  return BigInteger$0024$0024$0024op_GreaterThanOrEqual$0024$002456F059C0(arg00$$14, arg01$$12);
}
export function op_Equality(arg00$$15, arg01$$13) {
  return BigInteger$0024$0024$0024op_Equality$0024$002456F059C0(arg00$$15, arg01$$13);
}
export function op_Inequality(arg00$$16, arg01$$14) {
  return BigInteger$0024$0024$0024op_Inequality$0024$002456F059C0(arg00$$16, arg01$$14);
}
export function tryParse(str) {
  try {
    const res = BigInteger$0024$0024$0024Parse$0024$0024Z721C83C5(str);
    return [true, res];
  } catch (matchValue) {
    return [false, BigInteger$0024$0024$0024get_Zero()];
  }
}
export function parse(arg00$$17) {
  return BigInteger$0024$0024$0024Parse$0024$0024Z721C83C5(arg00$$17);
}
export function divRem(arg00$$18, arg01$$15) {
  return BigInteger$0024$0024$0024DivRem$0024$002456F059C0(arg00$$18, arg01$$15);
}
export function greatestCommonDivisor(arg00$$19, arg01$$16) {
  return BigInteger$0024$0024$0024GreatestCommonDivisor$0024$002456F059C0(arg00$$19, arg01$$16);
}
export function pow(arg00$$20, arg01$$17) {
  return BigInteger$0024$0024$0024Pow$0024$002462E082A2(arg00$$20, arg01$$17);
}
export function abs(arg00$$21) {
  return BigInteger$0024$0024$0024Abs$0024$0024Z665282C2(arg00$$21);
}
export const zero = BigInteger$0024$0024$0024get_Zero();
export const one = BigInteger$0024$0024$0024get_One();
export const two = BigInteger$0024$0024$0024get_Two();
export function fromZero() {
  return BigInteger$0024$0024$0024get_Zero();
}
export function fromOne() {
  return BigInteger$0024$0024$0024get_One();
}
export function fromInt32(i) {
  return BigInteger$0024$0024$0024$0024002Ector$0024$0024Z524259A4(i);
}
export function fromInt64(i$$1) {
  return BigInteger$0024$0024$0024$0024002Ector$0024$0024Z524259C1(i$$1);
}
export function fromString(s) {
  return BigInteger$0024$0024$0024Parse$0024$0024Z721C83C5(s);
}
export function toSByte(x$$1) {
  return BigInteger$0024$0024get_ToSByte(x$$1);
}
export function toByte(x$$2) {
  return BigInteger$0024$0024get_ToByte(x$$2);
}
export function toInt16(x$$3) {
  return BigInteger$0024$0024get_ToInt16(x$$3);
}
export function toUInt16(x$$4) {
  return BigInteger$0024$0024get_ToUInt16(x$$4);
}
export function toInt32(x$$5) {
  return BigInteger$0024$0024get_ToInt32(x$$5);
}
export function toUInt32(x$$6) {
  return BigInteger$0024$0024get_ToUInt32(x$$6);
}
export function toInt64(x$$7) {
  return BigInteger$0024$0024get_ToInt64(x$$7);
}
export function toUInt64(x$$8) {
  return BigInteger$0024$0024get_ToUInt64(x$$8);
}
export function toSingle(x$$9) {
  return BigInteger$0024$0024get_ToSingle(x$$9);
}
export function toDouble(x$$10) {
  return BigInteger$0024$0024get_ToDouble(x$$10);
}
export function toDecimal(x$$11) {
  return BigInteger$0024$0024get_ToDecimal(x$$11);
}
export function sign(x$$12) {
  return BigInteger$0024$0024get_Sign(x$$12);
}
export function isZero(x$$13) {
  return BigInteger$0024$0024get_IsZero(x$$13);
}
export function isOne(x$$14) {
  return BigInteger$0024$0024get_IsOne(x$$14);
}
export function hash(x$$15) {
  return structuralHash(x$$15);
}
export function compare(x$$16, y) {
  return x$$16.CompareTo(y);
}
export function equals(x$$17, y$$1) {
  return equals$$1(x$$17, y$$1);
}
export function toString(x$$18) {
  return String(x$$18);
}

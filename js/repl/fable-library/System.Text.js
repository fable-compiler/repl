import { declare } from "./Types.js";
import { type } from "./Reflection.js";
import { substring, join, format } from "./String.js";
import { sumBy } from "./Seq.js";
export const StringBuilder = declare(function System_Text_StringBuilder(value, capacity) {
  const $this$$1 = this;
  $this$$1.buf = [];

  if (!(value == null)) {
    void $this$$1.buf.push(value);
  }
});
export function StringBuilder$reflection() {
  return type("System.Text.StringBuilder");
}
export function StringBuilder$$$$002Ector$$Z18115A39(value, capacity) {
  return this instanceof StringBuilder ? StringBuilder.call(this, value, capacity) : new StringBuilder(value, capacity);
}
export function StringBuilder$$$$002Ector$$Z524259A4(capacity$$1) {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, capacity$$1);
}
export function StringBuilder$$$$002Ector$$Z721C83C5(value$$1) {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, value$$1, 16);
}
export function StringBuilder$$$$002Ector() {
  return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, 16);
}
export function StringBuilder$$Append$$Z721C83C5(x, s) {
  void x.buf.push(s);
  return x;
}
export function StringBuilder$$Append$$244C7CD6(x$$1, c) {
  void x$$1.buf.push(c);
  return x$$1;
}
export function StringBuilder$$AppendFormat$$433E080(x$$2, fmt, o) {
  void x$$2.buf.push(format(fmt, o));
  return x$$2;
}
export function StringBuilder$$AppendLine(x$$3) {
  void x$$3.buf.push("\n");
  return x$$3;
}
export function StringBuilder$$AppendLine$$Z721C83C5(x$$4, s$$1) {
  void x$$4.buf.push(s$$1);
  void x$$4.buf.push("\n");
  return x$$4;
}

StringBuilder.prototype.toString = function () {
  const __ = this;
  return join("", __.buf);
};

export function StringBuilder$$get_Length(x$$5) {
  return sumBy(function (str) {
    return str.length;
  }, x$$5.buf, {
    GetZero() {
      return 0;
    },

    Add($x$$2, $y$$3) {
      return $x$$2 + $y$$3;
    }

  }) | 0;
}
export function StringBuilder$$ToString$$Z37302880(x$$6, firstIndex, length) {
  const str$$1 = String(x$$6);
  return substring(str$$1, firstIndex, length);
}
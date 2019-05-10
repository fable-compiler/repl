import { declare } from "./Types.js";
import { type } from "./Reflection.js";
import { join, format } from "./String.js";
export const StringBuilder = declare(function System_Text_StringBuilder(value, capacity) {
  const $this$$1 = this;
  $this$$1.buf = [];

  if (!(value == null)) {
    $this$$1.buf.push(value);
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
  x.buf.push(s);
  return x;
}
export function StringBuilder$$AppendFormat$$433E080(x$$1, fmt, o) {
  x$$1.buf.push(format(fmt, o));
  return x$$1;
}

StringBuilder.prototype.toString = function () {
  const __ = this;
  return join("", ...__.buf);
};
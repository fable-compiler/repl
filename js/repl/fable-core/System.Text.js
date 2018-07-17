define(["exports", "./Types", "./String"], function (exports, _Types, _String) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.StringBuilder = undefined;
  exports.StringBuilder$$$$002Ector$$Z18115A39 = StringBuilder$$$$002Ector$$Z18115A39;
  exports.StringBuilder$$$$002Ector$$Z524259A4 = StringBuilder$$$$002Ector$$Z524259A4;
  exports.StringBuilder$$$$002Ector$$Z721C83C5 = StringBuilder$$$$002Ector$$Z721C83C5;
  exports.StringBuilder$$$$002Ector = StringBuilder$$$$002Ector;
  exports.StringBuilder$$Append$$Z721C83C5 = StringBuilder$$Append$$Z721C83C5;
  exports.StringBuilder$$AppendFormat$$433E080 = StringBuilder$$AppendFormat$$433E080;
  const StringBuilder = exports.StringBuilder = (0, _Types.declare)(function StringBuilder(value, capacity) {
    const $this$$1 = this;
    $this$$1.buf = [];

    if (!(value == null)) {
      $this$$1.buf.push(value);
    }
  });
  function StringBuilder$$$$002Ector$$Z18115A39(value, capacity) {
    return this != null ? StringBuilder.call(this, value, capacity) : new StringBuilder(value, capacity);
  }
  function StringBuilder$$$$002Ector$$Z524259A4(capacity$$1) {
    return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, capacity$$1);
  }
  function StringBuilder$$$$002Ector$$Z721C83C5(value$$1) {
    return StringBuilder$$$$002Ector$$Z18115A39.call(this, value$$1, 16);
  }
  function StringBuilder$$$$002Ector() {
    return StringBuilder$$$$002Ector$$Z18115A39.call(this, null, 16);
  }
  function StringBuilder$$Append$$Z721C83C5(x, s) {
    x.buf.push(s);
    return x;
  }
  function StringBuilder$$AppendFormat$$433E080(x$$1, fmt, o) {
    x$$1.buf.push((0, _String.format)(fmt, o));
    return x$$1;
  }

  StringBuilder.prototype.toString = function () {
    const __ = this;
    return (0, _String.join)("", __.buf);
  };
});
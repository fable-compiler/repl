import { declare, Union } from "../../fable-library/Types.js";
import { type, union, int32, array } from "../../fable-library/Reflection.js";
import { max, comparePrimitives } from "../../fable-library/Util.js";
import { ofSeq, fill } from "../../fable-library/Array.js";
import { some } from "../../fable-library/Option.js";
import { append, delay, collect, rangeNumber, singleton, take, skip } from "../../fable-library/Seq.js";
export const RingState$00601 = declare(function Elmish_RingState(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function RingState$00601$reflection($gen$$4) {
  return union("Elmish.RingState`1", [$gen$$4], RingState$00601, () => [["Writable", [array($gen$$4), int32]], ["ReadWritable", [array($gen$$4), int32, int32]]]);
}
export const RingBuffer$00601 = declare(function Elmish_RingBuffer(size) {
  const $this$$1 = this;
  $this$$1.state = new RingState$00601(0, "Writable", fill(new Array(max(comparePrimitives, size, 10)), 0, max(comparePrimitives, size, 10), null), 0);
});
export function RingBuffer$00601$reflection($gen$$5) {
  return type("Elmish.RingBuffer`1", [$gen$$5]);
}
export function RingBuffer$00601$$$$002Ector$$Z524259A4(size) {
  return this instanceof RingBuffer$00601 ? RingBuffer$00601.call(this, size) : new RingBuffer$00601(size);
}
export function RingBuffer$00601$$Pop(__) {
  const matchValue = __.state;

  if (matchValue.tag === 1) {
    const rix$0027 = (matchValue.fields[2] + 1) % matchValue.fields[0].length | 0;
    const matchValue$$1 = rix$0027 === matchValue.fields[1];

    if (matchValue$$1) {
      __.state = new RingState$00601(0, "Writable", matchValue.fields[0], matchValue.fields[1]);
    } else {
      __.state = new RingState$00601(1, "ReadWritable", matchValue.fields[0], matchValue.fields[1], rix$0027);
    }

    return some(matchValue.fields[0][matchValue.fields[2]]);
  } else {
    return null;
  }
}
export function RingBuffer$00601$$Push$$2B595(__$$1, item) {
  const matchValue$$2 = __$$1.state;

  if (matchValue$$2.tag === 1) {
    matchValue$$2.fields[0][matchValue$$2.fields[1]] = item;
    const wix$0027 = (matchValue$$2.fields[1] + 1) % matchValue$$2.fields[0].length | 0;
    const matchValue$$3 = wix$0027 === matchValue$$2.fields[2];

    if (matchValue$$3) {
      let items$$4;
      items$$4 = RingBuffer$00601$$doubleSize(__$$1, matchValue$$2.fields[2], matchValue$$2.fields[0]);
      __$$1.state = new RingState$00601(1, "ReadWritable", items$$4, wix$0027, 0);
    } else {
      __$$1.state = new RingState$00601(1, "ReadWritable", matchValue$$2.fields[0], wix$0027, matchValue$$2.fields[2]);
    }
  } else {
    matchValue$$2.fields[0][matchValue$$2.fields[1]] = item;
    const wix$$1 = (matchValue$$2.fields[1] + 1) % matchValue$$2.fields[0].length | 0;
    __$$1.state = new RingState$00601(1, "ReadWritable", matchValue$$2.fields[0], wix$$1, matchValue$$2.fields[1]);
  }
}

function RingBuffer$00601$$doubleSize(this$, ix$$1, items$$5) {
  const source$$2 = delay(function () {
    return append((skip(ix$$1, items$$5)), delay(function () {
      return append((take(ix$$1, items$$5)), delay(function () {
        return collect(function (matchValue$$4) {
          return singleton(null);
        }, rangeNumber(0, 1, items$$5.length));
      }));
    }));
  });
  return ofSeq(source$$2, Array);
}

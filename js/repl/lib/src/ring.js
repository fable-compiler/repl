import { declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { type, union, int32, array } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { max, comparePrimitives } from "../fable-library.2.2.0-beta-010/Util.js";
import { ofSeq, fill } from "../fable-library.2.2.0-beta-010/Array.js";
import { some } from "../fable-library.2.2.0-beta-010/Option.js";
import { append, delay, collect, rangeNumber, singleton, take, skip } from "../fable-library.2.2.0-beta-010/Seq.js";
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
  return this != null ? RingBuffer$00601.call(this, size) : new RingBuffer$00601(size);
}
export function RingBuffer$00601$$Pop(__) {
  const matchValue = __.state;

  if (matchValue.tag === 1) {
    const wix = matchValue.fields[1] | 0;
    const rix = matchValue.fields[2] | 0;
    const items = matchValue.fields[0];
    const rix$0027 = (rix + 1) % items.length | 0;

    if (rix$0027 === wix) {
      __.state = new RingState$00601(0, "Writable", items, wix);
    } else {
      __.state = new RingState$00601(1, "ReadWritable", items, wix, rix$0027);
    }

    return some(items[rix]);
  } else {
    return null;
  }
}
export function RingBuffer$00601$$Push$$2B595(__$$1, item) {
  const matchValue$$2 = __$$1.state;

  if (matchValue$$2.tag === 1) {
    const wix$$2 = matchValue$$2.fields[1] | 0;
    const rix$$1 = matchValue$$2.fields[2] | 0;
    const items$$2 = matchValue$$2.fields[0];
    items$$2[wix$$2] = item;
    const wix$0027 = (wix$$2 + 1) % items$$2.length | 0;

    if (wix$0027 === rix$$1) {
      const items$$4 = RingBuffer$00601$$doubleSize(__$$1, rix$$1, items$$2);
      __$$1.state = new RingState$00601(1, "ReadWritable", items$$4, wix$0027, 0);
    } else {
      __$$1.state = new RingState$00601(1, "ReadWritable", items$$2, wix$0027, rix$$1);
    }
  } else {
    const ix = matchValue$$2.fields[1] | 0;
    const items$$1 = matchValue$$2.fields[0];
    items$$1[ix] = item;
    const wix$$1 = (ix + 1) % items$$1.length | 0;
    __$$1.state = new RingState$00601(1, "ReadWritable", items$$1, wix$$1, ix);
  }
}

function RingBuffer$00601$$doubleSize(this$, ix$$1, items$$5) {
  return ofSeq(delay(function () {
    return append(skip(ix$$1, items$$5), delay(function () {
      return append(take(ix$$1, items$$5), delay(function () {
        return collect(function (matchValue$$4) {
          return singleton(null);
        }, rangeNumber(0, 1, items$$5.length));
      }));
    }));
  }), Array);
}

import { Union } from "../../fable-library/Types.js";
import { class_type, union_type, int32_type, array_type } from "../../fable-library/Reflection.js";
import { fill } from "../../fable-library/Array.js";
import { comparePrimitives, max } from "../../fable-library/Util.js";
import { some } from "../../fable-library/Option.js";
import { singleton, collect, take, skip, append, delay } from "../../fable-library/Seq.js";
import { rangeDouble } from "../../fable-library/Range.js";

export class Elmish_RingState$1 extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Writable", "ReadWritable"];
    }
}

export function Elmish_RingState$1$reflection(gen0) {
    return union_type("Elmish.RingState`1", [gen0], Elmish_RingState$1, () => [[["wx", array_type(gen0)], ["ix", int32_type]], [["rw", array_type(gen0)], ["wix", int32_type], ["rix", int32_type]]]);
}

export class Elmish_RingBuffer$1 {
    constructor(size) {
        this.state = (new Elmish_RingState$1(0, fill(new Array(max((x, y) => comparePrimitives(x, y), size, 10)), 0, max((x, y) => comparePrimitives(x, y), size, 10), null), 0));
    }
}

export function Elmish_RingBuffer$1$reflection(gen0) {
    return class_type("Elmish.RingBuffer`1", [gen0], Elmish_RingBuffer$1);
}

export function Elmish_RingBuffer$1_$ctor_Z524259A4(size) {
    return new Elmish_RingBuffer$1(size);
}

export function Elmish_RingBuffer$1__Pop(__) {
    const matchValue = __.state;
    if (matchValue.tag === 1) {
        const wix = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items = matchValue.fields[0];
        const rix$0027 = ((rix + 1) % items.length) | 0;
        if (rix$0027 === wix) {
            __.state = (new Elmish_RingState$1(0, items, wix));
        }
        else {
            __.state = (new Elmish_RingState$1(1, items, wix, rix$0027));
        }
        return some(items[rix]);
    }
    else {
        return void 0;
    }
}

export function Elmish_RingBuffer$1__Push_2B595(__, item) {
    const matchValue = __.state;
    if (matchValue.tag === 1) {
        const wix_1 = matchValue.fields[1] | 0;
        const rix = matchValue.fields[2] | 0;
        const items_1 = matchValue.fields[0];
        items_1[wix_1] = item;
        const wix$0027 = ((wix_1 + 1) % items_1.length) | 0;
        if (wix$0027 === rix) {
            __.state = (new Elmish_RingState$1(1, Elmish_RingBuffer$1__doubleSize(__, rix, items_1), items_1.length, 0));
        }
        else {
            __.state = (new Elmish_RingState$1(1, items_1, wix$0027, rix));
        }
    }
    else {
        const ix = matchValue.fields[1] | 0;
        const items = matchValue.fields[0];
        items[ix] = item;
        const wix = ((ix + 1) % items.length) | 0;
        __.state = (new Elmish_RingState$1(1, items, wix, ix));
    }
}

function Elmish_RingBuffer$1__doubleSize(this$, ix, items) {
    return Array.from(delay(() => append(skip(ix, items), delay(() => append(take(ix, items), delay(() => collect((matchValue) => singleton(null), rangeDouble(0, 1, items.length))))))));
}


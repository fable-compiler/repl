import { empty, toList, map, delay } from "../../fable-library/Seq.js";
import { rangeDouble } from "../../fable-library/Range.js";

export function Sutil_Helpers_fastNotEquals(x, y) {
    return !(x === y);
}

export function Sutil_Helpers_fileListToSeq(files) {
    if (!(files == null)) {
        return delay(() => map((i) => (files[i]), toList(rangeDouble(0, 1, files.length - 1))));
    }
    else {
        return empty();
    }
}

export function Sutil_Helpers_disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

export function Sutil_Helpers_unsubify(d, unitVar0) {
    d.Dispose();
}

export function Sutil_Helpers_makeIdGeneratorFrom(start) {
    let id = start;
    return () => {
        const r = id | 0;
        id = ((id + 1) | 0);
        return r | 0;
    };
}

export function Sutil_Helpers_makeIdGenerator() {
    return Sutil_Helpers_makeIdGeneratorFrom(0);
}


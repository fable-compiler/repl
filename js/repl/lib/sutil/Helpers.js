import { empty, rangeNumber, map, delay } from "../../fable-library/Seq.js";
import { ofSeq } from "../../fable-library/List.js";

export function Sveltish_Helpers_fastNotEquals(x, y) {
    return !(x === y);
}

export function Sveltish_Helpers_fileListToSeq(files) {
    if (!(files == null)) {
        return delay(() => map((i) => (files[i]), ofSeq(rangeNumber(0, 1, files.length - 1))));
    }
    else {
        return empty();
    }
}

export function Sveltish_Helpers_disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

export function Sveltish_Helpers_unsubify(d, unitVar0) {
    d.Dispose();
}

export function Sveltish_Helpers_makeIdGeneratorFrom(start) {
    let id = start | 0;
    return () => {
        const r = id | 0;
        id = (id + 1);
        return r | 0;
    };
}

export function Sveltish_Helpers_makeIdGenerator() {
    return Sveltish_Helpers_makeIdGeneratorFrom(0);
}


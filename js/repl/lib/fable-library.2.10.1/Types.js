// tslint:disable: space-before-function-paren
import { combineHashCodes, compare, compareArrays, equalArrays, equals, identityHash, numberHash, structuralHash } from "./Util.js";

function sameType(x, y) {
  return y != null && Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
} // Taken from Babel helpers


function inherits(subClass, superClass) {
  // if (typeof superClass !== "function" && superClass !== null) {
  //   throw new TypeError(
  //     "Super expression must either be null or a function, not " +
  //       typeof superClass
  //   );
  // }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  }); // if (superClass)
  //   Object.setPrototypeOf
  //     ? Object.setPrototypeOf(subClass, superClass)
  //     : (subClass.__proto__ = superClass);
}

export function declare(cons, superClass) {
  inherits(cons, superClass || SystemObject);
  return cons;
}
export class SystemObject {
  toString() {
    return "{" + Object.entries(this).map(([k, v]) => k + " = " + String(v)).join(";\n ") + "}";
  }

  GetHashCode() {
    return identityHash(this);
  }

  Equals(other) {
    return this === other;
  }

}

function compareList(self, other) {
  if (self === other) {
    return 0;
  } else {
    if (other == null) {
      return -1;
    }

    while (self.tail != null) {
      if (other.tail == null) {
        return 1;
      }

      const res = compare(self.head, other.head);

      if (res !== 0) {
        return res;
      }

      self = self.tail;
      other = other.tail;
    }

    return other.tail == null ? 0 : -1;
  }
}

export class List {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  toString() {
    return "[" + Array.from(this).join("; ") + "]";
  }

  toJSON() {
    return Array.from(this);
  }

  [Symbol.iterator]() {
    let cur = this;
    return {
      next: () => {
        const value = cur === null || cur === void 0 ? void 0 : cur.head;
        const done = (cur === null || cur === void 0 ? void 0 : cur.tail) == null;
        cur = cur === null || cur === void 0 ? void 0 : cur.tail;
        return {
          done,
          value
        };
      }
    };
  }

  GetHashCode() {
    const hashes = Array.from(this).map(structuralHash);
    return combineHashCodes(hashes);
  }

  Equals(other) {
    return compareList(this, other) === 0;
  }

  CompareTo(other) {
    return compareList(this, other);
  }

}
export class Union extends SystemObject {
  constructor(tag, name, ...fields) {
    super();
    this.tag = tag | 0;
    this.name = name;
    this.fields = fields;
  }

  toString() {
    const len = this.fields.length;

    if (len === 0) {
      return this.name;
    } else if (len === 1) {
      return this.name + " " + String(this.fields[0]);
    } else {
      return this.name + " (" + this.fields.map(x => String(x)).join(",") + ")";
    }
  }

  toJSON() {
    return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
  }

  GetHashCode() {
    const hashes = this.fields.map(x => structuralHash(x));
    hashes.splice(0, 0, numberHash(this.tag));
    return combineHashCodes(hashes);
  }

  Equals(other) {
    return this === other || sameType(this, other) && this.tag === other.tag && equalArrays(this.fields, other.fields);
  }

  CompareTo(other) {
    if (this === other) {
      return 0;
    } else if (!sameType(this, other)) {
      return -1;
    } else if (this.tag === other.tag) {
      return compareArrays(this.fields, other.fields);
    } else {
      return this.tag < other.tag ? -1 : 1;
    }
  }

}

function recordToJson(record, getFieldNames) {
  const o = {};
  const keys = getFieldNames == null ? Object.keys(record) : getFieldNames(record);

  for (let i = 0; i < keys.length; i++) {
    o[keys[i]] = record[keys[i]];
  }

  return o;
}

function recordEquals(self, other, getFieldNames) {
  if (self === other) {
    return true;
  } else if (!sameType(self, other)) {
    return false;
  } else {
    const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (let i = 0; i < thisNames.length; i++) {
      if (!equals(self[thisNames[i]], other[thisNames[i]])) {
        return false;
      }
    }

    return true;
  }
}

function recordCompare(self, other, getFieldNames) {
  if (self === other) {
    return 0;
  } else if (!sameType(self, other)) {
    return -1;
  } else {
    const thisNames = getFieldNames == null ? Object.keys(self) : getFieldNames(self);

    for (let i = 0; i < thisNames.length; i++) {
      const result = compare(self[thisNames[i]], other[thisNames[i]]);

      if (result !== 0) {
        return result;
      }
    }

    return 0;
  }
}

export class Record extends SystemObject {
  toString() {
    return "{" + Object.entries(this).map(([k, v]) => k + " = " + String(v)).join(";\n ") + "}";
  }

  toJSON() {
    return recordToJson(this);
  }

  GetHashCode() {
    const hashes = Object.values(this).map(v => structuralHash(v));
    return combineHashCodes(hashes);
  }

  Equals(other) {
    return recordEquals(this, other);
  }

  CompareTo(other) {
    return recordCompare(this, other);
  }

}
export function anonRecord(o) {
  return Object.assign(Object.create(Record.prototype), o);
}
export class FSharpRef extends Record {
  constructor(contents) {
    super();
    this.contents = contents;
  }

}
export const Exception = declare(function Exception(message) {
  this.stack = Error().stack;
  this.message = message;
}, SystemObject);
export function isException(x) {
  return x instanceof Error || x instanceof Exception;
}

function getFSharpExceptionFieldNames(self) {
  return Object.keys(self).filter(k => k !== "message" && k !== "stack");
}

export class FSharpException extends Exception {
  toString() {
    var _a; // const fieldNames = getFSharpExceptionFieldNames(this);


    const fields = Object.entries(this).filter(([k, _]) => k !== "message" && k !== "stack");
    const len = fields.length;

    if (len === 0) {
      return (_a = this.message) !== null && _a !== void 0 ? _a : "";
    } else if (len === 1) {
      return this.message + " " + String(fields[1]);
    } else {
      return this.message + " (" + fields.map(([_, v]) => String(v)).join(",") + ")";
    }
  }

  toJSON() {
    return recordToJson(this, getFSharpExceptionFieldNames);
  }

  GetHashCode() {
    const fields = Object.entries(this).filter(([k, _]) => k !== "message" && k !== "stack");
    const hashes = fields.map(([_, v]) => structuralHash(v));
    return combineHashCodes(hashes);
  }

  Equals(other) {
    return recordEquals(this, other, getFSharpExceptionFieldNames);
  }

  CompareTo(other) {
    return recordCompare(this, other, getFSharpExceptionFieldNames);
  }

}
export class MatchFailureException extends FSharpException {
  constructor(arg1, arg2, arg3) {
    super();
    this.arg1 = arg1;
    this.arg2 = arg2 | 0;
    this.arg3 = arg3 | 0;
    this.message = "The match cases were incomplete";
  }

}
export const Attribute = declare(function Attribute() {
  return;
}, SystemObject);

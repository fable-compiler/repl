import { declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { type, union, list, obj, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { tryGetValue } from "../fable-library.2.2.0-beta-010/Util.js";
export const ErrorReason = declare(function Thoth_Json_ErrorReason(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ErrorReason$reflection() {
  return union("Thoth.Json.ErrorReason", [], ErrorReason, () => [["BadPrimitive", [string, obj]], ["BadPrimitiveExtra", [string, obj, string]], ["BadType", [string, obj]], ["BadField", [string, obj]], ["BadPath", [string, obj, string]], ["TooSmallArray", [string, obj]], ["FailMessage", [string]], ["BadOneOf", [list(string)]]]);
}
export const Cache$002ECache$00601 = declare(function Thoth_Json_Cache_Cache() {
  const $this$$1 = this;
  $this$$1.cache = new Map([]);
});
export function Cache$002ECache$00601$reflection($gen$$2) {
  return type("Thoth.Json.Cache.Cache`1", [$gen$$2]);
}
export function Cache$002ECache$00601$$$$002Ector() {
  return this != null ? Cache$002ECache$00601.call(this) : new Cache$002ECache$00601();
}
export function Cache$002ECache$00601$$GetOrAdd$$43981464(__, key, factory) {
  const matchValue = tryGetValue(__.cache, key, null);

  if (matchValue[0]) {
    return matchValue[1];
  } else {
    const x$$1 = factory();

    __.cache.set(key, x$$1);

    return x$$1;
  }
}
export const Cache$$$Encoders = Cache$002ECache$00601$$$$002Ector();
export const Cache$$$Decoders = Cache$002ECache$00601$$$$002Ector();

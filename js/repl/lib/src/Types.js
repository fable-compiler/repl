import { declare, Union } from "../fable-library.2.3.18/Types.js";
import { type, union, list, obj, string } from "../fable-library.2.3.18/Reflection.js";
import { addToDict, tryGetValue } from "../fable-library.2.3.18/Util.js";
export const ErrorReason = declare(function Thoth_Json_ErrorReason(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ErrorReason$reflection() {
  return union("Thoth.Json.ErrorReason", [], ErrorReason, () => [["BadPrimitive", [string, obj]], ["BadPrimitiveExtra", [string, obj, string]], ["BadType", [string, obj]], ["BadField", [string, obj]], ["BadPath", [string, obj, string]], ["TooSmallArray", [string, obj]], ["FailMessage", [string]], ["BadOneOf", [list(string)]]]);
}
export const Util$002ECache$00601 = declare(function Thoth_Json_Util_Cache() {
  const $this$$1 = this;
  $this$$1.cache = new Map([]);
});
export function Util$002ECache$00601$reflection($gen$$2) {
  return type("Thoth.Json.Util.Cache`1", [$gen$$2]);
}
export function Util$002ECache$00601$$$$002Ector() {
  return this instanceof Util$002ECache$00601 ? Util$002ECache$00601.call(this) : new Util$002ECache$00601();
}
export function Util$002ECache$00601$$GetOrAdd$$43981464(__, key, factory) {
  const matchValue = tryGetValue(__.cache, key, null);

  if (matchValue[0]) {
    return matchValue[1];
  } else {
    const x$$1 = factory();
    addToDict(__.cache, key, x$$1);
    return x$$1;
  }
}
export const Util$$$CachedEncoders = Util$002ECache$00601$$$$002Ector();
export const Util$$$CachedDecoders = Util$002ECache$00601$$$$002Ector();
export function Util$$$resolveType(resolver) {
  return resolver.ResolveType();
}

import { declare, Union } from "../../fable-library/Types.js";
import { class_type, union_type, list_type, obj_type, string_type } from "../../fable-library/Reflection.js";
import { addToDict, tryGetValue } from "../../fable-library/Util.js";
export const ErrorReason = declare(function Thoth_Json_ErrorReason(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function ErrorReason$reflection() {
  return union_type("Thoth.Json.ErrorReason", [], ErrorReason, () => [["BadPrimitive", [["Item1", string_type], ["Item2", obj_type]]], ["BadPrimitiveExtra", [["Item1", string_type], ["Item2", obj_type], ["Item3", string_type]]], ["BadType", [["Item1", string_type], ["Item2", obj_type]]], ["BadField", [["Item1", string_type], ["Item2", obj_type]]], ["BadPath", [["Item1", string_type], ["Item2", obj_type], ["Item3", string_type]]], ["TooSmallArray", [["Item1", string_type], ["Item2", obj_type]]], ["FailMessage", [["Item", string_type]]], ["BadOneOf", [["Item", list_type(string_type)]]]]);
}
export const Util$002ECache$00601 = declare(function Thoth_Json_Util_Cache() {
  const $this$$1 = this;
  $this$$1.cache = new Map([]);
  void null;
});
export function Util$002ECache$00601$reflection($gen$$2) {
  return class_type("Thoth.Json.Util.Cache`1", [$gen$$2], Util$002ECache$00601);
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

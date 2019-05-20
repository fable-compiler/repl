import { List, declare, Union } from "../fable-library.2.3.10/Types.js";
import { list, type, string, union } from "../fable-library.2.3.10/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.10/Util.js";
export const ISize = declare(function Fulma_Tile_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ISize$reflection() {
  return union("Fulma.Tile.ISize", [], ISize, () => ["is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8", "is-9", "is-10", "is-11", "is-12"]);
}
export function ISize$$$ToString$$Z15E9EFF2(x) {
  return Reflection$0024$0024$0024getCaseName(x);
}
export const Option = declare(function Fulma_Tile_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Tile.Option", [], Option, () => [["Size", [ISize$reflection()]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], "is-child", "is-ancestor", "is-parent", "is-vertical", ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function tile(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 3:
      case 4:
      case 5:
      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 2:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 1:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 7:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const size = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, ISize$$$ToString$$Z15E9EFF2(size));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "tile"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function parent(options$$1, children$$4) {
  return tile(new List(new Option(5, "is-parent"), options$$1), children$$4);
}
export function child(options$$2, children$$5) {
  return tile(new List(new Option(3, "is-child"), options$$2), children$$5);
}
export function ancestor(options$$3, children$$6) {
  return tile(new List(new Option(4, "is-ancestor"), options$$3), children$$6);
}

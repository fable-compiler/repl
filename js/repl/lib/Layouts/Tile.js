import { List, declare, Union } from "../fable-library.2.4.2/Types.js";
import { list, type, string, union } from "../fable-library.2.4.2/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
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
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
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
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          const arg00 = ISize$$$ToString$$Z15E9EFF2(option.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }
    }
  }, "tile"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
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

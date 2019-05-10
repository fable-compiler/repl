import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { union, list, type, string } from "../fable-library.2.3.7/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const TableOption = declare(function Fulma_Table_TableOption(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function TableOption$reflection() {
  return union("Fulma.Table.TableOption", [], TableOption, () => ["is-bordered", "is-striped", "is-fullwidth", "is-narrow", "is-hoverable", ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function table(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
      case 2:
      case 3:
      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 6:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 5:
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
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "table"), function (props$$1, children$$1) {
    return React.createElement("table", createObj(props$$1, 1), ...children$$1);
  }, children);
}

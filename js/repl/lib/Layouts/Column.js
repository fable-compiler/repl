import { declare, Union } from "../fable-library.2.3.7/Types.js";
import { list, type, string, union } from "../fable-library.2.3.7/Reflection.js";
import { Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Screen$reflection as Screen$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.7/Util.js";
export const ISize = declare(function Fulma_Column_ISize(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ISize$reflection() {
  return union("Fulma.Column.ISize", [], ISize, () => ["is-one-quarter", "is-one-third", "is-half", "is-two-thirds", "is-three-quarters", "is-1", "is-2", "is-3", "is-4", "is-5", "is-6", "is-7", "is-8", "is-9", "is-10", "is-11", "is-12", "is-narrow", "is-full", "is-one-fifth", "is-two-fifths", "is-three-fifths", "is-four-fifths"]);
}
export const Option = declare(function Fulma_Column_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Column.Option", [], Option, () => [["Width", [Screen$0024reflection(), ISize$reflection()]], ["Offset", [Screen$0024reflection(), ISize$reflection()]], ["CustomClass", [string]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}

function suffix(_arg1) {
  switch (_arg1.tag) {
    case 1:
      {
        return "-desktop";
      }

    case 2:
      {
        return "-tablet";
      }

    case 3:
      {
        return "-mobile";
      }

    case 4:
      {
        return "-widescreen";
      }

    case 6:
      {
        return "-fullhd";
      }

    case 5:
      {
        return "-touch";
      }

    default:
      {
        return "";
      }
  }
}

export function ofWidth(screen, size) {
  return Reflection$0024$0024$0024getCaseName(size) + suffix(screen);
}
export function ofOffset(screen$$1, offset) {
  const className = Reflection$0024$0024$0024getCaseName(offset);
  return "is-offset-" + className.slice(3, className.length) + suffix(screen$$1);
}
export function column(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 1:
        {
          const screen$$3 = option.fields[0];
          const offset$$1 = option.fields[1];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, ofOffset(screen$$3, offset$$1));
        }

      case 2:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 3:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 4:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const width = option.fields[1];
          const screen$$2 = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, ofWidth(screen$$2, width));
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "column"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}

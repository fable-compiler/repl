import { declare, Union } from "../../fable-library/Types.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Size$002EISize$reflection as Size$0024002EISize$0024reflection } from "../Fulma/Common.js";
import { union_type, string_type, list_type, class_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
import { some } from "../../fable-library/Option.js";
export const Option = declare(function Fulma_Media_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Media.Option", [], Option, () => [["Size", [["Item", Size$0024002EISize$0024reflection()]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function media(options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    var $target$$5, size, props, customClass, modifiers;

    if (option.tag === 1) {
      $target$$5 = 2;
      props = option.fields[0];
    } else if (option.tag === 2) {
      $target$$5 = 3;
      customClass = option.fields[0];
    } else if (option.tag === 3) {
      $target$$5 = 4;
      modifiers = option.fields[0];
    } else if (option.fields[0].tag === 0) {
      $target$$5 = 0;
    } else if (option.fields[0].tag === 1) {
      $target$$5 = 0;
    } else {
      $target$$5 = 1;
      size = option.fields[0];
    }

    switch ($target$$5) {
      case 0:
        {
          console.warn(some("`is-small` and `is-medium` are not valid sizes for the media component"));
          return result;
        }

      case 1:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(size);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, arg00);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }
    }
  }, "media"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("article", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function left(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, Common$0024$0024$0024parseOptions, "media-left"), function (props$$4, children$$5) {
    const props$$5 = props$$4;
    const children$$6 = children$$5;
    return React.createElement("div", createObj(props$$5, 1), ...children$$6);
  }, children$$4);
}
export function right(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "media-right"), function (props$$7, children$$9) {
    const props$$8 = props$$7;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$8, 1), ...children$$10);
  }, children$$8);
}
export function content(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "media-content"), function (props$$10, children$$13) {
    const props$$11 = props$$10;
    const children$$14 = children$$13;
    return React.createElement("div", createObj(props$$11, 1), ...children$$14);
  }, children$$12);
}

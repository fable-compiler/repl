import { declare, Union } from "../fable-library.2.3.18/Types.js";
import { lambda, unit, union, string, bool, list, type } from "../fable-library.2.3.18/Reflection.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.3.18/Util.js";
import { DOMAttr } from "../src/Fable.React.Props.js";
export const Option = declare(function Fulma_Modal_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Modal.Option", [], Option, () => [["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["is-active", [bool]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Close$002EOption = declare(function Fulma_Modal_Close_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Close$002EOption$reflection() {
  return union("Fulma.Modal.Close.Option", [], Close$002EOption, () => [["Size", [Size$0024002EISize$0024reflection()]], ["OnClick", [lambda(type("Browser.Types.MouseEvent"), unit)]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function modal(options, children) {
  const parseOptions = function parseOptions(result, option) {
    switch (option.tag) {
      case 0:
        {
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 2:
        {
          const customClass = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, customClass);
        }

      case 3:
        {
          const modifiers = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, modifiers);
        }

      default:
        {
          const state = option.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "modal"), function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, children);
}
export function close(options$$1, children$$4) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    var $target$$1, size, cb, props$$4, customClass$$1, modifiers$$1;

    if (option$$1.tag === 1) {
      $target$$1 = 2;
      cb = option$$1.fields[0];
    } else if (option$$1.tag === 2) {
      $target$$1 = 3;
      props$$4 = option$$1.fields[0];
    } else if (option$$1.tag === 3) {
      $target$$1 = 4;
      customClass$$1 = option$$1.fields[0];
    } else if (option$$1.tag === 4) {
      $target$$1 = 5;
      modifiers$$1 = option$$1.fields[0];
    } else if (option$$1.fields[0].tag === 0) {
      $target$$1 = 0;
    } else if (option$$1.fields[0].tag === 1) {
      $target$$1 = 0;
    } else {
      $target$$1 = 1;
      size = option$$1.fields[0];
    }

    switch ($target$$1) {
      case 0:
        {
          console.warn("`is-small` and `is-medium` are not valid sizes for 'modal close'");
          return result$$1;
        }

      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, Reflection$0024$0024$0024getCaseName(size));
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$1, new DOMAttr(40, "OnClick", cb));
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$4);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass$$1);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers$$1);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions$$1, "modal-close"), function (props$$5, children$$5) {
    return React.createElement("button", createObj(props$$5, 1), ...children$$5);
  }, children$$4);
}
export function background(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "modal-background"), function (props$$8, children$$9) {
    return React.createElement("div", createObj(props$$8, 1), ...children$$9);
  }, children$$8);
}
export function content(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "modal-content"), function (props$$11, children$$13) {
    return React.createElement("div", createObj(props$$11, 1), ...children$$13);
  }, children$$12);
}
export function Card$$$card(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "modal-card"), function (props$$14, children$$17) {
    return React.createElement("div", createObj(props$$14, 1), ...children$$17);
  }, children$$16);
}
export function Card$$$head(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "modal-card-head"), function (props$$17, children$$21) {
    return React.createElement("header", createObj(props$$17, 1), ...children$$21);
  }, children$$20);
}
export function Card$$$foot(options$$6, children$$24) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, Common$0024$0024$0024parseOptions, "modal-card-foot"), function (props$$20, children$$25) {
    return React.createElement("footer", createObj(props$$20, 1), ...children$$25);
  }, children$$24);
}
export function Card$$$title(options$$7, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, Common$0024$0024$0024parseOptions, "modal-card-title"), function (props$$23, children$$29) {
    return React.createElement("div", createObj(props$$23, 1), ...children$$29);
  }, children$$28);
}
export function Card$$$body(options$$8, children$$32) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$8, Common$0024$0024$0024parseOptions, "modal-card-body"), function (props$$26, children$$33) {
    return React.createElement("section", createObj(props$$26, 1), ...children$$33);
  }, children$$32);
}

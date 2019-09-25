import { declare, Union } from "../fable-library.2.4.2/Types.js";
import { lambda, unit, union, string, bool, list, type } from "../fable-library.2.4.2/Reflection.js";
import { Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$AddProp$$7BFEDA81 as Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81, Reflection$$$getCaseName as Reflection$0024$0024$0024getCaseName, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Size$002EISize$reflection as Size$0024002EISize$0024reflection, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection } from "../Fulma/Common.js";
import { createObj } from "../fable-library.2.4.2/Util.js";
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
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 0:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result, option.fields[0]);
        }

      default:
        {
          if (option.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  }, "modal"), function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, children);
}
export function close(options$$1, children$$4) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, function parseOptions$$1(result$$1, option$$1) {
    var $target$$9, size, cb, props$$4, customClass$$1, modifiers$$1;

    if (option$$1.tag === 1) {
      $target$$9 = 2;
      cb = option$$1.fields[0];
    } else if (option$$1.tag === 2) {
      $target$$9 = 3;
      props$$4 = option$$1.fields[0];
    } else if (option$$1.tag === 3) {
      $target$$9 = 4;
      customClass$$1 = option$$1.fields[0];
    } else if (option$$1.tag === 4) {
      $target$$9 = 5;
      modifiers$$1 = option$$1.fields[0];
    } else if (option$$1.fields[0].tag === 0) {
      $target$$9 = 0;
    } else if (option$$1.fields[0].tag === 1) {
      $target$$9 = 0;
    } else {
      $target$$9 = 1;
      size = option$$1.fields[0];
    }

    switch ($target$$9) {
      case 0:
        {
          console.warn("`is-small` and `is-medium` are not valid sizes for 'modal close'");
          return result$$1;
        }

      case 1:
        {
          const arg00 = Reflection$0024$0024$0024getCaseName(size);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, arg00);
        }

      case 2:
        {
          const arg00$$1 = new DOMAttr(40, "OnClick", cb);
          return Common$0024002EGenericOptions$0024$0024AddProp$0024$00247BFEDA81(result$$1, arg00$$1);
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
  }, "modal-close"), function (props$$5, children$$5) {
    const props$$6 = props$$5;
    const children$$6 = children$$5;
    return React.createElement("button", createObj(props$$6, 1), ...children$$6);
  }, children$$4);
}
export function background(options$$2, children$$8) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, Common$0024$0024$0024parseOptions, "modal-background"), function (props$$8, children$$9) {
    const props$$9 = props$$8;
    const children$$10 = children$$9;
    return React.createElement("div", createObj(props$$9, 1), ...children$$10);
  }, children$$8);
}
export function content(options$$3, children$$12) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "modal-content"), function (props$$11, children$$13) {
    const props$$12 = props$$11;
    const children$$14 = children$$13;
    return React.createElement("div", createObj(props$$12, 1), ...children$$14);
  }, children$$12);
}
export function Card$$$card(options$$4, children$$16) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "modal-card"), function (props$$14, children$$17) {
    const props$$15 = props$$14;
    const children$$18 = children$$17;
    return React.createElement("div", createObj(props$$15, 1), ...children$$18);
  }, children$$16);
}
export function Card$$$head(options$$5, children$$20) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "modal-card-head"), function (props$$17, children$$21) {
    const props$$18 = props$$17;
    const children$$22 = children$$21;
    return React.createElement("header", createObj(props$$18, 1), ...children$$22);
  }, children$$20);
}
export function Card$$$foot(options$$6, children$$24) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, Common$0024$0024$0024parseOptions, "modal-card-foot"), function (props$$20, children$$25) {
    const props$$21 = props$$20;
    const children$$26 = children$$25;
    return React.createElement("footer", createObj(props$$21, 1), ...children$$26);
  }, children$$24);
}
export function Card$$$title(options$$7, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, Common$0024$0024$0024parseOptions, "modal-card-title"), function (props$$23, children$$29) {
    const props$$24 = props$$23;
    const children$$30 = children$$29;
    return React.createElement("div", createObj(props$$24, 1), ...children$$30);
  }, children$$28);
}
export function Card$$$body(options$$8, children$$32) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$8, Common$0024$0024$0024parseOptions, "modal-card-body"), function (props$$26, children$$33) {
    const props$$27 = props$$26;
    const children$$34 = children$$33;
    return React.createElement("section", createObj(props$$27, 1), ...children$$34);
  }, children$$32);
}

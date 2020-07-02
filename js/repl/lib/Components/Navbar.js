import { declare, Union } from "../../fable-library/Types.js";
import { Color$$$ofColor as Color$0024$0024$0024ofColor, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { bool_type, union_type, string_type, list_type, class_type } from "../../fable-library/Reflection.js";
import { createObj } from "../../fable-library/Util.js";
export const Option = declare(function Fulma_Navbar_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Option$reflection() {
  return union_type("Fulma.Navbar.Option", [], Option, () => [["Color", [["Item", Color$0024002EIColor$0024reflection()]]], "has-shadow", "is-transparent", "is-fixed-top", "is-fixed-bottom", "is-spaced", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export const Menu$002EOption = declare(function Fulma_Navbar_Menu_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Menu$002EOption$reflection() {
  return union_type("Fulma.Navbar.Menu.Option", [], Menu$002EOption, () => [["is-active", [["Item", bool_type]]], ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export const Item$002EOption = declare(function Fulma_Navbar_Item_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Item$002EOption$reflection() {
  return union_type("Fulma.Navbar.Item.Option", [], Item$002EOption, () => ["is-tab", ["is-active", [["Item", bool_type]]], "is-hoverable", "has-dropdown", "is-expanded", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function Item$$$item(element, options, children) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, function parseOptions(result, option) {
    switch (option.tag) {
      case 4:
      case 0:
      case 2:
      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, option.fields[0]);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result, option.fields[0]);
        }

      case 7:
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
  }, "navbar-item"), element, children);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$1, children$$1) {
    const props$$2 = props$$1;
    const children$$2 = children$$1;
    return React.createElement("div", createObj(props$$2, 1), ...children$$2);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$4, children$$4) {
    const props$$5 = props$$4;
    const children$$5 = children$$4;
    return React.createElement("a", createObj(props$$5, 1), ...children$$5);
  }, x$$1, y$$1);
}
export const Link$002EOption = declare(function Fulma_Navbar_Link_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Link$002EOption$reflection() {
  return union_type("Fulma.Navbar.Link.Option", [], Link$002EOption, () => [["is-active", [["Item", bool_type]]], "is-arrowless", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function Link$$$link(element$$1, options$$1, children$$7) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, option$$1.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, option$$1.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, option$$1.fields[0]);
        }

      default:
        {
          if (option$$1.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
          } else {
            return result$$1;
          }
        }
    }
  }, "navbar-link"), element$$1, children$$7);
}
export function Link$$$div(x$$2, y$$2) {
  return Link$$$link(function (props$$8, children$$8) {
    const props$$9 = props$$8;
    const children$$9 = children$$8;
    return React.createElement("div", createObj(props$$9, 1), ...children$$9);
  }, x$$2, y$$2);
}
export function Link$$$a(x$$3, y$$3) {
  return Link$$$link(function (props$$11, children$$11) {
    const props$$12 = props$$11;
    const children$$12 = children$$11;
    return React.createElement("a", createObj(props$$12, 1), ...children$$12);
  }, x$$3, y$$3);
}
export const Dropdown$002EOption = declare(function Fulma_Navbar_Dropdown_Option(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Dropdown$002EOption$reflection() {
  return union_type("Fulma.Navbar.Dropdown.Option", [], Dropdown$002EOption, () => [["is-active", [["Item", bool_type]]], "is-boxed", "is-right", ["Props", [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]], ["CustomClass", [["Item", string_type]]], ["Modifiers", [["Item", list_type(Modifier$0024002EIModifier$0024reflection())]]]]);
}
export function Dropdown$$$dropdown(element$$2, options$$2, children$$14) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, function parseOptions$$2(result$$2, option$$2) {
    switch (option$$2.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$2, option$$2);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$2, option$$2.fields[0]);
        }

      case 4:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, option$$2.fields[0]);
        }

      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$2, option$$2.fields[0]);
        }

      default:
        {
          if (option$$2.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$2, option$$2);
          } else {
            return result$$2;
          }
        }
    }
  }, "navbar-dropdown"), element$$2, children$$14);
}
export function Dropdown$$$div(x$$4, y$$4) {
  return Dropdown$$$dropdown(function (props$$15, children$$15) {
    const props$$16 = props$$15;
    const children$$16 = children$$15;
    return React.createElement("div", createObj(props$$16, 1), ...children$$16);
  }, x$$4, y$$4);
}
export function Dropdown$$$a(x$$5, y$$5) {
  return Dropdown$$$dropdown(function (props$$18, children$$18) {
    const props$$19 = props$$18;
    const children$$19 = children$$18;
    return React.createElement("a", createObj(props$$19, 1), ...children$$19);
  }, x$$5, y$$5);
}
export function Brand$$$brand(element$$3, options$$3, children$$21) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "navbar-brand"), element$$3, children$$21);
}
export function Brand$$$div(x$$6, y$$6) {
  return Brand$$$brand(function (props$$21, children$$22) {
    const props$$22 = props$$21;
    const children$$23 = children$$22;
    return React.createElement("div", createObj(props$$22, 1), ...children$$23);
  }, x$$6, y$$6);
}
export function Brand$$$a(x$$7, y$$7) {
  return Brand$$$brand(function (props$$24, children$$25) {
    const props$$25 = props$$24;
    const children$$26 = children$$25;
    return React.createElement("a", createObj(props$$25, 1), ...children$$26);
  }, x$$7, y$$7);
}
export function Start$$$start(element$$4, options$$4, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "navbar-start"), element$$4, children$$28);
}
export function Start$$$div(x$$8, y$$8) {
  return Start$$$start(function (props$$27, children$$29) {
    const props$$28 = props$$27;
    const children$$30 = children$$29;
    return React.createElement("div", createObj(props$$28, 1), ...children$$30);
  }, x$$8, y$$8);
}
export function Start$$$a(x$$9, y$$9) {
  return Start$$$start(function (props$$30, children$$32) {
    const props$$31 = props$$30;
    const children$$33 = children$$32;
    return React.createElement("a", createObj(props$$31, 1), ...children$$33);
  }, x$$9, y$$9);
}
export function End$$$end(element$$5, options$$5, children$$35) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "navbar-end"), element$$5, children$$35);
}
export function End$$$div(x$$10, y$$10) {
  return End$$$end(function (props$$33, children$$36) {
    const props$$34 = props$$33;
    const children$$37 = children$$36;
    return React.createElement("div", createObj(props$$34, 1), ...children$$37);
  }, x$$10, y$$10);
}
export function End$$$a(x$$11, y$$11) {
  return End$$$end(function (props$$36, children$$39) {
    const props$$37 = props$$36;
    const children$$40 = children$$39;
    return React.createElement("a", createObj(props$$37, 1), ...children$$40);
  }, x$$11, y$$11);
}
export function navbar(options$$6, children$$42) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, function parseOptions$$3(result$$6, option$$6) {
    switch (option$$6.tag) {
      case 3:
      case 4:
      case 2:
      case 5:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$6, option$$6);
        }

      case 0:
        {
          const arg00 = Color$0024$0024$0024ofColor(option$$6.fields[0]);
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, arg00);
        }

      case 6:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$6, option$$6.fields[0]);
        }

      case 7:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, option$$6.fields[0]);
        }

      case 8:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$6, option$$6.fields[0]);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$6, option$$6);
        }
    }
  }, "navbar"), function (props$$40, children$$43) {
    const props$$41 = props$$40;
    const children$$44 = children$$43;
    return React.createElement("nav", createObj(props$$41, 1), ...children$$44);
  }, children$$42);
}
export function menu(options$$7, children$$46) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, function parseOptions$$4(result$$7, option$$7) {
    switch (option$$7.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$7, option$$7.fields[0]);
        }

      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$7, option$$7.fields[0]);
        }

      case 3:
        {
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$7, option$$7.fields[0]);
        }

      default:
        {
          if (option$$7.fields[0]) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$7, option$$7);
          } else {
            return result$$7;
          }
        }
    }
  }, "navbar-menu"), function (props$$44, children$$47) {
    const props$$45 = props$$44;
    const children$$48 = children$$47;
    return React.createElement("div", createObj(props$$45, 1), ...children$$48);
  }, children$$46);
}
export function burger(options$$8, children$$50) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$8, Common$0024$0024$0024parseOptions, "navbar-burger"), function (props$$47, children$$51) {
    const props$$48 = props$$47;
    const children$$52 = children$$51;
    return React.createElement("div", createObj(props$$48, 1), ...children$$52);
  }, children$$50);
}
export function content(options$$9, children$$54) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$9, Common$0024$0024$0024parseOptions, "navbar-content"), function (props$$50, children$$55) {
    const props$$51 = props$$50;
    const children$$56 = children$$55;
    return React.createElement("div", createObj(props$$51, 1), ...children$$56);
  }, children$$54);
}
export function divider(options$$10, children$$58) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$10, Common$0024$0024$0024parseOptions, "navbar-divider"), function (props$$53, children$$59) {
    const props$$54 = props$$53;
    const children$$60 = children$$59;
    return React.createElement("div", createObj(props$$54, 1), ...children$$60);
  }, children$$58);
}

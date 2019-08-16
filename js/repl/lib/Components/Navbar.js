import { declare, Union } from "../fable-library.2.3.18/Types.js";
import { Color$$$ofColor as Color$0024$0024$0024ofColor, Common$$$parseOptions as Common$0024$0024$0024parseOptions, Common$002EGenericOptions$$$Parse$$9AE2F7C as Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C, Common$002EGenericOptions$$ToReactElement$$Z6D3CD4B7 as Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7, Common$002EGenericOptions$$AddModifiers$$5BB435D5 as Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5, Common$002EGenericOptions$$AddClass$$Z721C83C5 as Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5, Common$002EGenericOptions$$AddProps$$416C4D0B as Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B, Common$002EGenericOptions$$AddCaseName$$1505 as Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { bool, union, string, list, type } from "../fable-library.2.3.18/Reflection.js";
import { createObj } from "../fable-library.2.3.18/Util.js";
export const Option = declare(function Fulma_Navbar_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Navbar.Option", [], Option, () => [["Color", [Color$0024002EIColor$0024reflection()]], "has-shadow", "is-transparent", "is-fixed-top", "is-fixed-bottom", "is-spaced", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Menu$002EOption = declare(function Fulma_Navbar_Menu_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Menu$002EOption$reflection() {
  return union("Fulma.Navbar.Menu.Option", [], Menu$002EOption, () => [["is-active", [bool]], ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOption = declare(function Fulma_Navbar_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Navbar.Item.Option", [], Item$002EOption, () => ["is-tab", ["is-active", [bool]], "is-hoverable", "has-dropdown", "is-expanded", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Item$$$item(element, options, children) {
  const parseOptions = function parseOptions(result, option) {
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
          const props = option.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result, props);
        }

      case 6:
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
          const state = option.fields[0];

          if (state) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result, option);
          } else {
            return result;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options, parseOptions, "navbar-item"), element, children);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$1, children$$1) {
    return React.createElement("div", createObj(props$$1, 1), ...children$$1);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$4, children$$4) {
    return React.createElement("a", createObj(props$$4, 1), ...children$$4);
  }, x$$1, y$$1);
}
export const Link$002EOption = declare(function Fulma_Navbar_Link_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Link$002EOption$reflection() {
  return union("Fulma.Navbar.Link.Option", [], Link$002EOption, () => [["is-active", [bool]], "is-arrowless", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Link$$$link(element$$1, options$$1, children$$7) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, option$$1) {
    switch (option$$1.tag) {
      case 1:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
        }

      case 2:
        {
          const props$$7 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$1, props$$7);
        }

      case 3:
        {
          const customClass$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$1, customClass$$1);
        }

      case 4:
        {
          const modifiers$$1 = option$$1.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$1, modifiers$$1);
        }

      default:
        {
          const state$$1 = option$$1.fields[0];

          if (state$$1) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$1, option$$1);
          } else {
            return result$$1;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$1, parseOptions$$1, "navbar-link"), element$$1, children$$7);
}
export function Link$$$div(x$$2, y$$2) {
  return Link$$$link(function (props$$8, children$$8) {
    return React.createElement("div", createObj(props$$8, 1), ...children$$8);
  }, x$$2, y$$2);
}
export function Link$$$a(x$$3, y$$3) {
  return Link$$$link(function (props$$11, children$$11) {
    return React.createElement("a", createObj(props$$11, 1), ...children$$11);
  }, x$$3, y$$3);
}
export const Dropdown$002EOption = declare(function Fulma_Navbar_Dropdown_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Dropdown$002EOption$reflection() {
  return union("Fulma.Navbar.Dropdown.Option", [], Dropdown$002EOption, () => [["is-active", [bool]], "is-boxed", "is-right", ["Props", [list(type("Fable.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list(Modifier$0024002EIModifier$0024reflection())]]]);
}
export function Dropdown$$$dropdown(element$$2, options$$2, children$$14) {
  const parseOptions$$2 = function parseOptions$$2(result$$2, option$$2) {
    switch (option$$2.tag) {
      case 1:
      case 2:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$2, option$$2);
        }

      case 3:
        {
          const props$$14 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$2, props$$14);
        }

      case 4:
        {
          const customClass$$2 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$2, customClass$$2);
        }

      case 5:
        {
          const modifiers$$2 = option$$2.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$2, modifiers$$2);
        }

      default:
        {
          const state$$2 = option$$2.fields[0];

          if (state$$2) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$2, option$$2);
          } else {
            return result$$2;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$2, parseOptions$$2, "navbar-dropdown"), element$$2, children$$14);
}
export function Dropdown$$$div(x$$4, y$$4) {
  return Dropdown$$$dropdown(function (props$$15, children$$15) {
    return React.createElement("div", createObj(props$$15, 1), ...children$$15);
  }, x$$4, y$$4);
}
export function Dropdown$$$a(x$$5, y$$5) {
  return Dropdown$$$dropdown(function (props$$18, children$$18) {
    return React.createElement("a", createObj(props$$18, 1), ...children$$18);
  }, x$$5, y$$5);
}
export function Brand$$$brand(element$$3, options$$3, children$$21) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$3, Common$0024$0024$0024parseOptions, "navbar-brand"), element$$3, children$$21);
}
export function Brand$$$div(x$$6, y$$6) {
  return Brand$$$brand(function (props$$21, children$$22) {
    return React.createElement("div", createObj(props$$21, 1), ...children$$22);
  }, x$$6, y$$6);
}
export function Brand$$$a(x$$7, y$$7) {
  return Brand$$$brand(function (props$$24, children$$25) {
    return React.createElement("a", createObj(props$$24, 1), ...children$$25);
  }, x$$7, y$$7);
}
export function Start$$$start(element$$4, options$$4, children$$28) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$4, Common$0024$0024$0024parseOptions, "navbar-start"), element$$4, children$$28);
}
export function Start$$$div(x$$8, y$$8) {
  return Start$$$start(function (props$$27, children$$29) {
    return React.createElement("div", createObj(props$$27, 1), ...children$$29);
  }, x$$8, y$$8);
}
export function Start$$$a(x$$9, y$$9) {
  return Start$$$start(function (props$$30, children$$32) {
    return React.createElement("a", createObj(props$$30, 1), ...children$$32);
  }, x$$9, y$$9);
}
export function End$$$end(element$$5, options$$5, children$$35) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$5, Common$0024$0024$0024parseOptions, "navbar-end"), element$$5, children$$35);
}
export function End$$$div(x$$10, y$$10) {
  return End$$$end(function (props$$33, children$$36) {
    return React.createElement("div", createObj(props$$33, 1), ...children$$36);
  }, x$$10, y$$10);
}
export function End$$$a(x$$11, y$$11) {
  return End$$$end(function (props$$36, children$$39) {
    return React.createElement("a", createObj(props$$36, 1), ...children$$39);
  }, x$$11, y$$11);
}
export function navbar(options$$6, children$$42) {
  const parseOptions$$3 = function parseOptions$$3(result$$6, option$$6) {
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
          const color = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, Color$0024$0024$0024ofColor(color));
        }

      case 6:
        {
          const props$$39 = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$6, props$$39);
        }

      case 7:
        {
          const customClass$$3 = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$6, customClass$$3);
        }

      case 8:
        {
          const modifiers$$3 = option$$6.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$6, modifiers$$3);
        }

      default:
        {
          return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$6, option$$6);
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$6, parseOptions$$3, "navbar"), function (props$$40, children$$43) {
    return React.createElement("nav", createObj(props$$40, 1), ...children$$43);
  }, children$$42);
}
export function menu(options$$7, children$$46) {
  const parseOptions$$4 = function parseOptions$$4(result$$7, option$$7) {
    switch (option$$7.tag) {
      case 1:
        {
          const props$$43 = option$$7.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddProps$0024$0024416C4D0B(result$$7, props$$43);
        }

      case 2:
        {
          const customClass$$4 = option$$7.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddClass$0024$0024Z721C83C5(result$$7, customClass$$4);
        }

      case 3:
        {
          const modifiers$$4 = option$$7.fields[0];
          return Common$0024002EGenericOptions$0024$0024AddModifiers$0024$00245BB435D5(result$$7, modifiers$$4);
        }

      default:
        {
          const state$$3 = option$$7.fields[0];

          if (state$$3) {
            return Common$0024002EGenericOptions$0024$0024AddCaseName$0024$00241505(result$$7, option$$7);
          } else {
            return result$$7;
          }
        }
    }
  };

  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$7, parseOptions$$4, "navbar-menu"), function (props$$44, children$$47) {
    return React.createElement("div", createObj(props$$44, 1), ...children$$47);
  }, children$$46);
}
export function burger(options$$8, children$$50) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$8, Common$0024$0024$0024parseOptions, "navbar-burger"), function (props$$47, children$$51) {
    return React.createElement("div", createObj(props$$47, 1), ...children$$51);
  }, children$$50);
}
export function content(options$$9, children$$54) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$9, Common$0024$0024$0024parseOptions, "navbar-content"), function (props$$50, children$$55) {
    return React.createElement("div", createObj(props$$50, 1), ...children$$55);
  }, children$$54);
}
export function divider(options$$10, children$$58) {
  return Common$0024002EGenericOptions$0024$0024ToReactElement$0024$0024Z6D3CD4B7(Common$0024002EGenericOptions$0024$0024$0024Parse$0024$00249AE2F7C(options$$10, Common$0024$0024$0024parseOptions, "navbar-divider"), function (props$$53, children$$59) {
    return React.createElement("div", createObj(props$$53, 1), ...children$$59);
  }, children$$58);
}

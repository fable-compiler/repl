import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { Color$$$ofColor as Color$0024$0024$0024ofColor, Common$$$genericParse as Common$0024$0024$0024genericParse, Common$002EHelpers$$$classes as Common$0024002EHelpers$0024$0024$0024classes, Modifier$$$parseModifiers as Modifier$0024$0024$0024parseModifiers, Modifier$002EIModifier$reflection as Modifier$0024002EIModifier$0024reflection, Color$002EIColor$reflection as Color$0024002EIColor$0024reflection } from "../Fulma/Common.js";
import { record, option, bool, union, string, list as list$$5, type } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { ofArray, fold } from "../fable-library.2.2.0-beta-010/List.js";
import { createObj } from "../fable-library.2.2.0-beta-010/Util.js";
const createElement = React.createElement;
export const Option = declare(function Fulma_Navbar_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Option$reflection() {
  return union("Fulma.Navbar.Option", [], Option, () => [["Color", [Color$0024002EIColor$0024reflection()]], "HasShadow", "IsTransparent", "IsFixedTop", "IsFixedBottom", ["Props", [list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$5(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Options = declare(function Fulma_Navbar_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  this.HasShadow = arg1;
  this.Color = arg2;
  this.IsTransparent = arg3;
  this.FixedInfo = arg4;
  this.CustomClass = arg5;
  this.Props = arg6;
  this.Modifiers = arg7;
}, Record);
export function Options$reflection() {
  return record("Fulma.Navbar.Options", [], Options, () => [["HasShadow", bool], ["Color", option(string)], ["IsTransparent", bool], ["FixedInfo", option(string)], ["CustomClass", option(string)], ["Props", list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$5(option(string))]]);
}
export function Options$$$get_Empty() {
  return new Options(false, null, false, null, null, new List(), new List());
}
export const Menu$002EOption = declare(function Fulma_Navbar_Menu_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Menu$002EOption$reflection() {
  return union("Fulma.Navbar.Menu.Option", [], Menu$002EOption, () => [["IsActive", [bool]], ["Props", [list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$5(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Menu$002EOptions = declare(function Fulma_Navbar_Menu_Options(arg1, arg2, arg3, arg4) {
  this.IsActive = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Menu$002EOptions$reflection() {
  return record("Fulma.Navbar.Menu.Options", [], Menu$002EOptions, () => [["IsActive", bool], ["CustomClass", option(string)], ["Props", list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$5(option(string))]]);
}
export function Menu$002EOptions$$$get_Empty() {
  return new Menu$002EOptions(false, null, new List(), new List());
}
export const Item$002EOption = declare(function Fulma_Navbar_Item_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Item$002EOption$reflection() {
  return union("Fulma.Navbar.Item.Option", [], Item$002EOption, () => ["IsTab", ["IsActive", [bool]], "IsHoverable", "HasDropdown", "IsExpanded", ["Props", [list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$5(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Item$002EOptions = declare(function Fulma_Navbar_Item_Options(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8) {
  this.IsTab = arg1;
  this.IsActive = arg2;
  this.IsHoverable = arg3;
  this.HasDropdown = arg4;
  this.IsExpanded = arg5;
  this.CustomClass = arg6;
  this.Props = arg7;
  this.Modifiers = arg8;
}, Record);
export function Item$002EOptions$reflection() {
  return record("Fulma.Navbar.Item.Options", [], Item$002EOptions, () => [["IsTab", bool], ["IsActive", bool], ["IsHoverable", bool], ["HasDropdown", bool], ["IsExpanded", bool], ["CustomClass", option(string)], ["Props", list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$5(option(string))]]);
}
export function Item$002EOptions$$$get_Empty() {
  return new Item$002EOptions(false, false, false, false, false, null, new List(), new List());
}
export function Item$$$item(element, options, children) {
  const parseOptions = function parseOptions(result, opt) {
    switch (opt.tag) {
      case 4:
        {
          return new Item$002EOptions(result.IsTab, result.IsActive, result.IsHoverable, result.HasDropdown, true, result.CustomClass, result.Props, result.Modifiers);
        }

      case 0:
        {
          return new Item$002EOptions(true, result.IsActive, result.IsHoverable, result.HasDropdown, result.IsExpanded, result.CustomClass, result.Props, result.Modifiers);
        }

      case 2:
        {
          return new Item$002EOptions(result.IsTab, result.IsActive, true, result.HasDropdown, result.IsExpanded, result.CustomClass, result.Props, result.Modifiers);
        }

      case 3:
        {
          return new Item$002EOptions(result.IsTab, result.IsActive, result.IsHoverable, true, result.IsExpanded, result.CustomClass, result.Props, result.Modifiers);
        }

      case 5:
        {
          const props = opt.fields[0];
          return new Item$002EOptions(result.IsTab, result.IsActive, result.IsHoverable, result.HasDropdown, result.IsExpanded, result.CustomClass, props, result.Modifiers);
        }

      case 6:
        {
          const customClass = opt.fields[0];
          return new Item$002EOptions(result.IsTab, result.IsActive, result.IsHoverable, result.HasDropdown, result.IsExpanded, customClass, result.Props, result.Modifiers);
        }

      case 7:
        {
          const modifiers = opt.fields[0];
          return new Item$002EOptions(result.IsTab, result.IsActive, result.IsHoverable, result.HasDropdown, result.IsExpanded, result.CustomClass, result.Props, Modifier$0024$0024$0024parseModifiers(modifiers));
        }

      default:
        {
          const state = opt.fields[0];
          return new Item$002EOptions(result.IsTab, state, result.IsHoverable, result.HasDropdown, result.IsExpanded, result.CustomClass, result.Props, result.Modifiers);
        }
    }
  };

  const opts = fold(parseOptions, Item$002EOptions$$$get_Empty(), options);
  const classes = Common$0024002EHelpers$0024$0024$0024classes("navbar-item", new List(opts.CustomClass, opts.Modifiers), ofArray([["is-active", opts.IsActive], ["is-tab", opts.IsTab], ["is-hoverable", opts.IsHoverable], ["has-dropdown", opts.HasDropdown], ["is-expanded", opts.IsExpanded]]));
  return element(new List(classes, opts.Props), children);
}
export function Item$$$div(x, y) {
  return Item$$$item(function (props$$1, children$$1) {
    return createElement("div", createObj(props$$1, 1), ...children$$1);
  }, x, y);
}
export function Item$$$a(x$$1, y$$1) {
  return Item$$$item(function (props$$4, children$$4) {
    return createElement("a", createObj(props$$4, 1), ...children$$4);
  }, x$$1, y$$1);
}
export const Link$002EOption = declare(function Fulma_Navbar_Link_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Link$002EOption$reflection() {
  return union("Fulma.Navbar.Link.Option", [], Link$002EOption, () => [["IsActive", [bool]], ["Props", [list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$5(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Link$002EOptions = declare(function Fulma_Navbar_Link_Options(arg1, arg2, arg3, arg4) {
  this.IsActive = arg1;
  this.CustomClass = arg2;
  this.Props = arg3;
  this.Modifiers = arg4;
}, Record);
export function Link$002EOptions$reflection() {
  return record("Fulma.Navbar.Link.Options", [], Link$002EOptions, () => [["IsActive", bool], ["CustomClass", option(string)], ["Props", list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))], ["Modifiers", list$$5(option(string))]]);
}
export function Link$002EOptions$$$get_Empty() {
  return new Link$002EOptions(false, null, new List(), new List());
}
export function Link$$$link(element$$1, options$$2, children$$7) {
  const parseOptions$$1 = function parseOptions$$1(result$$1, opt$$1) {
    switch (opt$$1.tag) {
      case 2:
        {
          const customClass$$1 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsActive, customClass$$1, result$$1.Props, result$$1.Modifiers);
        }

      case 1:
        {
          const props$$7 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsActive, result$$1.CustomClass, props$$7, result$$1.Modifiers);
        }

      case 3:
        {
          const modifiers$$1 = opt$$1.fields[0];
          return new Link$002EOptions(result$$1.IsActive, result$$1.CustomClass, result$$1.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$1));
        }

      default:
        {
          const state$$2 = opt$$1.fields[0];
          return new Link$002EOptions(state$$2, result$$1.CustomClass, result$$1.Props, result$$1.Modifiers);
        }
    }
  };

  const opts$$1 = fold(parseOptions$$1, Link$002EOptions$$$get_Empty(), options$$2);
  const classes$$1 = Common$0024002EHelpers$0024$0024$0024classes("navbar-link", new List(opts$$1.CustomClass, opts$$1.Modifiers), new List(["is-active", opts$$1.IsActive], new List()));
  return element$$1(new List(classes$$1, opts$$1.Props), children$$7);
}
export function Link$$$div(x$$2, y$$2) {
  return Link$$$link(function (props$$8, children$$8) {
    return createElement("div", createObj(props$$8, 1), ...children$$8);
  }, x$$2, y$$2);
}
export function Link$$$a(x$$3, y$$3) {
  return Link$$$link(function (props$$11, children$$11) {
    return createElement("a", createObj(props$$11, 1), ...children$$11);
  }, x$$3, y$$3);
}
export const Dropdown$002EOption = declare(function Fulma_Navbar_Dropdown_Option(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Dropdown$002EOption$reflection() {
  return union("Fulma.Navbar.Dropdown.Option", [], Dropdown$002EOption, () => [["IsActive", [bool]], "IsBoxed", "IsRight", ["Props", [list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))]], ["CustomClass", [string]], ["Modifiers", [list$$5(Modifier$0024002EIModifier$0024reflection())]]]);
}
export const Dropdown$002EOptions = declare(function Fulma_Navbar_Dropdown_Options(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.IsActive = arg1;
  this.IsBoxed = arg2;
  this.IsRight = arg3;
  this.Props = arg4;
  this.CustomClass = arg5;
  this.Modifiers = arg6;
}, Record);
export function Dropdown$002EOptions$reflection() {
  return record("Fulma.Navbar.Dropdown.Options", [], Dropdown$002EOptions, () => [["IsActive", bool], ["IsBoxed", bool], ["IsRight", bool], ["Props", list$$5(type("Fable.Helpers.React.Props.IHTMLProp"))], ["CustomClass", option(string)], ["Modifiers", list$$5(option(string))]]);
}
export function Dropdown$002EOptions$$$get_Empty() {
  return new Dropdown$002EOptions(false, false, false, new List(), null, new List());
}
export function Dropdown$$$dropdown(element$$2, options$$4, children$$14) {
  const parseOptions$$2 = function parseOptions$$2(result$$2, opt$$2) {
    switch (opt$$2.tag) {
      case 1:
        {
          return new Dropdown$002EOptions(result$$2.IsActive, true, result$$2.IsRight, result$$2.Props, result$$2.CustomClass, result$$2.Modifiers);
        }

      case 2:
        {
          return new Dropdown$002EOptions(result$$2.IsActive, result$$2.IsBoxed, true, result$$2.Props, result$$2.CustomClass, result$$2.Modifiers);
        }

      case 4:
        {
          const customClass$$2 = opt$$2.fields[0];
          return new Dropdown$002EOptions(result$$2.IsActive, result$$2.IsBoxed, result$$2.IsRight, result$$2.Props, customClass$$2, result$$2.Modifiers);
        }

      case 3:
        {
          const props$$14 = opt$$2.fields[0];
          return new Dropdown$002EOptions(result$$2.IsActive, result$$2.IsBoxed, result$$2.IsRight, props$$14, result$$2.CustomClass, result$$2.Modifiers);
        }

      case 5:
        {
          const modifiers$$2 = opt$$2.fields[0];
          return new Dropdown$002EOptions(result$$2.IsActive, result$$2.IsBoxed, result$$2.IsRight, result$$2.Props, result$$2.CustomClass, Modifier$0024$0024$0024parseModifiers(modifiers$$2));
        }

      default:
        {
          const state$$4 = opt$$2.fields[0];
          return new Dropdown$002EOptions(state$$4, result$$2.IsBoxed, result$$2.IsRight, result$$2.Props, result$$2.CustomClass, result$$2.Modifiers);
        }
    }
  };

  const opts$$2 = fold(parseOptions$$2, Dropdown$002EOptions$$$get_Empty(), options$$4);
  const classes$$2 = Common$0024002EHelpers$0024$0024$0024classes("navbar-dropdown", new List(opts$$2.CustomClass, opts$$2.Modifiers), ofArray([["is-boxed", opts$$2.IsBoxed], ["is-right", opts$$2.IsRight], ["is-active", opts$$2.IsActive]]));
  return element$$2(new List(classes$$2, opts$$2.Props), children$$14);
}
export function Dropdown$$$div(x$$4, y$$4) {
  return Dropdown$$$dropdown(function (props$$15, children$$15) {
    return createElement("div", createObj(props$$15, 1), ...children$$15);
  }, x$$4, y$$4);
}
export function Dropdown$$$a(x$$5, y$$5) {
  return Dropdown$$$dropdown(function (props$$18, children$$18) {
    return createElement("a", createObj(props$$18, 1), ...children$$18);
  }, x$$5, y$$5);
}
export function Brand$$$brand(element$$3, options$$6, children$$21) {
  const opts$$3 = Common$0024$0024$0024genericParse(options$$6);
  const classes$$3 = Common$0024002EHelpers$0024$0024$0024classes("navbar-brand", new List(opts$$3.CustomClass, opts$$3.Modifiers), new List());
  return element$$3(new List(classes$$3, opts$$3.Props), children$$21);
}
export function Brand$$$div(x$$6, y$$6) {
  return Brand$$$brand(function (props$$21, children$$22) {
    return createElement("div", createObj(props$$21, 1), ...children$$22);
  }, x$$6, y$$6);
}
export function Brand$$$a(x$$7, y$$7) {
  return Brand$$$brand(function (props$$24, children$$25) {
    return createElement("a", createObj(props$$24, 1), ...children$$25);
  }, x$$7, y$$7);
}
export function Start$$$start(element$$4, options$$7, children$$28) {
  const opts$$4 = Common$0024$0024$0024genericParse(options$$7);
  const classes$$4 = Common$0024002EHelpers$0024$0024$0024classes("navbar-start", new List(opts$$4.CustomClass, opts$$4.Modifiers), new List());
  return element$$4(new List(classes$$4, opts$$4.Props), children$$28);
}
export function Start$$$div(x$$8, y$$8) {
  return Start$$$start(function (props$$27, children$$29) {
    return createElement("div", createObj(props$$27, 1), ...children$$29);
  }, x$$8, y$$8);
}
export function Start$$$a(x$$9, y$$9) {
  return Start$$$start(function (props$$30, children$$32) {
    return createElement("a", createObj(props$$30, 1), ...children$$32);
  }, x$$9, y$$9);
}
export function End$$$end(element$$5, options$$8, children$$35) {
  const opts$$5 = Common$0024$0024$0024genericParse(options$$8);
  const classes$$5 = Common$0024002EHelpers$0024$0024$0024classes("navbar-end", new List(opts$$5.CustomClass, opts$$5.Modifiers), new List());
  return element$$5(new List(classes$$5, opts$$5.Props), children$$35);
}
export function End$$$div(x$$10, y$$10) {
  return End$$$end(function (props$$33, children$$36) {
    return createElement("div", createObj(props$$33, 1), ...children$$36);
  }, x$$10, y$$10);
}
export function End$$$a(x$$11, y$$11) {
  return End$$$end(function (props$$36, children$$39) {
    return createElement("a", createObj(props$$36, 1), ...children$$39);
  }, x$$11, y$$11);
}
export function navbar(options$$9, children$$42) {
  const parseOptions$$3 = function parseOptions$$3(result$$3, opt$$3) {
    switch (opt$$3.tag) {
      case 5:
        {
          const props$$39 = opt$$3.fields[0];
          return new Options(result$$3.HasShadow, result$$3.Color, result$$3.IsTransparent, result$$3.FixedInfo, result$$3.CustomClass, props$$39, result$$3.Modifiers);
        }

      case 3:
        {
          return new Options(result$$3.HasShadow, result$$3.Color, result$$3.IsTransparent, "is-fixed-top", result$$3.CustomClass, result$$3.Props, result$$3.Modifiers);
        }

      case 4:
        {
          return new Options(result$$3.HasShadow, result$$3.Color, result$$3.IsTransparent, "is-fixed-bottom", result$$3.CustomClass, result$$3.Props, result$$3.Modifiers);
        }

      case 2:
        {
          return new Options(result$$3.HasShadow, result$$3.Color, true, result$$3.FixedInfo, result$$3.CustomClass, result$$3.Props, result$$3.Modifiers);
        }

      case 6:
        {
          const customClass$$3 = opt$$3.fields[0];
          return new Options(result$$3.HasShadow, result$$3.Color, result$$3.IsTransparent, result$$3.FixedInfo, customClass$$3, result$$3.Props, result$$3.Modifiers);
        }

      case 0:
        {
          const color = opt$$3.fields[0];
          return new Options(result$$3.HasShadow, Color$0024$0024$0024ofColor(color), result$$3.IsTransparent, result$$3.FixedInfo, result$$3.CustomClass, result$$3.Props, result$$3.Modifiers);
        }

      case 7:
        {
          const modifiers$$3 = opt$$3.fields[0];
          return new Options(result$$3.HasShadow, result$$3.Color, result$$3.IsTransparent, result$$3.FixedInfo, result$$3.CustomClass, result$$3.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$3));
        }

      default:
        {
          return new Options(true, result$$3.Color, result$$3.IsTransparent, result$$3.FixedInfo, result$$3.CustomClass, result$$3.Props, result$$3.Modifiers);
        }
    }
  };

  const opts$$6 = fold(parseOptions$$3, Options$$$get_Empty(), options$$9);
  const classes$$6 = Common$0024002EHelpers$0024$0024$0024classes("navbar", new List(opts$$6.CustomClass, new List(opts$$6.Color, new List(opts$$6.FixedInfo, opts$$6.Modifiers))), ofArray([["has-shadow", opts$$6.HasShadow], ["is-transparent", opts$$6.IsTransparent]]));
  return createElement("nav", createObj(new List(classes$$6, opts$$6.Props), 1), ...children$$42);
}
export function menu(options$$11, children$$45) {
  const parseOptions$$4 = function parseOptions$$4(result$$4, opt$$4) {
    switch (opt$$4.tag) {
      case 1:
        {
          const props$$42 = opt$$4.fields[0];
          return new Menu$002EOptions(result$$4.IsActive, result$$4.CustomClass, props$$42, result$$4.Modifiers);
        }

      case 2:
        {
          const customClass$$4 = opt$$4.fields[0];
          return new Menu$002EOptions(result$$4.IsActive, customClass$$4, result$$4.Props, result$$4.Modifiers);
        }

      case 3:
        {
          const modifiers$$4 = opt$$4.fields[0];
          return new Menu$002EOptions(result$$4.IsActive, result$$4.CustomClass, result$$4.Props, Modifier$0024$0024$0024parseModifiers(modifiers$$4));
        }

      default:
        {
          const state$$7 = opt$$4.fields[0];
          return new Menu$002EOptions(state$$7, result$$4.CustomClass, result$$4.Props, result$$4.Modifiers);
        }
    }
  };

  const opts$$7 = fold(parseOptions$$4, Menu$002EOptions$$$get_Empty(), options$$11);
  const classes$$7 = Common$0024002EHelpers$0024$0024$0024classes("navbar-menu", new List(opts$$7.CustomClass, opts$$7.Modifiers), new List(["is-active", opts$$7.IsActive], new List()));
  return createElement("div", createObj(new List(classes$$7, opts$$7.Props), 1), ...children$$45);
}
export function burger(options$$13, children$$48) {
  const opts$$8 = Common$0024$0024$0024genericParse(options$$13);
  const classes$$8 = Common$0024002EHelpers$0024$0024$0024classes("navbar-burger", new List(opts$$8.CustomClass, opts$$8.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$8, opts$$8.Props), 1), ...children$$48);
}
export function content(options$$14, children$$51) {
  const opts$$9 = Common$0024$0024$0024genericParse(options$$14);
  const classes$$9 = Common$0024002EHelpers$0024$0024$0024classes("navbar-content", new List(opts$$9.CustomClass, opts$$9.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$9, opts$$9.Props), 1), ...children$$51);
}
export function divider(options$$15, children$$54) {
  const opts$$10 = Common$0024$0024$0024genericParse(options$$15);
  const classes$$10 = Common$0024002EHelpers$0024$0024$0024classes("navbar-divider", new List(opts$$10.CustomClass, opts$$10.Modifiers), new List());
  return createElement("div", createObj(new List(classes$$10, opts$$10.Props), 1), ...children$$54);
}

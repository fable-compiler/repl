import { Record, declare, Union } from "../../fable-core/Types.js";
import { fold } from "../../fable-core/List.js";
const createElement$$1 = React.createElement;
export const Props$002EFragmentProp = declare(function Props$002EFragmentProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EProp = declare(function Props$002EProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EDangerousHtml = declare(function Props$002EDangerousHtml(arg1) {
  this.__html = arg1;
}, Record);
export const Props$002EDOMAttr = declare(function Props$002EDOMAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ESVGAttr = declare(function Props$002ESVGAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002EHTMLAttr = declare(function Props$002EHTMLAttr(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Props$002ECSSProp = declare(function Props$002ECSSProp(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const createElement = createElement$$1;
export function classBaseList(std, classes) {
  return new Props$002EHTMLAttr(22, "ClassName", fold(function folder(complete, _arg1) {
    if (_arg1[1]) {
      return complete + " " + _arg1[0];
    } else {
      return complete;
    }
  }, std, classes));
}
export function classList(classes$$1) {
  return classBaseList("", classes$$1);
}
export function FormEvent$002Eget_Value(this$) {
  return this$.target.value;
}

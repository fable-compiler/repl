import { declare, Record } from "../fable-library.2.2.0-beta-010/Types.js";
import { type, record, string } from "../fable-library.2.2.0-beta-010/Reflection.js";
const Fragment = React.Fragment,
      PureComponent = React.PureComponent,
      Component = React.Component;
const createPortal = ReactDOM.createPortal,
      unmountComponentAtNode = ReactDOM.unmountComponentAtNode,
      hydrate = ReactDOM.hydrate,
      render = ReactDOM.render;
export const React$002EComponent$00602 = Component;
export const React$002EPureComponent$00602 = PureComponent;
export const React$002EPureStatelessComponent$00601 = PureComponent;
export const React$002EFragmentProps = declare(function Fable_Import_React_FragmentProps(arg1) {
  this.key = arg1;
}, Record);
export function React$002EFragmentProps$reflection() {
  return record("Fable.Import.React.FragmentProps", [], React$002EFragmentProps, () => [["key", string]]);
}
export const React$002EFragment = Fragment;
export const ReactDom = declare(function Fable_Import_ReactDom() {});
export function ReactDom$reflection() {
  return type("Fable.Import.ReactDom");
}
export const ReactDom$$$render$$Z7FB92351 = render;
export const ReactDom$$$hydrate$$Z7FB92351 = hydrate;
export const ReactDom$$$unmountComponentAtNode$$48950228 = unmountComponentAtNode;
export const ReactDom$$$createPortal$$Z4D70F7B4 = createPortal;

import { declare, Record } from "../../fable-core/Types.js";
const Fragment = React.Fragment,
      PureComponent = React.PureComponent,
      Component = React.Component;
const createPortal$$1 = ReactDOM.createPortal,
      unmountComponentAtNode$$1 = ReactDOM.unmountComponentAtNode,
      hydrate$$1 = ReactDOM.hydrate,
      render$$1 = ReactDOM.render;
export const React$002EComponent$00602 = Component;
export const React$002EPureComponent$00602 = PureComponent;
export const React$002EPureStatelessComponent$00601 = PureComponent;
export const React$002EFragmentProps = declare(function React$002EFragmentProps(arg1) {
  this.key = arg1;
}, Record);
export const React$002EFragment = Fragment;
export const ReactDom = declare(function ReactDom() {});
export const ReactDom$$$render$$Z7FB92351 = render$$1;
export const ReactDom$$$hydrate$$Z7FB92351 = hydrate$$1;
export const ReactDom$$$unmountComponentAtNode$$48950228 = unmountComponentAtNode$$1;
export const ReactDom$$$createPortal$$Z4D70F7B4 = createPortal$$1;

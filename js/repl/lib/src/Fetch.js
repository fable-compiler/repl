import { List, declare, Union } from "../../fable-library/Types.js";
import { class_type, union_type, obj_type, int32_type, string_type } from "../../fable-library/Reflection.js";
import { int32ToString, createObj } from "../../fable-library/Util.js";
import { result } from "./Promise.js";
export const Types$002EHttpRequestHeaders = declare(function Fetch_Types_HttpRequestHeaders(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Types$002EHttpRequestHeaders$reflection() {
  return union_type("Fetch.Types.HttpRequestHeaders", [], Types$002EHttpRequestHeaders, () => [["Accept", [["Item", string_type]]], ["Accept-Charset", [["Item", string_type]]], ["Accept-Encoding", [["Item", string_type]]], ["Accept-Language", [["Item", string_type]]], ["Accept-Datetime", [["Item", string_type]]], ["Authorization", [["Item", string_type]]], ["Cache-Control", [["Item", string_type]]], ["Connection", [["Item", string_type]]], ["Cookie", [["Item", string_type]]], ["Content-Length", [["Item", string_type]]], ["Content-MD5", [["Item", string_type]]], ["Content-Type", [["Item", string_type]]], ["Date", [["Item", string_type]]], ["Expect", [["Item", string_type]]], ["Forwarded", [["Item", string_type]]], ["From", [["Item", string_type]]], ["Host", [["Item", string_type]]], ["If-Match", [["Item", string_type]]], ["If-Modified-Since", [["Item", string_type]]], ["If-None-Match", [["Item", string_type]]], ["If-Range", [["Item", string_type]]], ["If-Unmodified-Since", [["Item", string_type]]], ["Max-Forwards", [["Item", int32_type]]], ["Origin", [["Item", string_type]]], ["Pragma", [["Item", string_type]]], ["Proxy-Authorization", [["Item", string_type]]], ["Range", [["Item", string_type]]], ["Referer", [["Item", string_type]]], ["SOAPAction", [["Item", string_type]]], ["TE", [["Item", string_type]]], ["User-Agent", [["Item", string_type]]], ["Upgrade", [["Item", string_type]]], ["Via", [["Item", string_type]]], ["Warning", [["Item", string_type]]], ["X-Requested-With", [["Item", string_type]]], ["DNT", [["Item", string_type]]], ["X-Forwarded-For", [["Item", string_type]]], ["X-Forwarded-Host", [["Item", string_type]]], ["X-Forwarded-Proto", [["Item", string_type]]], ["Front-End-Https", [["Item", string_type]]], ["X-Http-Method-Override", [["Item", string_type]]], ["X-ATT-DeviceId", [["Item", string_type]]], ["X-Wap-Profile", [["Item", string_type]]], ["Proxy-Connection", [["Item", string_type]]], ["X-UIDH", [["Item", string_type]]], ["X-Csrf-Token", [["Item", string_type]]], ["Custom", [["key", string_type], ["value", obj_type]]]]);
}
export const Types$002ERequestProperties = declare(function Fetch_Types_RequestProperties(tag, name, ...fields) {
  this.tag = tag | 0;
  this.name = name;
  this.fields = fields;
}, Union);
export function Types$002ERequestProperties$reflection() {
  return union_type("Fetch.Types.RequestProperties", [], Types$002ERequestProperties, () => [["Method", [["Item", string_type]]], ["Headers", [["Item", class_type("Fetch.Types.IHttpRequestHeaders")]]], ["Body", [["Item", obj_type]]], ["Mode", [["Item", string_type]]], ["Credentials", [["Item", string_type]]], ["Cache", [["Item", string_type]]]]);
}
export function requestHeaders(headers) {
  return new Types$002ERequestProperties(1, "Headers", createObj(headers, 0));
}
export function requestProps(props) {
  return createObj(props, 1);
}

function errorString(response) {
  return int32ToString(response.status) + " " + response.statusText + " for URL " + response.url;
}

export function fetch$(url, init) {
  const pr = fetch(url, createObj(init, 1));
  return pr.then(function a(response$$1) {
    if (response$$1.ok) {
      return response$$1;
    } else {
      const message = errorString(response$$1);
      throw new Error(message);
    }
  });
}
export function tryFetch(url$$1, init$$1) {
  const a$$1 = fetch$(url$$1, init$$1);
  return result(a$$1);
}
export function tryOptionsRequest(url$$2) {
  const a$$2 = fetch$(url$$2, new List(new Types$002ERequestProperties(0, "Method", "OPTIONS"), new List()));
  return result(a$$2);
}

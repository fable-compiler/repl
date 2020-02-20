import { List, declare, Union } from "../../fable-library/Types.js";
import { type, union, obj, int32, string } from "../../fable-library/Reflection.js";
import { int32ToString, createObj } from "../../fable-library/Util.js";
import { result } from "./Promise.js";
export const Types$002EHttpRequestHeaders = declare(function Fetch_Types_HttpRequestHeaders(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Types$002EHttpRequestHeaders$reflection() {
  return union("Fetch.Types.HttpRequestHeaders", [], Types$002EHttpRequestHeaders, () => [["Accept", [string]], ["Accept-Charset", [string]], ["Accept-Encoding", [string]], ["Accept-Language", [string]], ["Accept-Datetime", [string]], ["Authorization", [string]], ["Cache-Control", [string]], ["Connection", [string]], ["Cookie", [string]], ["Content-Length", [string]], ["Content-MD5", [string]], ["Content-Type", [string]], ["Date", [string]], ["Expect", [string]], ["Forwarded", [string]], ["From", [string]], ["Host", [string]], ["If-Match", [string]], ["If-Modified-Since", [string]], ["If-None-Match", [string]], ["If-Range", [string]], ["If-Unmodified-Since", [string]], ["Max-Forwards", [int32]], ["Origin", [string]], ["Pragma", [string]], ["Proxy-Authorization", [string]], ["Range", [string]], ["Referer", [string]], ["SOAPAction", [string]], ["TE", [string]], ["User-Agent", [string]], ["Upgrade", [string]], ["Via", [string]], ["Warning", [string]], ["X-Requested-With", [string]], ["DNT", [string]], ["X-Forwarded-For", [string]], ["X-Forwarded-Host", [string]], ["X-Forwarded-Proto", [string]], ["Front-End-Https", [string]], ["X-Http-Method-Override", [string]], ["X-ATT-DeviceId", [string]], ["X-Wap-Profile", [string]], ["Proxy-Connection", [string]], ["X-UIDH", [string]], ["X-Csrf-Token", [string]], ["Custom", [string, obj]]]);
}
export const Types$002ERequestProperties = declare(function Fetch_Types_RequestProperties(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Types$002ERequestProperties$reflection() {
  return union("Fetch.Types.RequestProperties", [], Types$002ERequestProperties, () => [["Method", [string]], ["Headers", [type("Fetch.Types.IHttpRequestHeaders")]], ["Body", [obj]], ["Mode", [string]], ["Credentials", [string]], ["Cache", [string]]]);
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

import { List, Union, declare } from "../../fable-core/Types.js";
import { int32ToString, createObj } from "../../fable-core/Util.js";
import { Promise$$$result as Promise$0024$0024$0024result } from "./Promise.js";
import { fromString } from "../Thoth.Json/Decode.js";
import { Result } from "../../fable-core/Option.js";
import { Auto$$$toString$$Z17AB748 as Auto$0024$0024$0024toString$0024$0024Z17AB748 } from "../Thoth.Json/Encode.js";
import { append, ofArray } from "../../fable-core/List.js";
export const Fetch_types$002EGlobalFetch = declare(function Fetch_types$002EGlobalFetch() {});
export const Fetch_types$002EHttpRequestHeaders = declare(function Fetch_types$002EHttpRequestHeaders(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export const Fetch_types$002ERequestProperties = declare(function Fetch_types$002ERequestProperties(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function requestHeaders(headers) {
  return new Fetch_types$002ERequestProperties(1, "Headers", createObj(headers, 0));
}
export function requestProps(props) {
  return createObj(props, 1);
}

function errorString(response) {
  return int32ToString(response.status) + " " + response.statusText + " for URL " + response.url;
}

export function fetch$(url, init) {
  return fetch(url, createObj(init, 1)).then(function a(response$$1) {
    if (response$$1.ok) {
      return response$$1;
    } else {
      throw new Error(errorString(response$$1));
    }
  });
}
export function tryFetch(url$$1, init$$1) {
  return Promise$0024$0024$0024result(fetch$(url$$1, init$$1));
}
export function fetchAs(url$$2, decoder, init$$2) {
  return fetch(url$$2, createObj(init$$2, 1)).then(function a$$3(response$$2) {
    if (!response$$2.ok) {
      throw new Error(errorString(response$$2));
    } else {
      return response$$2.text().then(function a$$2(res) {
        const matchValue = fromString(decoder, res);

        if (matchValue.tag === 1) {
          const error = matchValue.fields[0];
          throw new Error(error);
        } else {
          const successValue = matchValue.fields[0];
          return successValue;
        }
      });
    }
  });
}
export function tryFetchAs(url$$3, decoder$$1, init$$3) {
  return fetch(url$$3, createObj(init$$3, 1)).then(function a$$6(response$$3) {
    if (!response$$3.ok) {
      return Promise.resolve(new Result(1, "Error", errorString(response$$3)));
    } else {
      return response$$3.text().then(function a$$5(value) {
        return fromString(decoder$$1, value);
      });
    }
  });
}

function sendRecord(url$$4, record, properties, httpMethod) {
  const defaultProps = ofArray([new Fetch_types$002ERequestProperties(0, "Method", httpMethod), new Fetch_types$002ERequestProperties(1, "Headers", {
    ["Content-Type"]: "application/json"
  }), new Fetch_types$002ERequestProperties(2, "Body", Auto$0024$0024$0024toString$0024$0024Z17AB748(0, record))]);
  return fetch$(url$$4, append(defaultProps, properties));
}

export function postRecord(url$$5, record$$1, properties$$1) {
  return sendRecord(url$$5, record$$1, properties$$1, "POST");
}
export function tryPostRecord(url$$6, record$$2, properties$$2) {
  return Promise$0024$0024$0024result(postRecord(url$$6, record$$2, properties$$2));
}
export function putRecord(url$$7, record$$3, properties$$3) {
  return sendRecord(url$$7, record$$3, properties$$3, "PUT");
}
export function tryPutRecord(url$$8, record$$4, properties$$4) {
  return Promise$0024$0024$0024result(putRecord(url$$8, record$$4, properties$$4));
}
export function patchRecord(url$$9, record$$5, properties$$5) {
  return sendRecord(url$$9, record$$5, properties$$5, "PATCH");
}
export function tryOptionsRequest(url$$10) {
  return Promise$0024$0024$0024result(fetch$(url$$10, new List(new Fetch_types$002ERequestProperties(0, "Method", "OPTIONS"), new List())));
}

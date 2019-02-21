import { List, Record, declare, Union } from "../fable-library.2.2.0-beta-010/Types.js";
import { int32, obj, record, option, list, type, string, union } from "../fable-library.2.2.0-beta-010/Reflection.js";
import { fromContinuations } from "../fable-library.2.2.0-beta-010/Async.js";
import { ofArray, append } from "../fable-library.2.2.0-beta-010/List.js";
import { join } from "../fable-library.2.2.0-beta-010/String.js";
import { choose } from "../fable-library.2.2.0-beta-010/Array.js";
import { comparePrimitives } from "../fable-library.2.2.0-beta-010/Util.js";
import { ofArray as ofArray$$1 } from "../fable-library.2.2.0-beta-010/Map.js";
import { iterate } from "../fable-library.2.2.0-beta-010/Seq.js";
export const HttpMethod = declare(function Fable_SimpleHttp_HttpMethod(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function HttpMethod$reflection() {
  return union("Fable.SimpleHttp.HttpMethod", [], HttpMethod, () => ["GET", "POST", "PUT", "PATCH", "DELELE", "HEAD", "OPTIONS"]);
}
export const Header = declare(function Fable_SimpleHttp_Header(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function Header$reflection() {
  return union("Fable.SimpleHttp.Header", [], Header, () => [["Header", [string, string]]]);
}
export const BodyContent = declare(function Fable_SimpleHttp_BodyContent(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function BodyContent$reflection() {
  return union("Fable.SimpleHttp.BodyContent", [], BodyContent, () => ["Empty", ["Text", [string]], ["Binary", [type("Fable.Import.Browser.Blob")]], ["Form", [type("Fable.Import.Browser.FormData")]]]);
}
export const ResponseTypes = declare(function Fable_SimpleHttp_ResponseTypes(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ResponseTypes$reflection() {
  return union("Fable.SimpleHttp.ResponseTypes", [], ResponseTypes, () => ["Text", "Blob", "ArrayBuffer"]);
}
export const HttpRequest = declare(function Fable_SimpleHttp_HttpRequest(arg1, arg2, arg3, arg4, arg5, arg6) {
  this.url = arg1;
  this.method = arg2;
  this.headers = arg3;
  this.overridenMimeType = arg4;
  this.overridenResponseType = arg5;
  this.content = arg6;
}, Record);
export function HttpRequest$reflection() {
  return record("Fable.SimpleHttp.HttpRequest", [], HttpRequest, () => [["url", string], ["method", HttpMethod$reflection()], ["headers", list(Header$reflection())], ["overridenMimeType", option(string)], ["overridenResponseType", option(ResponseTypes$reflection())], ["content", BodyContent$reflection()]]);
}
export const ResponseContent = declare(function Fable_SimpleHttp_ResponseContent(tag, name, ...fields) {
  Union.call(this, tag, name, ...fields);
}, Union);
export function ResponseContent$reflection() {
  return union("Fable.SimpleHttp.ResponseContent", [], ResponseContent, () => [["Text", [string]], ["Blob", [type("Fable.Import.Browser.Blob")]], ["ArrayBuffer", [type("Fable.Import.JS.ArrayBuffer")]], ["Unknown", [obj]]]);
}
export const HttpResponse = declare(function Fable_SimpleHttp_HttpResponse(arg1, arg2, arg3, arg4, arg5) {
  this.statusCode = arg1 | 0;
  this.responseText = arg2;
  this.responseType = arg3;
  this.responseHeaders = arg4;
  this.content = arg5;
}, Record);
export function HttpResponse$reflection() {
  return record("Fable.SimpleHttp.HttpResponse", [], HttpResponse, () => [["statusCode", int32], ["responseText", string], ["responseType", string], ["responseHeaders", type("Microsoft.FSharp.Collections.FSharpMap`2", [string, string])], ["content", ResponseContent$reflection()]]);
}
export function FileReader$$$readBlobAsText(blob) {
  return fromContinuations(function (tupledArg) {
    const reader = new FileReader();

    reader.onload = function (_arg1) {
      if (reader.readyState === 2) {
        tupledArg[0](reader.result);
      }
    };

    reader.readAsText(blob);
  });
}
export function FileReader$$$readFileAsText(file) {
  return fromContinuations(function (tupledArg$$1) {
    const reader$$1 = new FileReader();

    reader$$1.onload = function (_arg1$$1) {
      if (reader$$1.readyState === 2) {
        tupledArg$$1[0](reader$$1.result);
      }
    };

    reader$$1.readAsText(file);
  });
}
export function FormData$$$append(key, value, form) {
  form.append(key, value);
  return form;
}
export function FormData$$$appendFile(key$$1, file$$1, form$$1) {
  form$$1.append(key$$1, file$$1);
  return form$$1;
}
export function FormData$$$appendNamedFile(key$$2, fileName, file$$2, form$$2) {
  form$$2.append(key$$2, file$$2, fileName);
  return form$$2;
}
export function FormData$$$appendBlob(key$$3, blob$$1, form$$3) {
  form$$3.append(key$$3, blob$$1);
  return form$$3;
}
export function FormData$$$appendNamedBlob(key$$4, fileName$$1, blob$$2, form$$4) {
  form$$4.append(key$$4, blob$$2, fileName$$1);
  return form$$4;
}
export function Headers$$$contentType(value$$1) {
  return new Header(0, "Header", "Content-Type", value$$1);
}
export function Headers$$$accept(value$$2) {
  return new Header(0, "Header", "Accept", value$$2);
}
export function Headers$$$acceptCharset(value$$3) {
  return new Header(0, "Header", "Accept-Charset", value$$3);
}
export function Headers$$$acceptEncoding(value$$4) {
  return new Header(0, "Header", "Accept-Encoding", value$$4);
}
export function Headers$$$acceptLanguage(value$$5) {
  return new Header(0, "Header", "Accept-Language", value$$5);
}
export function Headers$$$acceptDateTime(value$$6) {
  return new Header(0, "Header", "Accept-Datetime", value$$6);
}
export function Headers$$$authorization(value$$7) {
  return new Header(0, "Header", "Authorization", value$$7);
}
export function Headers$$$cacheControl(value$$8) {
  return new Header(0, "Header", "Cache-Control", value$$8);
}
export function Headers$$$connection(value$$9) {
  return new Header(0, "Header", "Connection", value$$9);
}
export function Headers$$$cookie(value$$10) {
  return new Header(0, "Header", "Cookie", value$$10);
}
export function Headers$$$contentMD5(value$$11) {
  return new Header(0, "Header", "Content-MD5", value$$11);
}
export function Headers$$$date(value$$12) {
  return new Header(0, "Header", "Date", value$$12);
}
export function Headers$$$expect(value$$13) {
  return new Header(0, "Header", "Expect", value$$13);
}
export function Headers$$$ifMatch(value$$14) {
  return new Header(0, "Header", "If-Match", value$$14);
}
export function Headers$$$ifModifiedSince(value$$15) {
  return new Header(0, "Header", "If-Modified-Since", value$$15);
}
export function Headers$$$ifNoneMatch(value$$16) {
  return new Header(0, "Header", "If-None-Match", value$$16);
}
export function Headers$$$ifRange(value$$17) {
  return new Header(0, "Header", "If-Range", value$$17);
}
export function Headers$$$IfUnmodifiedSince(value$$18) {
  return new Header(0, "Header", "If-Unmodified-Since", value$$18);
}
export function Headers$$$maxForwards(value$$19) {
  return new Header(0, "Header", "Max-Forwards", value$$19);
}
export function Headers$$$origin(value$$20) {
  return new Header(0, "Header", "Origin", value$$20);
}
export function Headers$$$pragma(value$$21) {
  return new Header(0, "Header", "Pragma", value$$21);
}
export function Headers$$$proxyAuthorization(value$$22) {
  return new Header(0, "Header", "Proxy-Authorization", value$$22);
}
export function Headers$$$range(value$$23) {
  return new Header(0, "Header", "Range", value$$23);
}
export function Headers$$$referer(value$$24) {
  return new Header(0, "Header", "Referer", value$$24);
}
export function Headers$$$userAgent(value$$25) {
  return new Header(0, "Header", "User-Agent", value$$25);
}
export function Headers$$$create(key$$5, value$$26) {
  return new Header(0, "Header", key$$5, value$$26);
}
const Http$$$defaultRequest = new HttpRequest("", new HttpMethod(0, "GET"), new List(), null, null, new BodyContent(0, "Empty"));

function Http$$$serializeMethod(_arg1$$2) {
  switch (_arg1$$2.tag) {
    case 1:
      {
        return "POST";
      }

    case 3:
      {
        return "PATCH";
      }

    case 2:
      {
        return "PUT";
      }

    case 4:
      {
        return "DELETE";
      }

    case 6:
      {
        return "OPTIONS";
      }

    case 5:
      {
        return "HEAD";
      }

    default:
      {
        return "GET";
      }
  }
}

export function Http$$$request(url) {
  return new HttpRequest(url, Http$$$defaultRequest.method, Http$$$defaultRequest.headers, Http$$$defaultRequest.overridenMimeType, Http$$$defaultRequest.overridenResponseType, Http$$$defaultRequest.content);
}
export function Http$$$method(httpVerb, req) {
  return new HttpRequest(req.url, httpVerb, req.headers, req.overridenMimeType, req.overridenResponseType, req.content);
}
export function Http$$$header(singleHeader, req$$1) {
  return new HttpRequest(req$$1.url, req$$1.method, append(req$$1.headers, new List(singleHeader, new List())), req$$1.overridenMimeType, req$$1.overridenResponseType, req$$1.content);
}
export function Http$$$headers(values, req$$2) {
  return new HttpRequest(req$$2.url, req$$2.method, append(req$$2.headers, values), req$$2.overridenMimeType, req$$2.overridenResponseType, req$$2.content);
}
export function Http$$$overrideMimeType(value$$27, req$$3) {
  return new HttpRequest(req$$3.url, req$$3.method, req$$3.headers, value$$27, req$$3.overridenResponseType, req$$3.content);
}
export function Http$$$overrideResponseType(value$$28, req$$4) {
  return new HttpRequest(req$$4.url, req$$4.method, req$$4.headers, req$$4.overridenMimeType, value$$28, req$$4.content);
}
export function Http$$$send(req$$5) {
  return fromContinuations(function (tupledArg$$2) {
    const xhr = new XMLHttpRequest();
    xhr.open(Http$$$serializeMethod(req$$5.method), req$$5.url);

    xhr.onreadystatechange = function (_arg1$$3) {
      var matchValue$$5, matchValue$$6;

      if (~~xhr.readyState === 4) {
        tupledArg$$2[0](new HttpResponse(~~xhr.status, (matchValue$$5 = xhr.responseType, matchValue$$5 === "" ? xhr.responseText : matchValue$$5 === "text" ? xhr.responseText : ""), xhr.responseType, ofArray$$1(choose(function chooser(headerLine) {
          const parts = headerLine.split(":");
          const matchValue$$7 = ofArray(parts);

          if (matchValue$$7.tail != null) {
            const rest = matchValue$$7.tail;
            const key$$6 = matchValue$$7.head;
            return [key$$6.toLocaleLowerCase(), join(":", ...rest).trim()];
          } else {
            const otherwise = matchValue$$7;
            return null;
          }
        }, xhr.getAllResponseHeaders().split("\r\n"), Array), {
          Compare: comparePrimitives
        }), (matchValue$$6 = xhr.responseType, matchValue$$6 === "" ? new ResponseContent(0, "Text", xhr.responseText) : matchValue$$6 === "text" ? new ResponseContent(0, "Text", xhr.responseText) : matchValue$$6 === "arraybuffer" ? new ResponseContent(2, "ArrayBuffer", xhr.response) : matchValue$$6 === "blob" ? new ResponseContent(1, "Blob", xhr.response) : new ResponseContent(3, "Unknown", xhr.response))));
      }
    };

    iterate(function (forLoopVar) {
      const value$$29 = forLoopVar.fields[1];
      const key$$7 = forLoopVar.fields[0];
      xhr.setRequestHeader(key$$7, value$$29);
    }, req$$5.headers);

    if (req$$5.overridenMimeType == null) {} else {
      const mimeType = req$$5.overridenMimeType;
      xhr.overrideMimeType(mimeType);
    }

    if (req$$5.overridenResponseType == null) {} else if (req$$5.overridenResponseType.tag === 1) {
      xhr.responseType = "blob";
    } else if (req$$5.overridenResponseType.tag === 2) {
      xhr.responseType = "arraybuffer";
    } else {
      xhr.responseType = "text";
    }

    const matchValue$$10 = [req$$5.method, req$$5.content];

    if (matchValue$$10[0].tag === 0) {
      xhr.send(null);
    } else if (matchValue$$10[1].tag === 1) {
      const value$$30 = matchValue$$10[1].fields[0];
      xhr.send(value$$30);
    } else if (matchValue$$10[1].tag === 3) {
      const formData = matchValue$$10[1].fields[0];
      xhr.send(formData);
    } else if (matchValue$$10[1].tag === 2) {
      const blob$$3 = matchValue$$10[1].fields[0];
      xhr.send(blob$$3);
    } else {
      xhr.send(null);
    }
  });
}
export function Http$$$content(bodyContent, req$$6) {
  return new HttpRequest(req$$6.url, req$$6.method, req$$6.headers, req$$6.overridenMimeType, req$$6.overridenResponseType, bodyContent);
}
export function Http$$$get(url$$1) {
  return fromContinuations(function (tupledArg$$3) {
    const xhr$$1 = new XMLHttpRequest();
    xhr$$1.open("GET", url$$1);

    xhr$$1.onreadystatechange = function (_arg1$$4) {
      if (~~xhr$$1.readyState === 4) {
        tupledArg$$3[0]([~~xhr$$1.status, xhr$$1.responseText]);
      }
    };

    xhr$$1.send(null);
  });
}
export function Http$$$put(url$$2, date) {
  return fromContinuations(function (tupledArg$$4) {
    const xhr$$2 = new XMLHttpRequest();
    xhr$$2.open("PUT", url$$2);

    xhr$$2.onreadystatechange = function (_arg1$$5) {
      if (~~xhr$$2.readyState === 4) {
        tupledArg$$4[0]([~~xhr$$2.status, xhr$$2.responseText]);
      }
    };

    xhr$$2.send(null);
  });
}
export function Http$$$delete(url$$3, date$$1) {
  return fromContinuations(function (tupledArg$$5) {
    const xhr$$3 = new XMLHttpRequest();
    xhr$$3.open("DELETE", url$$3);

    xhr$$3.onreadystatechange = function (_arg1$$6) {
      if (~~xhr$$3.readyState === 4) {
        tupledArg$$5[0]([~~xhr$$3.status, xhr$$3.responseText]);
      }
    };

    xhr$$3.send(null);
  });
}
export function Http$$$patch(url$$4, data) {
  return fromContinuations(function (tupledArg$$6) {
    const xhr$$4 = new XMLHttpRequest();
    xhr$$4.open("PATCH", url$$4);

    xhr$$4.onreadystatechange = function (_arg1$$7) {
      if (~~xhr$$4.readyState === 4) {
        tupledArg$$6[0]([~~xhr$$4.status, xhr$$4.responseText]);
      }
    };

    xhr$$4.send(data);
  });
}
export function Http$$$post(url$$5, data$$1) {
  return fromContinuations(function (tupledArg$$7) {
    const xhr$$5 = new XMLHttpRequest();
    xhr$$5.open("POST", url$$5);

    xhr$$5.onreadystatechange = function (_arg1$$8) {
      if (~~xhr$$5.readyState === 4) {
        tupledArg$$7[0]([~~xhr$$5.status, xhr$$5.responseText]);
      }
    };

    xhr$$5.send(data$$1);
  });
}

// @ts-check

import lzString from "lz-string";

function parseQuery() {
    var query = window.location.hash.replace(/^\#\?/, '');

    if (!query) {
      return null;
    }

    return query.split('&').map(function(param) {
      var splitPoint = param.indexOf('=');

      return {
        key : param.substring(0, splitPoint),
        value : param.substring(splitPoint + 1)
      };
    }).reduce(function(params, param){
      if (param.key && param.value) {
        params[param.key] =
          param.key === "code" || param.key === "html" || param.key === "css"
            ? lzString.decompressFromEncodedURIComponent(param.value)
            : decodeURIComponent(param.value);
      }
      return params;
    }, {});
}

// see: https://github.com/webpack-contrib/raw-loader/issues/72
function getString(a) {
  if ("default" in a) {
    return a.default;
  } else {
    return a;
  }
}

export function updateQuery(code, html, css) {
    var object =
        { code : lzString.compressToEncodedURIComponent(code),
          html : lzString.compressToEncodedURIComponent(html),
          css : lzString.compressToEncodedURIComponent(css) };
    var query = Object.keys(object).map(function(key) {
      return key + '=' + object[key];
    }).join('&');

    window.location.hash = '?' + query;
}

export function loadState(key) {
    return Object.assign({
        // @ts-ignore
        code: getString(require("!raw-loader!./../../../public/samples/elmish/simple_input.fs")),
        // @ts-ignore
        html: getString(require("!raw-loader!./../../../public/samples/elmish/simple_input.html")),
        // @ts-ignore
        css: getString(require("!raw-loader!./../../../public/samples/elmish/simple_input.css"))
      },
      JSON.parse(window.localStorage.getItem(key)) || {},
      parseQuery()
    );
}

export function saveState(key, code, html, css) {
    window.localStorage.setItem(key, JSON.stringify({ code, html, css }));
}

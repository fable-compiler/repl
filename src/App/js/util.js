// @ts-check

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
        params[param.key] = decodeURIComponent(param.value);
      }
      return params;
    }, {});
}

export function updateQuery(code) {
    var object = { code };
    var query = Object.keys(object).map(function(key){
      return key + '=' + encodeURIComponent(object[key]);
    }).join('&');

    window.location.hash = '?' + query;
}

export function loadState(key) {
    var state = JSON.parse(window.localStorage.getItem(key)) || {};
    Object.assign(state, parseQuery());
    return [state.code || 'printfn "Hello World"', state.html || '<html><body></body></html>'];
}

export function saveState(key, code, html) {
    window.localStorage.setItem(key, JSON.stringify({ code, html }));
}
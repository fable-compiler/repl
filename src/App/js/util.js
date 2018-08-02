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

export function updateQuery(code, html) {
    var object =
        { code : code,
          html : html };
    var query = Object.keys(object).map(function(key){
      return key + '=' + encodeURIComponent(object[key]);
    }).join('&');

    window.location.hash = '?' + query;
}

export function loadState(key) {
    return Object.assign({
        code: 'printfn "Hello World"',
        html: '<html><body></body></html>'
      },
      JSON.parse(window.localStorage.getItem(key)) || {},
      parseQuery()
    );
}

export function saveState(key, code, html) {
    window.localStorage.setItem(key, JSON.stringify({ code, html }));
}

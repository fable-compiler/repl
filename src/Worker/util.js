/// @ts-check

import * as Babel from "@babel/standalone";
import BabelTemplate from "@babel/template";
import * as BabelPlugins from "fable-babel-plugins";
import ReplLibMap from "../Lib/repl-lib-map.json";

export function resolveLibCall(entityName) {
    var k = Object.keys(ReplLibMap).find((k) => entityName.indexOf(k) === 0);
    if (k != null) {
        var result = ReplLibMap[k];
        // Remove the root module
        var entityNameTrimmed = entityName.substr(result[0].length).replace(/^\.+/, "");
        return [entityNameTrimmed, "fable-repl-lib/" + result[1]];
    }
    return null;
}

function getBlobUrl(name) {
    // .txt extension is used to enable gzipping in Github Pages
    return "metadata2/" + name + ".dll.txt";
}

function getBlob(name) {
    return fetch(getBlobUrl(name))
        .then(function (res) {
            if (res.ok) {
                return res.arrayBuffer().then(b => [name, new Uint8Array(b)]);
            } else {
                throw new Error("[ASSEMBLY LOAD] " + res.status + ": " + res.statusText);
            }
        });
}

export function getAssemblyReader(assemblies) {
    return Promise.all(assemblies.map(getBlob))
        .then(function (kvs) {
            var metadata = new Map();
            for (var kv of kvs) {
                metadata.set(kv[0] + ".dll", kv[1]);
            }
            return (name) => metadata.get(name);
        });
}

function babelOptions(extraPlugin) {
    var commonPlugins = [
        BabelPlugins.getTransformMacroExpressions(BabelTemplate),
        BabelPlugins.getRemoveUnneededNulls(),
    ];
    return {
        plugins:
            extraPlugin != null
                ? commonPlugins.concat(extraPlugin)
                : commonPlugins,
        filename: 'repl',
        babelrc: false,
    };
}

export function compileBabelAst(ast) {
    try {
        var optionsES2015 = babelOptions();
        var codeES2015 = Babel.transformFromAst(ast, null, optionsES2015).code;
        return codeES2015;
    } catch (err) {
        console.error(err.message + "\n" + err.stack);
    }
}

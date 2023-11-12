# Fable REPL

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/fable-compiler/repl)

## Building locally

To develop the REPL locally:

1. `dotnet fsi build.fsx -p WatchApp`
2. Open `localhost:8080` in your browser

## Release

To release a new version of the REPL you can use `dotnet fsi build.fsx -t Release`. This will create a new tag and push it to Github.

Tips: If you want to release after a Fable update, please go to [REPL - Actions](https://github.com/fable-compiler/repl/actions/workflows/update_fable_packages.yml) and run the `Update Fable NPM packages` workflow manually.

This will update the `package.json` file with the latest Fable packages and commit to the `main` branch which will trigger a new release.

## How to add a sample

To add a sample, you need to add an .fs file to the `public/samples/Samples.fsproj` project (and a corresponding .html file if necessary), then update `public/samples/samples.json`. This file is used to generate the samples menu in the browser. [This commit](https://github.com/fable-compiler/repl/commit/860243166459e10e47919815dffcc94ddbbd73b7) is a good example of adding a sample (pun intended).

> If you just want to update on the existing samples, you can do it directly using Github UI and send a PR automatically.

You can add three types of entries:

- Category: Adds a title entry to the menu
- SubCategory: Adds an entry under a category, and make it collapsible
- MenuItem: Adds a classic item which when clicked will load the sample into the REPL

### Category

```json
{
    "type": "category",
    "label": "Learn Fable",
    "children": [
    ]
}
```

- label: Will be displayed as the title of the category
- children: A list of `SubCategory` or `MenuItem`

### SubCategory

```json
{
    "type": "sub-category",
    "label": "Interop",
    "children": [
    ]
}
```

- label: Will be displayed as the title of the SubCategory
- children: A list of `MenuItem`

### MenuItem

```json
{
    "type": "menu-item",
    "label": "Basic canvas",
    "fsharpCode": "basic-canvas/basic_canvas.fs",
    "htmlCode": "basic-canvas/basic_canvas.html"
}
```

- label: Name to display in the menu item
- fsharpCode: Relative url of the F# code
- htmlCode (*optional field*): Relative url of the html code
- cssCode (*optional field*): Relative url of the css code

All the urls for `fsharpCode`, `htmlCode` are relative to the `public/samples` folder.

## How to build Fable.Repl.Lib

Building the library for the repl is a bit convoluted an involves an additional repository: ncave's fork of the F# compiler. This is used to generate .dlls containing only metada so they're lighter to load in the repl. We need to perform two steps:

1. Generate the Fable.Repl.Lib.dll (and Browser bindings) assembly that will be used by Fable standalone in the repl (for compilation and analysis)
2. Generate the JS files for Fable.Repl.Lib that will be loaded by the compiled JS code in the playground

The first step is the most complicated as it requires using a custom build of the F# compiler (in `export` branch of ncave's fsharp fork). Most of the steps to do this are automated in the `src/Export/build.sh` script.

The second step can be run with the `BuildLib` FAKE target.

> If you want to use fable-standalone (and base metadata) from a local Fable repo in a sibling folder enable the `LOCAL_PKG` env var as in `LOCAL_PKG=1 dotnet fsi build.fsx -p BuildLib`

One important thing to remember is **public inlined functions won't work** with precompiled libs so please refrain from using them in Fable.Repl.Lib source.

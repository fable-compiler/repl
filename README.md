# Fable REPL

## Building locally

To develop the REPL locally, run the `WatchApp` FAKE target and then open `localhost:8080` in your browser.

## How to add a sample

To add a sample, you need to add an .fs file to the `public/samples/Samples.fsproj` project (and a corresponding .html file if necessary), then update `public/samples/samples.json`. This file is used to generate the samples menu in the browser. [This commit](https://github.com/fable-compiler/repl2/commit/860243166459e10e47919815dffcc94ddbbd73b7) is a good example of adding a sample (pun intended).

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

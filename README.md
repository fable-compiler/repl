# Fable.FCS component

Example of how to use the `Fable.FCS` component on your web

## How to add a sample ?

*This is the documenation of how to add a sample to the REPL, please note it's still in early stage and may change in the future*

To add a sample, you need to update the `src/samples.json` file. This file is used to generate the samples menu in the browser.

You can add 3 types or entries:

- Category: adds a title entry to the menu
- SubCategory: adds an entry under a category, and make it collapsible
- MenuItem: adds a classic item which when clicked will load the sample into the REPL

**Category**

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

**SubCategory**
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

**SubCategory**
```json
{
    "type": "menu-item",
    "label": "Basic canvas",
    "fsharpCode": "samples/basic-canvas/basic_canvas.fs",
    "htmlCode": "samples/basic-canvas/basic_canvas.html"
}
```

- label: Name to display in the menu item
- fsharpCode: Relative url of the F# code
- htmlCode:
    - If it's `default`, then we will add a minimal html code:

        ```html
        <html>
            <head>
                <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
            </head>
            <body>
            </body>
        </html>
        ```

    - Otherwise, you need to set the relative url of the html code to load

All the urls for `fsharpCode`, `htmlCode` are relative to the `public` folder.

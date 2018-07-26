# Fable REPL Lib

This library includes APIs that will be available to samples and user-generated code in the Fable REPL (besides Fable.Core and Fable.Import.Browser) as precompiled JS. At the moment there are the following restrictions:

- **Public inlined functions** cannot be used.
- All modules must be prefixed with `Fable.Repl.Lib`.
- The root module (after trimming `Fable.Repl.Lib.`) **must match the name of the file** and shouldn't contain periods.

> Example: A file cannot be named `Elmish.React` but you can have an `Elmish.fs` file, with a `Fable.Repl.Lib.Elmish` root module containing a `React` submodule.

> Note: external libraries like `React` are currently loaded as global variables, so the HTML code of the sample must contain a `<script>` tag to load the library.

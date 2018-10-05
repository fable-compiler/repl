# Fable REPL Lib

This library includes APIs that will be available to samples and user-generated code in the Fable REPL (besides Fable.Core and Fable.Import.Browser) as precompiled JS. At the moment there are the following restrictions:

- **Public inlined functions** cannot be used.
- All modules must be prefixed with `Fable.Repl.Lib`.
- The root module (after trimming `Fable.Repl.Lib.`) **must match the name of the file** and shouldn't contain periods.

> Example: A file cannot be named `Elmish.React` but you can have an `Elmish.fs` file, with a `Fable.Repl.Lib.Elmish` root module containing a `React` submodule.

> Note: external libraries like `React` are currently loaded as global variables, so the HTML code of the sample must contain a `<script>` tag to load the library.

## Instruction for updating the libs

### Thoth.Json

1. Force the mangle prefix

Add the top of the file after `module Json` you need to add:

```fs
module Json =

    type DummyType =
        | Echo of string

    let echo (echo : DummyType) = printfn "%A"
```

This is need in order to force fable to prefix the mangled names with `Json` example: `Json$002EEncode$$$array`.

2. Replace the object expressions

Replace the object expression for the object build by real class:

```fs
type RequiredGetter(path, v) =
    member __.Field (fieldName : string) (decoder : Decoder<_>) =
        match fromValue path (field fieldName decoder) v with
        | Ok v -> v
        | Error msg -> failwith msg
    member __.At (fieldNames : string list) (decoder : Decoder<_>) =
        match fromValue path (at fieldNames decoder) v with
        | Ok v -> v
        | Error msg -> failwith msg


type OptionalGetter(path, v) =
    member __.Field (fieldName : string) (decoder : Decoder<_>) =
        match decodeValueError path (field fieldName decoder) v with
        | Ok v -> Some v
        | Error (_, BadField _ )
        | Error (_, BadPrimitive (_, null)) -> None
        | Error error ->
            failwith (errorToString error)

    member __.At (fieldNames : string list) (decoder : Decoder<_>) =
        if Helpers.isObject v then
            match decodeValueError path (at fieldNames decoder) v with
            | Ok v -> Some v
            | Error (_, BadPath _ )
            | Error (_, BadType (_, null))
            | Error (_, BadTypeAt _) -> None
            | Error error ->
                failwith (errorToString error)
        else
            failwith (errorToString (path, BadType ("an object", v)))

type Getters(path, v) =
    member __.Required =
        RequiredGetter(path, v)

    member __.Optional =
        OptionalGetter(path, v)

let object (builder: Getters -> 'value) : Decoder<'value> =
    fun path v ->
        let getter = new Getters(path, v)
        builder getter
        |> Ok
```

3. Remove the `Encode.nil`

Comment `Encode.nil`, because the REPL generate something like `Json$002EEncode$$$nil()` (it is a function call) instead of `Json$002EEncode$$$nil` which is a variable call.

4. Remove all the public `inline` functions.

Theses functions are mostly in the `Encode` module

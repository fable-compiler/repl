module Widgets.Options

open Fable.Core
open Feliz
open Feliz.Bulma
open Thoth.Json
open Browser
open Fable.Core.JsInterop
open Fable.React.Extensions

[<Literal>]
let private MONACO_DEFAULT_FONT_FAMILY = "Menlo, Monaco, Consolas, \"Courier New\", monospace"

[<Literal>]
let private LOCAL_STORAGE_REPL_SETTING = "fable_repl_settings"

type Model =
    { Optimize : bool
      DefineDebug : bool
      TypedArrays : bool
      Target : string
      FontSize : float
      FontFamily : string
      GistToken : string option
      GistTokenField : string }
    member this.ToOtherFSharpOptions =
        [|
            "--define:FABLE_COMPILER"
            "--define:FABLE_COMPILER_4"
            "--langversion:preview"
            if this.DefineDebug then "--define:DEBUG"
            match this.Target.ToLowerInvariant() with
            | "javascript" -> "--define:FABLE_COMPILER_JAVASCRIPT"
            | "typescript" -> "--define:FABLE_COMPILER_TYPESCRIPT"
            | "python" -> "--define:FABLE_COMPILER_PYTHON"
            | "rust" -> "--define:FABLE_COMPILER_RUST"
            | "dart" -> "--define:FABLE_COMPILER_DART"
            | _ -> ()
            "--optimize"
            if this.Optimize then "+" else "-"
            if this.TypedArrays then "--typedArrays"
        |]
    static member Default =
        { Optimize = false
          DefineDebug = true
          TypedArrays = true
          Target = "javascript"
          FontSize = 14.
          FontFamily = MONACO_DEFAULT_FONT_FAMILY
          GistToken = None
          GistTokenField = "" }

    static member Decoder =
        Decode.object (fun get ->
            { Optimize = false
                        // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
                        //  get.Optional.Field "optimize" Decode.bool
                        //     |> Option.defaultValue false
              DefineDebug = get.Optional.Field "defineDebug" Decode.bool |> Option.defaultValue true
              TypedArrays = get.Optional.Field "typedArrays" Decode.bool |> Option.defaultValue true
              Target = get.Optional.Field "language" Decode.string |> Option.defaultValue "javascript"
              FontSize = get.Optional.Field "fontSize" Decode.float
                            |> Option.defaultValue 14.
              FontFamily = get.Optional.Field "fontFamily" Decode.string
                            |> Option.defaultValue MONACO_DEFAULT_FONT_FAMILY
              GistToken = get.Optional.Field "gistToken" Decode.string
              GistTokenField = "" } : Model
        )

    static member Encoder (model : Model) =
        Encode.object
            [ yield "optimize", Encode.bool model.Optimize
              yield "defineDebug", Encode.bool model.DefineDebug
              yield "typedArrays", Encode.bool model.TypedArrays
              yield "language", Encode.string model.Target
              yield "fontSize", Encode.float model.FontSize
              yield "fontFamily", Encode.string model.FontFamily
              match model.GistToken with
              | Some token -> yield "gistToken", Encode.string token
              | None -> () ]

type Msg =
    | ToggleOptimize
    | ToggleDefineDebug
    | ToggleTypedArrays
    | ChangeLanguage of string
    | ChangeFontSize of float
    | ChangeFontFamily of string
    | ChangeGistToken of string
    | SaveToken
    | DeleteToken

[<RequireQualifiedAccess>]
type ExtMsg =
    | NoOp
    | Recompile

let init () =
    match localStorage.getItem(LOCAL_STORAGE_REPL_SETTING) with
    | null -> Model.Default

    | settings ->
        match Decode.fromString Model.Decoder settings with
        | Ok settings ->
            settings

        | Error msg ->
            JS.console.log("Error while loading your settings from localStorage:\n", msg)
            Model.Default

let saveSettings (model : Model, extMsg: ExtMsg) =
    let data =
        Model.Encoder model
        |> Encode.toString 0

    localStorage.setItem(LOCAL_STORAGE_REPL_SETTING, data)
    model, extMsg

let update msg model =
    match msg with
    | ToggleOptimize ->
        { model with Optimize = not model.Optimize }, ExtMsg.NoOp

    | ToggleDefineDebug ->
        { model with DefineDebug = not model.DefineDebug }, ExtMsg.NoOp

    | ToggleTypedArrays ->
        { model with TypedArrays = not model.TypedArrays }, ExtMsg.NoOp

    | ChangeLanguage newLang ->
        { model with Target = newLang }, ExtMsg.Recompile

    | ChangeFontSize newSize ->
        { model with FontSize = newSize }, ExtMsg.NoOp

    | ChangeFontFamily newFont ->
        { model with FontFamily = newFont }, ExtMsg.NoOp

    | ChangeGistToken token ->
        { model with GistTokenField = token }, ExtMsg.NoOp

    | SaveToken ->
        { model with GistTokenField = ""
                     GistToken = Some model.GistTokenField }, ExtMsg.NoOp

    | DeleteToken ->
        { model with GistToken = None}, ExtMsg.NoOp

    // Save the setting in localStorage
    // Like that they are persistent between REPL reload
    |> saveSettings

let private fontSizeOption (label : string) (fontSize : float) =
    Html.option [
        prop.value fontSize
        prop.text label
    ]

let inline private fontSizeSetting (fontSize : float) dispatch =
    Bulma.field.div [
        Bulma.label Translations.msg_options_editor_font_size

        Bulma.control.div [
            Bulma.select [
                select.isFullWidth
                prop.value fontSize
                prop.onChange (fun (ev : Types.Event) ->
                    ev.Value |> float |> ChangeFontSize |> dispatch
                )
                prop.children [
                    fontSizeOption Translations.msg_options_size_small 12.
                    fontSizeOption Translations.msg_options_size_medium 14.
                    fontSizeOption Translations.msg_options_size_large 16.
                ]
            ]
        ]
    ]

let private fontFamilyOption (label : string) (fontFamily : string) =
    Html.option [
        prop.value fontFamily
        prop.text label
    ]

let inline private fontFamilySetting (fontFamily : string) dispatch =
    Bulma.field.div [
        Bulma.label Translations.msg_options_editor_font_family

        Bulma.control.div [
            Bulma.select [
                select.isFullWidth
                prop.value fontFamily
                prop.onChange (fun (ev : Types.Event) ->
                    ev.Value |> ChangeFontFamily |> dispatch
                )
                prop.children [
                    fontFamilyOption "Fira Code" "Fira Code"
                    fontFamilyOption "Monaco default" MONACO_DEFAULT_FONT_FAMILY
                ]
            ]
        ]
    ]

let private targetSetting (target : string) dispatch =
    let option (txt: string) =
        Html.option [
            prop.value txt
            prop.text txt
        ]

    Bulma.field.div [
        Bulma.label Translations.msg_options_programming_language

        Bulma.control.div [
            Bulma.select [
                select.isFullWidth
                prop.value target
                prop.onChange (fun (ev : Types.Event) ->
                    ev.Value |> ChangeLanguage |> dispatch
                )
                prop.children [
                    option "JavaScript"
                    option "TypeScript"
                    option "Python"
                    option "Rust"
                    option "Dart"
                ]
            ]
        ]
    ]

let private languageSetting=
    let option (code : LanguageCode) (txt: string) =
        Html.option [
            prop.value (unbox<string> code)
            prop.text txt
        ]

    Bulma.field.div [
        Bulma.label Translations.msg_options_interface_language

        Bulma.control.div [
            Bulma.select [
                select.isFullWidth
                prop.value (unbox<string> activeLanguageCode)
                prop.onChange (fun (ev : Types.Event) ->
                    LanguageCode.fromText ev.Value |> storedLanguageCode
                    // Naive way to refresh the page and update the translations
                    window.location.reload()
                )
                prop.children [
                    option LanguageCode.English Translations.english
                    option LanguageCode.Russian Translations.russian
                    option LanguageCode.Ukrainian Translations.ukrainian
                    option LanguageCode.Kazakh Translations.kazakh
                ]
            ]
        ]
    ]

let private switchOption (label : string) isActive dispatch msg =
    Bulma.field.div [
        Bulma.control.div [
            // TODO: Replace with Feliz.Bulma.Switch when it exist
            Bulma.field.div [
                Html.input [
                    prop.className "switch is-success"
                    prop.type' "checkbox"
                    prop.id label
                    prop.isChecked isActive
                    prop.onChange (fun (_ : Types.Event) -> dispatch msg)
                ]

                Html.label [
                    prop.htmlFor label
                    prop.text label
                ]
            ]
        ]
    ]

let inline private optimizeSetting (model: Model) dispatch =
    switchOption Translations.msg_options_settings_optimize model.Optimize dispatch ToggleOptimize

let private defineDebugSetting (model: Model) dispatch =
    switchOption Translations.msg_options_settings_debug model.DefineDebug dispatch ToggleDefineDebug

let private typedArraysSetting (model: Model) dispatch =
    switchOption Translations.msg_options_settings_typed_arrays model.TypedArrays dispatch ToggleTypedArrays

let inline private gistTokenSetting (token : string option) (tokenField : string) dispatch =
    match token with
    | Some _ ->
        Bulma.field.div [
            Bulma.button.a [
                prop.onClick (fun _ -> dispatch DeleteToken)
                button.isFullWidth
                prop.text Translations.msg_options_gist_token_delete
            ]
        ]

    | None ->
        Bulma.field.div [
            Bulma.label [
                prop.children [
                    Html.text Translations.msg_options_gist_token_github_token
                    Html.a [
                        prop.target "_blank"
                        prop.href "https://github.com/settings/tokens/new?description=fable-repl&scopes=gist"
                        prop.text Translations.msg_options_gist_token_github_token_create
                    ]
                ]
            ]

            Bulma.field.div [
                field.hasAddons
                prop.children [
                    Bulma.input.password [
                        prop.onChange (fun (ev : Types.Event) -> ev.Value |> ChangeGistToken |> dispatch)
                        prop.placeholder Translations.msg_options_gist_token_gist_scope
                    ]

                    if tokenField.Length = 40 then
                        Bulma.button.a [
                            prop.onClick (fun _ -> dispatch SaveToken)
                            prop.text Translations.btn_save
                        ]
                ]
            ]
        ]



let view (model: Model) dispatch =
    Html.div [
        prop.className "options"
        prop.children [
            defineDebugSetting model dispatch
            typedArraysSetting model dispatch
            targetSetting model.Target dispatch
            fontFamilySetting model.FontFamily dispatch
            fontSizeSetting model.FontSize dispatch
            gistTokenSetting model.GistToken model.GistTokenField dispatch
            languageSetting
            // TODO: Optimize is disabled to prevent problems with inline functions in REPL Lib
            //   optimizeSetting model dispatch
        ]
    ]

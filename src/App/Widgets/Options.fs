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
      PreviewLanguage : bool
      FontSize : float
      FontFamily : string
      GistToken : string option
      GistTokenField : string }
    member this.ToOtherFSharpOptions =
        [| if this.DefineDebug then yield "--define:DEBUG"
           if this.PreviewLanguage then yield "--langversion:preview"
           yield "--optimize" + (if this.Optimize then "+" else "-") |]
    static member Default =
        { Optimize = false
          DefineDebug = true
          PreviewLanguage = true
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
              PreviewLanguage = get.Optional.Field "previewLanguage" Decode.bool |> Option.defaultValue true
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
              yield "previewLanguage", Encode.bool model.PreviewLanguage
              yield "fontSize", Encode.float model.FontSize
              yield "fontFamily", Encode.string model.FontFamily
              match model.GistToken with
              | Some token -> yield "gistToken", Encode.string token
              | None -> () ]

type Msg =
    | ToggleOptimize
    | ToggleDefineDebug
    | TogglePreviewLanguage
    | ChangeFontSize of float
    | ChangeFontFamily of string
    | ChangeGistToken of string
    | SaveToken
    | DeleteToken


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

let saveSettings (model : Model) =
    let data =
        Model.Encoder model
        |> Encode.toString 0

    localStorage.setItem(LOCAL_STORAGE_REPL_SETTING, data)
    model

let update msg model =
    match msg with
    | ToggleOptimize ->
        { model with Optimize = not model.Optimize }

    | ToggleDefineDebug ->
        { model with DefineDebug = not model.DefineDebug }

    | TogglePreviewLanguage ->
        { model with PreviewLanguage = not model.PreviewLanguage }

    | ChangeFontSize newSize ->
        { model with FontSize = newSize }

    | ChangeFontFamily newFont ->
        { model with FontFamily = newFont }

    | ChangeGistToken token ->
        { model with GistTokenField = token }

    | SaveToken ->
        { model with GistTokenField = ""
                     GistToken = Some model.GistTokenField }

    | DeleteToken ->
        { model with GistToken = None}

    // Save the setting in localStorage
    // Like that they are persistant between REPL reload
    |> saveSettings

let private fontSizeOption (label : string) (fontSize : float) =
    Html.option [ 
        prop.value fontSize 
        prop.text label
    ]

let inline private fontSizeSetting (fontSize : float) dispatch =
    Bulma.field.div [ 
        Bulma.label "Editors font size"

        Bulma.control.div [
            Bulma.select [
                select.isFullWidth
                prop.value fontSize
                prop.onChange (fun (ev : Types.Event) ->
                    ev.Value |> float |> ChangeFontSize |> dispatch
                )
                prop.children [
                    fontSizeOption "Small" 12.
                    fontSizeOption "Medium" 14.
                    fontSizeOption "Large" 16.
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
        Bulma.label "Editors font family"

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
    switchOption "Optimize (experimental)" model.Optimize dispatch ToggleOptimize

let private defineDebugSetting (model: Model) dispatch =
    switchOption "Define DEBUG" model.DefineDebug dispatch ToggleDefineDebug

let private previewLanguageSetting (model: Model) dispatch =
    switchOption "Preview F# features" model.PreviewLanguage dispatch TogglePreviewLanguage

let inline private gistTokenSetting (token : string option) (tokenField : string) dispatch =
    match token with
    | Some _ ->
        Bulma.field.div [
            Bulma.button.a [
                prop.onClick (fun _ -> dispatch DeleteToken)
                button.isFullWidth
                prop.text "Delete gist token"
            ]
        ]

    | None ->
        Bulma.field.div [
            Bulma.label [
                prop.children [
                    Html.text "Github token"
                    Html.a [
                        prop.target "_blank"
                        prop.href "https://github.com/settings/tokens/new?description=fable-repl&scopes=gist"
                        prop.text "  (Create)"
                    ]
                ]
            ]

            Bulma.field.div [
                field.hasAddons
                prop.children [
                    Bulma.input.password [
                        prop.onChange (fun (ev : Types.Event) -> ev.Value |> ChangeGistToken |> dispatch)
                        prop.placeholder "Token with gist scope"
                    ]

                    if tokenField.Length = 40 then
                        Bulma.button.a [
                            prop.onClick (fun _ -> dispatch SaveToken)
                            prop.text "Save"
                        ]
                ]
            ]
        ]



let view (model: Model) dispatch =
    Html.div [ 
        defineDebugSetting model dispatch
        previewLanguageSetting model dispatch
        fontFamilySetting model.FontFamily dispatch
        fontSizeSetting model.FontSize dispatch
        gistTokenSetting model.GistToken model.GistTokenField dispatch          
        // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
        //   optimizeSetting model dispatch
    ]

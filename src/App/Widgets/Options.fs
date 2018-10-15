module Widgets.Options

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma
open Fulma.Extensions
open Thoth.Json
open Fable.Import

[<Literal>]
let private MONACO_DEFAULT_FONT_FAMILY = "Menlo, Monaco, \"Courier New\", monospace"

[<Literal>]
let private LOCAL_STORAGE_REPL_SETTING = "fable_repl_settings"

type Model =
    { Optimize : bool
      FontSize : float
      FontFamily : string }

    static member Default =
        { Optimize = false
          FontSize = 14.
          FontFamily = MONACO_DEFAULT_FONT_FAMILY }

    static member Decoder =
        Decode.object (fun get ->
            { Optimize = false
                        // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
                        //  get.Optional.Field "optimize" Decode.bool
                        //     |> Option.defaultValue false
              FontSize = get.Optional.Field "fontSize" Decode.float
                            |> Option.defaultValue 14.
              FontFamily = get.Optional.Field "fontFamily" Decode.string
                            |> Option.defaultValue MONACO_DEFAULT_FONT_FAMILY } : Model
        )

    static member Encoder (model : Model) =
        Encode.object
            [ "optimize", Encode.bool model.Optimize
              "fontSize", Encode.float model.FontSize
              "fontFamily", Encode.string model.FontFamily ]

type Msg =
    | ToggleOptimize
    | ChangeFontSize of float
    | ChangeFontFamily of string

let init () =
    match Browser.localStorage.getItem(LOCAL_STORAGE_REPL_SETTING) :?> string with
    | null -> Model.Default

    | settings ->
        match Decode.fromString Model.Decoder settings with
        | Ok settings ->
            settings

        | Error msg ->
            Browser.console.log("Error while loading your settings from localStorage:\n", msg)
            Model.Default

let saveSettings (model : Model) =
    let data =
        Model.Encoder model
        |> Encode.toString 0

    Browser.localStorage.setItem(LOCAL_STORAGE_REPL_SETTING, data)
    model

let update msg model =
    match msg with
    | ToggleOptimize ->
        { model with Optimize = not model.Optimize }

    | ChangeFontSize newSize ->
        { model with FontSize = newSize }

    | ChangeFontFamily newFont ->
        { model with FontFamily = newFont }
    // Save the setting in localStorage
    // Like that they are persistant between REPL reload
    |> saveSettings

let private fontSizeOption (label : string) (fontSize : float) =
    option [ Value (string fontSize) ]
        [ str label ]

let inline private fontSizeSetting (fontSize : float) dispatch =
    Field.div [ ]
        [ Label.label [ ]
            [ str "Editors font size" ]
          Control.div [ ]
            [ Select.select [ Select.IsFullWidth ]
                [ select [ Value (string fontSize)
                           OnChange (fun ev ->
                            ev.Value |> float |> ChangeFontSize |> dispatch
                           ) ]
                    [ fontSizeOption "Small" 12.
                      fontSizeOption "Medium" 14.
                      fontSizeOption "Large" 16. ] ] ] ]

let private fontFamilyOption (label : string) (fontFamily : string) =
    option [ Value fontFamily ]
        [ str label ]

let inline private fontFamilySetting (fontFamily : string) dispatch =
    Field.div [ ]
        [ Label.label [ ]
            [ str "Editors font family" ]
          Control.div [ ]
            [ Select.select [ Select.IsFullWidth ]
                [ select [ Value fontFamily
                           OnChange (fun ev ->
                            ev.Value |> ChangeFontFamily |> dispatch
                           ) ]
                    [ fontFamilyOption "Fira Code" "Fira Code"
                      fontFamilyOption "Monaco default" MONACO_DEFAULT_FONT_FAMILY ] ] ] ]

let inline private optimizeSetting (isActive : bool) dispatch =
    let label =
        if isActive then
            "Active"
        else
            "Disabled"

    Field.div [ ]
        [ Label.label [ ]
            [ str "Optimize (experimental)" ]
          Control.div [ ]
            [ Switch.switch [ Switch.Color IsSuccess
                              Switch.Checked isActive
                              Switch.OnChange (fun _ -> dispatch ToggleOptimize) ]
                [ str label ] ] ]

let view (model: Model) dispatch =
    div [ ]
        [ fontFamilySetting model.FontFamily dispatch
          fontSizeSetting model.FontSize dispatch
          // TODO: Optimize is disable to prevent problems with inline functions in REPL Lib
        //   optimizeSetting model.Optimize dispatch
        ]

namespace Widgets


module General =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open Fulma
    open Fulma.FontAwesome

    type ResetState =
        | Default
        | Confirm

    type Model =
        { ResetState : ResetState }

    type Msg =
        | AskReset
        | ConfirmReset
        | CancelReset
        | Share

    type ExternalMessage =
        | NoOp
        | Reset
        | Share

    let init () =
        { ResetState = Default }

    let update msg model =
        match msg with
        | AskReset ->
            { model with ResetState = Confirm }, NoOp

        | ConfirmReset ->
            { model with ResetState = Default }, Reset

        | CancelReset ->
            { model with ResetState = Default }, NoOp

        | Msg.Share ->
            model, ExternalMessage.Share


    let view (model: Model) dispatch =
        let content =
            match model.ResetState with
            | Default ->
                div [ ]
                    [ Field.div [ Field.HasAddons ]
                        [ Control.div [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch AskReset) ]
                                [ Icon.faIcon [ ]
                                    [ Fa.icon Fa.I.Refresh ] ] ]
                          Control.div [ Control.IsExpanded ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch AskReset)
                                              Button.IsText
                                              Button.IsFullWidth ]
                                [ Text.span [ ]
                                    [ str "Click here to reset" ] ] ] ]
                      Field.div [ Field.HasAddons ]
                        [ Control.div [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.Share) ]
                                [ Icon.faIcon [ ]
                                    [ Fa.icon Fa.I.Share ] ] ]
                          Control.div [ Control.IsExpanded ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.Share)
                                              Button.IsText
                                              Button.IsFullWidth ]
                                [ Text.span [ ]
                                    [ str "Share" ] ] ] ] ]
            | Confirm ->
                Field.div [ ]
                    [ Help.help [ Help.Color IsWarning ]
                        [ str "Please, confirm to reset" ]
                      Field.div [ Field.HasAddons ]
                        [
                          Control.p [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch ConfirmReset)
                                              Button.Color IsSuccess ]
                                [ Icon.faIcon [ ]
                                    [ Fa.icon Fa.I.Check ]
                                  Text.span [ ]
                                    [ str "Confirm" ] ] ]
                          Control.p [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch CancelReset)
                                              Button.Color IsDanger ]
                                [ Icon.faIcon [ ]
                                    [ Fa.icon Fa.I.Times ]
                                  Text.span [ ]
                                    [ str "Cancel" ] ] ] ] ]

        Content.content [ ]
            [ content ]

module Options =

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
                { Optimize = get.Optional.Field "optimize" Decode.bool
                                |> Option.defaultValue false
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
                        [ fontSizeOption "Small" 13.
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
              optimizeSetting model.Optimize dispatch ]

module About =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open Fulma
    open Fable.Repl.Shared

    let view =
        Content.content [ ]
            [ str ("Version: " + Literals.VERSION)
              br [ ]
              a [ Href "https://github.com/fable-compiler/repl2/issues/new" ]
                [ Text.span [ Modifiers [ Modifier.TextTransform TextTransform.Italic ]
                              Props [ Style [ TextDecoration "underline" ] ] ]
                    [ str "Found a bug ?" ] ] ]

module Stats =

    open Fable.Helpers.React
    open Fable.Helpers.React.Props
    open Fable.Core.JsInterop
    open Fulma
    open Fable.Repl.Shared

    type Model = CompileStats

    let private row (label : string) (value : float)=
        tr [ ]
            [ td [ ]
                [ str label ]
              td [ ]
                [ Text.span [ Modifiers [ Modifier.TextColor IsSuccess
                                          Modifier.TextAlignment (Screen.All, TextAlignment.Right) ]
                              Props [ Style [ Display "block" ] ] ]
                    [ str value?toLocaleString$() ] ] ]

    let view (model : Model) =
        Content.content [ ]
            [ Table.table [ ]
                [ thead [ ]
                    [ tr [ ]
                        [ th [ ] [ str "Steps" ]
                          th [ Class "has-text-right" ] [ str "ms" ] ] ]
                  tbody [ ]
                    [ row "FCS checker" model.FCS_checker
                      row "FCS parsing" model.FCS_parsing
                      row "Fable transform" model.Fable_transform
                      row "Babel generation" model.Babel_generation ] ] ]

module Widgets.General

open Fable.React
open Fable.React.Props
open Fulma
open Fulma.Extensions.Wikiki
open Fable.FontAwesome

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
    | ShareToGist
    | StartCompile
    | RefreshIframe

[<RequireQualifiedAccess>]
type ExternalMessage =
    | NoOp
    | Reset
    | Share
    | ShareToGist
    | StartCompile
    | RefreshIframe

let init () =
    { ResetState = Default }

let update msg model =
    match msg with
    | AskReset ->
        { model with
            ResetState = Confirm
        }
        , ExternalMessage.NoOp

    | ConfirmReset ->
        { model with
            ResetState = Default
        }
        , ExternalMessage.Reset

    | CancelReset ->
        { model with
            ResetState = Default
        }
        , ExternalMessage.NoOp

    | Share ->
        model
        , ExternalMessage.Share

    | ShareToGist ->
        model
        , ExternalMessage.ShareToGist

    | StartCompile ->
        model
        , ExternalMessage.StartCompile

    | RefreshIframe ->
        model
        , ExternalMessage.RefreshIframe

let viewCollapsed (isCompiling : bool) (gistToken : string option) (model: Model) dispatch =
    let compileIcon =
        if isCompiling then
            [ Fa.i [ Fa.Solid.Spinner; Fa.Spin ] [] ]
        else
            [ Fa.i [ Fa.Solid.Play ] [] ]

    div [ Class "actions-area" ]
        [ div [ Class "action-button" ]
            [ Button.button [ Button.IsOutlined
                              Button.Disabled isCompiling
                              Button.OnClick (fun _ -> dispatch StartCompile)
                              Button.CustomClass (Tooltip.ClassName + " " + Tooltip.IsTooltipRight)
                              Button.Props [ Tooltip.dataTooltip "Compile and run (Alt+Enter)" ] ]
                [ Icon.icon [ Icon.Size IsLarge ] compileIcon ] ]
          div [ Class "action-button" ]
            [ Button.button [ Button.IsOutlined
                              Button.Disabled isCompiling
                              Button.OnClick (fun _ -> dispatch RefreshIframe)
                              Button.CustomClass (Tooltip.ClassName + " " + Tooltip.IsTooltipRight)
                              Button.Props [ Tooltip.dataTooltip "Refresh the live sample (without compiling)" ] ]
                [ Icon.icon [ Icon.Size IsLarge ]
                    [ Fa.i [ Fa.Solid.Redo ] [] ] ] ]
          div [ Class "action-button" ]
            [ Button.button [ Button.IsOutlined
                              Button.OnClick (fun _ -> dispatch AskReset)
                              Button.CustomClass (Tooltip.ClassName + " " + Tooltip.IsTooltipRight)
                              Button.Props [ Tooltip.dataTooltip "Reset the REPL, you will loose your current work" ] ]
                [ Icon.icon [ Icon.Size IsLarge ]
                    [ Fa.i [ Fa.Solid.TrashAlt ] [] ] ] ]
          div [ Class "action-button" ]
            [ Button.button [ Button.IsOutlined
                              Button.OnClick (fun _ -> dispatch Share)
                              Button.CustomClass (Tooltip.ClassName + " " + Tooltip.IsTooltipRight)
                              Button.Props [ Tooltip.dataTooltip "Share using the URL" ] ]
                [ Icon.icon [ Icon.Size IsLarge ]
                    [ Fa.i [ Fa.Solid.Share ] [] ] ] ]
          match gistToken with
          | Some _ ->
            div [ Class "action-button" ]
                [ Button.button [ Button.IsOutlined
                                  Button.OnClick (fun _ -> dispatch ShareToGist)
                                  Button.CustomClass (Tooltip.ClassName + " " + Tooltip.IsTooltipRight)
                                  Button.Props [ Tooltip.dataTooltip "Share to  Gist" ] ]
                    [ Icon.icon [ Icon.Size IsLarge ]
                        [ Fa.i [ Fa.Brand.Github ] [] ] ] ]
          | None -> () ]


let viewExpanded (isCompiling : bool) (gistToken : string option) (model: Model) dispatch =
    let content =
        match model.ResetState with
        | Default ->
            div [ ]
                [ Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Button.button
                            [ Button.OnClick (fun _ -> dispatch StartCompile)
                              Button.Disabled isCompiling ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.Play ] [] ] ] ]
                      Control.div [ Control.IsExpanded ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch StartCompile)
                                          Button.IsText
                                          Button.Disabled isCompiling
                                          Button.IsFullWidth ]
                            [ Text.span [ ]
                                [ str "Compile and run" ] ] ] ]
                  Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Button.button
                            [ Button.OnClick (fun _ -> dispatch RefreshIframe)
                              Button.Disabled isCompiling ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.Redo ] [] ] ] ]
                      Control.div [ Control.IsExpanded ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch RefreshIframe)
                                          Button.IsText
                                          Button.Disabled isCompiling
                                          Button.IsFullWidth ]
                            [ Text.span [ ]
                                [ str "Refresh the live sample" ] ] ] ]
                  Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch AskReset) ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.TrashAlt ] [] ] ] ]
                      Control.div [ Control.IsExpanded ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch AskReset)
                                          Button.IsText
                                          Button.IsFullWidth ]
                            [ Text.span [ ]
                                [ str "Click here to reset" ] ] ] ]
                  Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch Share) ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.Share ] [] ] ] ]
                      Control.div [ Control.IsExpanded ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch Share)
                                          Button.IsText
                                          Button.IsFullWidth ]
                            [ Text.span [ ]
                                [ str "Share using the URL" ] ] ] ]
                  match gistToken with
                  | Some _ ->
                    Field.div [ Field.HasAddons ]
                        [ Control.div [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch ShareToGist) ]
                                [ Icon.icon [ ]
                                    [ Fa.i [ Fa.Brand.Github ] [] ] ] ]
                          Control.div [ Control.IsExpanded ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch ShareToGist)
                                              Button.IsText
                                              Button.IsFullWidth ]
                                [ Text.span [ ]
                                    [ str "Share to Gist" ] ] ] ]
                  | None -> () ]
        | Confirm ->
            Field.div [ ]
                [ Help.help [ Help.Color IsWarning ]
                    [ str "Please, confirm to reset" ]
                  Field.div [ Field.HasAddons ]
                    [
                      Control.p [ ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch ConfirmReset)
                                          Button.Color IsSuccess ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.Check ] [] ]
                              Text.span [ ]
                                [ str "Confirm" ] ] ]
                      Control.p [ ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch CancelReset)
                                          Button.Color IsDanger ]
                            [ Icon.icon [ ]
                                [ Fa.i [ Fa.Solid.Times ] [] ]
                              Text.span [ ]
                                [ str "Cancel" ] ] ] ] ]

    Content.content [ ]
        [ content ]

let viewModalResetConfirmation (model: Model) dispatch =
    Modal.modal
        [
            Modal.IsActive (model.ResetState = Confirm)
            Modal.Props [ Style [ ZIndex 2000 ] ] // Make sure to be on top of everything
        ]
        [ Modal.background [ Props [ OnClick (fun _ -> printfn "dzkopdzkop"; dispatch CancelReset) ] ] [ ]
          Modal.content [ ]
            [ div [ Class "reset-confirmation-modal" ]
                [ div [ Class "reset-confirmation-modal-content" ]
                    [ span [ Class "reset-confirmation-modal-content-text" ]
                        [ str "Please, confirm to reset" ]
                      div [ Class "reset-confirmation-modal-content-foot" ]
                        [ Field.div [ ]
                            [ Field.div [ Field.HasAddons ]
                                [ Control.p [ ]
                                    [ Button.button [ Button.OnClick (fun _ -> dispatch ConfirmReset)
                                                      Button.Color IsSuccess ]
                                        [ Icon.icon [ ]
                                            [ Fa.i [ Fa.Solid.Check ] [] ]
                                          Text.span [ ]
                                            [ str "Confirm" ] ] ]
                                  Control.p [ ]
                                    [ Button.button [ Button.OnClick (fun _ -> dispatch CancelReset)
                                                      Button.Color IsDanger ]
                                        [ Icon.icon [ ]
                                            [ Fa.i [ Fa.Solid.Times ] [] ]
                                          Text.span [ ]
                                            [ str "Cancel" ] ] ] ] ] ] ] ] ] ]
module Widgets.General

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
    | ShareToGist

type ExternalMessage =
    | NoOp
    | Reset
    | Share
    | ShareToGist

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

    | Msg.ShareToGist ->
        model, ExternalMessage.ShareToGist

let view gistToken (model: Model) dispatch =
    let content =
        match model.ResetState with
        | Default ->
            div [ ]
                [ yield Field.div [ Field.HasAddons ]
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
                  yield Field.div [ Field.HasAddons ]
                    [ Control.div [ ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.Share) ]
                            [ Icon.faIcon [ ]
                                [ Fa.icon Fa.I.Share ] ] ]
                      Control.div [ Control.IsExpanded ]
                        [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.Share)
                                          Button.IsText
                                          Button.IsFullWidth ]
                            [ Text.span [ ]
                                [ str "Share" ] ] ] ]
                  match gistToken with
                  | Some _ ->
                    yield Field.div [ Field.HasAddons ]
                        [ Control.div [ ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.ShareToGist) ]
                                [ Icon.faIcon [ ]
                                    [ Fa.icon Fa.I.Github ] ] ]
                          Control.div [ Control.IsExpanded ]
                            [ Button.button [ Button.OnClick (fun _ -> dispatch Msg.ShareToGist)
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

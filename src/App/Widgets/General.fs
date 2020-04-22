module Widgets.General

open Fable.FontAwesome
open Feliz
open Feliz.Bulma
open Feliz.Bulma.Tooltip

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

    let actionButton tooltipText msg (faIcon : ReactElement list) =
        Html.div [
            prop.className "action-button"
            prop.children [
                Bulma.button.a [
                    button.isOutlined
                    prop.disabled isCompiling
                    prop.onClick (fun _ -> dispatch msg)
                    tooltip.hasTooltipRight
                    tooltip.text tooltipText
                    prop.children [
                        Bulma.icon [
                            icon.isLarge
                            prop.children faIcon
                        ]
                    ]
                ]
            ]
        ]
 
    Html.div [
        prop.className "actions-area"
        prop.children [

            actionButton "Compile and run (Alt+Enter)" StartCompile compileIcon
            actionButton "Refresh the live sample (without compiling)" RefreshIframe [ Fa.i [ Fa.Solid.Redo ] [ ] ]
            actionButton "Reset the REPL, you will loose your current work" AskReset [ Fa.i [ Fa.Solid.TrashAlt ] [ ] ]
            actionButton "Share using the URL" Share [ Fa.i [ Fa.Solid.Share ] [ ] ]
            match gistToken with
            | Some _ ->
                actionButton "Share to Gist" ShareToGist [ Fa.i [ Fa.Brand.Github ] [ ] ]
            | None -> Html.none
            
        ]
    ]


let viewExpanded (isCompiling : bool) (gistToken : string option) (model: Model) dispatch =
    let renderItem (text : string) isDisabled msg faIcon =
        Bulma.field.div [
            field.hasAddons
            prop.children [
                Bulma.control.div [
                    Bulma.button.a [
                        prop.onClick (fun _ -> dispatch msg)
                        prop.disabled isDisabled
                        prop.children [
                            Bulma.icon [
                                Fa.i [ faIcon ] [ ]
                            ]
                        ]
                    ]
                ]

                Bulma.control.div [
                    control.isExpanded
                    prop.children [
                        Bulma.button.a [
                            prop.onClick (fun _ -> dispatch msg)
                            prop.disabled isDisabled
                            button.isText
                            button.isFullWidth
                            prop.children [ 
                                Html.span text
                            ]
                        ]
                    ]
                ]
            ]
        ]
    
    let content =
        match model.ResetState with
        | Default ->
            Html.div [
                renderItem "Compile and run" isCompiling StartCompile Fa.Solid.Play
                renderItem "Refresh the live sample" isCompiling RefreshIframe Fa.Solid.Redo
                renderItem "Click here to reset" false AskReset Fa.Solid.TrashAlt
                renderItem "Share using the URL" false Share Fa.Solid.Share
                match gistToken with
                | Some _ -> 
                    renderItem "Share to Gist" false ShareToGist Fa.Brand.Github
                | None ->
                    Html.none
            ]
 
        | Confirm ->
            Bulma.field.div [
                Bulma.help [
                    color.isWarning
                    prop.text "Please, confirm to reset"
                ]

                Bulma.field.div [ 
                    field.hasAddons
                    prop.children [
                        Bulma.control.div [
                            Bulma.button.a [
                                prop.onClick (fun _ -> dispatch ConfirmReset)
                                color.isSuccess
                                prop.children [
                                    Bulma.icon [
                                        Fa.i [ Fa.Solid.Check ] [ ]
                                    ]
                                    Html.span "Confirm"
                                ]
                            ]
                        ]

                        Bulma.control.div [
                            Bulma.button.a [
                                prop.onClick (fun _ -> dispatch CancelReset)
                                color.isDanger
                                prop.children [
                                    Bulma.icon [
                                        Fa.i [ Fa.Solid.Times ] [ ]
                                    ]
                                    Html.span "Cancel"
                                ]
                            ]
                        ]
                    ]
                ]
            ]

    Bulma.content content

let viewModalResetConfirmation (model: Model) dispatch =
    Bulma.modal [
        if (model.ResetState = Confirm) then 
            modal.isActive
        prop.style [
            style.zIndex 2000 // Make sure to be on top of everything
        ]
        prop.children [
            Bulma.modalBackground [
                prop.onClick (fun _ -> dispatch CancelReset)
            ]

            Bulma.modalContent [
                Html.div [
                    prop.className "reset-confirmation-modal"
                    prop.children [
                        Html.div [
                            prop.className "reset-confirmation-modal-content"
                            prop.children [
                                Html.span [
                                    prop.className "reset-confirmation-modal-content-text"
                                    prop.text "Please, confirm to reset"
                                ]

                                Html.div [
                                    prop.className "reset-confirmation-modal-content-foot"
                                    prop.children [
                                        Bulma.field.div [
                                            prop.children [
                                                Bulma.field.div [
                                                    field.hasAddons
                                                    prop.children [
                                                        Bulma.control.div [
                                                            Bulma.button.a [
                                                                prop.onClick (fun _ -> dispatch ConfirmReset)
                                                                color.isSuccess
                                                                prop.children [
                                                                    Bulma.icon [
                                                                        Fa.i [ Fa.Solid.Check ] [ ]
                                                                    ]

                                                                    Html.span "Confirm"
                                                                ]
                                                            ]
                                                        ]

                                                        Bulma.control.div [
                                                            Bulma.button.a [
                                                                prop.onClick (fun _ -> dispatch CancelReset)
                                                                color.isDanger
                                                                prop.children [
                                                                    Bulma.icon [
                                                                        Fa.i [ Fa.Solid.Times ] [ ]
                                                                    ]

                                                                    Html.span "Cancel"
                                                                ]
                                                            ]
                                                        ]
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ]
    ]

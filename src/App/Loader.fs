module Fable.Repl.Loader

open Browser
open Elmish
open Thoth.Elmish
open Mouse
open Feliz
open Feliz.Bulma

type Model =
    | Initializing
    | Running of Main.Model
    | InvalidPlatform of Option<Router.Page>

type Msg =
    | Initialize of Option<Router.Page>
    | MainMsg of Main.Msg

let urlUpdate (result: Option<Router.Page>) model =
    let (model, cmd) =
        match model with
        | Initializing ->
            let (mainModel, mainCmd) = Main.init()
            Running mainModel, Cmd.map MainMsg mainCmd

        | Running model -> Running model, Cmd.ofMsg (MainMsg Main.UrlHashChange)

        | InvalidPlatform p -> InvalidPlatform p, Cmd.none

    match result with
    | None ->
        console.error("Error parsing url: " + window.location.href)
        model, Cmd.batch [ cmd
                           Router.modifyUrl Router.Home ]

    | Some page ->
        match page with
        | Router.Home | Router.LoadGist None->
            model, cmd
        | Router.LoadGist (Some gist) ->
            model, Cmd.batch [ cmd
                               Cmd.ofMsg (MainMsg (Main.LoadGist gist)) ]
        // If user ask for reset, send a Reset message
        | Router.Reset ->
            model, Cmd.batch [ cmd
                               Cmd.ofMsg (MainMsg Main.Reset) ]

let update msg (model : Model) =
    match msg with
    | Initialize p -> urlUpdate p Initializing

    | MainMsg subMsg ->
        match model with
        | Initializing
        | InvalidPlatform _ -> model, Cmd.none
        | Running model ->
            let (mainModel, mainCmd) = Main.update subMsg model
            Running mainModel, Cmd.map MainMsg mainCmd

let init (result: Option<Router.Page>) =
    if ReactDeviceDetect.exports.isMobile then
        InvalidPlatform result |> urlUpdate result
    else
        urlUpdate result Initializing

let private view (model: Model) dispatch =
    match model with
    | Initializing ->
        Html.text Translations.msg_initializing

    | Running model ->
        Main.view model (MainMsg >> dispatch)

    | InvalidPlatform p ->
        Html.div [
            Bulma.hero [
                hero.isFullHeight
                prop.children [
                    Bulma.heroBody [
                        Bulma.container [
                            Html.img [
                                prop.src "img/fable-ionide.png"
                                prop.style [
                                    style.display.block
                                    style.width length.auto
                                    style.margin length.auto
                                ]
                            ]

                            Html.br [ ]

                            Bulma.title.h3 [
                                text.hasTextCentered
                                prop.text Translations.msg_repl_name
                            ]

                            Bulma.subtitle.h5 [
                                text.hasTextCentered
                                prop.text Translations.msg_desktop_experience
                            ]

                            Bulma.level [
                                Bulma.levelItem [
                                    Bulma.button.a [
                                        prop.onClick (fun _ -> Initialize p |> dispatch)
                                        prop.text Translations.btn_continue
                                    ]
                                ]
                            ]

                        ]
                    ]
                ]
            ]
        ]

open Elmish.React
// open Elmish.HMR
open Elmish.Navigation
open Elmish.UrlParser

Program.mkProgram init update view
|> Program.toNavigable (parseHash Router.pageParser) urlUpdate
|> Toast.Program.withToast Toast.renderToastWithFulma
|> Program.withReactSynchronous "app-container"
|> Program.run

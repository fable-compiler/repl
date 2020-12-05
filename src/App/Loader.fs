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
    | InvalidPlatform

type Msg =
    | MainMsg of Main.Msg

let update msg (model : Model) =
    match model with
    | Initializing -> model, Cmd.none

    | Running model ->
        match msg with
        | MainMsg subMsg ->
            let (mainModel, mainCmd) = Main.update subMsg model
            Running mainModel, Cmd.map MainMsg mainCmd

    | InvalidPlatform ->
        model, Cmd.none

let urlUpdate (result: Option<Router.Page>) model =
    let (model, cmd) =
        match model with
        | Initializing ->
            let (mainModel, mainCmd) = Main.init()
            Running mainModel, Cmd.map MainMsg mainCmd

        | Running model -> Running model, Cmd.ofMsg (MainMsg Main.UrlHashChange)

        | InvalidPlatform -> InvalidPlatform, Cmd.none

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

let init (result: Option<Router.Page>) =
    if ReactDeviceDetect.exports.isMobile then
        urlUpdate result InvalidPlatform
    else
        urlUpdate result Initializing

let private view (model: Model) dispatch =
    match model with
    | Initializing ->
        Html.text "Initializing"

    | Running model ->
        Main.view model (MainMsg >> dispatch)

    | InvalidPlatform ->
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
                                prop.text "Fable REPL"
                            ]

                            Bulma.subtitle.h5 [
                                text.hasTextCentered
                                prop.text "is only available on desktop"
                            ]
                        ]
                    ]
                ]
            ]
        ]

#if !DEBUG
open Fable.Core
open Fable.Core.JsInterop

let [<Global>] navigator: obj = jsNative
let [<Emit("$0 in $1")>] hasField (key: string) (o: obj): bool = jsNative
if hasField "serviceWorker" navigator then
    navigator?serviceWorker?register("./service-worker.js")
        ?``then``(fun registration -> registration?unregister())
#endif

open Elmish.React
// open Elmish.HMR
open Elmish.Navigation
open Elmish.UrlParser

Program.mkProgram init update view
|> Program.toNavigable (parseHash Router.pageParser) urlUpdate
|> Toast.Program.withToast Toast.renderToastWithFulma
|> Program.withReactSynchronous "app-container"
|> Program.run

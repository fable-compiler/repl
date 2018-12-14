module Fable.Repl.Loader

open Fable.Import
open Fulma
open Elmish
open Thoth.Elmish
open Mouse

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
        Browser.console.error("Error parsing url: " + Browser.window.location.href)
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

open Fable.Helpers.React
open Fable.Helpers.React.Props

let private view (model: Model) dispatch =
    match model with
    | Initializing ->
        str "Initializing"

    | Running model ->
        Main.view model (MainMsg >> dispatch)

    | InvalidPlatform ->
        div [ ]
            [ Hero.hero [ Hero.IsFullHeight ]
                [ Hero.body [ ]
                    [ Container.container [ ]
                        [ img [ Src "img/fable-ionide.png"
                                Style [ Display "block"
                                        Width "auto"
                                        Margin "auto" ] ]
                          br [ ]
                          Heading.h3 [ Heading.Modifiers [ Modifier.TextAlignment (Screen.All, TextAlignment.Centered) ] ]
                            [ str "Fable REPL" ]
                          Heading.p [ Heading.IsSubtitle
                                      Heading.Is5
                                      Heading.Modifiers [ Modifier.TextAlignment (Screen.All, TextAlignment.Centered) ] ]
                            [ str "is only available on desktop" ] ] ] ] ]

#if !DEBUG
Browser.navigator.serviceWorker.register("./service-worker.js") |> ignore
#endif

open Elmish.React
// open Elmish.HMR
open Elmish.Browser.Navigation
open Elmish.Browser.UrlParser

Program.mkProgram init update view
|> Program.toNavigable (parseHash Router.pageParser) urlUpdate
|> Toast.Program.withToast Toast.renderToastWithFulma
|> Program.withReact "app-container"
|> Program.run

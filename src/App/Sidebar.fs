module Fable.Repl.Sidebar

open Elmish
open Fable.FontAwesome
open Feliz
open Feliz.Bulma

type Model =
    { 
        IsExpanded : bool
        WidgetsState : Set<string>
        Samples : Widgets.Samples.Model
        Options : Widgets.Options.Model
        General : Widgets.General.Model
        Statistics : Widgets.Stats.Model 
    }

type Msg =
    | SamplesMsg of Widgets.Samples.Msg
    | OptionsMsg of Widgets.Options.Msg
    | GeneralMsg of Widgets.General.Msg
    | ToggleWidget of string
    | ToggleState
    | UpdateStats of Widgets.Stats.Model

type ExternalMsg =
    | LoadSample of fsharp : string * html : string * css : string
    | NoOp
    | Reset
    | StartCompile
    | RefreshIframe
    | Share
    | ShareToGist

let init () =
    let samplesModel, samplesCmd = Widgets.Samples.init ()
    { 
        IsExpanded = false
        WidgetsState = Set.empty
        General = Widgets.General.init()
        Samples = samplesModel
        Options = Widgets.Options.init ()
        Statistics =
            { 
                FCS_checker = 0.
                FCS_parsing = 0.
                Fable_transform = 0.
                Babel_generation = 0. 
            } 
    }
    , Cmd.map SamplesMsg samplesCmd

let update msg model =
    match msg with
    | SamplesMsg msg ->
        let (samplesModel, samplesCmd, externalMsg) = Widgets.Samples.update msg model.Samples

        let extraMsg =
            match externalMsg with
            | Widgets.Samples.NoOp -> NoOp
            | Widgets.Samples.LoadSample (fsharpCode, htmlCode, cssCode) -> LoadSample (fsharpCode, htmlCode, cssCode)

        { model with 
            Samples = samplesModel 
        }
        , Cmd.map SamplesMsg samplesCmd
        , extraMsg

    | OptionsMsg msg ->
        let optionsModel = Widgets.Options.update msg model.Options
        { model with
            Options = optionsModel 
        }
        , Cmd.none
        , NoOp

    | GeneralMsg msg ->
        let (generalModel, externalMsg) = Widgets.General.update msg model.General

        let externalMsg =
            match externalMsg with
            | Widgets.General.ExternalMessage.NoOp -> NoOp
            | Widgets.General.ExternalMessage.Reset -> Reset
            | Widgets.General.ExternalMessage.StartCompile -> StartCompile
            | Widgets.General.ExternalMessage.RefreshIframe -> RefreshIframe
            | Widgets.General.ExternalMessage.Share -> Share
            | Widgets.General.ExternalMessage.ShareToGist -> ShareToGist


        { model with 
            General = generalModel 
        }
        , Cmd.none
        , externalMsg

    | ToggleWidget id ->
        let newWidgetsState =
            if model.WidgetsState.Contains id then
                model.WidgetsState.Remove id
            else
                model.WidgetsState.Add id

        { model with 
            WidgetsState = newWidgetsState 
        }
        , Cmd.none
        , NoOp

    | ToggleState ->
        { model with 
            IsExpanded = not model.IsExpanded 
        }
        , Cmd.none
        , NoOp

    | UpdateStats stats ->
        { model with 
            Statistics = stats 
        }
        , Cmd.none
        , NoOp

let private renderExpandedWidgets (states : Set<string>) dispatch (title, icon, widget: ReactElement, maxHeight: int option) =
    let baseView headerIcon content =
        Bulma.card [
            Bulma.cardHeader [
                prop.onClick (fun _ -> ToggleWidget title |> dispatch )
                prop.children [
                    Bulma.cardHeaderTitle [
                        Bulma.icon [
                            prop.style [
                                style.marginRight (length.em 0.5)
                            ]
                            prop.children [
                                Fa.i [ icon; Fa.Size Fa.FaLarge ] []
                            ]
                        ]
                        Html.text title
                    ]

                    Bulma.cardHeaderIcon [
                        Bulma.icon [
                            Fa.i [ headerIcon ; Fa.Size Fa.FaLarge ] []
                        ]
                    ]
                ]
            ]

            Html.ofOption content
        ]


    if states.Contains title then
            baseView Fa.Solid.AngleDown None
        else
            let props : IReactProperty list =
                match maxHeight with
                | Some maxHeight ->
                    [
                        prop.style [
                            style.maxHeight (length.px maxHeight)
                            style.overflowY.auto
                        ]
                    ]
                | None -> [ ]
            baseView Fa.Solid.AngleUp (Some (Bulma.cardContent [ yield! props; prop.children widget]))


let renderCollapsedWidgets dispatch (title, faIcon, widget: ReactElement, maxHeight: int option) =
    let props =
        match maxHeight with
        | Some maxHeight ->
            [
                prop.style [
                    style.maxHeight maxHeight
                    style.overflowY.auto
                ]
            ]
        | None -> [ ]

    Html.div [
        prop.className "item"
        prop.children [
            Bulma.icon [
                prop.className "is-large"
                prop.children [
                    Fa.i [ faIcon; Fa.Size Fa.FaLarge ] []
                ]
            ]

            Bulma.card [
                prop.className "item-content"
                prop.children [
                    Bulma.cardHeader [
                        prop.onClick (fun _ -> ToggleWidget title |> dispatch )
                        prop.children [
                            Bulma.cardHeaderTitle title
                        ]
                    ]

                    Bulma.cardContent [
                        yield! props
                        prop.children widget
                    ]
                ]
            ]
        ]
    ]


let private renderWidgets model dispatch (title, icon, widget, maxHeight) =
    match model.IsExpanded with
    | true ->
        renderExpandedWidgets model.WidgetsState dispatch (title, icon, widget, maxHeight)
    | false ->
        renderCollapsedWidgets dispatch (title, icon, widget, maxHeight)

let private collapseButton dispatch =
    Bulma.card [
        prop.onClick (fun _ -> dispatch ToggleState)
        prop.children [
            Bulma.cardHeader [
                Bulma.cardHeaderTitle "Collapse sidebar"
                Bulma.cardHeaderIcon [
                    Bulma.icon [
                        Fa.i [ Fa.Solid.AngleDoubleLeft; Fa.Size Fa.FaLarge ] [ ]
                    ]
                ]
            ]
        ]
    ]

let private sidebarContainer dispatch (sections : ReactElement list) =
    Html.div [
        prop.className "sidebar is-expanded"
        prop.children [
            Html.div [
                prop.className "brand"
                prop.children [
                    Html.img [
                        prop.src "img/fable-ionide.png"
                    ]
                    Bulma.title4 "Fable REPL"
                ]
            ]

            Html.div [
                prop.className "widgets-list"
                prop.children sections
            ]

            collapseButton dispatch
        ]
    ]


let private expandButton dispatch =
    Bulma.card [
        prop.onClick (fun _ -> dispatch ToggleState)
        prop.children [
            Bulma.cardHeader [
                Bulma.cardHeaderIcon [
                    Bulma.icon [
                        Fa.i [ Fa.Solid.AngleDoubleRight; Fa.Size Fa.FaLarge ] []
                    ]
                ]
            ]
        ]
    ]

let view (isCompiling : bool) (model: Model) dispatch =
    let widgets =
        [ 
            if model.IsExpanded then
                "General", Fa.Solid.Th, Widgets.General.viewExpanded isCompiling model.Options.GistToken model.General (GeneralMsg >> dispatch), None           
            "Samples", Fa.Solid.Book, Widgets.Samples.view model.Samples (SamplesMsg >> dispatch), Some 500
            "Options", Fa.Solid.Cog, Widgets.Options.view model.Options (OptionsMsg >> dispatch), None
            "Statistics", Fa.Regular.Clock, Widgets.Stats.view model.Statistics, None
            "About", Fa.Solid.Info, Widgets.About.view, None 
        ]
        |> List.map (renderWidgets model dispatch)

    if model.IsExpanded then
        sidebarContainer dispatch widgets
    else
        let generalCollapsedView =
            Widgets.General.viewCollapsed isCompiling model.Options.GistToken model.General (GeneralMsg >> dispatch)

        Html.div [
            prop.className "sidebar is-collapsed"
            prop.children [
                Widgets.General.viewModalResetConfirmation model.General (GeneralMsg >> dispatch)
                
                Html.div [
                    prop.className "brand"
                    prop.children [
                        Html.img [
                            prop.src "img/fable-ionide.png"
                        ]
                    ]
                ]

                Html.div [
                    prop.className "widgets-list"
                    prop.children (generalCollapsedView::widgets)
                ]
                
                expandButton dispatch 
            ]
        ]

module Fable.Repl.Sidebar

open Elmish

type Model =
    { IsExpanded : bool
      WidgetsState : Set<string>
      Samples : Widgets.Samples.Model
      Options : Widgets.Options.Model
      General : Widgets.General.Model
      Statistics : Widgets.Stats.Model }

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
    | Share
    | ShareToGist

let init () =
    let samplesModel, samplesCmd = Widgets.Samples.init ()
    { IsExpanded = false
      WidgetsState = Set.empty
      General = Widgets.General.init()
      Samples = samplesModel
      Options = Widgets.Options.init ()
      Statistics =
        { FCS_checker = 0.
          FCS_parsing = 0.
          Fable_transform = 0.
          Babel_generation = 0. } }, Cmd.map SamplesMsg samplesCmd

let update msg model =
    match msg with
    | SamplesMsg msg ->
        let (samplesModel, samplesCmd, externalMsg) = Widgets.Samples.update msg model.Samples

        let extraMsg =
            match externalMsg with
            | Widgets.Samples.NoOp -> NoOp
            | Widgets.Samples.LoadSample (fsharpCode, htmlCode, cssCode) -> LoadSample (fsharpCode, htmlCode, cssCode)

        { model with Samples = samplesModel }, Cmd.map SamplesMsg samplesCmd, extraMsg

    | OptionsMsg msg ->
        let optionsModel = Widgets.Options.update msg model.Options
        { model with Options = optionsModel }, Cmd.none, NoOp

    | GeneralMsg msg ->
        let (generalModel, externalMsg) = Widgets.General.update msg model.General

        let externalMsg =
            match externalMsg with
            | Widgets.General.NoOp -> NoOp
            | Widgets.General.Reset -> Reset
            | Widgets.General.ExternalMessage.Share -> Share
            | Widgets.General.ExternalMessage.ShareToGist -> ShareToGist


        { model with General = generalModel }, Cmd.none, externalMsg

    | ToggleWidget id ->
        let newWidgetsState =
            if model.WidgetsState.Contains id then
                model.WidgetsState.Remove id
            else
                model.WidgetsState.Add id

        { model with WidgetsState = newWidgetsState }, Cmd.none, NoOp

    | ToggleState ->
        { model with IsExpanded = not model.IsExpanded }, Cmd.none, NoOp

    | UpdateStats stats ->
        { model with Statistics = stats }, Cmd.none, NoOp

open Fable.React
open Fable.React.Props
open Fulma
open Fable.FontAwesome

let private renderExpandedWidgets (states : Set<string>) dispatch (title, icon, widget, maxHeight) =
    let baseView headerIcon content =
        Card.card [ ]
            [ Card.header [ Common.Props [ OnClick (fun _ -> ToggleWidget title |> dispatch ) ] ]
                [ Card.Header.title [ ]
                    [ Icon.icon [ Icon.Props [ Style [ MarginRight ".5em" ] ] ]
                        [ Fa.i [ icon; Fa.Size Fa.FaLarge ] [] ]
                      str title ]
                  Card.Header.icon [ ]
                    [ Icon.icon [ ] [ Fa.i [ headerIcon ; Fa.Size Fa.FaLarge ] [] ] ] ]
              ofOption content ]

    if states.Contains title then
            baseView Fa.Solid.AngleDown None
        else
            let props =
                match maxHeight with
                | Some maxHeight ->
                    [ Props [ Style [ MaxHeight maxHeight
                                      OverflowY "auto" ] ] ]
                | None -> [ ]
            baseView Fa.Solid.AngleUp (Some (Card.content props [ widget ]))


let renderCollapsedWidgets dispatch (title, icon, widget, maxHeight) =
    let props =
        match maxHeight with
        | Some maxHeight ->
            [ Props [ Style [ MaxHeight maxHeight
                              OverflowY "auto" ] ] ]
        | None -> [ ]

    div [ Class "item" ]
        [ Icon.icon [ Icon.Size IsLarge ]
            [ Fa.i [ icon; Fa.Size Fa.FaLarge ] [] ]
          Card.card [ CustomClass "item-content" ]
            [ Card.header [ Common.Props [ OnClick (fun _ -> ToggleWidget title |> dispatch ) ] ]
                [ Card.Header.title [ ]
                    [ str title ] ]
              Card.content props
                [ widget ] ] ]

let private renderWidgets model dispatch (title, icon, widget, maxHeight) =
    match model.IsExpanded with
    | true ->
        renderExpandedWidgets model.WidgetsState dispatch (title, icon, widget, maxHeight)
    | false ->
        renderCollapsedWidgets dispatch (title, icon, widget, maxHeight)

let private collapseButton dispatch =
    Card.card [ Props [ OnClick (fun _ -> dispatch ToggleState ) ] ]
        [ Card.header [ ]
            [ Card.Header.title [ ] [ str "Collapse sidebar" ]
              Card.Header.icon [ ]
                [ Icon.icon [ ] [ Fa.i [ Fa.Solid.AngleDoubleLeft; Fa.Size Fa.FaLarge ] [] ] ] ] ]

let private sidebarContainer dispatch sections =
    div [ Class "sidebar is-expanded" ]
        [ div [ Class "brand" ]
            [ img [ Src "img/fable-ionide.png" ]
              Heading.h4 [ ]
                [ str "Fable REPL" ] ]
          div [ Class "widgets-list" ]
            sections
          collapseButton dispatch ]

let private expandButton dispatch =
    Card.card [ Props [ OnClick (fun _ -> dispatch ToggleState ) ] ]
        [ Card.header [ ]
            [ Card.Header.icon [ ]
                [ Icon.icon [ ]
                    [ Fa.i [ Fa.Solid.AngleDoubleRight; Fa.Size Fa.FaLarge ] [] ] ] ] ]

let view (model: Model) (actionAreaExpanded, actionAreaCollapsed) dispatch =
    let widgets =
        [ "General", Fa.Solid.Th, Widgets.General.view model.Options.GistToken model.General (GeneralMsg >> dispatch), None
          "Samples", Fa.Solid.Book, Widgets.Samples.view model.Samples (SamplesMsg >> dispatch), Some "500px"
          "Options", Fa.Solid.Cog, Widgets.Options.view model.Options (OptionsMsg >> dispatch), None
          "Statistics", Fa.Regular.Clock, Widgets.Stats.view model.Statistics, None
          "About", Fa.Solid.Info, Widgets.About.view, None ]
        |> List.map (renderWidgets model dispatch)

    if model.IsExpanded then
        sidebarContainer dispatch (actionAreaExpanded::widgets)
    else
        div [ Class "sidebar is-collapsed" ]
            [ div [ Class "brand" ]
                [ img [ Src "img/fable-ionide.png" ] ]
              div [ Class "widgets-list" ]
                (actionAreaCollapsed::widgets)
              expandButton dispatch ]

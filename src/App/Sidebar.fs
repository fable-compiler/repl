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
    | LoadSample of string * string
    | NoOp
    | Reset
    | Share

let init sampleUrl =
    let samplesModel, samplesCmd = Widgets.Samples.init sampleUrl
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
            | Widgets.Samples.LoadSample (fsharpCode, htmlCode) -> LoadSample (fsharpCode, htmlCode)

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

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma
open Fulma.FontAwesome

let private renderExpandedWidgets (states : Set<string>) dispatch (title, icon, widget, maxHeight) =
    let baseView headerIcon content =
        Card.card [ ]
            [ Card.header [ Common.Props [ OnClick (fun _ -> ToggleWidget title |> dispatch ) ] ]
                [ Card.Header.title [ ]
                    [ Icon.faIcon [ Icon.Props [ Style [ MarginRight ".5em" ] ] ]
                        [ Fa.faLg
                          Fa.icon icon ]
                      str title ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ] [ Fa.faLg; Fa.icon headerIcon] ] ]
              ofOption content ]

    if states.Contains title then
            baseView Fa.I.AngleDown None
        else
            let props =
                match maxHeight with
                | Some maxHeight ->
                    [ Props [ Style [ MaxHeight maxHeight
                                      OverflowY "auto" ] ] ]
                | None -> [ ]
            baseView Fa.I.AngleUp (Some (Card.content props [ widget ]))


let renderCollapsedWidgets dispatch (title, icon, widget, maxHeight) =
    div [ Class "item" ]
        [ Icon.faIcon [ Icon.Size IsLarge ]
            [ Fa.faLg
              Fa.icon icon ]
          Card.card [ CustomClass "item-content" ]
            [ Card.header [ Common.Props [ OnClick (fun _ -> ToggleWidget title |> dispatch ) ] ]
                [ Card.Header.title [ ]
                    [ str title ] ]
              Card.content [ ]
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
                [ Icon.faIcon [ ] [ Fa.faLg; Fa.icon Fa.I.AngleDoubleLeft] ] ] ]

let private sidebarContainer dispatch sections =
    div [ Class "sidebar is-expanded" ]
        [ div [ Class "widgets-list" ]
            sections
          collapseButton dispatch ]

let private expandButton dispatch =
    Card.card [ Props [ OnClick (fun _ -> dispatch ToggleState ) ] ]
        [ Card.header [ ]
            [ Card.Header.icon [ ]
                [ Icon.faIcon [ ]
                    [ Fa.faLg
                      Fa.icon Fa.I.AngleDoubleRight ] ] ] ]

let view (model: Model) dispatch =
    let widgets =
        [ "General", Fa.I.Th, Widgets.General.view model.General (GeneralMsg >> dispatch), None
          "Samples", Fa.I.Book, Widgets.Samples.view model.Samples (SamplesMsg >> dispatch), Some "500px"
          "Options", Fa.I.Cog, Widgets.Options.view model.Options (OptionsMsg >> dispatch), None
          "Statistics", Fa.I.ClockO, Widgets.Stats.view model.Statistics, None
          "About", Fa.I.Info, Widgets.About.view, None ]
        |> List.map (renderWidgets model dispatch)

    if model.IsExpanded then
        sidebarContainer dispatch widgets
    else
        div [ Class "sidebar is-collapse" ]
            [ div [ Class "widgets-list" ]
                widgets
              expandButton dispatch ]

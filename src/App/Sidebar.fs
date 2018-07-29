module Fable.Repl.Sidebar

open Elmish

type Model =
    { IsExpanded : bool
      WidgetsState : Set<string>
      Samples : Widgets.Samples.Model
      Options: Widgets.Options.Model }

type Msg =
    | SamplesMsg of Widgets.Samples.Msg
    | OptionsMsg of Widgets.Options.Msg
    | ToggleWidget of string
    | ToggleState

type ExternalMsg =
    | LoadSample of string * string
    | NoOp

let init _ =
    { IsExpanded = false
      WidgetsState = Set.empty
      Samples = Widgets.Samples.init ()
      Options = Widgets.Options.init () }

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

    | ToggleWidget id ->
        let newWidgetsState =
            if model.WidgetsState.Contains id then
                model.WidgetsState.Remove id
            else
                model.WidgetsState.Add id

        { model with WidgetsState = newWidgetsState }, Cmd.none, NoOp

    | ToggleState ->
        printfn "togle state triggerd"
        { model with IsExpanded = not model.IsExpanded }, Cmd.none, NoOp

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
        [ yield! sections
          yield div [ Style [ Flex "1"
                              BackgroundColor "white" ] ] [ ]
          yield collapseButton dispatch ]

let private expandButton dispatch =
    Card.card [ Props [ OnClick (fun _ -> dispatch ToggleState ) ] ]
        [ Icon.faIcon [ Icon.Size IsLarge ]
            [ Fa.faLg
              Fa.icon Fa.I.AngleDoubleRight ] ]

let view (model: Model) dispatch =
    let widgets =
        [ "Samples", Fa.I.Book, Widgets.Samples.view model.Samples (SamplesMsg >> dispatch), Some "500px"
          "Options", Fa.I.Cog, Widgets.Options.view model.Options (OptionsMsg >> dispatch), None
          "About", Fa.I.Info, Widgets.About.view, None ]
        |> List.map (renderWidgets model dispatch)

    if model.IsExpanded then
        sidebarContainer dispatch widgets
    else
        div [ Class "sidebar is-collapse" ]
            [ yield! widgets
              yield div [ Style [ Flex "1"
                                  BackgroundColor "white" ] ] [ ]
              yield expandButton dispatch ]

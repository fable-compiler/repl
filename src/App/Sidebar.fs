module Sidebar

open Elmish

type Model =
    { IsExpanded : bool
      WidgetsState : Set<string>
      Samples : Widgets.Samples.Model }

type Msg =
    | SamplesMsg of Widgets.Samples.Msg
    | ToggleWidget of string

type ExternalMsg =
    | LoadSample of string * string
    | NoOp

let init _ =
    { IsExpanded = false
      WidgetsState = Set.empty
      Samples = Widgets.Samples.init () }

let update msg model =
    match msg with
    | SamplesMsg msg ->
        let (samplesModel, samplesCmd, externalMsg) = Widgets.Samples.update msg model.Samples

        let extraMsg =
            match externalMsg with
            | Widgets.Samples.NoOp -> NoOp
            | Widgets.Samples.LoadSample (fsharpCode, htmlCode) -> LoadSample (fsharpCode, htmlCode)

        { model with Samples = samplesModel }, Cmd.map SamplesMsg samplesCmd, extraMsg

    | ToggleWidget id ->
        let newWidgetsState =
            if model.WidgetsState.Contains id then
                model.WidgetsState.Remove id
            else
                model.WidgetsState.Add id

        { model with WidgetsState = newWidgetsState }, Cmd.none, NoOp

open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fulma.Components
open Fulma.Elements
open Fulma.Extra.FontAwesome

let private renderWidgets (states : Set<string>) dispatch (title, widget) =
    let baseView headerIcon content =
        Card.card [ ]
            [ Card.header [ Card.Header.props [ OnClick (fun _ -> ToggleWidget title |> dispatch ) ] ]
                [ Card.Header.title [ ] [ str title ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ] [ Fa.faLg; Fa.icon headerIcon] ] ]
              ofOption content ]

    if states.Contains title then
        baseView Fa.I.AngleDown None
    else
        baseView Fa.I.AngleUp (Some (Card.content [ ] [ widget ]))

let view (model: Model) dispatch =
    if model.IsExpanded then
        [ "Samples", Widgets.Samples.view model.Samples (SamplesMsg >> dispatch)
          "About", Widgets.About.view ]
        |> List.map (renderWidgets model.WidgetsState dispatch)
        |> div [ ClassName "sidebar" ]
        |> Some
    else
        None
    |> ofOption

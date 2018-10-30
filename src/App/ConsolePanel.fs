module Fable.Repl.ConsolePanel

open Fable.Import
open Fable.Helpers.React
open Fable.Helpers.React.Props
open Fable.Core.JsInterop
open Fulma
open Fulma.FontAwesome

[<RequireQualifiedAccess>]
type Log =
    | Info of string
    | Error of string
    | Warn of string
    | Separator

type ConsolePanelProps =
    { Logs : Log list }

type ConsolePanelState =
    { IsExpanded : bool }

type ConsolePanel(props) =
    inherit React.Component<ConsolePanelProps, ConsolePanelState>(props)
    do base.setInitState({ IsExpanded = true })

    let mutable consoleEnd : Browser.HTMLElement = null
    let mutable autoScroll = true

    member __.scroolToBottom() =
        if autoScroll then
            let scrollOptions =
                createObj [
                    "behavior" ==> "smooth"
                ]

            consoleEnd?scrollIntoView$(scrollOptions)

    override this.componentDidUpdate(_prevProps, _prevState) =
        this.scroolToBottom()

    override this.componentDidMount() =
        this.scroolToBottom()

    member __.ShowLog (icon : Fa.I.FontAwesomeIcons option) color content =
        let colorClass = ofColor color

        div [ Class ("scrollable-panel-body-row " + colorClass) ]
            [ Icon.faIcon [ Icon.Size IsSmall
                            Icon.CustomClass colorClass ]
                [ if icon.IsSome then
                    yield Fa.icon icon.Value ]
              span [ Class "scrollable-panel-body-row-description" ]
                [ str content ] ]

    member __.ShowSeparator =
        div [ Class "scrollable-panel-body-row is-info"
              Style [ JustifyContent "center" ] ]
            [ str "Iframe loaded" ]

    member __.OnContainerScroll( ev : React.WheelEvent) =
        let elt = ev.currentTarget :?> Browser.HTMLDivElement
        let isAtBottom = elt.scrollHeight - elt.scrollTop = elt.clientHeight
        // If autoScroll is activated
        if autoScroll && not isAtBottom then
            autoScroll <- false
        else if not autoScroll && isAtBottom then
            autoScroll <- true

    member this.body =
        let bodyDisplay =
            if this.state.IsExpanded then
                ""
            else
                "is-hidden"

        div [ Class ("scrollable-panel-body " + bodyDisplay)
              OnWheel this.OnContainerScroll ]
            [ for log in this.props.Logs do
                match log with
                | Log.Info content ->
                    yield this.ShowLog None IColor.NoColor content
                | Log.Warn content ->
                    yield this.ShowLog (Some Fa.I.ExclamationTriangle) IColor.IsWarning content
                | Log.Error content ->
                    yield this.ShowLog (Some Fa.I.TimesCircleO) IColor.IsDanger content
                | Log.Separator ->
                    yield this.ShowSeparator
              yield div [ Ref (fun el ->
                            consoleEnd <- el :?> Browser.HTMLElement
                            Browser.window?test <- el ) ]
                [ ] ]

    member this.ToggleDisplay _ev =
        this.setState(fun s _ -> { s with IsExpanded = not s.IsExpanded })

    override this.render() =
        let headerIcon =
            if this.state.IsExpanded then
                Fa.I.AngleDown
            else
                Fa.I.AngleUp

        div [ Class "scrollable-panel is-console" ]
            [ div [ Class "scrollable-panel-header"
                    OnClick this.ToggleDisplay ]
                [ div [ Class "scrollable-panel-header-icon" ]
                    [ Icon.faIcon [ ]
                        [ Fa.faLg
                          Fa.icon headerIcon ] ]
                  div [ Class "scrollable-panel-header-title" ]
                    [ str "Console" ]
                  div [ Class "scrollable-panel-header-icon" ]
                    [ Icon.faIcon [ ]
                        [ Fa.faLg
                          Fa.icon headerIcon ] ] ]
              this.body ]

let inline view logs =
    ofType<ConsolePanel,_,_> { Logs = logs } [ ]

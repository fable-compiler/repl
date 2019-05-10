module Fable.Repl.ConsolePanel

open Fable.Core.JsInterop
open Fable.React
open Fable.React.Props
open Fable.FontAwesome
open Browser.Types
open Browser
open Fulma

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
    inherit Component<ConsolePanelProps, ConsolePanelState>(props)
    do base.setInitState({ IsExpanded = true })

    let mutable consoleEnd : HTMLElement = null
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

    member __.ShowLog icon color content =
        let colorClass = ofColor color

        div [ Class ("scrollable-panel-body-row " + colorClass) ]
            [ Icon.icon [ Icon.Size IsSmall
                          Icon.CustomClass colorClass ]
                [ match icon with
                  | Some icon -> yield Fa.i [icon] []
                  | None -> () ]
              span [ Class "scrollable-panel-body-row-description" ]
                [ str content ] ]

    member __.ShowSeparator =
        div [ Class "scrollable-panel-body-row is-info"
              Style [ JustifyContent "center" ] ]
            [ str "Iframe loaded" ]

    member __.OnContainerScroll( ev : WheelEvent) =
        let elt = ev.currentTarget :?> HTMLDivElement
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
                    yield this.ShowLog (Some Fa.Solid.ExclamationTriangle) IColor.IsWarning content
                | Log.Error content ->
                    yield this.ShowLog (Some Fa.Regular.TimesCircle) IColor.IsDanger content
                | Log.Separator ->
                    yield this.ShowSeparator
              yield div [ Ref (fun el ->
                            consoleEnd <- el :?> HTMLElement
                            window?test <- el ) ]
                [ ] ]

    member this.ToggleDisplay _ev =
        this.setState(fun s _ -> { s with IsExpanded = not s.IsExpanded })

    override this.render() =
        let headerIcon =
            if this.state.IsExpanded then
                Fa.Solid.AngleDown
            else
                Fa.Solid.AngleUp

        div [ Class "scrollable-panel is-console" ]
            [ div [ Class "scrollable-panel-header"
                    OnClick this.ToggleDisplay ]
                [ div [ Class "scrollable-panel-header-icon" ]
                    [ Icon.icon [ ]
                        [ Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] [] ] ]
                  div [ Class "scrollable-panel-header-title" ]
                    [ str "Console" ]
                  div [ Class "scrollable-panel-header-icon" ]
                    [ Icon.icon [ ]
                        [ Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] [] ] ] ]
              this.body ]

let inline view logs =
    ofType<ConsolePanel,_,_> { Logs = logs } [ ]

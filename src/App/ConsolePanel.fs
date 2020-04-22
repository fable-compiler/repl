module Fable.Repl.ConsolePanel

open Fable.Core.JsInterop
open Fable.FontAwesome
open Browser.Types
open Browser
open Feliz
open Feliz.Bulma

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

let renderShowLog faIcon colorClass (content : string) =
    Html.div [
        prop.className [ 
            "scrollable-panel-body-row"
            colorClass
        ]
        prop.children [
            Bulma.icon [
                icon.isSmall
                prop.className colorClass
                prop.children [
                    match faIcon with
                    | Some faIcon -> 
                        Fa.i [ faIcon ] [ ]
                    | None -> 
                        Html.none
                ]
            ]

            Html.span [
                prop.className "scrollable-panel-body-row-description"
                prop.text content
            ]
        ]
    ]

let renderShowSeparator =
    Html.div [
        prop.className "scrollable-panel-body-row is-info"
        prop.style [
            style.justifyContent.center
        ]
        prop.text "Iframe loaded"
    ]

let renderBody (isExpanded : bool) (logs : Log list) (setConsoleEnd : HTMLElement -> unit) onContainerScroll =
    
    Html.div [
        prop.className "scrollable-panel-body"
        if not isExpanded then
            helpers.isHidden
        prop.onWheel onContainerScroll
        prop.children [
            for log in logs do
                match log with
                | Log.Info content ->
                    renderShowLog None "" content
                | Log.Warn content ->
                    renderShowLog (Some Fa.Solid.ExclamationTriangle) "is-warning" content
                | Log.Error content ->
                    renderShowLog (Some Fa.Regular.TimesCircle) "is-danger" content
                | Log.Separator ->
                    renderShowSeparator
            
            Html.div [ 
                prop.ref (fun el ->
                    setConsoleEnd(el :?> HTMLElement)
                ) 
            ]
        ]
    ]        


let consolePanel = 
    React.functionComponent(fun (props : ConsolePanelProps) ->
        let (isExpanded, setIsExpanded) = React.useState (true)
        let (consoleEnd, setConsoleEnd) : (HTMLElement * (HTMLElement -> unit)) = React.useState (null)
        let (autoScroll, setAutoScroll) = React.useState (true)

        let onContainerScroll (ev : WheelEvent) =
            let elt = ev.currentTarget :?> HTMLDivElement
            let isAtBottom = elt.scrollHeight - elt.scrollTop = elt.clientHeight
            // If autoScroll is activated
            if autoScroll && not isAtBottom then
                setAutoScroll false
            else if not autoScroll && isAtBottom then
                setAutoScroll true

        React.useEffect(fun () ->
            if autoScroll then
                let scrollOptions =
                    createObj [
                        "behavior" ==> "smooth"
                    ]

                if not (isNull consoleEnd) then
                    consoleEnd?scrollIntoView$(scrollOptions)
            
        , [| box props.Logs |]) 

        let headerIcon =
            if isExpanded then
                Fa.Solid.AngleDown
            else
                Fa.Solid.AngleUp

        Html.div [
            prop.className "scrollable-panel is-console"
            prop.children [
                Html.div [ 
                    prop.className "scrollable-panel-header"  
                    prop.onClick (fun _ -> setIsExpanded (not isExpanded))
                    prop.children [
                        Html.div [
                            prop.className "scrollable-panel-header-icon"
                            prop.children [
                                Bulma.icon [
                                    Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] []
                                ]
                            ]
                        ]

                        Html.div [
                            prop.className "scrollable-panel-header-title"
                            prop.text "Console"
                        ]

                        Html.div [
                            prop.className "scrollable-panel-header-icon"
                            prop.children [
                                Bulma.icon [
                                    Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] []
                                ]
                            ]
                        ]
                    ]
                ]

                renderBody isExpanded props.Logs setConsoleEnd onContainerScroll
            ]
        ]
    )

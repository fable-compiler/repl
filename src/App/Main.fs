module Main

open System
open Fable.Core.JsInterop
open Fable.Import
open Fulma.Components
open Fulma.Elements
open Fulma.Extra.FontAwesome
open Fable.Import.Browser
open Mouse

importSideEffects "./scss/main.scss"

let loadState(): string * string = importMember "./util.js"
let saveState(code: string, html: string): unit = importMember "./util.js"

let editor = Fable.Editor.Main.fableEditor

// We store a reference to the editor so we can access it
// Later we will probably wrap it inside a Cmd implementation
// For now, it's good enough for some proto
let mutable editorFsharp = Unchecked.defaultof<monaco.editor.IStandaloneCodeEditor>

let mutable editorHtml = Unchecked.defaultof<monaco.editor.IStandaloneCodeEditor>

let mutable editorCode = Unchecked.defaultof<monaco.editor.IStandaloneCodeEditor>

type State =
    | Compiling
    | Compiled
    | NoState

type ActiveTab =
    | CodeTab
    | LiveTab

type DragTarget =
    | NoTarget
    | EditorSplitter
    | PanelSplitter

type EditorCollapse =
    | BothExtended
    | HtmlOnly
    | FSharpOnly

type Model =
    { State : State
      Url : string
      ActiveTab : ActiveTab
      CodeES2015: string
      CodeAMD : string
      DragTarget : DragTarget
      EditorSplitRatio : float
      PanelSplitRatio : float
      EditorCollapse : EditorCollapse
      Sidebar : Sidebar.Model }

type Msg =
    | StartCompile
    | EndCompile of string * string // codeES2015, codeAMD
    | SetActiveTab of ActiveTab
    | SetUrl of string
    | EditorDragStarted
    | EditorDrag of Position
    | EditorDragEnded
    | PanelDragStarted
    | PanelDrag of Position
    | PanelDragEnded
    | MouseUp
    | MouseMove of Mouse.Position
    | ToggleFsharpCollapse
    | ToggleHtmlCollapse
    | ToggleSidebar
    | FailEditorsLayout of exn
    | WindowResize
    | SidebarMsg of Sidebar.Msg

open Elmish

let generateHtmlUrl jsCode =
    let fsCode = editorFsharp.getValue()
    let htmlCode = editorHtml.getValue()
    saveState(fsCode, htmlCode)
    let jsUrl = Generator.generateBlobURL jsCode Generator.JavaScript
    Generator.generateHtmlBlobUrl htmlCode jsUrl

let clamp min max value =
    if value >= max then
        max
    elif value <= min then
        min
    else
        value

let updateLayouts _ =
    window.setTimeout((fun _ ->
        editorFsharp.layout()
        editorHtml.layout()), 100) |> ignore

let update msg model =
    match msg with
    | StartCompile ->
        { model with State = Compiling }, Cmd.performFunc editor.CompileAndRunCurrentResults editorFsharp EndCompile

    | EndCompile (codeES2015, codeAMD) ->
        { model with State = Compiled
                     CodeES2015 = codeES2015
                     CodeAMD = codeAMD }, Cmd.batch [ Cmd.performFunc generateHtmlUrl codeAMD SetUrl ]

    | SetUrl newUrl ->
        { model with Url = newUrl }, Cmd.none

    | SetActiveTab newTab ->
        { model with ActiveTab = newTab }, Cmd.none

    | EditorDragStarted ->
        { model with DragTarget = EditorSplitter }, Cmd.none

    | EditorDragEnded ->
        { model with DragTarget = NoTarget } , Cmd.none

    | MouseUp ->
        let cmd =
            match model.DragTarget with
            | NoTarget -> Cmd.none
            | EditorSplitter ->
                Cmd.ofMsg EditorDragEnded
            | PanelSplitter ->
                Cmd.ofMsg PanelDragEnded

        model, cmd

    | MouseMove position ->
        let cmd =
            match model.DragTarget with
            | NoTarget -> Cmd.none
            | EditorSplitter ->
                Cmd.ofMsg (EditorDrag position)
            | PanelSplitter ->
                Cmd.ofMsg (PanelDrag position)

        model, cmd

    | EditorDrag position ->
        { model with EditorSplitRatio =
                       position
                       |> (fun p -> p.Y - 54.)
                       |> (fun h -> h / (window.innerHeight - 54.))
                       |> clamp 0.3 0.7 }, Cmd.none

    | PanelDragStarted ->
        { model with DragTarget = PanelSplitter }, Cmd.none

    | PanelDragEnded ->
        { model with DragTarget = NoTarget }, Cmd.none

    | PanelDrag position ->
        let offset = if model.Sidebar.IsExpanded then 250. else 0.
        { model with PanelSplitRatio =
                        position
                        |> (fun p -> p.X - offset)
                        |> (fun w -> w / (window.innerWidth - offset))
                        |> clamp 0.2 0.8 }, Cmd.none

    | ToggleFsharpCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> HtmlOnly
            | FSharpOnly -> HtmlOnly
            | HtmlOnly -> BothExtended

        { model with EditorCollapse = newState }, Cmd.attemptFunc updateLayouts () FailEditorsLayout

    | ToggleHtmlCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> FSharpOnly
            | FSharpOnly -> BothExtended
            | HtmlOnly -> FSharpOnly

        { model with EditorCollapse = newState }, Cmd.attemptFunc updateLayouts () FailEditorsLayout

    | ToggleSidebar ->
        let sideBar = { model.Sidebar with IsExpanded = not model.Sidebar.IsExpanded }
        { model with Sidebar = sideBar }, Cmd.attemptFunc updateLayouts () FailEditorsLayout

    | WindowResize ->
        model, Cmd.attemptFunc updateLayouts () FailEditorsLayout

    | FailEditorsLayout error ->
        console.log error.Message
        model, Cmd.none

    | SidebarMsg msg ->
        let (subModel, cmd, externalMsg) = Sidebar.update msg model.Sidebar

        match externalMsg with
        | Sidebar.NoOp -> ()
        | Sidebar.LoadSample (fsharpCode, htmlCode) ->
            editorFsharp.setValue fsharpCode
            // Force the FCS to parse the new F# code
            editor.ParseEditor (editorFsharp.getModel())
            editorHtml.setValue htmlCode

        { model with Sidebar = subModel }, Cmd.map SidebarMsg cmd

let init _ = { State = NoState
               Url = ""
               ActiveTab = LiveTab
               CodeES2015 = ""
               CodeAMD = ""
               DragTarget = NoTarget
               EditorSplitRatio = 0.6
               PanelSplitRatio = 0.5
               EditorCollapse = BothExtended
               Sidebar = Sidebar.init () }, Cmd.batch [ Cmd.ups MouseUp
                                                        Cmd.move MouseMove
                                                        Cmd.iframeMessage MouseMove MouseUp ]

open Fable.Helpers.React
open Fable.Helpers.React.Props

let private numberToPercent number =
    string (number * 100.) + "%"

let private menubar (model: Model) dispatch =
    let compileIcon =
        if model.State = Compiling then
            Icon.faIcon [ Icon.isSmall ]
                [ Fa.icon Fa.I.Spinner
                  Fa.spin ]
        else
            Icon.faIcon [ Icon.isSmall ]
                [ Fa.icon Fa.I.Play ]
    nav [ ClassName "navbar is-fixed-top is-dark" ]
        [ Navbar.brand_div [ ]
            [ div [ ClassName "navbar-burger"
                    Style [ Display "block" ]
                    OnClick (fun _ -> dispatch ToggleSidebar) ] // Force the burger to be always visible
                [ span [ ] [ ]
                  span [ ] [ ]
                  span [ ] [ ] ]
              Navbar.item_div [ ]
                [ img [ Src "img/fable_ionide.png" ] ] ]
          Navbar.menu [ ]
            [ Navbar.item_div [ ]
                [ Button.button_btn [ Button.onClick (fun _ -> dispatch StartCompile) ]
                    [ compileIcon
                      span [ ]
                        [ str "Compile" ] ] ]
              Navbar.item_div [ Navbar.Item.props [ Style [ Color "white" ] ] ]
                [ str "You can also press Alt+Enter from the editor" ] ] ]

let private editorArea model dispatch =
    let isDragging =
        match model.DragTarget with
        | EditorSplitter
        | PanelSplitter -> true
        | NoTarget -> false

    let fsharpAngle, htmlAngle =
        match model.EditorCollapse with
        | BothExtended -> Fa.I.Compress, Fa.I.Compress
        | FSharpOnly -> Fa.I.Compress, Fa.I.Expand
        | HtmlOnly -> Fa.I.Expand, Fa.I.Compress

    let fsharpDisplay, htmlDisplay =
        match model.EditorCollapse with
        | BothExtended -> "block", "block"
        | FSharpOnly -> "block", "none"
        | HtmlOnly -> "none", "block"

    let fsharpHeight, htmlHeight =
        match model.EditorCollapse with
        | BothExtended ->
            numberToPercent model.EditorSplitRatio, numberToPercent (1. - model.EditorSplitRatio)
        | FSharpOnly ->
            "calc(100% - 42px)", "38px" // 46px = 42px + 4px (card-header height + vertical-resize height)
        | HtmlOnly ->
            "38px", "calc(100% - 42px)"

    div [ ClassName "editor-container"
          Style [ Width (numberToPercent model.PanelSplitRatio) ] ]
        [ Card.card [ Card.props [ Style [ Height ("calc("+ fsharpHeight + " - 4px)") ] ] ] // We remove 4px to compensate the vertical-resize height
            [ Card.header [ Card.Header.props [ OnClick (fun _ -> dispatch ToggleFsharpCollapse )] ]
                [ Card.Header.title [ ]
                    [ str "F#" ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ]
                        [ Fa.icon fsharpAngle
                          Fa.faLg ] ] ]
              Card.content [ Card.props [ Style [ Display fsharpDisplay ] ] ]
                [ div [ Key "editor"
                        ClassName "editor-fsharp"
                        OnKeyDown (fun ev ->
                          if ev.altKey && ev.key = "Enter" then
                              dispatch StartCompile)
                        Ref (fun element ->
                              if not (isNull element) then
                                if element.childElementCount = 0. then
                                    editorFsharp <- editor.CreateFSharpEditor (element :?> Browser.HTMLElement)
                                    let code, _ = loadState()
                                    editorFsharp.setValue(code)
                                    editor.ParseEditor (editorFsharp.getModel())
                                else
                                    if isDragging then
                                        editorFsharp.layout()
                          ) ] [ ] ] ]
          div [ ClassName "vertical-resize"
                OnMouseDown (fun _ -> dispatch EditorDragStarted) ]
              [ ]
          Card.card [ Card.props [ Style [ Height htmlHeight ] ] ]
            [ Card.header [ Card.Header.props [ OnClick (fun _ -> dispatch ToggleHtmlCollapse )] ]
                [ Card.Header.title [ ]
                    [ str "Html" ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ]
                        [ Fa.icon htmlAngle
                          Fa.faLg ] ] ]
              Card.content [ Card.props [ Style [ Display htmlDisplay ] ] ]
                [ div [ ClassName "editor-html"
                        OnKeyDown (fun ev ->
                          if ev.altKey && ev.key = "Enter" then
                              dispatch StartCompile)
                        Ref (fun element ->
                                if not (isNull element) then
                                    if element.childElementCount = 0. then
                                        let options = jsOptions<monaco.editor.IEditorConstructionOptions>(fun o ->
                                            let minimapOptions =  jsOptions<monaco.editor.IEditorMinimapOptions>(fun oMinimap ->
                                                oMinimap.enabled <- Some false
                                            )

                                            o.language <- Some "html"
                                            o.fontSize <- Some 14.
                                            o.theme <- Some "vs-dark"
                                            o.value <- Some Generator.defaultHtmlCode
                                            o.minimap <- Some minimapOptions
                                        )

                                        editorHtml <- monaco.editor.Globals.create((element :?> Browser.HTMLElement), options)
                                        let _, html = loadState()
                                        editorHtml.setValue(html)
                                    else
                                        if isDragging then
                                            editorHtml.layout()
                        ) ] [ ] ] ] ]

let private outputTabs (activeTab : ActiveTab) dispatch =
    Tabs.tabs [ Tabs.isCentered
                Tabs.isMedium ]
        [ Tabs.tab [ if (activeTab = LiveTab) then
                        yield Tabs.Tab.isActive
                     yield Tabs.Tab.props [
                         OnClick (fun _ -> SetActiveTab LiveTab |> dispatch)
                     ] ]
            [ a [ ] [ str "Live sample" ] ]
          Tabs.tab [ if (activeTab = CodeTab) then
                        yield Tabs.Tab.isActive
                     yield Tabs.Tab.props [
                         OnClick (fun _ -> SetActiveTab CodeTab |> dispatch)
                     ] ]
            [ a [ ] [ str "Code" ] ] ]

let private toggleDisplay cond =
    if cond then
        ""
    else
        "is-hidden"

let private viewIframe isShown url =
    iframe [ Src url
             ClassName (toggleDisplay isShown) ]
        [ ]

let private viewCodeEditor isShown code =
    div [ ClassName ("editor-output " + toggleDisplay isShown)
          Ref (fun element ->
                    if not (isNull element) then
                        if element.childElementCount = 0. then
                            let options = jsOptions<monaco.editor.IEditorConstructionOptions>(fun o ->
                                let minimapOptions =  jsOptions<monaco.editor.IEditorMinimapOptions>(fun oMinimap ->
                                    oMinimap.enabled <- Some false
                                )

                                o.language <- Some "javascript"
                                o.fontSize <- Some 14.
                                o.theme <- Some "vs-dark"
                                o.minimap <- Some minimapOptions
                            )

                            editorCode <- monaco.editor.Globals.create((element :?> Browser.HTMLElement), options)

                        editorCode.setValue(code)
                        // This is needed because Monaco don't itialize well when being hidden by default
                        // I believe then aren't reponsive by default and recalculate every position as needed...
                        editorCode.layout()
            ) ]
        [ ]

let private outputArea model dispatch =
    let content =
        match model.State with
        | Compiling ->
            [ str "Compile in progress" ]
        | Compiled ->
            [ outputTabs model.ActiveTab dispatch
              viewIframe (model.ActiveTab = LiveTab) model.Url
              viewCodeEditor (model.ActiveTab = CodeTab) model.CodeES2015 ]
        | NoState ->
            [ br [ ]
              div [ ClassName "has-text-centered"
                    Style [ Width "100%" ] ]
                [ Heading.h4 [ Heading.isSubtitle ]
                    [ str "You need to compile an application first" ] ] ]

    div [ ClassName "output-container"
          Style [ Width (numberToPercent (1. - model.PanelSplitRatio)) ] ]
        content

let private view (model: Model) dispatch =
    let isDragging =
        match model.DragTarget with
        | EditorSplitter
        | PanelSplitter -> true
        | NoTarget -> false
    div [ classList [ "is-unselectable", isDragging ] ]
        [ menubar model dispatch
          div [ ClassName "page-content" ]
            [ Sidebar.view model.Sidebar (SidebarMsg >> dispatch)
              div [ ClassName "main-content" ]
                [ div [ ClassName "page-content" ]
                    [ editorArea model dispatch
                      div [ ClassName "horizontal-resize"
                            OnMouseDown (fun _ -> dispatch PanelDragStarted) ]
                        [ ]
                      outputArea model dispatch ] ] ] ]

open Elmish.React

let private resizeSubscription _ =
    let sub dispatch =
        window.addEventListener_resize(Func<_,_>(fun _ ->
            dispatch WindowResize
            null
        ))

    Cmd.ofSub sub

Program.mkProgram init update view
|> Program.withSubscription resizeSubscription
// |> Program.withSubscription (Notifications.subscription NotificationsMsg)
|> Program.withReact "app-container"
|> Program.run

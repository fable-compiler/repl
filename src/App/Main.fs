module Fable.Repl.Main

open Fable.Core.JsInterop
open Fable.Import
open Fulma
open Fulma.FontAwesome
open Fulma.Extensions
open Elmish
open Shared
open Editor
open Mouse

let private loadState(_key: string): string * string = importMember "./util.js"
let private saveState(_key: string, _code: string, _html: string): unit = importMember "./util.js"

type IEditor = monaco.editor.IStandaloneCodeEditor

type State =
    | Loading
    | Errored of msg: string
    | Idle
    | Compiling
    | Compiled
    member this.HasError =
        match this with
        | Errored _ -> true
        | _ -> false
    member this.ErrorMessage =
        match this with
        | Errored msg -> msg
        | _ -> ""

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
    { FSharpEditor: IEditor
      HtmlEditor: IEditor
      JsEditor: IEditor
      Worker: ObservableWorker<WorkerAnswer>
      State: State
      Url : string
      ActiveTab : ActiveTab
      CodeES2015: string
      DragTarget : DragTarget
      EditorSplitRatio : float
      PanelSplitRatio : float
      EditorCollapse : EditorCollapse
      Sidebar : Sidebar.Model }

type Msg =
    | SetFSharpEditor of IEditor
    | SetHmlEditor of IEditor
    | SetJsEditor of IEditor
    | LoadSuccess
    | LoadFail
    | MarkEditorErrors of Fable.JS.Error[]
    | StartCompile
    | EndCompile of string
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

let generateHtmlUrl (model: Model) jsCode =
    let fsCode = model.FSharpEditor.getValue()
    let htmlCode = model.HtmlEditor.getValue()
    saveState(Literals.STORAGE_KEY, fsCode, htmlCode)
    Generator.generateHtmlBlobUrl htmlCode jsCode

let clamp min max value =
    if value >= max
    then max
    elif value <= min
    then min
    else value

let compileEditorCode (worker: ObservableWorker<_>) (model: monaco.editor.IModel) =
    let content = model.getValue(monaco.editor.EndOfLinePreference.TextDefined, true)
    CompileCode content |> worker.Post

let parseEditorCode (worker: ObservableWorker<_>) (model: monaco.editor.IModel) =
    let content = model.getValue (monaco.editor.EndOfLinePreference.TextDefined, true)
    ParseCode content |> worker.Post

let updateLayouts (model: Model) =
    let updateLayoutsInner () =
        model.FSharpEditor.layout()
        model.HtmlEditor.layout()
    Browser.window.setTimeout(updateLayoutsInner, 100) |> ignore

let update msg model =
    match msg with
    | LoadSuccess ->
        updateLayouts model
        // Parse code every X seconds.
        let md = model.FSharpEditor.getModel()
        let obs =
            createObservable(fun trigger ->
                model.FSharpEditor.getModel().onDidChangeContent(fun _ -> trigger md) |> ignore)
        debounce 1000 obs
        |> Observable.add (parseEditorCode model.Worker)
        obs.Trigger md
        model, Cmd.ofMsg StartCompile

    | LoadFail ->
        let err = "Assemblies couldn't be loaded. Some firewalls prevent download of binary files, please check."
        { model with State = State.Errored err }, Cmd.none

    | SetFSharpEditor ed -> { model with FSharpEditor = ed }, Cmd.none
    | SetHmlEditor ed -> { model with HtmlEditor = ed }, Cmd.none
    | SetJsEditor ed -> { model with JsEditor = ed }, Cmd.none

    | MarkEditorErrors errors ->
        model.FSharpEditor.getModel() |> markEditorErrors errors
        model, Cmd.none

    | StartCompile ->
        model.FSharpEditor.getModel() |> compileEditorCode model.Worker
        { model with State = Compiling }, Cmd.none

    | EndCompile codeES2015 ->
        { model with State = Compiled
                     CodeES2015 = codeES2015 }, Cmd.batch [ Cmd.performFunc (generateHtmlUrl model) codeES2015 SetUrl ]

    | SetUrl newUrl ->
        { model with Url = newUrl }, Cmd.none

    | SetActiveTab newTab ->
        { model with ActiveTab = newTab }, Cmd.none

    | EditorDragStarted ->
        { model with DragTarget = EditorSplitter }, Cmd.none

    | EditorDragEnded ->
        { model with DragTarget = NoTarget }, Cmd.none

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
                       |> (fun h -> h / (Browser.window.innerHeight - 54.))
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
                        |> (fun w -> w / (Browser.window.innerWidth - offset))
                        |> clamp 0.2 0.8 }, Cmd.none

    | ToggleFsharpCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> HtmlOnly
            | FSharpOnly -> HtmlOnly
            | HtmlOnly -> BothExtended
        { model with EditorCollapse = newState }, Cmd.attemptFunc updateLayouts model FailEditorsLayout

    | ToggleHtmlCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> FSharpOnly
            | FSharpOnly -> BothExtended
            | HtmlOnly -> FSharpOnly
        { model with EditorCollapse = newState }, Cmd.attemptFunc updateLayouts model FailEditorsLayout

    | ToggleSidebar ->
        let sideBar = { model.Sidebar with IsExpanded = not model.Sidebar.IsExpanded }
        { model with Sidebar = sideBar }, Cmd.attemptFunc updateLayouts model FailEditorsLayout

    | WindowResize ->
        model, Cmd.attemptFunc updateLayouts model FailEditorsLayout

    | FailEditorsLayout error ->
        Browser.console.log error.Message
        model, Cmd.none

    | SidebarMsg msg ->
        let (subModel, cmd, externalMsg) = Sidebar.update msg model.Sidebar
        match externalMsg with
        | Sidebar.NoOp -> ()
        | Sidebar.LoadSample (fsharpCode, htmlCode) ->
            model.FSharpEditor.setValue fsharpCode
            model.HtmlEditor.setValue htmlCode
            // Force the FCS to parse the new F# code
            model.FSharpEditor.getModel() |> parseEditorCode model.Worker
        { model with Sidebar = subModel }, Cmd.map SidebarMsg cmd

let init () =
    let worker = Browser.Worker.Create(Literals.WORKER_URL)
    { State = Loading
      FSharpEditor = Unchecked.defaultof<IEditor>
      HtmlEditor = Unchecked.defaultof<IEditor>
      JsEditor = Unchecked.defaultof<IEditor>
      Worker = ObservableWorker(worker, WorkerAnswer.Decoder)
      Url = ""
      ActiveTab = LiveTab
      CodeES2015 = ""
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
            Icon.faIcon [ Icon.Size Size.IsSmall ]
                [ Fa.icon Fa.I.Spinner
                  Fa.spin ]
        else
            Icon.faIcon [ Icon.Size Size.IsSmall ]
                [ Fa.icon Fa.I.Play ]
    nav [ ClassName "navbar is-fixed-top is-dark" ]
        [ Navbar.Brand.div [ ]
            [ div [ ClassName "navbar-burger"
                    Style [ Display "block" ]
                    OnClick (fun _ -> dispatch ToggleSidebar) ] // Force the burger to be always visible
                [ span [ ] [ ]
                  span [ ] [ ]
                  span [ ] [ ] ]
              Navbar.Item.div [ ]
                [ img [ Src "img/fable_ionide.png" ] ] ]
          Navbar.Start.div [ ]
            [ Navbar.menu [ ]
                [ Navbar.Item.div [ ]
                    [ Button.button [ Button.OnClick (fun _ -> dispatch StartCompile) ]
                        [ compileIcon
                          span [ ]
                            [ str "Compile" ] ] ]
                  Navbar.Item.div [ Navbar.Item.Props [ Style [ Color "white" ] ] ]
                    [ str "You can also press Alt+Enter from the editor" ] ] ] ]

let private editorArea isDragging model dispatch =
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
            Literals.EDITOR_UNCOLLAPSED_HEIGHT, Literals.EDITOR_COLLAPSED_HEIGHT
        | HtmlOnly ->
            Literals.EDITOR_COLLAPSED_HEIGHT, Literals.EDITOR_UNCOLLAPSED_HEIGHT

    div [ ClassName "editor-container"
          Style [ Width (numberToPercent model.PanelSplitRatio) ] ]
        [ Card.card [ Common.Props [ Style [ Height ("calc("+ fsharpHeight + " - 4px)") ] ] ] // We remove 4px to compensate the vertical-resize height
            [ Card.header [ Common.Props [ OnClick (fun _ -> dispatch ToggleFsharpCollapse )] ]
                [ Card.Header.title [ ]
                    [ str "F#" ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ]
                        [ Fa.icon fsharpAngle
                          Fa.faLg ] ] ]
              Card.content [ Common.Props [ Style [ Display fsharpDisplay ] ] ]
                [ div [ Key "editor"
                        ClassName "editor-fsharp"
                        OnKeyDown (fun ev ->
                            if ev.altKey && ev.key = "Enter" then
                                dispatch StartCompile)
                        Ref (fun element ->
                            if not (isNull element) then
                                if element.childElementCount = 0. then
                                    let fsharpEditor = createEditor (element :?> Browser.HTMLElement)
                                    let code, _ = loadState(Literals.STORAGE_KEY)
                                    fsharpEditor.setValue(code)
                                    SetFSharpEditor fsharpEditor |> dispatch
                                else
                                    if isDragging then
                                        model.FSharpEditor.layout()
                          ) ] [ ] ] ]
          div [ ClassName "vertical-resize"
                OnMouseDown (fun _ -> dispatch EditorDragStarted) ]
              [ ]
          Card.card [ Common.Props [ Style [ Height htmlHeight ] ] ]
            [ Card.header [ Common.Props [ OnClick (fun _ -> dispatch ToggleHtmlCollapse )] ]
                [ Card.Header.title [ ]
                    [ str "Html" ]
                  Card.Header.icon [ ]
                    [ Icon.faIcon [ ]
                        [ Fa.icon htmlAngle
                          Fa.faLg ] ] ]
              Card.content [ Common.Props [ Style [ Display htmlDisplay ] ] ]
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
                                    let htmlEditor = monaco.editor.Globals.create(element :?> Browser.HTMLElement, options)
                                    let _, html = loadState(Literals.STORAGE_KEY)
                                    htmlEditor.setValue(html)
                                    SetHmlEditor htmlEditor |> dispatch
                                else
                                    if isDragging then
                                        model.HtmlEditor.layout()
                        ) ] [ ] ] ] ]

let private outputTabs (activeTab : ActiveTab) dispatch =
    Tabs.tabs [ Tabs.IsCentered
                Tabs.Size Size.IsMedium ]
        [ Tabs.tab [ Tabs.Tab.IsActive (activeTab = LiveTab)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetActiveTab LiveTab |> dispatch)
                     ] ]
            [ a [ ] [ str "Live sample" ] ]
          Tabs.tab [ Tabs.Tab.IsActive (activeTab = CodeTab)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetActiveTab CodeTab |> dispatch)
                     ] ]
            [ a [ ] [ str "Code" ] ] ]

let private toggleDisplay cond =
    if cond then "" else "is-hidden"

let private viewIframe isShown url =
    iframe [ Src url
             ClassName (toggleDisplay isShown) ]
        [ ]

let private viewCodeEditor (model: Model) dispatch =
    let isShown = model.ActiveTab = CodeTab
    div [ ClassName ("editor-output " + toggleDisplay isShown)
          Ref (fun element ->
            if not (isNull element) then
                let jsEditor =
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
                        let jsEditor = monaco.editor.Globals.create(element :?> Browser.HTMLElement, options)
                        SetJsEditor jsEditor |> dispatch
                        jsEditor
                    else
                        model.JsEditor
                jsEditor.setValue(model.CodeES2015)
                // This is needed because Monaco doesn't itialize well when being hidden by default
                // I believe it isn't reponsive by default and recalculate every position as needed...
                jsEditor.layout()
            ) ]
        [ ]

let private outputArea model dispatch =
    let content =
        match model.State with
        | Compiling | Compiled ->
            [ outputTabs model.ActiveTab dispatch
              viewIframe (model.ActiveTab = LiveTab) model.Url
              viewCodeEditor model dispatch ]
        | _ ->
            [ br [ ]
              div [ ClassName "has-text-centered"
                    Style [ Width "100%" ] ]
                [ Heading.h4 [ Heading.IsSubtitle ]
                    [ str "You need to compile an application first" ] ] ]

    div [ ClassName "output-container"
          Style [ Width (numberToPercent (1. - model.PanelSplitRatio)) ] ]
        content

let private view (model: Model) dispatch =
    let isDragging =
        match model.DragTarget with
        | EditorSplitter | PanelSplitter -> true
        | NoTarget -> false
    div [ classList [ "is-unselectable", isDragging ] ]
        [ PageLoader.pageLoader [ PageLoader.Color IsInfo
                                  PageLoader.IsActive (model.State = Loading) ] [ ]
          Modal.modal [ Modal.IsActive model.State.HasError ]
            [ Modal.background [ ] [ ]
              Modal.content [ ] [ Box.box' [ ] [ str model.State.ErrorMessage ] ] ]
          menubar model dispatch
          div [ ClassName "page-content" ]
            [ Sidebar.view model.Sidebar (SidebarMsg >> dispatch)
              div [ ClassName "main-content" ]
                [ div [ ClassName "page-content" ]
                    [ yield editorArea isDragging model dispatch
                      if not model.State.HasError then
                        yield div [ ClassName "horizontal-resize"
                                    OnMouseDown (fun _ -> dispatch PanelDragStarted) ]
                                  [ ]
                      yield outputArea model dispatch ] ] ] ]

open Elmish.React

let private subscriptions (model: Model) =
    let sub dispatch =
        // Resize subscriptions
        Browser.window.addEventListener_resize(fun _ ->
            dispatch WindowResize)

        // Worker subscriptions
        model.Worker |> Observable.add (function
            | Loaded -> LoadSuccess |> dispatch
            | LoadFailed -> LoadFail |> dispatch
            | ParsedCode errors -> MarkEditorErrors errors |> dispatch
            | CompiledCode jsCode -> EndCompile jsCode |> dispatch
            // Do nothing, these will be handled by .PostAndAwaitResponse
            | FoundTooltip _ -> ()
            | FoundCompletions _ -> ()
        )

        // Register providers
        registerTooltipProvider <| fun line column lineText -> async {
            let! res = model.Worker.PostAndAwaitResponse(GetTooltip(line, column, lineText))
            match res with
            | FoundTooltip lines -> return lines
            | _ -> return [||]
        }

        registerCompletionProvider <| fun line column lineText -> async {
            let! res = model.Worker.PostAndAwaitResponse(GetCompletions(line, column, lineText))
            match res with
            | FoundCompletions lines -> return lines
            | _ -> return [||]
        }

    Cmd.ofSub sub

Program.mkProgram init update view
|> Program.withSubscription subscriptions
// |> Program.withSubscription (Notifications.subscription NotificationsMsg)
|> Program.withReact "app-container"
|> Program.run

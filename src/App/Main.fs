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

let private Worker(): Browser.Worker = importDefault "worker-loader!../Worker/Worker.fsproj"
let private loadState(_key: string): string * string = importMember "./util.js"
let private saveState(_key: string, _code: string, _html: string): unit = importMember "./util.js"

type IEditor = Monaco.Editor.IStandaloneCodeEditor

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
      Worker: ObservableWorker<WorkerAnswer>
      State: State
      Url : string
      ActiveTab : ActiveTab
      CodeES2015: string
      FSharpCode : string
      FSharpErrors : ResizeArray<Monaco.Editor.IMarkerData>
      HtmlCode: string
      DragTarget : DragTarget
      EditorSplitRatio : float
      PanelSplitRatio : float
      EditorCollapse : EditorCollapse
      Sidebar : Sidebar.Model }

type Msg =
    | SetFSharpEditor of IEditor
    | LoadSuccess
    | LoadFail
    | MarkEditorErrors of Fable.JS.Error[]
    | StartCompile of string option
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
    | SidebarMsg of Sidebar.Msg
    | ChangeFsharpCode of string
    | ChangeHtmlCode of string

let generateHtmlUrl (model: Model) jsCode =
    saveState(Literals.STORAGE_KEY, model.FSharpCode, model.HtmlCode)
    Generator.generateHtmlBlobUrl model.HtmlCode jsCode

let clamp min max value =
    if value >= max
    then max
    elif value <= min
    then min
    else value

let parseEditorCode (worker: ObservableWorker<_>) (model: Monaco.Editor.IModel) =
    let content = model.getValue (Monaco.Editor.EndOfLinePreference.TextDefined, true)
    ParseCode content |> worker.Post

let update msg model =
    match msg with
    | LoadSuccess ->
        // Parse code every X seconds.
        let md = model.FSharpEditor.getModel()
        let obs =
            createObservable(fun trigger ->
                model.FSharpEditor.getModel().onDidChangeContent(fun _ -> trigger md) |> ignore)
        debounce 1000 obs
        |> Observable.add (parseEditorCode model.Worker)
        obs.Trigger md
        { model with State = Idle }, Cmd.ofMsg (StartCompile None)

    | LoadFail ->
        let err = "Assemblies couldn't be loaded. Some firewalls prevent download of binary files, please check."
        { model with State = State.Errored err }, Cmd.none

    | SetFSharpEditor ed -> { model with FSharpEditor = ed }, Cmd.none

    | MarkEditorErrors errors ->
        { model with FSharpErrors = mapErrorToMarker errors }, Cmd.none

    | StartCompile code ->
        if model.State <> Compiling then
            let code =
                match code with
                | Some code -> code
                | None -> model.FSharpEditor.getModel().getValue(Monaco.Editor.EndOfLinePreference.TextDefined, true)
            CompileCode(code, model.Sidebar.Options.Optimize) |> model.Worker.Post
            { model with State = Compiling }, Cmd.none
        else
         model, Cmd.none

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
        let offset =
            if model.Sidebar.IsExpanded then 250. else 0.
        let splitRatio =
            position
            |> (fun p -> p.X - offset)
            |> (fun w -> w / (Browser.window.innerWidth - offset))
            |> clamp 0.2 0.8
        // printfn "PANELDRAG: x %f offset %f innerWidth %f splitRatio %f"
        //     position.X offset Browser.window.innerWidth splitRatio
        { model with PanelSplitRatio = splitRatio }, Cmd.none

    | ToggleFsharpCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> HtmlOnly
            | FSharpOnly -> HtmlOnly
            | HtmlOnly -> BothExtended
        { model with EditorCollapse = newState }, Cmd.none

    | ToggleHtmlCollapse ->
        let newState =
            match model.EditorCollapse with
            | BothExtended -> FSharpOnly
            | FSharpOnly -> BothExtended
            | HtmlOnly -> FSharpOnly
        { model with EditorCollapse = newState }, Cmd.none

    | SidebarMsg msg ->
        let (subModel, cmd, externalMsg) = Sidebar.update msg model.Sidebar
        let newModel, extraCmd =
            match externalMsg with
            | Sidebar.NoOp -> model, Cmd.none
            | Sidebar.LoadSample (fsharpCode, htmlCode) ->
                { model with FSharpCode = fsharpCode
                             HtmlCode = htmlCode }, Cmd.ofMsg (StartCompile (Some fsharpCode)) // Trigger a new compilation
        { newModel with Sidebar = subModel }, Cmd.batch [ Cmd.map SidebarMsg cmd
                                                          extraCmd ]

    | ChangeFsharpCode newCode ->
        { model with FSharpCode = newCode }, Cmd.none

    | ChangeHtmlCode newCode ->
        { model with HtmlCode = newCode }, Cmd.none

let init () =
    let worker = Worker()
    let fsharpCode, htmlCode = loadState(Literals.STORAGE_KEY)
    { State = Loading
      FSharpEditor = Unchecked.defaultof<IEditor>
      Worker =  ObservableWorker(worker, WorkerAnswer.Decoder)
      Url = ""
      ActiveTab = LiveTab
      CodeES2015 = ""
      FSharpCode = fsharpCode
      FSharpErrors = ResizeArray [||]
      HtmlCode = htmlCode
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
    let smallFaIcon icon =
        Icon.faIcon [ Icon.Size Size.IsSmall ] icon
    let compileIcon =
        if model.State = Compiling
        then smallFaIcon [ Fa.icon Fa.I.Spinner; Fa.spin ]
        else smallFaIcon [ Fa.icon Fa.I.Play ]
    Navbar.navbar
        [ Navbar.IsFixedTop; Navbar.Color IsDark ]
        [ Navbar.Brand.div [ ]
            [ Navbar.Item.div [ ]
                [ img [ Src "img/fable-ionide.png" ] ]
              Navbar.Item.div [ ]
                [ Button.button
                    [ Button.OnClick (fun _ -> dispatch (StartCompile None)) ]
                    [ compileIcon; span [] []; str "Compile" ] ]
            ]
          Navbar.Start.div [ ]
            [ Navbar.menu [ ]
                [ Navbar.Item.div [ Navbar.Item.Props [ Style [ Color "white" ] ] ]
                    [ str "You can also press Alt+Enter from the editor" ] ] ] ]

let htmlEditorOptions =
    jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions =  jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "html"
        o.fontSize <- Some 14.
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
    )

let fsharpEditorOptions =
    jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions = jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "fsharp"
        o.fontSize <- Some 14.
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
    )

let private editorArea model dispatch =
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

    div [ Class "editor-container"
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
                [ ReactEditor.editor [ ReactEditor.Options fsharpEditorOptions
                                       ReactEditor.Value model.FSharpCode
                                       ReactEditor.OnChange (ChangeFsharpCode >> dispatch)
                                       ReactEditor.Errors model.FSharpErrors
                                       ReactEditor.EditorDidMount (fun editor monacoModule ->
                                        if not (isNull editor) then
                                            dispatch (SetFSharpEditor editor)

                                            // Because we have access to the monacoModule here,
                                            // register the different provider needed for F# editor
                                            let getTooltip line column lineText =
                                                async {
                                                    let! res = model.Worker.PostAndAwaitResponse(GetTooltip(line, column, lineText))
                                                    match res with
                                                    | FoundTooltip lines -> return lines
                                                    | _ -> return [||]
                                                }

                                            let tooltipProvider = Editor.createTooltipProvider getTooltip
                                            monacoModule.languages.registerHoverProvider("fsharp", tooltipProvider) |> ignore

                                            let getCompletion line column lineText =
                                                async {
                                                    let! res = model.Worker.PostAndAwaitResponse(GetCompletions(line, column, lineText))
                                                    match res with
                                                    | FoundCompletions lines -> return lines
                                                    | _ -> return [||]
                                                }

                                            let completionProvider = Editor.createCompletionProvider getCompletion
                                            monacoModule.languages.registerCompletionItemProvider("fsharp", completionProvider) |> ignore

                                            editor.addCommand(monacoModule.KeyMod.Alt ||| int Monaco.KeyCode.Enter, (fun () ->
                                                StartCompile None |> dispatch)) |> ignore
                                       ) ]

                           ] ]
          div [ Class "vertical-resize"
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
                [ ReactEditor.editor [ ReactEditor.Options htmlEditorOptions
                                       ReactEditor.Value model.HtmlCode
                                       ReactEditor.OnChange (ChangeHtmlCode >> dispatch) ]
                         ] ] ]

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
             Class (toggleDisplay isShown) ]
        [ ]

let private viewCodeEditor (model: Model) =
    let options = jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
                        let minimapOptions = jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
                            oMinimap.enabled <- Some false
                        )
                        o.language <- Some "javascript"
                        o.fontSize <- Some 14.
                        o.theme <- Some "vs-dark"
                        o.minimap <- Some minimapOptions
                        o.readOnly <- Some true
                    )
    ReactEditor.editor [ ReactEditor.Options options
                         ReactEditor.Value model.CodeES2015 ]

let private outputArea model dispatch =
    let content =
        match model.State with
        | Compiling | Compiled ->
            [ outputTabs model.ActiveTab dispatch
              viewIframe (model.ActiveTab = LiveTab) model.Url
              viewCodeEditor model ]
        | _ ->
            [ br [ ]
              div [ Class "has-text-centered"
                    Style [ Width "100%" ] ]
                [ Heading.h4 [ Heading.IsSubtitle ]
                    [ str "You need to compile an application first" ] ] ]

    div [ Class "output-container"
          Style [ Width (numberToPercent (1. - model.PanelSplitRatio)) ] ]
        content

let private view (model: Model) dispatch =
    let isDragging =
        match model.DragTarget with
        | EditorSplitter | PanelSplitter -> true
        | NoTarget -> false
    div [ classList [ "is-unselectable", isDragging ] ]
        [ PageLoader.pageLoader [ PageLoader.Color IsWhite
                                  PageLoader.IsActive (model.State = Loading) ]
                                [ span [ Class "title" ]
                                    [ str "We are getting everything ready for you" ] ]
          Modal.modal [ Modal.IsActive model.State.HasError ]
            [ Modal.background [ ] [ ]
              Modal.content [ ] [ Box.box' [ ] [ str model.State.ErrorMessage ] ] ]
          menubar model dispatch
          div [ Class "page-content" ]
            [ Sidebar.view model.Sidebar (SidebarMsg >> dispatch)
              div [ Class "main-content" ]
                [ yield editorArea model dispatch
                  if not model.State.HasError then
                    yield div [ Class "horizontal-resize"
                                OnMouseDown (fun _ -> dispatch PanelDragStarted) ]
                              [ ]
                  yield outputArea model dispatch ] ] ]

let private subscriptions (model: Model) =
    let sub dispatch =
        // Worker subscriptions
        model.Worker |> Observable.add (function
            | Loaded ->
                LoadSuccess |> dispatch
            | LoadFailed -> LoadFail |> dispatch
            | ParsedCode errors -> MarkEditorErrors errors |> dispatch
            | CompiledCode jsCode -> EndCompile jsCode |> dispatch
            // Do nothing, these will be handled by .PostAndAwaitResponse
            | FoundTooltip _ -> ()
            | FoundCompletions _ -> ()
        )

    Cmd.ofSub sub

open Elmish.React
open Elmish.HMR

Program.mkProgram init update view
|> Program.withSubscription subscriptions
#if DEBUG
|> Program.withHMR
#endif
|> Program.withReact "app-container"
|> Program.run

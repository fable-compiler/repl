module Fable.Repl.Main

open Fable.Core
open Fable.Core.JsInterop
open Fable.FontAwesome
open Browser.Types
open Browser
open Fetch.Types
open Fulma
open Elmish
open Thoth.Elmish
open Prelude
open Editor
open Mouse
open Thoth.Json
open Fable.WebWorker

type ISavedState =
    abstract code: string
    abstract html: string
    abstract css: string

let private Worker(): Worker =
    // importDefault "worker-loader!../../../Fable/src/fable-standalone/src/Worker/Worker.fsproj"
    Worker.Create(Literals.WORKER_BUNDLE_URL)

let private loadState(_key: string): ISavedState = importMember "./js/util.js"
let private saveState(_key: string, _code: string, _html: string, _cssCode : string): unit = importMember "./js/util.js"
let private updateQuery(_fsharpCode : string, _htmlCode : string, _cssCode : string): unit = importMember "./js/util.js"

type IEditor = Monaco.Editor.IStandaloneCodeEditor

type State =
    | Loading
    | Idle
    | Compiling
    | Compiled

[<RequireQualifiedAccess>]
type OutputTab =
    | Code
    | Live

[<RequireQualifiedAccess>]
type CodeTab =
    | FSharp
    | Html
    | Css

type DragTarget =
    | NoTarget
    | PanelSplitter

type EditorCollapse =
    | BothExtended
    | HtmlOnly
    | FSharpOnly

type Model =
    { FSharpEditor: IEditor
      Worker: ObservableWorker<WorkerAnswer>
      State: State
      IFrameUrl : string
      OutputTab : OutputTab
      CodeTab : CodeTab
      CodeES2015: string
      FSharpCode : string
      FSharpErrors : Monaco.Editor.IMarkerData[]
      HtmlCode: string
      CssCode: string
      DragTarget : DragTarget
      PanelSplitRatio : float
      Sidebar : Sidebar.Model
      IsProblemsPanelExpanded : bool
      Logs : ConsolePanel.Log list }

type EndCompileStatus = Result<string * Fable.Standalone.Error[], string>

type Msg =
    | SetFSharpEditor of IEditor
    | LoadSuccess
    | LoadFail
    | Reset
    | UrlHashChange
    | GistLoaded of string*string*string
    | LoadGistError of exn
    | LoadGist of string
    | MarkEditorErrors of Fable.Standalone.Error[]
    | StartCompile of string option
    | EndCompile of EndCompileStatus
    | UpdateStats of CompileStats
    | ShareableUrlReady of unit
    | GistUrlReady of string
    | ShareGistError of exn
    | NoToken
    | SetOutputTab of OutputTab
    | SetCodeTab of CodeTab
    | ToggleProblemsPanel
    | SetIFrameUrl of string
    | PanelDragStarted
    | PanelDrag of Position
    | PanelDragEnded
    | MouseUp
    | MouseMove of Mouse.Position
    | AddConsoleLog of string
    | AddConsoleError of string
    | AddConsoleWarn of string
    | SidebarMsg of Sidebar.Msg
    | ChangeFsharpCode of string
    | ChangeHtmlCode of string
    | ChangeCssCode of string
    | UpdateQueryFailed of exn
    | RefreshIframe

// Custom error message
let errorString (response: Response) =
    string response.Status + " " + response.StatusText + " for URL " + response.Url

let fetchAs<'T> (url: string) (decoder: Decoder<'T>) (init: RequestProperties list) =
    promise {
        let! response = GlobalFetch.fetch(RequestInfo.Url url, Fetch.requestProps init)
        if not response.Ok then
            return errorString response |> failwith
        else
            let! txt = response.text()
            return
                match Decode.fromString decoder txt with
                | Ok res -> res
                | Error er -> failwith er
    }

let private addLog log (model : Model) =
    { model with Logs =
                    if model.Logs.Length >= Literals.MAX_LOGS_LENGTH then
                        model.Logs.Tail @ [log]
                    else
                        model.Logs @ [log] }

let private generateHtmlUrl (model: Model) jsCode =
    saveState(Literals.STORAGE_KEY, model.FSharpCode, model.HtmlCode, model.CssCode)
    Generator.generateHtmlBlobUrl model.HtmlCode model.CssCode jsCode

let private clamp min max value =
    if value >= max
    then max
    elif value <= min
    then min
    else value

let private postToGist =
    let decoder = Decode.object (fun get -> get.Required.Field "id" Decode.string)
    let toContent str = Encode.object ["content", Encode.string str]
    fun (token,code,html,css) ->
        promise {
            let data =
              Encode.object [
                "public", Encode.bool true
                "description", Encode.string "Created with Fable REPL"
                "files", Encode.object [
                    yield "fable-repl.fs", toContent code
                    yield "fable-repl.html", toContent html
                    if (css:string).Trim() <> "" then
                       yield "fable-repl.css", toContent css
                ] ] |> Encode.toString 0

            return! fetchAs "https://api.github.com/gists" decoder
                [ RequestProperties.Method HttpMethod.POST
                  RequestProperties.Body !^data
                  Fetch.requestHeaders [HttpRequestHeaders.Authorization ("token " + token)]
                ]
    }
let private loadGist =
    let recover choice =
        promise {
            match choice with
            | Choice1Of2 url ->
                return! fetchAs url Decode.string []
            | Choice2Of2 content ->
                return content }
    let innerDecoder =
        Decode.object (fun get ->
            if get.Required.Field "truncated" Decode.bool then
                get.Required.Field "raw_url" Decode.string |> Choice1Of2
            else
                get.Required.Field "content" Decode.string |> Choice2Of2)

    let decoder =
        Decode.object (fun get ->
            get.Required.At ["files";"fable-repl.fs"] innerDecoder,
            get.Required.At ["files";"fable-repl.html"] innerDecoder,
            get.Optional.At ["files";"fable-repl.css"] innerDecoder)
    fun gist ->
        let url = "https://api.github.com/gists/" + gist
        promise {
            let! (code,html,css) = fetchAs url decoder []
            let! code = recover code
            let! html = recover html
            let! css = css |> Option.map recover |> Option.defaultValue (Promise.lift "")
            return (code, html, css) }

let private parseEditorCode (worker: ObservableWorker<_>) (model: Monaco.Editor.IModel) =
    let content = model.getValue (Monaco.Editor.EndOfLinePreference.TextDefined, true)
    ParseCode content |> worker.Post

let private showGlobalErrorToast msg =
    Toast.message msg
    |> Toast.title "Failed to compile"
    |> Toast.position Toast.BottomRight
    |> Toast.icon Fa.Solid.Exclamation
    |> Toast.noTimeout
    |> Toast.withCloseButton
    |> Toast.error

let update msg (model : Model) =
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

        let browserAdviceCommand =
            if not ReactDeviceDetect.exports.isChrome
                && not ReactDeviceDetect.exports.isSafari then

                Toast.message "We recommend using Chrome or Safari, for best performance"
                |> Toast.icon Fa.Solid.Info
                |> Toast.position Toast.BottomRight
                |> Toast.timeout (System.TimeSpan.FromSeconds 5.)
                |> Toast.dismissOnClick
                |> Toast.info

            else
                Cmd.none

        { model with State = Idle }, Cmd.batch [ Cmd.ofMsg (StartCompile None)
                                                 browserAdviceCommand ]

    | LoadFail ->
        let msg = "Assemblies couldn't be loaded. Some firewalls prevent download of binary files, please check."
        { model with State = Idle }, showGlobalErrorToast msg

    | SetFSharpEditor ed -> { model with FSharpEditor = ed }, Cmd.none

    | ToggleProblemsPanel ->
        { model with IsProblemsPanelExpanded = not model.IsProblemsPanelExpanded }, Cmd.none

    | LoadGist gist ->
        model, Cmd.OfPromise.either loadGist gist GistLoaded LoadGistError

    | Reset ->
        window.localStorage.removeItem(Literals.STORAGE_KEY)
        let saved = loadState(Literals.STORAGE_KEY)
        { model with FSharpCode = saved.code
                     HtmlCode = saved.html
                     CssCode = saved.css
                     CodeES2015 = ""
                     IFrameUrl = ""
                     Logs = [] }, Router.modifyUrl Router.Home

    | GistLoaded (code, html, css) ->
        { model with FSharpCode = code; HtmlCode = html; CssCode = css }, Cmd.ofMsg (StartCompile (Some code))

    | GistUrlReady gist ->
        model, Cmd.batch [
            Router.modifyUrl (Router.LoadGist (Some gist))
            Cmd.ofMsg (ShareableUrlReady ()) ]

    | ShareGistError exn ->
        JS.console.error exn
        model, Toast.message "An error occured when creating the gist. Is the token valid?"
                |> Toast.icon Fa.Solid.ExclamationTriangle
                |> Toast.position Toast.BottomRight
                |> Toast.warning

    | NoToken ->
        model, Toast.message "You need to register your GitHub API token before sharing to Gist"
                |> Toast.icon Fa.Solid.ExclamationTriangle
                |> Toast.position Toast.BottomRight
                |> Toast.warning

    | UrlHashChange ->
        let parsed = loadState(Literals.STORAGE_KEY)
        { model with FSharpCode = parsed.code; HtmlCode = parsed.html; CssCode = parsed.css }, Cmd.ofMsg (StartCompile (Some parsed.code))

    | MarkEditorErrors errors ->
        { model with FSharpErrors = mapErrorToMarker errors }, Cmd.none

    | StartCompile code ->
        match model.State with
        | Loading | Compiling -> model, Cmd.none
        | Compiled | Idle ->
            let code =
                match code with
                | Some code -> code
                | None -> model.FSharpCode
            CompileCode(code, model.Sidebar.Options.Optimize) |> model.Worker.Post
            { model with State = Compiling }, Cmd.none

    | EndCompile result ->
        match result with
        | Ok(codeES2015, errors) ->
            let hasCriticalErrors = errors |> Array.exists (fun e -> not e.IsWarning)
            if hasCriticalErrors then
                let toastCmd =
                    Toast.message "Failed to compile"
                    |> Toast.position Toast.BottomRight
                    |> Toast.icon Fa.Solid.Exclamation
                    |> Toast.dismissOnClick
                    |> Toast.error
                { model with State = Compiled
                             FSharpErrors = mapErrorToMarker errors
                             Logs = [ ConsolePanel.Log.Separator ] }, toastCmd
            else
                let toastCmd =
                    Toast.message "Compiled successfuly"
                    |> Toast.position Toast.BottomRight
                    |> Toast.icon Fa.Solid.Check
                    |> Toast.dismissOnClick
                    |> Toast.success
                { model with CodeES2015 = codeES2015
                             State = Compiled
                             FSharpErrors = mapErrorToMarker errors
                             Logs = [ ConsolePanel.Log.Separator ] },
                Cmd.batch [ Cmd.OfFunc.perform (generateHtmlUrl model) codeES2015 SetIFrameUrl; toastCmd ]

        | Error msg ->
            { model with State = Compiled }, showGlobalErrorToast msg

    | SetIFrameUrl newUrl ->
        { model with IFrameUrl = newUrl }, Cmd.none

    | SetOutputTab newTab ->
        { model with OutputTab = newTab }, Cmd.none

    | SetCodeTab newTab ->
        { model with CodeTab = newTab }, Cmd.none

    | MouseUp ->
        let cmd =
            match model.DragTarget with
            | NoTarget -> Cmd.none
            | PanelSplitter ->
                Cmd.ofMsg PanelDragEnded
        model, cmd

    | MouseMove position ->
        let cmd =
            match model.DragTarget with
            | NoTarget -> Cmd.none
            | PanelSplitter ->
                Cmd.ofMsg (PanelDrag position)
        model, cmd

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
            |> (fun w -> w / (window.innerWidth - offset))
            |> clamp 0.2 0.8
        // printfn "PANELDRAG: x %f offset %f innerWidth %f splitRatio %f"
        //     position.X offset window.innerWidth splitRatio
        { model with PanelSplitRatio = splitRatio }, Cmd.none

    | SidebarMsg msg ->
        let (subModel, cmd, externalMsg) = Sidebar.update msg model.Sidebar
        let newModel, extraCmd =
            match externalMsg with
            | Sidebar.NoOp -> model, Cmd.none
            | Sidebar.LoadSample (fsharpCode, htmlCode, cssCode) ->
                let cmd =
                    match model.State with
                    | Loading -> Cmd.none
                    | _ -> Cmd.ofMsg (StartCompile (Some fsharpCode)) // Trigger a new compilation
                { model with FSharpCode = fsharpCode
                             HtmlCode = htmlCode
                             CssCode = cssCode }, cmd
            | Sidebar.Share ->
                model, Cmd.OfFunc.either updateQuery (model.FSharpCode, model.HtmlCode, model.CssCode) ShareableUrlReady UpdateQueryFailed
            | Sidebar.Reset ->
                model, Router.newUrl Router.Reset
            | Sidebar.ShareToGist ->
                model,
                    match subModel.Options.GistToken with
                    | Some token ->
                        Cmd.OfPromise.either postToGist (token, model.FSharpCode, model.HtmlCode, model.CssCode) GistUrlReady ShareGistError
                    | None ->
                        Cmd.ofMsg NoToken

        { newModel with Sidebar = subModel }, Cmd.batch [ Cmd.map SidebarMsg cmd
                                                          extraCmd ]

    | ChangeFsharpCode newCode ->
        { model with FSharpCode = newCode }, Cmd.none

    | ChangeHtmlCode newCode ->
        { model with HtmlCode = newCode }, Cmd.none

    | ChangeCssCode newCode ->
        { model with CssCode = newCode }, Cmd.none

    | ShareableUrlReady () ->
        model, Toast.message "Copy it from the address bar"
                |> Toast.title "Shareable link is ready"
                |> Toast.position Toast.BottomRight
                |> Toast.icon Fa.Solid.InfoCircle
                |> Toast.timeout (System.TimeSpan.FromSeconds 5.)
                |> Toast.info

    | LoadGistError exn ->
        JS.console.error exn
        model, Toast.message "An error occured when loading the gist"
                |> Toast.icon Fa.Solid.ExclamationTriangle
                |> Toast.position Toast.BottomRight
                |> Toast.warning

    | UpdateQueryFailed exn ->
        JS.console.error exn
        model, Toast.message "An error occured when updating the URL"
                |> Toast.icon Fa.Solid.ExclamationTriangle
                |> Toast.position Toast.BottomRight
                |> Toast.warning

    | UpdateStats stats ->
        model, Cmd.ofMsg (SidebarMsg (Sidebar.UpdateStats stats))

    | RefreshIframe ->
        { model with Logs = [ ConsolePanel.Log.Separator ] }, Cmd.OfFunc.perform (Generator.generateHtmlBlobUrl model.HtmlCode model.CssCode) model.CodeES2015 SetIFrameUrl

    | AddConsoleLog content ->
        model
        |> addLog (ConsolePanel.Log.Info content), Cmd.none

    | AddConsoleError content ->
        model
        |> addLog (ConsolePanel.Log.Error content), Cmd.none

    | AddConsoleWarn content ->
        model
        |> addLog (ConsolePanel.Log.Warn content), Cmd.none

let workerCmd (worker : ObservableWorker<_>)=
    let handler dispatch =
        worker
        |> Observable.add (function
            | Loaded ->
                LoadSuccess |> dispatch
            | LoadFailed -> LoadFail |> dispatch
            | ParsedCode errors -> MarkEditorErrors errors |> dispatch
            | CompilationFinished (jsCode, errors, stats) ->
                Ok(jsCode, errors) |> EndCompile |> dispatch
                UpdateStats stats |> dispatch
            | CompilerCrashed msg -> Error msg |> EndCompile |> dispatch
            // Do nothing, these will be handled by .PostAndAwaitResponse
            | FoundTooltip _ -> ()
            | FoundCompletions _ -> ()
            | FoundDeclarationLocation _ -> ()
        )
    [ handler ]

let init () =
    let worker = ObservableWorker(Worker(), WorkerAnswer.Decoder, "MAIN APP")
    CreateChecker(Literals.METADATA_DIR, Literals.EXTRA_REFS,
                  Some ".txt", Some Literals.REPL_LIB_MAP_JSON_URL)
    |> worker.Post
    let saved = loadState(Literals.STORAGE_KEY)
    let sidebarModel, sidebarCmd = Sidebar.init ()
    let cmd = Cmd.batch [
                Cmd.ups MouseUp
                Cmd.move MouseMove
                Cmd.iframeMessage
                    { MoveCtor = MouseMove
                      UpCtor = MouseUp
                      ConsoleLogCor = AddConsoleLog
                      ConsoleWarnCor = AddConsoleWarn
                      ConsoleErrorCor = AddConsoleError }
                Cmd.map SidebarMsg sidebarCmd
                workerCmd worker ]

    { State = Loading
      FSharpEditor = Unchecked.defaultof<IEditor>
      Worker = worker
      IFrameUrl = ""
      OutputTab = OutputTab.Live
      CodeTab = CodeTab.FSharp
      CodeES2015 = ""
      FSharpCode = saved.code
      FSharpErrors = [||]
      HtmlCode = saved.html
      CssCode = saved.css
      DragTarget = NoTarget
      PanelSplitRatio = 0.5
      Sidebar = sidebarModel
      IsProblemsPanelExpanded = true
      Logs = [] }, cmd

open Fable.React
open Fable.React.Props

let private numberToPercent number =
    string (number * 100.) + "%"

let private fontSizeClass =
        function
        | 11. -> "is-small"
        | 14. -> "is-medium"
        | 17. -> "is-large"
        | _ -> "is-medium"

let private htmlEditorOptions (fontSize : float) (fontFamily : string): Monaco.Editor.IEditorConstructionOptions =
    jsOptions(fun o ->
        o.language <- Some "html"
        o.fontSize <- Some fontSize
        o.theme <- Some "vs-dark"
        o.minimap <- Some (jsOptions(fun oMinimap ->
            oMinimap.enabled <- Some false))
        o.fontFamily <- Some fontFamily
        o.fontLigatures <- Some (fontFamily = "Fira Code")
    )

let private cssEditorOptions (fontSize : float) (fontFamily : string) =
    jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions =  jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "css"
        o.fontSize <- Some fontSize
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
        o.fontFamily <- Some fontFamily
        o.fontLigatures <- Some (fontFamily = "Fira Code")
    )

let private fsharpEditorOptions (fontSize : float) (fontFamily : string) =
    jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
        let minimapOptions = jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
            oMinimap.enabled <- Some false
        )
        o.language <- Some "fsharp"
        o.fontSize <- Some fontSize
        o.theme <- Some "vs-dark"
        o.minimap <- Some minimapOptions
        o.fontFamily <- Some fontFamily
        o.fontLigatures <- Some (fontFamily = "Fira Code")
        o.fixedOverflowWidgets <- Some true
    )

let private editorTabs (activeTab : CodeTab) dispatch =
    Tabs.tabs [ Tabs.IsCentered
                Tabs.Size Size.IsMedium
                Tabs.IsToggle ]
        [ Tabs.tab [ Tabs.Tab.IsActive (activeTab = CodeTab.FSharp)
                     Tabs.Tab.Props [
                        OnClick (fun _ -> SetCodeTab CodeTab.FSharp |> dispatch)
                     ] ]
            [ a [ ] [ str "F#" ] ]
          Tabs.tab [ Tabs.Tab.IsActive (activeTab = CodeTab.Html)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetCodeTab CodeTab.Html |> dispatch)
                     ] ]
            [ a [ ] [ str "HTML" ] ]
          Tabs.tab [ Tabs.Tab.IsActive (activeTab = CodeTab.Css)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetCodeTab CodeTab.Css |> dispatch)
                     ] ]
            [ a [ ] [ str "CSS" ] ] ]

let private problemsPanel (isExpanded : bool) (errors : Monaco.Editor.IMarkerData[]) (currentTab : CodeTab) dispatch =
    let bodyDisplay =
        if isExpanded then
            ""
        else
            "is-hidden"

    let headerIcon =
        if isExpanded then
            Fa.Solid.AngleDown
        else
            Fa.Solid.AngleUp

    let title =
        if errors.Length = 0 then
            span [ ]
                [ str "Problems" ]
        else
            span [ ]
                [ str "Problems: "
                  Text.span [ Props [ Style [ MarginLeft ".5rem" ] ] ]
                    [ str (string errors.Length ) ] ]

    div [ Class "scrollable-panel is-problem" ]
        [ div [ Class "scrollable-panel-header"
                OnClick (fun _ -> dispatch ToggleProblemsPanel) ]
            [ div [ Class "scrollable-panel-header-icon" ]
                [ Icon.icon [ ]
                    [ Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] [] ] ]
              div [ Class "scrollable-panel-header-title" ]
                [ title ]
              div [ Class "scrollable-panel-header-icon" ]
                [ Icon.icon [ ]
                    [ Fa.i [ headerIcon; Fa.Size Fa.FaLarge ] [] ] ] ]

          div [ Class ("scrollable-panel-body " + bodyDisplay) ]
            [ for error in errors do
                match error.severity with
                | Monaco.MarkerSeverity.Error
                | Monaco.MarkerSeverity.Warning ->
                    let (icon, colorClass) =
                        match error.severity with
                        | Monaco.MarkerSeverity.Error -> Fa.Solid.TimesCircle, ofColor IsDanger
                        | Monaco.MarkerSeverity.Warning -> Fa.Solid.ExclamationTriangle, ofColor IsWarning
                        | _ -> failwith "Should not happen", ofColor NoColor

                    yield div [ Class ("scrollable-panel-body-row " + colorClass)
                                // Data("tooltip-content", error.message)
                                OnClick (fun _ ->
                                    if currentTab <> CodeTab.FSharp then
                                        SetCodeTab CodeTab.FSharp |> dispatch
                                    ReactEditor.Dispatch.cursorMove "fsharp_cursor_jump" error
                                ) ]
                            [ Icon.icon [ Icon.Size IsSmall
                                          Icon.CustomClass colorClass ]
                                [ Fa.i [ icon ] [] ]
                              span [ Class "scrollable-panel-body-row-description" ]
                                [ str error.message ]
                              span [ Class "scrollable-panel-body-row-position" ]
                                [ str "("
                                  str (string error.startLineNumber)
                                  str ","
                                  str (string error.startColumn)
                                  str ")" ] ]
                | _ -> () ] ]

let private registerCompileCommand dispatch (editor : Monaco.Editor.IStandaloneCodeEditor) (monacoModule : Monaco.IExports) =
    let triggerCompile () = StartCompile None |> dispatch
    editor.addCommand(monacoModule.KeyMod.Alt ||| int Monaco.KeyCode.Enter, triggerCompile, "") |> ignore
    editor.addCommand(monacoModule.KeyMod.CtrlCmd ||| int Monaco.KeyCode.KEY_S, triggerCompile, "") |> ignore

let private editorArea model dispatch =
    div [ Class "vertical-panel"
          Style [ Width (numberToPercent model.PanelSplitRatio)
                  Position PositionOptions.Relative ] ]
        [ editorTabs model.CodeTab dispatch
          // Html editor
          ReactEditor.editor [ ReactEditor.Options (htmlEditorOptions
                                                        model.Sidebar.Options.FontSize
                                                        model.Sidebar.Options.FontFamily)
                               ReactEditor.Value model.HtmlCode
                               ReactEditor.IsHidden (model.CodeTab <> CodeTab.Html)
                               ReactEditor.CustomClass (fontSizeClass model.Sidebar.Options.FontSize)
                               ReactEditor.OnChange (ChangeHtmlCode >> dispatch)
                               ReactEditor.EditorDidMount (registerCompileCommand dispatch) ]
          // Css editor
          ReactEditor.editor [ ReactEditor.Options (cssEditorOptions
                                                        model.Sidebar.Options.FontSize
                                                        model.Sidebar.Options.FontFamily)
                               ReactEditor.Value model.CssCode
                               ReactEditor.IsHidden (model.CodeTab <> CodeTab.Css)
                               ReactEditor.CustomClass (fontSizeClass model.Sidebar.Options.FontSize)
                               ReactEditor.OnChange (ChangeCssCode >> dispatch)
                               ReactEditor.EditorDidMount (registerCompileCommand dispatch) ]
          // F# editor
          ReactEditor.editor [ ReactEditor.Options (fsharpEditorOptions
                                                        model.Sidebar.Options.FontSize
                                                        model.Sidebar.Options.FontFamily)
                               ReactEditor.Value model.FSharpCode
                               ReactEditor.IsHidden (model.CodeTab <> CodeTab.FSharp)
                               ReactEditor.OnChange (ChangeFsharpCode >> dispatch)
                               ReactEditor.Errors model.FSharpErrors
                               ReactEditor.EventId "fsharp_cursor_jump"
                               ReactEditor.CustomClass (fontSizeClass model.Sidebar.Options.FontSize)
                               ReactEditor.EditorDidMount (fun editor monacoModule ->
                                if not (isNull editor) then
                                    dispatch (SetFSharpEditor editor)

                                    // Because we have access to the monacoModule here,
                                    // register the different provider needed for F# editor
                                    let getTooltip line column lineText =
                                        async {
                                            let id = System.Guid.NewGuid()
                                            return! model.Worker.PostAndAwaitResponse(GetTooltip(id, line, column, lineText), function
                                                | FoundTooltip(id2, lines) when id = id2 -> Some lines
                                                | _ -> None)
                                        }

                                    let tooltipProvider = Editor.createTooltipProvider getTooltip
                                    monacoModule.languages.registerHoverProvider("fsharp", tooltipProvider) |> ignore

                                    let getDeclarationLocation uri line column lineText =
                                        async {
                                            let id = System.Guid.NewGuid()
                                            return! model.Worker.PostAndAwaitResponse(GetDeclarationLocation(id, line, column, lineText), function
                                                | FoundDeclarationLocation(id2, res) when id = id2 ->
                                                    res |> Option.map (fun (line1, col1, line2, col2) ->
                                                        uri, line1, col1, line2, col2) |> Some
                                                | _ -> None)
                                        }

                                    let editorUri = editor.getModel().uri
                                    let definitionProvider = Editor.createDefinitionProvider (getDeclarationLocation editorUri)
                                    monacoModule.languages.registerDefinitionProvider("fsharp", definitionProvider) |> ignore

                                    let getCompletion line column lineText =
                                        async {
                                            let id = System.Guid.NewGuid()
                                            return! model.Worker.PostAndAwaitResponse(GetCompletions(id, line, column, lineText), function
                                                | FoundCompletions(id2, lines) when id = id2 -> Some lines
                                                | _ -> None)
                                        }

                                    let completionProvider = Editor.createCompletionProvider getCompletion
                                    monacoModule.languages.registerCompletionItemProvider("fsharp", completionProvider) |> ignore

                                    registerCompileCommand dispatch editor monacoModule
                               ) ]
          problemsPanel model.IsProblemsPanelExpanded model.FSharpErrors model.CodeTab dispatch ]


let private outputTabs (activeTab : OutputTab) dispatch =
    Tabs.tabs [ Tabs.IsCentered
                Tabs.Size Size.IsMedium
                Tabs.IsToggle ]
        [ Tabs.tab [ Tabs.Tab.IsActive (activeTab = OutputTab.Live)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetOutputTab OutputTab.Live |> dispatch)
                     ] ]
            [ a [ ] [ str "Live sample" ] ]
          Tabs.tab [ Tabs.Tab.IsActive (activeTab = OutputTab.Code)
                     Tabs.Tab.Props [
                         OnClick (fun _ -> SetOutputTab OutputTab.Code |> dispatch)
                     ] ]
            [ a [ ] [ str "Code" ] ] ]

let private toggleDisplay cond =
    if cond then "" else "is-hidden"

let private viewIframe isShown url =
    iframe [ Src url
             Class (toggleDisplay isShown) ]
        [ ]

let private viewCodeEditor (model: Model) =
    let fontFamily = model.Sidebar.Options.FontFamily
    let options = jsOptions<Monaco.Editor.IEditorConstructionOptions>(fun o ->
                        let minimapOptions = jsOptions<Monaco.Editor.IEditorMinimapOptions>(fun oMinimap ->
                            oMinimap.enabled <- Some false
                        )
                        o.language <- Some "javascript"
                        o.fontSize <- Some model.Sidebar.Options.FontSize
                        o.theme <- Some "vs-dark"
                        o.minimap <- Some minimapOptions
                        o.readOnly <- Some true
                        o.fontFamily <- Some fontFamily
                        o.fontLigatures <- Some (fontFamily = "Fira Code")
                    )

    ReactEditor.editor [ ReactEditor.Options options
                         ReactEditor.Value model.CodeES2015
                         ReactEditor.IsHidden (model.OutputTab <> OutputTab.Code)
                         ReactEditor.CustomClass (fontSizeClass model.Sidebar.Options.FontSize) ]

let private outputArea model dispatch =
    let isLiveViewShown = model.OutputTab = OutputTab.Live
    let content =
        [ outputTabs model.OutputTab dispatch
          div [ Class "output-content"; Style [Height "100%"] ]
            [ (if model.State = Loading then
                    div [Class ("is-loading title has-text-centered " + (toggleDisplay isLiveViewShown))
                         Style [Height "100%"; FontSize "1.2em"]] []
                else viewIframe isLiveViewShown model.IFrameUrl)
              viewCodeEditor model
              ConsolePanel.view model.Logs ] ]

    div [ Class "output-container"
          Style [ Width (numberToPercent (1. - model.PanelSplitRatio)) ] ]
        content

let private actionArea (state : State) dispatch =
    let compileIcon =
        if state = State.Compiling then
            [ Fa.i [ Fa.Solid.Spinner; Fa.Spin ] [] ]
        else
            [ Fa.i [ Fa.Solid.Play ] [] ]

    let expanded =
        div [ Class "actions-area" ]
            [ div [ Class "action-button" ]
                [ Button.button [ Button.IsOutlined
                                  Button.Disabled (state = Loading)
                                  Button.OnClick (fun _ -> dispatch (StartCompile None)) ]
                    [ Icon.icon [ Icon.Size IsSmall ]
                        compileIcon
                      span [ ]
                        [ str "Compile" ] ] ]
              div [ Class "action-button" ]
                [ Button.button [ Button.IsOutlined
                                  Button.Disabled (state = Loading)
                                  Button.OnClick (fun _ -> dispatch RefreshIframe) ]
                    [ Icon.icon [ Icon.Size IsSmall ]
                        [ Fa.i [ Fa.Solid.SyncAlt ] [] ]
                      span [ ]
                        [ str "Refresh" ] ] ] ]

    let collapsed =
        div [ Class "actions-area" ]
            [ div [ Class "action-button" ]
                [ Button.button [ Button.IsOutlined
                                  Button.Disabled (state = Loading)
                                  Button.OnClick (fun _ -> dispatch (StartCompile None)) ]
                    [ Icon.icon [ Icon.Size IsLarge ] compileIcon ] ]
              div [ Class "action-button" ]
                [ Button.button [ Button.IsOutlined
                                  Button.Disabled (state = Loading)
                                  Button.OnClick (fun _ -> dispatch RefreshIframe) ]
                    [ Icon.icon [ Icon.Size IsLarge ]
                        [ Fa.i [ Fa.Solid.SyncAlt ] [] ] ] ] ]

    (expanded, collapsed)

let view (model: Model) dispatch =
    Elmish.React.Common.lazyView2
        (fun model dispatch ->
            let isDragging =
                match model.DragTarget with
                | PanelSplitter -> true
                | NoTarget -> false
            div [ classList [ "is-unselectable", isDragging ] ]
                [ div [ Class "page-content" ]
                    [ Sidebar.view model.Sidebar (actionArea model.State dispatch) (SidebarMsg >> dispatch)
                      div [ Class "main-content" ]
                        [ editorArea model dispatch
                          div [ Class "horizontal-resize"
                                OnMouseDown (fun ev ->
                                    // This prevents text selection in Safari
                                    ev.preventDefault()
                                    dispatch PanelDragStarted) ]
                              [ ]
                          outputArea model dispatch ] ] ]

        )
        model
        dispatch

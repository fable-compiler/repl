open System.IO
open System.Collections.Generic
open FSharp.Compiler.CodeAnalysis
open Ionide.ProjInfo

let readRefs (folder : string) (projectFile: string) =
    let projectDirectory: DirectoryInfo = DirectoryInfo folder
    let fsProjPath = __SOURCE_DIRECTORY__ + "/" + projectFile
    let toolsPath = Init.init projectDirectory None
    let defaultLoader: IWorkspaceLoader = WorkspaceLoader.Create(toolsPath, [])

    let mutable isReady = false
    let mutable refs = []

    let subscription: System.IDisposable = defaultLoader.Notifications.Subscribe(fun msg ->
        match msg with
        | Types.WorkspaceProjectState.Loaded (proj, _, _) ->
            printfn "Project loaded"

            refs <-
                proj.OtherOptions
                |> List.filter (fun s -> s.StartsWith("-r:"))
                |> List.map (fun s -> s.Replace("-r:", ""))
            isReady <- true

        | Types.WorkspaceProjectState.Failed (projectFilePath,  errors) ->
            printfn "Errors: %A" errors
            failwithf "Failed to load project: %s" projectFilePath
        | Types.WorkspaceProjectState.Loading (projectFilePath) ->
            printfn "Loading project: %s" projectFilePath
    )

    let projectOptions = defaultLoader.LoadProjects([ fsProjPath ]) |> Seq.toArray

    // This is ugly, but I don't know how to transform an Observable to Async or Syncronous operation
    while not isReady do
        System.Threading.Thread.Sleep(100)

    refs

let mkStandardProjectReferences () =
    let file = "fcs-export.fsproj"
    let projDir = __SOURCE_DIRECTORY__
    readRefs projDir file

let mkProjectCommandLineArgsForScript (dllName, fileNames) =
    [|  yield "--simpleresolution"
        yield "--noframework"
        yield "--debug:full"
        yield "--define:DEBUG"
        yield "--optimize-"
        yield "--out:" + dllName
        yield "--doc:test.xml"
        yield "--warn:3"
        yield "--fullpaths"
        yield "--flaterrors"
        yield "--target:library"
        for x in fileNames do
            yield x
        let references = mkStandardProjectReferences ()
        for r in references do
            yield "-r:" + r
     |]

let checker = FSharpChecker.Create()

let parseAndCheckScript (file, input) =
    let dllName = Path.ChangeExtension(file, ".dll")
    let projName = Path.ChangeExtension(file, ".fsproj")
    let args = mkProjectCommandLineArgsForScript (dllName, [file])
    printfn "file: %s" file
    args |> Array.iter (printfn "args: %s")
    let projectOptions = checker.GetProjectOptionsFromCommandLineArgs (projName, args)
    let parseRes, typedRes = checker.ParseAndCheckFileInProject(file, 0, input, projectOptions) |> Async.RunSynchronously

    if parseRes.Diagnostics.Length > 0 then
        printfn "---> Parse Input = %A" input
        printfn "---> Parse Error = %A" parseRes.Diagnostics

    match typedRes with
    | FSharpCheckFileAnswer.Succeeded(res) -> parseRes, res
    | res -> failwithf "Parsing did not finish... (%A)" res

[<EntryPoint>]
let main argv =
    ignore argv
    printfn "Exporting metadata..."
    let file = "/temp/test.fsx"
    let input = "let a = 42"
    let sourceText = FSharp.Compiler.Text.SourceText.ofString input
    // parse script just to export metadata
    let parseRes, typedRes = parseAndCheckScript(file, sourceText)
    printfn "Exporting is done."
    0

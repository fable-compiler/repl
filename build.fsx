open System
open System.IO
open System.Net
open System.Text.RegularExpressions

let CWD = __SOURCE_DIRECTORY__
let NCAVE_FCS_REPO = Path.Combine(CWD, "../FSharp.Compiler.Service_fable")
let FABLE_REPO = Path.Combine(CWD, "../Fable")

let LIBS_OUTPUT = Path.Combine(CWD, "public/libs")
let REPL_OUTPUT = Path.Combine(CWD, "public/js/repl")
let METADATA_OUTPUT = Path.Combine(CWD, "public/metadata")
let METADATA_SOURCE = Path.Combine(NCAVE_FCS_REPO, "temp/metadata2")

let METADATA_EXPORT_DIR = Path.Combine(CWD, "src/Export")
let APP_DIR = Path.Combine(CWD, "src/App")

// include Fake libs
#r "./packages/build/FAKE/tools/FakeLib.dll"
#r "System.IO.Compression.FileSystem"
#load "paket-files/build/fsharp/FAKE/modules/Octokit/Octokit.fsx"
#load "paket-files/build/fable-compiler/fake-helpers/Fable.FakeHelpers.fs"

open Fake
open Fake.Git
open Fake.YarnHelper
open Fable.FakeHelpers

let mutable dotnetExePath = "dotnet"

let runDotnet dir =
    DotNetCli.RunCommand (fun p -> { p with ToolPath = dotnetExePath
                                            WorkingDir = dir
                                            TimeOut =  TimeSpan.FromHours 12. } )
                                            // Extra timeout allow us to run watch mode
                                            // Otherwise, the process is stopped every 30 minutes by default

let runScript workingDir (fileName: string) args =
    printfn "CWD: %s" workingDir
    let fileName, args =
        if EnvironmentHelper.isUnix then
            let fileName = fileName.Replace("\\","/")
            "bash", (fileName + ".sh " + args)
        else
            "cmd", ("/C " + fileName + " " + args)
    let ok =
        execProcess (fun info ->
            info.FileName <- fileName
            info.WorkingDirectory <- workingDir
            info.Arguments <- args) TimeSpan.MaxValue
    if not ok then failwith (sprintf "'%s> %s %s' task failed" workingDir fileName args)

let runYarn dir command =
    Yarn (fun p ->
            { p with
                WorkingDirectory = dir
                Command = Custom command
            })

let rec waitUserResponse _ =
    let userInput = Console.ReadLine()
    match userInput.ToUpper() with
    | "Y" -> true
    | "N" -> false
    | _ ->
        printfn "Invalid response"
        waitUserResponse ()

type RepoSetupInfo =
    { FolderPath : string
      GithubLink : string
      GithubBranch : string }

let ensureRepoSetup (info : RepoSetupInfo) =
    let folderName = Path.GetFileName(info.FolderPath)
    // Use getBuildParamOrDefault to force Y on CI server
    // See: http://fake.build/apidocs/fake-environmenthelper.html
    // and: https://stackoverflow.com/questions/26267601/can-i-pass-a-parameter-to-a-f-fake-build-script
    if not (Directory.Exists(info.FolderPath)) then
        let rootDir = Path.GetDirectoryName(info.FolderPath)
        printfn "Can't find %s at: %s" folderName rootDir
        let setupMode = getBuildParamOrDefault "setup" "ask"

        if setupMode = "ask" then
            printfn "Do you want me to setup it for you ? (Y/N)"
            let autoSetup = waitUserResponse ()
            if autoSetup then
                printfn "Installing %s for you" folderName
                Repository.clone rootDir info.GithubLink folderName
                runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore
            else
                failwithf "You need to setup the %s project at %s yourself." folderName rootDir
        else
            printfn "You started with auto setup mode. Installing %s for you..." folderName
            Repository.clone rootDir info.GithubLink folderName
            runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore
    else
        printfn "Directory %s found" folderName
        // Ensure this is the correct branch
        runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore

// TODO: Get version from fable-web-worker package
let updateVersion () =
    let version = File.ReadAllText(REPL_OUTPUT </> "version.txt")
    let reg = Regex(@"\bVERSION\s*=\s*""(.*?)""")
    let mainFile = CWD </> "src/App/Shared.fs"
    (reg, mainFile) ||> replaceLines (fun line m ->
        let replacement = sprintf "VERSION = \"%s\"" version
        reg.Replace(line, replacement) |> Some)

Target "BuildLibBinary" (fun _ ->
    runDotnet (CWD </> "src/Lib") "build"
)

Target "BuildFcsExport" (fun _ ->
    ensureRepoSetup
        { FolderPath = NCAVE_FCS_REPO
          GithubLink = "git@github.com:ncave/FSharp.Compiler.Service.git"
          GithubBranch = "export" }

    sprintf "Export.Metadata --envvar FCS_EXPORT_PROJECT \"%s\"" METADATA_EXPORT_DIR
    |> runScript NCAVE_FCS_REPO "fcs\\build"
)

// TODO: Move this to Fable repo
Target "GenerateMetadata" (fun _ ->
    CleanDir METADATA_OUTPUT
    CopyDir METADATA_OUTPUT METADATA_SOURCE (fun _ -> true)
)

Target "InstallDotNetCore" (fun _ ->
    let dotnetcliVersion =
        Path.Combine(__SOURCE_DIRECTORY__, "global.json")
        |> findLineAndGetGroupValue "\"version\": \"(.*?)\"" 1
    dotnetExePath <- DotNetCli.InstallDotNetSDK dotnetcliVersion
)

Target "Clean" (fun _ ->
    !! "public/js"
    ++ LIBS_OUTPUT
    ++ METADATA_OUTPUT
    ++ "deploy"
  |> CleanDirs
)

Target "Restore" (fun _ ->
    runDotnet CWD "restore Fable.REPL.sln"
)

Target "YarnInstall" (fun _ ->
    Yarn (fun p ->
            { p with
                Command = Install Standard
            })
)

Target "CopyModules" (fun _ ->
    let vsOutput = LIBS_OUTPUT </> "vs"
    let cssOutput = LIBS_OUTPUT </> "css"
    CreateDir vsOutput
    CreateDir cssOutput
    CopyDir vsOutput ("node_modules" </> "monaco-editor" </> "min" </> "vs") (fun _ -> true)
    CopyFile LIBS_OUTPUT "node_modules/react/umd/react.production.min.js"
    CopyFile LIBS_OUTPUT "node_modules/react-dom/umd/react-dom.production.min.js"
    CopyFile cssOutput "node_modules/bulma/css/bulma.min.css"
    CopyFile cssOutput "node_modules/font-awesome/css/font-awesome.min.css"
    CopyDir (LIBS_OUTPUT </> "fonts") "node_modules/font-awesome/fonts" (fun _ -> true)

    // Metadata
    CopyDir METADATA_OUTPUT "node_modules/fable-metadata/lib" (fun _ -> true)
    CopyDir METADATA_OUTPUT "public/metadata-extra" (fun _ -> true)
    // Change extension to .txt so Github pages compress the files when being served
    !! (METADATA_OUTPUT </> "*.dll") |> Seq.iter(fun filename ->
        Rename (filename + ".txt") filename)

    // Fable Standalone
    CopyDir REPL_OUTPUT "node_modules/fable-standalone/dist" (fun _ -> true)
)

Target "WatchApp" (fun _ ->
    runYarn CWD "webpack-dev-server"
)

Target "BuildApp" (fun _ ->
    runYarn CWD "webpack"
)

Target "PublishGithubPages" (fun _->
    runYarn CWD "gh-pages -d deploy"
)

Target "BuildLib" (fun _ ->
    runYarn CWD "fable-splitter -c src/Lib/splitter.config.js"

    // Ensure that all imports end with .js
    let outDir = REPL_OUTPUT </> "lib"
    let reg = Regex(@"^import.+?""[^""]+")
    for file in Directory.EnumerateFiles(CWD </> outDir, "*.js", SearchOption.AllDirectories) do
        let newLines =
            File.ReadLines file
            |> Seq.map (fun line -> reg.Replace(line, fun m ->
                if m.Value.EndsWith(".js") then m.Value else m.Value + ".js" ))
            |> Seq.toArray
        File.WriteAllLines(file, newLines)
)

// Test samples build correctly
Target "BuildSamples" (fun _ ->
    // fable-splitter will adjust the fable-core path
    let fableCoreDir = "force:${outDir}../fable-core"
    let libProj = "public/samples/Samples.fsproj"
    let outDir = "temp"
    let splitterArgs = sprintf "%s -o %s --allFiles" libProj outDir
    sprintf "run -p ../fable/src/dotnet/Fable.Compiler fable-splitter --fable-core %s --args \"%s\""
        fableCoreDir splitterArgs
    |> runDotnet CWD
)

Target "All" DoNothing

// Build order
"Clean"
    ==> "InstallDotNetCore"
    ==> "Restore"
    ==> "YarnInstall"
    ==> "CopyModules"
    ==> "BuildLib"
    ==> "BuildApp"
    ==> "All"

"BuildLibBinary"
    ==> "BuildFcsExport"
    ==> "GenerateMetadata"

"BuildApp"
    ==> "PublishGithubPages"

"BuildLib"
    ==> "WatchApp"

// start build
RunTargetOrDefault "All"

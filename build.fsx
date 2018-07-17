let AppveyorReplArtifactURLParams = "?branch=master"
let AppveyorReplArtifactURL =
    "https://ci.appveyor.com/api/projects/fable-compiler/Fable/artifacts/src/dotnet/Fable.JS/demo/repl/bundle.zip"
    + AppveyorReplArtifactURLParams
// TODO: Actually, version should come from the artifact
let fableVersion = None // Some "1.3.14"
let FCSExportFolderName = "FSharp.Compiler.Service_export"
let FableFolderName = "Fable"
let dotnetcliVersion = "2.1.4"

// include Fake libs
#r "./packages/build/FAKE/tools/FakeLib.dll"
#r "System.IO.Compression.FileSystem"
#load "paket-files/build/fsharp/FAKE/modules/Octokit/Octokit.fsx"
#load "paket-files/build/fable-compiler/fake-helpers/Fable.FakeHelpers.fs"

open System
open System.IO
open System.Net
open System.Text.RegularExpressions
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

let downloadArtifact path (url: string) =
    let tempFile = Path.ChangeExtension(Path.GetTempFileName(), ".zip")
    use client = new WebClient()
    client.DownloadFile(Uri url, tempFile)
    CleanDir path
    Unzip path tempFile
    File.Delete tempFile

let currentDir = __SOURCE_DIRECTORY__
let sourceDir = currentDir </> "src"
let rootDir = currentDir </> ".."
let FCSExportFolderPath = rootDir </> FCSExportFolderName
let FableFolderPath = rootDir </> FableFolderName

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
      FolderName : string
      GithubLink : string
      GithubBranch : string }

let ensureRepoSetup (info : RepoSetupInfo) =
    // Use getBuildParamOrDefault to force Y on CI server
    // See: http://fake.build/apidocs/fake-environmenthelper.html
    // and: https://stackoverflow.com/questions/26267601/can-i-pass-a-parameter-to-a-f-fake-build-script
    if not (Directory.Exists(info.FolderPath)) then
        printfn "Can't find %s at: %s" info.FolderName rootDir
        let setupMode = getBuildParamOrDefault "setup" "ask"

        if setupMode = "ask" then
            printfn "Do you want me to setup it for you ? (Y/N)"
            let autoSetup = waitUserResponse ()
            if autoSetup then
                printfn "Installing %s for you" info.FolderName
                Repository.clone rootDir info.GithubLink info.FolderName
                runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore
            else
                failwithf "You need to setup the %s project at %s yourself so." info.FolderName rootDir
        else
            printfn "You started with auto setup mode. Installing %s for you" info.FolderName
            Repository.clone rootDir info.GithubLink info.FolderName
            runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore
    else
        printfn "Directory %s found" info.FolderName

Target "Build.FCS_Export" (fun _ ->
    ensureRepoSetup
        { FolderPath = FCSExportFolderPath
          FolderName = FCSExportFolderName
          GithubLink = "git@github.com:ncave/FSharp.Compiler.Service.git"
          GithubBranch = "export" }

    runScript FCSExportFolderPath "fcs\\build" "Export.Metadata"
)

Target "Generate.Metadata" (fun _ ->
    let destination = currentDir </> "public" </> "metadata2"
    CleanDir destination
    CopyDir destination (FCSExportFolderPath </> "temp" </> "metadata2") (fun _ -> true)
    !! (destination </> "*.dll")
    |> Seq.iter(fun filename ->
        Rename (filename + ".txt") filename
    )
)

Target "InstallDotNetCore" (fun _ ->
   dotnetExePath <- DotNetCli.InstallDotNetSDK dotnetcliVersion
)

let libsOutput = "public" </> "libs"

Target "Clean" (fun _ ->
    !! "public/js"
    ++ libsOutput
  |> CleanDirs
)

// Dependencies

Target "Restore" (fun _ ->
    runDotnet currentDir "restore Fable.REPL.sln"
)

Target "YarnInstall" (fun _ ->
    Yarn (fun p ->
            { p with
                Command = Install Standard
            })
)

Target "CopyModules" (fun _ ->
    let requireJsOutput = libsOutput </> "requirejs"
    let vsOutput = libsOutput </> "vs"
    CreateDir requireJsOutput
    CreateDir vsOutput
    CopyFile requireJsOutput ("node_modules" </> "requirejs" </> "require.js")
    CopyDir vsOutput ("node_modules" </> "monaco-editor" </> "min" </> "vs") (fun _ -> true)
)

Target "Watch.App" (fun _ ->
    runYarn sourceDir "start-app"
)

Target "Build.App" (fun _ ->
    runYarn sourceDir "build-app"
)

Target "Publish.GHPages" (fun _->
    runYarn currentDir "gh-pages -d public"
)

Target "DownloadReplArtifact" (fun _ ->
    let targetDir = currentDir </> "public/js/repl"
    downloadArtifact targetDir AppveyorReplArtifactURL
)

Target "UpdateVersion" (fun _ ->
    let version =
        match fableVersion with
        | Some v -> v
        | None ->
            ensureRepoSetup
                { FolderPath = FableFolderPath
                  FolderName = FableFolderName
                  GithubLink = "git@github.com:fable-compiler/Fable.git"
                  GithubBranch = "master" }
            let release =
                FableFolderPath </> "src/dotnet/Fable.Compiler/RELEASE_NOTES.md"
                |> ReleaseNotesHelper.LoadReleaseNotes
            release.NugetVersion

    let reg = Regex(@"\bVERSION\s*=\s*""(.*?)""")
    let mainFile = sourceDir </> "App/Widgets/About.fs"
    (reg, mainFile) ||> replaceLines (fun line m ->
        let replacement = sprintf "VERSION = \"%s\"" version
        reg.Replace(line, replacement) |> Some)
)

Target "All" DoNothing

// Build order
"Clean"
    ==> "InstallDotNetCore"
    ==> "Restore"
    ==> "YarnInstall"
    ==> "CopyModules"
    ==> "DownloadReplArtifact"
    ==> "UpdateVersion"
    ==> "Build.App"
    ==> "All"

"Build.FCS_Export"
    ==> "Generate.Metadata"

"Publish.GHPages"
    <== [ "Build.App" ]

// start build
RunTargetOrDefault "All"

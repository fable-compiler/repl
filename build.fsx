let fableBranch = "dev2.0"
let AppveyorReplArtifactURLParams = "?branch=" + fableBranch
let AppveyorReplArtifactURL =
    "https://ci.appveyor.com/api/projects/fable-compiler/Fable/artifacts/src/dotnet/Fable.JS/repl-bundle.zip"
    + AppveyorReplArtifactURLParams

let FCSExportFolderName = "FSharp.Compiler.Service_export"
let FableFolderName = "Fable"

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

let addJsExtensionToFableCoreImports fableCorePath =
    let reg = Regex(@"^import (.*"".*)("".*)$", RegexOptions.Multiline)
    for file in Directory.EnumerateFiles(fableCorePath, "*.js", SearchOption.AllDirectories) do
        File.WriteAllText(file, reg.Replace(File.ReadAllText(file), "import $1.js$2"))

let downloadArtifact path (url: string) =
    let tempFile = Path.ChangeExtension(Path.GetTempFileName(), ".zip")
    use client = new WebClient()
    client.DownloadFile(Uri url, tempFile)
    CleanDir path
    Unzip path tempFile
    File.Delete tempFile

let currentDir = __SOURCE_DIRECTORY__
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
                failwithf "You need to setup the %s project at %s yourself." info.FolderName rootDir
        else
            printfn "You started with auto setup mode. Installing %s for you..." info.FolderName
            Repository.clone rootDir info.GithubLink info.FolderName
            runSimpleGitCommand info.FolderPath ("checkout " + info.GithubBranch) |> ignore
    else
        printfn "Directory %s found" info.FolderName

Target "BuildFcsExport" (fun _ ->
    ensureRepoSetup
        { FolderPath = FCSExportFolderPath
          FolderName = FCSExportFolderName
          GithubLink = "git@github.com:ncave/FSharp.Compiler.Service.git"
          GithubBranch = "export" }

    runScript FCSExportFolderPath "fcs\\build" "Export.Metadata"
)

Target "GenerateMetadata" (fun _ ->
    let destination = currentDir </> "public" </> "metadata2"
    CleanDir destination
    CopyDir destination (FCSExportFolderPath </> "temp" </> "metadata2") (fun _ -> true)
    !! (destination </> "*.dll")
    |> Seq.iter(fun filename ->
        Rename (filename + ".txt") filename
    )
)

Target "InstallDotNetCore" (fun _ ->
    let dotnetcliVersion =
        Path.Combine(__SOURCE_DIRECTORY__, "global.json")
        |> findLineAndGetGroupValue "\"version\": \"(.*?)\"" 1
    dotnetExePath <- DotNetCli.InstallDotNetSDK dotnetcliVersion
)

let libsOutput = "public" </> "libs"

Target "Clean" (fun _ ->
    !! "public/js"
    ++ libsOutput
    ++ "deploy"
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
    let vsOutput = libsOutput </> "vs"
    CreateDir vsOutput
    CopyDir vsOutput ("node_modules" </> "monaco-editor" </> "min" </> "vs") (fun _ -> true)
)

Target "WatchApp" (fun _ ->
    runYarn currentDir "start-app"
)

Target "BuildApp" (fun _ ->
    runYarn currentDir "build-app"
)

Target "PublishGithubPages" (fun _->
    runYarn currentDir "gh-pages -d deploy"
)

Target "DownloadReplArtifact" (fun _ ->
    let targetDir = currentDir </> "public/js/repl"
    downloadArtifact targetDir AppveyorReplArtifactURL
    addJsExtensionToFableCoreImports (targetDir </> "fable-core")
)

Target "BuildLib" (fun _ ->
    // fable-splitter will adjust the fable-core path
    let fableCoreDir = "force:${outDir}../fable-core"
    let splitterArgs = "src/Lib/Fable.Repl.Lib.fsproj -o public/js/repl/lib --allFiles"
    runDotnet (currentDir </> "src/App")
        (sprintf "fable fable-splitter --fable-core %s -- %s" fableCoreDir splitterArgs)
)

Target "UpdateVersion" (fun _ ->
    let version =
        ensureRepoSetup
            { FolderPath = FableFolderPath
              FolderName = FableFolderName
              GithubLink = "git@github.com:fable-compiler/Fable.git"
              GithubBranch = fableBranch }
        let release =
            FableFolderPath </> "src/dotnet/Fable.Compiler/RELEASE_NOTES.md"
            |> ReleaseNotesHelper.LoadReleaseNotes
        release.NugetVersion
    let reg = Regex(@"\bVERSION\s*=\s*""(.*?)""")
    let mainFile = currentDir </> "src/App/Shared.fs"
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
    ==> "BuildApp"
    ==> "All"

"BuildFcsExport"
    ==> "GenerateMetadata"

"PublishGithubPages"
    <== [ "BuildApp" ]

// start build
RunTargetOrDefault "All"

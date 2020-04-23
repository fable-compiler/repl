#r "paket: groupref netcorebuild //"
#load ".fake/build.fsx/intellisense.fsx"
#if !FAKE
#r "Facades/netstandard"
#r "netstandard"
#endif

#nowarn "52"

open System
open System.IO
open System.Text.RegularExpressions

open Fake.Core
open Fake.IO
open Fake.IO.Globbing.Operators
open Fake.IO.FileSystemOperators
open Fake.DotNet
open Fake.Tools
open Fake.Api
open Fake.JavaScript
open BlackFox.Fake

let CWD = __SOURCE_DIRECTORY__
let NCAVE_FCS_REPO = Path.Combine(CWD, "../fsharp_fable")

let LIBS_OUTPUT = Path.Combine(CWD, "public/libs")
let REPL_OUTPUT = Path.Combine(CWD, "public/js/repl")
let METADATA_OUTPUT = Path.Combine(CWD, "public/metadata")
let METADATA_SOURCE = Path.Combine(NCAVE_FCS_REPO, "temp/metadata2")
let METADATA_EXTRA_SOURCE = Path.Combine(CWD, "metadata/lib")

let METADATA_EXPORT_DIR = Path.Combine(CWD, "src\Export")
let CHANGELOG_FILE = Path.Combine(CWD, "CHANGELOG.md")
let PRELUDE_FILE = CWD </> "src/App/Prelude.fs"

module Util =

    let runScript workingDir (fileName: string) args =
        printfn "CWD: %s" workingDir
        let fileName, args =
            if Environment.isUnix then
                let fileName = fileName.Replace("\\","/")
                "bash", (fileName + ".sh " + args)
            else
                "cmd", ("/C " + fileName + " " + args)
        let ok =
            CreateProcess.fromRawCommand "cmd" [ args ]
            |> CreateProcess.withWorkingDirectory workingDir
            |> Proc.run

        if ok.ExitCode <> 0 then failwith (sprintf "'%s> %s %s' task failed" workingDir fileName args)

    let visitFile (visitor: string -> string) (fileName : string) =
        File.ReadAllLines(fileName)
        |> Array.map (visitor)
        |> fun lines -> File.WriteAllLines(fileName, lines)

    let replaceLines (replacer: string -> Match -> string option) (reg: Regex) (fileName: string) =
        fileName |> visitFile (fun line ->
            let m = reg.Match(line)
            if not m.Success
            then line
            else
                match replacer line m with
                | None -> line
                | Some newLine -> newLine)

module Changelog =

    let versionRegex = Regex("^## ?\\[?v?([\\w\\d.-]+\\.[\\w\\d.-]+[a-zA-Z0-9])\\]?", RegexOptions.IgnoreCase)

    let getLastVersion () =
        File.ReadLines(CHANGELOG_FILE)
            |> Seq.tryPick (fun line ->
                let m = versionRegex.Match(line)
                if m.Success then Some m else None)
            |> function
                | None -> failwith "Couldn't find version in changelog file"
                | Some m ->
                    m.Groups.[1].Value

    let isPreRelease (version : string) =
        let regex = Regex(".*(alpha|beta|rc).*", RegexOptions.IgnoreCase)
        regex.IsMatch(version)

    let getNotes (version : string) =
        File.ReadLines(CHANGELOG_FILE)
        |> Seq.skipWhile(fun line ->
            let m = versionRegex.Match(line)

            if m.Success then
                (m.Groups.[1].Value <> version)
            else
                true
        )
        // Remove the version line
        |> Seq.skip 1
        // Take all until the next version line
        |> Seq.takeWhile (fun line ->
            let m = versionRegex.Match(line)
            not m.Success
        )

let clean = BuildTask.create "Clean" [ ] {
    !! "public/js"
    ++ LIBS_OUTPUT
    ++ "deploy"
  |> Shell.cleanDirs
}

let restore = BuildTask.create "Restore" [ clean ] {
    DotNet.restore
        (DotNet.Options.withWorkingDirectory CWD)
        "Fable.REPL.sln"
}

let npmInstall = BuildTask.create "NpmInstall" [ restore ] {
    Npm.install id
}

let copyModules = BuildTask.create "CopyModules" [ npmInstall ] {
    let cssOutput = LIBS_OUTPUT </> "css"
    Directory.create cssOutput
    Shell.copyFile LIBS_OUTPUT "node_modules/react/umd/react.production.min.js"
    Shell.copyFile LIBS_OUTPUT "node_modules/react-dom/umd/react-dom.production.min.js"
    Shell.copyFile cssOutput "node_modules/bulma/css/bulma.min.css"
    Shell.copyFile cssOutput "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
    Shell.copyDir (LIBS_OUTPUT </> "webfonts") "node_modules/@fortawesome/fontawesome-free/webfonts" (fun _ -> true)

    Shell.cleanDir METADATA_OUTPUT
    Shell.copyDir METADATA_OUTPUT "node_modules/fable-metadata/lib" (fun _ -> true)
    Shell.copyDir METADATA_OUTPUT METADATA_EXTRA_SOURCE (fun _ -> true)

    // Change extension to .txt so Github pages compress the files when being served
    !! (METADATA_OUTPUT </> "*.dll")
    |> Seq.iter(fun filename ->
        Shell.rename (filename + ".txt") filename
    )

    Shell.copyDir REPL_OUTPUT "node_modules/fable-standalone/dist" (fun _ -> true)

    // Automatically update the version in Prelude.fs
    let reg = Regex(@"let \[<Literal>\] FABLE_VERSION = ""(.*)""")
    let fableCompilerPackageJson = CWD </> "node_modules/fable-compiler/package.json"
    let currentVersionRegex = Regex(@"^\s*""version"":\s*""(.*)""")
    let currentVersion =
        fableCompilerPackageJson
        |> File.ReadLines
        |> Seq.find (fun line ->
            currentVersionRegex.IsMatch(line)
        )
        |> fun line ->
            currentVersionRegex.Match(line).Groups.[1].Value

    let newLines =
        PRELUDE_FILE
        |> File.ReadLines
        |> Seq.map (fun line ->
            reg.Replace(line, fun m ->
                m.Groups.[0].Value.Replace(m.Groups.[1].Value, currentVersion)
            )
        )
        |> Seq.toArray

    File.WriteAllLines(PRELUDE_FILE, newLines)
}

// This target generate the metadata for the REPL
// We won't include all of the generated metadata !!!
// We include on the one specific to Fable REPL because the others are coming from fable-metadata
let generateMetadata = BuildTask.create "Generate.Metadata" [ ] {
    Shell.cleanDirs !!METADATA_SOURCE
    Shell.cleanDirs !!METADATA_EXTRA_SOURCE

    let args =
        sprintf "Export.Metadata -e FCS_EXPORT_PROJECT=%s" METADATA_EXPORT_DIR

    Util.runScript NCAVE_FCS_REPO "fcs\\build.cmd" args

    Shell.copyDir
        METADATA_EXTRA_SOURCE
        METADATA_SOURCE
        (fun filename ->
            printfn "%A" filename
            [
                "Browser.Blob.dll"
                "Browser.Dom.dll"
                "Browser.Event.dll"
                "Browser.WebStorage.dll"
                "Fable.Repl.Lib.dll"
            ]
            |> List.exists (fun dllName ->
                filename.Contains(dllName)
            )
        )
}

let updatePreludeREPLVersion = BuildTask.create "UpdateREPLVersion" [ ] {
    let newVersion = Changelog.getLastVersion()

    let reg = Regex(@"let \[<Literal>\] REPL_VERSION = ""(.*)""")
    let newLines =
        PRELUDE_FILE
        |> File.ReadLines
        |> Seq.map (fun line ->
            reg.Replace(line, fun m ->
                let previousVersion = m.Groups.[1].Value
                if previousVersion = newVersion then
                    failwith "You need to update the version in the CHANGELOG.md before publishing a new version of the REPL"
                else
                    m.Groups.[0].Value.Replace(m.Groups.[1].Value, newVersion)
            )
        )
        |> Seq.toArray

    File.WriteAllLines(PRELUDE_FILE, newLines)
}

let buildLib = BuildTask.create "BuildLib" [ copyModules ] {
    Npm.run "build-lib" id

    // Ensure that all imports end with .js
    let outDir = REPL_OUTPUT </> "lib"
    let regAllImports = Regex(@"^import.+?""[^""]+")
    let reqFableLibrary = Regex(@"((../)fable-library[^/]*)")
    for file in Directory.EnumerateFiles(CWD </> outDir, "*.js", SearchOption.AllDirectories) do
        let newLines =
            File.ReadLines file
            |> Seq.map (fun line ->
                regAllImports.Replace(line, fun m ->
                    // Patch the fable-library import from the "repl libs"
                    // to make sure they use the same `fable-library` module as the code
                    // compiled from the REPL
                    // This is needed in order to make reflection work
                    // See https://github.com/fable-compiler/repl/issues/97#issuecomment-588498482
                    let adaptedLine =
                        reqFableLibrary.Replace(m.Value, fun m ->
                            m.Value.Replace(m.Groups.[1].Value, "../../fable-library")
                        )

                    if adaptedLine.EndsWith(".js") then adaptedLine else adaptedLine + ".js"
                )
            )
            |> Seq.toArray
        File.WriteAllLines(file, newLines)
}

let buildApp = BuildTask.create "BuildApp" [ updatePreludeREPLVersion.IfNeeded; buildLib ] {
    Npm.run "build" id
}

let watchApp = BuildTask.create "WatchApp" [ buildLib ] {
    Npm.run "start" id
}

let _release = BuildTask.create "Release" [ updatePreludeREPLVersion; buildApp ] {
    let token =
        match Environment.environVarOrDefault "GITHUB_TOKEN" "" with
        | s when not (String.IsNullOrWhiteSpace s) -> s
        | _ -> failwith "The Github token must be set in a GITHUB_TOKEN environmental variable"

    let version = Changelog.getLastVersion()

    Git.Staging.stageAll CWD
    let commitMsg = sprintf "Release version %s" version
    Git.Commit.exec CWD commitMsg
    Git.Branches.push CWD

    GitHub.createClientWithToken token
    |> GitHub.draftNewRelease "fable-compiler" "repl" version (Changelog.isPreRelease version) (Changelog.getNotes version)
    // |> GitHub.uploadFile nupkg
    |> GitHub.publishDraft
    |> Async.RunSynchronously

    Npm.run "deploy" id
}

// Test samples build correctly
let buildSamples = BuildTask.create "BuildSamples" [] {
    // fable-splitter will adjust the fable-core path
    let fableCoreDir = "force:${outDir}../fable-core"
    let libProj = "public/samples/Samples.fsproj"
    let outDir = "temp"
    let splitterArgs = sprintf "%s -o %s --allFiles" libProj outDir
    let args =
        sprintf "-p ../fable/src/dotnet/Fable.Compiler fable-splitter --fable-core %s --args \"%s\"" fableCoreDir splitterArgs

    let res =
        DotNet.exec
            (DotNet.Options.withWorkingDirectory CWD)
            "run"
            args

    if not res.OK then
        Trace.traceErrorfn "Error when building the samples:\n%A" res.Errors
}

let _all = BuildTask.createEmpty "All" [ buildApp ]

BuildTask.runOrList ()
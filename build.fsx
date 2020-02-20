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
open Fake.JavaScript
open BlackFox.Fake

let CWD = __SOURCE_DIRECTORY__
let NCAVE_FCS_REPO = Path.Combine(CWD, "../fsharp_fable")

let LIBS_OUTPUT = Path.Combine(CWD, "public/libs")
let REPL_OUTPUT = Path.Combine(CWD, "public/js/repl")
let METADATA_OUTPUT = Path.Combine(CWD, "public/metadata")
let METADATA_SOURCE = Path.Combine(NCAVE_FCS_REPO, "temp/metadata2")

let METADATA_EXPORT_DIR = Path.Combine(CWD, "src/Export")

module Util =

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

// TODO: Get version from fable-web-worker package
let updateVersion () =
    let version = File.ReadAllText(REPL_OUTPUT </> "version.txt")
    let reg = Regex(@"\bVERSION\s*=\s*""(.*?)""")
    let mainFile = CWD </> "src/App/Shared.fs"
    (reg, mainFile) ||> Util.replaceLines (fun line m ->
        let replacement = sprintf "VERSION = \"%s\"" version
        reg.Replace(line, replacement) |> Some)

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
    // CopyDir METADATA_OUTPUT "public/metadata-extra" (fun _ -> true)
    // Change extension to .txt so Github pages compress the files when being served
    !! (METADATA_OUTPUT </> "*.dll")
    |> Seq.iter(fun filename ->
        Shell.rename (filename + ".txt") filename
    )

    Shell.copyDir REPL_OUTPUT "node_modules/fable-standalone/dist" (fun _ -> true)

    // Automatically update the version in Prelude.fs
    let preludeFile = CWD </> "src/App/Prelude.fs"
    let reg = Regex(@"let \[<Literal>\] VERSION = ""(.*)""")
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
        preludeFile
        |> File.ReadLines 
        |> Seq.map (fun line ->
            reg.Replace(line, fun m ->
                m.Groups.[0].Value.Replace(m.Groups.[1].Value, currentVersion)
            )
        )
        |> Seq.toArray

    File.WriteAllLines(preludeFile, newLines)
}

// TODO re-add generate metadata for REPL lib using git submobules
// let buildLibBinary = BuildTask.create "BuildLibBinary" [ copyModules ] {
//     DotNet.build
//         (DotNet.Options.withWorkingDirectory (CWD </> "src/Lib"))
//         "Fable.Repl.Lib.fsproj"
// }


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

let buildApp = BuildTask.create "BuildApp" [ buildLib ] {
    Npm.run "build" id
}

let watchApp = BuildTask.create "WatchApp" [ buildLib ] {
    Npm.run "start" id
}

let publishGithubPages = BuildTask.create "PublishGithubPages" [ buildApp ] {
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
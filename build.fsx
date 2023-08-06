#r "nuget: Fun.Build, 0.3.1"
#r "nuget: Fake.IO.FileSystem, 5.23.1"
#r "nuget: Fake.Core.Environment, 5.23.1"
#r "nuget: Fake.Tools.Git, 5.23.1"
#r "nuget: Fake.Api.GitHub, 5.23.1"
#r "nuget: SimpleExec, 11.0.0"
#r "nuget: BlackFox.CommandLine, 1.0.0"

open Fun.Build
open Fake.Core
open Fake.IO
open Fake.IO.FileSystemOperators
open Fake.IO.Globbing.Operators
open Fake.Tools
open Fake.Api
open System
open System.IO
open System.Text.RegularExpressions

module Glob =

    open Fake.IO.FileSystemOperators

    let fableJs baseDir = baseDir </> "**/*.fs.js"
    let fableJsMap baseDir = baseDir </> "**/*.fs.js.map"
    let js baseDir = baseDir </> "**/*.js"
    let jsMap baseDir = baseDir </> "**/*.js.map"

module Folders =

    let CWD = __SOURCE_DIRECTORY__
    let NCAVE_FCS_REPO = Path.Combine(CWD, "../fsharp_fable")

    let LIBS_OUTPUT = Path.Combine(CWD, "public/libs")
    let REPL_OUTPUT = Path.Combine(CWD, "public/js/repl")
    let METADATA_OUTPUT = Path.Combine(CWD, "public/metadata")
    let METADATA_EXTRA = Path.Combine(CWD, "src/metadata")

    let METADATA_LIB, STANDALONE_DIST, STANDALONE_SRC =
        match Environment.environVarOrNone "LOCAL_PKG" with
        | Some _ ->
            printfn "Using local packages..."
            "../Fable/src/fable-metadata/lib", "../Fable/src/fable-standalone/dist", "../Fable/src/fable-standalone/src"
        | None ->
            printfn "Using fable-metadata/fable-standalone packages from node_modules..."
            printfn "To use local pacakges, set LOCAL_PKG env var and run `./build.sh standalone` in sibling Fable repository\n"
            "node_modules/fable-metadata/lib", "node_modules/fable-standalone/dist", "node_modules/fable-standalone/src"

module Files =

    let CHANGELOG_FILE = Path.Combine(Folders.CWD, "CHANGELOG.md")

    let PRELUDE_FILE = Folders.CWD </> "src/App/Prelude.fs"


module Changelog =

    let versionRegex = Regex("^## ?\\[?v?([\\w\\d.-]+\\.[\\w\\d.-]+[a-zA-Z0-9])\\]?", RegexOptions.IgnoreCase)

    let getLastVersion () =
        File.ReadLines(Files.CHANGELOG_FILE)
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
        File.ReadLines(Files.CHANGELOG_FILE)
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

module Stages =

    let clean =
        stage "Clean" {
            run (fun _ ->
                !! "public/js"
                ++ Folders.LIBS_OUTPUT
                ++ "deploy"
                |> Shell.cleanDirs
            )
        }

    let donetRestore =
        stage "Restore .NET dependencies" {
            run "dotnet restore"
        }

    let npmInstall =
        stage "NPM install" {
            run "npm install"
        }

    let copyModules =
        stage "Copy modules" {
            run (fun _ ->
                Shell.cleanDir Folders.METADATA_OUTPUT
                Shell.copyDir Folders.METADATA_OUTPUT Folders.METADATA_LIB (fun _ -> true)
                Shell.copyDir Folders.METADATA_OUTPUT Folders.METADATA_EXTRA (fun _ -> true)

                // Change extension to .txt so Github pages compress the files when being served
                !! (Folders.METADATA_OUTPUT </> "*.dll")
                |> Seq.iter(fun filename ->
                    Shell.rename (filename + ".txt") filename
                )

                printfn "Copy files from %s to %s" Folders.STANDALONE_DIST Folders.REPL_OUTPUT
                Shell.copyDir Folders.REPL_OUTPUT Folders.STANDALONE_DIST (fun _ -> true)

                printfn "Copy files from %s to %s" Folders.STANDALONE_SRC "src/Standalone"
                Shell.copyDir "src/Standalone" Folders.STANDALONE_SRC (fun f -> f.EndsWith(".fs"))
            )
        }

    let buildApp =
        stage "Build" {
            run "dotnet fable src/App --run webpack"
        }

    let updatePreludeREPLVersion =
        stage "Update Prelude REPL version" {
            run (fun _ ->
                let newVersion = Changelog.getLastVersion()

                let reg = Regex(@"let \[<Literal>\] REPL_VERSION = ""(.*)""")
                let newLines =
                    Files.PRELUDE_FILE
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

                File.WriteAllLines(Files.PRELUDE_FILE, newLines)
            )
        }

pipeline "WatchApp" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.copyModules

    stage "Watch" {
        run "dotnet fable watch src/App --run webpack-dev-server"
    }

    runIfOnlySpecified
}

pipeline "BuildApp" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.copyModules
    Stages.buildApp

    runIfOnlySpecified
}

pipeline "Release" {

    whenEnvVar "GITHUB_TOKEN"

    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.copyModules
    Stages.buildApp
    Stages.updatePreludeREPLVersion

    stage "Release GITHUB" {
        run (fun ctx ->
            let token = ctx.GetEnvVar "GITHUB_TOKEN"

            let version = Changelog.getLastVersion()

            Git.Staging.stageAll Folders.CWD
            let commitMsg = sprintf "Release version %s" version
            Git.Commit.exec Folders.CWD commitMsg
            Git.Branches.push Folders.CWD


            GitHub.createClientWithToken token
            |> GitHub.draftNewRelease "fable-compiler" "repl" version (Changelog.isPreRelease version) (Changelog.getNotes version)
            // |> GitHub.uploadFile nupkg
            |> GitHub.publishDraft
            |> Async.RunSynchronously
        )

        run "npx gh-pages -d deploy"
    }

    runIfOnlySpecified
}

pipeline "BuildLib" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.copyModules

    stage "Build lib" {
        run "dotnet fable src/Fable.Repl.Lib -o public/js/repl/fable-repl-lib --rootModule false --fableLib public/js/repl/fable-library"

        run (fun _ ->
            let replSource = Path.GetFullPath("src/Fable.Repl.Lib")
            let replTarget = Path.GetFullPath("public/js/repl/fable-repl-lib")

            !! "src/Fable.Repl.Lib/**/*.js"
            |> Seq.iter (fun source ->
                let target = Path.GetFullPath(source).Replace(replSource, replTarget)
                Shell.copyFile target source
                printfn $"Copied {source} to {target}"
            )
        )
    }
}

tryPrintPipelineCommandHelp ()
#r "nuget: Fun.Build, 1.0.3"
#r "nuget: Fake.IO.FileSystem, 5.23.1"
#r "nuget: Fake.Core.Environment, 5.23.1"
#r "nuget: Fake.Tools.Git, 5.23.1"
#r "nuget: Fake.Api.GitHub, 5.23.1"
#r "nuget: SimpleExec, 11.0.0"
#r "nuget: BlackFox.CommandLine, 1.0.0"
#r "nuget: FsToolkit.ErrorHandling, 4.10.0"

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
open BlackFox.CommandLine
open FsToolkit.ErrorHandling
open Fun.Build.Internal

module Glob =

    open Fake.IO.FileSystemOperators

    let fableJs baseDir =
        baseDir
        </> "**/*.fs.js"

    let fableJsMap baseDir =
        baseDir
        </> "**/*.fs.js.map"

    let js baseDir =
        baseDir
        </> "**/*.js"

    let jsMap baseDir =
        baseDir
        </> "**/*.js.map"

module Folders =

    let CWD = __SOURCE_DIRECTORY__
    let NCAVE_FCS_REPO = Path.Combine(CWD, "../fsharp_fable")

    let LIBS_OUTPUT = Path.Combine(CWD, "src/App/public/libs")
    let REPL_OUTPUT = Path.Combine(CWD, "src/App/public/js/repl")
    let METADATA_OUTPUT = Path.Combine(CWD, "src/App/public/metadata")
    let METADATA_EXTRA = Path.Combine(CWD, "src/metadata")

    let METADATA_LIB = Path.Combine(CWD, "node_modules/fable-metadata/lib")

    let STANDALONE_DIST =
        Path.Combine(CWD, "node_modules/fable-standalone/dist")

    let STANDALONE_SRC = Path.Combine(CWD, "node_modules/fable-standalone/src")


module Files =

    let CHANGELOG_FILE = Path.Combine(Folders.CWD, "CHANGELOG.md")

    let PRELUDE_FILE =
        Folders.CWD
        </> "src/App/Prelude.fs"


module Changelog =

    let versionRegex =
        Regex(
            "^## ?\\[?v?([\\w\\d.-]+\\.[\\w\\d.-]+[a-zA-Z0-9])\\]?",
            RegexOptions.IgnoreCase
        )

    let getLastVersion () =
        File.ReadLines(Files.CHANGELOG_FILE)
        |> Seq.tryPick (fun line ->
            let m = versionRegex.Match(line)
            if m.Success then Some m else None
        )
        |> function
            | None -> failwith "Couldn't find version in changelog file"
            | Some m -> m.Groups.[1].Value

    let isPreRelease (version: string) =
        let regex = Regex(".*(alpha|beta|rc).*", RegexOptions.IgnoreCase)
        regex.IsMatch(version)

    let getNotes (version: string) =
        File.ReadLines(Files.CHANGELOG_FILE)
        |> Seq.skipWhile (fun line ->
            let m = versionRegex.Match(line)

            if m.Success then
                (m.Groups.[1].Value
                 <> version)
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
                !! "src/App/public/js"
                ++ Folders.LIBS_OUTPUT
                ++ "deploy"
                ++ "src/App/dist/"
                |> Shell.cleanDirs
            )
        }

    let donetRestore =
        stage "Restore .NET dependencies" { run "dotnet restore" }

    let npmInstall = stage "NPM install" { run "npm install" }

    let npmLink =
        stage "NPM install" {
            whenCmd {
                name "--local"
                description "Build using local pacakges from fable repository"
            }

            run
                "npm link ../Fable/src/fable-standalone ../Fable/src/fable-metadata"
        }

    let copyModules =
        stage "Copy modules" {
            run (fun _ ->
                Shell.cleanDir Folders.METADATA_OUTPUT

                Shell.copyDir
                    Folders.METADATA_OUTPUT
                    Folders.METADATA_LIB
                    (fun _ -> true)

                Shell.copyDir
                    Folders.METADATA_OUTPUT
                    Folders.METADATA_EXTRA
                    (fun _ -> true)

                // Change extension to .txt so Github pages compress the files when being served
                !!(Folders.METADATA_OUTPUT
                   </> "*.dll")
                |> Seq.iter (fun filename ->
                    Shell.rename
                        (filename
                         + ".txt")
                        filename
                )

                printfn
                    "Copy files from %s to %s"
                    Folders.STANDALONE_DIST
                    Folders.REPL_OUTPUT

                Shell.copyDir
                    Folders.REPL_OUTPUT
                    Folders.STANDALONE_DIST
                    (fun _ -> true)

                printfn
                    "Copy files from %s to %s"
                    Folders.STANDALONE_SRC
                    "src/Standalone"

                Shell.copyDir
                    "src/Standalone"
                    Folders.STANDALONE_SRC
                    (fun f -> f.EndsWith(".fs"))
            )
        }

    let buildApp =
        stage "Build" {
            workingDir "src/App"
            run "dotnet fable"
            run "npx vite build"
        }

    let updatePreludeREPLVersion =
        stage "Update Prelude REPL version" {
            run (fun _ ->
                let newVersion = Changelog.getLastVersion ()

                let reg = Regex(@"let \[<Literal>\] REPL_VERSION = ""(.*)""")

                let newLines =
                    Files.PRELUDE_FILE
                    |> File.ReadLines
                    |> Seq.map (fun line ->
                        reg.Replace(
                            line,
                            fun m ->
                                m.Groups.[0].Value
                                    .Replace(
                                        m.Groups.[1].Value,
                                        newVersion
                                    )
                        )
                    )
                    |> Seq.toArray

                File.WriteAllLines(Files.PRELUDE_FILE, newLines)
            )
        }

    let checkIfNewReleaseIsNeeded =
        stage "Check if new release is needed" {
            run (fun ctx ->
                asyncResult {
                    let changelogVersion = Changelog.getLastVersion ()
                    let reg = Regex(@"let \[<Literal>\] REPL_VERSION = ""(.*)""")

                    let isNewReplVersion =
                        Files.PRELUDE_FILE
                        |> File.ReadLines
                        |> Seq.pick (fun line ->
                            let m = reg.Match(line)
                            if m.Success then Some m.Groups.[1].Value else None
                        )
                        |> fun currentVersion ->
                            currentVersion <> changelogVersion

                    let! newNpmPackagesAvailable =
                        CmdLine.empty
                        |> CmdLine.appendRaw "npx"
                        |> CmdLine.appendRaw "npm-check-updates"
                        |> CmdLine.appendRaw "fable-standalone"
                        |> CmdLine.appendRaw "fable-metadata"
                        |> CmdLine.toString
                        |> ctx.RunCommandCaptureOutput

                    let newNpmPackagesAvailable =
                        newNpmPackagesAvailable.Contains("All dependencies match the latest package versions")
                        |> not

                    // Cancel if none of the condition is true
                    if not isNewReplVersion && not newNpmPackagesAvailable then
                        printfn "No new release is needed, fast exit"
                        Environment.Exit(0)
                }

            )
        }

    let autoUpdateFableNpmPackages =
        stage "Auto update Fable npm packages" {

            run (
                CmdLine.empty
                |> CmdLine.appendRaw "npx"
                |> CmdLine.appendRaw "npm-check-updates"
                |> CmdLine.appendRaw "-u"
                |> CmdLine.appendRaw "fable-standalone"
                |> CmdLine.appendRaw "fable-metadata"
                |> CmdLine.toString
            )

        }

pipeline "WatchApp" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    // We don't need to call unlink because npm install always reset
    // the dependencies so they are not linked anymore and will be linked
    // only if needed
    Stages.npmLink
    Stages.copyModules

    stage "Watch" {
        workingDir "src/App"
        run "dotnet fable watch --run npx vite"
    }

    runIfOnlySpecified
}

pipeline "BuildApp" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.npmLink
    Stages.copyModules
    Stages.buildApp

    runIfOnlySpecified
}

pipeline "Release" {

    whenEnvVar "GITHUB_TOKEN"
    whenBranch "main"

    // Stages.checkIfNewReleaseIsNeeded
    Stages.clean
    Stages.donetRestore
    Stages.autoUpdateFableNpmPackages
    Stages.npmInstall
    Stages.copyModules
    Stages.buildApp
    Stages.updatePreludeREPLVersion

    stage "Release GITHUB" {
        run (fun ctx ->
            let token = ctx.GetEnvVar "GITHUB_TOKEN"

            let changelogVersion = Changelog.getLastVersion ()
            let dateVersion = DateTime.Now.ToString("yyyy-MM-dd_HH-mm-ss")

            // The release version include the date, because we don't want to update
            // the REPL version each time a new fable-standalone version is released
            // This avoid doing dummy changelog entries, also for the user the
            // Fable version is available in the REPL website so it should be fine
            let releaseVersion =
                changelogVersion
                + "-"
                + dateVersion

            Git.Staging.stageAll Folders.CWD
            let commitMsg = sprintf "Release version %s" releaseVersion
            Git.Commit.exec Folders.CWD commitMsg
            Git.Branches.push Folders.CWD

            GitHub.createClientWithToken token
            |> GitHub.draftNewRelease
                "fable-compiler"
                "repl"
                releaseVersion
                (Changelog.isPreRelease changelogVersion)
                (Changelog.getNotes changelogVersion)
            // |> GitHub.uploadFile nupkg
            |> GitHub.publishDraft
            |> Async.RunSynchronously
        )

        run "npx gh-pages -d src/App/dist"
    }

    runIfOnlySpecified
}

pipeline "BuildLib" {
    Stages.clean
    Stages.donetRestore
    Stages.npmInstall
    Stages.copyModules

    stage "Build lib" {
        run
            "dotnet fable src/Fable.Repl.Lib -o public/js/repl/fable-repl-lib --rootModule false --fableLib public/js/repl/fable-library"

        run (fun _ ->
            let replSource = Path.GetFullPath("src/Fable.Repl.Lib")
            let replTarget = Path.GetFullPath("public/js/repl/fable-repl-lib")

            !! "src/Fable.Repl.Lib/**/*.js"
            |> Seq.iter (fun source ->
                let target =
                    Path.GetFullPath(source).Replace(replSource, replTarget)

                Shell.copyFile target source
                printfn $"Copied {source} to {target}"
            )
        )
    }
}

tryPrintPipelineCommandHelp ()

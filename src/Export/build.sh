# This expects to be run from repo root dir and have ncave's F# compiler fork
# and Fable repos in sibling folders

NCAVE_FSHARP_REPO=fsharp_fable
REPL_REPO=repl

set -x # Output commands as they're executed

dotnet build src/Fable.Repl.Lib

cd ../$NCAVE_FSHARP_REPO
git checkout export
dotnet build -c Release src/buildtools/buildtools.proj
dotnet build -c Release src/fsharp/FSharp.Compiler.Service

cd ../$REPL_REPO
dotnet run -c Release -p src/Export

cd ../$NCAVE_FSHARP_REPO
cp temp/metadata/Browser.* ../$REPL_REPO/src/metadata/
cp temp/metadata/Fable.Repl.Lib.dll ../$REPL_REPO/src/metadata/

cd ../$REPL_REPO
set +x
echo ""
echo "Generated metadata is in ../$NCAVE_FSHARP_REPO/temp/metadata"
echo "Browser.*.dll and Fable.Repl.Lib.dll have been copied to src/metadata"
echo ""
echo "You can now run the following command to copy metadata (and Fable standalone) and compile Repl.Lib to JS"
echo "    dotnet fake build -t BuildLib"

# METADATA ===============================================

dotnet build ~/repos/Fable.Sveltish/src/Fable.Sveltish
cd ~/repos/fsharp_fable
git checkout export

sed -i 's/<\/Project>/<ItemGroup><Reference Include="..\/..\/..\/Fable.Sveltish\/src\/Fable.Sveltish\/bin\/Debug\/netstandard2.0\/Fable.Sveltish.dll" \/><\/ItemGroup><\/Project>/' fcs/fcs-export/fcs-export.fsproj

dotnet build -c Release src/buildtools/buildtools.proj
dotnet build -c Release src/fsharp/FSharp.Compiler.Service
dotnet run -c Release -p fcs/fcs-export

cp temp/metadata/Fable.Sveltish.dll ../Fable/src/fable-metadata/lib

rm -rf temp/metadata
git reset --hard

# COPY METADATA/STANDALONE =====================================

cd ~/repos/repl
LOCAL_PKG=1 dotnet fake build -t CopyModules

# PRECOMPILE LIB ===============================================

cd ~/repos/repl
REPL_OUTPUT="public/js/repl"
dotnet run -c Release -p ../Fable/src/Fable.Cli -- ../Fable.Sveltish/src/Fable.Sveltish -o $REPL_OUTPUT/lib/sutil --fableLib $REPL_OUTPUT/fable-library

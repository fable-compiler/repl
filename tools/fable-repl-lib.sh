# METADATA ===============================================

dotnet build ~/repos/Sutil/src/Sutil
cd ~/repos/fsharp_fable
git checkout export

sed -i 's/<\/Project>/<ItemGroup><Reference Include="..\/..\/..\/Sutil\/src\/Sutil\/bin\/Debug\/netstandard2.0\/Sutil.dll" \/><\/ItemGroup><\/Project>/' fcs/fcs-export/fcs-export.fsproj

dotnet build -c Release src/buildtools/buildtools.proj
dotnet build -c Release src/fsharp/FSharp.Compiler.Service
dotnet run -c Release -p fcs/fcs-export

cp temp/metadata/Sutil.dll ~/repos/Fable/src/fable-metadata/lib

# rm -rf temp/metadata
# git reset --hard

# COPY METADATA/STANDALONE =====================================

cd ~/repos/repl
LOCAL_PKG=1 dotnet fake build -t BuildLib

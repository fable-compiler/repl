const path = require("path");

module.exports = {
    entry: path.join(__dirname, "./Fable.Repl.Lib.fsproj"),
    outDir: path.join(__dirname, "../../public/js/repl/lib"),
    allFiles: true,
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    fable: {
        define: ["FABLE_REPL_LIB"]
    }
};
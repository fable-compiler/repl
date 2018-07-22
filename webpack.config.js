// Template for webpack.config.js in Fable projects
// Find latest version in https://github.com/fable-compiler/webpack-config-template

var CONFIG = {
  indexHtmlTemplate: "./src/index.html",
  fsharpEntry: "./src/App/App.fsproj",
  workerEntry: "./src/Worker/Worker.fsproj",
  cssEntry: "./src/style/main.scss",
  outputDir: "./deploy",
  assetsDir: "./public",
  // It's important to use this port, check src/App/Shared.fs
  devServerPort: 8080,
  babel: {
    presets: [ ["env", { "modules": false }] ],
  }
}

// If we're running the webpack-dev-server, assume we're in development mode
var isProduction = !process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);
console.log("Bundling for " + (isProduction ? "production" : "development") + "...");

var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: [CONFIG.fsharpEntry],
    worker: [CONFIG.workerEntry],
    style: [CONFIG.cssEntry]
  },
  output: {
      path: path.join(__dirname, CONFIG.outputDir),
      filename: '[name].js'
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "eval-source-map",
  plugins: isProduction ? [
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin([{ from: CONFIG.assetsDir }]),
    ]
    : [],
  devServer: {
    publicPath: "/",
    contentBase: CONFIG.assetsDir,
    port: CONFIG.devServerPort,
    proxy: CONFIG.devServerProxy,
  },
  externals: {
    "monaco": "var monaco",
    "editor": "var editor",
  },
  module: {
    rules: [
      {
        test: /\.fs(x|proj)?$/,
        use: "fable-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: CONFIG.babel
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
            // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'style-loader',
            'css-loader',
            'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        use: ["file-loader"]
      }
    ]
  }
};

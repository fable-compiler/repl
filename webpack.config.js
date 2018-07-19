// Template for webpack.config.js in Fable projects
// Find latest version in https://github.com/fable-compiler/webpack-config-template

var CONFIG = {
  indexHtmlTemplate: "./src/index.html",
  fsharpEntry: "./src/App/App.fsproj",
  cssEntry: "./src/App/scss/main.scss",
  outputDir: "./deploy",
  assetsDir: "./public",
  // It's important to use this port, check src/App/Generator.fs
  devServerPort: 8080,
  babel: {
    presets: [ ["env", { "modules": false }] ],
  }
}

// If we're running the webpack-dev-server, assume we're in development mode
var isProduction = !process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);
console.log("Bundling for " + (isProduction ? "production" : "development") + "...");

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

// The HtmlWebpackPlugin allows us to use a template for the index.html page
// and automatically injects <script> or <link> tags for generated bundles.
var commonPlugins = [
  new HtmlWebpackPlugin({
      filename: 'index.html',
      template: CONFIG.indexHtmlTemplate
  })
];

module.exports = {
  entry: isProduction ? {
    app: [CONFIG.fsharpEntry, CONFIG.cssEntry]
  } : {
    app: [CONFIG.fsharpEntry],
    style: [CONFIG.cssEntry]
  },
  output: {
      path: path.join(__dirname, CONFIG.outputDir),
      filename: isProduction ? '[name].[hash].js' : '[name].js'
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "eval-source-map",
  plugins: isProduction ?
    commonPlugins.concat([
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new CopyWebpackPlugin([{ from: CONFIG.assetsDir }]),
    ])
    : commonPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
    ]),
  devServer: {
    publicPath: "/",
    contentBase: CONFIG.assetsDir,
    port: CONFIG.devServerPort,
    proxy: CONFIG.devServerProxy,
    hot: true,
    inline: true
  },
  externals: {
    "monaco": "var monaco",
    "editor": "var editor",
    "fable-repl": "var Fable",
    "babel-standalone": "var Babel"
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
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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

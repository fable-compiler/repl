// Template for webpack.config.js in Fable projects
// Find latest version in https://github.com/fable-compiler/webpack-config-template

// In most cases, you'll only need to edit the CONFIG object
// See below if you need better fine-tuning of Webpack options

var CONFIG = {
  indexHtmlTemplate: "./src/index.html",
  fsharpEntry: "./src/App/App.fsproj",
  cssEntry: "./src/style.sass",
  outputDir: "./public",
  assetsDir: "./public",
}

// If we're running the webpack-dev-server, assume we're in development mode
var isProduction = !process.argv.find(v => v.indexOf('webpack-dev-server') !== -1);
console.log("Bundling for " + (isProduction ? "production" : "development") + "...");

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// The HtmlWebpackPlugin allows us to use a template for the index.html page
// and automatically injects <script> or <link> tags for generated bundles.
var commonPlugins = [
  new HtmlWebpackPlugin({
      filename: 'index.html',
      template: CONFIG.indexHtmlTemplate
  })
];

module.exports = {
  entry: CONFIG.fsharpEntry,
  // NOTE we add a hash to the output file name in production
  // to prevent browser caching if code changes
  output: {
      path: path.join(__dirname, CONFIG.outputDir),
      filename: isProduction ? '[name].[hash].js' : '[name].js'
  },
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? "source-map" : "eval-source-map",
  plugins: isProduction ?
    commonPlugins.concat([
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        // Inlining is causing problems in minified code
        // See https://github.com/mishoo/UglifyJS2/issues/2842#issuecomment-359527962
        new UglifyJSPlugin({
            uglifyOptions: {
                compress: { inline: false }
            }
        }),
    ])
    : commonPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
    ]),
  devServer: {
    publicPath: "/",
    contentBase: CONFIG.assetsDir,
    port: CONFIG.devServerPort || 8080,
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

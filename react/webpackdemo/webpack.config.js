const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", //none , production , developmemt are values
  entry: {
    main: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    //filename: 'index.bundle.js', // using static name OR // using the entry name, sets the name to main , as specific in the entry object.
    filename: "[name].[contenthash].js",
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Testing html file",
      filename: "index.html",
      greeting: "Greeting from Kamran",
      template: path.resolve(__dirname, "src/base.html"),
    }),
  ],

  module: {
    rules: [{ test: /\.css$/, use: ["style-loader", "css-loader"] }],
  },

  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3001,
    open: true,
    hot: true,
    watchFiles: [path.resolve(__dirname, "src")],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: process.env.mode,
  entry: {
    index: "./client/index.js",
    about: "./client/about.js",
    contact: "./client/contact.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./server/views/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./server/views/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: "./server/views/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: [".html", ".js", ".json", ".css"],
  }
};

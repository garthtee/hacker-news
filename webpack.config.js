const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv");

module.exports = {
  plugins: [
    new HtmlWebPackPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/*.html"],
          },
        },
      ],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    }),
  ],
  resolve: {
    alias: {
      process: "process/browser",
    },
    extensions: [".js", ".json"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
  },
};

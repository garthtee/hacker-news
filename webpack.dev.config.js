const base = require("./webpack.config");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devServer: {
    historyApiFallback: true,
    open: true,
  },
  devtool: "source-map",
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
        test: /\.scss$/,
      },
      {
        exclude: /node_modules/,
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ["eslint-loader"],
      },
      {
        exclude: /node_modules/,
        test: /\.png$/,
        use: [
          {
            loader: "file-loader?name=images/[name].[ext]",
          },
        ],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    ...base.plugins,
  ],
  resolve: {
    ...base.resolve,
  },
};

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        test: /\.scss$/,
      },
      {
        exclude: /node_modules/,
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        exclude: /node_modules/,
        test: /\.(js)$/,
        use: ['eslint-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.png$/, 
        use: [{
          loader: 'file-loader?name=images/[name].[ext]',
        }],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.json', '.js'],
  },
};

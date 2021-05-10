const base = require('./webpack.config');

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: './src/index.js',
  mode: 'production',
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
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
        }],
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
        test: /\.(png)$/, 
        use: [{
          loader: 'file-loader?name=images/[name].[ext]',
        }],
      },
    ],
  },
  plugins: [
    ...base.plugins, 
  ],
  resolve: {
    ...base.resolve,
  },
};

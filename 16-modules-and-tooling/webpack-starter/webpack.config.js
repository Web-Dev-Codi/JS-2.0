// Allows absolute path names
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: {
      // path to files served on load/reload
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // opens in browser immidiatly
    open: true,
    // hot reload modules
    hot: true,
    // optimizes
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        // Test is for any file extension to apply here its CSS since css loader. $ means end here
        test: /\.css$/,
        // Use will be used for any file mentioned above
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin(),
  ],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    // vendor: [
    //   'lodash-es',
    // ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'], // 表示这几个的后缀名可以参略
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        // exclude: /node_modules/
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '首页 - Press',
      template: './public/index.html',
    }),
    new Dotenv(),
  ],
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
};

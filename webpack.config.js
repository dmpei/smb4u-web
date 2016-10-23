var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {

  entry: './src/index.js',

  output: {
    path: 'dist',
    filename: 'index.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        loader: 'url',
        query: {
          limit: 10000,
        },
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  }
};

module.exports = config;

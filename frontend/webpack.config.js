const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
require('css-loader');
require('style-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    port: 8081,
    hot: true,
    // hotOnly: true,
    historyApiFallback: true,
    proxy: {
      '/': {
        target: 'http://localhost:8080'
      },
      '/api': {
        target: 'http://localhost:8080/'
        //   pathRewrite: { '^/api': '' }
      },
      '/auth': {
        target: 'http://localhost:8080'
        //   pathRewrite: { '^/auth': '' }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attributes: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      },
      {
        test: /\.(mp4|webm)$/i,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'videos'
          }
        }
      },
      {
        test: /\.pdf$/,
        use: {
          loader: 'file-loader',
          options: {
            // name: "[name].[contenthash].[ext]",
            outputPath: 'assets/docs/'
            // publicPath: "assets/docs/"
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ]
};

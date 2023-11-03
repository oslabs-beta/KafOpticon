const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = [
  // {
  //   mode: 'development',
  //   entry: path.join(__dirname, 'src', 'electron.js'),
  //   target: 'electron-main',
  //   output: {
  //     path: path.join(__dirname, 'dist'),
  //     filename: 'electron.js'
  //   },
  //   // plugins: [
  //   //   new HtmlWebpackPlugin()
  //   // ]
  // },
  {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'react.jsx'),
    target: 'electron-renderer',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'react.js'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
      })
    ]
  }
];


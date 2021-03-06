const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
          // query: {
          //   presets: ['react', 'es2015', 'stage-1']
          // }
        }
      }
    ]
  },
  // module: {
  //   rules: [{
  //     exclude: /node_modules/,
  //     loader: 'babel-loader',
  //     query: {
  //       presets: ['react', 'es2015', 'stage-1']
  //     }
  //   }]
  // },
  resolve: {
    extensions: [.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
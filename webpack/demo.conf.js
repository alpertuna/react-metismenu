/*
 * @file demo.conf.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 09.09.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const webpack = require('webpack');
const config = require('./base.conf');

// Webpack Production Settings - Minified
module.exports = Object.assign(config, {
  entry: './dev/App.jsx',
  output: {
    path: './demo',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      ...config.module.loaders,
      {
        test: /\.less$/,
        loader: 'style?insertAt=top!css!less',
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

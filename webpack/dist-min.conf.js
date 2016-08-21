/**
 * dist-min.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const webpack = require('webpack');
let config = require('./dist.conf');

// Webpack Production Settings - Minified
config = Object.assign(config, {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});
config.output.filename = 'react-metismenu.min.js';

module.exports = config;

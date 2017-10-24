/**
 * dist.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */
const path = require('path');
const config = require('./base.conf');

// Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src',
  output: {
    path: path.resolve('dist'),
    filename: 'react-metismenu.js',
    library: 'ReactMetismenu',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: true,
    },
  ],
});

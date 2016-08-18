/**
 * dev.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

var config = require('./base.conf')

//Webpack Development Settings
module.exports = Object.assign(config, {
  entry: './dev/App.js',
  output: 'bundle.js',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: 'dev'
  }
})

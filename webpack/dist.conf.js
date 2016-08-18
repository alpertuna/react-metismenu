/**
 * dist.conf.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 18.08.2016
 */

var config = require('./base.conf')

//Webpack Production Settings
module.exports = Object.assign(config, {
  entry: './src/main.js',
  output: {
    path: 'dist',
    filename: 'react-metismenu.js',
    library: 'ReactMetismenu',
    libraryTarget: 'umd'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
})

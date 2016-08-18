//Webpack Production Settings
var config = {
    entry: './src/main.js',
    output: {
        path: 'dist',
        filename: 'react-metismenu.js',
        library: 'ReactMetismenu',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            }
        ]
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
}
  var webpack = require('webpack');
  config.plugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
  ];

//For minified version
if(process.argv[4] == '-p'){
  config.output.filename = 'react-metismenu.min.js';
}

module.exports = config;

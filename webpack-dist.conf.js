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

//For minified version
if(process.argv[4] == '-p'){
    config.output.filename = 'react-metismenu.min.js';
    config.devtool = 'cheap-module-source-map';
}

module.exports = config;

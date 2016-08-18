//Webpack Develeopment Settings
var config = {
    entry: './dev/App.js',
    output: 'bundle.js',
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
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
    devServer: {
        contentBase: 'dev'
    }
}

module.exports = config;

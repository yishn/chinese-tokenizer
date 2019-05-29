const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {modules: false}],
                        ['@babel/preset-react', {pragma: 'h'}]
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        }]
    },

    resolve: {
        alias: {
            'preact': path.join(__dirname, 'node_modules/preact/dist/preact.min')
        }
    },

    externals: {
        'fs': '{}'
    }
}

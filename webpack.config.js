const path = require('path')

module.exports = (env, argv) => ({
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: argv.mode === 'production' ? false : 'cheap-module-eval-source-map',

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
})

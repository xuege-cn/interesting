const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './app.js',
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            options: {
                presets: ['@babel/preset-react', ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 versions']
                    }
                }]],
                plugins: [ '@babel/plugin-proposal-class-properties' ]
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}
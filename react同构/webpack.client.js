const path = require('path')

module.exports = {
    mode: 'development',
    entry: './client/app.js',
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            options: {
                presets: ['@babel/preset-react', ['@babel/preset-env', {
                    targets: {
                        browsers: 'last 2 versions'
                    }
                }]]
            }
        }]
    }
}
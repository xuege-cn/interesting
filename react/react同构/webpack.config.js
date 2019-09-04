const path = require('path')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './server/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
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
                }]]
            }
        }]
    }
}
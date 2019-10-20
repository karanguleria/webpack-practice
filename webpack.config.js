var webpack = require('webpack');
var path = require('path');

module.exports = {
        mode: 'development',
        entry : './src/main.js',
        output: {
            path: path.resolve('./dist'),
            filename: 'main.js'
        },
        module: {
            rules:[
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        }
}
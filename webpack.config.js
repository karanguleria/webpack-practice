var webpack = require('webpack');
var path = require('path');

module.exports = {
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
                }
            ]
        }
}
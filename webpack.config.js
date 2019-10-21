var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
        mode: 'development',
        entry : './src/main.js',
        output: {
            path: path.resolve('./dist'),
            filename: 'main.js'
        },
        optimization: {
            minimizer: [new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            })],
          },
        module: {
            rules:[
                {
                    test: /\.s[ac]ss$/,
                    use:['sass-loader']
                },
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader']
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ]
        },
        
        //   plugins:[
        //       new webpack.optimize.UglifyJsPlugin()
        //   ]
}
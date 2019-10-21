var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
        mode: 'development',
        entry : {
                    app:
                    [
                        './src/main.js',
                        './src/main.css'
                    ]
                },
        output: {
            path: path.resolve('./dist'),
            filename: '[name].js'
        },
        optimization: {
            minimizer: [new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
            })],
          },
        module: {
            rules:[
                // {
                //     test: /\.s[ac]ss$/,
                //     use:['sass-loader']
                // },
                {
                    test: /\.css$/,
                    use: [
                        {
                          loader: MiniCssExtractPlugin.loader,
                          options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: './dist',
                            hmr: process.env.NODE_ENV === 'development',
                          },
                        },
                        'css-loader',
                      ],
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
            ]
        },
        
         plugins:[
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // all options are optional
                filename: '[name].css',
                chunkFilename: '[id].css',
                ignoreOrder: false, // Enable to remove warnings about conflicting order
              }),
              new webpack.LoaderOptionsPlugin({
                minimize: true,
              }),
           ]
}
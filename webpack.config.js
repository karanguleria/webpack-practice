var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
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
          minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },
        module: {
            rules:[
              {
                test: /\.css$/,
                use: ['raw-loader',MiniCssExtractPlugin.loader, 'css-loader'],
              },
              {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
               loader :'file-loader',
               options:{
                 name:'/images/[name].[ext]'
               }
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
            filename: '[name].css',
            chunkFilename: '[id].css',
          }),
        
              new webpack.LoaderOptionsPlugin({
                minimize: true,
              }),
           ]
}
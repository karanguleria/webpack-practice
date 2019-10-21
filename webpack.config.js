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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
                // {
                //     test: /\.s[ac]ss$/,
                //     use:['sass-loader']
                // },
                // {
                //     test: /\.css$/,
                //     use: [
                //         {
                //           loader: MiniCssExtractPlugin.loader,
                //           options: {
                //             // url:false,
                //             // you can specify a publicPath here
                //             // by default it uses publicPath in webpackOptions.output
                //             publicPath: './dist',
                //             hmr: process.env.NODE_ENV === 'development',
                //           },
                //         },
                //         'css-loader',
                //       ],
                // },
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
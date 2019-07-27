const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebPackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devWebPackConfig = merge(baseWebPackConfig,{
    mode:'development',
    devtool: 'cheap-module-eval-source-map',
    devServer:{
        contentBase: baseWebPackConfig.externals.paths.dist,
        port:8081,
        overlay:true
    },
    plugins:[
        new webpack.SourceMapDevToolPlugin({
            filename:'[file].map',
        }),
        new HtmlWebpackPlugin({
            hash: false,
            template: `./index.html`,
            filename: "./index.html"
        }),

    ]
});


module.exports = new Promise((resolve, reject) => {
    resolve(devWebPackConfig)
});
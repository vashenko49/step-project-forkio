const path = require('path');
const { CleanWebpackPlugin }= require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    conf: path.join(__dirname, '../conf'),
    assets: 'assets/'
};

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {
        app:PATHS.src
    },
    output: {
        filename: `${PATHS.assets}js/scripts.min.js`,
        path: PATHS.dist,
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },{
                test: /\.css/,
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap:true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap:true,
                            config:{
                                path:`${PATHS.conf}/postcss.config.js`
                            }
                        }
                    }
                ]
            },{
                test: /\.scss/,
                use:[
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },{
                        loader: "postcss-loader",
                        options: {
                            sourceMap:true,
                            config:{
                                path:`${PATHS.conf}/postcss.config.js`
                            }
                        }
                    },{
                        loader: "sass-loader",
                        options: {
                            sourceMap:true
                        }
                    }
                ]
            },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:`${PATHS.assets}/font/[name].[ext]`
                        }
                    }
                ]
            },{
                test: /\.html/,
                use: ['html-loader']
            },{
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name:`[name].[ext]`,
                            outputPath:`${PATHS.assets}img/`,
                            publicPath:`${PATHS.assets}img/`
                        },
                    },
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: `${PATHS.assets}css/styles.min.css`,
        }),
        new CopyWebPackPlugin([
            {from:`${PATHS.src}/img`,to:`${PATHS.assets}/img`},
        ])
    ]
};
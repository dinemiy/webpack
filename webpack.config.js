const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [ 
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: "css-loader" },
                    { loader: "resolve-url-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    { loader: 'url-loader' },
                ]
            },
            {
                test: /\.(html)$/,
                use: [
                    { loader: 'html-loader' },
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            cowsay: 'cowsay-browser'
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css"
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}
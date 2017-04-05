const webpack = require("webpack");
const path = require("path");

const SOURCE_DIR = path.resolve(__dirname, './api/static/js/src');
const BUILD_DIR = path.resolve(__dirname, './api/static/js/dist');

const config = {
    entry: SOURCE_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?/,
                include: SOURCE_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                 test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                 loader: 'url-loader?limit=8192'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};

module.exports = config;

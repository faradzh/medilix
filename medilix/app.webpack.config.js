const webpack = require("webpack");
const path = require("path");

const SOURCE_DIR = path.resolve(__dirname, './main/static/js/src');
const BUILD_DIR = path.resolve(__dirname, './main/static/js/dist');

const config = {
    entry: SOURCE_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    }
};

module.exports = config;

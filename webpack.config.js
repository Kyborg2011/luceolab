'use strict';

// Modules
var webpack = require('webpack');
var StyleLintPlugin = require('stylelint-webpack-plugin');

const ASSET_PATH = '/pubic';

module.exports = function makeWebpackConfig(options) {
    return {
        module: {
            loaders: [
                {
                    test: /\.jsx?$/i,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                }, {
                    test: /\.html$/i,
                    loader: 'raw'
                }, {
                    test: /\.css$/i,
                    loader: "style-loader!css-loader!postcss-loader"
                }
            ]
        },
        plugins: [
            new StyleLintPlugin({}),
        ],
    };
};

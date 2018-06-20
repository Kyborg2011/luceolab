/* Webpack server side rendering config file */
let webpack = require( 'webpack' );
let ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
let path = require( 'path' );
var nodeExternals = require( 'webpack-node-externals' );

module.exports = [ {
    entry: [
        './src/server.js'
    ],
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },
    target: 'node',
    output: {
        filename: 'server.js',
        path: path.resolve( './dist' ),
        libraryTarget: 'commonjs2'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [ {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        sourceMap: true,
                        importLoaders: 1,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                } ]
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/',
                    publicPath: '/'
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        modules: [ 'node_modules' ]
    },
    plugins: [ new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }) ]
} ];

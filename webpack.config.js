/* Webpack main config file */
let webpack = require( 'webpack' );
let ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
let path = require( 'path' );

const env = process.env.NODE_ENV;
const indexHtml = path.join( __dirname, 'src', 'index.html' );

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/Startup.js', indexHtml
    ],
    output: {
        filename: 'js/[name].bundle.js',
        chunkFilename: 'js/[name].chunk.js',
        path: path.resolve( './dist' )
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ( env === 'production' )
                    ? ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    sourceMap: true,
                                    importLoaders: 1,
                                    localIdentName: 'css-[hash:base64:5]',
                                }
                            },
                            'postcss-loader'
                        ]
                    })
                    : [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        },
                        'postcss-loader'
                    ]
            }, {
                test: indexHtml,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }, {
                        loader: 'extract-loader'
                    }, {
                        loader: 'html-loader',
                        options: {
                            attrs: [ 'img:src' ],
                            interpolate: true
                        }
                    }
                ]
            }, {
                test: /\.mp4$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=video/mp4&name=assets/[name].[ext]&publicPath=/'
                }
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
};

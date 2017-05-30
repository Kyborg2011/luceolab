/* Webpack main config file */
var webpack = require( 'webpack' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  path = require( 'path' );

const env = process.env.NODE_ENV;

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve( './dist' ),
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: env === 'production'
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader'
            ]
          })
          : [
            'style-loader',
            'css-loader',
            'postcss-loader'
          ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules'
    ]
  },

  plugins: [
    new ExtractTextPlugin({ filename: 'css/[name].css', disable: false, allChunks: true }),
  ]
};

/* Webpack main config file */
var webpack = require( 'webpack' ),
  ExtractTextPlugin = require( 'extract-text-webpack-plugin' ),
  path = require( 'path' );

const env = process.env.NODE_ENV;
const indexHtml = path.join(__dirname, "src", "index.html");

module.exports = {
  entry: [
    './src/components/App.js',
    indexHtml,
  ],
  output: {
    filename: 'js/index.js',
    path: path.resolve( './dist' ),
    publicPath: "dist/",
  },
  module: {
    loaders: [ {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: env === 'production' ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              'postcss-loader'
            ]
          }) :
      [
        'style-loader',
        'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]',
        'postcss-loader'
      ]
    },
    {
        test: indexHtml,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                },
            },
            {
                loader: "extract-loader",
            },
            {
                loader: "html-loader",
                options: {
                    attrs: ["img:src"],
                    interpolate: true,
                },
            },
        ],
    },
    {
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        outputPath: 'assets/',
        publicPath: '',
      }
    }]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),
  ]
};

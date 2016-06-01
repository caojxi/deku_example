/* eslint-disable */
var webpack = require('webpack')
var path = require('path')
var projectRoot = path.resolve(__dirname, './')

module.exports = {
  devtool: '#source-map',
  entry: [
    'webpack-hot-middleware/client',
    './main.jsx'
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: [path.join(__dirname, './node_modules')],
    alias: {
      'src': path.resolve(__dirname, './src'),
      'rd': path.resolve(__dirname, './src/redux'),
      'utils': path.resolve(__dirname, './src/utils'),
      'assets': path.resolve(__dirname, './src/assets'),
      'components': path.resolve(__dirname, './src/components')
    }
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    library: 'app',
    publicPath: '/build/'
  },
  resolveLoader: {
    fallback: [path.join(__dirname, './node_modules')]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: [['transform-react-jsx', {pragma: 'element'}]]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader?modules&camelCase"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000
        }
      }
    ]
  }
};

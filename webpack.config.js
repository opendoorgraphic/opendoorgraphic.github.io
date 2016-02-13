var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      { 
        test: /\.jsx?$/,
        exclude: /(node_modules|public)/,
        loader: 'babel',
      },
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')]
      }
    ]
  },
  eslint: {
    configFile: './.eslintrc'
  },
  externals: {
    lodash: '_',
    react: 'React',
    jquery: 'jQuery',
    markdown: 'markdown',
    'react-dom': 'ReactDOM',
    'underscore.string': 's',
    'react-bootstrap': 'ReactBootstrap',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      store: path.join(__dirname, 'app/store'),
      actions: path.join(__dirname, 'app/actions'),
      reducers: path.join(__dirname, 'app/reducers'),
      components: path.join(__dirname, 'app/components'),
      containers: path.join(__dirname, 'app/containers'),
      middleware: path.join(__dirname, 'app/middleware'),
      styles: path.join(__dirname, 'styles'),
    }
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

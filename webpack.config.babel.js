const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PostCSSImport = require('postcss-import');
const PostCSSNext = require('postcss-cssnext')({ browsers: 'last 2 versions' });
const CopyWebpackPlugin = require('copy-webpack-plugin');


const paths = [
  '/',
  '/about/',
  '/blog/',
  '/contact/',
];

module.exports = {
  entry: {
    main: './site/index',
  },

  output: {
    filename: 'index.[hash:10].js',
    path: 'public',
    publicPath: '/public/',
    libraryTarget: 'umd',
  },

  plugins: [
    new ExtractTextPlugin('styles.[contenthash:10].css'),
    new CopyWebpackPlugin([{
      from: 'site/static_assets',
    }]),
    new StaticSiteGeneratorPlugin('main', paths, {}, { window: {} }),
  ],

  devtool: 'inline-source-map',

  resolve: {
    alias: {
      'eventEmitter/EventEmitter': 'wolfy87-eventemitter/EventEmitter',
      'get-style-property': 'desandro-get-style-property',
      'matches-selector': 'desandro-matches-selector',
      classie: 'desandro-classie',
    },
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
    ],
  },
  postcss () {
    return [
      PostCSSImport,
      PostCSSNext,
    ];
  },
};

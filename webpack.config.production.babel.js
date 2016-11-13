import webpack from 'webpack';
import CompressionPlugin from 'compression-webpack-plugin';
import devConfig from './webpack.config.babel';

const prodPlugins = [
  new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
    mangle: {
      screw_ie8: true,
    },
    output: {
      comments: false,
      screw_ie8: true,
    },
  }),
  new CompressionPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    threshold: 10240,
    minRatio: 0.8,
  }),
];

devConfig.plugins = devConfig.plugins.concat(prodPlugins);

export default devConfig;

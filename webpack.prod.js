const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    ...getOptinalPlugins(),
  ],
});

// optional Plugins
function getOptinalPlugins() {
  let result = [];
  if (process.env.ANALY_PACKAGE_SIZE) {
    result.push( new BundleAnalyzerPlugin() );
  }
  return result
}
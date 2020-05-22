const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');
require('dotenv').config(path.join(__dirname, '../.env'));
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
console.log(process.env.BUNDLE_ANALYZE);

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins:
    process.env.BUNDLE_ANALYZE == true ? [new BundleAnalyzerPlugin()] : [],
});

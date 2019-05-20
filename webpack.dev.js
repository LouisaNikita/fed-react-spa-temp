
const merge = require('webpack-merge');
const common = require('./webpack.common.js'); // like object.assign

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    usedExports: true // tree shaking development中标记用
  },
  devServer: {
    contentBase: './dist',
    hot: true, 
    port: 4001
  }
});
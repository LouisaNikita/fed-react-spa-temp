const merge = require('webpack-merge');
const common = require('./webpack.common.js'); // like object.assign

module.exports = merge(common, {
  mode: 'development', //启用 minification(代码压缩) 和 tree shaking
  devtool: 'source-map'
});
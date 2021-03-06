var path = require('path');
var webpack = require('webpack');
var platform = require('vendor-code');
var components = require('component-code');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: './output/app.js'
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(platform.manifest)
    }),
    new webpack.DllReferencePlugin({
      manifest: require(components.manifest),
      scope: 'ui'
    })
  ]
};

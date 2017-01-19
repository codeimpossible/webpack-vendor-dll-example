var path = require('path');
var webpack = require('webpack');
var platform = require('vendor-code');

module.exports = {
  entry: {
    components: ['./components/Button.js']
  },
  output: {
    library: '[name]_[hash]',
    libraryTarget: 'var',
    filename: './output/[name]_[hash].js'
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require(platform.manifest)
    }),
    new webpack.DllPlugin({
      path: './output/components.manifest.json',
      name: "[name]_[hash]",
    })
  ]
};

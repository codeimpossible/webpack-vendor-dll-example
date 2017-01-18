var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom']
  },
  output: {
    library: '[name]_[hash]',
    libraryTarget: 'var',
    filename: './output/[name]_[hash].js'
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllPlugin({
      path: './output/manifest.json',
      name: "[name]_[hash]",
      //context: __dirname
    })
  ]
};

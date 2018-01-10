const webpack = require('webpack')

module.exports = {
  entry: './wrapper.js',
  output: {
    libraryTarget: 'var',
    library: 'ObjectInspector',
    path: 'dist',
    filename: 'object-inspector.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}

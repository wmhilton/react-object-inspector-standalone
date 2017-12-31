module.exports = {
  entry: './wrapper.js',
  output: {
    libraryTarget: 'var',
    library: 'ObjectInspector',
    path: 'dist',
    filename: 'object-inspector.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname
      }
    ]
  }
}

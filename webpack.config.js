const {join} = require('path')

module.exports = {
  context: __dirname,
  target: 'node',
  node: {
    __filename: true,
    __dirname: true
  },
  entry: join(__dirname, 'src', 'index.js'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['babel-plugin-transform-es2015-modules-commonjs']
        }
      }
    ]
  }
}
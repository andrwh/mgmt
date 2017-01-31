const path = require('path')
const webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/',                          // New
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),  // New
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          },
        },
        exclude: [
          path.resolve(__dirname, "../node_modules")
        ]
      }
    ],
  }
}

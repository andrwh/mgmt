const path = require('path')
const webpack = require('webpack')
module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: ['react-hot-loader/patch', './app.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist/assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['es2015', { modules: false }], 'react', 'stage-0'],
            plugins: ['react-hot-loader/babel'],
          },
        },
        exclude: [
          path.resolve(__dirname, "../node_modules")
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules')
    ]
  },
}

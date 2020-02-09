const HtmlWebpackPlugin = require('html-webpack-plugin')

const PRD = process.env.NODE_ENV === 'production'

module.exports = {
  mode: PRD ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          rootMode: 'upward'
        }
      }
    ]
  },
  devServer: {
    hot: true,
    inline: true,
    stats: 'minimal',
    clientLogLevel: 'warning',
    port: 3001
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: false
    })
  ]
}

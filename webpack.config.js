const path = require('path')
const GasPlugin = require('gas-webpack-plugin')

module.exports = {
  context: __dirname,
  mode: 'development',

  devtool: 'inline-source-map',
  entry: {
    main: path.resolve(__dirname, 'src', 'main.ts')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      'node_modules' // node_modules 内も対象とする
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new GasPlugin()]
}

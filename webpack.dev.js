const merge = require('webpack-merge');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    main: ['webpack-hot-middleware/client?reload=true', './src/main.jsx'],
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
  },
  devServer: {
    contentBase: './dist',
    overlay: true,
    stats: { colors: true, children: false },
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new DotenvPlugin(),
    new BundleAnalyzerPlugin({ analyzerPort: 5001, openAnalyzer: false }),
  ],
});

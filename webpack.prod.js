const merge = require('webpack-merge');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: { main: './src/main.jsx' },
  output: {
    filename: '[name]-[contenthash].bundle.js',
    chunkFilename: '[name]-[contenthash].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: '[name]-[contenthash].bundle.css',
      chunkFilename: '[name]-[contenthash].chunk.css',
    }),
    new OptimizeCssAssetsPlugin(),
    new UglifyJSPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
      minRatio: Number.MAX_SAFE_INTEGER,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle-analyzer-report.html',
      openAnalyzer: false,
    }),
  ],
});

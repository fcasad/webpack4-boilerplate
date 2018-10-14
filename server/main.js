/* eslint-disable global-require, no-console */
const path = require('path');
const express = require('express');
const staticGzipMiddleware = require('express-static-gzip');

const { NODE_ENV, PORT } = process.env;
const app = express();

if (NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack.dev.js');

  const compiler = webpack(config);
  const devMiddlewareConfig = { ...config.devServer, writeToDisk: true };
  app.use(webpackDevMiddleware(compiler, devMiddlewareConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.use(staticGzipMiddleware('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`\nServer listening on port: ${PORT}\n`);
});

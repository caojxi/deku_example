/* eslint-disable */
var webpack = require('webpack'),
    config = require('./webpack.config.js'),
    dev = require('webpack-dev-middleware'),
    hot = require('webpack-hot-middleware'),
    express = require('express'),
    path = require('path');

var port = 3333;

var compiler = webpack(config);
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  })
})

var app = express();

app.use(dev(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true,
    chunks: false
}}));

app.use(hot(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

console.log('Compiling...');
app.listen(port, 'localhost', function (err) {
  if (err) return console.err(err);

  console.log('Listening at http://localhost:' + port + '\n');
});

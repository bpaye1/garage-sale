import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackMiddleWare from 'webpack-dev-middleware';
import webpackHotMiddleWare from 'webpack-hot-middleware';
import config from './webpack.babel.config';

const compiler = webpack(config);
const app = express();
app.use(express.static('public/'));
app.use(webpackMiddleWare(compiler, {
  noInfo: true
}));
app.use(webpackHotMiddleWare(compiler));
app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/index.html'));
});
app.listen(3000);
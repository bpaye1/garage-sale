import path from 'path';
import { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack';

export default {
  entry: ['react-hot-loader/patch', './app/index', 'webpack-hot-middleware/client'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        loaders: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
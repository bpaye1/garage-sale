import path from 'path';
import { HotModuleReplacementPlugin, NoEmitOnErrorsPlugin } from 'webpack';

export default {
    entry: ['react-hot-loader/patch', './app/index', 'webpack-hot-middleware/client'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    plugins:[
        new HotModuleReplacementPlugin(),
        new NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'app'),
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js']
    },
}
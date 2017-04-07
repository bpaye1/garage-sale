import path from 'path';

export default {
    entry: ['./app/index', 'webpack-hot-middleware/client'],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.s?$/, 
                exclude: /node_modules/, 
                use: 'babel=loader'
            }
        ]
    }
}
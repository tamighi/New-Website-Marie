const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    resolve: {
        extensions:['.tsx', '.js', '.ts'],
    },
    module: {
        rules:[{ test: /\.tsx$/, exclude: /node_modules/, use: 'babel-loader' }]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
    ],
};

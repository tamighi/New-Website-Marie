const path = require('path');

module.exports = {
    entry: {
        main: './src/index.tsx',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules:[{ test: /\.tsx$/, use: 'ts-loader' }]
    }
};

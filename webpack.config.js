const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    devServer: {
        contentBase: '.',
    },
    module: {
        rules: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname),
    },
};
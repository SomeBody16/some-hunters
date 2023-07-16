//webpack.config.js
const path = require('path')

module.exports = [
    {
        mode: 'development',
        entry: {
            main: './kubejs/server/index.ts',
        },
        output: {
            path: path.resolve('dist', 'server_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
    {
        mode: 'development',
        entry: {
            main: './kubejs/client/index.ts',
        },
        output: {
            path: path.resolve('dist', 'client_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
    {
        mode: 'development',
        entry: {
            main: './kubejs/startup/index.ts',
        },
        output: {
            path: path.resolve('dist', 'startup_scripts'),
            filename: 'some-bundle.js',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /script/,
                },
            ],
        },
    },
]

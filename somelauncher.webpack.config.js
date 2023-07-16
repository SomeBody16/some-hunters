//webpack.config.js
const path = require('path')
const os = require('os')

const somelauncher = path.join(os.homedir(), 'AppData', 'Roaming', '.somelauncher')

module.exports = [
    {
        mode: 'development',
        entry: {
            main: './kubejs/server/index.ts',
        },
        output: {
            path: path.resolve(somelauncher, 'kubejs', 'server_scripts'),
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
            path: path.resolve(somelauncher, 'kubejs', 'client_scripts'),
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
            path: path.resolve(somelauncher, 'kubejs', 'startup_scripts'),
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

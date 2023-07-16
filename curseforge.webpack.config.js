//webpack.config.js
const path = require('path')
const os = require('os')

const output = 'D:\\Program Files\\Minecraft\\Instances\\KubeJS + FTB'

module.exports = [
    {
        mode: 'development',
        entry: {
            main: './kubejs/server/index.ts',
        },
        output: {
            path: path.resolve(output, 'kubejs', 'server_scripts'),
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
            path: path.resolve(output, 'kubejs', 'client_scripts'),
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
            path: path.resolve(output, 'kubejs', 'startup_scripts'),
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

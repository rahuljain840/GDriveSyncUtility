var webpack = require('./webpack.config.js');

module.exports = function (config) {
    config.set({
        browsers: [ 'Chrome' ],
        singleRun: true, //just run once by default
        frameworks: [ 'jasmine' ],
        files: [
            'test/tests.webpack-real.js',
            //'test/components/app_test.js'
        ],
        preprocessors: {
            'tests.webpack-real .js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader.       This lets Karma know that before your tests are run, they need to be preprocessed by running them through webpack.
        },
        reporters: [ 'dots' ], //report results in this format
        port: 9876,
        browsers: ['Chrome'],
        webpack: webpack,
        webpack: { //kind of a copy of your webpack config
            devtool: 'inline-source-map', //tell webpack to generate sourcemaps
            module: {
                loaders: [
                    { test: /\.js$/, loader: 'babel-loader' }
                ]
            }
        },
        webpackServer: {
            noInfo: true
        },
        plugins: [
            require("karma-webpack"),
            require('karma-chrome-launcher'),
            require('karma-jasmine'),
            require('karma-sourcemap-loader'),
            require('karma-babel-preprocessor')
        ]
    });
};
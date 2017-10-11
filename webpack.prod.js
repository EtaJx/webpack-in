const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common,{
    devtool:'source-map',//在生产环境中启用source map，便于调试，但是与开发环境不同
    plugins:[
        new UglifyJSPlugin({
            sourceMap:true
        }),//Tree Shaking ，压缩并去掉不必要的代码
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        })
    ]
});
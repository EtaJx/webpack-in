const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',//告诉服务器在dist文件夹下查找文件
        hot:true//开起热替换
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),//每次清空前一次的编译文件，即缓存
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()//HMR
    ],
    output:{
        filename:'[name].bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            }
        ]
    }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpack = require('webpack');//提取模板`

module.exports = {
    entry: {
        app: './src/index.js',
        vendor:[
            'lodash'
        ]
    },
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist'//告诉服务器在dist文件夹下查找文件
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        new webpack.optimize.CommonsChunkPlugin({//CommonChunkPlugin 的 vendor 实例，必须在 runtime 实例之前引入
            name:'vendor'
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'//提取模板
        })
    ],
    output:{
        filename:'[name].[chunckhash].js',
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
/**
 * 当使用webpack dev server和Nodejs API时，不要将dev server选项放在webpack配置对象（webpack config object）中。而是，在创建选项时，将其作为第二个参数传递，例如：
 * new webpackDevServer(compiler,options)
 * 具体代码如下:
 */
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
    contentBase: './dist',
    hot: true
};

webpackDevServer.addDevServerEntrypoints(config,options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, () => {
    console.log('dev server listening on port 5000');
})
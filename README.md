#### 使用环境变量
使用环境变量来消除开发和生产环境之间的差异。

（以前一直不知道，不理解这个环境变量到底怎么做的）webpack命令行环境配置中，通过设置`--env`可以使根据需要，传入尽多的环境变量。在`webpack.config.js`文件中可以访问到这些环境变量。例如`env.production`或`--env.NODE_ENV=local`

```bash
webpack --env.NODE_ENV=local --env.production --progress
```

在webpack config中，`module.exports`指向配置对象。要使用`env`变量，必须将`module.exports`转换成一个函数：
```javascript
module.exports = env => {
    console.log('NODE_ENV', env.NODE_ENV);
    console.log('production', env.production);
    return {
        entry:'./src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
}
```

- webpack命令行[环境配置](https://doc.webpack-china.org/api/cli/#environment-options)
- [webpack CLI 文档](https://doc.webpack-china.org/api/cli/#environment-optionso)
- [What You Should Know About NODE_ENV](https://dzone.com/articles/what-you-should-know-about-node-env)
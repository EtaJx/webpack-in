#### 代码分离
- 此特性能够把代码分离到不同的bundle中，然后可以按需加载或并行加载这些文件。代码分离可以用于获取更小的bundle，以及控制资源加载优先级，涉及到性能优化
- 常用的三种方法
 1. 入口起点：使用`entry`配置手动地分离代码
 2. 防止重复：使用`CommonChunkPlugin`去重和分离chunk
 3. 动态导入：通过模块的内联函数调用来分离代码
- 入口起点：如果入口chunks之间包含重复的模块，那些重复模块都会被引入到各个bundle中；这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码（重复引用问题，违背DRY原则）
- `CommonChunkPlugin`将公共的代码分离到单独的chunk，并从main bundle中移除，社区提供的很有帮助的插件和loaders:`ExtractTextPlugin`用于将css从主应用程序中分离；`bundle-loader`;`promise-loader`;
- 动态导入：(个人理解为这里就是以前经常听说的按需加载了)动态拆分代码时，webpack提供了两个技术。第一种，也是优先选择的方式，使用符合**[ECMAScript提案](https://github.com/tc39/proposal-dynamic-import)**的**`import()`语法**；第二种，则是使用webpack特定的`require.ensure`
- `import()`调用使用会在内部用到`pormises`,[import()文档](https://doc.webpack-china.org/api/module-methods#import-)
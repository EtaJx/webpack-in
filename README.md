## 生产环境构建
- 在开发环境中，我们需要强大的、具有实时重新加载或者热模块替换能力的source map和localhost server
- 在生产环境中，我们的目标转向于关注更小的bundle，更轻量的source map，以及更优化的资源，以及改善加载时间
- 犹豫要遵循逻辑分离，建议为每个环境比那些彼此独立的webpack配置
- 需要有一个通用配置，实用`webpack-merge`工具
- 许多library将通过与`process.env.NODE_ENV`环境变量关联，以决定library中应该引用哪些内容。使用内置`DefinePlugin`为所有依赖定义这个变量
- 任何位于`/src`的本地代码都可以关联到process.env.NODE_ENV环境变量。
#### 懒加载
懒加载或者按需加载这种方法实际上是先把代码在一些逻辑断点处分离开，然后在一些代码中完成某些操作后，立即引用或即将引用另外一些新的代码块。
在代码分离的基础上。在脚本运行哦时候产生一个分离的代码块`lodash.bundle.js`，在技术概念上“懒加载”它。问题是加载这个包并不需要用户的交互--意思是每次加载页面的时候都会请求它。这样并没有用。

用另一种方法：增加一个交互，当用户点击按钮的时候用console打印一些文字。但是会等到第一次交互的时候再加载那个代码块`print.js`。
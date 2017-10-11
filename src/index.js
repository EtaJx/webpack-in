// import _ from 'lodash';
// import './style.css';
// import ImageSrc from './icon.png';
// import printMe from './print.js';

// function component(){
//     var element = document.createElement('div');
//     var btn = document.createElement('button');
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check console';
//     btn.onclick = printMe;

//     element.appendChild(btn);
//     return element;
// }

/**
 * 在注释中使用 webpackChunkName，这样会导致bundle被命名为lodash.bundle.js
 */
function getComponent(){
    return import( /* webpackChunkName:"lodash" */ 'lodash').then( _ => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
        return element;
    }).catch( error => 'An error occurred while loading the component');
}

/**
 * 如果已经通过babel的预处理器启用async函数，可简化代码，如下
 */
 async function getComponent(){
     var element = document.createElement('div');
     const _ = await import(/*webpackChunkName:"lodash"*/'lodash');
     element.innerHTML = _.join(['Hello','Webpack'],'');
     return element;
 }

// document.body.appendChild(component());
getComponent.then( component => {
    document.body.addpendChild(component);
});
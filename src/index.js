import _ from 'lodash';
import './style.css';
import ImageSrc from './icon.png';
import printMe from './print.js';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check console';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

let element = component();//当print.js改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(component());

if(module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();//重新渲染页面后，component更新click时间处理
        document.body.appendChild(element);
    })
}
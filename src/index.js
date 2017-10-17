import _ from 'lodash';
import './style.css';
import ImageSrc from './icon.png';
import Print from './print.js';

function component(){
    var element = document.createElement('div');

    // locash 是由当前script 脚本 import 导入进来的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.onclick = Print.bind(null, 'hello webpack');

    return element;
}

document.body.appendChild(component());
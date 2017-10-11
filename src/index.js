import _ from 'lodash';
// import './style.css';
// import ImageSrc from './icon.png';
import printMe from './print.js';

if(process.env.NODE_ENV !== 'production'){//任何位于/src的本地代码都可以关联到process.env.NODE_ENV环境变量，所以可以进行以下的检查
    console.log('Looks like we are in development mode!');
}

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check console';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());
import _ from 'lodash';
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

function component(){
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'click me and look at the console';
    element.innerHTML = _.join(['hello','webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    //note that bacause a network request is involed, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/*webpackChunkName:"print"*/'./print').then(module => {
        var print = module.default;
        print();
    });
    return element;
}

document.body.appendChild(component());
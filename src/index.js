console.log('zoiew');
console.log('hello,world1133');

import Logo from '@/assets/logo.png';
import './css/common.css';

var img = document.createElement('img');
img.src = Logo;
img.classList.add('pic');
console.log(img);

// 挂在dom
document.body.appendChild(img);

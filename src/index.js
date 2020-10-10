console.log('zoiew');
console.log('hello,world1133');

import Logo from '@/assets/logo.png';
import '@/styles/css/reset.css';
import indexStyle from '@/styles/css/index.css';

import indexLessStyle from '@/styles/less/index.less';

console.log(indexLessStyle);
window.addEventListener('DOMContentLoaded', function() {
	// var img = document.createElement('img');
	const img = new Image();
	img.src = Logo;
	img.classList.add(indexLessStyle.pic);
	console.log(img);
	// 挂在dom
	document.body.appendChild(img);
});

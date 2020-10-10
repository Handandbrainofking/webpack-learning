console.log('zoiew');
console.log('hello,world1133');

import Logo from '@/assets/logo.png';
import '@/styles/css/reset.css';
import indexStyle from '@/styles/css/index.css';

import indexLessStyle from '@/styles/less/index.less';
console.log(indexLessStyle);
console.log('module.hot', module.hot);
let num = 1;
window.addEventListener('DOMContentLoaded', function() {
	var h = document.createElement('h6');
	const img = new Image();
	img.src = Logo;
	img.classList.add(indexLessStyle.pic);
	h.innerText = num;
	h.onclick = function() {
		h.innerText = ++num;
	};
	console.log(img);
	console.log(h);
	// 挂在dom
	document.body.appendChild(img);
	document.body.appendChild(h);
});

console.log('zoiew');
console.log('hello,world1133');

import Logo from '@/assets/logo.png';
import '@/css/reset.css';
import indexStyle from '@/css/index.css';

console.log(indexStyle);
window.addEventListener('DOMContentLoaded', function() {
	// var img = document.createElement('img');
	const img = new Image();
	img.src = Logo;
	img.classList.add(indexStyle.pic);

	console.log(img);
	// 挂在dom
	document.body.appendChild(img);
});

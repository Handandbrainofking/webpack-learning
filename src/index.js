console.log('zoiew');
console.log('hello,world1133');
// import '@babel/polyfill'
// import 'core-js/stable'
// import 'regenerator-runtime/runtime'
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
	// 挂在dom
	document.body.appendChild(img);
	document.body.appendChild(h);
});

async function getInfo() {
    return await getToken()
}

function getToken() {
  return new Promise((resolve,reject)=> {
    console.log('获取token')
    resolve('token_hello_123456')
  })
}

getInfo().then(resp=>{
    console.log(`result:${resp}`)
});

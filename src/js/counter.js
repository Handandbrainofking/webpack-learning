let num = 1001;
export function counter() {
	console.log('counter');

	const div = document.createElement('div');
	div.setAttribute('id', 'counter');
	div.innerText = num;
	div.onclick = function () {
		div.innerText = ++num;
	};
	document.body.appendChild(div);
}

export function calc() {
	console.log('计算');
}

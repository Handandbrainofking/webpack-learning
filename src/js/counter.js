let num = 1001;
export default function counter() {
  const div = document.createElement('div');
  div.setAttribute('id', 'counter');
  div.innerText = num;
  div.onclick = function () {
    div.innerText = ++num;
  }
  document.body.appendChild(div);
}
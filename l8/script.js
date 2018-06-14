let box = document.querySelector('.box'),
		// width = box.clientWidth,
		// height = box.clientHeight;
		// width = box.offsetWidth,
		// height = box.offsetHeight;
		width = box.clientWidth,
		height = box.clientHeight,
		btn = document.getElementsByTagName('button')[0];

// btn.onclick = function() {
// 	box.style.height = box.scrollHeight + 'px';
// 	console.log(box.scrollTop)
// }

// console.log(width);
// console.log(height);
// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

window.scrollBy(0,0);
window.scrollTo(0,0);
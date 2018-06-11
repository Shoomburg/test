let btn = document.getElementsByTagName('button'),
		overlay = document.querySelector('.overlay'),
		link = document.getElementsByTagName('a');

link[0].addEventListener('click', function(event) {
	event.preventDefault();
	console.log(event.type + event.target);
});

// btn[0].addEventListener('click', function() {
// 	alert('1');
// 	alert('2');
// });

// btn[0].addEventListener('mouseleave', function() {
// 	console.log('dfghjk');
// });


// btn[0].onclick = function () {
// 	alert('bfdsfgf');
// }

btn[0].addEventListener('click', function(event) {
	console.log(event.type + event.target);
});

btn[1].addEventListener('mouseenter', function(event) {
	console.log(event.type + event.target);
});

overlay.addEventListener('click', function(event) {
	console.log(event.type + event.target);
});
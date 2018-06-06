let box = document.getElementById('box'),
		btn = document.getElementsByTagName('button'),
		circle = document.getElementsByClassName('circle'),
		heart = document.querySelectorAll('.heart'),
		oneHeart = document.querySelector('.heart');

		
box.style.backgroundColor = 'blue';
box.style.borderRadius = '10px';
btn[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

let div = document.createElement('div');
let text = document.createTextNode('Lore jfdvnjksfvjdf fkjvudhv вамовдамь');

div.classList.add('black');
document.body.appendChild(div);
document.body.insertBefore(div, circle[2]);

document.body.removeChild(circle[0]);

document.body.replaceChild(btn[1], heart[1]);

div.textContent = 'Hello World!';
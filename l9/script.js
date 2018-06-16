// function  User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		alert('Hello ' + this.name);
// 	}
// }

// User.prototype.exit = function(name) {
// 	alert('Пользователь ' + this.name + ' покинул сайт')
// }

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 20);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();

// ivan.exit();

// "use strict"

// function showThis(a,b) {
// 	console.log(this);
// 		function sum() {
// 			console.log(this);
// 			return a + b
// 		}
// 		console.log(sum());
// };
// showThis(4,5);
// showThis(5,5);

// let obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// }

// obj.sum();

// 1) Просто вызов функции - ее контекст window
// 		или undefined если строгий режим
// 2) Как метод - this равен самому объекту
// 3) Как конструктор(через new) - this равен только что
// 		созданному новому объекту
// 4) Указание конкретного контекста - 
			// call, apply, bind

// let user = {
// 	name: 'John'
// };

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));


// function count(number) {
// 	return this*number;
// };

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));


// let btn = document.getElementsByTagName('button')[0];

// btn.addEventListener('click', function() {
// 	this.style.backgroundColor = 'red';
// });


let btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', ()=> {
	console.log(this);
});
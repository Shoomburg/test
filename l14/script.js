
// Инкапсуляция
// function User(name, age){
// 	this.name = name;
// 	let userAge = age;

// 	this.say = function(){
// 		alert(`Имя пользоателя: ${this.name}, возраст: ${userAge}`);
// 	}

// 	this.getAge = function(){
// 		return userAge
// 	}

// 	this.setAge = function(age){

// 		if(typeof age === 'number' && age>0 && age<110) {
// 			userAge = age;
// 		} else {
// 			console.log('Недопустимое значение')
// 		}
// 	}
// }

// let ivan = new User('Ivan', 25);
// console.log(ivan.name);
// console.log(ivan.getAge());
// ivan.setAge(23);
// console.log(ivan.getAge());
// ivan.say();



// Модули
// let number = 1;

// (function(){

// 	let number = 2;
// 	console.log(number);

// 	return console.log(number + 3);

// }())

// console.log(number);

// Приватные методы
// let user = (function(){

// 	let privat = function(){
// 		console.log('I am privat!');
// 	}

// 	return{
// 		sayHello : function(){
// 			console.log('Hello!');
// 		}
// 	}

// }());

// console.log(user.sayHello());


let user = (function(){

	let privat = function(){
		console.log('I am privat!');
	}

	let sayHello = function(){
		console.log('Hello!');
	}

	return{
		sayHello : sayHello,
		privat : privat
	}

}());

console.log(user.privat());
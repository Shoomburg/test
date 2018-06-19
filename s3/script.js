// ES5

// Функционально
// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.avatar = "Photo";

// 	this.deleteAvatar = function() {
// 		this.avatar = null;
// 	}
// }
// let john = new User("John", 25);
// let alex = new User("Alex", 30);
// let ivan = new User("Ivan", 28);
// john.deleteAvatar();
// console.log(john);



// Объектно
// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.avatar = "Photo";
// }

// User.prototype.deleteAvatar = function() {
// 	this.avatar = null;
// }

// let john = new User("John", 25);

// john.deleteAvatar();

// console.log(john);

// function Admin(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.avatar = "Photo";
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.changeMyId = function() {
// 	this.id = 1;
// 	console.log('I am the boss');
// }

// let admin = new Admin('Admin', 3);

// admin.deleteAvatar();
// admin.changeMyId();
// console.log(admin);



//ES6
class Options {
	constructor(height, width, bg) {
		this.height = height;
		this.width = width;
		this.bg = bg;
	}

	createNewDiv(text) {
		let div = document.createElement('div');
		div.textContent = text;

		div.style.cssText = `height: ${this.height};
												width: ${this.width};
												background-color: ${this.bg}`
		
		document.body.appendChild(div);
	}
}

let obj = new Options('200px', '300px', 'red');
obj.createNewDiv('trh hjttk');

let obj1 = new Options('500px', '400px', 'blue');
obj1.createNewDiv('trh hjttk');
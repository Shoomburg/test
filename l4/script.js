// let options = {
// 	name: "test",
// 	width: 1024,
// 	height: 1024
// }

// options.bool = false;
// options.colors = {
// 	border: "black",
// 	background: 'red'
// }

// delete options.bool

// for(let key in options) {
// 	console.log('Свойство ' + key + ' имеет значение ' + options[key])
// }

// console.log(Object.keys(options).length);

// let first = [1,"second",3,4,5]

// arr.pop();

// console.log(arr.pop());

// arr.push(6);

// arr.shift();

// arr.unshift(0);

// for (let i = 0; i < arr.length; i++) {
// 	alert(arr[i]);
// }

// first[99] = 99;
// console.log(first.length);
// first.forEach(function (item, i, arr) { 
// 	console.log(i + ": " + item + "(массив: " + arr + ")")
// })

// console.log(arr);

// let first = [];
// let i = prompt("","");
// first = i.split(",");
// console.log(first)

// let first = ["erty", "kjhg", "kjhg", "kjhg", "kjhg"];
// let i = first.join(",");
// console.log(i)

// let first = [1, 15, 20, 3];
// function  sortNumbers(a,b) {
// 	return a - b;
// }
// let i = first.sort(sortNumbers);
// console.log(i)

let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
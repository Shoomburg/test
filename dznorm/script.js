let money,
		name,
		time,
		price

function  start() {
	money = +prompt("Ваш бюджет?");

	while (isNaN(money) || money == "" || money == null) {
		alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
		money = prompt("Ваш бюджет?");
	}

	name = prompt("Название Вашего магазина?").toUpperCase();
	time = 21;
}
// start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Введите товар № " + (i + 1));
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
		} else {
			alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
			i = i - 1;
		}
	}
}
// chooseGoods();

// let i = 0;
// while (i < 5) {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = a;	
// 	} else {
// 		alert("Вы ввели неправильное значения, попробуйте еще раз");
// 		let a = prompt("Какой тип товаров будем продавать?");
// 		mainList.shopGoods[i] = a;	
// 	}
// 	i++;
// };

// let i = 0;
// do {
// 	let a = prompt("Какой тип товаров будем продавать?");
// 	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
// 		console.log('Все верно');
// 		mainList.shopGoods[i] = a;	
// 	} else {
// 		alert("Вы ввели неправильное значения, попробуйте еще раз");
// 		let a = prompt("Какой тип товаров будем продавать?");
// 		mainList.shopGoods[i] = a;
// 	}
// 	i++;
// }
// while (i < 5);

function workTime(time) {
	if (time < 0) {
		console.log("Этого не может быть");
	} else if(time > 8 && time < 20) {
			console.log('Время работать');
		} else if(time < 24) {
			console.log('Слишком поздно');
			} else {
				console.log('В сутках 24 часа!');
				}
}
// workTime(18);

function calcBudget(price) {
	alert("Ежедневный бюджет: " + (mainList.budget / 30));
}
// calcBudget();

function discontSystem(price) {
	if (mainList.discount == true) {
		console.log(price = price / 100 * 80);
	}
}
// discontSystem(1000);

function chooseEmployers() {
	for (let i = 0; i < 4; i++) {
		let a = prompt("Имя сотрудника № " + (i + 1));
		if ((typeof(a)) === 'string' && (typeof(a)) != undefined && a != '' && a.length < 50 ) {
			console.log('Все верно');
			mainList.employers[i] = a;
		} else {
			alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
			i = i - 1;
		}
	}
}
chooseEmployers();

console.log(mainList);
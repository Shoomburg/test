let money,
		name,
		time,
		price

function  start() {
	money = +prompt("Ваш бюджет?", '');

	while (isNaN(money) || money == "" || money == null) {
		alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
		money = prompt("Ваш бюджет?", '');
	}

	name = prompt("Название Вашего магазина?", '').toUpperCase();
	time = 21;
}
// start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
			let a = prompt("Введите товар № " + (i + 1), '');
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != null && a != '' && a.length < 50 ) {
			console.log('Все верно');
			mainList.shopGoods[i] = a;
		} else {
			alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
			i--;
		}
	}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log("Этого не может быть");
		} else if(time > 8 && time < 20) {
				console.log('Время работать');
				mainList.open = true;
			} else if(time < 24) {
				console.log('Слишком поздно');
				} else {
					console.log('В сутках 24 часа!');
					}
	},
	calcBudget: function calcBudget(price) {
		alert("Ежедневный бюджет: " + (mainList.budget / 30));
	},
	makeDiscount: function makeDiscount(price) {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let a = prompt("Имя сотрудника № " + (i + 1), '');
			if ((typeof(a)) === 'string' && (typeof(a)) != undefined && a != '' && a.length < 50 ) {
				console.log('Все верно');
				mainList.employers[i] = a;
			} else {
				alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
				i = i - 1;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		for (let i = 0; i < 1; i++) {
			let items = prompt("Перечислите через запятую товары", '');
		if ((typeof(items)) === 'string' && (typeof(items)) != null && items != null && items != '' && items.length < 50 ) {
			console.log('Все верно');
			mainList.shopItems = items.split(',');
			mainList.shopItems.push(prompt("Подождите, еще ", ''));
			mainList.shopItems.sort();
		} else {
			alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
			i--;
		}
	}
		document.write('У нас вы можете купить:<br>');
		mainList.shopItems.forEach(function (item,i,arr) {
		document.write((i+1) + ". " + item + '<br>');
		});
	},
}

mainList.chooseShopItems();


	console.log("Наш магазин включает в себя");	
for(let key in mainList.shopItems) {
	console.log(key + ": " + mainList.shopItems[key]);
};

let money = prompt("Ваш бюджет?");
let name = prompt("Название Вашего магазина?");
let time = 19;

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?" + (i + 1));
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('Все верно');
		mainList.shopGoods[i] = a;
	} else {
		alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
		i = i - 1;
	}
}

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

if (time < 0) {
	console.log("Этого не может быть");
} else if(time > 8 && time < 20) {
	console.log('Время работать');
} else if(time < 24) {
	console.log('Слицком поздно');
} else {
	console.log('В сутках 24 часа!');
};

alert(mainList.budget / 30);

console.log(mainList);
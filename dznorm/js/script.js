let open = 									document.getElementById('open-btn'),
		name_value = 						document.getElementsByClassName('name-value')[0],
		budget_value = 					document.getElementsByClassName('budget-value')[0],
		goods_value = 					document.getElementsByClassName('goods-value')[0],
		items_value = 					document.getElementsByClassName('items-value')[0],
		employers_value = 			document.getElementsByClassName('employers-value')[0],
		discount_value = 				document.getElementsByClassName('discount-value')[0],
		isopen_value = 					document.getElementsByClassName('isopen-value')[0],

		goods_item = 						document.getElementsByClassName('goods-item'),
		goods_btn = 						document.getElementsByTagName('button')[1],
		budget_btn = 						document.getElementsByTagName('button')[2],
		employers_btn = 				document.getElementsByTagName('button')[3],
		discount_chb = 					document.getElementById('discount-chb'),
		choose_item = 					document.querySelector('.choose-item'),
		time_value = 						document.querySelector('.time-value'),
		count_budget_value = 		document.querySelector('.count-budget-value'),
		hire_employers_item = 	document.querySelectorAll('.hire-employers-item');

let money,
		price = 102548,
		percent = price/100*20;

open.addEventListener('click', () => {
	money = +prompt("Ваш бюджет?", '');
	while (isNaN(money) || money == "" || money == null) {
		alert("Вы ввели неправильное значение или вообще ничего не ввели, попробуйте еще раз");
		money = prompt("Ваш бюджет?", '');
	}
	budget_value.textContent = money;
	name_value.textContent = prompt("Название Вашего магазина?", '').toUpperCase();
	budget_btn.disabled = false;
});


function checkGoods() {
		let a = goods_item[0].value;
		let b = goods_item[1].value;
		let c = goods_item[2].value;
		let d = goods_item[3].value;
	if ((a != '' || b != '' || c != '' || d != '') && mainList.open == true) {
		goods_btn.disabled = false;
		
	} else {
		goods_btn.disabled = true;
	}
};

function checkEmployers() {
	let a = hire_employers_item[0].value;
	let b = hire_employers_item[1].value;
	let c = hire_employers_item[2].value;
if ((a != '' || b != '' || c != '') && mainList.open == true) {
	employers_btn.disabled = false;
	
} else {
	employers_btn.disabled = true;
}
};

goods_btn.addEventListener('click', () => {
	for (let i = 0; i < goods_item.length; i++) {
		let a = goods_item[i].value;
	if ((typeof(a)) === 'string' && a.length < 50 && goods_btn.disabled == false) {
		console.log('Все верно');
		goods_btn.removeAttribute('disabled');
		mainList.shopGoods[i] = a;
		goods_value.textContent = mainList.shopGoods;
	} else {
		i--;
	}
}
});

choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (isNaN(items) && items != '') {
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();
		items_value.textContent = mainList.shopItems;
	} 
});

time_value.addEventListener('change', () => {
	let time = time_value.value;

	if (time < 0) {
		console.log("Этого не может быть");
		mainList.open = false;
	} else if(time > 8 && time < 20) {
			console.log('Время работать');
			mainList.open = true;
		} else if(time < 24) {
			console.log('Слишком поздно');
			mainList.open = false
			} else {
				console.log('В сутках 24 часа!');
				mainList.open = false
				};

	if (mainList.open == true) {
		isopen_value.style.backgroundColor = 'green';
		discount_chb.removeAttribute('disabled');
		goods_item[0].disabled = false;
		goods_item[1].disabled = false;
		goods_item[2].disabled = false;
		goods_item[3].disabled = false;
		choose_item.disabled = false;
		hire_employers_item[0].disabled = false;
		hire_employers_item[1].disabled = false;
		hire_employers_item[2].disabled = false;
		open.disabled = false;
	} else {
		isopen_value.style.backgroundColor = 'red';
		discount_chb.setAttribute("disabled", "disabled");
		mainList.discount = false;
		goods_item[0].disabled = true;
		goods_item[0].value = '';
		goods_item[1].disabled = true;
		goods_item[1].value = '';
		goods_item[2].disabled = true;
		goods_item[2].value = '';
		goods_item[3].disabled = true;
		goods_item[3].value = '';
		choose_item.disabled = true;
		choose_item.value = '';
		hire_employers_item[0].disabled = true;
		hire_employers_item[1].disabled = true;
		hire_employers_item[2].disabled = true;
		hire_employers_item[0].value = '';
		hire_employers_item[1].value = '';
		hire_employers_item[2].value = '';
		open.disabled = true;
		employers_btn.disabled = true;
	}
});

budget_btn.addEventListener('click', () => {
	count_budget_value.value = money / 30;
});

employers_btn.addEventListener('click', () => {
	for (let i = 0; i < hire_employers_item.length; i++) {
		let a = hire_employers_item[i].value;
		mainList.employers[i] = a;
		employers_value.textContent += mainList.employers[i] + ', ';
	}
});

discount_chb.addEventListener('change', () => {
	if (discount_chb.checked){
		price = price - percent;
		discount_value.style.backgroundColor = 'green';
		mainList.discount = true;
	} else {
		price = price + percent;
		discount_value.style.backgroundColor = 'red';
		mainList.discount = false;
	};
	console.log(price);
	console.log(mainList.discount);
	console.log(mainList.open);
	if (mainList.discount == false) {
		discount_value.style.backgroundColor = 'red';
	}
});


const mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
};
console.log(mainList.open);

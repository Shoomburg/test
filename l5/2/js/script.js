let btn = 						document.getElementById('open-btn'),
		name = 						document.getElementsByClassName('name'),
		budget = 					document.getElementsByClassName('budget'),
		goods = 					document.getElementsByClassName('goods'),
		items = 					document.getElementsByClassName('items'),
		employers = 			document.getElementsByClassName('employers'),
		discount = 				document.getElementsByClassName('discount'),
		isopen = 					document.getElementsByClassName('isopen');
		goodsItem = 			document.getElementsByClassName('goods-item'),
		btns = 						document.getElementsByTagName('button'),
		inGoods = 				document.querySelector('#items'),
		inTime = 					document.querySelector('#time'),
		inBudget = 				document.querySelector('#budget'),
		employersNames = 	document.querySelectorAll('.hire-employers-item');

console.log(btn);
console.log(name[0]);
console.log(budget[0]);
console.log(goods[0]);
console.log(items[0]);
console.log(employers[0]);
console.log(discount[0]);
console.log(isopen[0]);
for (let i = 0; i<goodsItem.length; i++) {
	console.log(goodsItem[i]);
};
for (let i = 0; i<btns.length; i++) {
	console.log(btns[i]);
};
console.log(inGoods);
console.log(inTime);
console.log(inBudget);
for (let i = 0; i<employersNames.length; i++) {
	console.log(employersNames[i]);
};
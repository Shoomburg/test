var budget = +prompt("Ваш бюджет", "100000");
var shopName = prompt("Название Вашего магазина", "Ваш магазин");
var product1 = prompt("Какой тип товаров будем продавать?", "Товар");
var product2 = prompt("Какой тип товаров будем продавать?", "Товар");
var product3 = prompt("Какой тип товаров будем продавать?", "Товар");
var shopGoods = [product1, product2, product3];

mainList = {
	Budget: budget,
	Shop: shopName,
	Products: shopGoods,
	employers: {
		Manager: "Петров",
		Dispatcher: "Сидоров",
		Courier: "Иванов"
	},
	open: true
}

console.log(budget);
console.log(shopName);
console.log(shopGoods[0]);
console.log(shopGoods[1]);
console.log(shopGoods[2]);
console.log(mainList.Budget);
console.log(mainList.Shop);
console.log(mainList.Products[0]);
console.log(mainList.Products[1]);
console.log(mainList.Products[2]);
console.log(mainList.employers.Manager);
console.log(mainList.employers.Dispatcher);
console.log(mainList.employers.Courier);
console.log(mainList.open);


alert('Ваш бюджет на 1 день - ' + budget/30 + ' рублей');
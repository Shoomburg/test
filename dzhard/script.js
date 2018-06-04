let str = "урок-3-был слишком легким";
function changeStr(a) {
	a = a[0].toUpperCase() + a.substring(1);
	a = a.replace('-', ' ');
	a = a.replace('-', ' ');
	a = a.replace(' легким', '');
	a = a.replace('ом', 'оо');
	console.log(a);
	document.write(a);
}
changeStr(str);

let arr = [20, 33, 1, "Человек", 2, 3]
function letMath(a) {
	for (let i = 0; i < a.length; i++) {
		let new = arr[i].Ma
	}
}
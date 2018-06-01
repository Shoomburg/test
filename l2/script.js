if(4*2 == 7*1) {
	console.log('OK')
} else {
	console.log('No')
}

let num = 50;

if(num < 49) {
	console.log('NO')
} else if(num > 100) {
		consolelog('NO')
	} else {
		console.log('OK!')
	}

(num == 50)? console.log('OK!') : console.log('NO');

switch (num) {
	case 49:
		console.log('Мало');
		break;
	case 100:
		console.log('Много');
		break;
	case 80:
		console.log('Все еще много');
		break;
	case 50:
		console.log('В точку');
		break;
	default:
		console.log('Не в этот раз');
		break;
}

// while (num < 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

for (let i = 0; i < 8; i++) {
	console.log(i);
}
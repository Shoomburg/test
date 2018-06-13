// window.addEventListener("DOMContentLoaded", function() {
// 	let box = document.getElementsByClassName("box")[0];

// 	// box.addEventListener('touchstart', function(e) {
// 	// 	e.preventDefault(); // отменяем события по умолчанию
// 	// 	console.log(e.changedTouches[0])
// 	// });

// 	// box.addEventListener('touchstart', function(e) {
// 	// 	e.preventDefault(); // отменяем события по умолчанию
// 	// 	console.log(e.targetTouches[0])
// 	// });

// 	box.addEventListener('touchstart', function(e) {
// 		e.preventDefault(); // отменяем события по умолчанию
// 		console.log(e.touches)
// 	});

// 	box.addEventListener('touchmove', function(e) {
// 		e.preventDefault(); // отменяем события по умолчанию
// 		console.log('MOVE')
// 	});

// 	box.addEventListener('touchend', function(e) {
// 		e.preventDefault(); // отменяем события по умолчанию
// 		console.log('END')
// 	});
// });

// touchstart - возникает, когда мы тапнули(прикоснулись к экрану)
// touchmove - возникает, когда мы, держа палец на экране, двигаем его по экрану
// touchend - возникает, когда мы отпускаем палец от экрана
// e.changesTouches - список пальцев(сколько их и куда они тыкнули)
// e.targetTouches - список точек на самой странице, куда тыкнули
// e.touches - список точек на самой странице, куда тыкнули

// метод search в регулярках - ищет первое совпадение и возвращает ее индекс
// метод match - ищет много совпадений
// метод match - ищет много совпадений
// флаг i позволяет искать буквы независимо от регистра
// флаг g ищет все совпадения
// флаг m ищет все совпадения
// . - значет ВСЁ
// \d - ищет цифры
// \w - ищет буквы
// \s - ищет пробелы
// если большая буква, то обратные классы(НЕ)
// чтобы искать знаки, нужно экранировать обратным слэшем(\)



// let ans = prompt('Имя');

// let reg = /N/ ;
// console.log(ans.search(reg));

// let pass = prompt('пароль');

// console.log(pass.replace(/./g, "*"));
// console.log('12-34-56'.replace(/-/g, ' '));
// console.log(/-/.test('12-43-55'));


// let str = 'My name is/ R2D2';
// // console.log(str.match(/\d/g));
// console.log(str.match(/\//));

// let box1 = document.getElementById('box'),
// 		box2 = document.querySelector('.box')


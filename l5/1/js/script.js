let menuItem = 	document.getElementsByClassName('menu-item'),
		bgi = 			document.querySelector('body'),
		items = 		document.querySelector('ul'),
		title = 		document.getElementById('title'),
		column = 		document.getElementsByClassName('column'),
		adv = 			document.getElementsByClassName('adv'),
		rel = 			prompt("Ваше отношение к технике Apple?", "Хорошее"),
		apple = 		document.getElementById('prompt');

items.insertBefore(menuItem[2], menuItem[1]);

let fiveMenuItem = document.createElement('li');
	fiveMenuItem.classList.add('menu-item');
	fiveMenuItem.textContent = 'Пятый пункт';
	items.appendChild(fiveMenuItem);

bgi.style.backgroundImage = "url(img/apple_true.jpg)";

title.textContent = 'Мы продаем только подлинную технику Apple';

column[1].removeChild(adv[0]);

apple.textContent = rel;
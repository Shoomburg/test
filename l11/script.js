// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff'
// 	}
// }

// console.log(JSON.parse(JSON.stringify(options))); в JSON и обратно

// console.log(JSON.stringify(options));



let request = new XMLHttpRequest();
// 1) Создаем обект запроса
request.open('GET', 'server.php', true, login, password);
// 2) Настройка запроса
request.send()
// 3) Отправка запроса
request.status // ответ сервера
request.statusText // текстовое описание ответа сервера
request.responseText // текст ответа сервера
request.readyState // текущее состояние запроса
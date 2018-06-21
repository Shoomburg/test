function ajax(){

let message = new Object();
message.loading = "Загрузка...";
message.success = "Спасибо! Скоро мы свяжемся с Вами!";
message.failure = "Что-то пошло не так...";

let form = document.getElementsByClassName('main-form')[0],
	formMS = document.getElementById('form'),
	input = document.getElementsByTagName('input'),
	statusMessage = document.createElement('div');
	statusMessage.classList.add('status');

function sendForm(elem) {
		elem.addEventListener('submit', function(event) {
			event.preventDefault();
			elem.appendChild(statusMessage);
			let formData = new FormData(elem);

			function postData(data) {

				return new Promise(function(resolve, reject) {

					let request = new XMLHttpRequest();
					request.open('POST', 'server.php')

					request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

					
					request.onreadystatechange = function() {
						if (request.readyState < 4) {
							resolve();
							console.log("Ждите");
						} else if (request.readyState === 4) {
							if (request.status == 200 && request.status < 300) {
								resolve();
								console.log("Успех");
								// Добавляем контент на страницу
							}
							else {
								reject();
								console.log("Ошибка");
							}
						}
					}
					request.send(data);
				})
				} // End postData
		function clearInput() {
			for(let i = 0; i < input.length; i++){
				input[i].value = '';
				//очищаем поля ввода
			}
		}
		postData(formData)
			.then(()=>  statusMessage.innerHTML = message.loading)
			.then(()=>  statusMessage.innerHTML = message.success)
			.catch(()=> statusMessage.innerHTML = message.failure)
			.then(clearInput)
})};

		sendForm(form);
		sendForm(formMS);
}

module.exports = ajax;
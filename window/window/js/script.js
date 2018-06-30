window.addEventListener('DOMContentLoaded', function(){

		// Modal popup + popup_engineer
	let engineer = document.querySelector('.popup_engineer_btn'),
			callBack = document.querySelectorAll('.phone_link'),
			close = document.querySelectorAll('.popup_close'),
			popupCallBack = document.querySelector('.popup'),
			popupEngineer = document.querySelector('.popup_engineer'),
			popupBack = [popupCallBack, popupEngineer]; // массив подложек для закрытия модальных окон


		// Модальное окно для popup_engineer_btn
	engineer.addEventListener('click', function(){
		popupEngineer.style.display = 'flex';
	});
		// Конец модального окна для popup_engineer_btn

		// Модальное окно для phone_link
	for(let i=0; i<callBack.length; i++){		
		callBack[i].addEventListener('click', function(){
			popupCallBack.style.display = 'flex';
		});
	}; 
		// Конец модального окна для phone_link

		// Закрытие модальных окон крестиком
	for(let i=0; i<close.length; i++){
		close[i].addEventListener('click', function(){
			// popupEngineer.style.display = 'none';
			// popupCallBack.style.display = 'none';
			popupBack[i].style.display = 'none';
		});
	};
		// END Закрытие модальных окон крестиком

		// Закрытие модальных окон кликом на подложку
	for(let i=0; i<popupBack.length; i++){
		popupBack[i].addEventListener('click', function(event){
			let target = event.target;
			if(target == this){
				popupBack[i].style.display = 'none';
			};
		});
	};
		// END Закрытие модальных окон кликом на подложку

		// Модальное окно при посещении сайта более 60 секунд
	setTimeout(function() {
		popupCallBack.style.display = 'flex';
	}, 60000);
		// END Модальное окно при посещении сайта более 60 секунд




}); // END window.addEventListener('DOMContentLoaded', function
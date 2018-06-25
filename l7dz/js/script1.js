// window.addEventListener('DOMContentLoaded', function() {
	
	let tab = document.getElementsByClassName('info-header-tab'),
			tabContent = document.getElementsByClassName('info-tabcontent'),
			info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1);

	function showTabContent(b) { 
		if(tabContent[b].classList.contains('hide')){
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) {
				if(target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});

// timer
	let deadline = '2018-06-30';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
		seconds = Math.floor((t/1000) % 60),
		minutes = Math.floor((t/1000/60) % 60),
		hours = Math.floor((t/(1000*60*60)));

		if (hours <= 9) {
			hours = `0${hours}`
		};
		if (minutes <= 9) {
			minutes = `0${minutes}`
		};
		if (seconds <= 9) {
			seconds = `0${seconds}`
		};
		if (Date.parse(endtime) < Date.parse(new Date())) {
			hours = "00";
			minutes = "00";
			seconds = "00";
		}

		return{
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	};

	function setClock(id, endtime) {  

		let timer = document.getElementById(id);
				hours = timer.querySelector('.hours'),
				minutes = timer.querySelector('.minutes'),
				seconds = timer.querySelector('.seconds');

				function updateClock() {  
					let t = getTimeRemaining(endtime);
					hours.innerHTML = t.hours;
					minutes.innerHTML = t.minutes;
					seconds.innerHTML = t.seconds;

					if (t.total <= 0) {
						clearInterval(timeInterval);
					}

				};
				updateClock();
				let timeInterval = setInterval(updateClock, 1000);

	};

	setClock('timer', deadline);

	// Modal

	let more = document.querySelector('.more'),
			moreTab = document.getElementsByClassName('description-btn'),
			overlay = document.querySelector('.overlay'),
			close = document.querySelector('.popup-close');

		for(let i=0; i<moreTab.length; i++){
			moreTab[i].addEventListener('click', function() {
				this.classList.add('more-splash');
				overlay.style.display = 'block';
				document.body.style.overflow = 'hidden';
			});
		}

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	console.log(moreTab);



// Form
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
	
class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	createElem(text) {
		let div = document.createElement('div');
		this.text = text;
		div.textContent = this.text;
		document.body.appendChild(div);
		div.style.cssText = `
			height: ${this.height}px;
			width: ${this.width}px;
			background: ${this.bg};
			font-size: ${this.fontSize}px;
			text-align: ${this.textAlign};
		`;
	}
}
let elem = new Options(200, '100%', '#0f5f56', 30, 'center');
elem.createElem('gfhjk jhk,l;lkjh ilujyhg likjh kujyhgg kuyjhb');

function  animate(draw, duration) {
	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		let timePassed = time - start;

		if (timePassed > duration) {
			timePassed = duration;
		}

		draw(timePassed);

		if (timePassed < duration) {
			requestAnimationFrame(animate);
		}
	});
}

let navigation = document.getElementsByTagName('nav')[0];

navigation.addEventListener('click', function(event) {
	event.preventDefault();

	animate(function(timePassed) {
		let target = event.target;

		let section = document.getElementById(target.getAttribute('href').slice(1));

		window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
	}, 1500);
});


	// Slider
	let slideIndex = 1,
			slides = document.getElementsByClassName('slider-item'),
			prev = document.querySelector('.prev'),
			next = document.querySelector('.next'),
			dotsWrap = document.querySelector('.slider-dots'),
			dots = document.getElementsByClassName('dot');

			showSlides(slideIndex);

			function  showSlides(n) {
				if (n > slides.length) {
					slideIndex = 1; // возвращаемся к первому слайду, когда кликаем вперед с последнего
				};

				if (n < 1) {
					slideIndex = slides.length; // с первого попадем на последний при клике на назад
				};

				for (let i = 0; i < slides.length; i++) {
					slides[i].style.display = 'none'; // прячем слайды
				};

				for (let i = 0; i < dots.length; i++) {
					dots[i].classList.remove('dot-active'); // убираем активный класс с точек
				};

				slides[slideIndex - 1].style.display = 'block'; // делаем видимым 1 слайд
				dots[slideIndex - 1].classList.add('dot-active'); // делаем видимой 1 точку
			}

			function plusSlides(n) {
				showSlides(slideIndex += n); // если +1, то вперед, если -1, то назад
			}

			function currentSlide(n) {
				showSlides(slideIndex = n);
			}

			prev.addEventListener('click', function() {
				plusSlides(-1);
			});

			next.addEventListener('click', function() {
				plusSlides(1);
			});
			
			dotsWrap.addEventListener('click', function(event) {
				for(let i = 0; i<dots.length + 1; i++){
					if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
						currentSlide(i);
					}
				}
			}); // end dotsWrap.addEventListener


			// Calculator

			let persons = document.getElementsByClassName('counter-block-input')[0],
					restDays = document.getElementsByClassName('counter-block-input')[1],
					place = document.getElementById('select'),
					totalValue = document.getElementById('total'),
					personsSum = 0,
					daysSum = 0,
					total = 0;

					function errorDot(input) { 
						input.addEventListener('keyup', function() { 
							this.value = this.value.replace(/[^\d]/,'').substr(0,2); 
					});
					}						
					errorDot(persons);
					errorDot(restDays);
					
					// persons.value.replace(/\d/g,'').substr(0,2);
					// restDays.value.replace(/\d/g,'').substr(0,2);

					totalValue.innerHTML = 0;

					persons.addEventListener('change', function() {
						personsSum = +this.value;
						total = (daysSum + personsSum)*4000;
						if (restDays.value == ''){
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						}
					}); // end persons.addEventListener

					restDays.addEventListener('change', function() {
						daysSum = +this.value;
						total = (daysSum + personsSum)*4000;
						if (persons.value == ''){
							totalValue.innerHTML = 0;
						} else {
							totalValue.innerHTML = total;
						}
					}); // end restDays.addEventListener

					place.addEventListener('change', function(){
						if(restDays.value == '' || persons.value == '') {
							totalValue.innerHTML = 0;
						} else {
							let a = total;
							// let b = this.options[this.selectedIndex].value;
							totalValue.innerHTML = a*this.options[this.selectedIndex].value;
						}
					}); // end place.addEventListener

					setInterval(function() {
						if(restDays.value == '' || persons.value == '') {
							totalValue.innerHTML = 0;
						}
					},1);

					



					
		// });  Конец DOMContentLoaded
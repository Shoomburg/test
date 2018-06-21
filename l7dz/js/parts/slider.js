function slider(){

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
}

module.exports = slider;
window.addEventListener('DOMContentLoaded', function() {
	
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
	let deadline = '2018-06-18';

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

});


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
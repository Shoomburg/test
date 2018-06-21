function modal(){

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
}

module.exports = modal;
window.addEventListener('DOMContentLoaded', function(){

	// Progress Scroll
	const ProgressScroll = (() => {
		let s;

		return {
			settings() {
				return {
					top: $('.progress-top'),
					right: $('.progress-right'),
					bottom: $('.progress-bottom'),
					left: $('.progress-left'),
					windowHeight: $(window).height(),
					windowWidth: $(window).width(),
					scrollHeight: $(document).height() - $(window).height(),
					progressTotal: $(window).width(),
					scrollPosition: $(document).scrollTop()
				};
			},

			init() {
				s = this.settings();
				this.bindEvents();
			},

			bindEvents() {
				$(window).on('scroll', this.onScroll);
				$(window).on('resize', this.onResize);

				this.progress();
			},

			onScroll() {
				s.scrollPosition = $(document).scrollTop();

				ProgressScroll.requestTick();
			},

			onResize() {
				s.windowHeight = $(window).height();
				s.windowWidth = $(window).width();
				s.scrollHeight = $(document).height() - s.windowHeight;
				s.progressTotal = s.windowHeight * 2 + s.windowWidth * 2;

				ProgressScroll.requestTick();
			},

			requestTick() {
				requestAnimationFrame(this.progress);
			},

			progress() {
				const percentage = s.scrollPosition / s.scrollHeight;
				const width = s.windowWidth / s.progressTotal;
				const height = s.windowHeight / s.progressTotal;

				s.top.css('width', `${(percentage / width) * 100}%`);
				s.right.css('height', `${((percentage - width) / height) * 100}%`);
				s.bottom.css('width', `${((percentage - width - height) / width) * 100}%`);
				s.left.css('height', `${((percentage - width - height - width) / height) * 100}%`);
			}
		};
	})();

	// Init
	$(() => {
		ProgressScroll.init();
	});												 // End Progress Scroll

	// Tabs
	(function($) {
		$(function() {

			$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
				$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
			});

		});
		})(jQuery); // End Tabs

		// Slider
		(function() { 
			Galleria.loadTheme('plugins/galleria/themes/classic/galleria.classic.min.js');
			Galleria.configure({
				transition: 'flash',
				theme: 'classic',
				imageCrop: true,
				height: 500,
				width: 900,
				autoplay: 2000,
				variation: 'light smallarow',
				overlayOpacity: 0,
				lightbox: true
		});
			Galleria.run('.galleria');
	}());                         // End slider

	



	// clock
	function update() {
		let time = new Date(),
			hr = time.getHours(),
			min = time.getMinutes(),
			sec = time.getSeconds();
		
		// prepend 0s to single digits
		if (hr < 10)
			hr = "0" + hr;
		if (min < 10)
			min = "0" + min;
		if (sec < 10)
			sec = "0" + sec;
		
		let timeStr = `${hr}${min}${sec}`,
			digits = document.querySelectorAll(".digit"),
			digitArr = [];
		
		for (let d in digits) {
			d = +d;
			if (d < digits.length) {
				digitArr[d] = timeStr.substr(d,1);
				digits[d].className = "digit _" + digitArr[d];
			}
		}
		setTimeout(update,1000);
	}
	update();



	// game
const game = document.querySelector('.game');
var arrFactory = [];
var arrTree = [];
var newFactory;
var interval = 800;
//var counter = 1;

function createGame() {
    for (let i = 0; i < 30; i++) {
        let a = document.querySelector('.game');
        let b = document.createElement('div');
        b.classList.add('box');
        b.setAttribute('data-value', i);
        a.appendChild(b);   
    }
    
}

function replay() {
    var replay = document.querySelector('.replay');
    replay.addEventListener('click', function() {
        box.forEach(function(box) {
            box.classList.remove('green');
            box.classList.remove('tree');

        });
        //counter += 1;
        //document.querySelector('.counter').innerHTML = 'Level: ' + counter;
        document.querySelector('.hidden').classList.add('levelUp')
        let bang = document.querySelector('.won');
        newFactory = setInterval(randomFactory, 600);
        bang.style.animation = 'start .6s ease-in-out';
        bang.style.top = '100%';
    });
}

function addTree(e) {
    let c = e.target;
    
    if(arrTree.indexOf(c.dataset.value) == -1) {
        arrTree.push(c.dataset.value);
        if(arrTree.length == 30) {
            clearInterval(newFactory);
            
            document.querySelector('.hidden').classList.remove('levelUp');
            let bang = document.querySelector('.won');
            bang.style.animation = 'won .6s ease-in-out';
            bang.style.top = '30%';
            replay();
        }
    } 
    

    if(arrFactory.indexOf(c.dataset.value) != -1) {
        arrFactory.splice(arrFactory.indexOf(c.dataset.value) ,1);
    }
    c.classList.remove('red');
    c.classList.remove('factory');
    c.classList.add('green');
    c.classList.add('tree');
    console.log(arrTree);
}

function randomFactory() {
    let e = Math.random() * 30;
    let g = Math.floor(e);
    
    if(arrFactory.indexOf(box[g].dataset.value) == -1) {
        arrFactory.push(box[g].dataset.value);
        box[g].classList.add('red');
        box[g].classList.remove('green');
        box[g].classList.add('factory');
        if(arrFactory.length == 30) {
            clearInterval(newFactory);
        }
    } 
    
    if(arrTree.indexOf(box[g].dataset.value) != -1) {
        arrTree.splice(arrTree.indexOf(box[g].dataset.value), 1);
    }
    console.log(arrFactory);
}

var yol = document.querySelector('.yolo');

createGame();

var box = document.querySelectorAll('.box');
// console.log(box);
var start = document.querySelector('.floating');
start.addEventListener('click', function() {
    let init = document.querySelector('.init');
    init.style.animation = 'start .5s ease-in';
    init.style.top = '100%';
    newFactory = setInterval(randomFactory, interval);
});

box.forEach(function(box) {
    box.addEventListener('click', addTree, false);
}, false);

function fire(e) {
    console.log(e.target);
    let trg = e.target;
    
    const itemDim = this.getBoundingClientRect(),
    itemSize = {
      x: itemDim.right - itemDim.left,
      y: itemDim.bottom - itemDim.top,
    };
    
    let burst = new mojs.Burst({
        left: itemDim.left + (itemSize.x/2),
        top: itemDim.top + (itemSize.y/1.7),
        count: 9,
        radius: {50 : 90},
    });
    burst.play();
};


box.forEach(function(box) {
    box.addEventListener('click', fire);
});


}); // End DOMContentLoaded
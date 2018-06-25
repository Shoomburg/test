// window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js'),
			modal = require('../parts/modal.js'),
			ajax = require('../parts/ajax.js'),
			slider = require('../parts/slider.js'),
			calc = require('../parts/calc.js'),
			anima = require('../parts/anima.js'),
			timer = require('../parts/timer.js');

			tab();
			modal();
			ajax();
			slider();
			calc();
			anima();
			timer();

// class Options {
// 	constructor(height, width, bg, fontSize, textAlign) {
// 		this.height = height;
// 		this.width = width;
// 		this.bg = bg;
// 		this.fontSize = fontSize;
// 		this.textAlign = textAlign;
// 	}

// 	createElem(text) {
// 		let div = document.createElement('div');
// 		this.text = text;
// 		div.textContent = this.text;
// 		document.body.appendChild(div);
// 		div.style.cssText = `
// 			height: ${this.height}px;
// 			width: ${this.width}px;
// 			background: ${this.bg};
// 			font-size: ${this.fontSize}px;
// 			text-align: ${this.textAlign};
// 		`;
// 	}
// }
// let elem = new Options(200, '100%', '#0f5f56', 30, 'center');
// elem.createElem('gfhjk jhk,l;lkjh ilujyhg likjh kujyhgg kuyjhb');

// });  Конец DOMContentLoaded
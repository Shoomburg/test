function calc(){

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
}

module.exports = calc;
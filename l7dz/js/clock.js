function clock() {
	let d = new Date(),
		  hours = d.getHours(),
		  minutes = d.getMinutes(),
		  seconds = d.getSeconds();
			
	if (hours <= 9) {
		hours = "0" + hours
	};
	if (minutes <= 9) {
		minutes = "0" + minutes
	};
	if (seconds <= 9) {
		seconds = "0" + seconds
	};

	let date_time = "Текущее время: "+ hours + ":" + minutes + ":" + seconds;

	document.write(date_time);
	document.close();
	setTimeout("clock()", 1000);
}
clock();
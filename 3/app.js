(function () {
	console.log('Challenge: Create a timer who stars in 10 and ends in 0');
	console.log('Solution:');
})();

(function () {
	var interval;
	var i = 10;

	function clocky () {
		if (i >= 0 ){

			console.log(i--);
		} else {
			clearInterval(interval)
		}
	}

	interval = setInterval(clocky, 1000)
})();
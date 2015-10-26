(function () {
	console.log('Challenge:');
	console.log('Create a function with one parameter indicating which line should be print with the following text');
	console.log('1 = anane')
	console.log('2 = adak')
	console.log('3 = adak anane')
	console.log('4 = adak adak')
	console.log('5 = adak adak anane')
	console.log('6 = adak adak adak')
	console.log('7 = adak adak adak anane')
	console.log('8 = adak adak adak adak')
})();

function printText (n) 
{
	var text = new Array(parseInt(n/2) + 1).join('adak ');
	return (n % 2) ? text + 'anane' : text

}

console.log('Running my solution: ');
console.log('With number 8 as a parameter', 8);
console.log(printText(8));
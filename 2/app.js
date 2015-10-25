'use strict';
var create_array = (first_array, second_array) => {
	var obj = {}
	for (let i = 0; i < first_array.length; i++) {
		obj[first_array[i]] = second_array[i];
	}
	return obj
}

var a = ['a', 'b', 'c'];
var b = [1,2,3];
console.log('Challenge: Create a function who return an object whose keys and value are passed as a parameters');
console.log('Solution:');
console.log(create_array(a,b));
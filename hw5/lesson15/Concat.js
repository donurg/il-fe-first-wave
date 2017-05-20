


function concatArrays(/* array#1, array#2 ... array#n */) {
	var result = [];
	var counter = 0;
	var i = 0;

	for (; i < arguments.length; i++) {
		for (var j = 0; j < arguments[i].length; j++) {
			result[counter] = arguments[i][j];
			counter++;
		}
	}

	return result;
}

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log(concatArrays(arr1, arr2));
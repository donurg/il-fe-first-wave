function pow1(x, n) {
	return (function inner(a, b, c) {
		return (b === 1) ? a : inner(a * c, b - 1, c);
	})(x, n, x);
}

function pow2(x, n) {
	for (var i = x; n > 1; n--) {
		x *= i;
	}
	return x;
}

function pow(x, n) {
	return (n === 1) ? x : x * pow(x, n - 1);
}



// console.log( pow(2, 4) );
console.log( pow2(2, 4) );
// console.log( pow(4, 2) );
// console.log( pow(8, 1) );
// console.log( pow(2, 3) );
// 
function fiboRec(n) {
	return (n <= 2) ? 1 : fiboRec(n - 1) + fiboRec(n - 2);
}

function fiboTail(n) {
	return (function inner(a, b, c) {
		return (c > 1) ? inner(a + b, a, c - 1) : a; 
	})(1, 0, n);
}

function fiboLoop(n) {
	var a = 1;
	var b = 0;
	var c = 0;

	for (var i = 1; i < n; i++) {
		c = a + b;
		b = a;
		a = c;
	}

	return c;
}

console.log(fiboLoop(77));
// console.log(fiboRec(77));
console.log(fiboTail(77));


function factorialize(n) {
	return (n <= 0) ? 1 : n * factorialize(n - 1);
}

function factorializeLoop(n) {
	for (var i = n - 1; i > 0; i--) {
		n *= i;
	}
	return (n > 0) ? n : 1;
}

function factorializeTail(n) {
	return (n <= 0) ? 1 : (function factorialize(a, b) {
		return (b === 0) ? a : factorialize(a * b, b - 1);
	})(n, n - 1);
}

console.log(factorialize(6));
console.log(factorializeLoop(6));
console.log(factorializeTail(6));

function calcProgression(n) {
	return (1 + n) / 2 * n;
}

function loopProgression(n) {
	for (var i = n - 1; i > 0; i--) {
		n += i;
	}
	return n;
}

function recurseProgression(n) {
	return (n === 1) ? n : n + recurseProgression(n - 1);
}

function tailProgression(n) {
	return (function recourse(a, b) {
		return (b === 0) ? a : recourse(a + b, b - 1);
	})(n, n - 1);
}

console.log(calcProgression(100));
console.log(loopProgression(100));
console.log(recurseProgression(100));
console.log(tailProgression(100));

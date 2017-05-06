function isPrime(num) {
	for (var i = num - 1; i >= 2; i--) {
		if (num % i) {
			return false;
		}
	}
}

function alertPrimes(first, last) {
	for (var i = first; i <= last; i++) {
		if (isPrime(i)) {
			alert(i);
		}
	}
}

alertPrimes(2, 10);
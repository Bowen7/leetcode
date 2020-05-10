var myPow = function(x, n) {
	let _n = Math.abs(n);
	if (_n === 0) {
		return 1;
	}
	let re = 1;
	while (_n > 0) {
		if (_n % 2 === 1) {
			re *= x;
		}
		x *= x;
		_n = Math.floor(_n / 2);
	}
	if (n < 0) {
		return 1 / re;
	}
	return re;
};
console.log(myPow(2, -4));

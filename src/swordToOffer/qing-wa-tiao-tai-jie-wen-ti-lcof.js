var numWays = function(n) {
	let a = 1;
	let b = 1;
	if (n === 0) {
		return 1;
	}
	for (let i = 2; i <= n; i++) {
		const sum = (a + b) % 1000000007;
		a = b;
		b = sum;
	}
	return b;
};
console.log(numWays(7));

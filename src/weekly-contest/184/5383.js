var numOfWays = function(n) {
	let sum1 = 6;
	let sum2 = 6;
	const mod = Math.pow(10, 9) + 7;
	for (let i = 1; i < n; i++) {
		const _sum1 = (sum1 * 3 + sum2 * 2) % mod;
		const _sum2 = (sum1 * 2 + sum2 * 2) % mod;
		sum1 = _sum1;
		sum2 = _sum2;
	}
	return (sum1 + sum2) % mod;
};
console.log(numOfWays(7));

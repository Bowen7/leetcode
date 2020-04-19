var findMinFibonacciNumbers = function(k) {
	const dp = [0, 1, 1];
	const max = Math.pow(10, 9);
	let last = 1;
	let lastI = 3;
	while (last < max) {
		last = dp[lastI - 1] + dp[lastI - 2];
		dp[lastI] = last;
		lastI++;
	}
	let re = 0;
	for (let i = dp.length - 1; i > 0; i--) {
		if (dp[i] <= k) {
			k -= dp[i];
			re++;
		}
	}
	return re;
};
// console.log(findMinFibonacciNumbers(7));
// console.log(findMinFibonacciNumbers(10));
console.log(findMinFibonacciNumbers(19));

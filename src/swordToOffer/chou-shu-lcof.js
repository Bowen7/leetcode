var nthUglyNumber = function(n) {
	let a = 1;
	let b = 1;
	let c = 1;
	const dp = [0, 1];
	for (let i = 2; i <= n; i++) {
		dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
		if (dp[i] === dp[a] * 2) {
			a++;
		}
		if (dp[i] === dp[b] * 3) {
			b++;
		}
		if (dp[i] === dp[c] * 5) {
			c++;
		}
	}
	return dp[n];
};
console.log(nthUglyNumber(11));

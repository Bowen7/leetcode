var cuttingRope = function(n) {
	const dp = [1, 1];
	for (let i = 2; i <= n; i++) {
		let max = 0;
		for (let j = 1; j < i; j++) {
			max = Math.max(dp[j] * (i - j), j * (i - j), max) % 1000000007;
		}
		dp[i] = max;
	}
	return dp[n];
};
console.log(cuttingRope(10));

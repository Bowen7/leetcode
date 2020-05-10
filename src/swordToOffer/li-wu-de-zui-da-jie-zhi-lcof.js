var maxValue = function(grid) {
	const dp = [];
	let max = 0;
	const m = grid.length;
	if (m === 0) {
		return max;
	}
	const n = grid[0].length;
	for (let i = 0; i < m; i++) {
		dp.push([]);
		for (let j = 0; j < n; j++) {
			if (i === 0 && j === 0) {
				dp[i][j] = grid[i][j];
			} else if (i === 0) {
				dp[i][j] = dp[i][j - 1] + grid[i][j];
			} else if (j === 0) {
				dp[i][j] = dp[i - 1][j] + grid[i][j];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
			}
		}
	}
	return dp[m - 1][n - 1];
};
console.log(
	maxValue([
		[1, 3, 1],
		[1, 5, 1],
		[4, 2, 1]
	])
);

var constrainedSubsetSum = function(nums, k) {
	k--;
	const dp = [];
	for (let i = 0; i < nums.length; i++) {
		if (i === 0) {
			dp[i] = nums[i];
		} else {
			let num = 0;
			let max;
			while (num <= k && i - num >= 0) {
				if (max === undefined) {
					max = dp[i - num - 1];
				} else if (i - num === -1) {
					max = 0 > max ? 0 : max;
				} else if (dp[i - num - 1] !== undefined) {
					max = dp[i - num - 1] > max ? dp[i - num - 1] : max;
				}
				num++;
			}
			if (max === undefined) {
				max = 0;
			}
			if (max > 0) {
				dp[i] = max + nums[i];
			} else {
				dp[i] = nums[i];
			}
		}
	}
	return Math.max(...dp);
};
console.log(constrainedSubsetSum([-5266, 4019, 7336, -3681, -5767], 2));
// console.log(constrainedSubsetSum([-1, -2, -3], 1));
// console.log(constrainedSubsetSum([10, -2, -10, -5, 20], 2));

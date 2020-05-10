var maxSubArray = function(nums) {
	let max = -Number.MAX_SAFE_INTEGER;
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		const _sum = sum + nums[i];
		max = _sum > max ? _sum : max;
		if (_sum > 0) {
			sum = _sum;
		} else {
			sum = 0;
		}
	}
	return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

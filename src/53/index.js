var maxSubArray = function(nums) {
	let max = nums[0];
	let sum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		sum < 0 ? (sum = nums[i]) : (sum += nums[i]);
		sum > max && (max = sum);
	}
	return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

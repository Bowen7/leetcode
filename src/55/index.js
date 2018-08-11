var canJump = function(nums) {
	if (nums.length === 1) {
		return true;
	}
	var start = 0;
	var end = nums.length - 1;
	var max = 0;
	var maxi = -1;
	while (start < end) {
		if (nums[start] + start >= end) {
			return true;
		}
		max = 0;
		maxi = start;
		for (var i = start + 1; i <= start + nums[start]; i++) {
			i + nums[i] > max ? ((max = i + nums[i]), (maxi = i)) : null;
		}
		if (maxi === start) {
			return false;
		}
		start = maxi;
	}
};
console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));

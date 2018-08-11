var jump = function(nums) {
	var start = 0;
	var end = nums.length - 1;
	var steps = 0;
	var max = 0;
	var maxi = 0;
	while (start < end) {
		steps++;
		max = 0;
		if (start + nums[start] >= end) {
			break;
		}
		for (var i = start + 1; i <= start + nums[start]; i++) {
			i + nums[i] > max ? ((max = i + nums[i]), (maxi = i)) : null;
		}
		start = maxi;
	}
	return steps;
};
console.log(jump([2, 3, 1, 1, 4]));

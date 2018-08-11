var wiggleMaxLength = function(nums) {
	if (nums.length === 0) {
		return 0;
	}
	var up = [1];
	var down = [1];
	for (var i = 1; i < nums.length; i++) {
		if (nums[i] > nums[i - 1]) {
			up[i] = down[i - 1] + 1;
			down[i] = down[i - 1];
		} else if (nums[i] < nums[i - 1]) {
			down[i] = up[i - 1] + 1;
			up[i] = up[i - 1];
		} else {
			down[i] = down[i - 1];
			up[i] = up[i - 1];
		}
	}
	return Math.max(down[nums.length - 1], up[nums.length - 1]);
};
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]));
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]));
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]));

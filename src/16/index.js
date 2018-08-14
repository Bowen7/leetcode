var threeSumClosest = function(nums, target) {
	nums.sort((a, b) => {
		return a - b;
	});
	let sum, a, b, c;
	let result = nums[0] + nums[1] + nums[2];
	for (a = 0; a < nums.length - 2; a++) {
		b = a + 1;
		c = nums.length - 1;
		while (b < c) {
			sum = nums[a] + nums[b] + nums[c];
			Math.abs(sum - target) < Math.abs(result - target) &&
				(result = sum);
			if (sum - target === 0) {
				return target;
			} else if (sum - target > 0) {
				c--;
			} else {
				b++;
			}
		}
	}
	return result;
};
console.log(threeSumClosest([0, 2, 1, -3], 1));

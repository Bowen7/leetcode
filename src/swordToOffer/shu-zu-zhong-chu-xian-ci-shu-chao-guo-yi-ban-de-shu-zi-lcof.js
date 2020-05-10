var majorityElement = function(nums) {
	let num;
	let times = 0;
	for (let i = 0; i < nums.length; i++) {
		if (times === 0) {
			num = nums[i];
			times++;
		} else {
			if (nums[i] === num) {
				times++;
			} else {
				times--;
			}
		}
	}
	return num;
};

var search = function(nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor(left + right);
		if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	const j = right;
	left = 0;
	right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor(left + right);
		if (nums[mid] >= target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return j - left + 1;
};

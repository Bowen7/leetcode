var findRepeatNumber = function(nums) {
	let i = 0;
	while (i < nums.length) {
		const item = nums[i];
		if (item === -1) {
			i++;
		} else if (nums[item] === -1) {
			return item;
		} else {
			temp = nums[item];
			nums[i] = temp;
			nums[item] = -1;
			if (nums[i] === i) {
				nums[i] === -1;
				i++;
			}
		}
	}
};
console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));

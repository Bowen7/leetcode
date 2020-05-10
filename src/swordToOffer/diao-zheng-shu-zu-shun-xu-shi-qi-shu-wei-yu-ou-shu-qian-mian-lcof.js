var exchange = function(nums) {
	let i = 0;
	let j = nums.length - 1;
	while (i < j) {
		if (nums[i] % 2 === 0) {
			temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			j--;
		} else {
			i++;
		}
	}
	return nums;
};
console.log(exchange([1, 2, 3, 4]));

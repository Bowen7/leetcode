var missingNumber = function(nums) {
	let n = nums.length + 1;
	const _sum = ((n - 1) / 2) * n;
	const sum = nums.reduce((pre, item) => {
		return pre + item;
	}, 0);
	return _sum - sum;
};
console.log(missingNumber([0, 1, 3]));

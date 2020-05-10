var kLengthApart = function(nums, k) {
	let last = -1;
	for (let i = 0; i < nums.length; i++) {
		if (last === -1 && nums[i] === 1) {
			last = i;
		} else if (last !== -1) {
			if (nums[i] === 1) {
				const _k = i - last;
				if (_k - 1 < k) {
					return false;
				}
				last = i;
			}
		}
	}
	return true;
};
console.log(kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2));
console.log(kLengthApart([1, 0, 0, 1, 0, 1], 2));
console.log(kLengthApart([1, 1, 1, 1, 1], 0));
console.log(kLengthApart([0, 1, 0, 1], 1));

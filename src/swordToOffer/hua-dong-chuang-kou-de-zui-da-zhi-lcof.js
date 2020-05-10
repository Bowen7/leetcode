var maxSlidingWindow = function(nums, k) {
	const queue = [];
	const re = [];
	for (let i = 0; i < nums.length; i++) {
		while (queue.length > 0) {
			if (queue[queue.length - 1] < i - k + 1) {
				queue.pop();
			} else {
				break;
			}
		}
		while (queue.length > 0) {
			if (nums[queue[0]] < nums[i]) {
				queue.shift();
			} else {
				break;
			}
		}
		queue.unshift(i);
		if (i >= k - 1) {
			re.push(nums[queue[queue.length - 1]]);
		}
	}
	return re;
};
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

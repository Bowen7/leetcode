var longestSubarray = function(nums, limit) {
	const maxQ = [];
	const minQ = [];
	let start = 0;
	let re = 0;
	for (let i = 0; i < nums.length; i++) {
		for (let j = maxQ.length - 1; j >= 0; j--) {
			if (nums[maxQ[j]] < nums[i]) {
				maxQ.pop();
			} else {
				break;
			}
		}
		maxQ.push(i);
		for (let j = minQ.length - 1; j >= 0; j--) {
			if (nums[minQ[j]] > nums[i]) {
				minQ.pop();
			} else {
				break;
			}
		}
		minQ.push(i);
		while (nums[maxQ[0]] - nums[minQ[0]] > limit) {
			if (maxQ[0] <= start) {
				maxQ.shift();
			}
			if (minQ[0] <= start) {
				minQ.shift();
			}
			start++;
		}
		// console.log(maxQ, minQ);
		// console.log(i, start);
		re = Math.max(i - start + 1, re);
	}
	return re;
};
console.log(longestSubarray([8, 2, 4, 7], 4));
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5));
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0));

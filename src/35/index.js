// var searchInsert = function(nums, target) {
// 	const index = nums.indexOf(target);
// 	if (nums.indexOf(target) !== -1) {
// 		return index;
// 	}
// 	return nums.filter(item => item < target).length;
// };
var searchInsert = function(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	if (target > nums[end]) {
		return nums.length;
	}
	if (target < nums[0]) {
		return 0;
	}
	while (start <= end) {
		if (nums[start] === target) {
			return start;
		}
		if (nums[end] === target) {
			return end;
		}
		let mid = Math.floor((start + end) / 2);
		if (nums[mid] < target) {
			start = mid + 1;
		} else if (nums[mid] > target) {
			end = mid - 1;
		} else {
			return mid;
		}
	}
	return start;
};
// console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 2));

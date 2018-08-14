var maxArea = function(height) {
	let start = 0;
	let end = height.length - 1;
	let max = 0;
	while (start < end) {
		const area = (end - start) * Math.min(height[start], height[end]);
		area > max && (max = area);
		height[start] <= height[end] ? start++ : end--;
	}
	return max;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

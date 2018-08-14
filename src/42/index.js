var trap = function(height) {
	let sum = 0;
	let max = height[0];
	let maxi = 0;
	for (let i = 0; i < height.length; i++) {
		height[i] > max && ((max = height[i]), (maxi = i));
	}
	let h = 0;
	for (let i = 0; i < maxi; i++) {
		height[i] > h ? (h = height[i]) : (sum += h - height[i]);
	}
	h = 0;
	for (let i = height.length - 1; i > maxi; i--) {
		height[i] > h ? (h = height[i]) : (sum += h - height[i]);
	}
	return sum;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

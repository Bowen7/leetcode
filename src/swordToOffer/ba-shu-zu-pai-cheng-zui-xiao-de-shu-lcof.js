var minNumber = function(nums) {
	nums.sort((a, b) => {
		return a + "" + b > b + "" + a ? 1 : -1;
	});
	return nums.join("");
};
console.log(minNumber([3, 30, 34, 5, 9]));

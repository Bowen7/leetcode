var minStartValue = function(nums) {
	let min;
	let sum = 0;
	nums.forEach(num => {
		sum += num;
		if (min === undefined) {
			min = sum;
		} else {
			min = sum < min ? sum : min;
		}
	});
	if (min >= 0) {
		return 1;
	} else {
		return 1 - min;
	}
};
console.log(minStartValue([-3, 2, -3, 4, 2]));
console.log(minStartValue([1, 2]));
console.log(minStartValue([1, -2, -3]));

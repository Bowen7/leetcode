var canBeEqual = function (target, arr) {
	target = target.sort((a, b) => {
		return a - b;
	});
	arr = arr.sort((a, b) => {
		return a - b;
	});
	if (target.length !== arr.length) {
		return false;
	}
	return target.every((item, index) => {
		return arr[index] === item;
	});
};

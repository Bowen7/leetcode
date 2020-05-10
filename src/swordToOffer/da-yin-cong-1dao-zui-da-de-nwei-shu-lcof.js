var printNumbers = function(n) {
	const result = [];

	const max = Math.pow(10, n);
	for (let i = 1; i < max; i++) {
		result.push(i);
	}
	return result;
};

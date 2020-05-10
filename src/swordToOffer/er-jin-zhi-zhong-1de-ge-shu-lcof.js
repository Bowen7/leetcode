var hammingWeight = function(n) {
	let sum = 0;
	while (n) {
		if (n & (1 === 1)) {
			sum++;
		}
		n = n >> 1;
	}
	return sum;
};

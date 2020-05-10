var spiralOrder = function(matrix) {
	let t = 0;
	let b = matrix.length - 1;
	if (b === -1) {
		return [];
	}
	let l = 0;
	let r = matrix[0].length - 1;
	const result = [];
	while (1) {
		for (let i = l; i <= r; i++) {
			result.push(matrix[t][i]);
		}
		if (++t > b) {
			break;
		}
		for (let i = t; i <= b; i++) {
			result.push(matrix[i][r]);
		}
		if (--r < l) {
			break;
		}
		for (let i = r; i >= l; i--) {
			result.push(matrix[b][i]);
		}
		if (--b < t) {
			break;
		}
		for (let i = b; i >= t; i--) {
			result.push(matrix[i][l]);
		}
		if (++l > r) {
			break;
		}
	}
	return result;
};
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12]
	])
);

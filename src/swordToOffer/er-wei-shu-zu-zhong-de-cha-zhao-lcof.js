var findNumberIn2DArray = function(matrix, target) {
	const n = matrix.length;
	if (n === 0) {
		return false;
	}
	const m = matrix[0].length;
	let i = 0;
	let j = m - 1;
	while (i < n && j >= 0) {
		if (matrix[i][j] === target) {
			return true;
		}
		if (matrix[i][j] < target) {
			i++;
		} else if (matrix[i][j] > target) {
			j--;
		}
	}
	return false;
};

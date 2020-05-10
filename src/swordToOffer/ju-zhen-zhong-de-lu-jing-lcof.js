var exist = function(board, word) {
	const n = board.length;
	const m = board[0].length;
	const dfs = (i, j, k) => {
		if (i >= n || j >= m || i < 0 || j < 0) {
			return false;
		}
		if (board[i][j] === word[k]) {
			if (k === word.length - 1) {
				return true;
			}
			const tmp = board[i][j];
			board[i][j] = "-";
			if (
				dfs(i + 1, j, k + 1) ||
				dfs(i, j - 1, k + 1) ||
				dfs(i, j + 1, k + 1) ||
				dfs(i - 1, j, k + 1)
			) {
				return true;
			}
			board[i][j] = tmp;
		}
		return false;
	};
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (dfs(i, j, 0)) {
				return true;
			}
		}
	}
	return false;
};
console.log(exist([["a"]], "ab"));

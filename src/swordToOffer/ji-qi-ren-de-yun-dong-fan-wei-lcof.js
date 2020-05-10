var movingCount = function(m, n, k) {
	const hash = {};
	const getSum = x => {
		if (hash[x]) {
			return hash[x];
		}
		const sum = (x + "").split("").reduce((pre, item) => {
			return pre + +item;
		}, 0);
		hash[x] = sum;
		return sum;
	};
	const visit = [];
	const stack = [[0, 0]];
	let sum = 0;
	while (stack.length > 0) {
		const cur = stack.pop();
		const [i, j] = cur;
		if (getSum(i) + getSum(j) > k || i >= m || j >= n || visit[i * n + j]) {
			continue;
		}
		sum++;
		visit[i * n + j] = true;
		stack.push([i + 1, j], [i, j + 1]);
	}
	return sum;
};
console.log(movingCount(2, 3, 1));

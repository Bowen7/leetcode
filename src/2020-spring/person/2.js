var numWays = function(n, relation, k) {
	const fromArr = [];
	for (let i = 0; i < n; i++) {
		fromArr[i] = [];
	}
	relation.forEach(item => {
		const from = item[0];
		const to = item[1];
		fromArr[to].push(from);
	});
	let froms = [n - 1];
	while (k--) {
		const newFroms = [];
		froms.forEach(from => {
			newFroms.push(...fromArr[from]);
		});
		froms = newFroms;
	}
	return froms.filter(from => from === 0).length;
};
console.log(
	numWays(
		5,
		[
			[0, 2],
			[2, 1],
			[3, 4],
			[2, 3],
			[1, 4],
			[2, 0],
			[0, 4]
		],
		3
	)
);
console.log(
	numWays(
		3,
		[
			[0, 2],
			[2, 1]
		],
		2
	)
);

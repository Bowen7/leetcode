var minTime = function(n, edges, hasApple) {
	const map = [];
	for (let i = 0; i < n; i++) {
		map.push([]);
	}
	edges.forEach(edge => {
		map[edge[0]].push(edge[1]);
	});
	const process = root => {
		const child = map[root];
		if (child.length === 0) {
			return 0;
		} else {
			let sum = 0;
			child.forEach(item => {
				const cost = process(item);
				if (hasApple[item] || cost > 0) {
					sum += 2;
				}
				sum += cost;
			});
			return sum;
		}
	};
	return process(0);
};
console.log(
	minTime(
		7,
		[
			[0, 1],
			[0, 2],
			[1, 4],
			[1, 5],
			[2, 3],
			[2, 6]
		],
		[false, false, true, false, true, true, false]
	)
);
console.log(
	minTime(
		7,
		[
			[0, 1],
			[0, 2],
			[1, 4],
			[1, 5],
			[2, 3],
			[2, 6]
		],
		[false, false, true, false, false, true, false]
	)
);
console.log(
	minTime(
		7,
		[
			[0, 1],
			[0, 2],
			[1, 4],
			[1, 5],
			[2, 3],
			[2, 6]
		],
		[false, false, false, false, false, false, false]
	)
);

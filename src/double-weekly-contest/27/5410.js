var checkIfPrerequisite = function (n, prerequisites, queries) {
	const hash = {};
	const classes = Array(n)
		.fill(0)
		.map(() => ({}));
	prerequisites.forEach((item) => {
		// 先修
		const [a, b] = item;
		classes[a][b] = true;
	});

	const find = (a) => {
		const item = classes[a];
		if (hash[a] === true) {
			return item;
		}
		let re = { ...item };
		for (let key in item) {
			re = { ...re, ...find(key) };
		}
		hash[a] = true;
		classes[a] = re;
		return re;
	};
	return queries.map(([a, b]) => {
		const re = find(a);
		return !!re[b];
	});
};
console.log(
	checkIfPrerequisite(
		2,
		[[1, 0]],
		[
			[0, 1],
			[1, 0],
		]
	)
);
console.log(
	checkIfPrerequisite(
		2,
		[],
		[
			[0, 1],
			[1, 0],
		]
	)
);
console.log(
	checkIfPrerequisite(
		3,
		[
			[1, 2],
			[1, 0],
			[2, 0],
		],
		[
			[1, 0],
			[1, 2],
		]
	)
);
console.log(
	checkIfPrerequisite(
		3,
		[
			[1, 0],
			[2, 0],
		],
		[
			[0, 1],
			[2, 0],
		]
	)
);

console.log(
	checkIfPrerequisite(
		5,
		[
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
		],
		[
			[0, 4],
			[4, 0],
			[1, 3],
			[3, 0],
		]
	)
);

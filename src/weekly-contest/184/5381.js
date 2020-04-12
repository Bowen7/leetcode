var processQueries = function(queries, m) {
	const P = [];
	const result = [];
	for (let i = 1; i <= m; i++) {
		P.push(i);
	}
	for (let i = 0; i < queries.length; i++) {
		const search = queries[i];
		let searchI;
		for (let j = 0; j < P.length; j++) {
			if (search === P[j]) {
				searchI = j;
				break;
			}
		}
		result.push(searchI);
		P.splice(searchI, 1);
		P.unshift(search);
	}
	return result;
};
console.log(processQueries([4, 1, 2, 2], 4));

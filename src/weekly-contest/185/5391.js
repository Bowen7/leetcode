var numOfArrays = function(n, m, k) {
	const mod = 1000000007;
	const dp = [];
	for (let i = 0; i <= n; i++) {
		const tmp1 = [];
		for (let j = 0; j <= m; j++) {
			const tmp2 = [];
			for (let z = 0; z <= k; z++) {
				tmp2.push(0);
			}
			tmp1.push(tmp2);
		}
		dp.push(tmp1);
	}
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			for (let z = 1; z <= k; z++) {
				if (i === 1 && z === 1) {
					dp[i][j][z] = 1;
				} else if (j === 1) {
					if (z === 1) {
						dp[i][j][z] = 1;
					} else {
						dp[i][j][z] = 0;
					}
				} else {
					let sum = 0;
					for (let _j = 1; _j < j; _j++) {
						sum += dp[i - 1][_j][z - 1];
					}
					sum += j * dp[i - 1][j][z];
					dp[i][j][z] = sum % mod;
				}
			}
		}
	}
	let result = 0;
	dp[n].forEach(item => {
		result += item[k];
		result = result % mod;
	});
	return result;
};
console.log(numOfArrays(2, 3, 1));
console.log(numOfArrays(5, 2, 3));
console.log(numOfArrays(9, 1, 1));
console.log(numOfArrays(50, 100, 25));
console.log(numOfArrays(37, 17, 7));

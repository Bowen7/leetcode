var isMatch = function(s, p) {
	dp = [];
	for (let i = 0; i <= s.length; i++) {
		dp.push([]);
		for (let j = 0; j <= p.length; j++) {
			if (j === 0) {
				dp[i][j] = i === 0;
			} else {
				if (p[j - 1] === "*") {
					dp[i][j] = dp[i][j - 2];
					if (i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === ".")) {
						dp[i][j] |= dp[i - 1][j];
					}
				} else {
					if (i !== 0 && (p[j - 1] === "." || p[j - 1] === s[i - 1])) {
						dp[i][j] = dp[i - 1][j - 1];
					}
				}
				dp[i][j] = dp[i][j] || false;
			}
		}
	}
	return dp[s.length][p.length];
};
// console.log(isMatch("a", "a"));
console.log(isMatch("mississippi", "mis*is*p*."));

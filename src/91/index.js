var numDecodings = function(s) {
	if (s.length === 0) {
		return 0;
	}
	if (s[0] === "0") {
		return 0;
	}
	const dp = [1];
	for (let i = 1; i < s.length; i++) {
		// 只能与s[i-1]一起
		if (s[i] === "0") {
			if (s[i - 1] !== "1" && s[i - 1] !== "2") {
				return 0;
			}
			dp[i] = i - 2 >= 0 ? dp[i - 2] : 1;
		} else {
			const sum = s[i - 1] + s[i];
			if (sum < "27" && s[i - 1] !== "0") {
				dp[i] = dp[i - 1] + (i - 2 >= 0 ? dp[i - 2] : 1);
			} else {
				dp[i] = dp[i - 1];
			}
		}
	}
	return dp[s.length - 1];
};
console.log(numDecodings("12"));
console.log(numDecodings("100"));
console.log(numDecodings("101"));
console.log(numDecodings("110"));

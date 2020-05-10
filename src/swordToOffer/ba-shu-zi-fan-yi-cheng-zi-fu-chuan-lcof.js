var translateNum = function(num) {
	const dp = [];
	num += "";
	for (let i = 0; i < num.length; i++) {
		if (i === 0) {
			dp[i] = 1;
			continue;
		}
		dp[i] = dp[i - 1];
		// 合并的情况
		if (num[i - 1] === "1") {
			dp[i] += i - 2 >= 0 ? dp[i - 2] : 1;
		} else if (num[i - 1] === "2" && num[i] <= "5") {
			dp[i] += i - 2 >= 0 ? dp[i - 2] : 1;
		}
	}
	return dp[num.length - 1];
};
console.log(translateNum(12258));

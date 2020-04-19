var numberOfArrays = function(s, k) {
	s += "";
	if (s[0] > k) {
		return 0;
	}
	const mod = Math.pow(10, 9) + 7;
	const dp = [1];
	for (let i = 1; i < s.length; i++) {
		let sum = 0;
		if (s[i] !== "0" && s[i] < k) {
			sum += dp[i - 1];
		}
		for (let j = i - 1; j >= 0; j--) {
			const num = s.slice(j, i + 1);
			if (i - j > 11) {
				break;
			}
			if (num == 0 || num != +num + "") {
				continue;
			}
			if (num <= k) {
				if (j === 0) {
					sum++;
				} else {
					sum += dp[j - 1];
				}
			} else {
				break;
			}
		}
		dp[i] = sum % mod;
	}
	return dp[s.length - 1];
};
console.log(numberOfArrays(1000, 10000));
console.log(numberOfArrays(1000, 10));
console.log(numberOfArrays(1317, 2000));
console.log(numberOfArrays(1234567890, 90));

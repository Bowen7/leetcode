var lengthOfLongestSubstring = function(s) {
	const hash = {};
	let start = 0;
	let max = 0;
	for (let i = 0; i < s.length; i++) {
		if (
			Object.prototype.hasOwnProperty.call(hash, s[i]) &&
			hash[s[i]] >= start
		) {
			start = hash[s[i]] + 1;
			hash[s[i]] = i;
		} else {
			hash[s[i]] = i;
		}
		max = Math.max(i - start + 1, max);
	}
	return max;
};
console.log(lengthOfLongestSubstring("abba"));

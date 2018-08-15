var longestCommonPrefix = function(strs) {
	let index = -1;
	if (strs.length === 0 || strs.length === 1) {
		return strs.length === 0 ? "" : strs[0];
	}
	while (true) {
		for (let i = 1; i < strs.length; i++) {
			if (
				strs[i][index + 1] !== strs[i - 1][index + 1] ||
				strs[i].length <= index + 1
			) {
				return index === -1 ? "" : strs[i].slice(0, index + 1);
			}
		}
		index++;
	}
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["c", "c"]));

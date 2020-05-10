var permutation = function(s) {
	const hash = {};
	let length = s.length;
	const process = (arr, n) => {
		const result = [];
		if (n === 1) {
			for (let i = 0; i < s.length; i++) {
				if (!hash[i]) {
					return arr.map(item => item + s[i]);
				}
			}
		} else {
			for (let i = 0; i < s.length; i++) {
				if (!hash[i]) {
					hash[i] = true;
					result.push(...process(arr, n - 1).map(item => item + s[i]));
					hash[i] = false;
				}
			}
		}
		return result;
	};
	const result = process([""], s.length);
	return [...new Set(result)];
};
console.log(permutation("abc"));
console.log(permutation("aac"));

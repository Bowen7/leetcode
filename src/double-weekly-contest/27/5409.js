var hasAllCodes = function (s, k) {
	const hash = {};
	for (let i = 0; i <= s.length - k; i++) {
		const item = s.slice(i, i + k);
		hash[item] = true;
	}
	const length = Object.keys(hash).length;
	const _length = Math.pow(2, k);
	return length === _length;
};
console.log(hasAllCodes("00110110", 2));
console.log(hasAllCodes("00110", 2));
console.log(hasAllCodes("0110", 1));
console.log(hasAllCodes("0110", 2));
console.log(hasAllCodes("0000000001011100", 4));

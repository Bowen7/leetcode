var maxScore = function(s) {
	let one = [];
	let zero = [];
	let sum = 0;
	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === "0") {
			sum++;
		}
		zero[i] = sum;
	}
	sum = 0;
	for (let i = s.length - 1; i >= 1; i--) {
		if (s[i] === "1") {
			sum++;
		}
		one[i - 1] = sum;
	}
	let max = 0;
	console.log(one, zero);
	for (let i = 0; i < s.length; i++) {
		sum = one[i] + zero[i];
		max = sum > max ? sum : max;
	}
	return max;
};
console.log(maxScore("011101"));
console.log(maxScore("00111"));
console.log(maxScore("1111"));

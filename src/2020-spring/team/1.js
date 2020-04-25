var expectNumber = function(scores) {
	scores = scores.sort((item1, item2) => {
		return item1 - item2;
	});
	let last;
	let result = 0;
	for (let i = 0; i < scores.length; i++) {
		if (i === 0) {
			last = scores[i];
			result++;
		} else {
			if (scores[i] !== last) {
				last = scores[i];
				result++;
			}
		}
	}
	return result;
};
console.log(expectNumber([1, 2, 3]));
console.log(expectNumber([1, 1]));
console.log(expectNumber([1, 2, 2, 4]));
console.log(expectNumber([1]));

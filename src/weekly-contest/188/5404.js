var buildArray = function(target, n) {
	const result = [];
	let last = target[target.length - 1];
	let index = 0;
	for (let i = 1; i <= last; i++) {
		if (target[index] === i) {
			result.push("Push");
			index++;
		} else {
			result.push("Push");
			result.push("Pop");
		}
	}
	return result;
};
console.log(buildArray([1, 3], 3));
console.log(buildArray([1, 2, 3], 3));
console.log(buildArray([1, 2], 4));
console.log(buildArray([2, 3, 4], 4));

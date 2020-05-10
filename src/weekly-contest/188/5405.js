var countTriplets = function(arr) {
	let result = 0;
	for (let i = 0; i < arr.length - 1; i++) {
		let tmp = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			tmp = arr[j] ^ tmp;
			if (tmp === 0) {
				result += j - i;
			}
		}
	}
	return result;
};
console.log(countTriplets([2, 3, 1, 6, 7]));
console.log(countTriplets([1, 1, 1, 1, 1]));
console.log(countTriplets([2, 3]));
console.log(countTriplets([1, 3, 5, 7, 9]));

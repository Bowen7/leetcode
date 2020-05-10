var minArray = function(numbers) {
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i - 1] > numbers[i]) {
			return numbers[i];
		}
	}
	return numbers[0];
};
console.log(minArray([3, 1]));

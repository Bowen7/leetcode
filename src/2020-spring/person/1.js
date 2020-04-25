var minCount = function(coins) {
	const countMap = [0, 1];
	for (let i = 2; i < 11; i++) {
		countMap[i] = Math.min(countMap[i - 1] + 1, countMap[i - 2] + 1);
	}
	let sum = 0;
	coins.forEach(coin => {
		sum += countMap[coin];
	});
	return sum;
};
console.log(minCount([2, 3, 10]));

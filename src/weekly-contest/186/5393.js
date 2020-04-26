var maxScore = function(cardPoints, k) {
	const left = [0];
	const right = [0];
	let sum = 0;
	for (let i = 1; i < cardPoints.length + 1; i++) {
		sum += cardPoints[i - 1];
		left[i] = sum;
	}
	sum = 0;
	for (let i = cardPoints.length; i > 0; i--) {
		sum += cardPoints[i - 1];
		right[cardPoints.length - i + 1] = sum;
	}
	let max = 0;
	for (let i = 0; i <= k; i++) {
		sum = left[i] + right[k - i];
		max = sum > max ? sum : max;
	}
	return max;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));

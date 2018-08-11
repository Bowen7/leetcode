/**
 * 左右两次遍历
 */
var candy = function(ratings) {
	var arr = ratings.map(() => {
		return 1;
	});
	for (var i = 1; i < ratings.length; i++) {
		ratings[i] > ratings[i - 1] ? (arr[i] = arr[i - 1] + 1) : null;
	}
	for (var i = ratings.length - 2; i >= 0; i--) {
		ratings[i] > ratings[i + 1]
			? (arr[i] = Math.max(arr[i + 1] + 1, arr[i]))
			: null;
	}
	return arr.reduce((sum, item) => {
		return sum + item;
	});
};
console.log(candy([1, 0, 2]));
console.log(candy([1, 3, 4, 5, 2]));

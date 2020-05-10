var maxProfitAssignment = function(difficulty, profit, worker) {
	const arr = difficulty.map((item, index) => ({
		diff: item,
		profit: profit[index]
	}));
	arr.sort((a, b) => {
		return a.diff - b.diff;
	});
	worker.sort((a, b) => {
		return a - b;
	});
	return worker.reduce(
		({ start, sum }, item) => {
			let max = 0;
			for (let i = start; i < arr.length; i++) {
				if (arr[i].diff > item) {
					break;
				}
				if (arr[i].profit > max) {
					max = arr[i].profit;
					start = i;
				}
			}
			return { sum: sum + max, start };
		},
		{ start: 0, sum: 0 }
	).sum;
};
// console.log(
// 	maxProfitAssignment([2, 4, 6, 8, 10], [10, 20, 30, 40, 50], [4, 5, 6, 7])
// );
console.log(maxProfitAssignment([13, 37, 58], [4, 90, 96], [34, 73, 45]));

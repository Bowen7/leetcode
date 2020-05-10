var numberWays = function(hats) {
	let sum = 0;
	const hash = {};
	const dp = [];
	const mod = Math.pow(10, 9) + 7;
	for (let i = 0; i < hats.length; i++) {
		dp.push([]);
	}
	console.log(dp);
	return dp[hats.length - 1];
};
// console.log(numberWays([[3, 4], [4, 5], [5]]));
// console.log(
// 	numberWays([
// 		[3, 5, 1],
// 		[3, 5]
// 	])
// );
console.log(
	numberWays([
		[1, 2, 3, 4],
		[1, 2, 3, 4]
	])
);
// console.log(
// 	numberWays([
// 		[1, 2, 3],
// 		[2, 3, 5, 6],
// 		[1, 3, 7, 9],
// 		[1, 8, 9],
// 		[2, 5, 7]
// 	])
// );

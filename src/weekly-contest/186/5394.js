var findDiagonalOrder = function(nums) {
	let y = nums.length;
	let x = 0;
	nums.forEach(num => {
		x = num.length > x ? num.length : x;
	});
	const result = [];
	for (let i = 0; i < y; i++) {
		let _i = i;
		let _j = 0;
		while (_i >= 0 && _j < x) {
			if (nums[_i][_j]) {
				result.push(nums[_i][_j]);
			}
			_i--;
			_j++;
		}
	}
	for (let j = 1; j < x; j++) {
		let _i = y - 1;
		let _j = j;
		while (_i >= 0 && _j < x) {
			if (nums[_i][_j]) {
				result.push(nums[_i][_j]);
			}
			_i--;
			_j++;
		}
	}
	return result;
};
// console.log(
// 	findDiagonalOrder([
// 		[1, 2, 3],
// 		[4, 5, 6],
// 		[7, 8, 9]
// 	])
// );
console.log(findDiagonalOrder([[1, 2, 3], [4], [5, 6, 7], [8], [9, 10, 11]]));

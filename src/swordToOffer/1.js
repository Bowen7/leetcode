//在一个二维数组中（每个一维数组的长度相同），
//每一行都按照从左到右递增的顺序排序，
//每一列都按照从上到下递增的顺序排序。
//请完成一个函数，输入这样的一个二维数组和一个整数，
//判断数组中是否含有该整数。
/**
 * 思路：从左下角开始遍历
 * array[i][j]<target j++
 * array[i][j]>target i--
 */
function Find(target, array) {
	// write code here
	let i = array.length - 1;
	let j = 0;
	while (i >= 0 && j < array.length) {
		if (array[i][j] === target) {
			return true;
		} else if (array[i][j] < target) {
			j++;
		} else {
			i--;
		}
	}
	return false;
}
console.log(Find(1, [[1, 2], [2, 3]]));

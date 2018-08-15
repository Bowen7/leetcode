//输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
//打印能拼接出的所有数字中最小的一个。
//例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
/**
 *
 * @param {*} numbers
 * 头条面试的时候做到了
 * 对numbers进行排序，排序规则根据ab和ba组合的数字大小
 */
function PrintMinNumber(numbers) {
	// write code here
	numbers.sort((a, b) => {
		return a + "" + b - (b + "" + a);
	});
	return numbers.join("");
}
console.log(PrintMinNumber([3, 5, 1, 4, 2]));
console.log(PrintMinNumber([3, 32, 321]));

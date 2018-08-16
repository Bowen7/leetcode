//数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
//例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
//由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。
//如果不存在则输出0。
function MoreThanHalfNum_Solution(numbers) {
	// write code here
	if (numbers.length === 0) {
		return 0;
	}
	let times = 1;
	let tmp = numbers[0];
	for (let i = 1; i < numbers.length; i++) {
		if (times === 0) {
			times = 1;
			tmp = numbers[i];
			continue;
		}
		numbers[i] === tmp ? times++ : times--;
	}
	let num = 0;
	for (let i = 0; i < numbers.length; i++) {
		numbers[i] === tmp && num++;
	}
	if (num > numbers.length / 2) {
		return tmp;
	}
	return 0;
}
console.log(MoreThanHalfNum_Solution([1, 2, 3, 2, 2, 2, 5, 4, 2]));

//把只包含质因子2、3和5的数称作丑数（Ugly Number）。
//例如6、8都是丑数，但14不是，因为它包含质因子7。
//习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

function GetUglyNumber_Solution(index) {
	// write code here
	if (index === 0) {
		return 0;
	}
	let n2 = 0;
	let n3 = 0;
	let n5 = 0;
	let arr = [1];
	for (let i = 1; i < index; i++) {
		arr[i] = Math.min(arr[n2] * 2, arr[n3] * 3, arr[n5] * 5);
		arr[i] === arr[n2] * 2 && n2++;
		arr[i] === arr[n3] * 3 && n3++;
		arr[i] === arr[n5] * 5 && n5++;
	}
	return arr[index - 1];
}
console.log(GetUglyNumber_Solution(7));

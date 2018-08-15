var intToRoman = function(num) {
	const roman = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];
	const arr = (num + "").split("");
	const length = arr.length;
	let re = "";
	arr.forEach((item, index) => {
		const i = length - index - 1;
		if (item < 4) {
			re += roman[i][0].repeat(item);
		} else if (item == 4) {
			re += roman[i][0] + roman[i][1];
		} else if (item < 9) {
			let n = item - 5;
			re += roman[i][1] + roman[i][0].repeat(n);
		} else {
			re += roman[i][0] + roman[i + 1][0];
		}
	});
	return re;
};
console.log(intToRoman(58));
console.log(intToRoman(1994));

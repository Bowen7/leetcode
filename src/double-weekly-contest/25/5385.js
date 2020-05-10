var maxDiff = function(num) {
	num = num + "";
	let maxN;
	let minN;
	for (let i = 0; i < num.length; i++) {
		if (num[i] !== "9") {
			maxN = num[i];
			break;
		}
	}
	const reg1 = new RegExp(maxN, "g");
	const max = maxN === undefined ? num : num.replace(reg1, "9");

	let flag = false;
	for (let i = 0; i < num.length; i++) {
		if (
			(i === 0 && num[i] !== "1") ||
			(i !== 0 && num[i] !== "0" && num[i] !== "1")
		) {
			if (i === 0) {
				flag = true;
			}
			minN = num[i];
			break;
		}
	}
	const reg2 = new RegExp(minN, "g");
	const min = minN === undefined ? num : num.replace(reg2, flag ? "1" : "0");
	return +max - +min;
};
console.log(maxDiff(555));
console.log(maxDiff(9));
console.log(maxDiff(123456));
console.log(maxDiff(10000));
console.log(maxDiff(1101057));

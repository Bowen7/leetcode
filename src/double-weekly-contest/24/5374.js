var getHappyString = function(n, k) {
	let sum = Math.pow(2, n - 1) * 3;
	if (sum < k) {
		return "";
	}
	const hash = {
		a: "bc",
		b: "ac",
		c: "ab"
	};
	let last;
	let re = "";
	if (k <= sum / 3) {
		last = "a";
	} else if (k <= (sum / 3) * 2) {
		last = "b";
		k = k - sum / 3;
	} else {
		last = "c";
		k = k - (sum / 3) * 2;
	}
	sum = sum / 3;
	re += last;
	n--;
	while (n--) {
		if (k <= sum / 2) {
			last = hash[last][0];
		} else {
			last = hash[last][1];
			k = k - sum / 2;
		}
		sum = sum / 2;
		re += last;
	}
	return re;
};
console.log(getHappyString(1, 3));
console.log(getHappyString(1, 4));
console.log(getHappyString(3, 9));
console.log(getHappyString(2, 7));
console.log(getHappyString(10, 100));

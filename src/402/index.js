var removeKdigits = function(num, k) {
	var arr = num.split("");
	while (true) {
		if (k === 0) {
			break;
		}
		var flag = false;
		if (arr[1] === 0) {
			arr.splice(0, 1);
			k--;
			flag = true;
		}
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] < arr[i]) {
				arr.splice(i, 1);
				flag = true;
				k--;
				break;
			}
		}
		if (!flag) {
			break;
		}
	}
	arr = arr.slice(0, arr.length - k);
	var start = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == 0) {
			start++;
		} else {
			break;
		}
	}
	arr = arr.slice(start);
	var re = arr.join("");
	re === "" ? (re = "0") : null;
	return re;
};
console.log(removeKdigits("1432219", "3"));
console.log(removeKdigits("10200", "1"));
console.log(removeKdigits("10", "2"));

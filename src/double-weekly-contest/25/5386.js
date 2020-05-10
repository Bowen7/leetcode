var checkIfCanBreak = function(s1, s2) {
	const arr1 = [];
	const arr2 = [];
	for (let i = 0; i < 26; i++) {
		arr1.push(0);
		arr2.push(0);
	}
	for (let i = 0; i < s1.length; i++) {
		const num1 = s1.charCodeAt(i) - "a".charCodeAt();
		const num2 = s2.charCodeAt(i) - "a".charCodeAt();
		arr1[num1]++;
		arr2[num2]++;
	}
	// true 第一个大
	let flag;
	let count = 0;
	for (let i = 0; i < 26; i++) {
		if (flag !== undefined) {
			if (flag) {
				count -= arr1[i] - arr2[i];
			} else {
				count -= arr2[i] - arr1[i];
			}
			if (count < 0) {
				return false;
			}
		} else {
			if (arr1[i] > arr2[i]) {
				flag = false;
				count = arr1[i] - arr2[i];
			} else if (arr1[i] < arr2[i]) {
				flag = true;
				count = arr2[i] - arr1[i];
			}
		}
	}
	if (count === 0) {
		return true;
	}
	return false;
};
console.log(checkIfCanBreak("abc", "xya"));
console.log(checkIfCanBreak("abe", "acd"));
console.log(checkIfCanBreak("leetcodee", "interview"));

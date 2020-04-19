var reformat = function(s) {
	let num = "";
	let str = "";
	for (let i = 0; i < s.length; i++) {
		if (+s[i] == s[i]) {
			num += s[i];
		} else {
			str += s[i];
		}
	}
	if (num.length > str.length) {
		tmp = str;
		str = num;
		num = tmp;
	}
	if (str.length - 1 > num.length) {
		return "";
	}
	let re = "";
	for (let i = 0; i < str.length; i++) {
		re += str[i];
		if (i !== num.length) {
			re += num[i];
		}
	}
	return re;
};
// console.log(reformat("a0b1c2"));
// console.log(reformat("leetcode"));
// console.log(reformat("1229857369"));
// console.log(reformat("covid2019"));
// console.log(reformat("ab123"));
console.log(reformat("a0b1c2"));

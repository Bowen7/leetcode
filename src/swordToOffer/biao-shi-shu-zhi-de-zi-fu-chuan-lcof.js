var isNumber = function(s) {
	const fsmTable = [
		{ space: 0, sign: 1, num: 2, dot: 8 },
		{ num: 2, dot: 8 },
		{ num: 2, dot: 3, e: 5, space: 7 },
		{ num: 4, space: 7, e: 5 },
		{ num: 4, e: 5, space: 7 },
		{ num: 6 },
		{ num: 6, space: 7 },
		{ space: 7 },
		{
			num: 3
		}
	];
	let state = 0;
	for (let i = 0; i < s.length; i++) {
		let cur;
		if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
			cur = "num";
		} else if (s[i] === " ") {
			cur = "space";
		} else if (s[i] === "e" || s[i] === "E") {
			cur = "e";
		} else if (s[i] === "+" || s[i] === "-") {
			cur = "sign";
		} else if (s[i] === ".") {
			cur = "dot";
		} else {
			return false;
		}
		if (Object.prototype.hasOwnProperty.call(fsmTable[state], cur)) {
			state = fsmTable[state][cur];
		} else {
			return false;
		}
	}
	if ([2, 3, 4, 6, 7].includes(state)) {
		return true;
	}
	return false;
};
// console.log(isNumber("+100"));
// console.log(isNumber("5e2"));
// console.log(isNumber("-123"));
// console.log(isNumber("3.1416"));
// console.log(isNumber("0123"));
// console.log(isNumber("12e"));
// console.log(isNumber("1a3.14"));
// console.log(isNumber("1.2.3"));
// console.log(isNumber("+-5"));
// console.log(isNumber("-1E-16"));
// console.log(isNumber("12e+5.4"));
console.log(isNumber("3."));
console.log(isNumber("."));
console.log(isNumber("46.e3"));

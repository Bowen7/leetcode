var letterCombinations = function(digits) {
	const getCharByNum = num => {
		switch (num) {
			case "2":
				return ["a", "b", "c"];
			case "3":
				return ["d", "e", "f"];
			case "4":
				return ["g", "h", "i"];
			case "5":
				return ["j", "k", "l"];
			case "6":
				return ["m", "n", "o"];
			case "7":
				return ["p", "q", "r", "s"];
			case "8":
				return ["t", "u", "v"];
			case "9":
				return ["w", "x", "y", "z"];
		}
	};
	digits = digits.split("");
	const result = digits.reduce((res, item) => {
		if (res.length === 0) {
			return getCharByNum(item);
		}
		let arr = [];
		let chars = getCharByNum(item);
		res.forEach(re => {
			chars.forEach(char => {
				arr.push(re + char);
			});
		});
		return arr;
	}, []);
	return result;
};

console.log(letterCombinations("233"));

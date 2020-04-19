var minNumberOfFrogs = function(croakOfFrogs) {
	const hash = {
		r: 0,
		o: 0,
		a: 0,
		k: 0
	};
	let max = 0;
	let sum = 0;
	for (let i = 0; i < croakOfFrogs.length; i++) {
		const cur = croakOfFrogs[i];
		if (cur === "c") {
			hash.r++;
			sum++;
			max = sum > max ? sum : max;
		} else if (cur === "r") {
			if (hash.r > 0) {
				hash.r--;
				hash.o++;
			} else {
				return -1;
			}
		} else if (cur === "o") {
			if (hash.o > 0) {
				hash.o--;
				hash.k++;
			} else {
				return -1;
			}
		} else if (cur === "k") {
			if (hash.k > 0) {
				hash.k--;
				sum--;
			} else {
				return -1;
			}
		}
	}
	for (let key in hash) {
		if (hash[key] !== 0) {
			return -1;
		}
	}
	return max;
};
console.log(minNumberOfFrogs("croakcroak"));
console.log(minNumberOfFrogs("crcoakroak"));
console.log(minNumberOfFrogs("croakcrook"));
console.log(minNumberOfFrogs("croakcroa"));

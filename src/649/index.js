var predictPartyVictory = function(senate) {
	let sum = 0;
	while (true) {
		let r = 0;
		let d = 0;
		let tmp = "";
		for (let i = 0; i < senate.length; i++) {
			if (senate[i] === "R") {
				r++;
				if (sum >= 0) {
					tmp += "R";
				}
				sum++;
			}
			if (senate[i] === "D") {
				d++;
				if (sum <= 0) {
					tmp += "D";
				}
				sum--;
			}
		}
		if (r === 0) {
			return "Dire";
		}
		if (d === 0) {
			return "Radiant";
		}
		senate = tmp;
	}
};
console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("DRRD"));

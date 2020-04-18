// 只想着能过就行，未优化逻辑
var getTriggerTime = function(increase, requirements) {
	const cTimeMap = [0];
	const rTimeMap = [0];
	const hTimeMap = [0];
	let lastC = 0;
	let lastR = 0;
	let lastH = 0;
	increase.forEach((item, index) => {
		const c = item[0];
		const r = item[1];
		const h = item[2];
		if (lastC < 100000) {
			for (let i = lastC + 1; i <= lastC + c; i++) {
				cTimeMap[i] = index + 1;
			}
			lastC += c;
		}
		if (lastR < 100000) {
			for (let i = lastR + 1; i <= lastR + r; i++) {
				rTimeMap[i] = index + 1;
			}
			lastR += r;
		}
		if (lastH < 100000) {
			for (let i = lastH + 1; i <= lastH + h; i++) {
				hTimeMap[i] = index + 1;
			}
			lastH += h;
		}
	});
	return requirements.map(requirement => {
		let re = [];
		const c = requirement[0];
		const r = requirement[1];
		const h = requirement[2];
		if (c > cTimeMap.length - 1) {
			re.push(-1);
		} else {
			re.push(cTimeMap[c]);
		}
		if (r > rTimeMap.length - 1) {
			re.push(-1);
		} else {
			re.push(rTimeMap[r]);
		}
		if (h > hTimeMap.length - 1) {
			re.push(-1);
		} else {
			re.push(hTimeMap[h]);
		}
		if (Math.min(...re) === -1) {
			return -1;
		}
		return Math.max(...re);
	});
};
console.log(
	getTriggerTime(
		[
			[2, 8, 4],
			[2, 5, 0],
			[10, 9, 8]
		],
		[
			[2, 11, 3],
			[15, 10, 7],
			[9, 17, 12],
			[8, 1, 14]
		]
	)
);
console.log(
	getTriggerTime(
		[
			[0, 4, 5],
			[4, 8, 8],
			[8, 6, 1],
			[10, 10, 0]
		],
		[
			[12, 11, 16],
			[20, 2, 6],
			[9, 2, 6],
			[10, 18, 3],
			[8, 14, 9]
		]
	)
);
console.log(getTriggerTime([[1, 1, 1]], [[0, 0, 0]]));

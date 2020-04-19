var displayTable = function(orders) {
	const tables = {};
	orders.forEach(order => {
		tables[order[1]] = true;
	});
	const sortT = Object.keys(tables).sort((item1, item2) => {
		return +item1 - +item2;
	});
	orders.sort((item1, item2) => {
		if (item1[2] !== item2[2]) {
			return item1[2] > item2[2] ? 1 : -1;
		} else {
			return +item1[1] - +item2[1];
		}
	});
	const result = [["Table"]];
	const tPos = {};
	sortT.forEach((t, index) => {
		result.push([t]);
		tPos[t] = index + 1;
	});
	let lastF = "";
	let curFoodIndex = 0;
	orders.forEach(order => {
		if (lastF !== order[2]) {
			curFoodIndex++;
			result.forEach(item => {
				if (item[0] === "Table") {
					lastF = order[2];
					item.push(order[2]);
				} else {
					item.push(0);
				}
			});
		}
		const t = order[1];
		const tI = tPos[t];
		result[tI][curFoodIndex]++;
	});
	return result.map(item1 => {
		return item1.map(item2 => {
			return item2 + "";
		});
	});
};

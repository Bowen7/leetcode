var destCity = function(paths) {
	const fromHash = {};
	const from = paths.forEach(element => {
		fromHash[element[0]] = true;
	});
	const to = paths.filter(path => {
		return !fromHash[path[1]];
	});
	return to[0][1];
};
console.log(
	destCity([
		["London", "New York"],
		["New York", "Lima"],
		["Lima", "Sao Paulo"]
	])
);
console.log(
	destCity([
		["London", "New York"],
		["New York", "Lima"],
		["Lima", "Sao Paulo"]
	])
);
console.log(
	destCity([
		["B", "C"],
		["D", "B"],
		["C", "A"]
	])
);

var replaceSpace = function(s) {
	let arr = s.split("");
	arr = arr.map(item => (item === " " ? "%20" : item));
	return arr.join("");
};

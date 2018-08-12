var findContentChildren = function(g, s) {
	g.sort((a, b) => {
		return a - b;
	});
	s.sort((a, b) => {
		return a - b;
	});
	let num = 0;
	for (let i = 0; i < g.length; i++) {
		for (let j = 0; j < s.length; j++) {
			if (s[j] >= g[i]) {
				num++;
				s.splice(j, 1);
				break;
			}
		}
	}
	return num;
};
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));

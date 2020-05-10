var lastRemaining = function(n, m) {
	let pos = 0;
	for (let i = 2; i <= n; i++) {
		pos = (pos + m) % i;
	}
	return pos;
};

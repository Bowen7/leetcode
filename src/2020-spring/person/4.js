var minJump = function(jump) {
	const bfs = [0];
	const stack = [];
	const final = jump.length - 1;
	let re = 0;
	let last = 1;
	const hash = {};
	while (bfs.length > 0) {
		const length = bfs.length;
		for (let i = 0; i < length; i++) {
			const cur = bfs.shift();
			if (hash[cur]) {
				continue;
			} else {
				hash[cur] = true;
			}
			if (cur > final) {
				return re;
			}
			// 向右
			const right = cur + jump[cur];
			bfs.push(right);
			// 向左
			for (let j = last; j < cur; j++) {
				bfs.push(j);
			}
			last = cur + 1 > last ? cur + 1 : last;
		}
		re++;
	}
};
console.log(minJump([2, 5, 1, 1, 1, 1]));
console.log(
	minJump([
		6,
		3,
		3,
		9,
		8,
		2,
		3,
		5,
		6,
		5,
		7,
		10,
		4,
		2,
		5,
		2,
		5,
		10,
		8,
		7,
		8,
		9,
		8,
		2,
		6,
		6,
		6,
		2,
		4,
		4,
		4,
		1,
		2,
		7,
		5,
		3,
		8,
		1,
		9,
		6,
		5,
		6,
		7,
		1,
		4,
		1,
		9,
		1,
		4,
		4,
		6,
		5,
		7,
		8,
		6,
		7,
		1,
		2,
		2,
		10,
		10,
		3,
		3,
		6,
		4,
		10,
		6,
		4,
		1,
		3,
		2,
		2,
		10,
		6,
		10,
		2,
		7,
		4,
		3,
		8,
		1,
		7,
		5,
		5,
		8,
		3,
		10,
		1,
		4,
		4,
		5,
		7,
		1,
		10,
		9,
		2,
		3,
		3,
		2,
		8
	])
);

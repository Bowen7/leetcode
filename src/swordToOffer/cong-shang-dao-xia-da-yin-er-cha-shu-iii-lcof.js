var levelOrder = function(root) {
	if (root === null) {
		return [];
	}
	let left = true;
	let stack = [];
	let tmp = [root];
	const result = [];
	while (stack.length !== 0 || tmp.length !== 0) {
		if (stack.length === 0) {
			stack = tmp;
			let pushed = tmp.map(item => item.val);
			if (!left) {
				pushed = pushed.reverse();
			}
			result.push(pushed);
			tmp = [];
			left = !left;
		} else {
			const cur = stack.shift();
			!!cur.left && tmp.push(cur.left);
			!!cur.right && tmp.push(cur.right);
		}
	}
	return result;
};

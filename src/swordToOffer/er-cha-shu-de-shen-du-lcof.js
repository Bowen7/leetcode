var maxDepth = function(root) {
	if (root === null) {
		return 0;
	}
	let stack = [];
	let tmp = [root];
	let depth = 0;
	while (stack.length > 0 || tmp.length > 0) {
		if (stack.length === 0) {
			depth++;
			stack = tmp;
			tmp = [];
		}
		const cur = stack.pop();
		if (!!cur.left) {
			tmp.push(cur.left);
		}
		if (!!cur.right) {
			tmp.push(cur.right);
		}
	}
	return depth;
};

var levelOrder = function(root) {
	if (root === null) {
		return [];
	}
	let stack = [];
	let tmp = [root];
	const result = [];
	while (stack.length !== 0 || tmp.length !== 0) {
		if (stack.length === 0) {
			stack = tmp;
			result.push(tmp.map(item => item.val));
			tmp = [];
		} else {
			const cur = stack.shift();
			!!cur.left && tmp.push(cur.left);
			!!cur.right && tmp.push(cur.right);
		}
	}
	return result;
};

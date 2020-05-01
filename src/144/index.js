var preorderTraversal = function(root) {
	const result = [];
	const stack = [root];
	while (stack.length > 0) {
		const cur = stack.pop();
		if (!cur) {
			return [];
		}
		result.push(cur.val);
		if (cur.right) {
			stack.push(cur.right);
		}
		if (cur.left) {
			stack.push(cur.left);
		}
	}
	return result;
};

var postorderTraversal = function(root) {
	const stack1 = [root];
	const stack2 = [];
	const result = [];
	while (stack1.length > 0) {
		const cur = stack1.pop();
		if (cur === null) {
			continue;
		}
		stack1.push(cur.left);
		stack1.push(cur.right);
		stack2.push(cur);
	}
	while (stack2.length > 0) {
		result.push(stack2.pop().val);
	}
	return result;
};

// 递归
// var inorderTraversal = function(root) {
// 	const result = [];
// 	if (root === null) {
// 		return [];
// 	}
// 	result.push(...inorderTraversal(root.left));
// 	result.push(root.val);
// 	result.push(...inorderTraversal(root.right));
// 	return result;
// };
// 非递归
var inorderTraversal = function(root) {
	const result = [];
	const stack = [];
	let cur = root;
	while (stack.length > 0 || cur !== null) {
		while (cur !== null) {
			stack.push(cur);
			cur = cur.left;
		}
		const node = stack.pop();
		result.push(node.val);
		cur = node.right;
	}
	return result;
};

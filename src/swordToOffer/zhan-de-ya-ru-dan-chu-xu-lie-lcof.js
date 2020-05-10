var validateStackSequences = function(pushed, popped) {
	const stack = [];
	let p = 0;
	for (let i = 0; i < pushed.length; i++) {
		stack.push(pushed[i]);
		while (stack[stack.length - 1] === popped[p] && popped[p] !== undefined) {
			stack.pop();
			p++;
		}
	}
	if (p === popped.length) {
		return true;
	}
	return false;
};
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 4, 5, 1, 2]));

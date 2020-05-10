var isSubStructure = function(A, B) {
	const compare = (a, b) => {
		if (b === null) {
			return true;
		}
		if (a === null || a.val !== b.val) {
			return false;
		}
		return compare(a.left, b.left) && compare(a.right, b.right);
	};
	return (
		!!A &&
		!!B &&
		(compare(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
	);
};

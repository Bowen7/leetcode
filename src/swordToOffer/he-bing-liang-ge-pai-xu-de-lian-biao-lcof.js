var mergeTwoLists = function(l1, l2) {
	let p1 = l1;
	let p2 = l2;
	let re = {};
	let last = re;
	while (p1 && p2) {
		if (p1.val < p2.val) {
			last.next = p1;
			last = p1;
			p1 = p1.next;
		} else {
			last.next = p2;
			last = p2;
			p2 = p2.next;
		}
	}
	last.next = !!p1 ? p1 : p2;
	return re.next || l1 || l2;
};
console.log(
	JSON.stringify(
		mergeTwoLists(
			{ val: 1, next: { val: 2, next: { val: 4, next: null } } },
			{ val: 1, next: { val: 3, next: { val: 4, next: null } } }
		)
	)
);
console.log(JSON.stringify(mergeTwoLists(null, null)));

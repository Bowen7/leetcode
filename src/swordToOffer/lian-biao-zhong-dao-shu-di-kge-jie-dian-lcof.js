var getKthFromEnd = function(head, k) {
	const stack = [];
	let p1 = head;
	let p2 = head;
	while (k--) {
		p1 = p1.next;
	}
	while (p1 !== null) {
		p1 = p1.next;
		p2 = p2.next;
	}
	return p2;
};

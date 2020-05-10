var reverseList = function(head) {
	let p = head;
	let last = null;
	while (p !== null) {
		const next = p.next;
		p.next = last;
		last = p;
		p = next;
	}
	return last;
};

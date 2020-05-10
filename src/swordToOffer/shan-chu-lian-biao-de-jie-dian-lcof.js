var deleteNode = function(head, val) {
	let p = head;
	if (p.val === val) {
		return p.next;
	}
	let last = p;
	p = p.next;
	while (p !== null) {
		if (p.val === val) {
			last.next = p.next;
			break;
		}
		last = p;
		p = p.next;
	}
	return head;
};

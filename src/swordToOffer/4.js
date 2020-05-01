var reversePrint = function(head) {
	let p = head;
	const result = [];
	while (p !== null) {
		result.push(p.val);
		p = p.next;
	}
	return result.reverse();
};

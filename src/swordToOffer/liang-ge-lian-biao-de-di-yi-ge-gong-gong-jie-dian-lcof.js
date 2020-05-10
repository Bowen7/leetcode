var getIntersectionNode = function(headA, headB) {
	let pA = headA;
	let pB = headB;
	let lA = 0;
	let lB = 0;
	while (pA !== null) {
		lA++;
		pA = pA.next;
	}
	while (pB !== null) {
		lB++;
		pB = pB.next;
	}
	// 先走
	let p1;
	// 后走
	let p2;
	let diff;
	if (lA < lB) {
		diff = lB - lA;
		p1 = headB;
		p2 = headA;
	} else {
		diff = lA - lB;
		p1 = headA;
		p2 = headB;
	}
	while (diff--) {
		p1 = p1.next;
	}
	while (p1 !== null) {
		if (p1 === p2) {
			return p1;
		}
		p1 = p1.next;
		p2 = p2.next;
	}
	return null;
};

var getLeastNumbers = function(arr, k) {
	const swap = (arr, i, j) => {
		tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	};
	const partition = (arr, left, right) => {
		let p = left + 1;
		const standard = arr[left];
		for (let i = left + 1; i <= right; i++) {
			if (arr[i] < standard) {
				swap(arr, i, p);
				p++;
			}
		}
		swap(arr, p - 1, left);
		return p - 1;
	};
	let left = 0;
	let right = arr.length - 1;
	const re = [];
	while (k > 0) {
		const p = partition(arr, left, right);
		if (p - left + 1 === k) {
			re.push(...arr.slice(left, p + 1));
			k -= p - left + 1;
		} else if (p - left + 1 > k) {
			right = p;
		} else {
			re.push(...arr.slice(left, p + 1));
			k -= p - left + 1;
			left = p + 1;
		}
	}
	return re;
};
console.log(getLeastNumbers([3, 2, 1], 2));
console.log(getLeastNumbers([0, 1, 2, 1], 1));

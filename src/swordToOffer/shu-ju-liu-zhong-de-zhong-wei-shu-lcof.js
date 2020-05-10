/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
	this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
	let i = 0;
	for (i; i < this.arr.length; i++) {
		if (this.arr[i] < num) {
			break;
		}
	}
	this.arr.splice(i, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
	const length = this.arr.length;
	if (length === 0) {
		return null;
	}
	if (length % 2 === 0) {
		return (this.arr[length / 2 - 1] + this.arr[length / 2]) / 2;
	} else {
		return this.arr[Math.floor(length / 2)];
	}
};
const m = new MedianFinder();
m.addNum(1);
m.addNum(2);
console.log(m.findMedian());
m.addNum(3);
console.log(m.findMedian());

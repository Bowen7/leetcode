/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.stack1 = [];
	this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	if (this.stack1.length === 0 || this.min() >= x) {
		this.stack2.push(x);
	}
	this.stack1.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	const item = this.stack1.pop();
	if (item === this.stack2[this.stack2.length - 1]) {
		this.stack2.pop();
	}
	return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.stack1[this.stack1.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
	return this.stack2[this.stack2.length - 1];
};

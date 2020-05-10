var CQueue = function() {
	this.stack1 = [];
	this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
	this.stack1.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
	if (this.stack2.length === 0) {
		while (this.stack1.length !== 0) {
			this.stack2.push(this.stack1.pop());
		}
	}
	if (this.stack2.length === 0) {
		return -1;
	}
	return this.stack2.pop();
};

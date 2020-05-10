/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
	const store = [0, 1];
	if (n <= 1) {
		return store[n];
	}
	for (let i = 2; i <= n; i++) {
		const tmp = (store[0] + store[1]) % 1000000007;
		store.shift();
		store.push(tmp);
	}
	return store[1];
};
console.log(fib(3));

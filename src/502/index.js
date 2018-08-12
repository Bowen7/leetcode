/**
 * AC之后，发现只有我一个人用JS过了这题
 */
var findMaximizedCapital = function(k, W, Profits, Capital) {
	while (k--) {
		if (Capital.length === 0) {
			break;
		}
		let max = -1;
		let maxi;
		for (var i = 0; i < Capital.length; i++) {
			if (Capital[i] <= W) {
				Profits[i] > max ? ((max = Profits[i]), (maxi = i)) : null;
			}
		}
		if (max === -1) {
			break;
		}
		W += Profits[maxi];
		Capital.splice(maxi, 1);
		Profits.splice(maxi, 1);
	}
	return W;
};
// console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]));
console.log(findMaximizedCapital(11, 11, [1, 2, 3], [11, 12, 13]));

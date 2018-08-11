var maxProfit = function(prices) {
	if (prices.length === 1) {
		return 0;
	}
	var profit = 0;
	var isBuy = false;
	var buyIn = 0;
	for (var i = 0; i < prices.length; i++) {
		if (isBuy) {
			if (i === prices.length - 1 || prices[i + 1] < prices[i]) {
				profit += prices[i] - prices[buyIn];
				isBuy = false;
			}
		} else {
			if (i < prices.length - 1 && prices[i + 1] > prices[i]) {
				isBuy = true;
				buyIn = i;
			}
		}
	}
	return profit;
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([7, 6, 4, 3, 1]));

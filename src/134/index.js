/**
 * 思路：gas之和大于cost之和则必定可以走一圈
 * 随机起点遍历，如果遇到了油不够的情况，则走过的路线皆不能为起点
 * 因为在各个加油站出发时的油量肯定是>=当前加油站油量，而作为起点，出发时车的油量===当前加油站油量
 * 以油不够的加油站为起点
 * 要注意，如果是消耗油量大于存油量，不能作为起点
 */
var canCompleteCircuit = function(gas, cost) {
	var sum1 = gas.reduce((sum, item) => {
		return sum + item;
	});
	var sum2 = cost.reduce((sum, item) => {
		return sum + item;
	});
	if (sum1 < sum2) {
		return -1;
	}
	var pos = 0;
	var sum = 0;
	var steps = 0;
	var aim = 0;
	while (steps < gas.length) {
		sum += gas[pos];
		if (sum < cost[pos]) {
			if (steps === 0) {
				pos === gas.length - 1 ? (pos = 0) : pos++;
			}
			aim = pos;
			sum = 0;
			steps = 0;
			continue;
		}
		sum -= cost[pos];
		pos === gas.length - 1 ? (pos = 0) : pos++;
		steps++;
	}
	return aim;
};
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

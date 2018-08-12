var findMinArrowShots = function(points) {
	if (points.length === 0) {
		return 0;
	}
	points.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1];
		} else {
			return a[0] - b[0];
		}
	});
	let re = 1;
	let end = points[0][1];
	for (let i = 1; i < points.length; i++) {
		if (points[i][0] <= end) {
			end = Math.min(points[i][1], end);
		} else {
			re++;
			end = points[i][1];
		}
	}
	return re;
};
console.log(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]]));
console.log(
	findMinArrowShots([
		[4289383, 51220269],
		[81692777, 96329692],
		[57747793, 81986128],
		[19885386, 69645878],
		[44897763, 112411689],
		[65180540, 105563966],
		[4089172, 7544908],
		[15634022, 51357080],
		[69133069, 95031236],
		[59961393, 148979849],
		[661313, 34587170]
	])
);

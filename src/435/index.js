var eraseOverlapIntervals = function(intervals) {
	if (intervals.length === 0) {
		return 0;
	}
	intervals.sort((a, b) => {
		return a.start - b.start;
	});
	var end = intervals[0].end;
	var num = 0;
	for (var i = 1; i < intervals.length; i++) {
		if (intervals[i].start < end) {
			num++;
			end = intervals[i].end < end ? intervals[i].end : end;
		} else {
			end = intervals[i].end;
		}
	}
	return num;
};
console.log(
	eraseOverlapIntervals([
		{ start: 1, end: 2 },
		{ start: 1, end: 2 },
		{ start: 1, end: 2 }
	])
);

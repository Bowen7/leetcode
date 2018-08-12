var isSubsequence = function(s, t) {
	if (s === t) {
		return true;
	}
	var ss = 0;
	for (var i = 0; i < t.length; i++) {
		if (t[i] === s[ss]) {
			ss++;
		}
		if (ss === s.length) {
			return true;
		}
	}
	return false;
};
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));

/**
 * 解题思路：贪心
 * sl，pl是字符串s，p的长度
 * ss，ps是当前指针位置
 * sf，pf是记录*的位置
 * 解题关键：*一开始视为空字符串匹配，若至最后匹配失败，则增加1长度，继续匹配
 */
var isMatch = function(s, p) {
	var sl = s.length;
	var pl = p.length;
	var ss = 0;
	var ps = 0;
	var sf = -1;
	var pf = -1;
	while (ss < sl) {
		if (s[ss] === p[ps] || p[ps] === "?") {
			ss++;
			ps++;
		} else if (p[ps] === "*") {
			ps++;
			pf = ps;
			sf = ss;
		} else if (pf > 0) {
			ps = pf;
			sf++;
			ss = sf;
		} else {
			return false;
		}
	}
	if (ss != sl) {
		return false;
	}
	while (ps < pl) {
		if (p[ps] !== "*") {
			return false;
		}
		ps++;
	}
	return true;
};
console.log(isMatch("a", "aa")); //false
console.log(isMatch("aa", "*")); //true
console.log(isMatch("cb", "?a")); //false
console.log(isMatch("adceb", "*a*b")); //true
console.log(isMatch("acdcb", "a*c?b")); //false

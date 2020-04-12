// 数组中的字符串匹配

// 给你一个字符串数组 words ，数组中的每个字符串都可以看作是一个单词。请你按 任意 顺序返回 words 中是其他单词的子字符串的所有单词。
// 如果你可以删除 words[j] 最左侧和/或最右侧的若干字符得到 word[i] ，那么字符串 words[i] 就是 words[j] 的一个子字符串。

// examples:

// input: words = ["mass","as","hero","superhero"]
// output: ["as","hero"]

// input: words = ["leetcode","et","code"]
// output: ["et","code"]

var stringMatching = function(words) {
	const isChild = (str1, str2) => {
		if (str1.length > str2.length) {
			let str = str1;
			str1 = str2;
			str2 = str;
		}
		let i = 0;
		let j = 0;
		while (j < str2.length) {
			if (str1[i] === str2[j]) {
				if (i === str1.length - 1) {
					return str1;
				}
				i++;
				j++;
			} else {
				if (i !== 0) {
					i = 0;
				} else {
					j++;
				}
			}
		}
		return "";
	};
	const result = {};
	for (let i = 0; i < words.length - 1; i++) {
		for (let j = i + 1; j < words.length; j++) {
			const re = isChild(words[i], words[j]);
			if (re) {
				result[re] = true;
			}
		}
	}
	return Object.keys(result);
};
console.log(stringMatching(["leetcoder", "leetcode", "od", "hamlet", "am"]));

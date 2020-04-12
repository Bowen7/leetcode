var entityParser = function(text) {
	let result = "";
	const hash = {};
	const matchs = {
		"quot;": '"',
		"apos;": "'",
		"amp;": "&",
		"gt;": ">",
		"lt;": "<",
		"frasl;": "/"
	};
	Object.keys(matchs).forEach(match => {
		let probe = hash;
		for (let i = 0; i < match.length; i++) {
			if (!probe[match[i]]) {
				if (match[i] === ";") {
					probe[match[i]] = matchs[match];
				} else {
					probe[match[i]] = {};
				}
			}
			probe = probe[match[i]];
		}
	});
	let i = 0;
	while (i < text.length) {
		if (text[i] === "&") {
			let probe = hash;
			for (start = i + 1; start < text.length; start++) {
				if (probe[text[start]]) {
					if (typeof probe[text[start]] === "string") {
						const str = probe[text[start]];
						result += str;
						i = start + 1;
						break;
					} else {
						probe = probe[text[start]];
					}
				} else {
					result += text[i];
					i++;
					break;
				}
			}
		} else {
			result += text[i];
			i++;
		}
	}
	return result;
};
console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));

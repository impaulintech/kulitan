export default function latinizeVowels(text: any) {
	return text?.replace(/aa|oo|uu|ii/g, function (match: any) {
		const replacements: any = {
			aa: "á",
			oo: "ó",
			uu: "ú",
			ii: "í",
		};
		return replacements[match];
	});
}

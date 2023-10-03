export default function delatinizeVowels(text: any) {
	return text.replace(/[áóúí]/g, function (match: any) {
		const replacements: any = {
			á: "aa",
			ó: "oo",
			ú: "uu",
			í: "ii",
		};
		return replacements[match];
	});
}

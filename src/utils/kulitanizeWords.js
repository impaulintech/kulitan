import library from "@/shared/data/generatedCombinations.json";

const kulitanizeWords = (userInput) => {
	const libraryKeys = Object.keys(library).slice(0, 6);
	const lines = userInput.split("\n");
	const result = [];

	for (let line of lines) {
		let i = 0;
		const lineResult = [];
		line = line.replace(/\s+/g, "");
		
		while (i < line.length) {
			for (let j = 0; j <= 5; j++) {
				const currentWord = line.substring(i, i + (j + 1));
				
				if (library[libraryKeys[j]]?.includes(currentWord)) {
					lineResult.push(currentWord + " ");
					i += currentWord.length;
				} else {
					lineResult.push(line[i] + " ");
					i++;
				}
			}
		}

		result.push(lineResult.filter((item) => item !== "undefined ").join(""));
	}

	return result.join(" ");
};

export default kulitanizeWords;

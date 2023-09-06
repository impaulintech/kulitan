import library from "@/shared/data/generatedCombinations.json";

const kulitanizeWords = (userInput) => {
	let result = [];
	let i = 0;

	const getLibraryKeys = (() => {
		return Object.keys(library);
	})().slice(0, 6);
	
	while (i < userInput.length) {
		for (let j = 0; j <= 5; j++) {
			const currentWord = userInput.substring(i, i + (j + 1));

			if (library[getLibraryKeys[j]]?.includes(currentWord)) {
				result.push(currentWord);
				i += currentWord.length;
			} else {
				result.push(userInput[i]);
				i++;
			}
		}
	}

	return result.join(" ");
};

export default kulitanizeWords;

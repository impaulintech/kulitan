import library from "@/shared/data/generatedCombinations.json";
import normalizeWords from "./normalizeWords";

const kulitanizeWords = (userInput) => {
	userInput = normalizeWords(userInput, "") 
	console.log(userInput);
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
	result = result.filter((item) => item !== undefined)

	console.log(result);
	console.log(result.join());
	return result.join("<br>");
};

export default kulitanizeWords;

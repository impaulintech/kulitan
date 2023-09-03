import library from "@/lib/generatedCombinations.json";

const kulitanizeWords = (userInput) => {
	let result = [];
	let i = 0;
	let noMatchWord = "";
	let currentWord = "";

	const getLibraryKeys = (() => {
		return Object.keys(library);
	})().slice(0, 6);

	while (i < userInput.length) {
		let found = false;

		for (let j = 0; j <= 5; j++) {
			currentWord = userInput.substring(i, i + (j + 1));

			if (library[getLibraryKeys[j]]?.includes(currentWord)) {
				if (noMatchWord) {
					result[result.length - 1] += noMatchWord + currentWord;
					noMatchWord = "";
				} else {
					result.push(currentWord);
				}

				i += currentWord.length;
				found = true;
				break;
			}
		}

		if (!found) {
			noMatchWord += userInput[i];
			i++;
		}
	}

	if (noMatchWord) {
		result[result.length - 1] += noMatchWord;
		noMatchWord = "";
	}

	return result.join(" ");
};

export default kulitanizeWords;

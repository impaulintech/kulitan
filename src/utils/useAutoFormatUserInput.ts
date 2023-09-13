import { useKulitanContext } from "@/context/kulitan-context";
import kulitanizeWords from "@/utils/kulitanizeWords";
import kulitanLibrary from "@/shared/lib/kulitanLibrary.json";
import normalizeWords from "@/utils/normalizeWords";
import denormalizeWords from "@/utils/denormalizeWords";
import correctInput from "@/utils/correctInput";
import latinizeVowels from "@/utils/latinizeVowels";
import replaceMatchingKeys from "./replaceMatchingKeys";

export default function autoFormatUserInput(
	kulitanWords: any,
	setKulitanWords: any,
	isAutoCorrect: boolean,
	e?: any,
) {
	const invalidLetters = ["x", "h"];
	const autoFormattedWords: any = [];
	const normalizedWords = normalizeWords(kulitanWords).toLowerCase();
	const brokenWordsArray = normalizedWords.split("\n");
	const arrayPerBrokenWords = brokenWordsArray.map(
		(word: string, index: number) => {
			return word.split(" ");
		},
	);

	if (!isAutoCorrect) {
		return setKulitanWords(denormalizeWords(latinizeVowels(normalizedWords)));
	}

	const indexToUpdate = brokenWordsArray.length - 1;
	arrayPerBrokenWords[indexToUpdate].map(
		(wordInArray: string, subIndex: number) => {
			const replacedMatchingWords = replaceMatchingKeys(
				wordInArray,
				kulitanLibrary,
			);
console.log(replacedMatchingWords, wordInArray, normalizedWords);
console.log(brokenWordsArray);
			if (!replacedMatchingWords) { 
				if (
					e === undefined ||
					(e.key === " " && e.keyCode === 32) ||
					(e.key === "Enter" && e.keyCode === 13)
				) {
					const removedInvalidLetters = wordInArray
						.split("")
						.filter((letter) => !invalidLetters.includes(letter))
						.join("");
					const autoFormattedWord = correctInput(
						latinizeVowels(removedInvalidLetters),
					);

					if (autoFormattedWord === " ") return;
					autoFormattedWords.push(autoFormattedWord);

					brokenWordsArray[indexToUpdate] = autoFormattedWords.join(" ");
					return;
				} else {
					return;
				}
			}
			
			if (replacedMatchingWords === " ") return;
			autoFormattedWords.push(replacedMatchingWords);
			brokenWordsArray[indexToUpdate] = replacedMatchingWords;
		},
	);
	return setKulitanWords(denormalizeWords(brokenWordsArray.join("\n")));
}

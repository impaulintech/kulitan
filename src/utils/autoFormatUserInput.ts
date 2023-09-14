import { useKulitanContext } from "@/context/kulitan-context";
import kulitanizeWords from "@/utils/kulitanizeWords";
import normalizeWords from "@/utils/normalizeWords";
import denormalizeWords from "@/utils/denormalizeWords";
import correctInput from "@/utils/correctInput";
import latinizeVowels from "@/utils/latinizeVowels";
import replaceMatchingKeys from "./replaceMatchingKeys";

export default function autoFormatUserInput(
	textareaValue: any,
	kulitanWords: any,
	setKulitanWords: any,
	isAutoCorrect: boolean,
	kulitanLibrary: any,
	e?: any,
) {
	const invalidLetters = ["x", "h"];
	const normalizedWords = normalizeWords(kulitanWords).toLowerCase();
	const brokenWordsArray = normalizedWords.split("\n");
	const arrayPerBrokenWords = brokenWordsArray.map(
		(word: string, index: number) => {
			return word.split(" ");
		},
	);
	let cursorPosition: any;

	if (!isAutoCorrect) {
		return setKulitanWords(denormalizeWords(latinizeVowels(normalizedWords)));
	}

	arrayPerBrokenWords.map((arrayOfWords: string[], index: number) => {
		arrayOfWords.map((wordInArray: string, subIndex: number) => {
			if (textareaValue != wordInArray) return;

			const replacedMatchingWords = replaceMatchingKeys(
				wordInArray,
				kulitanLibrary,
			);

			if (!replacedMatchingWords) {
				const removedInvalidLetters = wordInArray
					.split("")
					.filter((letter) => !invalidLetters.includes(letter))
					.join("");
				const autoFormattedWord = correctInput(
					latinizeVowels(removedInvalidLetters),
				);
				if (autoFormattedWord === " ") return;
				const newArrayValue = arrayPerBrokenWords[index].map((item: string) => {
					return item === wordInArray ? autoFormattedWord : item;
				});
				cursorPosition = autoFormattedWord.length - textareaValue.length;
				brokenWordsArray[index] = newArrayValue.join(" ");
				return;
			}

			const newArrayValue = arrayPerBrokenWords[index].map((item: string) =>
				item === wordInArray ? replacedMatchingWords : item,
			);
			cursorPosition = replacedMatchingWords.length - textareaValue.length;
			brokenWordsArray[index] = newArrayValue.join(" ");
		});
	});

	setKulitanWords(denormalizeWords(brokenWordsArray.join("\n")));
	return cursorPosition;
}

import library from "@/shared/data/generatedCombinationsLib.json";

export default function correctInput(input: any) {
	let result = "";
	let currentIndex = 0;

	while (currentIndex < input.length) {
		let longestMatch = "";

		for (let i = input.length; i > currentIndex; i--) {
			const substring = input.substring(currentIndex, i);

			if (library.includes(substring)) {
				if (substring.length > longestMatch.length) {
					longestMatch = substring;
				}
			}
		}

		if (longestMatch.length > 0) {
			result += longestMatch + " ";
			currentIndex += longestMatch.length;
		} else {
			result += input[currentIndex];
			currentIndex++;
		}
	}

	return result.trim();
}

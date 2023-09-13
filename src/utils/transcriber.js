import library from "@/shared/data/generatedCombinations.json";

export default function transcribeAndMatch(input) {
    console.log(input);
	const words = [];

	// Define a recursive function to transcribe the input
	function transcribe(word) {
		// Base case: If the word is empty, stop recursion
		if (word.length === 0) {
			return;
		}

		// Try to find the longest matching word from the library
		for (let i = 6; i >= 1; i--) {
			const substring = word.slice(0, i);
			if (library[i].includes(substring)) {
				// Found a match, add it to the result and continue with the rest of the word
				words.push(substring);
				transcribe(word.slice(i));
				return;
			}
		}

		// If no match is found, add the first character and continue
		words.push(word[0]);
		transcribe(word.slice(1));
	}

	// Start the transcription
	transcribe(input);
console.log(words);
	// Join the transcribed words with spaces and return the result
	return words.join(" ");
}

export default function getWordAtCursor(
	textarea: HTMLTextAreaElement,
	startIndex?: any,
) {
	const { selectionStart, selectionEnd, value } = textarea;

	// Find the start of the word
	startIndex = startIndex ? selectionStart - startIndex : selectionStart;
	
	while (startIndex > 0 && !/\s|\n/.test(value[startIndex - 1])) {
		startIndex--;
	}

	// Find the end of the word
	let endIndex = selectionEnd;
	while (endIndex < value.length && !/\s|\n/.test(value[endIndex])) {
		endIndex++;
	}

	const word = value.substring(startIndex, endIndex);

	return word;
}

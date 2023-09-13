export default function getWordAtCursor(textarea: HTMLTextAreaElement) {
	const { selectionStart, selectionEnd, value } = textarea;
	const textBeforeCursor = value.substring(0, selectionEnd);
	const textAfterCursor = value.substring(selectionEnd);

	// Find the start and end indices of the word containing the cursor
	const startIndex = textBeforeCursor.lastIndexOf(" ") + 1;
	const endIndex = textAfterCursor.indexOf(" ");

	const wordStartIndex = startIndex >= 0 ? startIndex : 0;
	const wordEndIndex = endIndex >= 0 ? selectionEnd + endIndex : value.length;

	const word = value.substring(wordStartIndex, wordEndIndex);

	return word;
}

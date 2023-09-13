export default function replaceMatchingKeys(inputString: any, kulitanLibrary: any) {
	let result = inputString;
	let replaced = false;

	for (const key of Object.keys(kulitanLibrary)) {
		if (inputString.includes(key)) {
			result = result.replace(new RegExp(key, "g"), kulitanLibrary[key]);
			replaced = true; 
		}
	}

	return replaced ? result : false;
}

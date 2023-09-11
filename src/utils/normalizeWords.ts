const normalizeWords = (newValue: any, spaceValue: any = " ") => {
	return newValue
		.replace(/<br>/g, spaceValue)
		.replace(/<div>/g, "\n")
		.replace(/<\/div>/g, "");
};

export default normalizeWords;

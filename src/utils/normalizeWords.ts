const normalizeWords = (newValue: any) => {
	return newValue
		.replace(/<br>/g, " ")
		.replace(/<div>/g, "\n")
		.replace(/<\/div>/g, "");
};

export default normalizeWords;

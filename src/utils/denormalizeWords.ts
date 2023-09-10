const denormalizeWords = (newValue: any) => {
	return JSON.parse(JSON.stringify(newValue).replace(/\s/g, "<br>"))
		.split("\n")
		.map((element: any, index: number) =>
			index === 0 ? element : `<div>${element}</div>`,
		)
		.join("");
};

export default denormalizeWords;

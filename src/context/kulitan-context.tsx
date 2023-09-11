/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import latinizeVowels from "@/utils/latinizeVowels";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import kulitanizeWords from "@/utils/kulitanizeWords";
import kulitanLibrary from "@/shared/lib/kulitanLibrary.json";
import normalizeWords from "@/utils/normalizeWords";
import denormalizeWords from "@/utils/denormalizeWords";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [isAutoCorrect, setIsAutoCorrect] = useState(false);
	const [isAddActionClicked, setIsAddActionClicked] = useState(false);
	const [cursorPosition, setCursorPosition] = useState(null);
	const [kulitanWords, setKulitanWords] = useTransformedState(
		"kapampangan kulitan</div>",
	);
	const textareaRef: any = useRef(null);

	function replaceMatchingKeys(inputString: any, kulitanLibrary: any) {
		let result = inputString;

		for (const key of Object.keys(kulitanLibrary)) {
			if (inputString.includes(key)) {
				result = result.replace(new RegExp(key, "g"), kulitanLibrary[key]);
			}
		}

		return result;
	}

	function useTransformedState(initialValue: any) {
		const [transformedValue, setTransformedValue] = useState(initialValue);

		useEffect(() => {
			const normalizedWords = normalizeWords(transformedValue);

			if (!isAutoCorrect) {
				setTransformedValue(denormalizeWords(latinizeVowels(normalizedWords)));
				return;
			}
			const replacedMatchingWords = replaceMatchingKeys(
				normalizedWords,
				kulitanLibrary,
			);

			setTransformedValue(
				denormalizeWords(latinizeVowels(replacedMatchingWords)),
			);

			if (textareaRef.current && cursorPosition !== null) {
				const newPosition =
					cursorPosition + (transformedValue.length - normalizedWords.length);
				textareaRef.current.setSelectionRange(newPosition, newPosition);
			} 
		}, [initialValue, transformedValue, kulitanLibrary, isAutoCorrect]);
		console.log(transformedValue);
		return [transformedValue, setTransformedValue];
	}

	return (
		<KulitanContext.Provider
			value={{
				kulitanWords,
				setKulitanWords,
				isAddActionClicked,
				setIsAddActionClicked,
				isAutoCorrect,
				cursorPosition,
				setCursorPosition,
				setIsAutoCorrect,
				textareaRef,
			}}
		>
			{children}
		</KulitanContext.Provider>
	);
};

export function useKulitanContext() {
	const context = useContext(KulitanContext);
	if (!context) {
		throw new Error(
			"useKulitanContext must be used within a KulitanContextProvider",
		);
	}
	return context;
}

export default KulitanContextProvider;

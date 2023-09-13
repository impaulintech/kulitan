/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import normalizeWords from "@/utils/normalizeWords";
import denormalizeWords from "@/utils/denormalizeWords";
import latinizeVowels from "@/utils/latinizeVowels";
import autoFormatUserInput from "@/utils/useAutoFormatUserInput";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [isAutoCorrect, setIsAutoCorrect] = useState(false);
	const [isAddActionClicked, setIsAddActionClicked] = useState(false);
	const [cursorPosition, setCursorPosition] = useState(null);
	const [kulitanWords, setKulitanWords] = useTransformedState(
		"kapampangan",
	);
	const textareaRef: any = useRef(null);

	function useTransformedState(initialValue: any) {
		const [transformedValue, setTransformedValue] = useState(initialValue);
		const normalizedWords = normalizeWords(transformedValue);

		useEffect(() => {
			setKulitanWords(denormalizeWords(latinizeVowels(normalizedWords)).toLowerCase());
		}, []);

		useEffect(() => {
			if (!isAutoCorrect) return;
			autoFormatUserInput(kulitanWords, setKulitanWords, isAutoCorrect);
		}, [isAutoCorrect]);

		useEffect(() => {
			if (!isAutoCorrect) {
				return setKulitanWords(
					denormalizeWords(latinizeVowels(normalizedWords).toLowerCase()),
				);
			}

			// Position the cursor to the latest position
			if (textareaRef.current && cursorPosition !== null) {
				const newPosition =
					cursorPosition + (transformedValue.length - normalizedWords.length);
				textareaRef.current.setSelectionRange(newPosition, newPosition);
			}
		}, [transformedValue, isAutoCorrect]);

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

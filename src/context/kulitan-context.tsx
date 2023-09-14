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
import localKulitanLibrary from "@/shared/lib/kulitanLibrary.json";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [isAutoCorrect, setIsAutoCorrect] = useState(false);
	const [isAddActionClicked, setIsAddActionClicked] = useState(false);
	const [cursorPosition, setCursorPosition] = useState(null);
	const [textAreaRef, setTextAreaRef] = useState<any>(null);
	const [kulitanWords, setKulitanWords] = useTransformedState(
		"a tin ku pung sing sing <div>la wii wiing pam bang saa </div>",
	);
	const textareaRef: any = useRef(null);
	const [kulitanLibrary, setKulitanLibrary] =
		useState<any>(localKulitanLibrary);

	function useTransformedState(initialValue: any) {
		const [transformedValue, setTransformedValue] = useState(initialValue);
		const normalizedWords = normalizeWords(transformedValue);

		useEffect(() => {
			const path = process.env.NEXT_PUBLIC_BACKEND_URL;
			const options = {
				method: "GET",
				headers: { "Allow-Access-Origin": "*" },
			};
			
			fetch(path + "/kulitanLibrary.json", options)
				.then((response) => response.json())
				.then((response) => setKulitanLibrary(response))
				.catch((err) => setKulitanLibrary(localKulitanLibrary));

			setKulitanWords(
				denormalizeWords(latinizeVowels(normalizedWords)).toLowerCase(),
			);
		}, []);

		useEffect(() => {
			setKulitanWords(
				denormalizeWords(latinizeVowels(normalizedWords)).toLowerCase(),
			);

			// Position the cursor to the latest position
			if (cursorPosition !== null) {
				textAreaRef.current.setSelectionRange(cursorPosition, cursorPosition);
			}
		}, [transformedValue]);

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
				textAreaRef,
				setTextAreaRef,
				kulitanLibrary,
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

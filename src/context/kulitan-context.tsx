/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import latinizeVowels from "@/utils/latinizeVowels";
import React, { createContext, useContext, useEffect, useState } from "react";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [isAddActionClicked, setIsAddActionClicked] = useState(false);
	const [kulitanWords, setKulitanWords] = useTransformedState(
		"a tin ku pung sing sing <div>la wii wiing pam bang saa </div>",
		latinizeVowels,
	);

	function useTransformedState(initialValue: any, transformer: any) {
		const [value, setValue] = useState(initialValue);

		const transformedValue = transformer(value);

		return [transformedValue, setValue];
	}

	return (
		<KulitanContext.Provider
			value={{
				kulitanWords,
				setKulitanWords,
				isAddActionClicked,
				setIsAddActionClicked,
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

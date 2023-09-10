"use client";
import React, { createContext, useContext, useState } from "react";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [kulitanWords, setKulitanWords] = useState("Ka pang pang an");
	
	return (
		<KulitanContext.Provider value={{ kulitanWords, setKulitanWords }}>
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

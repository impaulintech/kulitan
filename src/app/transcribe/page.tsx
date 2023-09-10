"use client";
import { useEffect, useRef, useState } from "react";

import kulitanKeys from "@/shared/data/kulitanKeys.json";
import { BackArrow } from "@/shared/icons/BackArrow";
import KulitanKey from "@/components/atoms/KulitanKey";
import TransparentCard from "@/components/templates/TransparentCard";
import KulitanKeyboard from "@/components/organisms/KulitanKeyboard";
import Link from "next/link";
import { useKulitanContext } from "@/context/kulitan-context";

export default function Transcribe() {
	const { kulitanWords, setKulitanWords } = useKulitanContext();
	const textareaRef: any = useRef(null);

	const getWordElements: any = (() => {
		if (typeof document === "undefined") {
			return [];
		}
		const kulitanElement = document.getElementsByClassName("kulitan-class");
		const normalWordElement =
			document.getElementsByClassName("normal-word-class");

		const kulitanElementArray = Array.from(kulitanElement);
		const normalElementArray = Array.from(normalWordElement);
		return {
			normal: normalElementArray,
			kulitanize: kulitanElementArray,
		};
	})();

	const denormalizeWords = (newValue: any) => {
		return JSON.parse(JSON.stringify(newValue).replace(/\s/g, "<br>"))
			.split("\n")
			.map((element: any, index: number) =>
				index === 0 ? element : `<div>${element}</div>`,
			)
			.join("");
	};

	const normalizeWords = (newValue: any) => {
		return newValue
			.replace(/<br>/g, " ")
			.replace(/<div>/g, "\n")
			.replace(/<\/div>/g, "")
			.trim();
	};

	const normalWordChange = (e: any) => {
		const newValue = e.target.value;
		const convertToHTMLTags = denormalizeWords(newValue);
		setKulitanWords(convertToHTMLTags);
	};

	const kulitanWordChange = () => {
		const newValue = getWordElements.kulitanize[0].innerHTML;
		// setKulitanWords(newValue);
	};

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.focus();
			const textLength = textareaRef.current.value.length;
			textareaRef.current.setSelectionRange(textLength, textLength);
		}
	}, []);

	return (
		<main className="flex min-h-screen min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative">
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<p className="font-kulitan text-[20px] z-10">i lu lin</p>
				</div>
				<div className="flex gap-3 flex-wrap justify-center items-start">
					<TransparentCard>
						<textarea
							ref={textareaRef}
							className="z-30 text-light bg-transparent resize-y w-full min-w-[350px] max-w-[350px] min-h-[96px] outline-0"
							name="postContent"
							spellCheck="false"
							rows={3}
							cols={40}
							defaultValue={kulitanWords}
							onChange={normalWordChange}
						/>
					</TransparentCard>
					<TransparentCard className="flex justify-end items-end">
						<div
							className="
								flex flex-row-reverse justify-start items-start 
								w-full gap-1 max-w-[350px] overflow-x-scroll px-2 min-h-[180px] h-full resize-y
							"
						>
							<div
								onInput={kulitanWordChange}
								className="kulitan-class text-white text-[21px] outline-none flex flex-row-reverse font-kulitan text-center gap-2"
								contentEditable="false"
								spellCheck="false"
								dangerouslySetInnerHTML={{
									__html: kulitanWords.replace(/\s/g, "<br>"),
								}}
							></div>
						</div>
					</TransparentCard>
				</div>
			</div>
			<div className="sticky left-0 bottom-0 h-full w-full">
				<div className="absolute left-0 bottom-0 h-full w-full z-0">
					<div
						className="
							left-0 bottom-0 min-h-[275px] min-w-[414px] w-full bg-gradient-container z-0
							flex justify-center items-center mt-[30px]
						"
					></div>
				</div>
				<KulitanKeyboard>
					{kulitanKeys.map((key, index) => {
						const { mainKey, subKeyOne, subKeyTwo, subKeyThree } = key;
						return (
							<KulitanKey
								key={index}
								mainKey={mainKey}
								subKeyOne={subKeyOne}
								subKeyTwo={subKeyTwo}
								subKeyThree={subKeyThree}
								hasSub={subKeyOne ? true : false}
							/>
						);
					})}
				</KulitanKeyboard>
			</div>
		</main>
	);
}

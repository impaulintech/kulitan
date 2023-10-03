/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState } from "react";

import kulitanKeys from "@/shared/data/kulitanKeys.json";
import { BackArrow } from "@/shared/icons/BackArrow";
import KulitanKey from "@/components/atoms/KulitanKey";
import TransparentCard from "@/components/templates/TransparentCard";
import KulitanKeyboard from "@/components/organisms/KulitanKeyboard";
import Link from "next/link";
import { useKulitanContext } from "@/context/kulitan-context";
import denormalizeWords from "@/utils/denormalizeWords";
import normalizeWords from "@/utils/normalizeWords";
import delatinizeVowels from "@/utils/delatinizeVowels";
import autoFormatUserInput from "@/utils/autoFormatUserInput";
import getWordAtCursor from "@/utils/getWordAtCursor";

export default function Transcribe() {
	const {
		kulitanWords,
		setKulitanWords,
		isAutoCorrect,
		setCursorPosition,
		setTextAreaRef,
		kulitanLibrary,
		disableScroll,
		setIsKeyboardActive,
		isReadOnly,
		scrollY,
		setIsReadOnly,
	} = useKulitanContext();
	const textareaRef: any = useRef(null);
	const textareaRefClone: any = useRef(null);
	const lastClickPositionRef = useRef(null);
	const textarea = textareaRef.current;
	const [isAutoFormatKeyClicked, setIsAutoFormatKeyClicked] = useState(false);

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

	const normalWordChange = (e: any) => {
		const newValue: any = e.target.value;
		const convertToHTMLTags = denormalizeWords(newValue);
		setKulitanWords(convertToHTMLTags);
		setTextAreaRef(textareaRef);
		const keyType = e.nativeEvent.inputType;
		const keyData = e.nativeEvent.data;

		if (
			keyType === "deleteContentBackward" ||
			keyType === "deleteContentForward"
		) {
			setIsAutoFormatKeyClicked(true);
			return;
		} else {
			if (!textarea) return;
			const activeWordInCursor = getWordAtCursor(textarea, 1);

			if (keyData === " " || keyType === "insertLineBreak") {
				if (isAutoCorrect) {
					const currentCursorPosition = autoFormatUserInput(
						activeWordInCursor.replace(/[\s\n]+$/, ""),
						newValue,
						setKulitanWords,
						isAutoCorrect,
						kulitanLibrary,
						e,
					);
					setCursorPosition(
						textareaRef.current.selectionStart + currentCursorPosition,
					);
					setIsAutoFormatKeyClicked(false);
					return;
				}
			}
			setCursorPosition(textareaRef.current.selectionStart);
			setIsAutoFormatKeyClicked(false);
		}
	};

	const kulitanWordChange = () => {
		const newValue = getWordElements.kulitanize[0].innerHTML;
		// setKulitanWords(newValue);
	};

	const handleClickOutside = (e: any) => {
		setIsAutoFormatKeyClicked(true);
		if (textareaRef.current && !textareaRef.current.contains(e.target)) {
			e.preventDefault();
			textareaRef.current.focus();
		}
	};

	const trackCursor = (e: any) => {
		setIsKeyboardActive(false);
		setIsReadOnly(false);
		const newValue = e.target.value;
		if (!textareaRef.current) return;

		const activeWordInCursor = getWordAtCursor(textareaRef.current);

		// Record the click position
		lastClickPositionRef.current = textareaRef.current.selectionStart;

		if (isAutoCorrect) {
			autoFormatUserInput(
				activeWordInCursor,
				newValue,
				setKulitanWords,
				isAutoCorrect,
				kulitanLibrary,
				e,
			);
		}
		setIsAutoFormatKeyClicked(false);

		if (textareaRefClone.current) {
			textareaRefClone.current.focus();

			// Use the last click position to set the selection range
			if (lastClickPositionRef.current !== null) {
				textareaRefClone.current.setSelectionRange(
					lastClickPositionRef.current,
					lastClickPositionRef.current,
				);
				setCursorPosition(lastClickPositionRef.current);
			}
		}
	};

	useEffect(() => {
		kulitanWords.length === 0 &&
			setKulitanWords(
				"a tin ku pung sing sing <div>la wii wiing pam bang saa </div>",
			);

		if (textareaRef.current) {
			setTextAreaRef(textareaRef);
			textareaRef.current.focus();
			const textLength = textareaRef.current.value.length;
			textareaRef.current.setSelectionRange(textLength, textLength);
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<p className="font-kulitan text-[20px] z-10">i lu lin</p>
				</div>
				<div className="flex gap-3 flex-wrap justify-center items-start px-5">
					<TransparentCard className="z-10">
						<textarea
							ref={textareaRef}
							className="z-10 text-light bg-transparent resize-y w-full min-h-[96px] outline-0"
							name="postContent"
							spellCheck="false"
							rows={3}
							value={normalizeWords(kulitanWords)}
							onChange={normalWordChange}
							onClick={trackCursor}
							readOnly={isReadOnly}
						/>
					</TransparentCard>
					<TransparentCard className="flex justify-end items-end">
						<div
							className="
								absolute z-0 right-[1000%]
								flex flex-row-reverse justify-start items-start 
								bg-dark gap-1 overflow-x-scroll px-2 min-h-[180px] min-w-[360px] h-full copy-div-element
							"
						>
							<div
								onInput={kulitanWordChange}
								className="kulitan-class text-white text-[21px] outline-none flex flex-row-reverse font-kulitan text-center gap-2"
								spellCheck="false"
								dangerouslySetInnerHTML={{
									__html: delatinizeVowels(kulitanWords.replace(/\s/g, "<br>")),
								}}
							></div>
						</div>
						<div
							onClick={() => {
								setIsReadOnly(true);
								setIsKeyboardActive(true);
							}}
							className="
								flex flex-row-reverse justify-start items-start
								w-full gap-1 overflow-x-scroll px-2 min-h-[180px] h-full
							"
						>
							<div
								id="kulitan-text"
								onInput={kulitanWordChange}
								className="kulitan-class text-white text-[21px] outline-none flex flex-row-reverse font-kulitan text-center gap-2"
								spellCheck="false"
								dangerouslySetInnerHTML={{
									__html: delatinizeVowels(kulitanWords.replace(/\s/g, "<br>")),
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
							left-0 bottom-0 h-full w-full bg-gradient-container z-0
							flex justify-center items-center
						"
					></div>
				</div>
				<KulitanKeyboard textareaRef={textareaRef}>
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
								textareaRef={textareaRef}
							/>
						);
					})}
				</KulitanKeyboard>
			</div>
		</main>
	);
}

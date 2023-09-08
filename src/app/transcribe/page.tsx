"use client";
import { useRef, useState } from "react";

import kulitanizeWords from "@/utils/kulitanizeWords";
import { BackArrow } from "@/shared/icons/BackArrow";
import KulitanKey from "@/components/atoms/KulitanKey";
import TransparentCard from "@/components/templates/TransparentCard";
import KulitanKeyboard from "@/components/organisms/KulitanKeyboard";

export default function Transcribe() {
	const editableContainerRef = useRef<HTMLDivElement | null>(null);

	const onBeforeInput = (e: any) => {
		if (e.inputType === "insertLineBreak" && e.shiftKey) {
			e.preventDefault();
			const currentDiv: any = document.activeElement;
			currentDiv.innerText += "\n";

			// Move the cursor to the end of the last innerText
			const range = document.createRange();
			const selection: any = window.getSelection();
			range.selectNodeContents(currentDiv);
			range.collapse(false); // Move to the end
			selection.removeAllRanges();
			selection.addRange(range);

			// Optionally, focus on the element
			currentDiv.focus();
		}
	};

	const onKeydown = (e: any) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			const newDiv: any = document.createElement("div");
			newDiv.contentEditable = true;
			newDiv.className = "min-w-[30px] text-right outline-0 font-kulitan";
			newDiv.onkeydown = onKeydown;
			editableContainerRef.current?.appendChild(newDiv);
			newDiv.focus();
		}
	};

	const kulitanKeys = [
		{
			mainKey: "nga",
			subKeyOne: "ngi",
			subKeyTwo: "nga",
			subKeyThree: "ngu",
		},
		{
			mainKey: "ka",
			subKeyOne: "ki",
			subKeyTwo: "ka",
			subKeyThree: "ku",
		},
		{
			mainKey: "nga",
			subKeyOne: "ngi",
			subKeyTwo: "nga",
			subKeyThree: "ngu",
		},
		{
			mainKey: "a",
		},
		{
			mainKey: "ta",
			subKeyOne: "ti",
			subKeyTwo: "ta",
			subKeyThree: "tu",
		},
		{
			mainKey: "da",
			subKeyOne: "di",
			subKeyTwo: "da",
			subKeyThree: "du",
		},
		{
			mainKey: "na",
			subKeyOne: "ni",
			subKeyTwo: "na",
			subKeyThree: "nu",
		},
		{
			mainKey: "ga",
			subKeyOne: "gi",
			subKeyTwo: "ga",
			subKeyThree: "gu",
		},
		{
			mainKey: "la",
			subKeyOne: "li",
			subKeyTwo: "la",
			subKeyThree: "lu",
		},
		{
			mainKey: "sa",
			subKeyOne: "si",
			subKeyTwo: "sa",
			subKeyThree: "su",
		},
		{
			mainKey: "ma",
			subKeyOne: "mi",
			subKeyTwo: "ma",
			subKeyThree: "mu",
		},
		{
			mainKey: "wa",
			subKeyOne: "wi",
			subKeyTwo: "wa",
			subKeyThree: "wu",
		},
		{
			mainKey: "pa",
			subKeyOne: "pi",
			subKeyTwo: "pa",
			subKeyThree: "pu",
		},
		{
			mainKey: "ba",
			subKeyOne: "bi",
			subKeyTwo: "ba",
			subKeyThree: "bu",
		},
	];

	return (
		<main className="flex min-h-screen min-w-screen flex-col items-center justify-start gap-5 bg-gradient-container">
			<div className="w-full flex justify-center items-center relative h-[49px]">
				<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
				<BackArrow className="absolute left-5 z-10" />
				<p className="font-kulitan text-[20px] z-10">i lu lin</p>
			</div>
			<div className="flex flex-col gap-5 max-h-[350px] overflow-scroll pr-1 pb-1">
				<TransparentCard>
					<textarea
						className="z-30 text-light bg-transparent resize-y w-full min-w-[350px] max-w-[350px] min-h-[96px] outline-0"
						name="postContent"
						rows={3}
						cols={40}
					/>
				</TransparentCard>
				<TransparentCard className="flex justify-end items-end">
					<div
						id="editableContainer"
						ref={editableContainerRef}
						className="flex flex-row-reverse justify-start items-start w-full gap-1 max-w-[350px] overflow-x-scroll p-3 min-h-[180px] h-full resize-y"
					>
						<div
							contentEditable={true}
							className="min-w-[30px] text-right outline-0 font-kulitan"
							onBeforeInput={onBeforeInput}
							onKeyDown={onKeydown}
						></div>
					</div>
				</TransparentCard>
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
		</main>
	);
}

"use client";
import { useRef, useState } from "react";
import kulitanizeWords from "@/utils/kulitanizeWords";
import { BackArrow } from "@/shared/icons/BackArrow";
import TransparentCard from "@/components/templates/TransparentCard";

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
			newDiv.className = "w-10 text-right outline-0";
			newDiv.onkeydown = onKeydown;
			editableContainerRef.current?.appendChild(newDiv);
			newDiv.focus();
		}
	};

	return (
		<main className="flex min-h-screen min-w-screen flex-col items-center justify-start gap-5 bg-gradient-container">
			<div className="w-full flex justify-center items-center relative h-[49px]">
				<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
				<BackArrow className="absolute left-5 z-10" />
				<p className="font-kulitan text-[20px] z-10">i lu lin</p>
			</div>
			<TransparentCard>
				<textarea
					className="z-30 text-light bg-transparent resize-y w-[350px] min-w-[350px] max-w-[350px] min-h-[96px] outline-0"
					name="postContent"
					rows={3}
					cols={40}
				/>
			</TransparentCard>
			<TransparentCard className="flex justify-end items-end">
				<div
					id="editableContainer"
					ref={editableContainerRef}
					className="flex flex-row-reverse justify-start items-start w-[350px] gap-1 max-w-[350px] overflow-x-scroll p-3 min-h-[210px] h-[210px] resize-y"
				>
					<div
						contentEditable={true}
						className="w-10 text-right outline-0"
						onBeforeInput={onBeforeInput}
						onKeyDown={onKeydown}
					></div>
				</div>
			</TransparentCard>
		</main>
	);
}

import KulitanKeyAction from "@/components/atoms/KulitanKeyAction";
import { useKulitanContext } from "@/context/kulitan-context";
import { BackArrow } from "@/shared/icons/BackArrow";
import { Copy } from "@/shared/icons/Copy";
import denormalizeWords from "@/utils/denormalizeWords";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import html2canvas from "html2canvas";
import { Download } from "@/shared/icons/Download";

type Props = {
	children: any;
	textareaRef: any;
};

const KulitanKeyboard = (props: Props) => {
	const { children, textareaRef } = props;

	const {
		kulitanWords,
		setKulitanWords,
		isAddActionClicked,
		setIsAddActionClicked,
		isAutoCorrect,
		setIsAutoCorrect,
		isMobilePhone,
		isKeyboardActive,
		setIsKeyboardActive,
		isReadOnly,
		setIsReadOnly,
	} = useKulitanContext();

	const deleteAction = (e: any) => {
		setIsReadOnly(true);
		setKulitanWords("");
	};

	const addAction = (e: any) => {
		setIsReadOnly(true);
		if (isAddActionClicked) return;
		setIsAddActionClicked(true);
		if (textareaRef.current) {
			const cursorPosition = textareaRef.current.selectionStart;
			const currentText = textareaRef.current.value;
			const leftString = currentText.slice(0, cursorPosition);
			const lastChar = leftString.trim().slice(-1);

			const characterMap: { [key: string]: string } = {
				a: "a",
				u: "u",
				i: "i",
			};

			const newLeftString =
				lastChar in characterMap
					? leftString.slice(0, cursorPosition - 1) +
					  characterMap[lastChar] +
					  " "
					: leftString;

			const newText = newLeftString + currentText.slice(cursorPosition);

			const newPosition = newLeftString.length;
			setTimeout(() => {
				textareaRef.current.setSelectionRange(newPosition - 1, newPosition - 1);
			}, 1);

			setKulitanWords(denormalizeWords(newText));
		}
	};

	const backSpaceAction = (e: any) => {
		setIsReadOnly(true);
		if (textareaRef.current) {
			const cursorPosition = textareaRef.current.selectionStart;
			const currentText = textareaRef.current.value;

			if (cursorPosition === 0) return;

			const newText =
				currentText.slice(0, cursorPosition - 1) +
				currentText.slice(cursorPosition);

			textareaRef.current.value = newText;
			textareaRef.current.setSelectionRange(
				cursorPosition - 1,
				cursorPosition - 1,
			);

			setKulitanWords(denormalizeWords(newText));
		}
	};

	const newLineAction = (e: any) => {
		setIsReadOnly(true);
		if (textareaRef.current) {
			const cursorPosition = textareaRef.current.selectionStart;
			const currentText = textareaRef.current.value;

			const newText =
				currentText.slice(0, cursorPosition) +
				"<div>" +
				currentText.slice(cursorPosition) +
				"</div>";

			textareaRef.current.value = newText;
			setTimeout(() => {
				textareaRef.current.setSelectionRange(
					cursorPosition + 1,
					cursorPosition + 1,
				);
			}, 1);

			setKulitanWords(denormalizeWords(newText));
		}
	};

	const copyKulitanWords = async () => {
		const divToCopy: any = document.querySelector(".copy-div-element");

		if (!divToCopy) {
			console.error("Element not found.");
			return;
		}

		try {
			const canvas = await html2canvas(divToCopy);

			// Convert the canvas to a blob
			canvas.toBlob(async (blob) => {
				if (blob) {
					// Create a new ClipboardItem and copy it to the clipboard
					const clipboardItem = new ClipboardItem({ "image/png": blob });
					await navigator.clipboard.write([clipboardItem]);

					alert("Image copied successfully.");
				} else {
					alert("Failed to copy image.");
				}
			}, "image/png");
		} catch (error: any) {
			alert("Error capturing and copying image:");
		}
	};

	const captureOverflowDivAsImage = async () => {
		const divToCapture: any = document.querySelector(".copy-div-element");

		if (!divToCapture) {
			console.error("Element not found.");
			return;
		}

		divToCapture.scrollTop = divToCapture.scrollHeight;

		try {
			const canvas = await html2canvas(divToCapture, {
				scrollX: 0,
				scrollY: -window.scrollY,
			});

			const dataURL = canvas.toDataURL("image/png");

			const link = document.createElement("a");
			link.href = dataURL;
			link.download = "captured_image.png";
			link.click();

			console.log("Overflow content saved as image.");
		} catch (error) {
			console.error(
				"Error capturing and saving overflow content as image:",
				error,
			);
		}
	};

	return (
		<div className="sticky w-full h-full">
			<div className="h-[30px] bg-dark w-full bottom-[275px] z-30 flex gap-2 justify-between items-center pl-6">
				<div
					className="flex gap-2"
					onClick={(e: any) => {
						e.preventDefault();
						setIsReadOnly(true);
						setIsAutoCorrect(!isAutoCorrect);
					}}
				>
					<Switch
						checked={isAutoCorrect}
						className={`${
							isAutoCorrect
								? "bg-[rgba(255,255,255,90%)]"
								: "bg-[rgba(217,217,217,30%)]"
						} relative inline-flex h-4 w-10 items-center rounded-full`}
					>
						<span
							className={`${
								isAutoCorrect ? "translate-x-6" : "translate-x-1"
							} inline-block h-3 w-3 transform rounded-full bg-[#57BB47] transition`}
						/>
					</Switch>
					<span className="text-[12px]">Auto format</span>
				</div>
				<div className="flex">
					<button
						className={`${
							isMobilePhone && "hidden"
						} mr-6 flex gap-2 select-none`}
						onClick={captureOverflowDivAsImage}
					>
						<Download />
					</button>
					<button
						className={`${
							isMobilePhone && "hidden"
						} mr-6 flex gap-2 select-none`}
						onClick={copyKulitanWords}
					>
						<Copy />
					</button>
					<button
						className={`mr-6 ${
							isKeyboardActive ? "-rotate-90" : "rotate-90"
						} select-none`}
						onClick={(e: any) => {
							e.preventDefault();
							setIsReadOnly(!isKeyboardActive);
							setIsKeyboardActive(!isKeyboardActive);
						}}
					>
						<BackArrow />
					</button>
				</div>
			</div>
			<div
				className={`
					left-0 bottom-0 min-h-[275px] w-full bg-[rgba(12,51,68,60%)] z-50
                    justify-center items-center 
					${isKeyboardActive ? "flex" : "hidden"}
                `}
			>
				<div className="flex justify-start items-start max-w-[414px]">
					<div className="flex flex-wrap justify-center items-start gap-2 pl-2 min-miniPhone:h-[275px]">
						{children}
					</div>
					<div className="w-[74px] h-[275px] pr-2 z-50 flex flex-col gap-2">
						<KulitanKeyAction action="delete" keyFunction={deleteAction} />
						<KulitanKeyAction action="add" keyFunction={addAction} />
						<KulitanKeyAction
							action="backSpace"
							keyFunction={backSpaceAction}
						/>
						<KulitanKeyAction action="newLine" keyFunction={newLineAction} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default KulitanKeyboard;

import KulitanKeyAction from "@/components/atoms/KulitanKeyAction";
import { useKulitanContext } from "@/context/kulitan-context";
import { BackArrow } from "@/shared/icons/BackArrow";
import denormalizeWords from "@/utils/denormalizeWords";
import { Switch } from "@headlessui/react";
import React, { useState } from "react";

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
	} = useKulitanContext();
	const [isKeyboardActive, setIsKeyboardActive] = useState(true);

	const deleteAction = () => {
		setKulitanWords("");
	};

	const addAction = () => {
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

	const backSpaceAction = () => {
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

	const newLineAction = () => {
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

	return (
		<div className="sticky w-full h-full">
			<div className="h-[30px] bg-dark w-full bottom-[275px] z-30 flex gap-2 justify-between items-center pl-6">
				<div className="flex gap-2">
					<Switch
						checked={isAutoCorrect}
						onChange={setIsAutoCorrect}
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
					<span className="text-[12px]">Auto correct</span>
				</div>
				<button
					className={`mr-6 ${isKeyboardActive ? "-rotate-90" : "rotate-90"}`}
					onClick={() => setIsKeyboardActive(!isKeyboardActive)}
				>
					<BackArrow />
				</button>
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

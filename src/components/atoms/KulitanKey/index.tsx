import React, { useEffect, useState } from "react";
import { useKulitanContext } from "@/context/kulitan-context";
import denormalizeWords from "@/utils/denormalizeWords";

type Props = {
	mainKey?: string;
	subKeyOne?: string;
	subKeyTwo?: string;
	subKeyThree?: string;
	hasSub?: boolean;
	textareaRef: any;
};

const KulitanKey = (props: Props) => {
	const {
		mainKey,
		subKeyOne,
		subKeyTwo,
		subKeyThree,
		hasSub = true,
		textareaRef,
	} = props;
	const { kulitanWords, setKulitanWords, setIsAddActionClicked } =
		useKulitanContext();

	const [isSubHover, setIsSubHover] = useState(false);
	const [isKeyClicked, setIsKeyClicked] = useState(false);
	const [isSubActive, setIsSubActive] = useState(mainKey);
	const [isTimerId, setIsTimerId] = useState<any>(null);
	let activeKey: any;

	const startTimer = () => {
		setIsTimerId(
			setTimeout(() => {
				setIsSubHover(true);
			}, 300),
		);
	};

	const handleButtonClick = (buttonContent: any) => {
		if (textareaRef.current) {
			setIsAddActionClicked(false);
			const cursorPosition = textareaRef.current.selectionStart;
			const currentText = textareaRef.current.value;
			const buttonContentValue = buttonContent + "<br>";

			const newText =
				currentText.slice(0, cursorPosition) +
				buttonContentValue +
				currentText.slice(cursorPosition);

			const newCursorPosition = cursorPosition + (buttonContent.length + 1);

			textareaRef.current.value = newText;
			setKulitanWords(denormalizeWords(newText));

			// Set the cursor position explicitly after updating the textarea
			setTimeout(() => {
				textareaRef.current.setSelectionRange(
					newCursorPosition,
					newCursorPosition,
				);
			}, 1);
		}
	};

	const onMouseDown = (e: any) => {
		setIsKeyClicked(true);
		startTimer();
		activeKey = e.target.classList[0];
		document.addEventListener("mouseup", onMouseUp);
	};

	const onMouseUp = (e: any) => {
		clearTimeout(isTimerId);
		const x = e.clientX;
		const y = e.clientY;
		const hoveredElement: any = document.elementFromPoint(x, y);

		if (
			!hoveredElement ||
			!hoveredElement.classList.contains(`key-${subKeyOne}`)
		) {
			setIsSubHover(false);
			setIsSubActive(mainKey);
			setIsKeyClicked(false);
			return;
		}

		if (!isKeyClicked) return;

		handleButtonClick(hoveredElement.innerText);

		setIsSubHover(false);
		setIsSubActive(mainKey);
		setIsKeyClicked(false);

		document.removeEventListener("mouseup", onMouseUp);
	};

	return (
		<div
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			className={`key-${subKeyOne} relative flex flex-col items-center justify-center`}
		>
			<div
				className={`
					key-${subKeyOne}
					${isSubHover ? "flex" : "hidden"} 
					"mb-1 absolute z-50 -top-9 -mt-[100px]"
				`}
			>
				<span
					onMouseOver={() => setIsSubActive(subKeyOne)}
					className={`
						key-${subKeyOne}
						${isSubActive === subKeyOne ? "bg-slate-900" : "bg-slate-400"} 
						font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer
					`}
				>
					{subKeyOne}
				</span>
				<span
					onMouseOver={() => setIsSubActive(subKeyTwo)}
					className={`
						key-${subKeyOne}
						${isSubActive === subKeyTwo ? "bg-slate-900" : "bg-slate-400"}  
						font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer
					`}
				>
					{subKeyTwo}
				</span>
				<span
					onMouseOver={() => setIsSubActive(subKeyThree)}
					className={`
						key-${subKeyOne}
						${isSubActive === subKeyThree ? "bg-slate-900" : "bg-slate-400"}  
						font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer
					`}
				>
					{subKeyThree}
				</span>
			</div>
			<button
				className={`
					key-${subKeyOne}
					${isKeyClicked && "bg-slate-900"} 
					font-kulitan h-[57px] w-[74px] flex justify-center items-center text-light text-[42px] relative rounded-sm
				`}
			>
				{hasSub === true ? (
					<>
						<span className={`key-${subKeyOne} absolute top-0 bottom-0`}>
							{subKeyOne}
						</span>
						<span
							className={`
								key-${subKeyOne} 
								absolute top-0 bottom-0 z-30 w-full
							`}
						>
							{mainKey}
						</span>
						<span className={`key-${subKeyOne} absolute top-0 bottom-0`}>
							{subKeyThree}
						</span>
					</>
				) : (
					mainKey
				)}
			</button>
		</div>
	);
};

export default KulitanKey;

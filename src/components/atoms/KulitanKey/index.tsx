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
	const { kulitanWords, setKulitanWords } = useKulitanContext();

	const [isSubHover, setIsSubHover] = useState(false);
	const [isKeyClicked, setIsKeyClicked] = useState(false);
	const [isSubActive, setIsSubActive] = useState(mainKey);
	const [isTimerId, setIsTimerId] = useState<any>(null);

	const startTimer = () => {
		setIsTimerId(
			setTimeout(() => {
				setIsSubHover(true);
			}, 300),
		);
	};

	const handleButtonClick = (buttonContent: any) => {
		if (textareaRef.current) {
			const cursorPosition = textareaRef.current.selectionStart;
			const currentText = textareaRef.current.value;
			const buttonContentValue = buttonContent + "<br>";

			const newText =
				currentText.slice(0, cursorPosition) +
				buttonContentValue +
				currentText.slice(cursorPosition);

			const newCursorPosition = cursorPosition + buttonContent.length;

			textareaRef.current.value = newText;
			textareaRef.current.setSelectionRange(
				newCursorPosition,
				newCursorPosition,
			);

			setKulitanWords(denormalizeWords(newText));
		}
	};

	const onMouseDown = () => {
		setIsKeyClicked(true);
		startTimer();
	};

	const onMouseUp = (e: any) => {
		clearTimeout(isTimerId);
		const x = e.clientX;
		const y = e.clientY;
		const hoveredElement: any = document.elementFromPoint(x, y);
		handleButtonClick(hoveredElement.innerText);

		setIsSubHover(false);
		setIsSubActive(mainKey);
		setIsKeyClicked(false);
	};

	return (
		<div
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			className="relative flex flex-col items-center justify-center"
		>
			<div
				className={`${
					isSubHover ? "flex" : "hidden"
				} "mb-1 absolute z-40 -top-9 -mt-[100px]"`}
			>
				<span
					onMouseOver={() => setIsSubActive(subKeyOne)}
					className={`${
						isSubActive === subKeyOne ? "bg-slate-900" : "bg-slate-400"
					} font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer`}
				>
					{subKeyOne}
				</span>
				<span
					onMouseOver={() => setIsSubActive(subKeyTwo)}
					className={`${
						isSubActive === subKeyTwo ? "bg-slate-900" : "bg-slate-400"
					}  font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer`}
				>
					{subKeyTwo}
				</span>
				<span
					onMouseOver={() => setIsSubActive(subKeyThree)}
					className={`${
						isSubActive === subKeyThree ? "bg-slate-900" : "bg-slate-400"
					}  font-kulitan text-[24px] h-full w-[30px] flex justify-center items-center cursor-pointer`}
				>
					{subKeyThree}
				</span>
			</div>
			<button
				className={`${
					isKeyClicked && "bg-slate-900"
				} font-kulitan h-[57px] w-[74px] flex justify-center items-center text-light text-[42px] relative rounded-sm`}
			>
				{hasSub === true ? (
					<>
						<span className="absolute top-0 bottom-0">{subKeyOne}</span>
						<span className="absolute top-0 bottom-0 z-30 w-full">
							{mainKey === "wa" ? subKeyOne : mainKey}
						</span>
						<span className="absolute top-0 bottom-0">{subKeyThree}</span>
					</>
				) : (
					mainKey
				)}
			</button>
		</div>
	);
};

export default KulitanKey;

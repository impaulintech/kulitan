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
	const {
		isMobilePhone,
		setKulitanWords,
		setIsAddActionClicked,
		setDisableScroll,
		disableScroll,
		scrollY,
	} = useKulitanContext();

	const [isSubHover, setIsSubHover] = useState(false);
	const [isKeyClicked, setIsKeyClicked] = useState(false);
	const [isSubActive, setIsSubActive] = useState(mainKey);
	const [isTimerId, setIsTimerId] = useState<any>(null);
	const [cursorPosition, setCursorPosition] = useState<any>({ x: 0, y: 0 });
	let activeKey: any;

	const startTimer = () => {
		if (!subKeyOne) return;
		
		setIsTimerId(
			setTimeout(() => {
				setIsSubHover(true);
				setDisableScroll(true);
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
		e.preventDefault();
		setIsKeyClicked(true);
		startTimer();
		activeKey = e.target.classList[0];
		document.addEventListener("mouseup", onMouseUp);
	};

	const onMouseUp = (e: any) => {
		e.preventDefault();
		clearTimeout(isTimerId);
		const x = e.clientX;
		const y = e.clientY;
		const hoveredElement: any = document.elementFromPoint(x, y);

		if (
			!hoveredElement ||
			!hoveredElement.classList.contains(`key-${subKeyOne}`)
		) {
			setIsSubHover(false);
			setDisableScroll(false);
			window.scrollTo(0, scrollY);
			setIsSubActive(mainKey);
			setIsKeyClicked(false);
			return;
		}

		if (!isKeyClicked) return;

		handleButtonClick(hoveredElement.innerText);

		setIsSubHover(false);
		setDisableScroll(false);
		setIsSubActive(mainKey);
		setIsKeyClicked(false);

		document.removeEventListener("mouseup", onMouseUp);
	};

	const handleTouchMove = (e: any) => {
		if (e.touches && e.touches.length > 0) {
			const touch = e.touches[0];
			const x = touch.clientX;
			const y = touch.clientY;

			setCursorPosition({ x, y });
			const hoveredElement: any = document.elementFromPoint(
				cursorPosition.x,
				cursorPosition.y,
			);
			setIsSubActive(hoveredElement.innerText);
		}
	};

	const onTouchStart = (e: any) => {
		if (e.cancelable) {
			e.preventDefault();
		}
		if (e.touches && e.touches.length > 0) {
			const touch = e.touches[0];
			const x = touch.clientX;
			const y = touch.clientY;
			setCursorPosition({ x, y });
		}
		setIsKeyClicked(true);
		startTimer();
		activeKey = e.target.classList[0];
	};

	const onTouchEnd = (e: any) => {
		if (e.cancelable) {
			e.preventDefault();
		}
		clearTimeout(isTimerId);
		const hoveredElement: any = document.elementFromPoint(
			cursorPosition.x,
			cursorPosition.y,
		);
		const touchedElement: any = document.elementFromPoint(
			cursorPosition.x,
			cursorPosition.y,
		);

		if (
			!hoveredElement ||
			!hoveredElement.classList.contains(`key-${subKeyOne}`)
		) {
			setIsSubHover(false);
			setDisableScroll(false);
			setIsSubActive(mainKey);
			setIsKeyClicked(false);
			return;
		}

		if (!isKeyClicked) return;

		handleButtonClick(touchedElement.innerText);

		setIsSubHover(false);
		setDisableScroll(false);
		setIsSubActive(mainKey);
		setIsKeyClicked(false);
	};

	const isUserDesktop = !isMobilePhone;

	return (
		<div
			onMouseDown={(e) => isUserDesktop && onMouseDown(e)}
			onMouseUp={(e) => isUserDesktop && onMouseUp(e)}
			onTouchStart={(e) => isMobilePhone && onTouchStart(e)}
			onTouchEnd={(e) => isMobilePhone && onTouchEnd(e)}
			onTouchMove={(e) => isMobilePhone && handleTouchMove(e)}
			className={`key-${subKeyOne} relative flex flex-col items-center justify-center`}
			id="test"
		>
			<div
				className={`
					key-${subKeyOne}
					${isSubHover ? "flex" : "hidden"} 
					" absolute z-50 top-0"
				`}
			>
				<span
					onTouchStart={() => setIsSubActive(subKeyOne)}
					className={`
						key-${subKeyOne} select-none
						${isSubActive === subKeyOne ? "bg-slate-900" : "bg-slate-400"} 
						font-kulitan text-[24px] w-[30px] flex justify-center items-center cursor-pointer
						h-[60px]
					`}
				>
					{subKeyOne}
				</span>
				<span
					onTouchStart={() => setIsSubActive(subKeyTwo)}
					className={`
						key-${subKeyOne} select-none
						${isSubActive === subKeyTwo ? "bg-slate-900" : "bg-slate-400"}  
						font-kulitan text-[24px] w-[30px] flex justify-center items-center cursor-pointer
						h-[60px]
					`}
				>
					{subKeyTwo}
				</span>
				<span
					onTouchStart={() => setIsSubActive(subKeyThree)}
					className={`
						key-${subKeyOne} select-none
						${isSubActive === subKeyThree ? "bg-slate-900" : "bg-slate-400"}  
						font-kulitan text-[24px] w-[30px] flex justify-center items-center cursor-pointer
						h-[60px]
					`}
				>
					{subKeyThree}
				</span>
			</div>
			<button
				className={`
					key-${subKeyOne}
					${isKeyClicked && "bg-slate-900"}  select-none
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

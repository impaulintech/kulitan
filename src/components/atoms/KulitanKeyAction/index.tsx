import { useKulitanContext } from "@/context/kulitan-context";
import { Add } from "@/shared/icons/Add";
import { BackSpace } from "@/shared/icons/BackSpace";
import { DeleteAll } from "@/shared/icons/DeleteAll";
import { NewLine } from "@/shared/icons/NewLine";
import React, { useEffect, useState } from "react";

type Props = {
	action: string;
	keyFunction: any;
};

const KulitanKeyAction = (props: Props) => {
	const { action, keyFunction } = props;
	const { isMobilePhone } = useKulitanContext();
	const [isKeyClicked, setIsKeyClicked] = useState(false);
	const [isTimerId, setIsTimerId] = useState<any>(null);
	const [isIntervalId, setIsIntervalId] = useState<any>(null);

	const startTimer = () => {
		setIsTimerId(
			setTimeout(() => {
				setIsIntervalId(setInterval(keyFunction, 50));
			}, 300),
		);
	};

	const onMouseDown = () => {
		setIsKeyClicked(true);
		startTimer();
	};

	const onMouseUp = () => {
		setIsKeyClicked(false);
		clearTimeout(isTimerId);
		clearInterval(isIntervalId);
	};

	const onTouchDown = () => {
		keyFunction();
		setIsKeyClicked(true);
		startTimer();
	};

	const onTouchUp = () => {
		setIsKeyClicked(false);
		clearTimeout(isTimerId);
		clearInterval(isIntervalId);
	};

	const onClickAction = () => {
		keyFunction();
	};

	const actionComponentMap: any = {
		delete: <DeleteAll isHovered={isKeyClicked} />,
		add: <Add isHovered={isKeyClicked} />,
		backSpace: <BackSpace isHovered={isKeyClicked} />,
		newLine: <NewLine isHovered={isKeyClicked} />,
	};

	return (
		<div
			onMouseDown={() => !isMobilePhone && onMouseDown()}
			onMouseUp={() => !isMobilePhone && onMouseUp()}
			onClick={() => !isMobilePhone && onClickAction()}
			onTouchStart={() => isMobilePhone && onTouchDown()}
			onTouchEnd={() => isMobilePhone && onTouchUp()}
			className="relative flex flex-col items-center justify-center"
		>
			<button
				className={`${isKeyClicked && "bg-slate-900"}
					h-[57px] w-[74px] flex justify-center items-center text-dark font-bold 
					text-[12px] relative z-50 rounded-md
				`}
			>
				{actionComponentMap[action] || null}
			</button>
		</div>
	);
};

export default KulitanKeyAction;

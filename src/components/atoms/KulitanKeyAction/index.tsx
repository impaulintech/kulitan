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
	const [isKeyClicked, setIsKeyClicked] = useState(false);

	const onMouseDown = () => {
		setIsKeyClicked(true);
	};

	const onMouseUp = (e: any) => {
		setIsKeyClicked(false);
	};

	const onClickAction = (e: any) => { 
		keyFunction(action);
	};

	const actionComponentMap: any = {
		delete: <DeleteAll isHovered={isKeyClicked} />,
		add: <Add isHovered={isKeyClicked} />,
		backSpace: <BackSpace isHovered={isKeyClicked} />,
		newLine: <NewLine isHovered={isKeyClicked} />,
	};

	return (
		<div
			onClick={onClickAction}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			className="relative flex flex-col items-center justify-center"
		>
			<button
				className={`${
					isKeyClicked && "bg-slate-900"
				}
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

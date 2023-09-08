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
	const [isHovered, setIsHovered] = useState(false);

	const onClickAction = (e: any) => {
		keyFunction(action);
	};
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const actionComponentMap: any = {
		delete: <DeleteAll isHovered={isHovered} />,
		add: <Add isHovered={isHovered} />,
		backSpace: <BackSpace isHovered={isHovered} />,
		newLine: <NewLine isHovered={isHovered} />,
	};

	return (
		<div
			onClick={onClickAction}
			className="relative flex flex-col items-center justify-center"
		>
			<button
				className="
					h-[57px] w-[74px] flex justify-center items-center text-dark font-bold 
					text-[12px] relative z-50 hover:bg-slate-900 hover:text-light rounded-md
				"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{actionComponentMap[action] || null}
			</button>
		</div>
	);
};

export default KulitanKeyAction;

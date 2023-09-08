import React from "react";

type Props = {
	children: any;
	className?: string;
};

const TransparentCard = (props: Props) => {
	const { children, className = "" } = props;
	return (
		<div
			className={
				className +
				" min-w-[373px] rounded-md p-3 relative bg-card flex items-center justify-center"
			}
		>
			{children}
		</div>
	);
};

export default TransparentCard;

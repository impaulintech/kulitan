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
				"min-w-[290px] w-full rounded-md p-3 relative bg-card flex items-center justify-center " +
				className
			}
		>
			{children}
		</div>
	);
};

export default TransparentCard;

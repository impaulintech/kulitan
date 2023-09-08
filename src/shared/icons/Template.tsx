import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
}

export const Template: React.FC<IconName> = ({
	className = "",
	height = "",
	width = "",
	color = "",
}): JSX.Element => {
	return (
		<svg></svg>
	);
};

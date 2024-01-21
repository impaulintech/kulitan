import React from "react";

export interface IconName
{
	className?: string;
	height?: string;
	width?: string;
}

export const CloseButton: React.FC<IconName> = ({
	className = "",
	height = "39",
	width = "39",
}): JSX.Element =>
{
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 39 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="19.5" cy="19.5" r="18" stroke="black" strokeWidth="3" />
			<path d="M11 12L26 27" stroke="black" strokeWidth="3" strokeLinecap="round" />
			<path d="M12.293 27.7071L27.293 12.7071" stroke="black" strokeWidth="3" strokeLinecap="round" />
		</svg>
	);
};

import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
	isHovered: boolean;
}

export const Add: React.FC<IconName> = ({
	className = "",
	height = "33",
	width = "33",
	isHovered,
	color = isHovered ? "#FFFFFF" : "#111827",
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 33 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.0385 2.53846C19.0385 1.13437 17.9041 0 16.5 0C15.0959 0 13.9615 1.13437 13.9615 2.53846V13.9615H2.53846C1.13437 13.9615 0 15.0959 0 16.5C0 17.9041 1.13437 19.0385 2.53846 19.0385H13.9615V30.4615C13.9615 31.8656 15.0959 33 16.5 33C17.9041 33 19.0385 31.8656 19.0385 30.4615V19.0385H30.4615C31.8656 19.0385 33 17.9041 33 16.5C33 15.0959 31.8656 13.9615 30.4615 13.9615H19.0385V2.53846Z"
				fill={color}
			/>
		</svg>
	);
};

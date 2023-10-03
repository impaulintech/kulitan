import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
	isHovered: boolean;
}

export const NewLine: React.FC<IconName> = ({
	className = "",
	height = "26",
	width = "35",
	isHovered,
	color = isHovered ? "#FFFFFF" : "#111827",
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 35 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.1542 9.1197C10.5226 9.50603 10.5226 10.1136 10.1542 10.4999L7.19424 13.604C6.58731 14.2405 7.03847 15.2941 7.91796 15.2941H31.0833C31.6356 15.2941 32.0833 14.8464 32.0833 14.2941V0.999999C32.0833 0.447715 32.531 0 33.0833 0H34C34.5523 0 35 0.447715 35 1V15.2941C34.9991 16.1051 34.6915 16.8825 34.1447 17.456C33.5979 18.0294 32.8566 18.352 32.0833 18.3529H7.91792C7.03844 18.3529 6.58727 19.4065 7.19419 20.043L10.1541 23.1472C10.5224 23.5335 10.5225 24.141 10.1541 24.5273L9.47372 25.2409C9.07972 25.6542 8.42027 25.6542 8.02625 25.241L0.658018 17.5136C0.289651 17.1273 0.28965 16.5198 0.658018 16.1334L8.02628 8.40606C8.42029 7.99284 9.07971 7.99284 9.47372 8.40606L10.1542 9.1197Z"
				fill={color}
			/>
		</svg>
	);
};

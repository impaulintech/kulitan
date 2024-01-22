import React from "react";

export interface IconName
{
	className?: string;
	height?: string;
	width?: string;
	color?: string;
	isHovered: boolean;
}

export const Space: React.FC<IconName> = ({
	className = "",
	height = "9",
	width = "34",
	isHovered,
	color = isHovered ? "#FFFFFF" : "#212121",
}): JSX.Element =>
{
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 34 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M31.45 1.475V5.40834C31.45 5.67988 31.2597 5.90001 31.025 5.90001H2.975C2.74028 5.90001 2.55 5.67988 2.55 5.40834V1.475C2.55 0.660381 1.97916 0 1.275 0C0.570837 0 0 0.660381 0 1.475C0 2.34908 0 3.66019 0 5.40834C0 7.30912 1.33195 8.85001 2.975 8.85001H31.025C32.668 8.85001 34 7.30912 34 5.40834V1.475C34 0.660381 33.4292 0 32.725 0C32.0208 0 31.45 0.660381 31.45 1.475Z"
				fill={color}
			/>
		</svg>
	);
};

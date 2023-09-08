import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
}

export const BackArrow: React.FC<IconName> = ({
	className = "",
	height = "17.15",
	width = "11.05",
	color = "#F8FAFC",
}): JSX.Element => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 12 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M3.68376 8.62273L10.9839 2.53971C11.2752 2.29496 11.4578 1.94472 11.4915 1.56568C11.5251 1.18664 11.4073 0.809703 11.1636 0.517402C10.92 0.2251 10.5704 0.0412611 10.1915 0.00614245C9.8126 -0.0289762 9.43521 0.0874878 9.142 0.33003L0.516637 7.51787C0.354904 7.65299 0.22481 7.82197 0.135539 8.01288C0.0462689 8.20379 0 8.41197 0 8.62272C0 8.83347 0.0462689 9.04165 0.135539 9.23255C0.22481 9.42346 0.354904 9.59245 0.516637 9.72757L9.142 16.9154C9.43508 17.1591 9.81292 17.2765 10.1925 17.2418C10.5721 17.2071 10.9224 17.0232 11.1665 16.7304C11.4105 16.4376 11.5284 16.0599 11.4941 15.6802C11.4599 15.3006 11.2764 14.9501 10.9839 14.7057L3.68376 8.62273Z"
				fill={color}
			/>
		</svg>
	);
};
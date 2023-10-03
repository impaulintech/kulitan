import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
	isHovered: boolean;
}

export const BackSpace: React.FC<IconName> = ({
	className = "",
	height = "27",
	width = "35",
	isHovered,
	color = isHovered ? "#FFFFFF" : "#111827",
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 35 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_156_82)">
				<path
					d="M31.5 3.375H11.2252C10.7654 3.37491 10.3102 3.46219 9.88553 3.63185C9.46082 3.80151 9.07496 4.05022 8.75 4.36377L0.512421 12.3066C-0.171173 12.9658 -0.171173 14.0342 0.512421 14.6929L8.75 22.6362C9.40625 23.269 10.2966 23.625 11.2246 23.625H31.5C33.4332 23.625 35 22.1142 35 20.25V6.75C35 4.88584 33.4332 3.375 31.5 3.375ZM26.8685 16.7727C27.2103 17.1023 27.2103 17.6365 26.8685 17.9661L25.6315 19.1589C25.2897 19.4885 24.7357 19.4885 24.3939 19.1589L21 15.8862L17.6061 19.1589C17.2643 19.4885 16.7103 19.4885 16.3685 19.1589L15.1315 17.9661C14.7897 17.6365 14.7897 17.1023 15.1315 16.7727L18.5254 13.5L15.1315 10.2273C14.7897 9.89772 14.7897 9.36352 15.1315 9.03393L16.3685 7.84107C16.7103 7.51148 17.2643 7.51148 17.6061 7.84107L21 11.1138L24.3939 7.84107C24.7357 7.51148 25.2897 7.51148 25.6315 7.84107L26.8685 9.03393C27.2103 9.36352 27.2103 9.89772 26.8685 10.2273L23.4746 13.5L26.8685 16.7727Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_156_82">
					<rect width={width} height={height} fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
};

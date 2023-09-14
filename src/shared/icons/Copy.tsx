import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string; 
}

export const Copy: React.FC<IconName> = ({
	className = "",
	height = "18",
	width = "18",
	color = "#FFFFFF",
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_298_174)">
				<path
					d="M8.35714 0H13.3433C13.8536 0 14.3437 0.179297 14.7054 0.495703L17.4335 2.88281C17.7951 3.19922 18 3.62813 18 4.07461V11.8125C18 12.7441 17.1362 13.5 16.0714 13.5H8.35714C7.29241 13.5 6.42857 12.7441 6.42857 11.8125V1.6875C6.42857 0.755859 7.29241 0 8.35714 0ZM1.92857 4.5H5.14286V6.75H2.57143V15.75H10.2857V14.625H12.8571V16.3125C12.8571 17.2441 11.9933 18 10.9286 18H1.92857C0.863839 18 0 17.2441 0 16.3125V6.1875C0 5.25586 0.863839 4.5 1.92857 4.5Z"
					fill={color}
				/>
			</g>
			<defs>
				<clipPath id="clip0_298_174">
					<rect width="18" height="18" fill={color} />
				</clipPath>
			</defs>
		</svg>
	);
};

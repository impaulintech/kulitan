import { RightArrow } from "@/shared/icons/RightArrow";
import Link from "next/link";
import React from "react";

type Props = {
	children: any;
	buttonTitle?: any;
	link: string;
};

const Card = (props: Props) => {
	const { children, buttonTitle, link } = props;

	return (
		<div className="flex flex-col items-center justify-center w-full">
			<div className="bg-card w-full rounded-t-md ">
				<div className="transcribe-bg w-full h-full flex flex-col items-center justify-center py-3 bg-contain">
					{children}
				</div>
			</div>
			<Link href={link} className="w-full">
				<button className="bg-dark w-full flex gap-2 items-center justify-center relative py-2 rounded-b-md">
					<p className="w-full">{buttonTitle}</p>
					<RightArrow className="absolute right-4" />
				</button>
			</Link>
		</div>
	);
};

export default Card;

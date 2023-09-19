/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Maintenance from "@/shared/images/maintenance.png";
import Link from "next/link";
import Image from "next/image";

export default function Writing() {
	return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<p className="font-kulitan text-[20px] z-10">pa g su la t</p>
				</div>
				<div className="flex justify-center items-center h-screen pb-20">
					<Image
						src={Maintenance}
						alt="maintenance"
					/>
				</div>
			</div>
		</main>
	);
}

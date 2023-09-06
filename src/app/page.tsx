"use client";
import Link from "next/link";
import Image from "next/image";
import KapampanganFont from "@/shared/images/kapampangan-font.png";

import Card from "@/components/templates/Card";
import { Kapampangan } from "@/shared/icons/Kapampangan";

export default function Home() {
	return (
		<main className="min-h-screen min-w-screen flex flex-col items-start justify-start p-12 gap-12">
			<div className="w-full">
				<div className="flex-col flex-wrap max-w-[120px]">
					<p className="text-xl font-medium text-shadow">KU LIT AN</p>
					<p className="text-xl font-medium text-shadow font-kulitan flex gap-2 items-center justify-between -mt-2 max-w-[96px]">
						<span>KU</span>
						<span>LIT</span>
						<span>AN</span>
					</p>
				</div>
			</div>
			<div className="w-full flex flex-col gap-5">
				<Card
					link="transcribe"
					buttonTitle={
						<>
							Transcribe | <span className="font-kulitan">i lu lin</span>
						</>
					}
				>
					<Image
						src={KapampanganFont}
						alt="kapamapangan font"
						width={60}
						height={100}
					/>
					<p className="h-[30%] pt-2 text-shadow">kapampangan</p>
				</Card>
			</div>
			<footer className="absolute bottom-10 left-0 w-full flex items-center justify-center">
				<span className="font-kulitan text-dark opacity-50 font-bold text-[18px]">
					ka pang pang an
				</span>
			</footer>
		</main>
	);
}

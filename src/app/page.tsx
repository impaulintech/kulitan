"use client";
import Image from "next/image";

import Card from "@/components/templates/Card"; 
import KapampanganFont from "@/shared/images/kapampangan-font.png";
import KapampanganReading from "@/shared/images/reading.png";
import KapampanganWriting from "@/shared/images/writing.png";
import { useLayoutEffect } from "react";

export default function Home() {
	useLayoutEffect(()=>{
    const localStorageValue = localStorage.getItem('userData');
		console.log(!!localStorageValue);
		if (!!localStorageValue) return
		localStorage.setItem('userData', JSON.stringify({
			glyphsLearned: []
		}));
	}, [])

	return (
		<main className="min-h-screen min-w-screen flex flex-col items-start justify-start p-9 max-miniPhone:p-5 gap-12">
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
				<Card
					link="reading"
					buttonTitle={
						<>
							Reading | <span className="font-kulitan">pa g ba sa</span>
						</>
					}
				>
					<Image
						src={KapampanganReading}
						alt="reading" 
						className="py-5"
						width={300}
						height={300}
					/>
				</Card>
				<Card
					link="writing"
					buttonTitle={
						<>
							Writing | <span className="font-kulitan">pa g su la t</span>
						</>
					}
				>
					<Image
						src={KapampanganWriting}
						alt="writing"
						className="py-2"
						width={120}
						height={120}
					/>
				</Card>
			</div>
			<footer className="w-full flex items-center justify-center">
				<span className="font-kulitan text-dark opacity-50 font-bold text-[18px]">
					ka pang pang an
				</span>
			</footer>
		</main>
	);
}

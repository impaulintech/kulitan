"use client";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen min-w-screen flex- items-start justify-start p-12">
			<div className="header w-full">
				<div className="flex-col flex-wrap max-w-[120px]">
					<p className="text-xl font-medium shadow-font">KU LIT AN</p>
					<p className="text-xl font-medium font-kulitan flex gap-2 items-center justify-between -mt-2 max-w-[96px]">
						<span>KU</span>
						<span>LIT</span>
						<span>AN</span>
					</p>
				</div>
			</div>
		</main>
	);
}

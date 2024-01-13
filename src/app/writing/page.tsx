/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import KulitanGlyphs from "@/components/organisms/KulitanGlyphs";
import KulitanGlyphsCard from "@/components/templates/KulitanGlyphsCard";
import { BackArrow } from "@/shared/icons/BackArrow";
import Image from "next/image";
import Link from "next/link";

import useHooks from "@/components/organisms/KulitanGlyphs/hooks";
import { useState } from "react";

export default function Writing()
{
	const [isWritingBoardOpen, setIsWritingBoardOpen] = useState<boolean>(false);
	const [selectedGlyphsId, setSelectedGlyphsId] = useState<number>(0);
	const { glyphsObject } = useHooks();

	const Menu = () =>
	{
		return <div className="w-full grid grid-cols-3 gap-2 px-5 pb-10">
			{glyphsObject.map((g, i: number) =>
			{
				if (isWritingBoardOpen) return
				return <>
					<KulitanGlyphsCard
						buttonTitle={g.word}
						callBackFn={() => {
							setSelectedGlyphsId(i)
							setIsWritingBoardOpen(true)
						}}
					>
						<Image
							src={g.glyphs}
							alt="glyphs"
							width={100}
							height={100}
						/>
					</KulitanGlyphsCard>
				</>;
			})}
		</div>;
	};

	return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>
			<div className="w-full flex flex-col gap-6 items-center">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href={isWritingBoardOpen ? "#" : "/"} className="absolute left-5 z-10" onClick={() => {
						isWritingBoardOpen && setIsWritingBoardOpen(false)
					}}>
						<BackArrow />
					</Link>
					<p className="font-kulitan text-[20px] z-10">pa g su la t</p>
				</div>
				{isWritingBoardOpen ? <KulitanGlyphs selectedGlyphsId={selectedGlyphsId} setSelectedGlyphsId={setSelectedGlyphsId} /> : <Menu />}
			</div>
		</main>
	);
}

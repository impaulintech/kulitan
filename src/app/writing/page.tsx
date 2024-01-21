/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import KulitanGlyphs from "@/components/organisms/KulitanGlyphs";
import KulitanGlyphsCard from "@/components/templates/KulitanGlyphsCard";
import { BackArrow } from "@/shared/icons/BackArrow";
import Image from "next/image";
import Link from "next/link";

import useHooks from "@/components/organisms/KulitanGlyphs/hooks";
import { useEffect, useState } from "react";
import useWritingHooks from "./hooks";

export default function Writing()
{
	const [isWritingBoardOpen, setIsWritingBoardOpen] = useState<boolean>(false);
	const [selectedGlyphsId, setSelectedGlyphsId] = useState<number>(0);
	const { writeData, getData, userData, setUserData } = useWritingHooks();
	const { topScore, glyphsLearned } = userData || '{}';
	const { glyphsObject } = useHooks({ selectedGlyphsId, setSelectedGlyphsId, setUserData });
	const [percentageWidth, setPercentageWidth] = useState<number>(0);

	useEffect(() =>
	{
		setPercentageWidth(Math.ceil((glyphsLearned?.length / glyphsObject?.length) * 100));
	}, [glyphsLearned, glyphsObject, userData]);

	const Menu = () =>
	{
		return <div className="w-full grid grid-cols-3 gap-2 px-5 pb-10">
			{glyphsObject.map((g, i: number) =>
			{
				if (isWritingBoardOpen) return;
				return <KulitanGlyphsCard
					key={g.word}
					buttonTitle={g.word}
					callBackFn={() =>
					{
						setSelectedGlyphsId(i);
						setIsWritingBoardOpen(true);
						window.scrollTo({
							top: 0,
							behavior: 'smooth', 
						});
					}}
				>
					<Image
						src={g.glyphs}
						alt="glyphs"
						width={100}
						height={100}
						style={{
							height: 'auto',
							width: 'auto'
						}}
					/>
				</KulitanGlyphsCard>;
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
					<Link href={isWritingBoardOpen ? "#" : "/"} className="absolute left-5 z-10" onClick={() =>
					{
						isWritingBoardOpen && setIsWritingBoardOpen(false);
					}}>
						<BackArrow />
					</Link>
					<p className="font-kulitan text-[20px] z-10">pa g su la t</p>
				</div>

				{!isWritingBoardOpen && <div className="w-full px-5 flex-col gap-2">
					<h1 className="font-bold mb-2">Glyphs Learned</h1>
					<div className="flex relative">
						<h1 className={`font-bold bg-[#001C30] absolute z-20 top-0 left-0 rounded-full`} style={{width: `${percentageWidth}%`}}>&#x200B;</h1>
						<h1 className="font-bold bg-slate-300 text-end px-2 text-[#007A5A] rounded-full w-[100%]">&#x200B;</h1>
						<h1 className={`font-bold text-end px-2 absolute z-30 top-0 left-0 w-[100%] ${percentageWidth === 100 ? 'text-green-300' : 'text-[#007A5A]'}`}>{glyphsLearned?.length}/{glyphsObject?.length}</h1>
					</div>
				</div>}

				{!isWritingBoardOpen && <div className="w-full px-5 flex-col gap-2">
					<h1 className="font-bold mb-2">Top 3 Best Scores</h1>
					{glyphsLearned?.length < 5
						? <h1 className="w-full text-center bg-slate-500 p-5 rounded-md">You have to learn at least 5 Glyphs to unlock this feature</h1>
						: <div className="w-full grid grid-cols-3 gap-2 pb-10">
							{topScore?.map((ts: any) =>
							{
								if (isWritingBoardOpen) return;
								return <KulitanGlyphsCard
									key={ts?.word}
									buttonTitle={`${ts?.word} - ${ts?.score}`}
									hasIcon={false}
									callBackFn={() => { }}
									buttonClassName="bg-green-800"
								>
									<Image
										src={ts?.glyphs}
										alt="glyphs"
										width={100}
										height={100}
										style={{
											height: 'auto',
											width: 'auto'
										}}
									/>
								</KulitanGlyphsCard>;
							})}
						</div>}

				</div>}

				{!isWritingBoardOpen && <h1 className="w-full px-5 font-bold">Learn More Glyphs</h1>}
				{isWritingBoardOpen
					? <KulitanGlyphs
						selectedGlyphsId={selectedGlyphsId}
						setSelectedGlyphsId={setSelectedGlyphsId}
						setUserData={setUserData}
					/>
					: <Menu />}
			</div>
		</main>
	);
}

import { useRef, useState } from "react";

import None from "@/shared/images/writing/blank.png";
import Nga from "@/shared/images/writing/nga.png";
import NgaGuide from "@/shared/images/writing/nga-guide.png";
import NgaGlyphs from "@/shared/images/writing/nga-glyphs.png";

import O from "@/shared/images/writing/o.png";
import OGuide from "@/shared/images/writing/o-guide.png";
import OGlyphs from "@/shared/images/writing/o-glyphs.png";

import Daa from "@/shared/images/writing/daa.png";
import DaaGuide from "@/shared/images/writing/daa-guide.png";
import DaaGlyphs from "@/shared/images/writing/daa-glyphs.png";

type ImageSrc = {
	glyphsGuide: string;
	glyphs: string;
	guide: string;
};
type ImageIndex = {
	word: string;
	glyphsGuide: string;
	glyphs: string;
	guide: string;
};
type Image = ImageSrc | ImageIndex;

const useHooks = () => {
	const [onClick, setOnClick] = useState<string>("");
	const [isGuideOn, setIsGuideOn] = useState<boolean>(true);
	const [isGlyphsOn, setIsGlyphsOn] = useState<boolean>(true);
	const canvasRef: any = useRef(null);

	const handleUndo = () => {
		if (canvasRef.current) {
			canvasRef?.current?.undo();
		}
	};
	const handleClear = () => {
		if (canvasRef.current) {
			canvasRef?.current?.clear();
		}
	};
	const handleClick = (e: any) => {
		const target = e.target.value;

		switch (target) {
			case "prev":
				handleClear();
				setOnClick("");
				break;
			case "undo":
				handleUndo();
				setOnClick("");
				break;
			case "glyphs":
				setIsGlyphsOn(!isGlyphsOn);
				break;
			case "guide":
				setIsGuideOn(!isGuideOn);
				break;
			case "next":
				handleClear();
				setOnClick("");
				break;
			default:
				handleClear();
				setOnClick("");
				break;
		}
	};

	const getImageSrc = (path: Image): string => {
		const { glyphsGuide, glyphs, guide } = path;
		const imgSrc =
			(!isGlyphsOn && !isGuideOn && None.src) ||
			(isGlyphsOn && isGuideOn && glyphsGuide) ||
			(!isGlyphsOn && isGuideOn && guide) ||
			(isGlyphsOn && !isGuideOn && glyphs);
		return imgSrc || None.src;
	};
	const getGlyphsIndex = (glyphsObject: Image[], findWord: string) => {
		return glyphsObject.findIndex((word) => {
			if ("word" in word) {
				return word.word === findWord;
			}
			return false;
		});
	};

	const glyphsObject = [
		{
			word: "o",
			glyphsGuide: O.src,
			glyphs: OGlyphs.src,
			guide: OGuide.src,
		},
		{
			word: "dá",
			glyphsGuide: Daa.src,
			glyphs: DaaGlyphs.src,
			guide: DaaGuide.src,
		},
		{
			word: "nga",
			glyphsGuide: Nga.src,
			glyphs: NgaGlyphs.src,
			guide: NgaGuide.src,
		},
	];
	const totalGlyphs = glyphsObject.length;

	return {
		onClick,
		canvasRef,
		isGuideOn,
		isGlyphsOn,
		setOnClick,
		handleUndo,
		handleClick,
		setIsGuideOn,
		glyphsObject,
		getImageSrc,
		totalGlyphs,
		getGlyphsIndex,
	};
};

export default useHooks;

import { useEffect, useRef, useState } from "react";
import baseCoordinates from "./base.json"

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

interface Point {
	x: number;
	y: number;
}

const useHooks = () => {
	const [onClick, setOnClick] = useState<string>("");
	const [isGuideOn, setIsGuideOn] = useState<boolean>(true);
	const [isGlyphsOn, setIsGlyphsOn] = useState<boolean>(true);
	const canvasRef: any = useRef(null);
	const [userCoordinates, setUserCoordinates] = useState<Point[]>([]);

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
	const handleGetData = () => {
		if (canvasRef.current) {
			return canvasRef?.current?.getSaveData();
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

	useEffect(() => {
		// console.log(baseCoordinates.length);
		// console.log(JSON.stringify(convertCoordinates(baseCoordinates)));
		const g = gradeUserCoordinates(userCoordinates, baseCoordinates, 100);
		console.log(g);
		// window.alert(`Score: ${g.percentage}/${g.scoreOverTotal}. \nMessage: ${g.message}`)
	}, [userCoordinates]);

	// console.log(baseCoordinates);
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
		handleGetData,
		setUserCoordinates,
	};
};

export default useHooks;

function convertCoordinates(coordinates: number[][]): Point[] {
	const convertedData: Point[] = coordinates.map(([x, y]: number[]) => ({
		x,y,
	}));
	return convertedData;
}

function calculateDistance(point1: Point, point2: Point): number {
	return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

function gradeUserCoordinates(
  userCoordinates: Point[],
  baseCoordinates: Point[],
  maxScore: number = 100,
  coverageThreshold: number = 0.6 
): {
  percentage: number;
  scoreOverTotal: number;
  message: string;
} {
  if (userCoordinates.length === 0 
		|| userCoordinates.length / baseCoordinates.length < coverageThreshold) {
    return {
      percentage: 0,
      scoreOverTotal: maxScore,
			message: 'Please follow the guide to draw the Glyphs correctly.'
    };
  }

  let totalDistance = 0;

  userCoordinates.forEach((userPoint) => {
    const nearestReferencePoint = baseCoordinates.reduce(
      (minPoint, refPoint) => {
        const distance = calculateDistance(userPoint, refPoint);
        return distance < calculateDistance(userPoint, minPoint)
          ? refPoint
          : minPoint;
      },
      baseCoordinates[0],
    );

    const distance = calculateDistance(userPoint, nearestReferencePoint);
    totalDistance += distance;
  });

  const averageDistance = totalDistance / userCoordinates.length;
  const percentage = Math.ceil((maxScore - averageDistance) / maxScore * 100);

  if (percentage < 50) {
    return {
      percentage,
      scoreOverTotal: maxScore,
			message: 'Please follow the guide to draw the Glyphs correctly.'
    };
  }

	const score = parseFloat(percentage.toFixed(2));

  return {
    percentage: score > 95 ? maxScore : score,
    scoreOverTotal: maxScore,
		message: 'You did it! Congratulations you\'ve learned a new Glyphs!'
  };
}

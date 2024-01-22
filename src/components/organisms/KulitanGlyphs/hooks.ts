import { useEffect, useRef, useState } from "react";

import None from "@/shared/images/writing/blank.png";

import Nga from "@/shared/images/writing/nga.png";
import NgaGuide from "@/shared/images/writing/nga-guide.png";
import NgaGlyphs from "@/shared/images/writing/nga-glyphs.png";
import ngaCoordinates from "@/shared/lib/nga.json";

import O from "@/shared/images/writing/o.png";
import OGuide from "@/shared/images/writing/o-guide.png";
import OGlyphs from "@/shared/images/writing/o-glyphs.png";
import oCoordinates from "@/shared/lib/o.json";

import Daa from "@/shared/images/writing/daa.png";
import DaaGuide from "@/shared/images/writing/daa-guide.png";
import DaaGlyphs from "@/shared/images/writing/daa-glyphs.png";
import daaCoordinates from "@/shared/lib/daa.json";

import I from "@/shared/images/writing/i.png";
import IGuide from "@/shared/images/writing/i-guide.png";
import IGlyphs from "@/shared/images/writing/i-glyphs.png";
import ICoordinates from "@/shared/lib/i.json";

import U from "@/shared/images/writing/u.png";
import UGuide from "@/shared/images/writing/u-guide.png";
import UGlyphs from "@/shared/images/writing/u-glyphs.png";
import UCoordinates from "@/shared/lib/u.json";

import A from "@/shared/images/writing/a.png";
import AGuide from "@/shared/images/writing/a-guide.png";
import AGlyphs from "@/shared/images/writing/a-glyphs.png";
import ACoordinates from "@/shared/lib/a.json";

import Taa from "@/shared/images/writing/taa.png";
import TaaGuide from "@/shared/images/writing/taa-guide.png";
import TaaGlyphs from "@/shared/images/writing/taa-glyphs.png";
import TaaCoordinates from "@/shared/lib/taa.json";

import Naa from "@/shared/images/writing/naa.png";
import NaaGuide from "@/shared/images/writing/naa-guide.png";
import NaaGlyphs from "@/shared/images/writing/naa-glyphs.png";
import NaaCoordinates from "@/shared/lib/naa.json";

import Maa from "@/shared/images/writing/maa.png";
import MaaGuide from "@/shared/images/writing/maa-guide.png";
import MaaGlyphs from "@/shared/images/writing/maa-glyphs.png";
import MaaCoordinates from "@/shared/lib/maa.json";

import Saa from "@/shared/images/writing/saa.png";
import SaaGuide from "@/shared/images/writing/saa-guide.png";
import SaaGlyphs from "@/shared/images/writing/saa-glyphs.png";
import SaaCoordinates from "@/shared/lib/saa.json";

import Gaa from "@/shared/images/writing/gaa.png";
import GaaGuide from "@/shared/images/writing/gaa-guide.png";
import GaaGlyphs from "@/shared/images/writing/gaa-glyphs.png";
import GaaCoordinates from "@/shared/lib/gaa.json";

import Paa from "@/shared/images/writing/paa.png";
import PaaGuide from "@/shared/images/writing/paa-guide.png";
import PaaGlyphs from "@/shared/images/writing/paa-glyphs.png";
import PaaCoordinates from "@/shared/lib/paa.json";

import Kaa from "@/shared/images/writing/kaa.png";
import KaaGuide from "@/shared/images/writing/kaa-guide.png";
import KaaGlyphs from "@/shared/images/writing/kaa-glyphs.png";
import KaaCoordinates from "@/shared/lib/kaa.json";

import Ngaa from "@/shared/images/writing/ngaa.png";
import NgaaGuide from "@/shared/images/writing/ngaa-guide.png";
import NgaaGlyphs from "@/shared/images/writing/ngaa-glyphs.png";
import NgaaCoordinates from "@/shared/lib/ngaa.json";

import Laa from "@/shared/images/writing/laa.png";
import LaaGuide from "@/shared/images/writing/laa-guide.png";
import LaaGlyphs from "@/shared/images/writing/laa-glyphs.png";
import LaaCoordinates from "@/shared/lib/laa.json";

import Baa from "@/shared/images/writing/baa.png";
import BaaGuide from "@/shared/images/writing/baa-guide.png";
import BaaGlyphs from "@/shared/images/writing/baa-glyphs.png";
import BaaCoordinates from "@/shared/lib/baa.json";

import Ga from "@/shared/images/writing/ga.png";
import GaGuide from "@/shared/images/writing/ga-guide.png";
import GaGlyphs from "@/shared/images/writing/ga-glyphs.png";
import GaCoordinates from "@/shared/lib/ga.json";

import Sa from "@/shared/images/writing/sa.png";
import SaGuide from "@/shared/images/writing/sa-guide.png";
import SaGlyphs from "@/shared/images/writing/sa-glyphs.png";
import SaCoordinates from "@/shared/lib/sa.json";

import Da from "@/shared/images/writing/da.png";
import DaGuide from "@/shared/images/writing/da-guide.png";
import DaGlyphs from "@/shared/images/writing/da-glyphs.png";
import DaCoordinates from "@/shared/lib/da.json";

import Ma from "@/shared/images/writing/ma.png";
import MaGuide from "@/shared/images/writing/ma-guide.png";
import MaGlyphs from "@/shared/images/writing/ma-glyphs.png";
import MaCoordinates from "@/shared/lib/ma.json";

import Ba from "@/shared/images/writing/ba.png";
import BaGuide from "@/shared/images/writing/ba-guide.png";
import BaGlyphs from "@/shared/images/writing/ba-glyphs.png";
import BaCoordinates from "@/shared/lib/ba.json";

import La from "@/shared/images/writing/la.png";
import LaGuide from "@/shared/images/writing/la-guide.png";
import LaGlyphs from "@/shared/images/writing/la-glyphs.png";
import LaCoordinates from "@/shared/lib/la.json";

import Mi from "@/shared/images/writing/mi.png";
import MiGuide from "@/shared/images/writing/mi-guide.png";
import MiGlyphs from "@/shared/images/writing/mi-glyphs.png";
import MiCoordinates from "@/shared/lib/mi.json";

import Bi from "@/shared/images/writing/bi.png";
import BiGuide from "@/shared/images/writing/bi-guide.png";
import BiGlyphs from "@/shared/images/writing/bi-glyphs.png";
import BiCoordinates from "@/shared/lib/bi.json";

import Gi from "@/shared/images/writing/gi.png";
import GiGuide from "@/shared/images/writing/gi-guide.png";
import GiGlyphs from "@/shared/images/writing/gi-glyphs.png";
import GiCoordinates from "@/shared/lib/gi.json";

import Ngi from "@/shared/images/writing/ngi.png";
import NgiGuide from "@/shared/images/writing/ngi-guide.png";
import NgiGlyphs from "@/shared/images/writing/ngi-glyphs.png";
import NgiCoordinates from "@/shared/lib/ngi.json";

import Ni from "@/shared/images/writing/ni.png";
import NiGuide from "@/shared/images/writing/ni-guide.png";
import NiGlyphs from "@/shared/images/writing/ni-glyphs.png";
import NiCoordinates from "@/shared/lib/ni.json";

import Ti from "@/shared/images/writing/ti.png";
import TiGuide from "@/shared/images/writing/ti-guide.png";
import TiGlyphs from "@/shared/images/writing/ti-glyphs.png";
import TiCoordinates from "@/shared/lib/ti.json";

import Ki from "@/shared/images/writing/ki.png";
import KiGuide from "@/shared/images/writing/ki-guide.png";
import KiGlyphs from "@/shared/images/writing/ki-glyphs.png";
import KiCoordinates from "@/shared/lib/ki.json";

import Di from "@/shared/images/writing/di.png";
import DiGuide from "@/shared/images/writing/di-guide.png";
import DiGlyphs from "@/shared/images/writing/di-glyphs.png";
import DiCoordinates from "@/shared/lib/di.json";

import Si from "@/shared/images/writing/si.png";
import SiGuide from "@/shared/images/writing/si-guide.png";
import SiGlyphs from "@/shared/images/writing/si-glyphs.png";
import SiCoordinates from "@/shared/lib/si.json";

import Pi from "@/shared/images/writing/pi.png";
import PiGuide from "@/shared/images/writing/pi-guide.png";
import PiGlyphs from "@/shared/images/writing/pi-glyphs.png";
import PiCoordinates from "@/shared/lib/pi.json";

import Bii from "@/shared/images/writing/bii.png";
import BiiGuide from "@/shared/images/writing/bii-guide.png";
import BiiGlyphs from "@/shared/images/writing/bii-glyphs.png";
import BiiCoordinates from "@/shared/lib/bii.json";

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

type Props = {
	selectedGlyphsId: number;
	setSelectedGlyphsId: (val: number) => void;
	setUserData: any;
};

const useHooks = (props: Props) => {
	const { selectedGlyphsId, setSelectedGlyphsId, setUserData } = props || {};
	const [onClick, setOnClick] = useState<string>("");
	const [isGuideOn, setIsGuideOn] = useState<boolean>(true);
	const [isGlyphsOn, setIsGlyphsOn] = useState<boolean>(true);
	const canvasRef: any = useRef(null);
	const [touchCount, setTouchCount] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [toggleModal, setToggleModal] = useState<boolean>(false);
	const [topScore, setTopScore] = useState<any>();
	const [score, setScore] = useState<any>();

	const glyphsObject = [
		{
			word: "a",
			glyphsGuide: A.src,
			glyphs: AGlyphs.src,
			guide: AGuide.src,
			touchCount: 2,
			coordinates: ACoordinates,
		},
		{
			word: "i",
			glyphsGuide: I.src,
			glyphs: IGlyphs.src,
			guide: IGuide.src,
			touchCount: 1,
			coordinates: ICoordinates,
		},
		{
			word: "o",
			glyphsGuide: O.src,
			glyphs: OGlyphs.src,
			guide: OGuide.src,
			touchCount: 3,
			coordinates: oCoordinates,
		},
		{
			word: "u",
			glyphsGuide: U.src,
			glyphs: UGlyphs.src,
			guide: UGuide.src,
			touchCount: 1,
			coordinates: UCoordinates,
		},
		{
			word: "dá",
			glyphsGuide: Daa.src,
			glyphs: DaaGlyphs.src,
			guide: DaaGuide.src,
			touchCount: 4,
			coordinates: daaCoordinates,
		},
		{
			word: "tá",
			glyphsGuide: Taa.src,
			glyphs: TaaGlyphs.src,
			guide: TaaGuide.src,
			touchCount: 3,
			coordinates: TaaCoordinates,
		},
		{
			word: "ná",
			glyphsGuide: Naa.src,
			glyphs: NaaGlyphs.src,
			guide: NaaGuide.src,
			touchCount: 4,
			coordinates: NaaCoordinates,
		},
		{
			word: "má",
			glyphsGuide: Maa.src,
			glyphs: MaaGlyphs.src,
			guide: MaaGuide.src,
			touchCount: 4,
			coordinates: MaaCoordinates,
		},
		{
			word: "sá",
			glyphsGuide: Saa.src,
			glyphs: SaaGlyphs.src,
			guide: SaaGuide.src,
			touchCount: 3,
			coordinates: SaaCoordinates,
		},
		{
			word: "gá",
			glyphsGuide: Gaa.src,
			glyphs: GaaGlyphs.src,
			guide: GaaGuide.src,
			touchCount: 3,
			coordinates: GaaCoordinates,
		},
		{
			word: "pá",
			glyphsGuide: Paa.src,
			glyphs: PaaGlyphs.src,
			guide: PaaGuide.src,
			touchCount: 4,
			coordinates: PaaCoordinates,
		},
		{
			word: "ká",
			glyphsGuide: Kaa.src,
			glyphs: KaaGlyphs.src,
			guide: KaaGuide.src,
			touchCount: 4,
			coordinates: KaaCoordinates,
		},
		{
			word: "ngá",
			glyphsGuide: Ngaa.src,
			glyphs: NgaaGlyphs.src,
			guide: NgaaGuide.src,
			touchCount: 4,
			coordinates: NgaaCoordinates,
		},
		{
			word: "lá",
			glyphsGuide: Laa.src,
			glyphs: LaaGlyphs.src,
			guide: LaaGuide.src,
			touchCount: 4,
			coordinates: LaaCoordinates,
		},
		{
			word: "bá",
			glyphsGuide: Baa.src,
			glyphs: BaaGlyphs.src,
			guide: BaaGuide.src,
			touchCount: 3,
			coordinates: BaaCoordinates,
		},
		{
			word: "ga",
			glyphsGuide: Ga.src,
			glyphs: GaGlyphs.src,
			guide: GaGuide.src,
			touchCount: 1,
			coordinates: GaCoordinates,
		},
		{
			word: "sa",
			glyphsGuide: Sa.src,
			glyphs: SaGlyphs.src,
			guide: SaGuide.src,
			touchCount: 1,
			coordinates: SaCoordinates,
		},
		{
			word: "da",
			glyphsGuide: Da.src,
			glyphs: DaGlyphs.src,
			guide: DaGuide.src,
			touchCount: 2,
			coordinates: DaCoordinates,
		},
		{
			word: "ma",
			glyphsGuide: Ma.src,
			glyphs: MaGlyphs.src,
			guide: MaGuide.src,
			touchCount: 2,
			coordinates: MaCoordinates,
		},
		{
			word: "ba",
			glyphsGuide: Ba.src,
			glyphs: BaGlyphs.src,
			guide: BaGuide.src,
			touchCount: 1,
			coordinates: BaCoordinates,
		},
		{
			word: "la",
			glyphsGuide: La.src,
			glyphs: LaGlyphs.src,
			guide: LaGuide.src,
			touchCount: 2,
			coordinates: LaCoordinates,
		},
		{
			word: "nga",
			glyphsGuide: Nga.src,
			glyphs: NgaGlyphs.src,
			guide: NgaGuide.src,
			touchCount: 2,
			coordinates: ngaCoordinates,
		},
		{
			word: "mi",
			glyphsGuide: Mi.src,
			glyphs: MiGlyphs.src,
			guide: MiGuide.src,
			touchCount: 3,
			coordinates: MiCoordinates,
		},
		{
			word: "bi",
			glyphsGuide: Bi.src,
			glyphs: BiGlyphs.src,
			guide: BiGuide.src,
			touchCount: 2,
			coordinates: BiCoordinates,
		},
		{
			word: "gi",
			glyphsGuide: Gi.src,
			glyphs: GiGlyphs.src,
			guide: GiGuide.src,
			touchCount: 2,
			coordinates: GiCoordinates,
		},
		{
			word: "ngi",
			glyphsGuide: Ngi.src,
			glyphs: NgiGlyphs.src,
			guide: NgiGuide.src,
			touchCount: 3,
			coordinates: NgiCoordinates,
		},
		{
			word: "ni",
			glyphsGuide: Ni.src,
			glyphs: NiGlyphs.src,
			guide: NiGuide.src,
			touchCount: 3,
			coordinates: NiCoordinates,
		},
		{
			word: "ti",
			glyphsGuide: Ti.src,
			glyphs: TiGlyphs.src,
			guide: TiGuide.src,
			touchCount: 2,
			coordinates: TiCoordinates,
		},
		{
			word: "ki",
			glyphsGuide: Ki.src,
			glyphs: KiGlyphs.src,
			guide: KiGuide.src,
			touchCount: 3,
			coordinates: KiCoordinates,
		},
		{
			word: "di",
			glyphsGuide: Di.src,
			glyphs: DiGlyphs.src,
			guide: DiGuide.src,
			touchCount: 3,
			coordinates: DiCoordinates,
		},
		{
			word: "si",
			glyphsGuide: Si.src,
			glyphs: SiGlyphs.src,
			guide: SiGuide.src,
			touchCount: 2,
			coordinates: SiCoordinates,
		},
		{
			word: "pi",
			glyphsGuide: Pi.src,
			glyphs: PiGlyphs.src,
			guide: PiGuide.src,
			touchCount: 3,
			coordinates: PiCoordinates,
		},
		{
			word: "bí",
			glyphsGuide: Bii.src,
			glyphs: BiiGlyphs.src,
			guide: BiiGuide.src,
			touchCount: 3,
			coordinates: BiiCoordinates,
		},
	];
	const totalGlyphs = glyphsObject.length;
	const selectedWord = glyphsObject[selectedGlyphsId]?.word;
	const selectedGlyphs = glyphsObject[selectedGlyphsId]?.glyphs;
	const selectedTouchCount = glyphsObject[selectedGlyphsId]?.touchCount;
	const selectedCoordinates = glyphsObject[selectedGlyphsId]?.coordinates;
	const touchLimit = touchCount === selectedTouchCount;
	const isLastGlyphs = totalGlyphs === selectedGlyphsId + 1;

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
				setTouchCount(0);
				break;
			case "undo":
				handleUndo();
				setOnClick("");
				if (touchCount === 0) return;
				setTouchCount(touchCount - 1);
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
				setTouchCount(0);
				break;
			default:
				handleClear();
				setOnClick("");
				setTouchCount(0);
				break;
		}
	};
	const handleGetData = () => {
		if (canvasRef.current) {
			return canvasRef?.current?.getSaveData();
		}
	};
	const handleTouchPoint = () => {
		if (touchLimit) return;
		setTouchCount(touchCount + 1);
	};
	const handleRetry = () => {
		setTouchCount(0);
		handleClear();
		setToggleModal(false);
	};
	const handleContinue = () => {
		setTouchCount(0);
		handleClear();
		setToggleModal(false);
		if (isLastGlyphs) return;
		setSelectedGlyphsId(selectedGlyphsId + 1);
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

	useEffect(() => {
		if (!touchLimit) return;

		const coordinates = JSON.parse(handleGetData());
		const mapCoordinates = coordinates.lines.map((c: any) => {
			return c.points;
		});
		const mergedCoordinates = [].concat.apply([], mapCoordinates);

		const score = gradeUserCoordinates(
			mergedCoordinates,
			selectedCoordinates,
			100,
			selectedTouchCount < 4 ? 0.3 : 0.6,
		);

		setIsLoading(true);
		setScore(score);

		const updateGlyphsLearned = (newEntry: any) => {
			const storedData = JSON.parse(localStorage.getItem('userData') || '{}');
			const glyphsLearned = storedData?.glyphsLearned || [];

			const existingIndex = glyphsLearned.findIndex(
				(entry: any) => entry.word === newEntry.word,
			);

			if (existingIndex === -1) {
				glyphsLearned.push(newEntry);
			} else {
				glyphsLearned[existingIndex] = newEntry;
			}

			let topThreeGlyphs = [];
			if (storedData?.glyphsLearned.length >= 5) {
				const sortedGlyphsLearned = storedData.glyphsLearned.sort(
					(a: any, b: any) => b.score - a.score,
				);
				topThreeGlyphs = sortedGlyphsLearned.slice(0, 3);
			}

			
			localStorage.setItem('userData', JSON.stringify({ glyphsLearned }));
			setUserData({
				glyphsLearned,
				topScore: topThreeGlyphs,
			});
		};

		updateGlyphsLearned({
			word: selectedWord,
			glyphs: selectedGlyphs,
			score: score.percentage,
		});

		setTimeout(() => {
			setIsLoading(false);
			setToggleModal(true);
		}, Math.floor(Math.random() * (900 - 300 + 1) + 300));

		return () => {
			setScore({});
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCoordinates, touchLimit, selectedTouchCount]);

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
		handleTouchPoint,
		touchCount,
		selectedTouchCount,
		touchLimit,
		isLoading,
		toggleModal,
		setToggleModal,
		handleRetry,
		handleContinue,
		isLastGlyphs,
		score,
		topScore,
		setTopScore,
	};
};

export default useHooks;

function convertCoordinates(coordinates: number[][]): Point[] {
	const convertedData: Point[] = coordinates.map(([x, y]: number[]) => ({
		x,
		y,
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
	coverageThreshold: number = 0.2,
): {
	percentage: number;
	scoreOverTotal: number;
	message: string;
} {
	if (
		userCoordinates.length === 0 ||
		userCoordinates.length / baseCoordinates.length < 0.2
	) {
		return {
			percentage: Math.floor(Math.random() * (50 - 10 + 1) + 10),
			scoreOverTotal: maxScore,
			message: "Please follow the guide to draw the Glyphs correctly.",
		};
	}
	if (
		userCoordinates.length === 0 ||
		userCoordinates.length / baseCoordinates.length < coverageThreshold
	) {
		return {
			percentage: Math.floor(Math.random() * (50 - 20 + 1) + 20),
			scoreOverTotal: maxScore,
			message: "Please follow the guide lines to draw the Glyphs correctly.",
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
	const percentage = Math.ceil(((maxScore - averageDistance) / maxScore) * 100);

	if (percentage < 50) {
		return {
			percentage,
			scoreOverTotal: maxScore,
			message: "Please follow the guide to draw the Glyphs correctly.",
		};
	}

	const score = parseFloat(percentage.toFixed(2));

	return {
		percentage: score,
		scoreOverTotal: maxScore,
		message: "You did it! Congratulations you've learned a new Glyphs!",
	};
}

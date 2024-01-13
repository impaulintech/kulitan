/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import useHooks from "./hooks";

import CanvasDraw from "react-canvas-draw";

export default function KulitanGlyphs({
  selectedGlyphsId,
  setSelectedGlyphsId }: {
    selectedGlyphsId: number;
    setSelectedGlyphsId: (id: number) => void;
  })
{
  const {
    onClick,
    canvasRef,
    isGuideOn,
    isGlyphsOn,
    setOnClick,
    handleClick,
    glyphsObject,
    getImageSrc,
    totalGlyphs,
  } = useHooks();
  const imgSrc = getImageSrc(glyphsObject[selectedGlyphsId]);
  const word = glyphsObject[selectedGlyphsId].word;
  const prevPage = selectedGlyphsId -1;
  const nextPage = selectedGlyphsId +1;

  return (
    <div className="flex flex-col justify-start items-center h-screen gap-5 min-w-[360px] max-w-[600px]">
      <h1 style={{
        textShadow: "6px 6px 0px rgba(0, 0, 0, 0.25)",
        WebkitTextStroke: "2px black",
        fontWeight: "bold"
      }} className="text-[63px] font-semibold text-stroke text-stroke-black mb-5" >{word}</h1>
      <div className="w-full flex justify-center items-center min-h-[300px] bg-red-50 rounded-md text-slate-900">
        <CanvasDraw
          lazyRadius={3}
          ref={canvasRef}
          imgSrc={imgSrc as string}
          style={{ borderRadius: '10px' }}
          hideGrid
          immediateLoading
          hideInterface
          canvasWidth={360}
          canvasHeight={360}
          brushColor="#001C30"
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <button
          onClick={(e) =>
          {
            setSelectedGlyphsId(prevPage);
            handleClick(e);
          }}
          onMouseDown={() => setOnClick('prev')}
          className={`
          py-2 px-4 rounded-md font-medium text-slate-100
          ${onClick === 'prev' ? 'bg-slate-700' : 'bg-slate-900'}
          ${selectedGlyphsId <= 0 && 'opacity-60'}
        `}
          value="prev"
          disabled={selectedGlyphsId <= 0}
        ><BackArrow /></button>
        <button
          onClick={handleClick}
          onMouseDown={() => setOnClick('undo')}
          className={`
          py-1 px-3 rounded-md font-medium text-slate-100
          ${onClick === 'undo' ? 'bg-gray-600 border border-gray-600' : 'border border-slate-900'}
        `}
          value="undo"
          suppressHydrationWarning={true}
        >undo</button>
        <button
          onClick={handleClick}
          className={`
          py-1 px-3 rounded-md font-medium text-slate-100
          ${isGlyphsOn ? 'bg-green-600 border border-green-600' : 'border border-slate-900'}
        `}
          value="glyphs"
        >glyphs</button>
        <button
          onClick={handleClick}
          className={`
          py-1 px-3 rounded-md font-medium text-slate-100
          ${isGuideOn ? 'bg-green-600 border border-green-600' : 'border border-slate-900'}
        `}
          value="guide"
        >guide</button>
        <button
          onClick={(e) =>
          {
            setSelectedGlyphsId(nextPage);
            handleClick(e);
          }}
          onMouseDown={() => setOnClick('next')}
          className={`
          py-2 px-4 rounded-md font-medium text-slate-100 rotate-180	
          ${onClick === 'next' ? 'bg-slate-700' : 'bg-slate-900'}
          ${(selectedGlyphsId + 1) >= totalGlyphs && 'opacity-60'}
        `}
          value="next"
          disabled={(selectedGlyphsId + 1) >= totalGlyphs}
        ><BackArrow /></button>
      </div>
    </div>
  );
}

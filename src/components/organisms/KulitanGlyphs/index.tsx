/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import useHooks from "./hooks";

import CanvasDraw from "react-canvas-draw";
import { useKulitanContext } from "@/context/kulitan-context";
import LoadingSpinner from "@/components/atoms/LoadingSpinner";
import { CloseButton } from "@/shared/icons/CloseButton";

export default function KulitanGlyphs({
  selectedGlyphsId,
  setSelectedGlyphsId,
  setUserData }: {
    selectedGlyphsId: number;
    setSelectedGlyphsId: (id: number) => void;
    setUserData: any
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
    handleTouchPoint,
    touchLimit,
    touchCount,
    selectedTouchCount,
    isLoading,
    toggleModal,
    setToggleModal,
    handleRetry,
    handleContinue,
    isLastGlyphs,
    score,
  } = useHooks({ selectedGlyphsId, setSelectedGlyphsId, setUserData });
  const { isMobilePhone } = useKulitanContext();
  const { message, scoreOverTotal, percentage } = score || {};
  const imgSrc = getImageSrc(glyphsObject[selectedGlyphsId]);
  const word = glyphsObject[selectedGlyphsId].word;
  const prevPage = selectedGlyphsId - 1;
  const nextPage = selectedGlyphsId + 1;

  return (
    <div className="flex flex-col justify-start items-center h-screen gap-5 min-w-[360px] max-w-[600px]">

      {toggleModal && <div className="w-full h-full absolute top-0 left-0 z-50 flex justify-center items-center">
        <div onClick={() => setToggleModal(false)} className="bg-[#001C30] opacity-75 w-full h-full absolute z-20"></div>
        <div className="bg-slate-50 min-h-[360px] w-[360px] rounded-lg z-30 relative flex flex-col gap-3 justify-center items-center">
          <div onClick={() => setToggleModal(false)} className="text-slate-900 absolute top-0 right-0 mr-2 mt-2">
            <CloseButton />
          </div>
          <div className="text-green-600 font-bold text-[60px]">
            {percentage}/{scoreOverTotal}
          </div>
          <div className="text-slate-700 font-bold text-[18px] text-center px-5">
            {message}
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <button onClick={handleRetry} className="bg-slate-700 py-2 px-5 rounded-md">Retry</button>
            <button
              onClick={handleContinue}
              disabled={isLastGlyphs}
              className={`bg-green-700 py-2 px-5 rounded-md ${isLastGlyphs && 'opacity-60 cursor-not-allowed'}`}>
              Continue
            </button>
          </div>
        </div>
      </div>}

      <h1 style={{
        textShadow: "6px 6px 0px rgba(0, 0, 0, 0.25)",
        WebkitTextStroke: "2px black",
        fontWeight: "bold"
      }} className="text-[63px] font-semibold text-stroke text-stroke-black mb-5" >{word}</h1>
      <div
        onTouchEnd={isMobilePhone ? handleTouchPoint : undefined}
        onMouseUp={!isMobilePhone ? handleTouchPoint : undefined}
        className="relative w-full flex justify-center items-center min-h-[360px] bg-red-50 rounded-md text-slate-900"
      >
        {isLoading && <div className="flex flex-col justify-center items-center absolute z-30 bg-slate-50 w-full h-full">
          <LoadingSpinner />
          <h1 className="mt-5 font-medium">Calculating Score...</h1>
        </div>}

        <span className="absolute text-slate-500 z-20 top-0 left-0 p-5 font-medium">
          Strokes left: <span className="text-slate-900">{selectedTouchCount - touchCount}</span>
        </span>
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
          disabled={touchLimit}
          brushRadius={9}
        />
      </div>
      <div className="flex justify-between items-center w-full px-5">
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
        >
          <BackArrow />
        </button>

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
        >
          <BackArrow />
        </button>
      </div>
    </div>
  );
}

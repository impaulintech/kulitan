import { RightArrow } from "@/shared/icons/RightArrow";
import React from "react";

type Props = {
  children: any;
  buttonTitle?: any;
  callBackFn: () => void;
  hasIcon?: boolean
  buttonClassName?: string
};

const KulitanGlyphsCard = (props: Props) =>
{
  const { children, buttonTitle, callBackFn, hasIcon = true, buttonClassName } = props;

  return (
    <div className="flex flex-col items-center justify-center w-full" onClick={callBackFn}>
      <div className="bg-card w-full rounded-t-md ">
        <div className="transcribe-bg w-full h-full flex flex-col items-center justify-center py-1 bg-contain">
          {children}
        </div>
      </div>
      <button className={`bg-dark w-full flex gap-2 items-center justify-center relative min-h-[20px] rounded-b-md ${buttonClassName}`}>
        <p className="w-full">{buttonTitle}</p>
        { hasIcon && <RightArrow className="absolute right-2" width="15" />}
      </button>
    </div>
  );
};

export default KulitanGlyphsCard;

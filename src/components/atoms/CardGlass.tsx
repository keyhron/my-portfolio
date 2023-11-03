import { ReactNode } from "react";

const CardGlass = ({
  children,
  className,
  classNameContainer,
  dotBlue,
  dotRed,
  dotYellow,
  dotsPink,
}: {
  children: ReactNode;
  className?: string;
  classNameContainer?: string;
  dotBlue?: boolean;
  dotRed?: boolean;
  dotYellow?: boolean;
  dotsPink?: boolean;
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200 dark:border-black ${classNameContainer}`}
    >
      {dotBlue && (
        <div className="absolute -z-10 bg-cardBlue w-[44%] h-[44%] -right-[15%] -top-[3%]" />
      )}
      {dotRed && (
        <div className="absolute -z-20 bg-cardRed w-[58%] h-[58%] -right-[9%] -bottom-[24%]" />
      )}
      {dotYellow && (
        <div className="absolute -z-20 bg-cardYellow w-[44%] h-[44%]  -left-[4%] -top-[4%]" />
      )}
      {dotsPink && (
        <>
          {/* <div className="absolute -z-10 bg-cardPink w-[44%] h-[44%] -right-[19%] -top-[7%]" /> */}
          <div className="absolute -z-20 bg-cardPink w-[58%] h-[58%] -right-[9%] -bottom-[24%]" />
          <div className="absolute -z-20 bg-cardPink w-[44%] h-[44%]  -left-[4%] -top-[4%]" />
        </>
      )}

      <div
        className={`w-full h-full bg-[#ffffff78] dark:bg-[#1d1b1e8d] backdrop-blur-lg ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default CardGlass;


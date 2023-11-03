import { DetailedHTMLProps, HTMLAttributes } from "react";

const Container = ({
  className,
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={`container mx-auto w-full px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;


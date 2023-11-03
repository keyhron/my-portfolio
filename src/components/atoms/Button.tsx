import { ButtonHTMLAttributes } from "react";

const Button = ({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-slate-600 dark:bg-white text-white dark:text-black hover:bg-slate-800 hover:dark:bg-slate-600 hover:dark:text-white flex items-center rounded-lg py-1 px-3 xl:p-2 xl:px-5 font-semibold text-[10px] xl:text-sm mt-3 transition-colors  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


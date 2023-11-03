const Label = ({ children, className, ...props }: any) => (
  <h4
    className={`font-urbanist text-slate-800 dark:text-slate-200 font-bold text-sm md:text-3xl w-max mb-5 ${className}`}
    {...props}
  >
    {children}
    <div className="h-[3px] bg-pink-500 w-10/12 rounded-sm mt-2" />
  </h4>
);

export default Label;


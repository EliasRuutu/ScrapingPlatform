import { ReactHTML } from "react";

interface ButtonPropsType {
  variant: "fill" | "outline";
  color: string;
  children: string|React.ReactNode|null;
  className?: string,
  onClick: (e:any)=>void
}
const Button: React.FC<ButtonPropsType> = ({ variant, color, children, className, onClick }) => {
  const baseClasses: string = `w-full rounded-full p-[11px] outline-none text-[12px] ${className}`;
  const variantClasses: string =
    variant === "fill"
      ? `bg-[${color}] text-white`
      : `border-[${color}] border-[1px] text-[${color}]`;
  return (
    <div className="w-full">
      <button onClick={(e)=>onClick(e)} className={`${baseClasses} ${variantClasses}`}>{children}</button>
    </div>
  );
};
export default Button;

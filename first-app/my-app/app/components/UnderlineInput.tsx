import { ChangeEventHandler } from "react";

interface UnderlineButtonPropsType {
  width?: string;
  onChange?: ChangeEventHandler;
  placeholder?: string;
  classNames?:string
}
const UnderlineInput: React.FC<UnderlineButtonPropsType> = ({
  width = "w-full",
  onChange,
  placeholder,
  classNames
}) => {
  return (
    <div className={`${width} ${classNames}`}>
      <input
        className=" transition-all w-full border-[transparent] border-b-[1px] border-b-[#454545] outline-none px-5 py-1 focus:border-b-[#5B56EF]"
        placeholder={placeholder}
      />
    </div>
  );
};
export default UnderlineInput;

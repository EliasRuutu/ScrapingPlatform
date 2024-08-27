import Image from "next/image";
interface InputPropsType {
  type?: "text" | "password";
  image?: string;
  placeholder?: string;
  className?:string
}
const Input: React.FC<InputPropsType> = ({ type, image, placeholder, className }) => {
  return (
    <div className="w-[inherit] relative">
      <input
        type={type}
        placeholder={placeholder}
        className=" rounded-full w-full text-[12px] px-10 py-2 border-[1px] outline-none border-[#454545] focus:border-[#454545] focus:border-[1px]"
      />
      <div className="absolute top-[50%] -translate-y-[50%] left-[10px] flex flex-row justify-between gap-2">
        <Image
          src={`/assets/icons/${image}`}
          width={"16"}
          height={"16"}
          alt=""
        />
        <div className="w-[1px] h-[inherit] bg-[#454545]"></div>
      </div>
    </div>
  );
};
export default Input;

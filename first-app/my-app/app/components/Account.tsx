import Image, { StaticImageData } from "next/image";
interface AccountPropsType {
  avatar: StaticImageData | string;
}
const Account: React.FC<AccountPropsType> = ({ avatar }) => {
  return (
    <div className="w-fit rounded-full">
      <Image
        src={avatar}
        width={50}
        height={50}
        className=" shadow-md rounded-full cursor-pointer"
        alt=""
      />
      {/* <div className=" rounded-lg shadow-lg">
        asdfasdf
      </div> */}
    </div>
  );
};
export default Account;

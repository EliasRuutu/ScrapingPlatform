import Image from "next/image";
const UploadDiv: React.FC = () => {
  return (
    <div className="border-dotted border-[2px] rounded-lg p-2 flex flex-row justify-center items-center cursor-pointer">
      <Image src={"/assets/icons/upload_1.svg"} width={60} height={60} alt="" />
    </div>
  );
};
export default UploadDiv;
